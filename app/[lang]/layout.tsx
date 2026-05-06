import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { enabledLocales } from '@/lib/features';
import { buildPageMetadata } from '@/lib/seo';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function generateStaticParams() {
  return enabledLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  return buildPageMetadata({ lang: lang as Lang, page: 'home' });
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const typedLang = lang as Lang;
  return (
    <>
      <Header lang={typedLang} />
      <main id="main-content">{children}</main>
      <Footer lang={typedLang} />
    </>
  );
}
