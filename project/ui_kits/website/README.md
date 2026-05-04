# Neuropharm Georgia — Website UI Kit

A pixel-considered marketing-website kit that demonstrates the design system in motion. All components consume CSS variables from `../../colors_and_type.css`, so light/dark mode flips with `data-theme="dark"` on `<html>`.

> **Note.** No production code or Figma file was provided. These designs were derived from the brand brief (calm, GSK-style, restrained color, generous whitespace) and the logo. They are reference recreations of *what the marketing site should look like* — not a recreation of an existing site. When real product copy or page wireframes are provided, the components below should be re-skinned to match.

## Components

- `Header.jsx` — sticky header with logo lockup, primary nav, language switcher (KA / EN / RU / PT), and dark-mode toggle.
- `Hero.jsx` — split hero: serif headline + lead + dual CTA on the left, abstract circuit-brain composition on the right.
- `EyebrowHeading.jsx` — bracketed eyebrow + serif headline + optional intro paragraph; the standard section opener.
- `ProductsGrid.jsx` — 3-up therapeutic-category grid with hover-lift cards.
- `StatsStrip.jsx` — 4-up metric strip on a flat dark teal panel (the only "anchor" surface per page).
- `AboutSplit.jsx` — 7/5 column split: copy + image placeholder.
- `Quote.jsx` — large pull-quote with attribution.
- `LogoCloud.jsx` — manufacturer/partner logos in muted greyscale.
- `CTABanner.jsx` — full-width call-to-action band with eyebrow + headline + button.
- `Footer.jsx` — 4-column footer with full lockup, language switcher echo, regulatory disclaimer.

## Screens (in `index.html`)

The kit assembles the components into one continuous home-page screen, then exposes:

- **Light / Dark** toggle (header)
- **Language** switcher EN/KA/RU/PT (header) — copy actually changes
- **Page** switcher Home / Products / About / Contact

Built as a clickable click-through prototype. State lives in React `useState`; no router.
