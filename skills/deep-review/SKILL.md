---
name: deep-review
description: Thorough code review of a diff, branch, PR, or file. Hunts real bugs (logic, concurrency, edge cases, error handling, security) and reports with severity and evidence, never style nitpicks. Use when asked to review code, check a PR, or audit changes before merge.
argument-hint: [diff | branch | PR number | file paths]
---

# Deep Review

Review target: **$ARGUMENTS** (default: the current uncommitted diff; if clean, the current branch vs the default branch).

## Ground rules

- **Review the behavior, not the style.** Formatting, naming taste, and "I would have done it differently" are out of scope unless they hide a bug. (For readability, the developer can run `/readable`.)
- **Every finding needs evidence.** Quote the line, state the input or sequence that triggers the problem, and what goes wrong. If you cannot construct the failing case, downgrade it to a question.
- **Read the surrounding code, not just the diff.** Most real bugs live in the interaction between the change and the code it touches: callers, shared state, invariants established elsewhere.
- **Verify before reporting.** If tests exist, run them. If a claim is checkable in 30 seconds (does this function ever return null?), check it instead of speculating.

## Hunt list (in priority order)

1. **Logic errors** — inverted conditions, off-by-one, wrong operator, unreachable branches, early returns that skip cleanup.
2. **Edge cases** — empty/null/undefined, zero, negative, max-size, unicode, duplicate entries, already-deleted records.
3. **Error handling** — swallowed exceptions, errors that leave partial state, missing rollback, error paths that themselves throw.
4. **Concurrency & async** — race conditions, missing awaits, shared mutable state, stale closures, double-fire on retry, ordering assumptions.
5. **Resource handling** — leaks (handles, listeners, subscriptions, timers), unbounded growth, missing pagination.
6. **Security** — injection (SQL/command/path/template), unsafe deserialization, secrets in code or logs, missing authz on new endpoints, trusting client input. (For a dedicated pass, run `/harden`.)
7. **Contract breaks** — changed function signatures or return shapes with un-updated callers, API/DB schema changes without migration, broken serialization compatibility.
8. **Data integrity** — writes without validation, lossy conversions, timezone/precision bugs, float money math.

## Report format

Group findings by severity. For each: `file:line`, one-line summary, the triggering scenario, and a suggested fix direction (not full rewritten code unless asked).

- 🔴 **Blocker** — will break in production or corrupt data. Must fix before merge.
- 🟠 **Should fix** — real bug on a plausible path, or a trap for the next editor.
- 🟡 **Question** — looks suspicious but could be intentional; phrased as a question.

End with a verdict: **approve / approve with fixes / request changes**, plus one sentence on the overall health of the change. If you found nothing, say so plainly and list what you checked — an empty review must still prove it looked.
