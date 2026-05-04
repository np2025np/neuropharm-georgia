import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { LANGS, isLang, type Lang } from '@/lib/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
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
      {children}
      <Footer lang={typedLang} />
    </>
  );
}
