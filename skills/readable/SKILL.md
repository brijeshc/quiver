---
name: readable
description: Make code readable for humans. Improves naming, structure, function shape, and comment quality so the next developer understands the code on first read, without changing behavior. Use when code works but is hard to follow, after AI-generated code, or before handing code to a team.
argument-hint: "[files or directory]"
---

# Readable — human-readability pass

Target: **$ARGUMENTS** (default: files changed in the current diff).

The test for every change: **would a competent developer, new to this codebase, understand this on the first read — without scrolling elsewhere?** Behavior must not change; run existing tests before and after.

## What to fix, in order of impact

### 1. Names that lie or say nothing
- Rename `data`, `result`, `temp`, `handle`, `process`, `manager`, `util` to what the thing actually is: `unpaidInvoices`, `retryDelayMs`, `parseCsvHeader`.
- Booleans read as assertions: `isExpired`, `hasUnsavedChanges` — never `flag`, `status`, `check`.
- Units in names when ambiguous: `timeoutMs`, `sizeBytes`, `priceInCents`.
- A name may be long. A name may not be wrong.

### 2. Functions that do what they say — and only that
- One function, one job. If describing it needs "and", split it.
- Extract deep nesting into named guard clauses: early-return the edge cases, keep the happy path at indent level one.
- Make the call site read like a sentence: `if (cart.qualifiesForFreeShipping())` beats six inlined conditions.
- Order functions top-down: callers above callees, so the file reads like an article — headline first, details after.

### 3. Surprise removal
- No hidden side effects: a function named `get…` must not write anything.
- Make mutation obvious; prefer returning new values over mutating arguments.
- Replace magic numbers/strings with named constants — `MAX_LOGIN_ATTEMPTS = 5`, not `if (n > 5)`.
- Unify the three different ways the file does the same thing into one.

### 4. Comments that earn their place
- Delete comments that restate the code (`// increment counter`).
- Keep and write comments that explain **why**: business rules, workarounds with links, non-obvious constraints, "this looks wrong but is right because…".
- If you needed a comment to explain **what** the code does, rewrite the code instead, then delete the comment.

### 5. Honest structure
- Group related declarations; an alphabetical or chronological jumble hides relationships.
- Dead code, commented-out blocks, and unused parameters get deleted, not preserved "just in case" — version control remembers.

## What NOT to do

- Don't change behavior, public APIs, or performance characteristics.
- Don't introduce abstractions for one caller. Readability ≠ more layers; it's usually fewer.
- Don't reformat untouched code or fight the project's existing conventions — match them.
- Don't split a coherent 40-line function into eight 5-line fragments that force the reader to jump around. Locality is readability.

## Output

Apply the edits, then summarize: each rename/restructure with a one-line reason, confirmation that tests still pass, and anything you deliberately left alone (with why).
