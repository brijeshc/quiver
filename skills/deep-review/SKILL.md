---
name: deep-review
description: Review a diff, branch, PR, or file for real bugs - logic, concurrency, edge cases, error handling, security - reported with severity and evidence, never style nitpicks. Use when asked to review code, check a PR, or judge changes before merge.
argument-hint: "[diff | branch | PR number | file paths]"
---

# Deep review

Target: **$ARGUMENTS** (default: the current uncommitted diff; if clean, the current branch vs the default branch).

## Ground rules

- Review the behavior, not the style: formatting, naming taste, and "I would have done it differently" are out of scope unless they hide a bug (readability has `/readable`).
- Every finding needs evidence: quote the line, state the input or sequence that triggers the problem, and what goes wrong. If you cannot construct the failing case, downgrade to a question.
- Read the surrounding code, not just the diff: callers, shared state, invariants established elsewhere.
- Verify before reporting: run existing tests; check any claim checkable in 30 seconds.

## Hunt

Work through [hunt-list.md](hunt-list.md) in its priority order.

## Report

Group by severity; each finding gets file:line, a one-line summary, the triggering scenario, and a fix direction.

- 🔴 **Blocker** - breaks production or corrupts data; fix before merge.
- 🟠 **Should fix** - real bug on a plausible path, or a trap for the next editor.
- 🟡 **Question** - suspicious but possibly intentional.

End with a verdict (approve / approve with fixes / request changes) and one sentence on the change's health.
Found nothing? List what was checked; an empty review must prove it looked.
