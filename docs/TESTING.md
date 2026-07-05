# Quiver 2.0 live-fire test log

Every skill must pass a live-fire run before 2.0 is accepted: invoked for real, on a real codebase, output inspected.
Reading the SKILL.md is not acceptance.
This file is the log; mark results directly in it.

## Setup (once)

```powershell
# Windows PowerShell - refresh the personal install and drop the renamed 1.x folders
Remove-Item -Recurse -Force "$env:USERPROFILE\.claude\skills\harden" -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force "$env:USERPROFILE\.claude\skills\a11y" -ErrorAction SilentlyContinue
Copy-Item -Recurse -Force C:\Code\brijesh-skills\quiver\skills\* "$env:USERPROFILE\.claude\skills\"
```

Then restart Claude Code and run the tests below in any real project (audits and reviews want a codebase with actual code; design skills want any UI task).

## How to mark

Each skill has up to three checks:

- **Direct** - run the command; the skill must reach its stated deliverable.
- **Auto** - say the phrase naturally (no slash command); the right skill must load. Manual-only skills must NOT auto-fire; their Auto row says so.
- **Negative** - say the neighboring phrase; this skill must stay quiet.

Set Result to `pass`, `fail`, or `partial` and add anything worth remembering to Notes.

Legend: [ ] not run · [x] done.

---

## Cores

### interviewing
- [ ] Direct: `/interviewing should we split the mobile app repo` -> one question at a time, recommended options first, stops at saturation, closes with a decided/open list.
- [ ] Auto: "grill me about this migration plan" -> loads without a wrapper.
- Result:
- Notes:

### auditing
- [ ] Direct: `/auditing scripts/` (something no lens covers) -> asks for or improvises a lens, then scope -> hunt -> verify -> report with coverage statement.
- [ ] Negative: "review my PR" -> `deep-review` loads, not this.
- Result:
- Notes:

---

## Interview family

### ask-me
- [ ] Direct: `/ask-me a small real feature` -> interview runs on the interviewing core, one question at a time, ends in `SPEC.md` with all template sections + confirmation request.
- [ ] Auto: say "I want to build X" WITHOUT the command -> must NOT auto-fire (manual-only).
- [ ] Boundary: steer answers toward "how should it be architected" -> offers `/design-discussion`.
- Result:
- Notes:

### design-discussion
- [ ] Direct: `/design-discussion a real architecture question` -> options with trade-offs + a recommendation each round, challenges your preference, ends with ADR file(s) in `docs/adr/` (or DESIGN.md if you chose it at start).
- [ ] Check: it asked ADRs-vs-DESIGN.md exactly once, at the start.
- [ ] Boundary: steer toward "what should the feature do" -> offers `/ask-me`.
- Result:
- Notes:

---

## Audit family

### security-audit
- [ ] Direct: `/security-audit src/` on a repo with real endpoints -> auditing loop with the security lens, findings show source -> sink, severity, fix; clear-cut fixes applied; coverage close.
- [ ] Auto: "check this code for vulnerabilities before I deploy" -> loads.
- [ ] Negative: "review my diff" -> `deep-review` loads, not this.
- Result:
- Notes:

### design-audit
- [ ] Direct: `/design-audit src/` on a codebase you know is tangled -> structural findings each naming the change they make expensive, refactoring directions with effort, ranked by leverage, nothing auto-applied.
- [ ] Auto: "what should we improve structurally in this codebase" -> loads.
- Result:
- Notes:

### ux-audit
- [ ] Direct: `/ux-audit the signup flow` on a real UI -> walks the flow as a first-time user, findings name the confused moment + what the user sees vs needs.
- [ ] Boundary: findings about contrast/keyboard get routed to `/a11y-audit`, not mixed in.
- Result:
- Notes:

### a11y-audit
- [ ] Direct: `/a11y-audit` on UI files -> WCAG criteria per finding, who it blocks, keyboard-walk transcript, computed contrast ratios (not eyeballed).
- [ ] Auto: "is this page accessible?" -> loads.
- Result:
- Notes:

---

## Workflow skills

### deep-review
- [ ] Direct: `/deep-review` on a branch with known issues -> reads hunt-list.md, findings with evidence + severity emoji, verdict at the end; no style nitpicks.
- [ ] Auto: "review this PR before I merge" -> loads.
- Result:
- Notes:

### root-cause
- [ ] Direct: `/root-cause <a real bug>` -> refuses to fix before reproducing and proving; ends with regression test verified failing-then-passing.
- [ ] Auto: "this test fails only in CI, works on my machine" -> loads.
- Result:
- Notes:

### write-tests
- [ ] Direct: `/write-tests <an untested module>` -> behavior list first, project idiom matched, tests executed and shown passing, gaps reported as decisions.
- [ ] Auto: "we have no tests for the parser" -> loads.
- Result:
- Notes:

### perf
- [ ] Direct: `/perf <something actually slow>` -> refuses to optimize without a measurement; budget stated; before/after numbers in the report.
- [ ] Auto: "the dashboard takes forever to load" -> loads.
- Result:
- Notes:

