---
name: which-arrow
description: Route to the right Quiver skill for the situation. Use when unsure which skill fits a task, or to see what the quiver offers for a piece of work.
argument-hint: "[what you're trying to do]"
---

# Which arrow

Match **$ARGUMENTS** against the installed Quiver skills and recommend one (two only if genuinely tied), with one sentence of why and the exact command to run.

Decision rules where descriptions overlap:

- Unclear WHAT to build -> `/ask-me`; unclear HOW to build it -> `/design-discussion`.
- Judge a diff/branch/PR before merge -> `/deep-review`; sweep the existing codebase -> a `*-audit` skill.
- Code works but humans struggle -> `/readable`; structure blocks the next change -> `/refactor` (guided by `/design-audit` findings).
- Broken or flaky -> `/root-cause`; slow -> `/perf`; untested -> `/write-tests`.
- Someone needs to understand something -> `/simply-explained`; the project needs written docs -> `/document`.
- UI work always starts at `/design-dna`; a named register, emotion, or moment picks the matching design skill.

If the task spans phases, give the chain in order (`/ask-me` -> build -> `/write-tests` -> `/deep-review` -> `/ship pr`).
If nothing fits, say so; never force a skill onto a task plain prompting serves better.
