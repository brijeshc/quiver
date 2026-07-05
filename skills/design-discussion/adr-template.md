# ADR template for /design-discussion

File: `docs/adr/NNNN-<kebab-slug>.md`, where NNNN is the next number in that directory (start at 0001).

```markdown
# NNNN. <Decision title, stated as the choice made>

Date: YYYY-MM-DD
Status: accepted

## Context
<the question that arose, why now, and what constrains the answer>

## Options considered
<each option with the one trade-off that decided its fate>

## Decision
<what was chosen, stated as "We will ...">

## Consequences
<what becomes easier, what becomes harder, what to revisit and when>
```

If the developer chose `DESIGN.md` instead: one file at the project root with sections Context, Decisions (each with its options and consequences, same rigor as an ADR), and Open questions.
