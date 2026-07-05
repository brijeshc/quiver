# The Quiver authoring contract

Every skill in this repo is built to this contract.
A skill that misses it gets rewritten or pruned, and a PR that misses it gets rejected.

## The prime virtue: predictability

A skill exists to make the agent run the same process every time, not to inspire it.
If two runs of the same skill can follow different procedures, the skill is underspecified.

## The no-op test

Every sentence in a SKILL.md must change what the agent does compared to having no skill loaded.
Read each sentence and ask: would a competent agent behave differently without it?
If not, delete it.
Introductions, restated headings, motivational framing, and "be thorough" all fail the test.

## Word budgets

| File | Budget (body, excluding frontmatter) |
|---|---|
| Wrapper SKILL.md | up to ~150 words |
| Core or standalone SKILL.md | up to ~300 words |
| Reference file | no cap, but it must be loaded conditionally, never always |

Over budget means the skill is doing too much: move depth down the disclosure ladder or split the skill.

## The disclosure ladder

Rank every piece of content by when the agent needs it:

1. **Steps** - ordered actions in SKILL.md; the agent always needs these.
2. **Reference** - lenses, checklists, templates, and recipes in sibling files, linked with an instruction saying when to read them.
3. **External** - official docs and specs; linked, never pasted.

When SKILL.md grows past budget, move content down the ladder.

## Families: core + wrappers

When several skills share a procedure and differ only by domain, the procedure becomes a **core** skill and each domain becomes a thin **wrapper**.

- A core is model-invoked, holds the full loop, and knows nothing about domains.
- A wrapper is essentially one instruction: run the core with this lens, produce this deliverable.
  Its lens or checklist lives in a reference file inside the wrapper's folder.
- A wrapper invokes its core by skill name ("Run an `/auditing` session...").
  If the core is not installed, the invocation fails visibly; a wrapper must never silently degrade into a vague version of itself.

| Family | Core | Wrappers |
|---|---|---|
| Interviews | `interviewing` | `ask-me`, `design-discussion` |
| Audits | `auditing` | `security-audit`, `design-audit`, `ux-audit`, `a11y-audit` |

## Naming rules

- `*-audit` sweeps existing code or UI at codebase scope.
- Review skills (`deep-review`) judge a diff, branch, or PR before merge.
- Folder name is the command name: kebab-case, leading word first (`security-audit`, not `audit-security`).
- Never reuse a name bundled with Claude Code (`code-review`, `review`, `security-review`, `verify`, `simplify`, `init`, `run`, `loop`, `schedule`) or a common third-party skill name (`impeccable`).

## Frontmatter rules

- `description` is the trigger: it is the only part of the skill the model sees before invoking.
  Front-load the leading word ("Audit...", "Interview...", "Explain...").
  One trigger phrase per distinct situation; collapse synonyms.
  End with "Use when..." naming the situations in the words a user would say.
- `disable-model-invocation: true` on any skill whose timing belongs to the human (interviews, commits).
- `argument-hint` on every user-invoked skill.

## Deliverables

Every skill ends in a defined deliverable: a report with a stated format, a file at a stated path, or a confirmed decision.
A skill without a deliverable trails off, and the agent pads the ending with generic summary.
State the deliverable in the last section of the body.

## Failure modes to prune on sight

- **No-op lines**: fail the sentence test above.
- **Duplication**: the same rule stated in two files; keep one source of truth, usually the core.
- **Sediment**: instructions added for a one-off situation that never recurs.
- **Sprawl**: a SKILL.md over budget; push down the ladder or split.
- **Premature completion**: the agent stops before the deliverable; sharpen the done criteria instead of adding words.

## Testing a skill (all four required)

1. **Direct**: `/my-skill arg` runs the full procedure to the deliverable.
2. **Auto-trigger**: phrase the need the way a user would; the model loads the skill.
3. **Negative**: phrase a neighboring need; the skill stays quiet.
4. **Live-fire**: run it on a real codebase and inspect the output; reading the SKILL.md is not acceptance.

## Repo conventions

- Plain dashes only; the em dash is banned in every file.
- In prose sections of markdown, one sentence per line.
- Imperative, concrete, no hedging: "cap body line length at 65-75ch", not "keep lines reasonably short".
