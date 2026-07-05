---
name: document
description: Write documentation people actually read - READMEs, API docs, docstrings, ADRs, onboarding guides. Use when docs are missing or stale, an API is undocumented, or a decision needs recording.
argument-hint: "[readme | api | docstrings | adr | onboarding]"
---

# Document

Target: **$ARGUMENTS** (default: assess the project and propose what is missing, worst gap first).

**The reader rule: every document serves one named reader in one situation** ("a developer who just cloned this and wants it running", "a teammate in 18 months asking why we chose Postgres").
Everything the doc says must serve that reader; everything else is cut.
**Verify every command and code sample by running it**; docs that lie are worse than no docs.

Per-type structure (README, API docs, docstrings, ADRs): read the matching entry in [doc-types.md](doc-types.md) before writing.

## Style

- Lead with the common case; mark the exotic as exotic.
- Examples are the documentation; prose explains the examples.
- Short sentences, active voice, second person ("run", not "the user should execute").
- Delete stale docs found along the way; if unsure it is stale, flag it in the report.

## Report

What was written or updated, the reader each piece targets, which commands and examples were executed to verify, and remaining gaps ranked by pain.
