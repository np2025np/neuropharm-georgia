// Header — sticky, with logo lockup, nav, language switcher, dark-mode toggle.

const Header = ({ lang, setLang, dark, setDark, page, setPage, t }) => {
  const langs = ['EN', 'KA', 'RU', 'PT'];
  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'products', label: t.nav.products },
    { id: 'about', label: t.nav.about },
    { id: 'partners', label: t.nav.partners },
    { id: 'contact', label: t.nav.contact },
  ];
  return (
    <header className="np-header">
      <div className="np-header-inner">
        <a className="np-logo" onClick={() => setPage('home')} style={{cursor:'pointer'}}>
          <BrainMark size={36} stroke={4} color="currentColor" />
          <span className="np-wordmark">NEUROPHARM</span>
        </a>
        <nav className="np-nav">
          {navItems.map(n => (
            <a key={n.id}
               className={page === n.id ? 'is-active' : ''}
               onClick={() => setPage(n.id)}
               style={{cursor:'pointer'}}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="np-header-tools">
          <div className="np-lang">
            {langs.map(L => (
              <button key={L} className={lang === L ? 'is-on' : ''} onClick={() => setLang(L)}>{L}</button>
            ))}
          </div>
          <button className="np-mode-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
            {dark ? <Sun /> : <Moon />}
          </button>
        </div>
      </div>
    </header>
  );
};

window.Header = Header;
