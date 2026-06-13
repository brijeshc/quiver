---
name: perf
description: Find and fix real performance problems with measurements, not guesses. Profiles first, optimizes the proven bottleneck, verifies the gain. Use when something is slow, uses too much memory, or needs to handle more load — pages, APIs, queries, builds, or scripts.
argument-hint: "[what is slow]"
---

# Perf — measure, fix, prove

Target: **$ARGUMENTS**

## The iron rule

**No optimization without a measurement showing the bottleneck, and no claimed win without a measurement showing the difference.** "This should be faster" is not a result. If you cannot measure in this environment, say so and state what to measure in which environment — don't guess-optimize.

## Procedure

1. **Define the budget.** Ask or infer: what number makes this "fast enough"? (e.g., p95 < 200ms, page interactive < 2s, job < 5min). Optimizing without a target never terminates.
2. **Measure the baseline.** Pick the cheapest honest tool:
   - Node/JS: `node --cpu-prof`, `console.time`, Chrome DevTools Performance tab, Lighthouse for pages
   - Python: `cProfile`, `py-spy`, `timeit`
   - SQL: `EXPLAIN ANALYZE` — never tune a query without reading its plan
   - HTTP: `curl -w` timings, k6/autocannon for load
   - Builds: the build tool's own `--profile` flag
   Record the numbers before touching anything.
3. **Find the top bottleneck.** One thing is usually 60–90% of the time. Name it with evidence.
4. **Fix in this order of preference** (cheapest, safest first):
   1. **Do it less** — cache, memoize, debounce, skip work whose result is unused.
   2. **Do less of it** — fetch only needed columns/fields, paginate, lazy-load, early-exit.
   3. **Do it in bulk** — batch N queries into 1 (kill the N+1), bulk inserts, vectorize.
   4. **Do it at a better time** — precompute, background jobs, streaming instead of buffering.
   5. **Do it with a better algorithm/structure** — O(n²)→O(n log n), Set/Map lookups instead of array scans, the right index.
   6. **Do it in parallel** — only after the above; concurrency bugs cost more than they save.
5. **Re-measure.** Same conditions, same tool. Report baseline → after, absolute and %.
6. **Stop at the budget.** When the target is met, stop. Note remaining opportunities; don't pursue them.

## Classic culprits to check first

- N+1 queries (ORM lazy loads in a loop)
- Missing database index on a filtered/joined column (verify with the query plan)
- Fetching everything and filtering in app code
- Synchronous I/O on a hot path; sequential awaits that could be `Promise.all`
- Re-render storms / work re-done per keystroke or per frame
- Unbounded payloads: no pagination, full-resolution images, megabyte JSON
- Allocation churn in tight loops; string concatenation in loops
- Cold caches that were assumed warm

## Guardrails

- Correctness outranks speed: run the tests after every optimization.
- Keep each optimization a separate, revertable change with its measurement in the commit message.
- Readability is a cost — if a micro-optimization mangles the code for <10% on a non-critical path, reject it yourself.

## Report

Bottleneck found (with profile evidence) → fix applied → before/after numbers → budget met or remaining gap → what was deliberately not done.
