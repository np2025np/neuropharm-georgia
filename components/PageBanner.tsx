import Image from 'next/image';

type Props = {
  title: string;
  subtitle?: string;
};

export function PageBanner({ title, subtitle }: Props) {
  return (
    <section className="np-page-banner" aria-label={title}>
      <Image
        src="/section-banner.jpg"
        alt=""
        fill
        sizes="100vw"
        className="np-page-banner-img"
        priority={false}
      />
      <div className="np-page-banner-overlay" />
      <div className="np-page-banner-inner">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
