---
name: root-cause
description: Debug systematically to the proven cause instead of patching symptoms - reproduce, isolate, prove, then fix. Use when something is broken, failing intermittently, "works on my machine", or a previous fix didn't stick.
argument-hint: "[the bug or error]"
---

# Root cause

Bug: **$ARGUMENTS**

**Iron rule: no fix until you can state the root cause in one sentence and point to the evidence proving it.**
A fix applied to a guess is a new bug with better marketing; the proven cause IS the fast path.

## Procedure

1. **Reproduce.** Get the exact failure in front of you; capture full output, not a paraphrase. Can't reproduce? That is the first problem: an intermittent bug has a hidden variable - diff failing vs passing runs (data, timing, parallelism, environment).
2. **Read the error.** Whole stack trace, bottom up; the deepest frame in your own code is the prime suspect. Check the obvious before the exotic: typo, stale build, wrong environment, cache.
3. **Bisect.** In time (`git bisect`; deploy/dependency/data changes at the regression point). In space (checkpoint halfway between known-good input and bad output; recurse into the broken half). In scope (shrink the reproduction; the minimal case usually exposes the cause by itself).
4. **Hypothesize, then try to kill it.** State it precisely, design the cheapest experiment that could DISPROVE it, predict the result before running. Evidence contradicts you? The hypothesis dies; log the ruled-out suspects as progress.
5. **Fix the cause, then make the bug impossible.** Fix where the problem starts, not where it is noticed. Ask "why was this possible?" once more; fix that too if cheap. Add a regression test verified to fail without the fix; re-run the original reproduction and the full suite.

## Traps

Two bugs masquerading as one (re-reduce after every fix).
A fix that "works" but you can't explain (you haven't found the cause).
Debugging the wrong layer (confirm inputs at the boundary first).
Leftover debug logging (remove it; keep the test).

## Report

Root cause (one sentence) -> evidence chain -> the fix -> why it can't recur (test + hardening) -> suspects ruled out.
