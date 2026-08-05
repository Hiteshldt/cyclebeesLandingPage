import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import {
  EnquiryPayload,
  KIND_LABELS,
  normalisePhone,
  validateEnquiry,
} from '@/lib/enquiry';

/**
 * Delivers website enquiries to the Zoho inbox via Resend.
 *
 * Mail split, so this does not disturb the existing Zoho setup:
 *   - OUTBOUND (this route) goes through Resend from `website@cyclebees.in`.
 *   - INBOUND stays on Zoho's MX records — `mail@cyclebees.in` and the personal
 *     mailboxes keep receiving exactly as they do today.
 * `replyTo` is set to the enquirer, so hitting reply in Zoho answers the
 * customer directly rather than the no-reply sender.
 */

const resendApiKey = process.env.RESEND_API_KEY;
const CONTACT_INBOX = process.env.CONTACT_INBOX || 'mail@cyclebees.in';
const CONTACT_FROM =
  process.env.CONTACT_FROM || 'CycleBees Website <website@cyclebees.in>';

/**
 * In-memory rate limit. This resets on cold start and is per-instance, so it is
 * a speed bump against casual abuse rather than a hard guarantee — enough for a
 * contact form. Move to Upstash/Redis if this ever needs to be authoritative.
 */
const RATE_LIMIT = { windowMs: 60_000, max: 5 };
const hits = new Map<string, number[]>();

const isRateLimited = (ip: string): boolean => {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT.windowMs
  );
  recent.push(now);
  hits.set(ip, recent);

  // Stop the map growing without bound on a long-lived instance.
  if (hits.size > 5000) {
    hits.forEach((times, key) => {
      if (times.every((time) => now - time > RATE_LIMIT.windowMs)) {
        hits.delete(key);
      }
    });
  }

  return recent.length > RATE_LIMIT.max;
};

const clientIp = (req: NextApiRequest): string => {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') return forwarded.split(',')[0].trim();
  if (Array.isArray(forwarded)) return forwarded[0];
  return req.socket.remoteAddress ?? 'unknown';
};

/** Escapes user input before it goes anywhere near the HTML email body. */
const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const FIELD_LABELS: Record<string, string> = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
  subject: 'Subject',
  serviceType: 'Service',
  bikeType: 'Bike type',
  preferredDateTime: 'Preferred slot',
  address: 'Address',
  message: 'Message',
};

const buildRows = (payload: EnquiryPayload): [string, string][] =>
  Object.entries(FIELD_LABELS)
    .map(([key, label]): [string, string] => [
      label,
      String(payload[key as keyof EnquiryPayload] ?? '').trim(),
    ])
    .filter(([, value]) => value.length > 0);

const buildHtml = (payload: EnquiryPayload, rows: [string, string][]): string => {
  const cells = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:10px 14px;border-bottom:1px solid #FFF5CC;font:600 13px/1.5 Helvetica,Arial,sans-serif;color:#4A4A4A;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td>
        <td style="padding:10px 14px;border-bottom:1px solid #FFF5CC;font:400 14px/1.6 Helvetica,Arial,sans-serif;color:#2D3E50;">${escapeHtml(value).replace(/\n/g, '<br>')}</td>
      </tr>`
    )
    .join('');

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#FFF9E5;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #FFF5CC;">
    <tr>
      <td style="background:#FFD11E;padding:20px 24px;">
        <p style="margin:0;font:700 18px/1.3 Helvetica,Arial,sans-serif;color:#2D3E50;">CycleBees — ${escapeHtml(KIND_LABELS[payload.kind])}</p>
        <p style="margin:4px 0 0;font:400 13px/1.4 Helvetica,Arial,sans-serif;color:#2F2500;">New enquiry from the website</p>
      </td>
    </tr>
    <tr><td style="padding:8px 10px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${cells}</table></td></tr>
    <tr>
      <td style="padding:16px 24px;background:#FFF9E5;font:400 12px/1.6 Helvetica,Arial,sans-serif;color:#4A4A4A;">
        Reply to this email to answer ${escapeHtml(payload.name || 'the enquirer')} directly.
      </td>
    </tr>
  </table>
</body></html>`;
};

type ApiResponse = { ok: true } | { ok: false; error: string; details?: string[] };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  if (!resendApiKey) {
    // Log for the operator; never leak configuration detail to the caller.
    console.error('[contact] RESEND_API_KEY is not set');
    return res.status(500).json({
      ok: false,
      error: 'Email is not configured. Please call or WhatsApp us instead.',
    });
  }

  if (isRateLimited(clientIp(req))) {
    return res
      .status(429)
      .json({ ok: false, error: 'Too many messages. Please try again shortly.' });
  }

  const payload = (req.body ?? {}) as EnquiryPayload;

  /**
   * Spam gates. Both fail silently with a success response: telling a bot why
   * it was rejected just helps it adapt, and a real user never trips these.
   */
  if (typeof payload.company === 'string' && payload.company.trim().length > 0) {
    return res.status(200).json({ ok: true });
  }
  if (typeof payload.elapsedMs === 'number' && payload.elapsedMs < 1500) {
    return res.status(200).json({ ok: true });
  }

  const { ok, errors } = validateEnquiry(payload);
  if (!ok) {
    return res.status(400).json({
      ok: false,
      error: 'Please check the highlighted fields.',
      details: errors,
    });
  }

  const rows = buildRows(payload);
  const name = (payload.name ?? '').trim();
  const subjectBits = [KIND_LABELS[payload.kind], name || payload.email].filter(
    Boolean
  );

  try {
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_INBOX],
      // Replying in Zoho reaches the customer, not the no-reply sender.
      replyTo: payload.email?.trim() || undefined,
      subject: `${subjectBits.join(' — ')}`,
      html: buildHtml(payload, rows),
      // Plain-text alternative for clients that refuse HTML.
      text: rows.map(([label, value]) => `${label}: ${value}`).join('\n'),
      headers: payload.phone
        ? { 'X-CycleBees-Phone': normalisePhone(payload.phone) }
        : undefined,
    });

    if (error) {
      console.error('[contact] resend error', error);
      return res.status(502).json({
        ok: false,
        error: 'We could not send your message. Please WhatsApp us instead.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (caught) {
    console.error('[contact] unexpected error', caught);
    return res.status(500).json({
      ok: false,
      error: 'Something went wrong. Please WhatsApp or call us instead.',
    });
  }
}
