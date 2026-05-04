// CTA banner — full-width call to action.

const CTABanner = ({ t }) => (
  <section className="np-cta-banner">
    <div className="np-cta-banner-inner">
      <div>
        <BracketedEyebrow color="var(--accent)">{t.cta.eyebrow}</BracketedEyebrow>
        <h2>{t.cta.headline}</h2>
      </div>
      <Button variant="primary" size="lg" icon={<ArrowRight />}>{t.cta.button}</Button>
    </div>
  </section>
);

window.CTABanner = CTABanner;
