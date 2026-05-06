'use client';

import { useState, type MouseEvent } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type Lang, homeT } from '@/lib/i18n';
import { features, enabledLocales } from '@/lib/features';
import { useScrollspy } from '@/lib/hooks/useScrollspy';
import { BrainMark } from './icons';
import { ThemeToggle } from './ThemeToggle';

type NavId = 'home' | 'about' | 'services' | 'sourcing' | 'quality' | 'news' | 'contact';

const ALL_NAV_IDS: NavId[] = ['home', 'about', 'services', 'sourcing', 'quality', 'news', 'contact'];
const NAV_IDS: NavId[] = ALL_NAV_IDS.filter((id) => id !== 'news' || features.news);

/** Native names — used as aria-labels on the language switcher pills so screen
 *  readers say "ქართული" / "English" instead of just the 2-letter code. */
const LANG_NATIVE: Record<Lang, string> = {
  ka: 'ქართული',
  en: 'English',
  ru: 'Русский',
  pt: 'Português',
};

/**
 * Section IDs to observe for scrollspy on the home page.
 * DOM order matters — useScrollspy returns the *topmost* visible ID.
 *
 * 'partners' is observed but mapped to no nav item (returns null), so the
 * Partners CTA scrolling into view clears the nav highlight as desired.
 */
const HOME_SCROLLSPY_IDS = ['home', 'services', 'sourcing', 'about', 'quality', 'partners', 'news'] as const;

/** Mapping section-id -> nav-id. Sections not in this map yield no highlight. */
const SECTION_TO_NAV: Partial<Record<string, NavId>> = {
  home: 'home',
  about: 'about',
  services: 'services',
  sourcing: 'sourcing',
  quality: 'quality',
};

/** Nav IDs whose home-page click should smooth-scroll instead of navigating. */
const SCROLL_NAV_IDS: ReadonlySet<NavId> = new Set(['home', 'about', 'services', 'sourcing', 'quality']);

function hrefFor(lang: Lang, id: NavId, isHome: boolean): string {
  switch (id) {
    case 'home': return `/${lang}#home`;
    case 'about': return isHome ? `/${lang}#about` : `/${lang}/about`;
    case 'services': return isHome ? `/${lang}#services` : `/${lang}/services`;
    case 'sourcing': return isHome ? `/${lang}#sourcing` : `/${lang}/sourcing`;
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
  const isHome = pathname === `/${lang}`;

  const activeSection = useScrollspy(HOME_SCROLLSPY_IDS, isHome);
  const activeNav: NavId | null = isHome
    ? (activeSection ? SECTION_TO_NAV[activeSection] ?? null : 'home')
    : pageIdFromPath(pathname, lang);

  /** On the home page, sections matching SCROLL_NAV_IDS are scrolled to instead
   *  of navigated to. URL is updated via history.pushState so direct links
   *  /[lang]#section still work and the back button keeps working too. */
  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, id: NavId) => {
    if (!isHome || !SCROLL_NAV_IDS.has(id)) return;
    const targetId = id === 'home' ? 'home' : id;
    const el = document.getElementById(targetId);
    if (!el) return;
    e.preventDefault();
    setOpen(false);
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
    if (typeof window !== 'undefined') {
      window.history.replaceState(null, '', `/${lang}#${targetId}`);
    }
  };

  return (
    <header className="np-header">
      <div className="np-header-inner">
        <Link className="np-logo" href={`/${lang}`} onClick={() => setOpen(false)}>
          <BrainMark size={36} stroke={4} color="currentColor" />
          <span className="np-wordmark">NEUROPHARM</span>
        </Link>
        <nav className="np-nav np-nav-desktop" style={{ justifyContent: 'center' }}>
          {NAV_IDS.map((id) => (
            <Link
              key={id}
              href={hrefFor(lang, id, isHome)}
              className={id === activeNav ? 'is-active' : ''}
              onClick={(e) => handleNavClick(e, id)}
            >
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
              href={hrefFor(lang, id, isHome)}
              className={id === activeNav ? 'is-active' : ''}
              onClick={(e) => {
                handleNavClick(e, id);
                if (!e.defaultPrevented) setOpen(false);
              }}
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
      {enabledLocales.map((L) => (
        <Link
          key={L}
          href={`/${L}`}
          className={current === L ? 'is-on' : ''}
          prefetch={false}
          aria-label={LANG_NATIVE[L]}
          lang={L}
        >
          {L.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

function MobileLangs({ current, onPick }: { current: Lang; onPick: () => void }) {
  return (
    <div className="np-mobile-langs">
      {enabledLocales.map((L) => (
        <Link
          key={L}
          href={`/${L}`}
          className={current === L ? 'is-on' : ''}
          onClick={onPick}
          prefetch={false}
          aria-label={LANG_NATIVE[L]}
          lang={L}
        >
          {L.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
