# Tools and classic culprits for /perf

## Measurement tools by stack

- Node/JS: `node --cpu-prof`, `console.time`, Chrome DevTools Performance tab, Lighthouse for pages.
- Python: `cProfile`, `py-spy`, `timeit`.
- SQL: `EXPLAIN ANALYZE`; never tune a query without reading its plan.
- HTTP: `curl -w` timings; k6 or autocannon for load.
- Builds: the build tool's own `--profile` flag.

## Classic culprits to check first

- N+1 queries (ORM lazy loads in a loop).
- Missing database index on a filtered or joined column (verify with the query plan).
- Fetching everything and filtering in app code.
- Synchronous I/O on a hot path; sequential awaits that could be `Promise.all`.
- Re-render storms; work re-done per keystroke or per frame.
- Unbounded payloads: no pagination, full-resolution images, megabyte JSON.
- Allocation churn and string concatenation in tight loops.
- Cold caches that were assumed warm.
