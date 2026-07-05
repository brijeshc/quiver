---
name: design-audit
description: Audit a codebase for structural problems - coupling, wrong dependency direction, leaky abstractions, god modules, duplication, missing seams. Use when code feels hard to change, before building on old code, or when asked what to improve structurally.
argument-hint: "[directory or module]"
---

# Design audit

Run an `/auditing` session on **$ARGUMENTS** (default: the whole codebase) with the design lens: read [lens.md](lens.md) before hunting.

Judge structure by its consequences: every finding names the change it makes expensive or the bug class it invites, never just the principle it violates.
Propose fixes as refactoring directions with a rough effort each; apply nothing (structural change belongs to `/refactor`, with tests as the net).
Rank the report by leverage: the fewest moves that unlock the most.
