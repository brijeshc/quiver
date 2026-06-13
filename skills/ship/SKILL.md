---
name: ship
description: Package the current work into clean, atomic commits with honest messages, and optionally a pull request with a reviewable description. Use when work is done and ready to commit, or to turn a messy working tree into a presentable history.
argument-hint: [optional: "pr" to also open a pull request]
disable-model-invocation: true
allowed-tools: Bash(git status *) Bash(git diff *) Bash(git log *) Bash(git add *) Bash(git branch *)
---

# Ship — commits & PRs worth reading

Mode: **$ARGUMENTS** (default: commits only; "pr" also drafts/opens a pull request).

## Survey first

Run `git status` and `git diff` and read ALL of it. Know exactly what's in the tree before staging anything. Check `git log --oneline -10` to match the project's existing message style (conventional commits? plain imperative? scopes?). If on the default branch, create a feature branch first.

## Atomic commits

One commit = one logical change that stands alone: it builds, tests pass, and its message needs no "and".

- The diff contains multiple unrelated changes? Split them — stage selectively (`git add -p` style: stage specific files/hunks) into separate commits: the bugfix apart from the refactor apart from the formatting.
- Found debris? Debug prints, commented-out code, accidental `.env` or lockfile churn, unrelated whitespace — flag it and ask, don't silently commit it. **Never commit secrets**: scan the staged diff for keys/tokens/passwords before every commit.
- Generated files follow project convention (committed lockfiles yes, build output no).

## Messages

Format (adapt to the project's observed convention):

```
<type>(<scope>): <imperative summary ≤ 72 chars>

WHY this change exists — the problem or goal (the diff already shows WHAT).
Notable decisions or tradeoffs, in one short paragraph.

Refs: #123
```

- Imperative mood: "add retry to webhook delivery", not "added"/"adds".
- The body answers the question a `git blame` archaeologist will have in two years. "fix bug" and "address comments" are banned.
- A breaking change is stated as `BREAKING CHANGE:` with the migration in one line.

## Pull request (when "pr" requested)

Use `gh pr create`. The description is for a reviewer with 10 minutes:

```
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

Keep PRs small enough to review well; if the work is really two PRs, say so and offer to split.

## Confirmation

Show the planned commits (files → message) before executing them, and the PR description before opening it. Push only after the user confirms — pushing publishes.
