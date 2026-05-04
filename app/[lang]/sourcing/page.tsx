import { notFound } from 'next/navigation';
import { homeT, isLang, type Lang } from '@/lib/i18n';
import { pagesT } from '@/lib/pages-i18n';
import { SourcingPage } from '@/components/sourcing/SourcingPage';

export default async function Sourcing({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const typed = lang as Lang;
  const data = pagesT[typed];
  return <SourcingPage pT={data.sourcing} labels={data.labels} t={homeT[typed]} />;
}
