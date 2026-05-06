import Link from 'next/link';
import { type Lang, homeT } from '@/lib/i18n';
import { enabledLocales } from '@/lib/features';
import { contact } from '@/lib/contact';
import { BrainMark } from './icons';

const LANG_NATIVE: Record<Lang, string> = {
  ka: 'ქართული',
  en: 'English',
  ru: 'Русский',
  pt: 'Português',
};

export function Footer({ lang }: { lang: Lang }) {
  const t = homeT[lang];
  return (
    <footer id="contact" className="np-footer" data-screen-label="08 Footer">
      <div className="np-footer-inner np-home-footer-inner">
        <div className="np-footer-brand">
          <div className="lockup">
            <BrainMark size={32} stroke={4} color="currentColor" />
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '0.1em', fontSize: 14 }}>
              NEUROPHARM
            </span>
          </div>
          <p className="desc">{t.footer.desc}</p>
        </div>
        <div>
          <h3>{t.footer.quickLinks}</h3>
          <ul>
            <li><Link href={`/${lang}/services`}>{t.nav.services}</Link></li>
            <li><Link href={`/${lang}/about`}>{t.nav.about}</Link></li>
            <li><Link href={`/${lang}/sourcing`}>{t.nav.sourcing}</Link></li>
            <li><Link href={`/${lang}#quality`}>{t.nav.quality}</Link></li>
            <li><Link href={`/${lang}/contact`}>{t.footer.careers}</Link></li>
          </ul>
        </div>
        <div>
          <h3>{t.footer.contact}</h3>
          <ul>
            <li style={{ opacity: 0.85, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6 }}>
              {contact.address[lang]}
            </li>
            <li><a href={contact.email.href}>{contact.email.display}</a></li>
            <li><a href={contact.phone.href}>{contact.phone.display}</a></li>
          </ul>
        </div>
        <div>
          <h3>{t.footer.legal}</h3>
          <ul>
            <li style={{ opacity: 0.85, fontFamily: 'var(--font-sans)', fontSize: 14 }}>
              {t.trust.license} {t.trust.licenseValue}
            </li>
          </ul>
          <div className="np-lang" style={{ marginTop: 16, alignSelf: 'flex-start' }}>
            {enabledLocales.map((L) => (
              <Link
                key={L}
                href={`/${L}`}
                className={lang === L ? 'is-on' : ''}
                prefetch={false}
                aria-label={LANG_NATIVE[L]}
                lang={L}
              >
                {L.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="np-home-footer-bottom">
        <span>{t.footer.copy}</span>
        <span className="disclaimer">{t.footer.disclaimer}</span>
      </div>
    </footer>
  );
}
