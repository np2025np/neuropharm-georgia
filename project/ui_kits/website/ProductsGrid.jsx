// Products grid — 3-up therapeutic categories.

const ProductsGrid = ({ t }) => {
  const items = [
    { icon: <Activity size={24} />, title: t.products.cardio.title, body: t.products.cardio.body },
    { icon: <Shield size={24} />,   title: t.products.neuro.title,  body: t.products.neuro.body  },
    { icon: <Layers size={24} />,   title: t.products.onco.title,   body: t.products.onco.body   },
  ];
  return (
    <section className="np-section">
      <div className="np-section-head">
        <BracketedEyebrow color="var(--brand)">{t.products.eyebrow}</BracketedEyebrow>
        <h2>{t.products.headline}</h2>
        <p>{t.products.intro}</p>
      </div>
      <div className="np-products">
        {items.map((it, i) => (
          <article className="np-product-card" key={i}>
            <div className="icon-wrap">{it.icon}</div>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
            <span className="more">{t.products.more} <ArrowRight size={14} /></span>
          </article>
        ))}
      </div>
    </section>
  );
};

window.ProductsGrid = ProductsGrid;
