// Section components for the dedicated pages: Contact, About, Services, Sourcing.
// Reuses BrainMark, BracketedEyebrow, Button, ArrowRight, Check from Primitives.jsx,
// and HomeHeader / HomeFooter from homepage.sections.jsx (so headers/footers stay consistent).

// ---------------- Shared page header strip ----------------
const PageHero = ({ eyebrow, headline, sub }) => (
  <section className="np-page-hero">
    <div className="np-page-hero-inner">
      <BracketedEyebrow color="var(--accent)">{eyebrow}</BracketedEyebrow>
      <h1>{headline}</h1>
      {sub && <p className="lead">{sub}</p>}
    </div>
  </section>
);

// ============================================================
// CONTACT
// ============================================================
const ContactForm = ({ t }) => {
  const [submitted, setSubmitted] = React.useState(false);
  return (
    <form
      className="np-contact-form"
      onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
    >
      <div className="row two">
        <label>
          <span>{t.form.name}</span>
          <input type="text" required />
        </label>
        <label>
          <span>{t.form.company}</span>
          <input type="text" />
        </label>
      </div>
      <div className="row two">
        <label>
          <span>{t.form.email}</span>
          <input type="email" required />
        </label>
        <label>
          <span>{t.form.phone}</span>
          <input type="tel" />
        </label>
      </div>
      <label>
        <span>{t.form.serviceLabel}</span>
        <select defaultValue="">
          <option value="" disabled>{t.form.servicePlaceholder}</option>
          {t.form.services.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
      </label>
      <label>
        <span>{t.form.message}</span>
        <textarea rows={5} required />
      </label>
      <p className="consent">{t.form.consent}</p>
      <div className="actions">
        <Button variant="primary" size="lg" icon={<ArrowRight />}>{t.form.submit}</Button>
        {submitted && <span className="submitted">✓</span>}
      </div>
    </form>
  );
};

const ContactInfo = ({ t }) => (
  <aside className="np-contact-info">
    <h3>{t.info.title}</h3>
    <dl>
      <div>
        <dt>{t.info.addressLabel}</dt>
        <dd className="multiline">{t.info.address}</dd>
      </div>
      <div>
        <dt>{t.info.emailLabel}</dt>
        <dd><a href={`mailto:${t.info.email}`}>{t.info.email}</a></dd>
      </div>
      <div>
        <dt>{t.info.phoneLabel}</dt>
        <dd>{t.info.phone}</dd>
      </div>
      <div>
        <dt>{t.info.hoursLabel}</dt>
        <dd className="multiline">{t.info.hours}</dd>
      </div>
      <div>
        <dt>{t.info.licenseLabel}</dt>
        <dd className="mono">{t.info.license}</dd>
      </div>
    </dl>
  </aside>
);

// Stylized Tbilisi map placeholder (abstract grid with a marker — same vocabulary as WorldMap).
const TbilisiMap = ({ caption }) => (
  <div className="np-map-frame">
    <span className="corner-mark">MAP · TBILISI · 41.71 / 44.79</span>
    <svg viewBox="0 0 600 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <pattern id="mapgrid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0v32" fill="none" stroke="currentColor" strokeOpacity="0.10" strokeWidth="0.6"/>
        </pattern>
      </defs>
      <rect width="600" height="380" fill="url(#mapgrid)"/>
      {/* abstract river curve */}
      <path d="M-20 230 C 120 200, 220 280, 340 240 S 540 180, 640 220" fill="none" stroke="currentColor" strokeOpacity="0.22" strokeWidth="2.2"/>
      <path d="M-20 240 C 120 210, 220 290, 340 250 S 540 190, 640 230" fill="none" stroke="currentColor" strokeOpacity="0.10" strokeWidth="2.2"/>
      {/* district blocks */}
      <g fill="currentColor" fillOpacity="0.08">
        <rect x="80"  y="80"  width="120" height="80"/>
        <rect x="220" y="60"  width="100" height="120"/>
        <rect x="340" y="100" width="140" height="70"/>
        <rect x="120" y="280" width="180" height="60"/>
        <rect x="320" y="270" width="160" height="80"/>
      </g>
      {/* marker */}
      <g transform="translate(300 200)">
        <circle r="48" fill="var(--accent)" fillOpacity="0.10"/>
        <circle r="24" fill="var(--accent)" fillOpacity="0.20"/>
        <circle r="9"  fill="var(--accent)"/>
        <circle r="9"  fill="none" stroke="var(--accent)" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="r" from="9" to="40" dur="2.4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" from="0.6" to="0" dur="2.4s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
    <div className="np-map-caption">{caption}</div>
  </div>
);

const ContactPage = ({ t, pT }) => (
  <main>
    <PageHero eyebrow={pT.eyebrow} headline={pT.headline} sub={pT.sub} />
    <section className="np-section np-contact-section" data-screen-label="01 Form + Info">
      <div className="np-contact-grid">
        <ContactForm t={pT} />
        <ContactInfo t={pT} />
      </div>
    </section>
    <section className="np-section np-contact-mapsec" data-screen-label="02 Map">
      <TbilisiMap caption={pT.mapCaption} />
    </section>
  </main>
);

// ============================================================
// ABOUT
// ============================================================
const AboutStory = ({ pT }) => (
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

const AboutMission = ({ pT }) => (
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

const FoundedCallout = ({ pT }) => (
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

const AboutVision = ({ pT }) => (
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

const AboutLeadership = ({ pT }) => (
  <section className="np-section" data-screen-label="05 Leadership">
    <div className="np-section-head">
      <BracketedEyebrow color="var(--accent)">{pT.eyebrow}</BracketedEyebrow>
      <h2>{pT.title}</h2>
      <p>{pT.sub}</p>
    </div>
    <div className="np-leadership-grid">
      {pT.members.map((m, i) => (
        <article className="np-leader-card" key={i}>
          <div className="portrait">
            <span className="initials">{(m.name && m.name !== 'TBA') ? m.name.split(' ').map(s => s[0]).slice(0,2).join('') : '—'}</span>
            <span className="placeholder-tag">PORTRAIT</span>
          </div>
          <div className="meta">
            <div className="role">{m.role}</div>
            <div className="name">{m.name}</div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const ComplianceTable = ({ pT }) => (
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

const AboutPage = ({ t, pT }) => (
  <main>
    <PageHero eyebrow={pT.eyebrow} headline={pT.headline} sub={pT.sub} />
    <AboutStory pT={pT}/>
    <AboutMission pT={pT}/>
    <FoundedCallout pT={pT.foundedCallout}/>
    <AboutVision pT={pT.vision}/>
    <AboutLeadership pT={pT.leadership}/>
    <ComplianceTable pT={pT.compliance}/>
  </main>
);

// ============================================================
// SERVICES
// ============================================================
const ServiceTier = ({ pT, labels, accent = 'var(--accent)', icon, reverse }) => (
  <section className={`np-service-tier ${reverse ? 'is-reverse' : ''}`}>
    <div className="np-service-tier-inner">
      <div className="head">
        <BracketedEyebrow color={accent}>{pT.eyebrow}</BracketedEyebrow>
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

const ServicesCompare = ({ pT }) => (
  <section className="np-section" data-screen-label="03 Comparison">
    <div className="np-section-head">
      <BracketedEyebrow color="var(--accent)">{pT.eyebrow}</BracketedEyebrow>
      <h2>{pT.title}</h2>
    </div>
    <div className="np-compare-table">
      <div className="row head">
        {pT.cols.map((c, i) => <div key={i} className={i === 0 ? 'first' : 'cell'}>{c}</div>)}
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

const ServicesCTA = ({ pT }) => (
  <section className="np-services-cta" data-screen-label="04 CTA">
    <div className="np-services-cta-inner">
      <h2>{pT.title}</h2>
      <p>{pT.body}</p>
      <a href="Contact.html" className="np-btn np-btn-primary np-btn-lg">
        {pT.button}<span className="np-btn-icon"><ArrowRight /></span>
      </a>
    </div>
  </section>
);

const ServicesPage = ({ t, pT, labels }) => (
  <main>
    <PageHero eyebrow={pT.eyebrow} headline={pT.headline} sub={pT.sub} />
    <ServiceTier pT={pT.tier1} labels={labels} icon={<ContainerRoute size={28} />} />
    <ServiceTier pT={pT.tier2} labels={labels} icon={<Network size={28} />} reverse />
    <ServicesCompare pT={pT.compare} />
    <ServicesCTA pT={pT.cta} />
  </main>
);

// ============================================================
// SOURCING
// ============================================================
const SourcingHeroMap = ({ pT, t }) => (
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

const SourcingRegion = ({ pT, labels, accent = 'var(--accent)', reverse }) => (
  <section className={`np-region-block ${reverse ? 'is-reverse' : ''}`}>
    <div className="np-region-inner">
      <div className="copy">
        <BracketedEyebrow color={accent}>{pT.eyebrow}</BracketedEyebrow>
        <h2>{pT.title}</h2>
        <p>{pT.body}</p>
        <p>{pT.body2}</p>
      </div>
      <div className="aside">
        {pT.countries && (
          <div className="np-tag-list">
            <div className="lbl">{labels.countries}</div>
            <div className="tags">
              {pT.countries.map((c, i) => <span className="tag" key={i}>{c}</span>)}
            </div>
          </div>
        )}
        {pT.certifications && (
          <div className="np-tag-list">
            <div className="lbl">{labels.certifications}</div>
            <div className="tags">
              {pT.certifications.map((c, i) => <span className="tag" key={i}>{c}</span>)}
            </div>
          </div>
        )}
        <ul className="np-region-points">
          {pT.points.map((p, i) => (
            <li key={i}><Check size={14}/><span>{p}</span></li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const SourcingFutureNote = ({ pT }) => (
  <section className="np-future-note" data-screen-label="04 Future feature">
    <div className="np-future-note-inner">
      <div className="dot-wrap">
        <span className="dot" />
      </div>
      <div>
        <h3>{pT.title}</h3>
        <p>{pT.body}</p>
      </div>
    </div>
  </section>
);

const SourcingPage = ({ t, pT, labels }) => (
  <main>
    <PageHero eyebrow={pT.eyebrow} headline={pT.headline} sub={pT.sub} />
    <SourcingHeroMap pT={pT} t={t} />
    <SourcingRegion pT={pT.regionA} labels={labels} />
    <SourcingRegion pT={pT.regionB} labels={labels} reverse />
    <SourcingFutureNote pT={pT.future} />
  </main>
);

Object.assign(window, {
  PageHero, ContactPage, AboutPage, ServicesPage, SourcingPage,
});
