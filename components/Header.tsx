'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Lang, LANGS, homeT } from '@/lib/i18n';
import { features } from '@/lib/features';
import { BrainMark } from './icons';
import { ThemeToggle } from './ThemeToggle';

type NavId = 'home' | 'about' | 'services' | 'sourcing' | 'quality' | 'news' | 'contact';

const ALL_NAV_IDS: NavId[] = ['home', 'about', 'services', 'sourcing', 'quality', 'news', 'contact'];
const NAV_IDS: NavId[] = ALL_NAV_IDS.filter((id) => id !== 'news' || features.news);

function hrefFor(lang: Lang, id: NavId): string {
  switch (id) {
    case 'home': return `/${lang}#home`;
    case 'about': return `/${lang}/about`;
    case 'services': return `/${lang}/services`;
    case 'sourcing': return `/${lang}/sourcing`;
    case 'quality': return `/${lang}#quality`;
    case 'news': return `/${lang}#news`;
    case 'contact': return `/${lang}/contact`;
  }
}

function pageIdFromPath(pathname: string | null, lang: Lang): NavId {
  if (!pathname) return 'home';
  const stripped = pathname.replace(`/${lang}`, '') || '/';
  if (stripped.startsWith('/about')) return 'about';
  if (stripped.startsWith('/services')) return 'services';
  if (stripped.startsWith('/sourcing')) return 'sourcing';
  if (stripped.startsWith('/contact')) return 'contact';
  return 'home';
}

export function Header({ lang }: { lang: Lang }) {
  const t = homeT[lang];
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const currentPage = pageIdFromPath(pathname, lang);

  return (
    <header className="np-header">
      <div className="np-header-inner">
        <Link className="np-logo" href={`/${lang}`} onClick={() => setOpen(false)}>
          <BrainMark size={36} stroke={4} color="currentColor" />
          <span className="np-wordmark">NEUROPHARM</span>
        </Link>
        <nav className="np-nav np-nav-desktop" style={{ justifyContent: 'center' }}>
          {NAV_IDS.map((id) => (
            <Link key={id} href={hrefFor(lang, id)} className={id === currentPage ? 'is-active' : ''}>
              {t.nav[id]}
            </Link>
          ))}
        </nav>
        <div className="np-header-tools">
          <DesktopLangs current={lang} />
          <ThemeToggle />
          <button
            className="np-burger"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`np-mobile-drawer ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)}>
        <nav className="np-mobile-nav" onClick={(e) => e.stopPropagation()}>
          {NAV_IDS.map((id) => (
            <Link
              key={id}
              href={hrefFor(lang, id)}
              className={id === currentPage ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {t.nav[id]}
            </Link>
          ))}
          <MobileLangs current={lang} onPick={() => setOpen(false)} />
        </nav>
      </div>
    </header>
  );
}

function DesktopLangs({ current }: { current: Lang }) {
  return (
    <div className="np-lang np-lang-desktop">
      {LANGS.map((L) => (
        <Link key={L} href={`/${L}`} className={current === L ? 'is-on' : ''} prefetch={false}>
          {L.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

function MobileLangs({ current, onPick }: { current: Lang; onPick: () => void }) {
  return (
    <div className="np-mobile-langs">
      {LANGS.map((L) => (
        <Link key={L} href={`/${L}`} className={current === L ? 'is-on' : ''} onClick={onPick} prefetch={false}>
          {L.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
