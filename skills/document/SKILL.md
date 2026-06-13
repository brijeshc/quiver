---
name: document
description: Write documentation people actually read — READMEs, API docs, docstrings, architecture decision records, and onboarding guides. Use when a project needs docs, a README is stale, an API is undocumented, or a decision needs recording.
argument-hint: [what to document: readme | api | docstrings | adr | onboarding]
---

# Document

Target: **$ARGUMENTS** (default: assess the project and propose what's missing, worst gap first).

## The reader rule

Every document is written for one reader in one situation. Name them before writing: *"a developer who just cloned this and wants it running"*, *"an API consumer deciding if this endpoint fits"*, *"a teammate in 18 months asking why we chose Postgres"*. Everything the doc says must serve that reader; everything else is cut. **Verify every command and code sample by running it** — docs that lie are worse than no docs.

## README (reader: someone deciding to use this, then setting it up)

Order is fixed — value first, ceremony last:
1. **One sentence:** what it is and who it's for. No adjectives ("blazing", "simple"), no badges-wall above the fold.
2. **A 30-second demo:** the single most representative usage example, with real input and real output shown.
3. **Install & run:** exact copy-paste commands, prerequisites with versions, the one config step people miss. Test these on a clean checkout.
4. **Core usage:** the 3–5 things 90% of users do, each with an example.
5. **Project map** (for contributors): where things live, how to run tests.
6. Links out: full docs, license, contributing. Don't inline what belongs in dedicated pages.

## API docs (reader: integrator skimming for "does this do what I need")

Per endpoint/function: one-line purpose → parameters (type, required?, default, constraints) → a realistic request/response pair with actual values, not `{...}` → **every error case and what triggers it** → auth and rate limits. Document behavior at the edges: what happens with an empty list, a duplicate, a not-found. The error table is the most-read part; never skip it.

## Docstrings (reader: developer at the call site, via their editor)

- First line: what it does, as a verb phrase. Then ONLY what the signature can't say: units, valid ranges, side effects, error conditions, thread-safety, the non-obvious.
- Don't restate parameter names ("`userId` — the ID of the user" is noise; "`userId` — must reference an active user, else throws `UserInactiveError`" earns its line).
- Public API: document fully. Internal helpers: a sharp one-liner, or a better function name and nothing.

## ADRs (reader: future maintainer asking "why is it like this?!")

File per decision (`docs/adr/NNN-title.md`): **Context** (forces in play at the time) → **Decision** (what was chosen) → **Alternatives considered** (and the real reason each lost) → **Consequences** (costs accepted, what becomes harder). Honest consequences are the whole value; an ADR with no downsides recorded is marketing.

## Style for all of it

- Lead with the common case; mark the exotic as exotic.
- Examples are the documentation; prose explains the examples.
- Short sentences, active voice, second person ("run", not "the user should execute").
- Delete stale docs you find along the way — wrong documentation actively harms. If unsure it's stale, flag it in the report.

## Report

What was written/updated, which reader each piece targets, which commands/examples were executed to verify, and remaining gaps ranked by pain.
