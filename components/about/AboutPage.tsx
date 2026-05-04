import type { Lang, PagesT } from '@/lib/i18n';
import { BracketedEyebrow } from '@/components/Primitives';
import { PageHero } from '@/components/PageHero';
import { PageBanner } from '@/components/PageBanner';
import { BANNER_SUBTITLES, PAGE_TITLES } from '@/lib/seo';

type AboutT = PagesT['about'];

function AboutStory({ pT }: { pT: AboutT }) {
  return (
    <section className="np-section" data-screen-label="01 Story">
      <div className="np-about-story">
        <div className="head">
          <BracketedEyebrow color="var(--accent)">{pT.story.eyebrow}</BracketedEyebrow>
          <h2>{pT.story.title}</h2>
        </div>
        <div className="body">
          <p>{pT.story.p1}</p>
          <p>{pT.story.p2}</p>
        </div>
      </div>
    </section>
  );
}

function AboutMission({ pT }: { pT: AboutT }) {
  return (
    <section className="np-section" data-screen-label="02 Mission">
      <div className="np-section-head">
        <BracketedEyebrow color="var(--accent)">{pT.mission.eyebrow}</BracketedEyebrow>
        <h2>{pT.mission.title}</h2>
        <p>{pT.mission.body}</p>
      </div>
      <div className="np-mission-models">
        {pT.mission.models.map((m, i) => (
          <div className="np-mission-card" key={i}>
            <span className="num">{m.num}</span>
            <h3>{m.title}</h3>
            <p>{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FoundedCallout({ pT }: { pT: AboutT['foundedCallout'] }) {
  return (
    <section className="np-callout-band" data-screen-label="03 Founded callout">
      <div className="np-callout-inner">
        <BracketedEyebrow color="rgba(250,250,247,0.7)">{pT.eyebrow}</BracketedEyebrow>
        <div className="np-callout-grid">
          <h2>{pT.title}</h2>
          <div>
            <p>{pT.body}</p>
            <span className="license-pill">{pT.license}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutVision({ pT }: { pT: AboutT['vision'] }) {
  return (
    <section className="np-section" data-screen-label="04 Vision">
      <div className="np-vision">
        <div className="head">
          <BracketedEyebrow color="var(--accent)">{pT.eyebrow}</BracketedEyebrow>
          <h2>{pT.title}</h2>
        </div>
        <p className="body">{pT.body}</p>
        <div className="vision-marker">2025 ——————————————→ 2030</div>
      </div>
    </section>
  );
}

function AboutLeadership({ pT }: { pT: AboutT['leadership'] }) {
  return (
    <section className="np-section" data-screen-label="05 Leadership">
      <div className="np-section-head">
        <BracketedEyebrow color="var(--accent)">{pT.eyebrow}</BracketedEyebrow>
        <h2>{pT.title}</h2>
        <p>{pT.sub}</p>
      </div>
      <div className="np-leadership-grid">
        {pT.members.map((m, i) => {
          const initials = m.name && m.name !== 'TBA'
            ? m.name.split(' ').map((s) => s[0]).slice(0, 2).join('')
            : '—';
          return (
            <article className="np-leader-card" key={i}>
              <div className="portrait">
                <span className="initials">{initials}</span>
                <span className="placeholder-tag">PORTRAIT</span>
              </div>
              <div className="meta">
                <div className="role">{m.role}</div>
                <div className="name">{m.name}</div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ComplianceTable({ pT }: { pT: AboutT['compliance'] }) {
  return (
    <section className="np-section" data-screen-label="06 Compliance">
      <div className="np-section-head">
        <BracketedEyebrow color="var(--accent)">{pT.eyebrow}</BracketedEyebrow>
        <h2>{pT.title}</h2>
      </div>
      <div className="np-compliance-table">
        {pT.rows.map((r, i) => (
          <div className="row" key={i}>
            <div className="lbl">{r.label}</div>
            <div className="val">{r.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutPage({ pT, lang }: { pT: AboutT; lang: Lang }) {
  return (
    <main>
      <PageBanner title={PAGE_TITLES.about[lang]} subtitle={BANNER_SUBTITLES.about?.[lang]} />
      <PageHero eyebrow={pT.eyebrow} headline={pT.headline} sub={pT.sub} />
      <AboutStory pT={pT} />
      <AboutMission pT={pT} />
      <FoundedCallout pT={pT.foundedCallout} />
      <AboutVision pT={pT.vision} />
      <AboutLeadership pT={pT.leadership} />
      <ComplianceTable pT={pT.compliance} />
    </main>
  );
}
