import type { Lang, PagesT } from '@/lib/i18n';
import { contact } from '@/lib/contact';
import { PageHero } from '@/components/PageHero';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ContactForm } from './ContactForm';

type ContactT = PagesT['contact'];

export function ContactInfo({ t, lang }: { t: ContactT; lang: Lang }) {
  return (
    <aside className="np-contact-info">
      <h2>{t.info.title}</h2>
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

const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=Kipshidze+St+5A+Tbilisi+Georgia&t=&z=15&ie=UTF8&iwloc=&output=embed';
const MAP_OPEN_HREF =
  'https://www.google.com/maps/search/?api=1&query=Kipshidze+St+5A+Tbilisi';

export function OfficeMap({ caption, openLabel }: { caption: string; openLabel: string }) {
  return (
    <div className="np-office-map">
      <iframe
        className="np-office-map-iframe"
        src={MAP_EMBED_SRC}
        title={caption}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="fullscreen"
      />
      <a
        className="np-office-map-link"
        href={MAP_OPEN_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${openLabel}: Kipshidze St 5A, Tbilisi`}
      >
        {openLabel} →
      </a>
    </div>
  );
}

export function ContactPage({ pT, lang }: { pT: ContactT; lang: Lang }) {
  return (
    <>
      <PageHero eyebrow={pT.eyebrow} headline={pT.headline} sub={pT.sub} />
      <section className="np-section np-contact-section" data-screen-label="01 Form + Info">
        <div className="np-contact-grid">
          <ContactForm t={pT.form} lang={lang} />
          <ContactInfo t={pT} lang={lang} />
        </div>
      </section>
      <ScrollReveal>
        <section className="np-section np-contact-mapsec" data-screen-label="02 Map">
          <OfficeMap caption={pT.mapCaption} openLabel={pT.openInMaps} />
        </section>
      </ScrollReveal>
    </>
  );
}
