---
name: a11y
description: Accessibility audit and fixes for web UIs — keyboard navigation, screen readers, contrast, focus management, forms, and motion safety, targeting WCAG 2.2 AA. Use when building or reviewing any user-facing interface, or when accessibility compliance is required.
argument-hint: [pages, components, or files to audit]
---

# A11y — accessibility pass

Target: **$ARGUMENTS** (default: UI files in the current diff).

Standard: **WCAG 2.2 AA**. Accessibility is not a checklist bolted on at the end — broken keyboard access or missing labels are bugs with the same severity as a broken click handler. Fix what's clear-cut; report what needs design decisions.

## Audit order (highest user impact first)

### 1. Keyboard: everything works without a mouse
- Tab reaches every interactive element, in visual order; nothing focusable is invisible, nothing visible-interactive is unreachable.
- Enter/Space activate; Escape closes overlays; arrow keys navigate composite widgets (menus, tabs, radio groups).
- **No keyboard traps** — focus can always leave. Modals trap focus *intentionally* while open and return it to the trigger on close.
- Focus is always visible: never `outline: none` without an equal-or-better `:focus-visible` replacement.
- A `div`/`span` with `onClick` is a bug: use `<button>`/`<a>`, which bring keyboard and semantics for free.

### 2. Semantics: the page makes sense with eyes closed
- Native elements over ARIA reconstruction — `<button>`, `<nav>`, `<label>`, `<table>`, `<dialog>` first; ARIA only for what HTML can't say. Wrong ARIA is worse than no ARIA.
- One `<h1>`; heading levels don't skip; landmarks (`main`, `nav`, `header`) present so screen-reader users can jump.
- Every image: `alt` describing *function* in context ("Delete invoice", not "trash icon"); decorative images get `alt=""`.
- Icon-only buttons have an accessible name (`aria-label`). Links say where they go — no walls of "click here".
- Dynamic updates announce themselves: status messages via `aria-live="polite"`, errors via `role="alert"`. After SPA route changes, move focus to the new content's heading.

### 3. Forms: the most common failure zone
- Every input has a real `<label>` (placeholder is not a label — it vanishes on input).
- Errors: identified in text (not color alone), associated via `aria-describedby`, `aria-invalid` set, focus moved to the first invalid field on submit.
- Required fields marked accessibly; correct `autocomplete` attributes; instructions appear before the field, not after.

### 4. Visual
- Contrast: ≥ 4.5:1 normal text, ≥ 3:1 large text and UI components/focus indicators. Compute it — don't eyeball. Check disabled-looking-but-enabled text and text over images.
- Color never the only signal (error = icon/text + red, not red alone).
- Layout survives 200% zoom and 320px width without loss; touch targets ≥ 24×24px.

### 5. Motion & time
- `prefers-reduced-motion` honored: large animations reduced to fades or nothing.
- Nothing flashes > 3×/second; auto-playing carousels/videos are pausable; no time limits without extension.

## Verify, don't assume

Where tooling exists, run it (axe-core, Lighthouse a11y) — but automated tools catch ~30–40%; do the keyboard walk personally: Tab through the whole flow and narrate what focus does. For contrast, compute the actual ratios of the actual computed colors.

## Report

Per finding: WCAG criterion · `file:line` · who it blocks ("keyboard-only users cannot close this modal") · fix applied or proposed. End with the keyboard-walk transcript of the main flow and the tool scores before/after.
