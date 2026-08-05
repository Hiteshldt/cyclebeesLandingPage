import { useCallback, useRef, useState } from 'react';
import {
  EnquiryKind,
  EnquiryPayload,
  validateEnquiry,
} from '@/lib/enquiry';

export type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

/**
 * Drives every enquiry form on the site: local state, client-side validation,
 * the POST to `/api/contact`, and the honeypot/timing signals the API uses to
 * drop bots.
 *
 * One hook rather than four copies means the contact form, the booking form,
 * the quick enquiry and the newsletter all report errors and success the same
 * way, and a fix to submission logic lands everywhere at once.
 */
export const useEnquiryForm = <T extends Record<string, string>>(
  kind: EnquiryKind,
  initialValues: T
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  /** Honeypot field — hidden from people, irresistible to bots. */
  const [company, setCompany] = useState('');
  const mountedAt = useRef(Date.now());

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setValues((prev) => ({ ...prev, [name]: value }));
      setStatus((prev) => (prev === 'error' ? 'idle' : prev));
    },
    []
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    mountedAt.current = Date.now();
  }, [initialValues]);

  const submit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (status === 'sending') return;

      const payload: EnquiryPayload = {
        ...values,
        kind,
        company,
        elapsedMs: Date.now() - mountedAt.current,
      };

      // Mirror the server rules so obvious mistakes never cost a round-trip.
      const { ok, errors } = validateEnquiry(payload);
      if (!ok) {
        setStatus('error');
        setErrorMessage(errors[0] ?? 'Please check the form and try again.');
        return;
      }

      setStatus('sending');
      setErrorMessage(null);

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const body = await response.json().catch(() => null);

        if (!response.ok || !body?.ok) {
          setStatus('error');
          setErrorMessage(
            body?.error ?? 'We could not send that. Please try WhatsApp instead.'
          );
          return;
        }

        setStatus('sent');
        reset();
      } catch {
        setStatus('error');
        setErrorMessage(
          'Network error. Please check your connection, or WhatsApp us instead.'
        );
      }
    },
    [company, kind, reset, status, values]
  );

  return {
    values,
    status,
    errorMessage,
    handleChange,
    submit,
    reset,
    setStatus,
    /** Spread onto a visually hidden input to arm the honeypot. */
    honeypotProps: {
      name: 'company',
      value: company,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setCompany(e.target.value),
      tabIndex: -1,
      autoComplete: 'off',
      'aria-hidden': true as const,
    },
  };
};

export default useEnquiryForm;
