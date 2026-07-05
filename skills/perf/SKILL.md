---
name: perf
description: Fix performance with measurements, not guesses - profile first, optimize the proven bottleneck, verify the gain. Use when something is slow, uses too much memory, or must handle more load - pages, APIs, queries, builds, scripts.
argument-hint: "[what is slow]"
---

# Perf

Target: **$ARGUMENTS**

**Iron rule: no optimization without a measurement showing the bottleneck, and no claimed win without a measurement showing the difference.**
If you cannot measure in this environment, say so and state what to measure where; never guess-optimize.

## Procedure

1. **Define the budget**: the number that means "fast enough" (p95 < 200ms, interactive < 2s, job < 5min). Optimizing without a target never terminates.
2. **Measure the baseline** with the cheapest honest tool ([culprits.md](culprits.md) lists tools per stack); record the numbers before touching anything.
3. **Name the top bottleneck** with evidence; one thing is usually 60-90% of the time. Check the classic culprits in [culprits.md](culprits.md) first.
4. **Fix in order of preference**: do it less (cache, memoize, skip unused work) -> do less of it (fetch only needed fields, paginate, early-exit) -> do it in bulk (kill the N+1, batch, vectorize) -> do it at a better time (precompute, background, stream) -> a better algorithm or structure -> parallel, last (concurrency bugs cost more than they save).
5. **Re-measure**: same conditions, same tool; report baseline -> after, absolute and %.
6. **Stop at the budget**; note remaining opportunities without pursuing them.

## Guardrails

Correctness outranks speed: run the tests after every optimization.
One revertable change per optimization, its measurement in the commit message.
Reject micro-optimizations that mangle code for <10% off the critical path.

## Report

Bottleneck (with profile evidence) -> fix applied -> before/after numbers -> budget met or remaining gap -> deliberately not done.
