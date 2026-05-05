'use client';

import { useRef, useState, type FormEvent } from 'react';
import type { PagesT } from '@/lib/i18n';
import { ArrowRight } from '@/components/icons';

type ContactFormT = PagesT['contact']['form'];
type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm({ t }: { t: ContactFormT }) {
  const [status, setStatus] = useState<Status>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') ?? ''),
      company: String(data.get('company') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      serviceType: String(data.get('serviceType') ?? ''),
      message: String(data.get('message') ?? ''),
      website: String(data.get('website') ?? ''),
    };

    setStatus('submitting');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        setStatus('error');
        return;
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  const submitting = status === 'submitting';

  return (
    <form ref={formRef} className="np-contact-form" onSubmit={onSubmit} noValidate>
      <div className="row two">
        <label>
          <span>{t.name}</span>
          <input type="text" name="name" required maxLength={200} disabled={submitting} />
        </label>
        <label>
          <span>{t.company}</span>
          <input type="text" name="company" maxLength={200} disabled={submitting} />
        </label>
      </div>
      <div className="row two">
        <label>
          <span>{t.email}</span>
          <input type="email" name="email" required maxLength={254} disabled={submitting} />
        </label>
        <label>
          <span>{t.phone}</span>
          <input type="tel" name="phone" maxLength={50} disabled={submitting} />
        </label>
      </div>
      <label>
        <span>{t.serviceLabel}</span>
        <select name="serviceType" defaultValue="" disabled={submitting}>
          <option value="" disabled>{t.servicePlaceholder}</option>
          {t.services.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <label>
        <span>{t.message}</span>
        <textarea name="message" rows={5} required maxLength={5000} disabled={submitting} />
      </label>

      {/* Honeypot — hidden from users, filled by bots. Real submissions leave this empty. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="consent">{t.consent}</p>
      <div className="actions">
        <button type="submit" className="np-btn np-btn-primary np-btn-lg" disabled={submitting}>
          {submitting ? t.submitting : t.submit}
          <span className="np-btn-icon"><ArrowRight /></span>
        </button>
        {status === 'success' && <span className="form-msg form-msg-success">{t.success}</span>}
        {status === 'error' && <span className="form-msg form-msg-error">{t.error}</span>}
      </div>
    </form>
  );
}
