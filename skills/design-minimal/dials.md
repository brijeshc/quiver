# Dial positions for /design-minimal

## Typography

- **One typeface.** A grotesque with character: Instrument Sans, Geist, or Archivo. Two weights only (e.g. 400 + 600). Hierarchy comes from size, weight, spacing, and position - that is the craft.
- Scale: confident (1.333) or dramatic (1.5). When type is one of only three elements on screen it can be ENORMOUS: heroes at 80-140px, tracking -2 to -4%, line-height 1.0.
- Body 16-18px, line-height 1.6, measure <= 65ch. Labels 12-13px with +4% tracking, uppercase, at 50-60% opacity.

## Color

- Near-monochrome: hue-tinted near-black (`#16161A` cool or `#1A1814` warm) on hue-tinted near-white (`#FAFAF8`). Pure #000 on #FFF is the cheap version; the tint is the difference.
- One accent, used at most once per view: a single link, button, or data point. Some views use zero accents; that is allowed and strong.
- Hierarchy via ink opacity: 100% primary, 60% secondary, 35% tertiary/disabled. No gray soup of seven grays.

## Space & structure

- Whitespace IS the structure: section spacing 120-160px, generous and unapologetic. If it feels too empty, hold; that discomfort is the style working.
- Hard alignment to one spine (usually left), edges within 0px tolerance; in minimalism a 2px misalignment is a shout.
- Grouping by proximity alone; almost no boxes, borders, or backgrounds. A truly needed separator is a 1px hairline at 8-12% ink.
- Asymmetry creates the interest: 4/8 splits, a lone element low-right balancing a headline high-left.

## Components

- Buttons: rectangle, 0-4px radius, solid ink fill or 1px outline; only ONE primary per view. Text links underline on hover with `text-underline-offset`.
- Forms: borderless inputs with a single bottom hairline, label above in small caps; focus thickens the hairline to 2px ink. No boxes-in-boxes.
- Tables/lists: hairline row separators only; alignment does the rest.
- Icons: only where words fail; 1.5px stroke, monochrome, one size.

## Motion

Almost imperceptible: 150-200ms opacity and 4-8px translate, ease-out.
One signature moment maximum (the hero headline fading up once on load).
Hover feedback = opacity shift to 70% or underline.
Nothing bounces. Ever.

## Never

Drop shadows · gradients · more than one accent per view · rounded-2xl cards · decorative icons next to every heading · zebra striping · skeleton shimmer (use a single quiet progress hairline) · filler copy (every word survives the same deletion test as every element).
