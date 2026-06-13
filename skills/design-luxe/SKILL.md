---
name: design-luxe
description: Luxury/premium design — restraint, slowness, and typographic refinement that signal expense without saying it. Use for high-end products, hospitality, jewelry, fashion, premium SaaS tiers, agencies, anything that must feel exclusive and considered.
argument-hint: "[what to design]"
---

# Design: Luxe

Apply to: **$ARGUMENTS**. Foundation rules from `design-dna` apply; this skill sets the dial positions.

**Reference world:** a flagship boutique, a hotel lobby at midnight, a hardcover lookbook. Luxury is communicated by what's *withheld*: few elements, slow pace, perfect details. The instant tells of fake luxury — gold gradients, script fonts, sparkle — are exactly what real luxury never does.

## Typography

- Display: a high-contrast serif with real elegance — **Cormorant Garamond** (500–600), **Fraunces** (light, high optical size), or **Instrument Serif**. Body/UI: a refined quiet sans — **Figtree** or **Hanken Grotesk**, light-to-regular weights.
- The luxury signature: **letterspaced uppercase labels** — 11–13px, +12 to +20% tracking, 60% opacity ("COLLECTION · AUTUMN 2026"). Used for nav, categories, buttons.
- Display sizes large but light: 56–96px at weight 300–500 — mass comes from size, grace from lightness. Line-height 1.1, minimal negative tracking (elegance doesn't crush).
- Italics of the serif for accent words; generous body leading (1.7–1.8); measure 55–65ch.

## Color

- Deep, warm, and few: near-black with depth (`#14110F` espresso or `#101316` midnight) with ivory `#F6F2EA` — dark-dominant pages photograph as more expensive.
- Metallic accent **as a solid, never a gradient**: champagne `#C2A878`, antique gold `#A8894F`, or skip metal entirely for oxblood `#5C2E2E` / deep forest `#1F3A2D`. Accent on hairlines, small caps labels, and one CTA — a page can spend its accent exactly three times.
- Photography carries the rest of the color; UI stays in the neutral register and never competes.

## Space & pace

- The most whitespace of any style: section spacing 140–200px, hero content occupying perhaps 40% of the viewport with emptiness as the frame.
- One thing at a time: single product per viewport, single image full-bleed, a sentence alone on a dark screen. The scroll is a paced reveal, not a wall.
- Hairline rules (1px, 15–20% opacity) as the only dividers. No cards. No boxes. Content floats on the surface.
- Centered composition is permitted here (the one style where it signals formality rather than default) — but alternate with asymmetric image/text spreads (5/7) for rhythm.

## Imagery

Photography is half the design: large, full-bleed or generously margined, consistent treatment (slightly desaturated, warm shadow tint). Images never in rounded-corner cards — sharp edges or none. If real photography doesn't exist, use abstract texture (stone, fabric, paper grain) rather than stock people.

## Motion: slowness is the luxury

- Everything 400–700ms, `cubic-bezier(0.25, 0.1, 0.25, 1)` — unhurried, never sluggish on input (interactive feedback still ≤150ms; it's the *reveals* that take their time).
- Signature moves: images that scale 1.08→1 over 900ms as they enter; text that fades up 20px with 80ms staggers; a slow crossfade hero. On hover: underline draws itself left-to-right (300ms); images ease to 1.03.
- Nothing bounces, nothing spins, nothing slides in from off-screen sideways.

## Components

- Buttons: generous padding (16×40), 0 radius or hairline full-round (pick one), letterspaced uppercase label, outline style preferred; fill reserved for the single primary CTA per page.
- Forms: bottom-hairline inputs, serif placeholder italic, focus = hairline thickens to accent.
- Nav: sparse, letterspaced, perhaps just four words and a wordmark.

## Never

Gold/metallic gradients · script or "elegant" decorative fonts · sparkle, glow, or shine effects · dense feature grids · exclamation points or urgency copy ("LIMITED TIME!") — scarcity is implied, never shouted · loud badges · emoji · visible borders around everything · cheap stock photography (no photo beats a bad photo).

## Self-check

Withholding test: what did this page choose NOT to show or say? Pace test: does scrolling feel like being walked through a space? Tell test: any fake-luxury signals (gradient gold, script font, sparkle) hiding anywhere?
