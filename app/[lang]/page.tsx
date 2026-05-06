import { notFound } from 'next/navigation';
import { homeT, isLang, type Lang } from '@/lib/i18n';
import { features } from '@/lib/features';
import { ScrollReveal } from '@/components/ScrollReveal';
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
      <ScrollReveal><Services t={t} lang={typed} /></ScrollReveal>
      <ScrollReveal><SourcingSection t={t} /></ScrollReveal>
      <ScrollReveal><AboutPreview t={t} lang={typed} /></ScrollReveal>
      <ScrollReveal><QualityBand t={t} /></ScrollReveal>
      <ScrollReveal><PartnersCTA t={t} lang={typed} /></ScrollReveal>
      {features.news && <ScrollReveal><NewsGrid t={t} /></ScrollReveal>}
    </>
  );
}
