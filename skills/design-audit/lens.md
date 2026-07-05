# Design lens

Evidence for structural findings lives in git history as much as in code: `git log --format= --name-only | sort | uniq -c | sort -rn | head` finds the files that change in every PR.

## Checklist

### Dependencies
- Direction: low-level modules importing high-level ones; domain logic importing UI or framework types.
- Cycles between modules or packages.
- God modules: files half the codebase imports, or that appear in nearly every commit.

### Coupling
- Shotgun surgery: one conceptual change requires edits in many files (verify with git history).
- Feature envy: a function that mostly reads and writes another module's data.
- Leaky abstractions: callers that must know internals to use an interface safely; interfaces exposing implementation types.

### Duplication & abstraction
- The same rule or constant maintained in two or more places; which one is the source of truth?
- Premature abstraction: interfaces with one implementation, config that never varies, layers that only forward calls.
- Dead code: exports with no callers, feature flags fully rolled out, commented-out blocks.

### Seams & testability
- Logic untestable without heavy mocking because IO is woven through it.
- Missing boundaries: business rules living in controllers, views, or handlers; UI reaching directly into the database.

### Data model
- Primitive obsession: domain concepts passed around as strings/dicts, validated at every use instead of at the boundary.
- Nullable-everything shapes where invariants could make illegal states unrepresentable.
- Implicit state machines: status strings with transitions enforced by scattered ifs.

## Report addendum

For each finding, name the concrete next change that will be expensive because of it, and the refactoring direction with rough effort (hours/days).
Rank by leverage, not severity count.
