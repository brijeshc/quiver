# Question banks for /ask-me

Pick questions that fit the situation. Adapt wording to the project. Never read these out as a list.

## New project kickoff

- What problem does this solve, in one sentence, for one specific person?
- If this works perfectly for 6 months, what has changed for its users?
- What exists today — a spreadsheet, a manual process, a competitor? Why is that not enough?
- What is the smallest version you would actually use yourself?
- Who maintains this after v1 — you, a team, nobody?
- What's the deadline, and what happens if it slips?
- Greenfield stack choice: do you want boring-and-proven or are you using this to learn something?

## New feature

- Walk me through the moment a user needs this. What were they doing right before?
- What should the user see when it works? Describe the screen/output literally.
- What's explicitly NOT part of this feature, even if it seems related?
- Does this change any existing behavior, or is it purely additive?
- Should this work for all users immediately, or behind a flag/permission?
- What data does it need that we don't already have?

## Bug fix

- What did you expect, and what happened instead? Exact messages or screenshots if possible.
- When did it last work? What changed around then (deploys, deps, data, config)?
- Can you reproduce it on demand? What are the exact steps?
- Who is affected — everyone, one user, one environment?
- Is a workaround in place? How urgent is the real fix?
- Should the fix include a regression test, or is there a reason it can't?

## Refactor / rework

- What makes the current code painful — be specific about the last time it hurt.
- What must NOT change? (Public APIs, behavior, performance, file formats, URLs)
- Is there test coverage on the area? If not, do we add characterization tests first?
- What's the budget — hours or days? Where do we stop?
- Is this blocking other work, or housekeeping?

## Edge & failure probing (use 2–3 for any task)

- What happens with zero items? With 100,000?
- Two users do this at the same time — what should win?
- The network/API/DB call fails halfway through — what state are we left in?
- A malicious user controls this input — what's the worst they can do?
- This runs on the slowest device/connection you support — still acceptable?
- What should the error message literally say when it fails?

## Verification probing

- Show me what you'd click/run to convince yourself it's done.
- What result would make you reject the work immediately?
- Are there existing tests this must keep green?
- Who else has to sign off?
