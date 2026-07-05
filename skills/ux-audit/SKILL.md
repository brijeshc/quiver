---
name: ux-audit
description: Audit user-facing flows for friction - confusing navigation, missing feedback, unclear copy, bad empty/error/loading states, cognitive overload. Use on any UI before release or when users report something is hard to use.
argument-hint: "[flow, pages, or app area]"
---

# UX audit

Run an `/auditing` session on **$ARGUMENTS** (default: every user-facing flow) with the UX lens: read [lens.md](lens.md) before hunting.

Walk each flow as a first-time user: run the app when possible; trace routes and components when not.
Every finding names the moment a user is confused, blocked, or misled, and what they see versus what they need.
Accessibility findings route to `/a11y-audit`; visual style belongs to the design suite, not here.
