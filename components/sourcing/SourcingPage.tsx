import type { HomeT, Lang, PagesT } from '@/lib/i18n';
import { BracketedEyebrow } from '@/components/Primitives';
import { PageHero } from '@/components/PageHero';
import { PageBanner } from '@/components/PageBanner';
import { Check } from '@/components/icons';
import { WorldMap } from '@/components/visuals/WorldMap';
import { BANNER_SUBTITLES, PAGE_TITLES } from '@/lib/seo';

type SourcingT = PagesT['sourcing'];
type Labels = PagesT['labels'];
type Region = SourcingT['regionA'] | SourcingT['regionB'];

function SourcingHeroMap({ pT, t }: { pT: SourcingT; t: HomeT }) {
  return (
    <section className="np-section" data-screen-label="01 Map">
      <div className="np-sourcing-frame">
        <span className="corner-mark">SOURCING · 02 REGIONS</span>
        <WorldMap regionAName={t.sourcing.regionA} regionBName={t.sourcing.regionB} />
        <div className="np-sourcing-caption">
          <span>{pT.mapCaption}</span>
        </div>
      </div>
    </section>
  );
}

function SourcingRegion({
  pT,
  labels,
  reverse,
}: {
  pT: Region;
  labels: Labels;
  reverse?: boolean;
}) {
  const certifications = 'certifications' in pT ? pT.certifications : undefined;
  return (
    <section className={`np-region-block ${reverse ? 'is-reverse' : ''}`}>
      <div className="np-region-inner">
        <div className="copy">
          <BracketedEyebrow color="var(--accent-text)">{pT.eyebrow}</BracketedEyebrow>
          <h2>{pT.title}</h2>
          <p>{pT.body}</p>
          <p>{pT.body2}</p>
        </div>
        <div className="aside">
          {certifications && (
            <div className="np-tag-list">
              <div className="lbl">{labels.certifications}</div>
              <div className="tags">
                {certifications.map((c, i) => <span className="tag" key={i}>{c}</span>)}
              </div>
            </div>
          )}
          <ul className="np-region-points">
            {pT.points.map((p, i) => (
              <li key={i}><Check size={14} /><span>{p}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function SourcingFutureNote({ pT }: { pT: SourcingT['future'] }) {
  return (
    <section className="np-future-note" data-screen-label="04 Future feature">
      <div className="np-future-note-inner">
        <div className="dot-wrap">
          <span className="dot" />
        </div>
        <div>
          <h2>{pT.title}</h2>
          <p>{pT.body}</p>
        </div>
      </div>
    </section>
  );
}

export function SourcingPage({
  pT,
  labels,
  t,
  lang,
}: {
  pT: SourcingT;
  labels: Labels;
  t: HomeT;
  lang: Lang;
}) {
  return (
    <>
      <PageBanner title={PAGE_TITLES.sourcing[lang]} subtitle={BANNER_SUBTITLES.sourcing?.[lang]} />
      <PageHero eyebrow={pT.eyebrow} headline={pT.headline} sub={pT.sub} as="h2" />
      <SourcingHeroMap pT={pT} t={t} />
      <SourcingRegion pT={pT.regionA} labels={labels} />
      <SourcingRegion pT={pT.regionB} labels={labels} reverse />
      <SourcingFutureNote pT={pT.future} />
    </>
  );
}
