# Surface-specific rules for /api-design

## REST

- Nouns for resources (`/invoices/{id}`), verbs from HTTP; actions that fit no verb get a sub-resource (`POST /invoices/{id}/send`).
- Plural nouns, one casing convention, IDs opaque to clients.
- Status codes mean what they say: 400 caller's fault (say which field), 401 unauthenticated, 403 unauthorized, 404 absent (also for "exists but you can't see it", to avoid leaking), 409 conflict, 422 valid syntax/invalid semantics.
- One error envelope everywhere: `{ "error": { "code", "message", "details" } }`.
- Collections paginate from day one (cursor over offset for live data); document max page size; totals only if you can afford them.
- Idempotency: PUT/DELETE naturally; creating POSTs accept an idempotency key if retries are plausible (they are).

## Library / module

- The signature is the contract: precise types, no `options: object` grab-bags for <= 3 parameters, return types that force error handling where the language allows.
- Accept interfaces, return concrete types; take the narrowest input that works (an iterable, not an array; a reader, not a filename).
- No surprise I/O, globals, or hidden state in things that look pure; constructors don't do network calls.
- Export the minimum: every export is support burden; you can add later, never remove.

## CLI

- `tool noun verb` or `tool verb`; match the ecosystem's pattern. Long-form flags with short aliases for the frequent ones.
- Default output human-readable; `--json` for machines; exit codes honest (0 success only); errors to stderr.
- Destructive ops need `--force` or interactive confirm, and support `--dry-run`.
