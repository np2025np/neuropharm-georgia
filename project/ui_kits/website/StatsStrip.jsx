// Stats strip — 4 metrics on dark teal anchor surface.

const StatsStrip = ({ t }) => (
  <section className="np-stats">
    <div className="np-stats-inner">
      {t.stats.map((s, i) => (
        <div className="np-stat" key={i}>
          <div className="num">{s.num}</div>
          <div className="lbl">{s.lbl}</div>
        </div>
      ))}
    </div>
  </section>
);

window.StatsStrip = StatsStrip;
