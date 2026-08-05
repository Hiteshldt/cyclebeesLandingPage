import React from 'react';
import Icon from '@/components/Icon';
import { SubmitStatus } from '@/hooks/useEnquiryForm';
import { CONTACT_INFO } from '@/constants';

/** Visually hidden honeypot. Off-screen rather than `display:none`, which some
 *  bots detect and skip. */
export const Honeypot: React.FC<Record<string, unknown>> = (props) => (
  <div className="absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden" aria-hidden="true">
    <label htmlFor="company-website">Company website</label>
    <input id="company-website" type="text" {...props} />
  </div>
);

/** Inline status line shared by every form. */
export const FormStatus: React.FC<{
  status: SubmitStatus;
  errorMessage: string | null;
  tone?: 'light' | 'dark';
}> = ({ status, errorMessage, tone = 'light' }) => {
  if (status === 'idle' || status === 'sending') return null;

  const sent = status === 'sent';
  const base = 'mt-3 flex items-start gap-2 rounded-lg px-3 py-2 text-xs';
  const styles = sent
    ? tone === 'dark'
      ? 'bg-green-400/20 text-green-100'
      : 'bg-green-50 text-green-800 border border-green-200'
    : tone === 'dark'
      ? 'bg-red-400/20 text-red-100'
      : 'bg-red-50 text-red-800 border border-red-200';

  return (
    <p className={`${base} ${styles}`} role="status" aria-live="polite">
      <Icon
        name={sent ? 'check-circle' : 'siren'}
        className="w-4 h-4 flex-shrink-0 mt-px"
      />
      <span>
        {sent
          ? "Thanks — your message is on its way. We'll reply shortly."
          : errorMessage}
      </span>
    </p>
  );
};

/** WhatsApp escape hatch shown when email delivery fails. */
export const WhatsAppFallback: React.FC<{ message?: string }> = ({
  message = "Hello CycleBees! I'm interested in your services.",
}) => (
  <a
    href={`https://wa.me/${CONTACT_INFO.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 text-xs font-semibold underline underline-offset-2 hover:no-underline"
  >
    Send on WhatsApp instead
  </a>
);

/** Submit button with a built-in pending state. */
export const SubmitButton: React.FC<{
  status: SubmitStatus;
  children: React.ReactNode;
  pendingLabel?: string;
  className?: string;
}> = ({ status, children, pendingLabel = 'Sending…', className = '' }) => (
  <button
    type="submit"
    disabled={status === 'sending'}
    className={`inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
  >
    {status === 'sending' && (
      <svg
        className="w-4 h-4 animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
        <path
          d="M21 12a9 9 0 0 0-9-9"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    )}
    {status === 'sending' ? pendingLabel : children}
  </button>
);
