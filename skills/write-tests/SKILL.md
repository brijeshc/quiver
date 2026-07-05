---
name: write-tests
description: Write tests that catch real bugs - behavior-focused, edge-case-heavy, resistant to refactoring. Use when adding tests to untested code, testing a new feature, reproducing a bug, or when coverage is hollow.
argument-hint: "[files, feature, or bug to test]"
---

# Write tests

Target: **$ARGUMENTS** (default: code changed in the current diff).

A test is a bet: if this behavior breaks, this test fails.
Every test must answer which caller-visible behavior it protects; if the answer is "it checks the mock was called", delete it.

## Procedure

1. **Find the project's testing idiom first**: framework, file location, naming, fixtures, how tests run. Match it exactly; never import a new style or library into someone's suite.
2. **List behaviors before writing tests**: the contract (inputs -> outputs), the edge cases, the failure modes. Write the list as test names first (`it("rejects expired tokens with 401")`), then implement.
3. **Cover in order**: happy path (one test per documented behavior) -> boundaries (empty, one, many, max; zero, negative, at-limit) -> failure paths (assert the handling - message, status, rollback - not just "it throws") -> the bug being fixed, with a test verified to fail on the old code.
4. **Run everything.** Every delivered test has been executed and seen passing; a test never run is a guess.

Construction rules and rewrite-smells: [construction.md](construction.md) - apply while writing, check before delivering.

## Report

For each listed behavior: covered, or deliberately skipped with why.
Show the test-run output.
Note coverage gaps seen but not filled, so they are a decision, not an accident.
