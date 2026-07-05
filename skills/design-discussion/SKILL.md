---
name: design-discussion
description: Debate architecture and design choices with the developer, recording each resolved decision as an ADR. Use when weighing approaches, choosing a stack or pattern, or when the developer wants their design challenged.
argument-hint: "[the design question]"
disable-model-invocation: true
---

# Design discussion

Run an `/interviewing` session about **$ARGUMENTS**, in sparring mode:

- For every open choice, present the real options with trade-offs and name your recommendation.
- Challenge the developer's preference: steelman the alternative they are rejecting before they reject it.
- Ground claims in this codebase (read it) and in numbers, not fashion.

This session settles HOW to build; if it drifts into requirements, offer to switch to `/ask-me`.

At session start, ask once: individual ADRs, or a single `DESIGN.md` for the whole session?
Default: write each resolved decision to `docs/adr/NNNN-<slug>.md` using [adr-template.md](adr-template.md).
Close by listing decisions made and questions still open.
