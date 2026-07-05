---
name: a11y-audit
description: Audit web UIs for accessibility - keyboard navigation, screen readers, contrast, focus management, forms, motion safety - against WCAG 2.2 AA. Use when building or reviewing any user-facing interface, or when accessibility compliance is required.
argument-hint: "[pages, components, or files]"
---

# A11y audit

Run an `/auditing` session on **$ARGUMENTS** (default: UI files in the current diff) with the accessibility lens: read [lens.md](lens.md) before hunting.

Standard: WCAG 2.2 AA.
Broken keyboard access is a bug with the same severity as a broken click handler; fix the clear-cut, propose what needs design decisions.
Verify, don't assume: run axe-core or Lighthouse where available (they catch ~30-40%), then do the keyboard walk personally and compute actual contrast ratios of actual computed colors.
