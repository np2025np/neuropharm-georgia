import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { pagesT } from '@/lib/pages-i18n';
import { buildPageMetadata } from '@/lib/seo';
import { ServicesPage } from '@/components/services/ServicesPage';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildPageMetadata({ lang: lang as Lang, page: 'services' });
}

export default async function Services({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const typed = lang as Lang;
  const data = pagesT[typed];
  return <ServicesPage pT={data.services} labels={data.labels} lang={typed} />;
}
