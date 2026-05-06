import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { isLang, type Lang } from '@/lib/i18n';
import { pagesT } from '@/lib/pages-i18n';
import { contact } from '@/lib/contact';
import { PageHero } from '@/components/PageHero';
import { ArrowRight } from '@/components/icons';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function ThankYou({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const typed = lang as Lang;
  const t = pagesT[typed].thankYou;
  const sub = t.sub.replace('{phone}', contact.phone.display);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} headline={t.headline} sub={sub} />
      <section className="np-section np-thankyou-section">
        <div className="np-thankyou-actions">
          <Link href={`/${typed}`} className="np-btn np-btn-primary np-btn-lg">
            {t.backHome}
            <span className="np-btn-icon"><ArrowRight /></span>
          </Link>
          <Link href={`/${typed}/services`} className="np-btn np-btn-secondary np-btn-lg">
            {t.seeServices}
          </Link>
        </div>
      </section>
    </>
  );
}
