import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { pagesT } from '@/lib/pages-i18n';
import { buildPageMetadata } from '@/lib/seo';
import { AboutPage } from '@/components/about/AboutPage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildPageMetadata({ lang: lang as Lang, page: 'about' });
}

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const pT = pagesT[lang as Lang].about;
  return <AboutPage pT={pT} />;
}
