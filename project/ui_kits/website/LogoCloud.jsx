// Logo cloud — manufacturer/partner placeholders, restrained.

const LogoCloud = ({ t }) => (
  <section className="np-logo-cloud">
    <div className="label">{t.partners.label}</div>
    <div className="np-logo-cloud-row">
      <div className="item">Sanofi&middot;</div>
      <div className="item alt">PIERRE FABRE</div>
      <div className="item">Recordati</div>
      <div className="item alt">SERVIER</div>
      <div className="item">Krka</div>
    </div>
  </section>
);

window.LogoCloud = LogoCloud;
