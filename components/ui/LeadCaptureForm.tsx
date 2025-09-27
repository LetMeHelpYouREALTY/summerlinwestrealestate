'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './LeadCaptureForm.module.css';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyInterest: string;
  privacyConsent: boolean;
}

interface LeadCaptureFormProps {
  variant?: 'inline' | 'modal';
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
  source?: string;
  formId?: string;
}

const propertyInterests = [
  { value: '', label: 'Select your interest...' },
  { value: 'buy', label: 'Buy a Home' },
  { value: 'sell', label: 'Sell a Home' },
  { value: 'rent', label: 'Rent a Home' },
  { value: 'invest', label: 'Investment Property' },
  { value: 'market-report', label: 'Market Report' },
  { value: 'valuation', label: 'Property Valuation' },
  { value: 'consultation', label: 'Free Consultation' },
  { value: 'the-vistas', label: 'The Vistas Community' },
  { value: 'other', label: 'Other' },
];

export default function LeadCaptureForm({
  variant = 'inline',
  title = 'Get Your Free Summerlin West Market Report',
  subtitle = 'Stay ahead of the market with our exclusive insights',
  onSuccess,
  onClose,
  isOpen = true,
  source = 'Website',
  formId = 'main',
}: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<LeadFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      propertyInterest: '',
      privacyConsent: false,
    },
  });

  const _privacyConsent = watch('privacyConsent');

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          page: source,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      reset();
      
      // Google Analytics tracking
      if (
        typeof window !== 'undefined' &&
        typeof (window as Window & { gtag?: (...args: unknown[]) => void; userType?: string })
          .gtag === 'function'
      ) {
        const win = window as Window & { gtag: (...args: unknown[]) => void; userType?: string };
        win.gtag('event', 'lead_form_submit', {
          event_category: 'Lead',
          event_label: source,
          cd1: win.userType || 'unknown',
          cd2: 'LeadCaptureForm',
          cd3: 'submit',
          cd4: 1,
        });
        win.gtag('event', 'generate_lead', {
          value: 1,
          currency: 'USD',
          form_location: source || 'unknown',
          cd1: win.userType || 'unknown',
          cd2: 'LeadCaptureForm',
          cd3: 'submit',
          cd4: 1,
        });
      }

      // Facebook Pixel tracking
      if (typeof window !== 'undefined' && typeof (window as Window & { fbq?: (action: string, event: string, data?: Record<string, unknown>) => void }).fbq === 'function') {
        (window as Window & { fbq: (action: string, event: string, data?: Record<string, unknown>) => void }).fbq('track', 'Lead', {
          content_name: 'Lead Form Submission',
          content_category: 'Real Estate',
          value: 100,
          currency: 'USD',
          content_ids: [formId],
        });
      }
      onSuccess?.();
      if (variant === 'modal') {
        setTimeout(() => {
          onClose?.();
        }, 3000);
      }
    } catch (error: unknown) {
      setSubmitStatus('error');
      setErrorMessage(
        error.message || 'There was a problem submitting your request. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles['lead-capture-form']}
    >
      <div className={styles['form-header']}>
        <h2>{title}</h2>
        {subtitle && <p className={styles['form-subtitle']}>{subtitle}</p>}
      </div>

      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={styles['success-message']}
        >
          <div className={styles['success-icon']}>
            <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3>Thank You!</h3>
          <p>
            Your request has been submitted successfully. We&apos;ll be in touch within 24 hours.
          </p>
          {variant === 'inline' && (
            <button onClick={() => setSubmitStatus('idle')} className={styles['submit-button']}>
              Submit Another Request
            </button>
          )}
        </motion.div>
      ) : (
        <div className="formContainer">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className={styles['form-grid']}>
              <div className={styles['form-group']}>
                <label htmlFor={`name-${formId}`}>Full Name *</label>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      id={`name-${formId}`}
                      placeholder="Enter your full name"
                      className={`${styles.input} ${errors.name ? styles.error : ''}`}
                      disabled={isSubmitting}
                      {...(errors.name ? { 'aria-invalid': 'true' } : {})}
                      aria-describedby={errors.name ? `name-error-${formId}` : undefined}
                    />
                  )}
                />
                {errors.name && (
                  <span
                    id={`name-error-${formId}`}
                    className={styles['error-message']}
                    role="alert"
                  >
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className={styles['form-group']}>
                <label htmlFor={`email-${formId}`}>Email Address *</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address',
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      id={`email-${formId}`}
                      placeholder="Enter your email address"
                      className={`${styles.input} ${errors.email ? styles.error : ''}`}
                      disabled={isSubmitting}
                      {...(errors.email ? { 'aria-invalid': 'true' } : {})}
                      aria-describedby={errors.email ? `email-error-${formId}` : undefined}
                    />
                  )}
                />
                {errors.email && (
                  <span
                    id={`email-error-${formId}`}
                    className={styles['error-message']}
                    role="alert"
                  >
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className={styles['form-group']}>
                <label htmlFor={`phone-${formId}`}>Phone Number *</label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[+]?[1-9][\d]{0,15}$/,
                      message: 'Please enter a valid phone number',
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      id={`phone-${formId}`}
                      placeholder="Enter your phone number"
                      className={`${styles.input} ${errors.phone ? styles.error : ''}`}
                      disabled={isSubmitting}
                      {...(errors.phone ? { 'aria-invalid': 'true' } : {})}
                      aria-describedby={errors.phone ? `phone-error-${formId}` : undefined}
                    />
                  )}
                />
                {errors.phone && (
                  <span
                    id={`phone-error-${formId}`}
                    className={styles['error-message']}
                    role="alert"
                  >
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className={styles['form-group']}>
                <label htmlFor={`propertyInterest-${formId}`}>Property Interest *</label>
                <Controller
                  name="propertyInterest"
                  control={control}
                  rules={{ required: 'Please select your property interest' }}
                  render={({ field }) => (
                    <select
                      {...field}
                      id={`propertyInterest-${formId}`}
                      className={`${styles.select} ${errors.propertyInterest ? styles.error : ''}`}
                      disabled={isSubmitting}
                      {...(errors.propertyInterest ? { 'aria-invalid': 'true' } : {})}
                      aria-describedby={
                        errors.propertyInterest ? `propertyInterest-error-${formId}` : undefined
                      }
                    >
                      {propertyInterests.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.propertyInterest && (
                  <span
                    id={`propertyInterest-error-${formId}`}
                    className={styles['error-message']}
                    role="alert"
                  >
                    {errors.propertyInterest.message}
                  </span>
                )}
              </div>

              <div className={`${styles['form-group']} ${styles['full-width']}`}>
                <label htmlFor={`message-${formId}`}>Message (Optional)</label>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <textarea
                      {...field}
                      id={`message-${formId}`}
                      rows={4}
                      placeholder="Tell us about your real estate needs..."
                      className={styles.textarea}
                      disabled={isSubmitting}
                      {...(errors.message ? { 'aria-invalid': 'true' } : {})}
                      aria-describedby={errors.message ? `message-error-${formId}` : undefined}
                    />
                  )}
                />
                {errors.message && (
                  <span
                    id={`message-error-${formId}`}
                    className={styles['error-message']}
                    role="alert"
                  >
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className={`${styles['form-group']} ${styles['full-width']}`}>
                <Controller
                  name="privacyConsent"
                  control={control}
                  rules={{ required: 'You must agree to our privacy policy' }}
                  render={({ field }) => (
                    <label className={styles['checkbox-label']}>
                      <input
                        {...(({ value, ...rest }) => rest)(field)}
                        type="checkbox"
                        checked={field.value}
                        disabled={isSubmitting}
                      />
                      <span className={styles.checkmark}></span>I agree to the{' '}
                      <a
                        href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>{' '}
                      and consent to being contacted about real estate services. *
                    </label>
                  )}
                />
                {errors.privacyConsent && (
                  <span className={styles['error-message']}>{errors.privacyConsent.message}</span>
                )}
              </div>
            </div>

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles['error-banner']}
              >
                {errorMessage}
              </motion.div>
            )}

            <div className={styles['form-actions']}>
              <button
                type="submit"
                disabled={isSubmitting || !_privacyConsent}
                className={styles['submit-button']}
              >
                {isSubmitting ? (
                  <span className={styles.loading}>
                    <svg className={styles.spinner} viewBox="0 0 24 24">
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="31.416"
                        strokeDashoffset="31.416"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          dur="2s"
                          values="0 31.416;15.708 15.708;0 31.416"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="stroke-dashoffset"
                          dur="2s"
                          values="0;-15.708;-31.416"
                          repeatCount="indefinite"
                        />
                      </circle>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Get Your Free Report'
                )}
              </button>
            </div>

            <div className={styles['form-footer']}>
              <p className={styles['privacy-notice']}>
                <small>
                  By submitting this form, you agree to receive communications from Summerlin West
                  Real Estate. We respect your privacy and will never share your information with
                  third parties.
                </small>
              </p>
            </div>
          </form>
        </div>
      )}
    </motion.div>
  );

  if (variant === 'modal') {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles['modal-overlay']}
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={styles['modal-content']}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles['modal-close']} onClick={onClose} aria-label="Close">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
              {formContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return formContent;
}
