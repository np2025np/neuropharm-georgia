// Pull quote — large serif, attribution.

const Quote = ({ t }) => (
  <section className="np-quote">
    <BracketedEyebrow color="var(--accent)">{t.quote.eyebrow}</BracketedEyebrow>
    <blockquote style={{ marginTop: 28 }}>"{t.quote.body}"</blockquote>
    <cite><strong>{t.quote.who}</strong> · {t.quote.role}</cite>
  </section>
);

window.Quote = Quote;
