'use client';

import { useState } from 'react';
import type { PagesT } from '@/lib/i18n';
import { ArrowRight } from '@/components/icons';

type ContactT = PagesT['contact'];

export function ContactForm({ t }: { t: ContactT }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="np-contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="row two">
        <label>
          <span>{t.form.name}</span>
          <input type="text" required />
        </label>
        <label>
          <span>{t.form.company}</span>
          <input type="text" />
        </label>
      </div>
      <div className="row two">
        <label>
          <span>{t.form.email}</span>
          <input type="email" required />
        </label>
        <label>
          <span>{t.form.phone}</span>
          <input type="tel" />
        </label>
      </div>
      <label>
        <span>{t.form.serviceLabel}</span>
        <select defaultValue="">
          <option value="" disabled>{t.form.servicePlaceholder}</option>
          {t.form.services.map((s, i) => (
            <option key={i} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <label>
        <span>{t.form.message}</span>
        <textarea rows={5} required />
      </label>
      <p className="consent">{t.form.consent}</p>
      <div className="actions">
        <button type="submit" className="np-btn np-btn-primary np-btn-lg">
          {t.form.submit}
          <span className="np-btn-icon"><ArrowRight /></span>
        </button>
        {submitted && <span className="submitted">✓</span>}
      </div>
    </form>
  );
}
