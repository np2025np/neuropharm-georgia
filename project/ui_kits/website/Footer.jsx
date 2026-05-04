// Footer — full lockup, 4-column links, regulatory disclaimer.

const Footer = ({ t, lang }) => (
  <footer className="np-footer">
    <div className="np-footer-inner">
      <div className="np-footer-brand">
        <div className="lockup">
          <BrainMark size={44} stroke={4} />
          <span className="np-wordmark" style={{fontSize:16}}>NEUROPHARM</span>
        </div>
        <p className="desc">{t.footer.desc}</p>
      </div>
      <div>
        <h4>{t.footer.col1}</h4>
        <ul>
          <li><a>{t.nav.products}</a></li>
          <li><a>{t.footer.therapeuticAreas}</a></li>
          <li><a>{t.footer.search}</a></li>
        </ul>
      </div>
      <div>
        <h4>{t.footer.col2}</h4>
        <ul>
          <li><a>{t.nav.about}</a></li>
          <li><a>{t.footer.quality}</a></li>
          <li><a>{t.footer.careers}</a></li>
          <li><a>{t.footer.news}</a></li>
        </ul>
      </div>
      <div>
        <h4>{t.footer.col3}</h4>
        <ul>
          <li><a>{t.footer.contact}</a></li>
          <li><a>{t.footer.report}</a></li>
          <li><a>{t.footer.privacy}</a></li>
        </ul>
      </div>
    </div>
    <div className="np-footer-bottom">
      <span>© 2026 Neuropharm Georgia LLC · {t.footer.legal}</span>
      <span>{lang} · Tbilisi, Georgia</span>
    </div>
  </footer>
);

window.Footer = Footer;
