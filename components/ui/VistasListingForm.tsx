'use client';

import { useId, useState } from 'react';

interface VistasListingFormProps {
  formId?: string;
}

export default function VistasListingForm({ formId }: VistasListingFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const reactId = useId();
  const idPrefix = formId || reactId;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone.match(/^[0-9\-+()\s]{7,}$/)) {
      setError('Please enter a valid phone number.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, page: 'Vistas Listing' }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
      if (
        typeof window !== 'undefined' &&
        typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === 'function'
      ) {
        (window as Window & { gtag: (...args: unknown[]) => void }).gtag(
          'event',
          'lead_form_submit',
          {
            event_category: 'Lead',
            event_label: 'Vistas Listing',
          }
        );
      }
    } catch (_err: unknown) {
      setError('There was a problem submitting your request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const _isNameInvalid = !!error && !name.trim();
  const _isEmailInvalid = !!error && !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
  const _isPhoneInvalid = !!error && !phone.match(/^[0-9\-+()\s]{7,}$/);

  if (submitted) {
    return (
      <div
        className="text-success-600 bg-success-50 rounded-xl shadow-md px-6 py-8 text-center font-semibold text-lg"
        role="status"
        tabIndex={-1}
      >
        Thank you! We&apos;ll be in touch soon.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-8 min-h-[240px] flex flex-col gap-6 w-full max-w-xl mx-auto"
      style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
      aria-describedby={error ? `${idPrefix}-error` : undefined}
    >
      <div className="form-group">
        <label htmlFor={`${idPrefix}-name`} className="form-label">
          Name
        </label>
        <input
          id={`${idPrefix}-name`}
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
          aria-invalid="true"
          autoComplete="name"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${idPrefix}-email`} className="form-label">
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          aria-invalid="true"
          autoComplete="email"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`${idPrefix}-phone`} className="form-label">
          Phone
        </label>
        <input
          id={`${idPrefix}-phone`}
          type="tel"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          disabled={loading}
          aria-invalid="true"
          autoComplete="tel"
          className="form-input"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full py-3 text-base font-semibold rounded-xl shadow-md transition-colors"
      >
        {loading ? 'Sending...' : 'Request Info'}
      </button>
      {error && (
        <div
          id={`${idPrefix}-error`}
          className="form-error text-error-600 mt-2 text-sm flex items-center gap-2"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}
    </form>
  );
}
