---
name: refactor
description: Behavior-preserving restructuring in small, verified steps. Untangles code safely with tests as a net — never a rewrite. Use when code needs restructuring before a feature, when duplication hurts, or when a module has become unworkable.
argument-hint: "[files or area to refactor]"
---

# Refactor — change structure, never behavior

Target: **$ARGUMENTS**

## The contract

Refactoring means **observable behavior is identical before and after** — same outputs, same side effects, same errors, same public API. The moment you "improve a small behavior along the way", you're doing two jobs badly. Behavior changes get their own commit, before or after, never during.

## Procedure

1. **Establish the net.** Run the existing tests on the target; record what passes. No meaningful coverage? Write **characterization tests** first: capture what the code *actually does* now (including its weird cases) — not what it should do. You can't preserve behavior you haven't pinned.
2. **Name the goal in one sentence** — "extract pricing rules so the new discount type slots in", "remove the circular dependency between auth and users". A refactor without a goal expands forever. If the honest motivation is "this code offends me", stop and confirm the budget with the developer first.
3. **Move in steps of one named refactoring each:** rename; extract function/module; inline; move; replace conditional with polymorphism/lookup; introduce parameter object; consolidate duplication. After **every** step: run the tests. Green → continue (commit if the step is meaningful). Red → fix or revert that step immediately; never stack a second change on a broken state.
4. **Stop at the goal.** When the named goal is reached, stop — note further opportunities in the report instead of pursuing them.

## Direction of better

- **Fewer reasons to change per module** — separate what changes together from what doesn't.
- **Dependencies point one way** — core logic depends on nothing; I/O and frameworks live at the edges.
- **Duplication merged only when it's truly the same rule** — two similar-looking blocks that change for different reasons should stay separate. Wrong abstraction costs more than duplication (rule of three).
- **Smaller public surface** — fewer exports, narrower parameters, invalid states unrepresentable.
- **Delete-friendly** — could a feature be removed by deleting one folder? Move toward that.

## Hard limits

- Don't refactor and upgrade dependencies/formatting in the same change.
- Don't create speculative flexibility ("we might need a plugin system") — refactor for the change that's actually next.
- Don't touch hot paths without a perf baseline (pair with `/perf` if performance might shift).
- A "refactor" with a test diff that changes expected *values* is a behavior change — caught red-handed. Test changes may only restructure, rename, or add.

## Report

Goal → steps taken (each named) → proof of preservation (test runs before/after, same results) → public API untouched (or the approved exceptions) → opportunities deliberately left.
