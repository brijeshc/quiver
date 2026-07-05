# Dial positions for /design-scholarly

## Typography (this style IS typography)

- Display & body: a true text serif - Source Serif 4, Spectral, or EB Garamond (larger sizes only for Garamond). UI chrome and captions: a quiet sans (Source Sans 3 / IBM Plex Sans) or small-caps of the serif.
- Body 17-19px, line-height 1.6-1.7, measure 60-70ch - sacred. Never let text run full-width.
- Hierarchy by convention, not size explosion: calm scale (1.25). Italics for emphasis; small-caps with +8% tracking for labels and section numbers (`font-variant-caps: small-caps`).
- The craft details that sell it: real quotes, `hanging-punctuation` where supported, oldstyle figures in prose (`font-variant-numeric: oldstyle-nums`), tabular lining figures in tables, and one paragraph convention - indents (1.5em, first paragraph unindented) with no gaps, or gaps with no indents; never both.

## Color

- Paper, not screen: warm off-white `#FBF9F4`-`#F7F4EC`; ink `#1C1A17` (never pure black).
- ONE accent in the academic register: oxblood `#7A2E2E`, forest `#2D4A34`, or archive blue `#27425C` - for links, rules, and small-caps labels only.
- Links: accent color with underline (`text-underline-offset: 3px`, `text-decoration-thickness: 1px`). Scholarly pages underline their links.

## Structure

- **The scholar's margin:** asymmetric grid - a generous left or right margin column (3-4 of 12 cols) holding side-notes, figure captions, dates, and section numbers.
- Hairline rules (1px, ink at 20%) separate sections; never card boxes or shadows. Content sits ON the page, not in containers.
- Numbered sections (1., 1.2, 1.3) where content has structure; figures captioned and numbered ("Fig. 3 - ..."); a real table of contents for anything long.
- Footnotes/sidenotes as first-class citizens: superscript markers, notes in the margin on wide screens, collapsible inline on narrow.
- Tables set like journal tables: horizontal hairlines only (top, under header, bottom), no zebra stripes, no vertical lines, numbers right-aligned tabular.

## Imagery & texture

Diagrams over photos; engravings, maps, archival material where imagery is needed, treated with a subtle duotone toward the ink color.
Optional 2-3% grain on the background.
No stock photography of people pointing at laptops.

## Motion

Almost none, and that is the point: 200ms opacity/underline transitions.
Anything that bounces or slides destroys the register.

## Never

Gradient anything · cards with shadows · emoji · bright saturated accents · centered body text · rounded-pill buttons (buttons here are rectangles with hairline borders or small-caps text links) · skeleton shimmer (use a quiet "Loading..." in italics).
