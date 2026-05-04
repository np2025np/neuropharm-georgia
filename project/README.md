# Neuropharm Georgia — Design System

A design system for **Neuropharm Georgia**, a pharmaceutical import and distribution company operating in Georgia, with international touchpoints (the company communicates in Georgian, English, Russian, and Portuguese).

This system codifies the brand's identity: **clean, calm, corporate-pharmaceutical, trustworthy.** The reference point is the GSK aesthetic — generous white space, restrained color, large imagery, serif headlines, and clear hierarchy.

---

## Brand context

**Company.** Neuropharm Georgia imports and distributes pharmaceutical products. The category demands credibility, regulatory seriousness, and quiet confidence — never the cheerful illustration-heavy register of consumer health apps, and never the medical-cliché register of stock pills/capsules/stethoscopes.

**Logo.** A circuit-brain mark in dark teal: the left hemisphere is rendered as organic neural curves with rounded nodes; the right hemisphere is rendered as orthogonal circuit traces with terminal dots. The hemispheres meet at a central stem. Below the mark, a **NEUROPHARM** wordmark in confident sans-serif caps, with **GEORGIA** centered beneath it, bracketed by short horizontal rules — a typographic device borrowed throughout the system.

**Markets / scripts.** Multi-script support is non-negotiable: **Georgian (KA), English (EN), Russian (RU), Portuguese (PT).** This dictates the choice of Noto Serif + Noto Sans, both of which ship full Latin/Cyrillic/Georgian glyph sets out of the box.

---

## Sources provided

- `uploads/WhatsApp Image 2026-05-04 at 20.10.57.jpeg` — the original brand lockup. The full lockup (brain mark + NEUROPHARM wordmark + GEORGIA bracketed sub-line). All artwork in `assets/` was derived from this single source.

No codebase, no Figma file, no existing site, and no marketing copy were provided. Type direction, spacing, and component patterns are extrapolated from the brand brief and the GSK reference.

---

## Index

```
README.md                    ← you are here
SKILL.md                     ← cross-compatible Agent Skill manifest
colors_and_type.css          ← color + type tokens for both modes (single source of truth)

assets/
  logo-original.jpeg         ← unmodified upload
  logo-lockup-light.png      ← bitmap lockup, off-white background
  logo-lockup-dark.png       ← bitmap lockup, deep teal background
  logo-lockup.svg            ← clean SVG recreation of the lockup (recommended for code use)
  brain-mark.svg             ← brain-circuit mark only (header/favicon/inline icon)
  brain-mark-light.png       ← bitmap brain mark, light bg
  brain-mark-dark.png        ← bitmap brain mark, dark bg

preview/                     ← design system tab cards (color, type, components, etc.)

ui_kits/
  website/                   ← marketing site UI kit (header, hero, sections, footer, etc.)

fonts/                       ← font notes (currently CDN-loaded; see "Fonts" below)
preview/                     ← 24+ design-system cards (registered in the Design System tab)
screenshots/                 ← reference shots of the website UI kit (light + dark)
```

### Manifest

| File / folder            | What's in it                                                              |
|--------------------------|---------------------------------------------------------------------------|
| `README.md`              | Brand context, content fundamentals, visual foundations, iconography     |
| `SKILL.md`               | Cross-compatible Agent Skill manifest — read first if invoking as a skill|
| `colors_and_type.css`    | All tokens (color, type, spacing, radius, shadow, motion) + element defaults |
| `assets/`                | Original logo, SVG recreations, brain mark + lockup in light & dark      |
| `preview/`               | Atomic preview cards: brand, colors, type, spacing, components           |
| `ui_kits/website/`       | Marketing site recreation — Header, Hero, ProductsGrid, StatsStrip, AboutSplit, Quote, LogoCloud, CTABanner, Footer + i18n + index.html |
| `screenshots/`           | Reference renders of the website kit                                     |

---

## Fonts

