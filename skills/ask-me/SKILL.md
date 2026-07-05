---
name: ask-me
description: Interview the developer before building anything, producing a SPEC.md both sides agree on. Use before starting a feature, project, or any ambiguous request.
argument-hint: "[what you want to build]"
disable-model-invocation: true
---

# Ask me

Run an `/interviewing` session about **$ARGUMENTS** (no topic given: the first question is "What are we building?").

This session settles WHAT to build; if it drifts into how to build it, offer to switch to `/design-discussion`.
Write no code; the deliverable is a spec.

Pick questions from [question-banks.md](question-banks.md), working the layers in order: outcome, scope, shape, edges, constraints, verification.
Skip layers the codebase or conversation already answers.

When saturated, write `SPEC.md` at the project root using [spec-template.md](spec-template.md) and ask the developer to confirm or correct it.
Implementation begins only after confirmation, outside this skill.
