import type { Lang, PagesT } from '@/lib/i18n';
import { contact } from '@/lib/contact';
import { PageHero } from '@/components/PageHero';
import { ContactForm } from './ContactForm';

type ContactT = PagesT['contact'];

export function ContactInfo({ t, lang }: { t: ContactT; lang: Lang }) {
  return (
    <aside className="np-contact-info">
      <h3>{t.info.title}</h3>
      <dl>
        <div>
          <dt>{t.info.addressLabel}</dt>
          <dd className="multiline">{contact.address[lang]}</dd>
        </div>
        <div>
          <dt>{t.info.emailLabel}</dt>
          <dd><a href={contact.email.href}>{contact.email.display}</a></dd>
        </div>
        <div>
          <dt>{t.info.phoneLabel}</dt>
          <dd><a href={contact.phone.href}>{contact.phone.display}</a></dd>
        </div>
        <div>
          <dt>{t.info.hoursLabel}</dt>
          <dd className="multiline">{`${contact.hours[lang]}\n${contact.hours.time}`}</dd>
        </div>
        <div>
          <dt>{t.info.licenseLabel}</dt>
          <dd className="mono">{contact.license}</dd>
        </div>
      </dl>
    </aside>
  );
}

export function TbilisiMap({ caption }: { caption: string }) {
  return (
    <div className="np-map-frame">
      <span className="corner-mark">MAP · TBILISI · 41.71 / 44.79</span>
      <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <pattern id="mapgrid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0v32" fill="none" stroke="currentColor" strokeOpacity="0.10" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="600" height="380" fill="url(#mapgrid)" />
        <path d="M-20 230 C 120 200, 220 280, 340 240 S 540 180, 640 220" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="2.2" />
        <path d="M-20 240 C 120 210, 220 290, 340 250 S 540 190, 640 230" fill="none" stroke="currentColor" strokeOpacity="0.10" strokeWidth="2.2" />
        <g fill="currentColor" fillOpacity="0.08">
          <rect x="80" y="80" width="120" height="80" />
          <rect x="220" y="60" width="100" height="120" />
          <rect x="340" y="100" width="140" height="70" />
          <rect x="120" y="280" width="180" height="60" />
          <rect x="320" y="270" width="160" height="80" />
        </g>
        <g transform="translate(300 200)">
          <circle r="48" fill="var(--accent)" fillOpacity="0.10" />
          <circle r="24" fill="var(--accent)" fillOpacity="0.20" />
          <circle r="9" fill="var(--accent)" />
          <circle r="9" fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6">
            <animate attributeName="r" from="9" to="40" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2.4s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
      <div className="np-map-caption">{caption}</div>
    </div>
  );
}

export function ContactPage({ pT, lang }: { pT: ContactT; lang: Lang }) {
  return (
    <main>
      <PageHero eyebrow={pT.eyebrow} headline={pT.headline} sub={pT.sub} />
      <section className="np-section np-contact-section" data-screen-label="01 Form + Info">
        <div className="np-contact-grid">
          <ContactForm t={pT.form} />
          <ContactInfo t={pT} lang={lang} />
        </div>
      </section>
      <section className="np-section np-contact-mapsec" data-screen-label="02 Map">
        <TbilisiMap caption={pT.mapCaption} />
      </section>
    </main>
  );
}
