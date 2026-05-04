// Homepage sections — Neuropharm Georgia LLC.

// Page nav map. Anchor links point inside Homepage.html; .html links point to dedicated pages.
const NAV_LINKS = {
  home:     'Homepage.html#home',
  about:    'About.html',
  services: 'Services.html',
  sourcing: 'Sourcing.html',
  quality:  'Homepage.html#quality',
  news:     'Homepage.html#news',
  contact:  'Contact.html',
};

const HomeHeader = ({ lang, setLang, dark, setDark, t, currentPage = 'home' }) => {
  const langs = ['KA', 'EN', 'RU', 'PT'];
  const navIds = ['home', 'about', 'services', 'sourcing', 'quality', 'news', 'contact'];
  const [open, setOpen] = React.useState(false);
  return (
    <header className="np-header">
      <div className="np-header-inner">
        <a className="np-logo" href="Homepage.html" onClick={() => setOpen(false)}>
          <BrainMark size={36} stroke={4} color="currentColor" />
          <span className="np-wordmark">NEUROPHARM</span>
        </a>
        <nav className="np-nav np-nav-desktop" style={{ justifyContent: 'center' }}>
          {navIds.map((id) => (
            <a key={id} href={NAV_LINKS[id]} className={id === currentPage ? 'is-active' : ''}>{t.nav[id]}</a>
          ))}
        </nav>
        <div className="np-header-tools">
          <div className="np-lang np-lang-desktop">
            {langs.map(L => (
              <button key={L} className={lang === L ? 'is-on' : ''} onClick={() => setLang(L)}>{L}</button>
            ))}
          </div>
          <button className="np-mode-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
            {dark ? <Sun /> : <Moon />}
          </button>
          <button className="np-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`np-mobile-drawer ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)}>
        <nav className="np-mobile-nav" onClick={e => e.stopPropagation()}>
          {navIds.map((id) => (
            <a key={id} href={NAV_LINKS[id]} className={id === currentPage ? 'is-active' : ''} onClick={() => setOpen(false)}>{t.nav[id]}</a>
          ))}
          <div className="np-mobile-langs">
            {langs.map(L => (
              <button key={L} className={lang === L ? 'is-on' : ''} onClick={() => { setLang(L); setOpen(false); }}>{L}</button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

const HomeHero = ({ t }) => (
  <section id="home" className="np-home-hero" data-screen-label="01 Hero">
    <div className="np-home-hero-grid">
      <div>
        <BracketedEyebrow color="var(--accent)">{t.hero.eyebrow}</BracketedEyebrow>
        <h1>{t.hero.headline}</h1>
        <p className="lead">{t.hero.lead}</p>
        <div className="np-home-hero-cta">
          <Button variant="primary" size="lg" icon={<ArrowRight />}>{t.hero.ctaPrimary}</Button>
          <Button variant="secondary" size="lg">{t.hero.ctaSecondary}</Button>
        </div>
      </div>
      <div className="np-home-hero-art">
        <div className="grid-bg" />
        <HeroVisualRouter />
        <div className="art-caption">{t.hero.caption}</div>
      </div>
    </div>
  </section>
);

const TrustStrip = ({ t }) => (
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

const Services = ({ t }) => (
  <section id="services" className="np-section" data-screen-label="02 Services">
    <div className="np-section-head">
      <BracketedEyebrow color="var(--accent)">{t.services.eyebrow}</BracketedEyebrow>
      <h2>{t.services.headline}</h2>
      <p>{t.services.lead}</p>
    </div>
    <div className="np-services-grid">
      <article className="np-service-card">
        <span className="num">{t.services.tier1.num}</span>
        <div className="icon-wrap"><ContainerRoute size={32} /></div>
        <h3>{t.services.tier1.title}</h3>
        <p>{t.services.tier1.body}</p>
        <a className="more" href="Services.html">{t.services.tier1.more} <ArrowRight size={14} /></a>
      </article>
      <article className="np-service-card">
        <span className="num">{t.services.tier2.num}</span>
        <div className="icon-wrap"><Network size={32} /></div>
        <h3>{t.services.tier2.title}</h3>
        <p>{t.services.tier2.body}</p>
        <a className="more" href="Services.html">{t.services.tier2.more} <ArrowRight size={14} /></a>
      </article>
    </div>
  </section>
);

const Sourcing = ({ t }) => (
  <section id="sourcing" className="np-section" data-screen-label="03 Sourcing">
    <div className="np-section-head">
      <BracketedEyebrow color="var(--accent)">{t.sourcing.eyebrow}</BracketedEyebrow>
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

const AboutPreview = ({ t }) => (
  <section id="about" className="np-section" data-screen-label="04 About">
    <div className="np-about-preview">
      <div>
        <BracketedEyebrow color="var(--accent)">{t.about.eyebrow}</BracketedEyebrow>
        <h2>{t.about.headline}</h2>
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <a className="more" href="About.html">{t.about.more} <ArrowRight size={14} /></a>
      </div>
      <div className="np-stat-stack">
        {t.about.stats.map((s, i) => (
          <div className="np-stat-block" key={i}>
            <div className="num">{s.num}</div>
            <div className="lbl"><strong>{s.l1}</strong><span>{s.l2}</span></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const QualityBand = ({ t }) => {
  const icons = [<Beaker size={28}/>, <ClipboardCheck size={28}/>, <Snowflake size={28}/>];
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
};

const PartnersCTA = ({ t }) => (
  <section className="np-partners-cta" data-screen-label="06 Partners CTA">
    <div className="np-partners-cta-inner">
      <BracketedEyebrow color="rgba(250,250,247,0.7)">{t.partners.eyebrow}</BracketedEyebrow>
      <h2>{t.partners.headline}</h2>
      <p>{t.partners.lead}</p>
      <Button variant="primary" size="lg" icon={<ArrowRight />}>{t.partners.cta}</Button>
    </div>
  </section>
);

const NewsGrid = ({ t }) => (
  <section id="news" className="np-section" data-screen-label="07 News">
    <div className="np-section-head">
      <BracketedEyebrow color="var(--accent)">{t.news.eyebrow}</BracketedEyebrow>
      <h2>{t.news.headline}</h2>
      <p>{t.news.lead}</p>
    </div>
    <div className="np-news-grid">
      {t.news.items.map((n, i) => (
        <article className="np-news-card" key={i}>
          <div className="np-news-thumb"><span className="corner">N — 0{i + 1}</span></div>
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

const HomeFooter = ({ t, lang, setLang }) => {
  const langs = ['KA', 'EN', 'RU', 'PT'];
  return (
    <footer id="contact" className="np-footer" data-screen-label="08 Footer">
      <div className="np-footer-inner np-home-footer-inner">
        <div className="np-footer-brand">
          <div className="lockup">
            <BrainMark size={32} stroke={4} color="currentColor" />
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, letterSpacing: '0.1em', fontSize: 14 }}>NEUROPHARM</span>
          </div>
          <p className="desc">{t.footer.desc}</p>
        </div>
        <div>
          <h4>{t.footer.quickLinks}</h4>
          <ul>
            <li><a href="Services.html">{t.nav.services}</a></li>
            <li><a href="About.html">{t.nav.about}</a></li>
            <li><a href="Sourcing.html">{t.nav.sourcing}</a></li>
            <li><a href="Homepage.html#quality">{t.nav.quality}</a></li>
            <li><a href="Contact.html">{t.footer.careers}</a></li>
          </ul>
        </div>
        <div>
          <h4>{t.footer.contact}</h4>
          <ul>
            <li style={{ opacity: 0.85, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.6 }}>{t.footer.address}</li>
            <li><a href="mailto:info@neuropharmgeorgia.com">info@neuropharmgeorgia.com</a></li>
          </ul>
        </div>
        <div>
          <h4>{t.footer.legal}</h4>
          <ul>
            <li style={{ opacity: 0.85, fontFamily: 'var(--font-sans)', fontSize: 14 }}>{t.trust.license} {t.trust.licenseValue}</li>
          </ul>
          <div className="np-lang" style={{ marginTop: 16, alignSelf: 'flex-start' }}>
            {langs.map(L => (
              <button key={L} className={lang === L ? 'is-on' : ''} onClick={() => setLang(L)}>{L}</button>
            ))}
          </div>
        </div>
      </div>
      <div className="np-home-footer-bottom">
        <span>{t.footer.copy}</span>
        <span className="disclaimer">{t.footer.disclaimer}</span>
      </div>
    </footer>
  );
};

Object.assign(window, { HomeHeader, HomeHero, TrustStrip, Services, Sourcing, AboutPreview, QualityBand, PartnersCTA, NewsGrid, HomeFooter });
