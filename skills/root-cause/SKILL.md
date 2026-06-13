---
name: root-cause
description: Systematic debugging that finds the actual cause instead of patching symptoms. Reproduce, isolate, prove, then fix. Use when something is broken, failing intermittently, "works on my machine", or a previous fix didn't stick.
argument-hint: [the bug or error]
---

# Root Cause — debug like a scientist

Bug: **$ARGUMENTS**

## The iron rule

**You may not write a fix until you can state the root cause in one sentence and point to the evidence that proves it.** A fix applied to a guess is a new bug with better marketing. If the user pressures for speed, a proven cause IS the fast path — un-reproduced fixes bounce back.

## Procedure

### 1. Reproduce first
- Get the exact failure in front of you: run the failing command/test, hit the endpoint, load the page. Capture the full error output, not a paraphrase.
- Can't reproduce? That's the first problem to solve. Gather: exact environment, versions, data, timing, frequency. An intermittent bug means a hidden variable — find what differs between failing and passing runs (data, timing, parallelism, environment).

### 2. Read the error like it matters
- Read the WHOLE stack trace, bottom to top. The deepest frame in *your* code is the prime suspect.
- Read the actual message. "undefined is not a function" tells you *what* was undefined — log it.
- Check the obvious before the exotic: typo, wrong file, stale build, wrong environment, cache. Run the "is it plugged in" checks first.

### 3. Bisect the search space
- **In time:** when did it last work? `git bisect` if a commit broke it; check deploy/dependency/data changes around the regression point.
- **In space:** binary-search the path. Add a checkpoint halfway between known-good input and observed-bad output. Is the data still correct here? Recurse into the broken half.
- **In scope:** shrink the reproduction. Remove half the input/config/code; does it still fail? The minimal failing case usually exposes the cause by itself.

### 4. Form a hypothesis and try to kill it
- State it precisely: "X is null here because the cache returns stale entries after a delete."
- Design the cheapest experiment that could DISPROVE it, and predict the result before running.
- If the evidence contradicts you, the hypothesis dies — never bend the evidence. Log what you ruled out; ruled-out suspects are progress.

### 5. Fix the cause, then make the bug impossible
- Fix where the problem starts, not where it's noticed. Catching the exception at the symptom site and returning a default is a cover-up, not a fix.
- Ask "why was this possible?" once more: missing validation, unclear contract, a type that allows invalid states. Fix that too if cheap.
- Add the regression test: it must fail without the fix (verify this), pass with it.
- Re-run the original reproduction AND the full test suite.

## Traps

- **Two bugs masquerading as one** — fixing one and still seeing failure makes you doubt a correct fix. Re-reduce after every fix.
- **The fix that "works" by accident** — timing changed, cache cleared. If you can't explain *why* the fix works, you haven't found the cause.
- **Debugging the wrong layer** — confirm inputs at the boundary before blaming the logic. Garbage in, mystery out.
- **Print-statement amnesia** — remove debug logging before delivering; keep the regression test.

## Report

Root cause (one sentence) → evidence chain (how you proved it) → the fix → why it can't recur (test + any hardening) → suspects ruled out along the way.
