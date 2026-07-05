# Spec: Quiver 2.0 - rebuild from references

## Goal (one sentence)

Rebuild the entire quiver collection to the mattpocock/impeccable quality bar: composable skills (shared model-invoked cores + thin user-facing wrappers) where every sentence passes the no-op test, adding design-discussion, simply-explained, design-audit, and ux-audit.

## Users & trigger

- Brijesh, as author and daily driver of the skills.
- Public Claude Code users installing from GitHub (personal copy, project copy, or plugin).
- Trigger: the current 21 skills predate a clear authoring contract; the reference repos (mattpocock/skills, impeccable) set a higher bar for conciseness, composability, and predictability.

## In scope

- **Authoring contract first**: rewrite `docs/WRITING-SKILLS.md` into the binding contract (no-op test, word budgets, progressive disclosure ladder, core/wrapper pattern, naming rules).
- **Shared cores** (model-invoked, reusable): `interviewing` (the grilling loop) and `auditing` (scope -> hunt -> verify -> report loop).
- **Interview family** (wrappers on `interviewing`):
  - `ask-me` - requirements interview producing SPEC.md (rebuilt).
  - `design-discussion` - new; to-and-fro sparring on architecture choices; agent proposes options with trade-offs and recommendations; each resolved decision becomes an ADR in `docs/adr/`; user may request a session DESIGN.md instead.
- **Audit family** (wrappers on `auditing`; audit = whole-codebase sweep):
  - `security-audit` - absorbs and replaces `harden`.
  - `design-audit` - new; bad design choices, coupling, boundary violations, available design optimizations.
  - `ux-audit` - new; UX heuristics sweep of user-facing flows.
  - `a11y-audit` - rename of `a11y`, refit onto the auditing core.
- **`simply-explained`** - new; explains any code, task, or concept in plain words with analogies and mermaid diagrams; offers export to a markdown file (e.g. `docs/explanations/<topic>.md`).
- **Engineering workflow skills rebuilt** to the new contract: `deep-review` (stays; review = diff/PR judgment), `root-cause`, `write-tests`, `perf`, `refactor`, `readable`, `document`, `api-design`, `ship`.
- **Design suite rebuilt** to the new contract: `design-dna` + the 8 style/mood/scene skills (recipes stay in reference files).
- **Meta/ecosystem skills** (new, mattpocock-style): a router skill, `handoff`, `to-issues`, `to-prd`.
- **Docs rewrite last**: README, INSTALL, USAGE updated to the new architecture, including the core+wrapper install pairing.

## Out of scope (explicit)

- Backwards compatibility or migration shims for old skill names (project is early stage; renames are clean breaks).
- Marketplace publishing automation beyond updating the existing `.claude-plugin` manifest.
- Changing bundled Claude Code skills or third-party skills (impeccable).
- Any application code; this project is skill authoring only.

## Behavior

### Happy path (numbered steps)

1. Wave 0: study the references in depth (full read of mattpocock/skills, impeccable structure) and write the authoring contract into `docs/WRITING-SKILLS.md`.
2. Wave 1: build shared cores (`interviewing`, `auditing`) plus the critical six (`ask-me`, `design-discussion`, `simply-explained`, `security-audit`, `design-audit`, `ux-audit`).
3. Live-fire wave 1: invoke each skill on a real codebase, inspect output; Brijesh reviews and accepts before wave 2 starts.
4. Wave 2: rebuild the engineering workflow skills (`deep-review`, `root-cause`, `write-tests`, `perf`, `refactor`, `readable`, `document`, `api-design`, `ship`, `a11y-audit`); live-fire; review gate.
5. Wave 3: rebuild the design suite and add the meta/ecosystem skills; live-fire; review gate.
6. Rewrite README/INSTALL/USAGE, update the plugin manifest, bump version to 2.0.0.

### Edge cases (situation -> expected behavior)

| Situation | Expected behavior |
|---|---|
| A wrapper is copied without its shared core | Wrapper's first line names its core dependency; if the core is missing at runtime the wrapper says so instead of silently degrading; INSTALL docs list core+wrapper pairs |
| A rebuilt name collides with a bundled Claude Code skill (`code-review`, `security-review`, `review`, `verify`, `simplify`, ...) | Names are checked against the bundled list before creation; all planned `*-audit` names are currently clear |
| Installed copies in `~/.claude/skills` go stale mid-rebuild | Docs include an update step; Brijesh reinstalls after each wave for live-fire testing |
| Model auto-invokes an audit when the user wanted a diff review (or vice versa) | Descriptions encode scope as the trigger: audit = codebase sweep, review = diff; manual-only skills (`ask-me`, `design-discussion`, `ship`) keep `disable-model-invocation: true` |
| `design-discussion` drifts into requirements gathering | Boundary stated in both skills: `ask-me` = what to build (spec); `design-discussion` = how to build it (decisions/ADRs); the drifting skill hands off to the other |
| `simply-explained` export target file already exists | Prompt before overwrite; never clobber silently |
| Mermaid diagram uses invalid or exotic syntax | Skill restricts diagrams to simple flowchart/sequence/state forms; correctness over decoration |

## Constraints

- Conciseness contract: every sentence must change agent behavior or be deleted (no-op test); wrappers <= ~150 words; cores <= ~300 words; opinionated depth lives in reference files loaded on demand.
- Architecture: shared core + thin wrappers for the interview and audit families.
- Naming: `audit` = codebase sweep, `review` = diff judgment; never reuse a bundled Claude Code skill name.
- `design-discussion` deliverable: one ADR per resolved decision; DESIGN.md only on per-session request.
- `simply-explained` export: markdown file with mermaid code blocks (renders on GitHub/VS Code/Obsidian).
- All three existing install methods must keep working.
- Waves are gated: no wave starts before the previous one is accepted.
- Repo conventions: plain dashes (no em dash), sentence-per-line in large markdown files, no agent co-author lines in commits.

## Open questions - all resolved during implementation

- Meta/ecosystem roster: resolved as `which-arrow` (router; "quiver" would collide with the plugin namespace), `handoff`, `to-issues`, `to-prd`.
- `design-dna` stays a foundation skill referenced by prose from the style skills, not a formal invoked core; the style skills instead adopted the body + `dials.md` reference-file shape.
- Wrapper-to-core mechanism: resolved as invocation by skill name ("Run an `/auditing` session"), the pattern mattpocock's grill-me uses; a missing core fails visibly.
- `a11y-audit` fits the auditing loop cleanly: WCAG categories became its `lens.md`, the verify rules moved into the wrapper body.
- Process change (user decision, 2026-07-05): waves 2-3 collapsed into one pass; acceptance now happens via the live-fire log in `docs/TESTING.md` instead of per-wave gates.

## Done when (checkable acceptance criteria)

- [ ] `docs/WRITING-SKILLS.md` states the authoring contract: no-op test, word budgets, disclosure ladder, core/wrapper pattern, naming rules.
- [ ] `interviewing` and `auditing` cores exist at <= ~300 words each.
- [ ] The critical six exist as contract-compliant skills and each passed a live-fire run on a real codebase with output inspected by Brijesh.
- [ ] Waves 2 and 3 rebuilt to the same contract, live-fired, and accepted wave by wave.
- [ ] Every SKILL.md survives a read-through no-op test: no sentence can be deleted without changing behavior.
- [ ] No skill name collides with a bundled Claude Code skill.
- [ ] README/INSTALL/USAGE match the new architecture; install commands verified by copy-paste on Windows PowerShell and bash.
- [ ] Brijesh has explicitly accepted each wave.
