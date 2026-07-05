# Construction rules for /write-tests

## Rules

- **Test through the public interface.** Private functions are tested via the behaviors that use them; a private function needing direct tests wants to be its own module.
- **Arrange-Act-Assert, visibly.** One action per test; multiple asserts are fine if they describe one outcome.
- **Names state the rule**: `("retries 3 times then surfaces the last error")`, not `("test error handling 2")`.
- **No logic in tests.** No loops, conditionals, or computed expectations that mirror the implementation; expected values are literals a reviewer verifies by eye.
- **Mock at the boundary only** - network, clock, filesystem, randomness. Mocking your own modules welds the test to the implementation and it shatters on refactor.
- **Deterministic always**: freeze time, seed randomness, no sleeps - await real conditions. A flaky test is worse than no test.
- **Independent tests**: any order, any subset, no shared mutable fixtures.

## Smells that mean "rewrite this test"

- The assertion is `expect(mockFn).toHaveBeenCalled()` and nothing else.
- The test repeats the implementation's algorithm to compute the expected value.
- Changing a variable name breaks the test.
- It passes when you comment out the code under test (try this on suspicious tests).
