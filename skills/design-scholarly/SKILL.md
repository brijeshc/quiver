---
name: design-scholarly
description: Scholarly/editorial design language — the authority of a well-set academic journal or university press book, on the web. Use for research sites, documentation, essays, publications, archives, legal/medical content, or any product that must feel credible and serious.
argument-hint: [what to design]
---

# Design: Scholarly

Apply to: **$ARGUMENTS**. Foundation rules from `design-dna` apply; this skill sets the dial positions.

**Reference world:** a university press monograph + a well-set journal article. The design says: *this content was worth setting carefully.* Authority comes from typographic craft, not decoration.

## Typography (this style IS typography)

- Display & body: a true text serif — **Source Serif 4**, **Spectral**, or **EB Garamond** (larger sizes only for Garamond). UI chrome and captions: a quiet sans (**Source Sans 3** / **IBM Plex Sans**) or small-caps of the serif.
- Body 17–19px, line-height 1.6–1.7, **measure 60–70ch — sacred**. Never let text run full-width.
- Hierarchy by convention, not size explosion: calm scale (1.25). Italics for emphasis, small-caps with +8% tracking for labels and section numbers (`font-variant-caps: small-caps`).
- The craft details that sell it: real quotes (“ ”) and em-dashes, `hanging-punctuation` where supported, oldstyle figures in prose (`font-variant-numeric: oldstyle-nums`), tabular lining figures in tables, first paragraph after a heading unindented and subsequent ones indented (1.5em) with NO paragraph gaps — or gaps with no indents; never both.

## Color

- Paper, not screen: warm off-white `#FBF9F4`–`#F7F4EC`; ink `#1C1A17` (never pure black).
- ONE accent in the academic register: oxblood `#7A2E2E`, forest `#2D4A34`, or archive blue `#27425C` — for links, rules, and small-caps labels only.
- Links: accent color with underline (`text-underline-offset: 3px`, `text-decoration-thickness: 1px`). Scholarly pages underline their links.

## Structure

- **The scholar's margin:** asymmetric grid — generous left or right margin column (3–4 of 12 cols) holding side-notes, figure captions, dates, and section numbers. This single move makes the page read as editorial.
- Hairline rules (1px, ink at 20%) to separate sections — never card boxes or shadows. Content sits ON the page, not in containers.
- Numbered sections (1., 1.2, 1.3) where the content has any structure; figures captioned and numbered ("Fig. 3 — …"); a real table of contents for anything long.
- Footnotes/sidenotes as first-class citizens: superscript markers, notes in the margin on wide screens, collapsible inline on narrow.
- Tables set like journal tables: horizontal hairlines only (top, under header, bottom), no zebra stripes, no vertical lines, numbers right-aligned tabular.

## Imagery & texture

Diagrams over photos; engravings, maps, archival material where imagery is needed — treated with a subtle duotone toward the ink color. Optional 2–3% grain on the background. No stock photography of people pointing at laptops.

## Motion

Almost none, and that's the point. 200ms opacity/underline transitions. Anything that bounces or slides destroys the register.

## Never

Gradient anything · cards with shadows · emoji · bright saturated accents · centered body text · rounded-pill buttons (buttons here are rectangles with hairline borders or small-caps text links) · skeleton shimmer (use a quiet "Loading…" in italics).

## Self-check

Print test: would this look at home printed in a journal? Squint: is the hierarchy visible from type alone? Are the margins doing work (notes, captions) rather than just existing?
