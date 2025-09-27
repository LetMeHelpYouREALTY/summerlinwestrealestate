'use client';

import { useState } from 'react';
import styles from '../../app/page.module.css';

export default function VistasLeadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
        body: JSON.stringify({ name, email, phone, page: 'The Vistas' }),
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
            event_label: 'The Vistas',
          }
        );
      }
    } catch (_err: unknown) {
      setError('There was a problem submitting your request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return <div className={styles.successMessage}>Thank you! Your guide is on its way.</div>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="tel"
        placeholder="Your phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        disabled={loading}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Guide'}
      </button>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </form>
  );
}
