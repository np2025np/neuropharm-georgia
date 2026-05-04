---
name: neuropharm-design
description: Use this skill to generate well-branded interfaces and assets for Neuropharm Georgia (a pharmaceutical import/distribution company), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. Multi-script (KA / EN / RU / PT).
user-invocable: true
---

# Neuropharm Georgia design skill

Read **README.md** first — it covers brand context, content fundamentals, visual foundations, iconography, and an index to every other file. Then explore:

- `colors_and_type.css` — the single source of truth for tokens (light + dark). Always import this first.
- `assets/` — logo (lockup + brain mark, SVG + PNG, light + dark variants).
- `preview/` — small, focused HTML examples of every system primitive.
- `ui_kits/website/` — full marketing-site recreation in JSX. Lift components from here whenever appropriate.

## Workflow

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy the assets you need out of `assets/` and create static HTML files. Always:

- Load `colors_and_type.css` (or inline its tokens) so light/dark mode "just works."
- Use **Noto Serif** for headings, **Noto Sans** for body — never substitute.
- Keep colors restrained: dark teal anchor, coral activator, neutrals everywhere else.
- Use the **bracketed eyebrow** as a section opener wherever an eyebrow would normally go — it's the brand's signature device.
- Generous whitespace. Section padding starts at 96px vertical.
- No emoji. No medical clichés (pills, capsules, stethoscopes). No bluish-purple gradients.

If working on production code, adopt the tokens, fonts, and component patterns from `ui_kits/website/`.

## When invoked without further guidance

Ask the user what they want to build (web page, slide deck, mock-up, brochure, etc.), confirm which language(s) and which mode (light/dark/both), and act as an expert designer. Output HTML artifacts by default.
