import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Noto_Serif, Noto_Sans } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/homepage.css';
import '@/styles/pages.css';

const notoSerif = Noto_Serif({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--np-font-serif',
  display: 'swap',
});

const notoSans = Noto_Sans({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--np-font-sans',
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
    <html lang="ka" suppressHydrationWarning className={`${notoSerif.variable} ${notoSans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