### refactor
- [ ] Direct: `/refactor <a tangled area>` -> net established first (or characterization tests written), named steps, tests green after each, stops at the stated goal.
- [ ] Negative: "make this function easier to read" -> `readable` loads, not this.
- Result:
- Notes:

### readable
- [ ] Direct: `/readable <a hard-to-follow file>` -> passes.md order followed, behavior untouched, tests confirmed passing, report lists reasons per change.
- [ ] Negative: "find bugs in this file" -> `deep-review` loads, not this.
- Result:
- Notes:

### simply-explained
- [ ] Direct: `/simply-explained <a gnarly module>` -> one-sentence -> analogy (with where it breaks) -> one mermaid diagram -> walkthrough -> gotchas; offers export once; prompts before overwriting an existing file.
- [ ] Direct with audience: `/simply-explained the auth flow, for a PM` -> calibrates language.
- [ ] Auto: "explain how the cache invalidation works in simple terms" -> loads.
- [ ] Check: mermaid block renders (paste into GitHub preview or mermaid.live).
- Result:
- Notes:

### document
- [ ] Direct: `/document readme` on a project with a stale README -> reader named, commands actually executed to verify, report shows what was run.
- [ ] Auto: "the README is out of date" -> loads.
- Result:
- Notes:

### api-design
- [ ] Direct: `/api-design <a new endpoint or lib interface>` -> caller code examples FIRST, then contract with error table, then evolution notes.
- Result:
- Notes:

### ship
- [ ] Direct: `/ship` on a messy tree with 2+ unrelated changes -> splits into atomic commits, shows the plan before executing, flags debris, scans for secrets.
- [ ] Auto: finish some work and say "commit this" WITHOUT `/ship` -> must NOT auto-fire (manual-only).
- Result:
- Notes:

---

## Design suite

### design-dna
- [ ] Direct: `/design-dna <a small page + audience>` -> three adjectives, reference world, full contract written down BEFORE any code; no banned tells in the output.
- [ ] Auto: "design a landing page for my app" -> loads.
- Result:
- Notes:

### design-minimal
- [ ] Direct: `/design-minimal <a page>` -> reads dials.md; output holds the never list (no shadows/gradients, one accent max).
- Result:
- Notes:

### design-scholarly
- [ ] Direct: `/design-scholarly <a docs or essay page>` -> scholar's margin present, serif craft, no cards/shadows.
- Result:
- Notes:

### design-expressive
- [ ] Direct: `/design-expressive <a launch page>` -> ONE big idea stated up front and executed; body reading layer stays disciplined.
- Result:
- Notes:

### design-brutalist
- [ ] Direct: `/design-brutalist <a dev-tool page>` -> visible grid, radius 0 everywhere, hard offset shadows only, pixel-aligned.
- Result:
- Notes:

### design-luxe
- [ ] Direct: `/design-luxe <a premium page>` -> withheld color, slow reveals, letterspaced caps; no fake-luxury tells.
- Result:
- Notes:

### design-playful
- [ ] Direct: `/design-playful <a consumer page>` -> colored ink (never black), sticker language, springs; destructive flows stay serious.
- Result:
- Notes:

### design-mood
- [ ] Direct: `/design-mood cozy <a page>` -> reads the cozy recipe from moods.md, states the contract back, applies all six levers.
- [ ] Derivation: `/design-mood mysterious <a page>` (unlisted) -> derives a recipe from the lever table in the same format.
- Result:
- Notes:

### design-scene
- [ ] Direct: `/design-scene rainy <a page>` -> reads the rainy recipe from scenes.md, light treated as the master lever.
- [ ] Routing: `/design-scene calm <a page>` (an emotion, not a scene) -> redirects to `design-mood`.
- Result:
- Notes:

---

## Meta skills

### which-arrow
- [ ] Direct: `/which-arrow my checkout page is slow and ugly` -> recommends a chain (`/perf`, then design skills), exact commands, no forced fit.
- [ ] Honesty: `/which-arrow rename a variable` -> says no skill needed.
- Result:
- Notes:

### handoff
- [ ] Direct: after real work, `/handoff` -> `HANDOFF.md` with all six sections, claims verified against `git status`, under a page; prompts before overwriting an existing one.
- [ ] Resume: new session, "read HANDOFF.md and continue" -> the file is actually enough to resume from.
- Result:
- Notes:

### to-issues
- [ ] Direct: with a SPEC.md present, `/to-issues` -> vertical slices only, acceptance criteria checkable, list shown in chat first, asks before creating anything on GitHub.
- Result:
- Notes:

### to-prd
- [ ] Direct: after a real product discussion, `/to-prd` -> PRD.md contains only what was discussed, gaps as open questions, flags the three thinnest spots.
- Result:
- Notes:

---

## Sign-off

- [ ] All skills above pass.
- [ ] No skill auto-fires when it shouldn't; no manual-only skill auto-fires ever.
- [ ] Version 2.0.0 tagged and README matches reality.
