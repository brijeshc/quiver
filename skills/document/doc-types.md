# Doc types for /document

## README (reader: someone deciding to use this, then setting it up)

Order is fixed - value first, ceremony last:

1. One sentence: what it is and who it is for. No adjectives ("blazing", "simple"), no badge wall above the fold.
2. A 30-second demo: the single most representative usage example, real input and real output shown.
3. Install & run: exact copy-paste commands, prerequisites with versions, the one config step people miss. Test on a clean checkout.
4. Core usage: the 3-5 things 90% of users do, each with an example.
5. Project map (for contributors): where things live, how to run tests.
6. Links out: full docs, license, contributing. Don't inline what belongs in dedicated pages.

## API docs (reader: integrator skimming for "does this do what I need")

Per endpoint or function: one-line purpose -> parameters (type, required?, default, constraints) -> a realistic request/response pair with actual values, not `{...}` -> every error case and what triggers it -> auth and rate limits.
Document behavior at the edges: empty list, duplicate, not-found.
The error table is the most-read part; never skip it.

## Docstrings (reader: developer at the call site, via their editor)

- First line: what it does, as a verb phrase. Then ONLY what the signature cannot say: units, valid ranges, side effects, error conditions, thread-safety.
- Don't restate parameter names ("`userId` - the ID of the user" is noise; "`userId` - must reference an active user, else throws `UserInactiveError`" earns its line).
- Public API: document fully. Internal helpers: a sharp one-liner, or a better function name and nothing.

## ADRs (reader: future maintainer asking "why is it like this?!")

File per decision (`docs/adr/NNNN-title.md`): Context (forces in play at the time) -> Decision -> Alternatives considered (and the real reason each lost) -> Consequences (costs accepted, what becomes harder).
Honest consequences are the whole value; an ADR with no downsides recorded is marketing.
