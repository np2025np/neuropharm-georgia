import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { pagesT } from '@/lib/pages-i18n';
import { ServicesPage } from '@/components/services/ServicesPage';

export default async function Services({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const typed = lang as Lang;
  const data = pagesT[typed];
  return <ServicesPage pT={data.services} labels={data.labels} lang={typed} />;
}
