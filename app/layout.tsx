import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Noto_Serif, Noto_Sans, Noto_Serif_Georgian, Noto_Sans_Georgian } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import '@/styles/globals.css';
import '@/styles/homepage.css';
import '@/styles/pages.css';

const notoSerif = Noto_Serif({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const notoSerifGeorgian = Noto_Serif_Georgian({
  subsets: ['georgian'],
  weight: ['400', '600', '700'],
  variable: '--font-noto-serif-georgian',
  display: 'swap',
});

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-georgian',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Neuropharm Georgia — Pharmaceutical Import & Distribution',
  description:
    'Neuropharm Georgia LLC — pharmaceutical importer and distributor in Tbilisi, Georgia. European and Indian medicines under EU-GMP standards. Founded 2025. License №438739260.',
};

const themeInitScript = `
(function () {
  try {
    var t = localStorage.getItem('np-theme');
    if (t === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ka"
      suppressHydrationWarning
      className={`${notoSerif.variable} ${notoSans.variable} ${notoSerifGeorgian.variable} ${notoSansGeorgian.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
