---
name: to-issues
description: Break a spec or plan into small vertical-slice issues ready for a tracker. Use after a spec or plan exists (often from /ask-me) and the work needs to be split into shippable increments.
argument-hint: "[spec/plan file, or blank for SPEC.md]"
disable-model-invocation: true
---

# To issues

Source: **$ARGUMENTS** (default: `SPEC.md` at the project root; none found, ask what to slice).

Slice **vertically**: each issue is a user-visible increment that can be built, tested, and demoed on its own.
"Build the DB layer" is a horizontal slice and always wrong; "user can save a draft (schema + endpoint + button)" is vertical.

Each issue gets:

- Title in the imperative ("Add draft autosave"), sized S or M; anything L gets split again.
- Context: one paragraph plus a link/reference to the source spec section.
- Acceptance criteria: checkable without asking the author.
- Dependencies: which issues must land first.

Order the list so someone can pick from the top.

Deliverable: show the full issue list in chat first.
Then, if the repo has a GitHub remote and the user confirms, create them with `gh issue create`; otherwise write them to `docs/issues/NNN-<slug>.md`, one file each.
Never create tracker issues without explicit confirmation; they are outward-facing.
