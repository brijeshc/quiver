---
name: harden
description: Defensive security audit of code or changes. Finds injection, broken auth, secrets exposure, unsafe deserialization, and trust-boundary mistakes; fixes with proven patterns. Use before exposing endpoints, handling user input, touching auth, or shipping to production.
argument-hint: "[files, endpoints, or diff to audit]"
---

# Harden — security pass

Target: **$ARGUMENTS** (default: the current diff; widen to the trust boundaries it touches).

This is a **defensive** audit of the developer's own code: find vulnerabilities and fix them. Findings stay in the report — never produce standalone exploit tooling.

## Method: follow the untrusted data

Map every entry point where data the developer doesn't control enters: HTTP params/bodies/headers/cookies, file uploads, webhooks, env/config, DB content written by users, third-party API responses, CLI args. Trace each one to where it's *used*. Every use without validation or encoding in between is a finding.

## Checklist by category

### Injection
- SQL: any query built with string interpolation/concatenation → parameterized queries. No exceptions, including ORDER BY and LIMIT.
- Command: user input near `exec`/`spawn`/`system`/shell=True → argument arrays, never shell strings; allowlist if a shell is unavoidable.
- Path: user input in file paths → resolve and verify the result stays inside the intended root; reject `..` traversal.
- XSS: user content rendered into HTML → framework auto-escaping; audit every `dangerouslySetInnerHTML`/`v-html`/`innerHTML`. Sanitize at output, not input.

### Auth & access
- Every new/changed endpoint: who can call it? Verify authentication AND authorization — the classic miss is checking "logged in" but not "owns this resource" (IDOR). Test: can user A read/modify user B's object by changing an ID?
- Privilege checks server-side only; client-side checks are decoration.
- Session/token handling: httpOnly+secure cookies, expiry enforced, logout actually invalidates, tokens not in URLs or logs.

### Secrets
- Grep the diff and history for keys, passwords, tokens (`apikey|secret|password|token|BEGIN.*PRIVATE` plus high-entropy strings). Found one committed? It's burned: rotate it, don't just delete the line.
- Secrets come from env/secret managers; `.env` is gitignored; example files contain placeholders.
- Secrets never in logs, error messages, or client-side bundles.

### Data handling
- Unsafe deserialization of untrusted input (pickle, eval, yaml.load, XML with entities) → safe parsers only.
- Sensitive data (passwords → strong hash like argon2/bcrypt; PII minimized, encrypted at rest where warranted, masked in logs).
- Error responses leak nothing internal: no stack traces, query text, or paths to clients; details go to server logs.

### Platform
- Dependency audit (`npm audit` / `pip-audit` / `cargo audit`) — flag known-vulnerable versions in the report.
- SSRF: user-supplied URLs fetched server-side → allowlist hosts, block private IP ranges and redirects to them.
- Uploads: validate type by content not extension, cap size, store outside web root with generated names.
- Rate limiting on auth and expensive endpoints; CSRF protection on state-changing browser routes.

## Report format

For each finding: **severity (Critical/High/Medium/Low)** · `file:line` · the untrusted data path (source → sink) · concrete impact ("any user can read any user's invoices") · the fix. Apply fixes for clear-cut cases; propose for anything with design implications. Close with what was checked and found clean — a security report must show its coverage, not just its hits.
