# Templates for /ship

## Commit message (adapt to the project's observed convention)

```text
<type>(<scope>): <imperative summary <= 72 chars>

WHY this change exists - the problem or goal (the diff already shows WHAT).
Notable decisions or tradeoffs, in one short paragraph.

Refs: #123
```

- Imperative mood: "add retry to webhook delivery", not "added" or "adds".
- A breaking change is stated as `BREAKING CHANGE:` with the migration in one line.

## Pull request description (reader: a reviewer with 10 minutes)

```text
## What & why
Two or three sentences: the problem, the approach, the user-visible result.

## How to review
Suggested order to read the diff; where the risk concentrates;
anything that looks odd but is intentional (say why).

## Testing
What was run and the result. Manual steps if a human must click something.

## Out of scope
Related issues deliberately not addressed here.
```

Open with `gh pr create`.
Keep PRs small enough to review well; if the work is really two PRs, say so and offer to split.
