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
} as const;
