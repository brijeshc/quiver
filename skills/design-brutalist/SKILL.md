---
name: design-brutalist
description: Brutalist/raw web design — exposed structure, hard borders, stark contrast, zero decoration pretending otherwise. Use for dev tools, indie products, zines, portfolios, and brands that want anti-corporate honesty with craft underneath.
argument-hint: [what to design]
---

# Design: Brutalist

Apply to: **$ARGUMENTS**. Foundation rules from `design-dna` apply; this skill sets the dial positions.

**Reference world:** béton brut architecture, early-web honesty, a screen-printed gig flyer, a terminal. Brutalism shows the structure instead of hiding it — but *crafted* rawness: every "ugly" choice is exact. The difference between brutalist and broken is alignment.

## Typography

- One family, extreme weights: **Archivo** (Black for display, Regular for body) — or mono everything: **Space Mono** / **IBM Plex Mono** for the full terminal register.
- Display huge and flat: 64–120px, weight 900, line-height 1.0, no tricks — the weight is the design. UPPERCASE section labels with wide tracking (+8%).
- Body 16–17px, line-height 1.55. Mono for all data, numbers, and metadata.

## Color

- Stark base: true black `#000` on white `#FFF` (the one style where pure black-on-white is correct), or inverted.
- One brutal accent at full saturation: signal yellow `#FFE600`, klein blue `#0033FF`, or safety orange `#FF4400` — used as solid blocks (a flooded section, a highlight bar behind text, a button), never as a tint or gradient.
- Hover = inversion: black↔white or black↔accent swap, instant.

## Structure: the grid is visible

- Borders do everything: 2px solid black on cells, tables, buttons, images. Sections divided by borders, not whitespace. The page can literally be a visible table — embrace `grid` with `gap: 2px; background: #000` so the gaps draw the lines.
- No shadows except **hard offset**: `box-shadow: 4px 4px 0 #000` (and the element moves into it on `:active` — translate 4px,4px and drop the shadow: the one perfect brutalist micro-interaction).
- Radius: 0. Everywhere. One rounded corner collapses the style.
- Expose the metadata: timestamps, file sizes, version numbers, coordinates, index numbers (001, 002) — printed in mono as part of the design. Underline all links, visited state styled. Default-looking is fine when it's deliberate.
- Density is welcome: brutalism doesn't fear a full page. Group with borders, not air.

## Components

- Buttons: rectangles, 2px border, uppercase mono label, hard offset shadow, the press animation above. Primary = accent fill, secondary = white fill.
- Forms: visible 2px-border inputs, labels uppercase above, focus = accent 3px outline (a11y handled with style).
- Images: raw, bordered, optionally high-contrast B&W or dithered; captioned in mono. No soft masks or rounded crops.
- Tables: full grid lines (the one style where vertical rules are right), header row inverted (black bg, white text).

## Motion

Mostly instant — state changes snap (0ms or ≤100ms steps, `steps()` easing is in-register). Allowed: marquees (the brutalist signature — slow, pausable), blinking cursor/underscore accents, the button-press translate. Banned: ease-in-out fades, springs, parallax, anything smooth.

## Never

Rounded corners · soft shadows or blur · gradients · pastels or muted tones · more than one accent · Inter-and-cards corporate layouts wearing a black border as costume · sloppy alignment (rawness in the aesthetic, precision in the execution) · illegible contrast stunts — body text stays AA-readable.

## Self-check

Structure test: can you see the grid without devtools? Honesty test: is anything decorated to look like something it isn't? Precision test: are all the hard edges actually aligned to the pixel?