The system specifies **Noto Serif** for headings and **Noto Sans** for body, both required for multi-script coverage (Georgian, English, Russian, Portuguese — all four scripts are bundled in Google's Noto family).

Currently `colors_and_type.css` loads them via Google Fonts CDN (`@import url('https://fonts.googleapis.com/...')`). For production self-hosting, drop the .woff2 files into `fonts/` and replace the `@import` with local `@font-face` rules.

> **🚩 Substitution flag.** No font files were uploaded — the system uses the Google-hosted Noto Serif and Noto Sans. If your legal/IT policy requires self-hosted fonts, please attach the `.woff2` files (or confirm Google Fonts is acceptable) and we'll swap to local `@font-face`.

---

## Content fundamentals

The brand has not produced public copy yet, so these guidelines are derived from the brief (calm, corporate, trustworthy, GSK-style) and apply consistently across the four supported languages.

**Voice.** Quiet, clinical, factual. The brand explains rather than persuades. It does not exclaim. It rarely uses superlatives. It assumes a regulator, a pharmacist, or a hospital procurement officer is reading.

**Tone.** Reassuring without being warm. Confident without being boastful. Plain language over jargon, but happy to use the right technical term when it's the right term.

**Person.**
- "We" for the company. Used sparingly — the brand prefers the passive or institutional voice ("Products are imported under…", not "We import products under…") when the actor is obvious.
- "You" for partner-facing communication only (procurement, distributor onboarding, careers).
- Never "I."

**Casing.**
- Sentence case for headings, buttons, and nav. **Not** title case.
- ALL CAPS reserved for the wordmark, logo lockup, and **eyebrow labels** with wide letter-spacing (e.g. `OUR PRODUCTS`, `2024 ANNUAL REPORT`). Never for body copy or buttons.
- Acronyms (GMP, EMA, FDA, ISO) keep their conventional casing.

**Numbers and units.** Spell out one through nine in flow copy; numerals for 10+ and always for measurements/dosages/years. Use a non-breaking space between number and unit (`50 mg`, not `50mg`). ISO date format (`2026-05-04`) in regulatory contexts, "4 May 2026" in editorial.

**Emoji.** **Never.** Not in headers, not in body, not in UI labels. The brand is pharmaceutical-corporate.

**Punctuation.** Em dash with hair spaces (`A — B`, not `A-B`) for asides. Oxford comma. No exclamation marks except in genuine emergency notices ("Recall notice!"). Single space after periods.

**Examples.**

> ✅ **Importing trusted medicines into Georgia since 2014.**
> ✅ Neuropharm Georgia partners with leading European manufacturers to bring evidence-based therapies to the Georgian market.
> ✅ View the 2024 annual report
> ✅ For healthcare professionals
>
> ❌ ~~Welcome! 🌿 We're so excited to bring you the best meds!~~
> ❌ ~~Discover Our Amazing Range Of Products~~ (title case + hype)
> ❌ ~~50mg per dose~~ (no space)

**Disclaimers.** Regulatory and safety disclaimers appear in `--fs-small` weight 400, color `--fg-muted`, with generous space above. Never colored boxes, never icons, never bold red.

---

## Visual foundations

### Color
A two-color brand: **dark teal `#1F4F4A`** as the anchor (logo, headings, header bar, footer) and **coral `#F36633`** as the activator (CTAs, links, focus rings, accent rules). Everything else is neutral — off-white paper, charcoal ink, soft borders. No supporting palette of "fun" hues. Restraint is the point.

In dark mode the bg shifts to deep teal-black `#0B1F1D`, the body text inverts to off-white, and **the coral primary stays the same hex** — it was chosen specifically for contrast on both backgrounds. Headings in dark mode render in off-white (not in the desaturated teal used in light mode) to maintain hierarchy.

### Typography
- **Headings:** Noto Serif. Generous sizes (display ~64px desktop, ~40px mobile via `clamp()`). Weight 600 standard; 700 for the largest display. Tight line-height (`1.15`) and slightly negative tracking.
- **Body:** Noto Sans. 16–18px, line-height 1.6, max-width ~68ch.
- **Eyebrows:** Noto Sans, 12px, weight 600, `letter-spacing: 0.18em`, ALL CAPS, often coral. The "bracketed eyebrow" — short horizontal rules either side, echoing the `— GEORGIA —` device in the logo — is a signature pattern. Use it for section openers.

### Spacing & rhythm
GSK-grade breathing room. Section padding starts at **96px** vertical and goes up to **160px** for hero / brand-anchor sections. Cards have **24–32px** internal padding. Components are not crammed; whitespace is content.

### Backgrounds
- **Default:** flat off-white (`--bg`) or flat white (`--bg-elevated`). No gradients in body content.
- **Hero / accent:** occasional full-bleed photography (cool-warm, naturalistic, never tinted blue) or flat dark teal (`--bg-inverse`).
- **Repeating pattern:** a subtle dotted/grid pattern derived from the brain-circuit nodes is permitted as a watermark on dark teal panels at very low contrast (~6% lightness delta). Never as a busy background.
- **No gradients** in CTAs, buttons, or cards. The GSK reference uses gradients only in the rarest hero-photography overlays.

### Animation
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (standard "smooth-out") for everything.
- Durations: 120 / 200 / 360 ms tokens. Nothing slower in functional UI.
- **No bounces. No springs. No staggered text reveals.** Pharma-corporate = quiet motion.
- Fades and 4–8px translate-Y reveals are appropriate for scroll-into-view of large sections; everything else is instant or color-only transitions.

### Hover states
- Buttons: darken background by one step (`--brand` → `--brand-hover`) with 200ms transition. No scale, no lift.
- Cards: a 1–2px lift (`translateY(-2px)`) plus shadow upgrade from `--shadow-xs` to `--shadow-md`, plus a 1px border color shift toward `--border-strong`. Never a glow.
- Links: color shift from `--brand` to `--accent`. Underline thickness can grow from 1px to 2px.

### Press / active states
- Buttons: shift to a one-step-darker background (no scale-down). Internal shadow optional but usually omitted.
- Cards: drop the lift (`translateY(0)`).

### Borders
1px hairlines in `--border` (light, `#E5E5E0`) for nearly everything. `--border-strong` for emphasis or hover. Inputs use a 1.5px focus border in coral. Decorative section dividers can be 1px lines in `--border` set inside generous whitespace — never thick rules.

### Shadows
Three-tier system, all very subtle, all neutral-tinted:
- `--shadow-xs` — 1px subtle, default for cards at rest.
- `--shadow-sm` — 2–6px, used on dropdowns and small floats.
- `--shadow-md` — 6–16px, used on hover-lifted cards.
- `--shadow-lift` — 10–24px, sparingly, for modals only.

Pharma-corporate: **prefer borders over shadows.** A card should feel printed, not floating.

### Corner radii
Restrained: **4–10px**. Buttons `8px`. Cards `10px`. Inputs `6px`. Pills `999px` for tag chips only. Never `2xl/3xl` rounding — that's consumer-app territory.

### Cards
A card is: `--bg-elevated` background, `1px solid --border`, `--radius-lg` (10px), `24–32px` padding, optional `--shadow-xs` at rest. On hover: `translateY(-2px)`, `--shadow-md`, `border-color: --border-strong`. Never colored backgrounds. Never colored left-border accents (a banned cliché). Never gradient backgrounds.

### Transparency & blur
Used sparingly. The sticky header uses `backdrop-filter: blur(12px)` with a `rgba(250,250,247,0.85)` background in light mode, `rgba(11,31,29,0.85)` in dark — so content scrolling beneath shows through softly. Modal scrims use a flat `rgba(11,31,29,0.55)` (no blur) to keep focus on the dialog. No frosted-glass cards in body content.

### Layout rules
- Three container widths: `--container-narrow` (760px, long-form text), `--container-base` (1080px, default), `--container-wide` (1280px, full marketing).
- Asymmetric grids welcome — 7/5 splits, full-bleed image left + 6-col copy right.
- The sticky header, language switcher, and mode toggle are the only fixed elements. No floating chat bubbles, no sticky footers, no scroll-to-top buttons.
- Generous gutters (`--space-5` minimum at desktop).

### Imagery
Color vibe: **neutral and naturalistic.** Daylight, not tinted. Slight warmth is fine; cool blue-tinted "tech" photography is wrong. No grain, no duotones, no overlay effects. People imagery should be clinical/professional environments — labs, pharmacies, hospital corridors — never stock-medical (no white-coats-pointing, no pills cascading). Abstract scientific photography (microscopy, geometric architecture) is encouraged.

### Iconography motif
The brand has no formal icon set, but the brain-circuit logo defines the visual language: **dot-and-line nodes**, orthogonal traces, organic curves with terminal beads. When custom decorative graphics are needed, lean on this vocabulary. See `## Iconography` below.

### Forbidden visual moves
- ❌ Pills, capsules, mortar-and-pestle, stethoscopes, cross-and-snake — medical clichés.
- ❌ Bluish-purple gradients ("AI gradient")
- ❌ Cards with rounded corners and a colored left border accent
- ❌ Emoji
- ❌ Hand-drawn / sketchy illustrations
- ❌ Big drop shadows
- ❌ Heavy color usage — the brand is two colors against neutral.

---

## Iconography

The brand ships **no proprietary icon set**, so we use a CDN-hosted set: **[Lucide](https://lucide.dev)** (`lucide@latest` via unpkg/jsdelivr).

**Why Lucide:** stroke-based, 1.5–2px weight, rounded line-caps, geometric construction. The stroke vocabulary matches the brain-circuit logo perfectly — the same dots, lines, and terminal nodes. Heroicons-outline would be a close second.

**Usage rules.**
- **Stroke width:** `1.75` (the Lucide default). Never fill icons; always stroke.
- **Color:** `currentColor` — icons inherit text color. In nav, that's `--fg-muted`; in CTAs, that's the button text color.
- **Size:** 16px (inline with body), 20px (UI controls), 24px (nav, list bullets), 32px+ (feature illustrations).
- **Spacing:** when adjacent to text, use a `gap: 8px` (one space-2 unit), not a margin on the icon.
- **Decorative use:** for hero/feature blocks, the brand mark itself or a fragment of it (the nodes-and-traces motif) is preferred over a generic Lucide icon.

**Emoji:** never. Not in UI, not in copy.

**Unicode-as-icon:** never (no `→`, `✓`, `★` as decoration). Use Lucide's `arrow-right`, `check`, `star`.

> 🚩 **Substitution flag.** Lucide is a substitute set, not a brand-owned set. If Neuropharm later commissions a custom icon set, swap the CDN reference and document it here.

---

## How to use this system

1. **Page-level reset & tokens:** load `colors_and_type.css` first. It sets up `:root` and `[data-theme="dark"]` token blocks plus element-level defaults (h1/h2/p/a, eyebrow, focus ring, selection).
2. **Components:** import the JSX from `ui_kits/website/` — `Header.jsx`, `Hero.jsx`, `Footer.jsx`, etc. Each component reads from CSS tokens, so dark mode "just works."
3. **Theme toggle:** flip `<html data-theme="dark">` ↔ remove it. The `Header.jsx` ships a working toggle.
4. **Iconography:** `<i data-lucide="arrow-right"></i>` + `lucide.createIcons()` after page load. Or copy the SVG you need into `assets/` for a fixed offline footprint.

---

## Open questions / asks for the user

See "🚩" callouts above. The big two:

1. **Fonts** — confirm Google Fonts CDN is acceptable, or attach `.woff2` files for Noto Serif & Noto Sans.
2. **Iconography** — confirm Lucide as the substitute icon set, or attach a brand-owned set.

Plus:

3. **Real product copy** — when you have draft copy in any of the four languages, send it over and we'll calibrate the content fundamentals to actual examples instead of derived ones.
4. **Real photography** — when image direction is finalized, drop reference shots into `assets/photography/` and we'll wire them into the hero / about / product templates.
