import Link from 'next/link';
import type { HomeT, Lang } from '@/lib/i18n';
import { BracketedEyebrow, Button } from '@/components/Primitives';
import { ArrowRight, ContainerRoute, Network, Beaker, ClipboardCheck, Snowflake } from '@/components/icons';
import { HeroVisualSupplyChain } from '@/components/visuals/HeroVisual';
import { WorldMap } from '@/components/visuals/WorldMap';

export function HomeHero({ t, lang }: { t: HomeT; lang: Lang }) {
  return (
    <section id="home" className="np-home-hero" data-screen-label="01 Hero">
      <picture className="np-home-hero-bg">
        <source media="(max-width: 767px)" srcSet="/hero-bg-mobile.webp" type="image/webp" />
        <source media="(max-width: 767px)" srcSet="/hero-bg-mobile.jpg" type="image/jpeg" />
        <source srcSet="/hero-bg.webp" type="image/webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-bg.jpg" alt="" fetchPriority="high" decoding="async" />
      </picture>
      <div className="np-home-hero-overlay" />
      <div className="np-home-hero-grid">
        <div>
          <BracketedEyebrow color="var(--accent-text)">{t.hero.eyebrow}</BracketedEyebrow>
          <h1>{t.hero.headline}</h1>
          <p className="lead">{t.hero.lead}</p>
          <div className="np-home-hero-cta">
            <Link href={`/${lang}/contact`} className="np-btn np-btn-primary np-btn-lg">
              {t.hero.ctaPrimary}
              <span className="np-btn-icon"><ArrowRight /></span>
            </Link>
            <Link href={`/${lang}/services`} className="np-btn np-btn-secondary np-btn-lg">
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="np-home-hero-art">
          <div className="grid-bg" />
          <HeroVisualSupplyChain />
          <div className="art-caption">{t.hero.caption}</div>
        </div>
      </div>
    </section>
  );
}

export function TrustStrip({ t }: { t: HomeT }) {
  return (
    <div className="np-trust-strip">
      <div className="np-trust-strip-inner">
        <span>{t.trust.license} <strong>{t.trust.licenseValue}</strong></span>
        <span className="sep" />
        <span><strong>{t.trust.founded}</strong></span>
        <span className="sep" />
        <span>{t.trust.sources} <strong>{t.trust.sourcesValue}</strong></span>
      </div>
    </div>
  );
}

export function Services({ t, lang }: { t: HomeT; lang: Lang }) {
  return (
    <section id="services" className="np-section" data-screen-label="02 Services">
      <div className="np-section-head">
        <BracketedEyebrow color="var(--accent-text)">{t.services.eyebrow}</BracketedEyebrow>
        <h2>{t.services.headline}</h2>
        <p>{t.services.lead}</p>
      </div>
      <div className="np-services-grid">
        <article className="np-service-card">
          <span className="num">{t.services.tier1.num}</span>
          <div className="icon-wrap"><ContainerRoute size={32} /></div>
          <h3>{t.services.tier1.title}</h3>
          <p>{t.services.tier1.body}</p>
          <Link
            className="more"
            href={`/${lang}/services`}
            aria-label={`${t.services.tier1.more}: ${t.services.tier1.title}`}
          >
            {t.services.tier1.more} <ArrowRight size={14} />
          </Link>
        </article>
        <article className="np-service-card">
          <span className="num">{t.services.tier2.num}</span>
          <div className="icon-wrap"><Network size={32} /></div>
          <h3>{t.services.tier2.title}</h3>
          <p>{t.services.tier2.body}</p>
          <Link
            className="more"
            href={`/${lang}/services`}
            aria-label={`${t.services.tier2.more}: ${t.services.tier2.title}`}
          >
            {t.services.tier2.more} <ArrowRight size={14} />
          </Link>
        </article>
      </div>
    </section>
  );
}

export function SourcingSection({ t }: { t: HomeT }) {
  return (
    <section id="sourcing" className="np-section" data-screen-label="03 Sourcing">
      <div className="np-section-head">
        <BracketedEyebrow color="var(--accent-text)">{t.sourcing.eyebrow}</BracketedEyebrow>
        <h2>{t.sourcing.headline}</h2>
        <p>{t.sourcing.lead}</p>
      </div>
      <div className="np-sourcing-frame">
        <span className="corner-mark">SOURCING · 02 REGIONS</span>
        <WorldMap regionAName={t.sourcing.regionA} regionBName={t.sourcing.regionB} />
        <div className="np-sourcing-caption">
          <span className="badge">{t.sourcing.badge}</span>
          <span>{t.sourcing.caption}</span>
        </div>
      </div>
    </section>
  );
}

export function AboutPreview({ t, lang }: { t: HomeT; lang: Lang }) {
  return (
    <section id="about" className="np-section" data-screen-label="04 About">
      <div className="np-about-preview">
        <div>
          <BracketedEyebrow color="var(--accent-text)">{t.about.eyebrow}</BracketedEyebrow>
          <h2>{t.about.headline}</h2>
          <p>{t.about.p1}</p>
          <p>{t.about.p2}</p>
          <Link className="more" href={`/${lang}/about`}>
            {t.about.more} <ArrowRight size={14} />
          </Link>
        </div>
        <div className="np-stat-stack">
          {t.about.stats.map((s, i) => (
            <div className="np-stat-block" key={i}>
              <div className="num">{s.num}</div>
              <div className="lbl">
                <strong>{s.l1}</strong>
                <span>{s.l2}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualityBand({ t }: { t: HomeT }) {
  const icons = [<Beaker size={28} key="b" />, <ClipboardCheck size={28} key="c" />, <Snowflake size={28} key="s" />];
  return (
    <section id="quality" className="np-quality-band" data-screen-label="05 Quality">
      <div className="np-quality-inner">
        <div className="head">
          <BracketedEyebrow color="rgba(250,250,247,0.75)">{t.quality.eyebrow}</BracketedEyebrow>
          <h2>{t.quality.headline}</h2>
          <p>{t.quality.lead}</p>
        </div>
        <div className="np-quality-grid">
          {t.quality.cols.map((c, i) => (
            <div className="np-quality-col" key={i}>
              <div className="icon-line">{icons[i]}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PartnersCTA({ t, lang }: { t: HomeT; lang: Lang }) {
  return (
    <section className="np-partners-cta" data-screen-label="06 Partners CTA">
      <div className="np-partners-cta-inner">
        <BracketedEyebrow color="rgba(250,250,247,0.7)">{t.partners.eyebrow}</BracketedEyebrow>
        <h2>{t.partners.headline}</h2>
        <p>{t.partners.lead}</p>
        <Link href={`/${lang}/contact`} className="np-btn np-btn-primary np-btn-lg">
          {t.partners.cta}
          <span className="np-btn-icon"><ArrowRight /></span>
        </Link>
      </div>
    </section>
  );
}

export function NewsGrid({ t }: { t: HomeT }) {
  return (
    <section id="news" className="np-section" data-screen-label="07 News">
      <div className="np-section-head">
        <BracketedEyebrow color="var(--accent-text)">{t.news.eyebrow}</BracketedEyebrow>
        <h2>{t.news.headline}</h2>
        <p>{t.news.lead}</p>
      </div>
      <div className="np-news-grid">
        {t.news.items.map((n, i) => (
          <article className="np-news-card" key={i}>
            <div className="np-news-thumb">
              <span className="corner">N — 0{i + 1}</span>
            </div>
            <div className="np-news-body">
              <div className="meta">
                <span className="tag">{n.tag}</span>
                <span>{n.date}</span>
              </div>
              <h3>{n.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
