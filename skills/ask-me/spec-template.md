# Spec template for /ask-me

Write `SPEC.md` with exactly these sections, none omitted:

```markdown
# Spec: <name>

## Goal (one sentence)

## Users & trigger

## In scope

## Out of scope (explicit)

## Behavior

### Happy path (numbered steps)

### Edge cases (table: situation -> expected behavior)

## Constraints

## Open questions
<anything still unresolved - never silently resolve these yourself>

## Done when (checkable acceptance criteria)
```

An edge-case row states observable behavior ("prompt before overwrite"), not intent ("handle gracefully").
Acceptance criteria are checkable by the developer without asking you.
