---
name: api-design
description: Design clear, consistent, evolvable APIs — REST endpoints, library interfaces, CLI commands, or internal module boundaries. Use when adding endpoints, designing a public interface, or when an existing API has grown inconsistent.
argument-hint: "[the API or surface to design/review]"
---

# API Design

Target: **$ARGUMENTS**

An API is a promise you can't easily take back. Design it from the **caller's** side: write the calling code you wish existed first, then build the interface that makes it true.

## Universal rules (REST, library, CLI, module — all of it)

1. **Consistency beats local perfection.** Survey the existing surface first; the new piece must be unsurprising next to the old. Same naming scheme, same error shape, same pagination style — even if you'd choose differently on a blank page.
2. **One way to do each thing.** Two endpoints/functions with overlapping jobs means callers choose wrong half the time.
3. **Hard to misuse outranks easy to use.** Required things are required (not defaulted to something dangerous); invalid combinations are unrepresentable (one `mode` enum, not three booleans with 5 nonsense combinations); destructive actions are explicit.
4. **Errors are part of the API.** Define them with the same care as success: stable error codes (machine-readable), human messages, and what the caller should DO about each. "500: something failed" is an unfinished design.
5. **Design for v2 on day 1.** Version or capability-gate anything public. Adding fields must be safe for existing callers; removing/renaming never silently. Know the deprecation story before shipping v1.

## REST specifics

- Nouns for resources (`/invoices/{id}`), verbs from HTTP. Actions that fit no verb get a sub-resource (`POST /invoices/{id}/send`).
- Plural nouns, kebab-or-no-case consistently, IDs opaque to clients.
- Status codes mean what they say: 400 caller's fault (say which field), 401 unauthenticated, 403 unauthorized, 404 absent (also for "exists but you can't see it", to avoid leaking), 409 conflict, 422 valid syntax/invalid semantics. One error envelope everywhere: `{ "error": { "code", "message", "details" } }`.
- Collections: paginate from day one (cursor over offset for live data), document max page size, return totals only if you can afford them.
- Idempotency: PUT/DELETE naturally; POST that creates accepts an idempotency key if retries are plausible (they are).

## Library/module specifics

- The signature is the contract: precise types, no `options: object` grab-bags for ≤3 parameters, return types that force error handling where the language allows (Result/Either/exceptions documented).
- Accept interfaces, return concrete types. Take the narrowest input that works (an iterable, not an array; a reader, not a filename).
- No surprise I/O, globals, or hidden state in things that look pure. Constructors don't do network calls.
- Export the minimum. Every export is support burden; you can add later, never remove.

## CLI specifics

- `tool noun verb` or `tool verb` — match the ecosystem's pattern. Flags long-form with short aliases for the frequent ones.
- Default output human-readable; `--json` for machines; exit codes honest (0 success only); errors to stderr.
- Destructive ops need `--force` or interactive confirm, and support `--dry-run`.

## Deliverable

The proposed surface written as **caller code examples first** (the happy path, an error path, an edge), then the contract (signatures/endpoints + error table), then the evolution notes (how this extends without breaking). For reviews of existing APIs: inconsistencies found, ranked by caller pain, with the smallest unifying fix.
