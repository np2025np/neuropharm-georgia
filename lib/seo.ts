import type { Metadata } from 'next';
import { LANGS, type Lang } from './i18n';

export const SITE_URL = 'https://neuropharmgeorgia.com';
export const SITE_NAME = 'Neuropharm Georgia';
export const OG_IMAGE = '/og-image.png';

export const LOCALE_TAG: Record<Lang, string> = {
  ka: 'ka_GE',
  en: 'en_US',
  ru: 'ru_RU',
  pt: 'pt_PT',
};

export const SITE_TITLES: Record<Lang, string> = {
  ka: 'Neuropharm Georgia — ფარმაცევტული იმპორტი და დისტრიბუცია',
  en: 'Neuropharm Georgia — Pharmaceutical Import and Distribution',
  ru: 'Neuropharm Georgia — Фармацевтический импорт и дистрибуция',
  pt: 'Neuropharm Georgia — Importação e Distribuição Farmacêutica',
};

export const TAGLINES: Record<Lang, string> = {
  ka: 'Neuropharm Georgia — ფარმაცევტული მედიკამენტების იმპორტი და დისტრიბუცია საქართველოში. ევროპა და ინდოეთი.',
  en: 'Neuropharm Georgia — pharmaceutical import and distribution in Georgia. European and Indian sourcing for pharmacies and hospitals.',
  ru: 'Neuropharm Georgia — импорт и дистрибуция фармацевтических препаратов в Грузии. Европейское и индийское происхождение для аптек и больниц.',
  pt: 'Neuropharm Georgia — importação e distribuição farmacêutica na Geórgia. Origem europeia e indiana para farmácias e hospitais.',
};

export const KEYWORDS: Record<Lang, string[]> = {
  ka: [
    'ფარმაცევტული იმპორტი',
    'ფარმაცევტული დისტრიბუცია',
    'მედიკამენტები',
    'ევროპული მედიკამენტები',
    'ინდური მედიკამენტები',
    'Neuropharm Georgia',
    'აფთიაქი',
    'საავადმყოფო',
  ],
  en: [
    'pharmaceutical import',
    'pharmaceutical distribution',
    'medicines Georgia',
    'European pharmaceuticals',
    'Indian pharmaceuticals',
    'Neuropharm Georgia',
    'pharmacy supply',
    'hospital supply',
  ],
  ru: [
    'фармацевтический импорт',
    'фармацевтическая дистрибуция',
    'лекарства Грузия',
    'европейские лекарства',
    'индийские лекарства',
    'Neuropharm Georgia',
    'снабжение аптек',
    'снабжение больниц',
  ],
  pt: [
    'importação farmacêutica',
    'distribuição farmacêutica',
    'medicamentos Geórgia',
    'farmacêuticos europeus',
    'farmacêuticos indianos',
    'Neuropharm Georgia',
    'fornecimento de farmácias',
    'fornecimento de hospitais',
  ],
};

export type PageId = 'home' | 'about' | 'services' | 'sourcing' | 'quality' | 'news' | 'contact';

export const PAGE_TITLES: Record<Exclude<PageId, 'home'>, Record<Lang, string>> = {
  about: { ka: 'ჩვენ შესახებ', en: 'About Us', ru: 'О нас', pt: 'Sobre Nós' },
  services: { ka: 'სერვისები', en: 'Services', ru: 'Услуги', pt: 'Serviços' },
  sourcing: { ka: 'წყაროები', en: 'Sourcing', ru: 'Источники', pt: 'Origem' },
  quality: { ka: 'ხარისხი', en: 'Quality', ru: 'Качество', pt: 'Qualidade' },
  news: { ka: 'სიახლეები', en: 'News', ru: 'Новости', pt: 'Notícias' },
  contact: { ka: 'კონტაქტი', en: 'Contact', ru: 'Контакты', pt: 'Contato' },
};

const ROUTE_FOR_PAGE: Record<Exclude<PageId, 'home' | 'quality' | 'news'>, string> = {
  about: 'about',
  services: 'services',
  sourcing: 'sourcing',
  contact: 'contact',
};

export function pathForPage(lang: Lang, page: PageId): string {
  if (page === 'home') return `/${lang}`;
  if (page === 'quality') return `/${lang}#quality`;
  if (page === 'news') return `/${lang}#news`;
  return `/${lang}/${ROUTE_FOR_PAGE[page]}`;
}

/** Builds alternates.languages with hreflang entries for all 4 locales + x-default. */
export function hreflangsFor(page: PageId): Record<string, string> {
  const langs: Record<string, string> = {};
  for (const L of LANGS) langs[L] = pathForPage(L, page);
  langs['x-default'] = pathForPage('ka', page);
  return langs;
}

/**
 * Build a complete Metadata object for a given lang + page combination.
 * Pages where the lang layout already provides metadata (home) should
 * still call this so that OG/Twitter/alternates are set correctly.
 */
export function buildPageMetadata({
  lang,
  page,
}: {
  lang: Lang;
  page: PageId;
}): Metadata {
  const siteTitle = SITE_TITLES[lang];
  const tagline = TAGLINES[lang];

  const isHome = page === 'home';
  const pageTitleNative = isHome ? null : PAGE_TITLES[page as Exclude<PageId, 'home'>][lang];
  const fullTitle = isHome ? siteTitle : `${pageTitleNative} — ${SITE_NAME}`;

  const canonical = pathForPage(lang, page);
  const alternateLocales = LANGS.filter((L) => L !== lang).map((L) => LOCALE_TAG[L]);

  return {
    title: fullTitle,
    description: tagline,
    keywords: KEYWORDS[lang],
    alternates: {
      canonical,
      languages: hreflangsFor(page),
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: fullTitle,
      description: tagline,
      url: canonical,
      locale: LOCALE_TAG[lang],
      alternateLocale: alternateLocales,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: tagline,
      images: [OG_IMAGE],
    },
  };
}
