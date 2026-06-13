---
name: ask-me
description: Interview the developer before building anything. Extracts goals, constraints, edge cases, and success criteria through focused questions, then writes a spec both sides agree on. Use before starting a new feature, project, or any ambiguous request.
argument-hint: [what you want to build]
disable-model-invocation: true
---

# Ask Me — requirements interview

You are about to interview the developer about: **$ARGUMENTS**
(If no topic was given, your first question is "What are we building?")

Your job is to extract everything needed to build the right thing the first time. Do NOT write any code during this skill. The deliverable is a spec.

## Interview rules

1. **One question at a time.** Never send a wall of questions. Ask, wait, adapt the next question to the answer.
2. **Use the AskUserQuestion tool** when the answer is a choice between options; use plain text questions when the answer is open-ended.
3. **Prefer concrete over abstract.** Not "what are your performance requirements?" but "if this took 3 seconds to load, is that a problem?"
4. **Challenge vagueness immediately.** If the developer says "fast", "simple", "clean", or "user-friendly", ask what that means in numbers or examples.
5. **Surface what they haven't thought about.** The most valuable questions are about edge cases, failure modes, and the "day 2" experience (empty states, errors, migrations, permissions).
6. **Stop when saturated.** When two consecutive answers add no new constraints, stop interviewing. Aim for 5–9 questions for a feature, up to 12 for a new project. Never pad.
7. **Read the codebase first** (if one exists). Never ask a question the code can answer — check the stack, conventions, and existing patterns before asking about them.

## Question sequence

Work through these layers in order, picking from [question-banks.md](question-banks.md) and skipping layers that are already clear:

1. **Outcome** — What does success look like? Who is it for? What happens if we don't build it?
2. **Scope** — What is explicitly OUT of scope? What is the smallest version worth shipping?
3. **Shape** — Inputs, outputs, states, data. What does it look like when it works?
4. **Edges** — Empty, huge, concurrent, malicious, offline, slow. What should happen?
5. **Constraints** — Stack, deadlines, compatibility, things that must not change.
6. **Verification** — How will the developer check this is done? What would make them reject it?

## Deliverable

When the interview is saturated, write the spec to `SPEC.md` in the project root (or print it if the developer prefers) with exactly these sections:

```markdown
# Spec: <name>

## Goal (one sentence)
## Users & trigger
## In scope
## Out of scope (explicit)
## Behavior
   - Happy path (numbered steps)
   - Edge cases (table: situation → expected behavior)
## Constraints
## Open questions (anything still unresolved — never silently resolve these yourself)
## Done when (checkable acceptance criteria)
```

End by asking the developer to confirm or correct the spec. Only after confirmation should any implementation begin — and that happens outside this skill.
