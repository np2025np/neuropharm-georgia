import type { Lang } from './i18n';

/**
 * Site-wide feature flags.
 *
 * Flip a boolean here to instantly enable/disable a feature across the
 * whole site (homepage section, header nav, sitemap, etc.) without
 * deleting any code, content, or i18n strings.
 *
 * Setting a flag to `true` re-enables the feature with no migration.
 */
export const features = {
  /** When false: News section is hidden from homepage, removed from header
   *  nav, dropped from sitemap. The components, i18n, and types remain
   *  in the codebase. */
  news: false,

  /** Per-locale visibility. When false, the locale is hidden from the
   *  language switcher, sitemap, and hreflang alternates; direct URLs
   *  for that locale redirect to DEFAULT_LANG via middleware. The
   *  translations themselves remain in lib/i18n.ts and lib/pages-i18n.ts. */
  locales: {
    ka: true,
    en: true,
    ru: true,
    pt: false,
  },
} as const;

export const enabledLocales: Lang[] = (
  Object.keys(features.locales) as Lang[]
).filter((l) => features.locales[l]);

export function isEnabledLocale(value: string): value is Lang {
  return (enabledLocales as readonly string[]).includes(value);
}
