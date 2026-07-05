---
name: api-design
description: Design clear, consistent, evolvable APIs - REST endpoints, library interfaces, CLI commands, module boundaries. Use when adding endpoints, designing a public interface, or when an existing API has grown inconsistent.
argument-hint: "[the API or surface to design or review]"
---

# API design

Target: **$ARGUMENTS**

An API is a promise you cannot easily take back.
Design from the caller's side: write the calling code you wish existed first, then build the interface that makes it true.

## Universal rules

1. **Consistency beats local perfection.** Survey the existing surface first; the new piece must be unsurprising next to the old - same naming, same error shape, same pagination - even where you would choose differently on a blank page.
2. **One way to do each thing.** Overlapping endpoints or functions make callers choose wrong half the time.
3. **Hard to misuse outranks easy to use.** Required things required (not defaulted to something dangerous); invalid combinations unrepresentable (one `mode` enum, not three booleans); destructive actions explicit.
4. **Errors are part of the API.** Stable machine-readable codes, human messages, and what the caller should DO about each. "500: something failed" is an unfinished design.
5. **Design for v2 on day 1.** Adding must be safe for existing callers; removing or renaming never silent; know the deprecation story before shipping v1.

Surface-specific rules (REST, library/module, CLI): read the matching entry in [surfaces.md](surfaces.md).

## Deliverable

Caller code examples first (the happy path, an error path, an edge), then the contract (signatures or endpoints plus the error table), then evolution notes.
For reviews of existing APIs: inconsistencies ranked by caller pain, with the smallest unifying fix.
