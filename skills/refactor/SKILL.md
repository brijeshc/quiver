---
name: refactor
description: Restructure code in small behavior-preserving steps with tests as the net - never a rewrite. Use when structure blocks the next feature, duplication hurts, or a module has become unworkable.
argument-hint: "[files or area to refactor]"
---

# Refactor

Target: **$ARGUMENTS**

**The contract: observable behavior is identical before and after** - same outputs, side effects, errors, public API.
Behavior changes get their own commit, before or after, never during.

## Procedure

1. **Establish the net.** Run existing tests on the target; record what passes. No meaningful coverage? Write characterization tests first: pin what the code actually does now, weird cases included. You cannot preserve behavior you haven't pinned.
2. **Name the goal in one sentence** ("extract pricing rules so the new discount type slots in"). A refactor without a goal expands forever; if the honest motivation is "this code offends me", stop and confirm the budget first.
3. **Move in steps of one named refactoring each**: rename, extract, inline, move, replace conditional with polymorphism or lookup, introduce parameter object, consolidate duplication. After every step run the tests: green -> continue (commit meaningful steps); red -> fix or revert that step immediately, never stack a change on a broken state.
4. **Stop at the goal**; note further opportunities in the report instead of pursuing them.

## Direction of better

Fewer reasons to change per module.
Dependencies point one way: core logic depends on nothing; I/O at the edges.
Merge duplication only when it is truly one rule (rule of three).
Smaller public surface; invalid states unrepresentable.
Delete-friendly: a feature removable by deleting one folder.

## Hard limits

No dependency upgrades or reformatting in the same change.
No speculative flexibility; refactor for the change that is actually next.
No hot-path work without a perf baseline (pair with `/perf`).
A test diff that changes expected values is a behavior change, caught red-handed; test changes may only restructure, rename, or add.

## Report

Goal -> named steps -> proof of preservation (test runs before/after, same results) -> public API untouched or approved exceptions -> opportunities left.
