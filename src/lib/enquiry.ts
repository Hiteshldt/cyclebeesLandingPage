/**
 * Shared enquiry contract between the browser forms and `/api/contact`.
 *
 * The same validation rules run on both sides: the client uses them for instant
 * feedback, the server treats them as the real gate. Never trust the client
 * copy — anything can POST to the endpoint.
 */

export type EnquiryKind = 'contact' | 'booking' | 'quick' | 'newsletter';

export interface EnquiryPayload {
  kind: EnquiryKind;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  serviceType?: string;
  bikeType?: string;
  preferredDateTime?: string;
  address?: string;
  /** Honeypot. Must stay empty — bots fill every field they find. */
  company?: string;
  /** Milliseconds the form was on screen before submit. */
  elapsedMs?: number;
}

export const MAX_LENGTHS: Record<string, number> = {
  name: 100,
  email: 200,
  phone: 20,
  subject: 120,
  message: 4000,
  serviceType: 120,
  bikeType: 60,
  preferredDateTime: 60,
  address: 500,
};

/** Deliberately permissive — the real check is whether Resend can deliver it. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Indian mobile numbers, tolerant of +91, spaces and hyphens. */
export const normalisePhone = (raw: string): string =>
  raw.replace(/[\s\-()]/g, '').replace(/^(\+?91)/, '');

export const isValidPhone = (raw: string): boolean =>
  /^[6-9]\d{9}$/.test(normalisePhone(raw));

export const isValidEmail = (raw: string): boolean =>
  EMAIL_RE.test(raw.trim()) && raw.trim().length <= MAX_LENGTHS.email;

/**
 * Which fields each form must supply. Keeping this in one table means the
 * client and the API can never disagree about what "complete" means.
 */
const REQUIRED: Record<EnquiryKind, (keyof EnquiryPayload)[]> = {
  contact: ['name', 'email', 'phone', 'subject', 'message'],
  booking: ['name', 'phone', 'serviceType', 'bikeType', 'address'],
  quick: ['name', 'phone', 'serviceType'],
  newsletter: ['email'],
};

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}

export const validateEnquiry = (payload: EnquiryPayload): ValidationResult => {
  const errors: string[] = [];

  if (!REQUIRED[payload.kind]) {
    return { ok: false, errors: ['Unknown enquiry type.'] };
  }

  for (const field of REQUIRED[payload.kind]) {
    const value = payload[field];
    if (typeof value !== 'string' || value.trim().length === 0) {
      errors.push(`${field} is required.`);
    }
  }

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    const value = payload[field as keyof EnquiryPayload];
    if (typeof value === 'string' && value.length > limit) {
      errors.push(`${field} is too long (max ${limit} characters).`);
    }
  }

  if (payload.email && !isValidEmail(payload.email)) {
    errors.push('Enter a valid email address.');
  }

  if (payload.phone && !isValidPhone(payload.phone)) {
    errors.push('Enter a valid 10-digit Indian mobile number.');
  }

  return { ok: errors.length === 0, errors };
};

/** Human-readable label used in the email subject line. */
export const KIND_LABELS: Record<EnquiryKind, string> = {
  contact: 'Contact form',
  booking: 'Service booking',
  quick: 'Quick enquiry',
  newsletter: 'Newsletter signup',
};
