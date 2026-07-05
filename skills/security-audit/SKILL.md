---
name: security-audit
description: Audit code defensively for vulnerabilities - injection, broken auth, secrets exposure, unsafe deserialization, trust-boundary mistakes. Use before exposing endpoints, handling user input, touching auth, or shipping to production.
argument-hint: "[files, endpoints, or directory]"
---

# Security audit

Run an `/auditing` session on **$ARGUMENTS** (default: the whole codebase) with the security lens: read [lens.md](lens.md) before hunting.

Defensive only: find and fix vulnerabilities in the developer's own code; never produce standalone exploit tooling.
Apply clear-cut fixes (parameterize the query, move the secret to env); propose anything with design implications.
A committed secret stays burned after deletion: the fix is rotation.
