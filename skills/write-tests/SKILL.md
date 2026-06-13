---
name: write-tests
description: Write tests that catch real bugs — behavior-focused, edge-case-heavy, and resistant to refactoring. Use when adding tests to untested code, testing a new feature, reproducing a bug, or when coverage is hollow.
argument-hint: "[files, feature, or bug to test]"
---

# Write Tests

Target: **$ARGUMENTS** (default: code changed in the current diff).

## What a good test is

A test is a bet that says: *if this behavior breaks, this test fails.* Every test you write must answer: **which user-visible or caller-visible behavior does this protect?** If the answer is "it checks that the mock was called", delete it.

## Procedure

1. **Find the project's testing idiom first.** Framework, file location, naming, fixtures, how the existing tests run. Match it exactly — don't import a new style or library into someone's suite.
2. **List behaviors before writing tests.** For the target, enumerate: the contract (inputs → outputs), the edge cases, the failure modes. Write the list as test names first — `it("rejects expired tokens with 401")` — then implement.
3. **Cover in this order:**
   1. The happy path — one clear test per documented behavior.
   2. Boundaries — empty, one, many, max; zero, negative, exactly-at-limit.
   3. Failure paths — invalid input, dependency errors, timeouts. Assert the *handling* (message, status, rollback), not just "it throws".
   4. The bug being fixed (if any) — a test that fails on the old code, passes on the new. Verify it actually fails on the old code.
4. **Run the tests.** Every test you deliver must have been executed and seen passing. A test you never ran is a guess.

## Rules of construction

- **Test through the public interface.** Private functions are tested via the behaviors that use them. If a private function needs direct tests, that's a signal it wants to be its own module.
- **Arrange-Act-Assert, visibly.** One action per test; assertions about one behavior. Multiple asserts are fine if they describe one outcome.
- **Names state the rule:** `("retries 3 times then surfaces the last error")`, not `("test error handling 2")`.
- **No logic in tests.** No loops, conditionals, or computed expectations that mirror the implementation. Expected values are literals a reviewer can verify by eye.
- **Mock at the boundary only** — network, clock, filesystem, randomness. Mocking your own modules welds the test to the implementation and it shatters on refactor.
- **Deterministic always:** freeze time, seed randomness, no sleeps — await real conditions. A flaky test is worse than no test.
- **Independent tests:** any order, any subset, no shared mutable fixtures.

## Smells that mean "rewrite this test"

- The assertion is `expect(mockFn).toHaveBeenCalled()` and nothing else
- The test repeats the implementation's algorithm to compute the expected value
- Changing a variable name breaks the test
- It passes when you comment out the code under test (try it on suspicious tests)

## Report

For each behavior listed: covered / deliberately skipped (why). Show the test-run output. Note coverage gaps you saw but didn't fill, so they're a decision, not an accident.
