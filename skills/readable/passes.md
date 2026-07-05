# Passes for /readable, in order of impact

## 1. Names that lie or say nothing
- Rename `data`, `result`, `temp`, `handle`, `process`, `manager`, `util` to what the thing actually is: `unpaidInvoices`, `retryDelayMs`, `parseCsvHeader`.
- Booleans read as assertions: `isExpired`, `hasUnsavedChanges`; never `flag`, `status`, `check`.
- Units in names when ambiguous: `timeoutMs`, `sizeBytes`, `priceInCents`.
- A name may be long; a name may not be wrong.

## 2. Functions that do what they say, and only that
- One function, one job; if describing it needs "and", split it.
- Extract deep nesting into named guard clauses: early-return the edge cases, keep the happy path at indent level one.
- Make the call site read like a sentence: `if (cart.qualifiesForFreeShipping())` beats six inlined conditions.
- Order functions top-down: callers above callees, so the file reads headline first, details after.

## 3. Surprise removal
- No hidden side effects: a function named `get...` must not write anything.
- Make mutation obvious; prefer returning new values over mutating arguments.
- Replace magic numbers and strings with named constants: `MAX_LOGIN_ATTEMPTS = 5`, not `if (n > 5)`.
- Unify the three different ways the file does the same thing into one.

## 4. Comments that earn their place
- Delete comments that restate the code (`// increment counter`).
- Keep and write comments that explain WHY: business rules, workarounds with links, non-obvious constraints, "this looks wrong but is right because...".
- If a comment explains WHAT the code does, rewrite the code instead, then delete the comment.

## 5. Honest structure
- Group related declarations; an alphabetical or chronological jumble hides relationships.
- Dead code, commented-out blocks, and unused parameters get deleted, not preserved "just in case"; version control remembers.
