// About split — 7/5 layout, copy + image placeholder.

const AboutSplit = ({ t }) => (
  <section className="np-section">
    <div className="np-about">
      <div>
        <BracketedEyebrow color="var(--brand)">{t.about.eyebrow}</BracketedEyebrow>
        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'var(--fs-h2)',
          fontWeight: 600,
          lineHeight: 1.15,
          color: 'var(--brand)',
          letterSpacing: '-0.01em',
          margin: '16px 0 16px',
          textWrap: 'balance',
        }}>{t.about.headline}</h2>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 18, lineHeight: 1.6,
          color: 'var(--fg-muted)',
          maxWidth: '60ch',
          margin: 0,
        }}>{t.about.body}</p>
        <ul className="np-about-list">
          {t.about.points.map((p, i) => (
            <li key={i}><Check size={18} />{p}</li>
          ))}
        </ul>
        <Button variant="secondary">{t.about.cta}</Button>
      </div>
      <div className="np-about-image">
        <span className="placeholder-corner">— Image · 4:5</span>
        <span>Laboratory · daylight · neutral</span>
      </div>
    </div>
  </section>
);

window.AboutSplit = AboutSplit;
