---
name: interviewing
description: Interview the developer one question at a time until shared understanding is reached. Core loop behind ask-me and design-discussion; use directly when the user asks to be questioned, grilled, or interviewed about anything without a more specific skill.
argument-hint: "[topic]"
---

# Interviewing loop

Topic: **$ARGUMENTS**.
The wrapper or user that started this session defines the deliverable; extract everything needed to produce it.

## Rules

1. One question at a time. Ask, wait, adapt the next question to the answer.
2. Read the codebase before asking. Never ask what the code, git history, or docs already answer.
3. Use the AskUserQuestion tool when the answer is a choice between options, with your recommended option first; use plain text when it is open-ended.
4. Concrete over abstract: not "what are your performance requirements?" but "if this took 3 seconds, is that a problem?"
5. Challenge vagueness immediately. "Fast", "simple", "clean" get converted to numbers or examples before you move on.
6. Ask what the developer has not thought about: edge cases, failure modes, day-2 concerns (empty states, errors, migrations, permissions).
7. When the developer answers with a question, answer it with evidence, then resume.

## Stop condition

Stop when two consecutive answers add no new constraints.
Budget: 5-9 questions for a feature-sized topic, up to 12 for a project.
Never pad to reach the budget.

## Close

Produce the deliverable the caller defined.
If none was defined, close with a numbered list of everything decided and anything still open.
End by asking the developer to confirm or correct it.
