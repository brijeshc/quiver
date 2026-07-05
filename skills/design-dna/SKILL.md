---
name: design-dna
description: Foundation for all UI design work - kills the generic AI look and derives a distinct visual identity (type, color, spacing, motion) before any pixels are placed. Use when designing or restyling any interface, and alongside the design-* style skills.
argument-hint: "[the product/page and its audience]"
---

# Design DNA

Designing: **$ARGUMENTS**

AI-designed pages converge on the statistical average of the web; this skill makes the average choice illegal.

## Banned generic tells

Any of these reads as template: Inter/Roboto/system-ui for everything; purple-to-blue gradients and gradient hero text; rounded-2xl cards with soft shadows on every container; glassmorphism panels; emoji as icons; the centered-hero -> three-feature-cards -> logo-wall -> CTA skeleton; vapor copy ("Empower your workflow"); identical radius/shadow/gap everywhere; centered everything.

## Derive the identity, in order, before any layout

1. **Three adjectives** from the product's purpose and audience ("precise, calm, expensive"). Every later choice is tested against them; if unstated, ask or declare your assumption.
2. **One reference world outside the web** (a Swiss timetable, a field guide, a vinyl sleeve): steal its grid, restraint, and texture, never its imagery.
3. **Typography first**: two faces max - one display with character, one workhorse (pairings in [recipes.md](recipes.md)); a real scale ratio (1.25 calm / 1.333 confident / 1.5 dramatic); headings tight (tracking -1 to -3%, line-height 1.0-1.15), body 1.5-1.7, measure 45-75ch, tabular numbers for data.
4. **Color by construction**: one brand hue; neutrals mixed from it (never pure gray, never #000 on #FFF); 60/30/10 dominant/secondary/accent; functional colors harmonized, not stock; every pairing AA-checked.
5. **Space with intent**: one scale (4 or 8 base) used unevenly - generous around what matters, tight within groups; one deliberate grid break per view; ONE radius/border/shadow language.
6. **Motion with one personality**: snappy 120-200ms, smooth 250-400ms, or springy; only where it explains something; `prefers-reduced-motion` honored.

Write the result down as the design's contract before building.

## Execution

Real content, never lorem; designed empty/loading/error states; density matched to purpose (marketing breathes, dashboards are dense); focus states designed in the identity's language (`/a11y-audit` for the full pass).

## Self-check

Squint test: one clear focal point?
Swap test: could this belong to any random SaaS? If yes, back to step 1.
Adjective test: do the three adjectives describe what got built?

