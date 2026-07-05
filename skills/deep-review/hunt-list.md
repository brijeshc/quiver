# Hunt list for /deep-review

Work in this priority order.

1. **Logic errors** - inverted conditions, off-by-one, wrong operator, unreachable branches, early returns that skip cleanup.
2. **Edge cases** - empty/null/undefined, zero, negative, max-size, unicode, duplicate entries, already-deleted records.
3. **Error handling** - swallowed exceptions, errors that leave partial state, missing rollback, error paths that themselves throw.
4. **Concurrency & async** - race conditions, missing awaits, shared mutable state, stale closures, double-fire on retry, ordering assumptions.
5. **Resource handling** - leaks (handles, listeners, subscriptions, timers), unbounded growth, missing pagination.
6. **Security** - injection (SQL/command/path/template), unsafe deserialization, secrets in code or logs, missing authz on new endpoints, trusting client input. (For a dedicated pass, run `/security-audit`.)
7. **Contract breaks** - changed signatures or return shapes with un-updated callers, API/DB schema changes without migration, broken serialization compatibility.
8. **Data integrity** - writes without validation, lossy conversions, timezone/precision bugs, float money math.
