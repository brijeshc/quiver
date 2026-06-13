---
name: design-expressive
description: Creative, art-directed design — editorial-poster energy, oversized type, deliberate grid breaks, and one unforgettable moment per page. Use for portfolios, campaign/launch pages, agencies, events, brands that must be memorable rather than safe.
argument-hint: "[what to design]"
---

# Design: Expressive

Apply to: **$ARGUMENTS**. Foundation rules from `design-dna` apply; this skill sets the dial positions.

**Reference world:** a great magazine cover, a concert poster, a title sequence. The goal is a page someone screenshots. Expressive design is loud **on purpose, in one place at a time** — chaos everywhere is as forgettable as minimal-gray everywhere.

## The one big idea

Before styling anything, decide the page's single memorable move — the thing a visitor describes later. Examples: a headline so large it crops off-canvas; type that interacts with an image (text behind/in front of a cutout subject); a horizontal scroll chapter; an element that follows the cursor; a violent color flip between sections. **One** big idea, executed flawlessly, supported by everything else being quietly excellent. Two big ideas compete; five are noise.

## Typography as the protagonist

- Display face with a personality: **Clash Display**, **Bricolage Grotesque** (heavy weights), **Unbounded**, or an unexpected high-contrast serif at huge sizes (**Fraunces** 900). Body stays disciplined: **General Sans**, **Public Sans** — the contrast between wild display and calm body IS the sophistication.
- Scale: dramatic (1.5) and beyond — heroes at 96–200px, viewport-relative (`clamp(64px, 12vw, 200px)`), tracking −3 to −5%, line-height 0.95–1.05.
- Treat type as image: mixed weights within one headline, an italic word for emphasis, outlined (`-webkit-text-stroke`) vs filled words, a word knocked out by an image, vertical or rotated labels along edges.
- Body text remains readable: 16–18px, 1.6, ≤70ch. Expression lives in display; never sacrifice the reading layer.

## Color

- Commit to a strong stance: two to three confident colors, not a rainbow. Recipes: electric on dark (`#CCFF00` on `#111111`) · clash pair (cobalt `#1F3FFF` + blood orange `#FF4D00`) · hot pastels (salmon, butter, sky at full saturation, off-black ink).
- Color blocks as architecture: full-bleed section backgrounds that flip the scheme (light section → dark section → accent-flooded section). The flip is the rhythm of the page.
- Text selection color, scrollbar, and focus rings styled to the palette — the details that show intent.

## Layout: break the grid like you own it

- Build a strict 12-col grid, then violate it deliberately: headlines spanning off-canvas, images overlapping two sections, a paragraph starting at column 7, elements at slight rotation (−2° to 3°), stacked/overlapping z-layers with the text on top.
- Asymmetry everywhere; whitespace appears in unexpected places (a near-empty viewport-height pause between dense sections is a power move).
- Marquees (slow, pausable), oversized section numbers (01, 02) as graphic elements, sticky elements that hold while content scrolls past.

## Motion: the second protagonist

- Entrances with conviction: headlines reveal per-line with a clip-path or translate+fade, 500–700ms, expressive easing `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 60–80ms.
- Scroll-driven moments: parallax at different depths (subtle, 0.85–1.15 speed factors), images scaling from 1.1→1 as they enter, the one big idea often lives here.
- Hover states that delight: images that tilt/zoom, links with sliding underlines or word-swap effects, cursor that changes over interactive zones.
- Discipline: 60fps or it ships without the effect (transform/opacity only); full `prefers-reduced-motion` fallback where the page works perfectly static.

## Never

The big idea executed timidly (an 80px headline is just a headline — 160px is a statement) · ten effects at 70% quality instead of three at 100% · gradient-text-on-purple (loud ≠ that) · sacrificing body readability or a11y for the show · motion that blocks reading or input · breaking the grid before establishing it.

## Self-check

Screenshot test: is there a frame someone would post? Memory test: name the one big idea in five words. Calm test: is the body reading layer still disciplined underneath the show?
