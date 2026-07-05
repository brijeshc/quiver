---
name: ship
description: Package current work into clean atomic commits with honest messages, optionally a pull request with a reviewable description. Use when work is done and ready to commit, or to turn a messy tree into presentable history.
argument-hint: "[optional: \"pr\" to also open a pull request]"
disable-model-invocation: true
allowed-tools: Bash(git status *) Bash(git diff *) Bash(git log *) Bash(git add *) Bash(git branch *)
---

# Ship

Mode: **$ARGUMENTS** (default: commits only; "pr" also drafts a pull request).

## Survey first

Read ALL of `git status` and `git diff` before staging anything.
Check `git log --oneline -10` and match the project's observed message convention.
On the default branch? Create a feature branch first.

## Atomic commits

One commit = one logical change: it builds, tests pass, and its message needs no "and".
Unrelated changes in the diff get split into separate commits by staging specific files or hunks: the bugfix apart from the refactor apart from the formatting.
Debris (debug prints, commented-out code, accidental `.env` or lockfile churn): flag it and ask, never silently commit.
**Scan the staged diff for secrets before every commit**; keys, tokens, and passwords never get committed.
Generated files follow project convention (committed lockfiles yes, build output no).

## Messages & PR description

Follow [templates.md](templates.md): imperative subject <= 72 chars, body answering the WHY a `git blame` archaeologist will ask in two years.
"fix bug" and "address comments" are banned.

## Confirmation

Show the planned commits (files -> message) before executing, and the PR description before opening.
Push only after the user confirms; pushing publishes.
