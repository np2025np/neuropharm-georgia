import { notFound } from 'next/navigation';
import { homeT, isLang, type Lang } from '@/lib/i18n';
import {
  HomeHero,
  TrustStrip,
  Services,
  SourcingSection,
  AboutPreview,
  QualityBand,
  PartnersCTA,
  NewsGrid,
} from '@/components/home/Sections';

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const typed = lang as Lang;
  const t = homeT[typed];
  return (
    <>
      <HomeHero t={t} lang={typed} />
      <TrustStrip t={t} />
      <Services t={t} lang={typed} />
      <SourcingSection t={t} />
      <AboutPreview t={t} lang={typed} />
      <QualityBand t={t} />
      <PartnersCTA t={t} lang={typed} />
      <NewsGrid t={t} />
    </>
  );
}
