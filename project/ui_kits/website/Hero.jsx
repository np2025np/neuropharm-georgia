// Hero — split serif headline + lead + dual CTA / abstract circuit-brain panel.

const Hero = ({ t }) => (
  <section className="np-hero">
    <div className="np-hero-grid">
      <div>
        <BracketedEyebrow color="var(--accent)">{t.hero.eyebrow}</BracketedEyebrow>
        <h1>{t.hero.headline}</h1>
        <p className="lead">{t.hero.lead}</p>
        <div className="np-hero-cta">
          <Button variant="primary" size="lg" icon={<ArrowRight />}>{t.hero.ctaPrimary}</Button>
          <Button variant="secondary" size="lg">{t.hero.ctaSecondary}</Button>
        </div>
      </div>
      <div className="np-hero-art">
        <div className="np-mark-bg" />
        <div className="np-mark">
          <BrainMark size={280} stroke={2.4} />
        </div>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
