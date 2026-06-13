# Design DNA — concrete recipes

Reference material for /design-dna. All fonts listed are free (Google Fonts or Fontshare) so they can be used in any project without licensing questions.

## Typography pairings (display + body)

Pick by adjective, then make it yours with weight/spacing choices:

| Feels like | Display | Body/UI | Notes |
|---|---|---|---|
| Editorial authority | Fraunces | Source Serif 4 | Optical sizes; use Fraunces "wonk" axis sparingly |
| Quiet precision | Instrument Serif | Instrument Sans | Hairline rules, tabular figures |
| Engineering confidence | Space Grotesk | IBM Plex Sans | Plex Mono for data/code |
| Warm humanist | Bricolage Grotesque | Public Sans | Bricolage at heavy weights only |
| Modern luxury | Cormorant Garamond (600) | Figtree | Letterspaced caps for labels |
| Lab notebook | Spectral | IBM Plex Mono (body!) | Mono body = instant character; keep sizes modest |
| Bold contemporary | Clash Display (Fontshare) | General Sans (Fontshare) | Tight tracking on display |
| Friendly product | Gambetta (Fontshare) | Nunito Sans | Round but not childish |
| Brutal/raw | Archivo Black | Archivo | One family, extreme weight contrast |
| Retro-tech | Unbounded | Space Mono | Use Unbounded above 48px only |

Single-family option (minimalism): one variable font — Geist, Instrument Sans, or Archivo — using ONLY weight and size for hierarchy. Harder than it looks; spacing must do the work.

## Type scale recipes

Base 16px (body). Steps = base × ratio^n, rounded to the nearest sensible px.

- **Calm (1.25):** 16 / 20 / 25 / 31 / 39 / 49 / 61
- **Confident (1.333):** 16 / 21 / 28 / 38 / 50 / 67 / 89
- **Dramatic (1.5):** 16 / 24 / 36 / 54 / 81 / 122 — heroes earn three-digit sizes

Rules of thumb: UI chrome (labels, captions) 12–14px medium-weight, +2–6% letter-spacing, often uppercase. Display >40px gets line-height 1.0–1.1 and negative tracking. Never justify text on the web.

## Palette construction recipes

Never hex-pick at random. Construct:

1. **Choose the brand hue** (H in HSL/OKLCH) from the adjectives:
   warm trust 20–40° · energy 0–20° or 35–50° · growth/nature 120–160° · calm competence 200–230° · premium depth 250–280° (careful: AI-purple zone — keep saturation low or go very dark) · unconventional 300–340°
2. **Neutrals carry the hue:** text = hue at S 10–20%, L 8–15%. Background = hue at S 5–15%, L 96–98% (light mode) or L 10–14% (dark mode). This tint is what makes a palette feel designed.
3. **Accent:** brand hue at high chroma, used at ≤10% of any view. Optional second accent at a 30–60° offset (analogous, safe) or ~180° (complementary, bold) — never more than two accents.
4. **Functional colors:** shift stock semantics toward the palette. Warm palette → error is brick `#B3382C`, not `#FF0000`; success is olive-leaning, not bootstrap green.
5. **Dark mode is its own palette:** desaturate accents ~15%, never pure-black backgrounds (use hue-tinted L 10–14%), elevate surfaces by lightening, not shadows.

## Spacing & layout recipes

- Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Sections get 96–128, related elements 8–16. The CONTRAST between loose and tight creates grouping — uniform 24px everywhere reads as template.
- Grids with character: 12-col is fine, but try: asymmetric split (5/7 or 4/8) for marketing; a fat left margin column for editorial (the "scholar's margin"); full-bleed breaks for images only.
- The one allowed grid-break per view: an element that overlaps two sections, an oversized stat, a rotated label, an image escaping its column.

## Motion recipes

- **Snappy:** 120–180ms, `cubic-bezier(0.2, 0, 0, 1)` — tools, dashboards
- **Smooth:** 250–400ms, `cubic-bezier(0.4, 0, 0.2, 1)` — marketing, luxury
- **Springy:** spring(mass 1, stiffness 300, damping 20) or 300ms with overshoot — playful products
- Stagger list entrances 30–50ms apart, max ~8 items. Hover states 100–150ms in, instant-ish out. Page-level transitions only if they explain spatial relationships.
- Every animation wrapped in `@media (prefers-reduced-motion: no-preference)`.

## Texture & depth (pick ONE language)

- **Flat + hairline:** 1px borders in tinted neutral, no shadows, color blocks for grouping
- **Soft layered:** 2-layer shadows (ambient + key: `0 1px 2px rgba(h,5%), 0 8px 24px rgba(h,8%)`), radius 8–12px
- **Hard offset:** solid 2px borders, shadow as solid offset block (4px 4px 0), radius 0–4px
- **Paper:** subtle grain/noise overlay (2–4% opacity), warm neutrals, hairline rules, serif headings
