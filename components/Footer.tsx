import Link from 'next/link';
import { type Lang, LANGS, homeT } from '@/lib/i18n';
import { BrainMark } from './icons';

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
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li><Link href={`/${lang}/services`}>{t.nav.services}</Link></li>
            <li><Link href={`/${lang}/about`}>{t.nav.about}</Link></li>
            <li><Link href={`/${lang}/sourcing`}>{t.nav.sourcing}</Link></li>
            <li><Link href={`/${lang}#quality`}>{t.nav.quality}</Link></li>
            <li><Link href={`/${lang}/contact`}>{t.footer.careers}</Link></li>
          </ul>
        </div>
        <div>
          <h4>{t.footer.contact}</h4>
          <ul>
            <li style={{ opacity: 0.85, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6 }}>
              {t.footer.address}
            </li>
            <li><a href="mailto:info@neuropharmgeorgia.com">info@neuropharmgeorgia.com</a></li>
          </ul>
        </div>
        <div>
          <h4>{t.footer.legal}</h4>
          <ul>
            <li style={{ opacity: 0.85, fontFamily: 'var(--font-sans)', fontSize: 14 }}>
              {t.trust.license} {t.trust.licenseValue}
            </li>
          </ul>
          <div className="np-lang" style={{ marginTop: 16, alignSelf: 'flex-start' }}>
            {LANGS.map((L) => (
              <Link key={L} href={`/${L}`} className={lang === L ? 'is-on' : ''} prefetch={false}>
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
