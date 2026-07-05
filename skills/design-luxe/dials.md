# Dial positions for /design-luxe

## Typography

- Display: a high-contrast serif with real elegance - Cormorant Garamond (500-600), Fraunces (light, high optical size), or Instrument Serif. Body/UI: a refined quiet sans - Figtree or Hanken Grotesk, light-to-regular weights.
- The luxury signature: letterspaced uppercase labels - 11-13px, +12 to +20% tracking, 60% opacity ("COLLECTION · AUTUMN 2026"). Used for nav, categories, buttons.
- Display sizes large but light: 56-96px at weight 300-500; mass from size, grace from lightness. Line-height 1.1, minimal negative tracking (elegance doesn't crush).
- Italics of the serif for accent words; generous body leading (1.7-1.8); measure 55-65ch.

## Color

- Deep, warm, and few: near-black with depth (`#14110F` espresso or `#101316` midnight) with ivory `#F6F2EA`; dark-dominant pages photograph as more expensive.
- Metallic accent as a solid, never a gradient: champagne `#C2A878`, antique gold `#A8894F` - or skip metal for oxblood `#5C2E2E` / deep forest `#1F3A2D`. A page can spend its accent exactly three times: hairlines, small-caps labels, one CTA.
- Photography carries the rest of the color; UI stays neutral and never competes.

## Space & pace

- The most whitespace of any style: section spacing 140-200px; hero content occupying perhaps 40% of the viewport with emptiness as the frame.
- One thing at a time: single product per viewport, single full-bleed image, a sentence alone on a dark screen. The scroll is a paced reveal, not a wall.
- Hairline rules (1px, 15-20% opacity) as the only dividers. No cards, no boxes; content floats on the surface.
- Centered composition is permitted here (the one style where it signals formality), alternated with asymmetric image/text spreads (5/7) for rhythm.

## Imagery

Photography is half the design: large, full-bleed or generously margined, consistent treatment (slightly desaturated, warm shadow tint).
Images never in rounded-corner cards; sharp edges or none.
No real photography? Use abstract texture (stone, fabric, paper grain) rather than stock people.

## Motion: slowness is the luxury

- Everything 400-700ms, `cubic-bezier(0.25, 0.1, 0.25, 1)` - unhurried, never sluggish on input (interactive feedback still <= 150ms; the reveals take their time).
- Signature moves: images scaling 1.08 -> 1 over 900ms as they enter; text fading up 20px with 80ms staggers; a slow crossfade hero; hover underlines drawing left-to-right (300ms).
- Nothing bounces, nothing spins, nothing slides in sideways.

## Components

- Buttons: generous padding (16x40), 0 radius or hairline full-round (pick one), letterspaced uppercase label, outline style preferred; fill reserved for the single primary CTA per page.
- Forms: bottom-hairline inputs, serif italic placeholder, focus = hairline thickens to accent.
- Nav: sparse, letterspaced, perhaps four words and a wordmark.

## Never

Gold/metallic gradients · script or "elegant" decorative fonts · sparkle, glow, shine · dense feature grids · exclamation points or urgency copy ("LIMITED TIME!") - scarcity is implied, never shouted · loud badges · emoji · visible borders around everything · cheap stock photography (no photo beats a bad photo).
