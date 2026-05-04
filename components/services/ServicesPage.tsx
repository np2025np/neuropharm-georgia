import type { ReactNode } from 'react';
import Link from 'next/link';
import type { Lang, PagesT } from '@/lib/i18n';
import { BracketedEyebrow } from '@/components/Primitives';
import { PageHero } from '@/components/PageHero';
import { ArrowRight, Check, ContainerRoute, Network } from '@/components/icons';

type ServicesT = PagesT['services'];
type Labels = PagesT['labels'];

function ServiceTier({
  pT,
  labels,
  icon,
  reverse,
}: {
  pT: ServicesT['tier1'] | ServicesT['tier2'];
  labels: Labels;
  icon: ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className={`np-service-tier ${reverse ? 'is-reverse' : ''}`}>
      <div className="np-service-tier-inner">
        <div className="head">
          <BracketedEyebrow color="var(--accent)">{pT.eyebrow}</BracketedEyebrow>
          <div className="title-row">
            <div className="icon-wrap">{icon}</div>
            <h2>{pT.title}</h2>
          </div>
          <p>{pT.body}</p>
        </div>
        <div className="grid">
          <div className="process">
            <h4>{labels.process}</h4>
            <ol>
              {pT.process.map((p, i) => (
                <li key={i}>
                  <span className="num">{p.num}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <span>{p.body}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="included">
            <h4>{labels.included}</h4>
            <ul>
              {pT.included.map((line, i) => (
                <li key={i}><Check size={14} /> <span>{line}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesCompare({ pT }: { pT: ServicesT['compare'] }) {
  return (
    <section className="np-section" data-screen-label="03 Comparison">
      <div className="np-section-head">
        <BracketedEyebrow color="var(--accent)">{pT.eyebrow}</BracketedEyebrow>
        <h2>{pT.title}</h2>
      </div>
      <div className="np-compare-table">
        <div className="row head">
          {pT.cols.map((c, i) => (
            <div key={i} className={i === 0 ? 'first' : 'cell'}>{c}</div>
          ))}
        </div>
        {pT.rows.map((r, i) => (
          <div className="row" key={i}>
            <div className="first">{r.type}</div>
            <div className={`cell ${r.s1 === '✓' ? 'on' : 'off'}`}>{r.s1}</div>
            <div className={`cell ${r.s2 === '✓' ? 'on' : 'off'}`}>{r.s2}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesCTA({ pT, lang }: { pT: ServicesT['cta']; lang: Lang }) {
  return (
    <section className="np-services-cta" data-screen-label="04 CTA">
      <div className="np-services-cta-inner">
        <h2>{pT.title}</h2>
        <p>{pT.body}</p>
        <Link href={`/${lang}/contact`} className="np-btn np-btn-primary np-btn-lg">
          {pT.button}
          <span className="np-btn-icon"><ArrowRight /></span>
        </Link>
      </div>
    </section>
  );
}

export function ServicesPage({ pT, labels, lang }: { pT: ServicesT; labels: Labels; lang: Lang }) {
  return (
    <main>
      <PageHero eyebrow={pT.eyebrow} headline={pT.headline} sub={pT.sub} />
      <ServiceTier pT={pT.tier1} labels={labels} icon={<ContainerRoute size={28} />} />
      <ServiceTier pT={pT.tier2} labels={labels} icon={<Network size={28} />} reverse />
      <ServicesCompare pT={pT.compare} />
      <ServicesCTA pT={pT.cta} lang={lang} />
    </main>
  );
}
