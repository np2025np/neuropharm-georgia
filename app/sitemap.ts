import type { MetadataRoute } from 'next';
import type { Lang } from '@/lib/i18n';
import { features, enabledLocales } from '@/lib/features';
import { hreflangsFor, pathForPage, SITE_URL, type PageId } from '@/lib/seo';

const ALL_PAGES: { id: PageId; priority: number }[] = [
  { id: 'home', priority: 1.0 },
  { id: 'about', priority: 0.8 },
  { id: 'services', priority: 0.9 },
  { id: 'sourcing', priority: 0.8 },
  { id: 'quality', priority: 0.6 },
  { id: 'news', priority: 0.5 },
  { id: 'contact', priority: 0.7 },
];

const PAGES = ALL_PAGES.filter((p) => p.id !== 'news' || features.news);

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const lang of enabledLocales as readonly Lang[]) {
    for (const { id, priority } of PAGES) {
      const path = pathForPage(lang, id);
      entries.push({
        url: `${SITE_URL}${path}`,
        lastModified,
        changeFrequency: id === 'home' || id === 'news' ? 'weekly' : 'monthly',
        priority,
        alternates: {
          languages: Object.fromEntries(
            Object.entries(hreflangsFor(id)).map(([k, v]) => [k, `${SITE_URL}${v}`])
          ),
        },
      });
    }
  }

  return entries;
}
