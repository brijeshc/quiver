# Security lens

## Method: follow the untrusted data

Map every entry point where data the developer does not control enters: HTTP params/bodies/headers/cookies, file uploads, webhooks, env/config, DB content written by users, third-party API responses, CLI args.
Trace each one to where it is used.
Every use without validation or encoding in between is a finding.

## Checklist

### Injection
- SQL: any query built with string interpolation or concatenation -> parameterized queries, no exceptions, including ORDER BY and LIMIT.
- Command: user input near `exec`/`spawn`/`system`/`shell=True` -> argument arrays, never shell strings; allowlist if a shell is unavoidable.
- Path: user input in file paths -> resolve and verify the result stays inside the intended root; reject `..` traversal.
- XSS: user content rendered into HTML -> framework auto-escaping; audit every `dangerouslySetInnerHTML`/`v-html`/`innerHTML`; sanitize at output, not input.

### Auth & access
- Every new or changed endpoint: who can call it? Verify authentication AND authorization; the classic miss is checking "logged in" but not "owns this resource" (IDOR). Test: can user A read or modify user B's object by changing an ID?
- Privilege checks server-side only; client-side checks are decoration.
- Sessions and tokens: httpOnly+secure cookies, expiry enforced, logout actually invalidates, tokens never in URLs or logs.

### Secrets
- Grep the code and git history for keys, passwords, tokens (`apikey|secret|password|token|BEGIN.*PRIVATE` plus high-entropy strings).
- Secrets come from env or secret managers; `.env` is gitignored; example files contain placeholders.
- Secrets never in logs, error messages, or client-side bundles.

### Data handling
- Unsafe deserialization of untrusted input (pickle, eval, yaml.load, XML with entities) -> safe parsers only.
- Passwords hashed with argon2/bcrypt; PII minimized, encrypted at rest where warranted, masked in logs.
- Error responses leak nothing internal: no stack traces, query text, or paths to clients; details go to server logs.

### Platform
- Dependency audit (`npm audit` / `pip-audit` / `cargo audit`); flag known-vulnerable versions in the report.
- SSRF: user-supplied URLs fetched server-side -> allowlist hosts, block private IP ranges and redirects to them.
- Uploads: validate type by content not extension, cap size, store outside the web root with generated names.
- Rate limiting on auth and expensive endpoints; CSRF protection on state-changing browser routes.

## Report addendum

For each finding, include the untrusted data path (source -> sink) alongside the standard fields.
