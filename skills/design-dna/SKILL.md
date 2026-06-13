---
name: design-dna
description: Foundation for all UI design work — kills the generic AI look and derives a distinct visual identity (type, color, spacing, motion) before any pixels are placed. Use when designing or restyling any interface, and alongside the design-* style skills.
argument-hint: [the product/page and its audience]
---

# Design DNA — the anti-generic foundation

Designing: **$ARGUMENTS**

AI-designed pages all look the same because they're built from the statistical average of the web. This skill exists to make the *average choice illegal*. Every design decision below must be made deliberately, and the defaults are banned.

## The generic tells — banned unless explicitly requested

If the design contains these, it reads as template, regardless of polish:

1. **Inter/Roboto/system-ui for everything**, one weight axis, no display face.
2. **Purple-to-blue gradient** (`#6366F1` → `#8B5CF6` and friends), gradient text on the hero headline.
3. **rounded-2xl cards with soft drop shadows** repeated for every container; glassmorphism blur panels.
4. **Emoji as icons** (🚀✨💡) or one generic icon set at the same size everywhere.
5. **The template skeleton:** centered hero → three feature cards in a row → logo wall → testimonial carousel → CTA banner — each in a full-width band of alternating background.
6. **Vapor copy:** "Empower your workflow", "Seamlessly integrate", "Built for the modern team".
7. **Same border radius, same shadow, same 16/24px gap on every element** — uniformity where hierarchy should be.
8. **Centered everything** — title centered, paragraph centered, cards centered, no tension or direction.

## Derive the identity first (before any layout)

Work through this in order; write the result down as the design's contract.

### 1. Three adjectives
From the product's actual purpose and audience, pick exactly three (e.g. *"precise, calm, expensive"* or *"loud, fast, irreverent"*). Every later choice is tested against them. If the developer hasn't said, ask — or infer from the domain and state your assumption.

### 2. One reference world (not a website)
Anchor the visual language in something outside the web: a 1960s Swiss timetable, a botanical field guide, a Tokyo metro map, a vinyl sleeve, a laboratory notebook, a luxury menu. Steal its logic — its grid, its restraint, its texture — not its imagery.

### 3. Typography is the identity (decide it first)
- Two faces max: one with **character** for display, one **workhorse** for body/UI. Concrete pairings in [recipes.md](recipes.md).
- A real scale: pick a ratio (1.25 calm / 1.333 confident / 1.5 dramatic) and stick to its steps. The hero size should be slightly uncomfortable — if it feels safe, it's invisible.
- Set type like you mean it: headings tighter (letter-spacing −1% to −3%, line-height 1.0–1.15), body 1.5–1.7, measure 45–75ch, tabular numbers for data.

### 4. Color by construction, not selection
- Start from ONE brand hue chosen for the adjectives. Build neutrals by mixing that hue into gray (warm or cool — never pure `#808080` gray, never pure black on pure white; use e.g. `#1A1815` on `#FAF8F4`).
- Ratio 60/30/10: dominant neutral / secondary surface / accent. The accent appears only where you want the eye to land — if it's everywhere, it's nowhere.
- Define functional colors (success/warn/error) as variations harmonized with the palette, not stock green/yellow/red.
- Every pairing checked for WCAG AA contrast (4.5:1 body, 3:1 large/UI).

### 5. Space and structure with intent
- One spacing scale (4 or 8 base) used *unevenly*: generous around what matters, tight inside related groups. Whitespace is a hierarchy tool, not padding.
- Choose an alignment spine (usually left) and break the grid **once** per view, deliberately — an overlap, an off-axis image, an oversized number. One break is art direction; five is chaos.
- Radii, borders, shadows: pick ONE language (sharp+hairline / soft+layered / chunky+flat) and apply it everywhere. Mixing languages is the #1 amateur tell.

### 6. Motion with one personality
Pick the personality (snappy 120–200ms / smooth 250–400ms / springy with overshoot) and use it consistently. Motion only where it explains something (state change, origin, hierarchy). Always honor `prefers-reduced-motion`.

## Execution rules

- Real content beats lorem: write plausible copy, names, and numbers for the actual product — vapor copy makes any design generic.
- Empty, loading, and error states are designed, not left to chance — they're where products feel cheap. Skeletons match real layout; empty states say what to DO.
- Density matches purpose: marketing breathes, dashboards are information-dense. Don't put marketing-page air inside a data table.
- Accessibility is part of the aesthetic: visible focus states designed in the identity's language (run `/a11y` for the full pass).

## Self-check before delivering

Squint test: does the page have ONE clear focal point? Swap test: could this design belong to any random SaaS? (If yes, the identity failed — go back to step 1.) Adjective test: do the three adjectives describe what you actually built?

For named styles, layer the matching skill on top: `design-scholarly`, `design-minimal`, `design-expressive`, `design-brutalist`, `design-luxe`, `design-playful`, or `design-mood <emotion>`.
