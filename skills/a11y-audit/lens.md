# Accessibility lens (WCAG 2.2 AA)

Audit in this order; it is sorted by user impact.

## 1. Keyboard: everything works without a mouse
- Tab reaches every interactive element, in visual order; nothing focusable is invisible, nothing visible-interactive is unreachable.
- Enter/Space activate; Escape closes overlays; arrow keys navigate composite widgets (menus, tabs, radio groups).
- No keyboard traps: focus can always leave. Modals trap focus intentionally while open and return it to the trigger on close.
- Focus always visible: never `outline: none` without an equal-or-better `:focus-visible` replacement.
- A `div`/`span` with `onClick` is a bug: use `<button>`/`<a>`, which bring keyboard and semantics for free.

## 2. Semantics: the page makes sense with eyes closed
- Native elements over ARIA reconstruction: `<button>`, `<nav>`, `<label>`, `<table>`, `<dialog>` first; ARIA only for what HTML cannot say. Wrong ARIA is worse than no ARIA.
- One `<h1>`; heading levels do not skip; landmarks (`main`, `nav`, `header`) present.
- Every image: `alt` describing function in context ("Delete invoice", not "trash icon"); decorative images get `alt=""`.
- Icon-only buttons have an accessible name (`aria-label`); links say where they go.
- Dynamic updates announce themselves: status via `aria-live="polite"`, errors via `role="alert"`; after SPA route changes, move focus to the new content's heading.

## 3. Forms: the most common failure zone
- Every input has a real `<label>`; a placeholder is not a label.
- Errors: identified in text (not color alone), associated via `aria-describedby`, `aria-invalid` set, focus moved to the first invalid field on submit.
- Required fields marked accessibly; correct `autocomplete` attributes; instructions before the field, not after.

## 4. Visual
- Contrast: >= 4.5:1 normal text, >= 3:1 large text and UI components/focus indicators. Compute it; check disabled-looking-but-enabled text and text over images.
- Color never the only signal (error = icon/text + red, not red alone).
- Layout survives 200% zoom and 320px width; touch targets >= 24x24px.

## 5. Motion & time
- `prefers-reduced-motion` honored: large animations reduce to fades or nothing.
- Nothing flashes more than 3x/second; auto-playing media pausable; no time limits without extension.

## Report addendum

Per finding, add the WCAG criterion and who it blocks ("keyboard-only users cannot close this modal").
End with the keyboard-walk transcript of the main flow and tool scores before/after.
