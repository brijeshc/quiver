---
name: design-minimal
description: True minimalist design — radical reduction where whitespace, one typeface, and precision carry everything. Not "clean default", but disciplined subtraction. Use for portfolios, premium tools, focused products, landing pages that must feel confident and quiet.
argument-hint: [what to design]
---

# Design: Minimal

Apply to: **$ARGUMENTS**. Foundation rules from `design-dna` apply; this skill sets the dial positions.

**Reference world:** Dieter Rams' Braun, a Kenya Hara catalog, Swiss typography. Minimalism is not the absence of design — it's design with nowhere to hide. Every remaining element must be exactly placed, because it's all the viewer has.

## The discipline

For every element ask: *what breaks if I remove this?* Nothing → remove it. This applies to borders, icons, labels that repeat what's obvious, decorative images, second buttons, taglines. Minimal means **fewer, better** — not gray-on-white versions of the same clutter.

## Typography

- **One typeface.** A grotesque with character: **Instrument Sans**, **Geist**, or **Archivo**. Two weights only (e.g. 400 + 600). Hierarchy must come from size, weight, spacing, and position — that's the craft.
- Scale: confident (1.333) or dramatic (1.5). When type is one of only three elements on screen, it can be ENORMOUS: heroes at 80–140px, tracking −2 to −4%, line-height 1.0.
- Body 16–18px, line-height 1.6, measure ≤ 65ch. Labels 12–13px with +4% tracking, uppercase, at 50–60% opacity.

## Color

- Near-monochrome: hue-tinted near-black (`#16161A` cool or `#1A1814` warm) on hue-tinted near-white (`#FAFAF8`). Pure #000 on #FFF is the cheap version — the tint is the difference.
- **One accent, used at most once per view** — a single link, a single button, a single data point. Some views use zero accents; that's allowed and strong.
- Hierarchy via ink opacity: 100% primary text, 60% secondary, 35% tertiary/disabled. No gray soup of seven different grays.

## Space & structure

- Whitespace IS the structure: section spacing 120–160px, generous and unapologetic. If it feels too empty, hold — that discomfort is the style working.
- Hard alignment to one spine (usually left). Edges aligned within 0px tolerance — in minimalism a 2px misalignment is a shout.
- Grouping by proximity alone — almost no boxes, borders, or backgrounds. Where a separator is truly needed: a 1px hairline at 8–12% ink.
- Asymmetry creates the interest: 4/8 splits, a lone element low-right balancing a headline high-left. Centered-everything is the generic tell.

## Components

- Buttons: rectangle, 0–4px radius, solid ink fill or 1px outline — only ONE primary per view. Text links: underline on hover with `text-underline-offset`.
- Forms: borderless inputs with a single bottom hairline, label above in small caps; the focused field's hairline becomes 2px ink. No input boxes-in-boxes.
- Tables/lists: hairline row separators only; let alignment do the rest.
- Icons: only where words fail; 1.5px stroke, monochrome, one size.

## Motion

Almost imperceptible: 150–200ms opacity and 4–8px translate, ease-out. One signature moment maximum (e.g., the hero headline fading up once on load). Hover feedback = opacity shift to 70% or underline. Nothing bounces. Ever.

## Never

Drop shadows · gradients · more than one accent color per view · rounded-2xl cards · decorative icons next to every heading · zebra striping · skeleton shimmer blocks (use a single quiet progress hairline) · filler copy (every word survives the same deletion test as every element).

## Self-check

Remove-one-more test: try deleting one more element from the final design — if nothing breaks, you weren't done. Squint: exactly one focal point? Alignment audit at 200% zoom: any edge off its spine?
