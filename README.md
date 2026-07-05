# 🏹 Quiver

**A curated quiver of skills for Claude Code. Every arrow has a purpose.**

Quiver is a set of 31 sharply-scoped, composable skills that make Claude Code interview like a senior engineer, audit like a skeptic, debug like a scientist, and design like it has taste.
Version 2.0 rebuilds the whole collection on a strict authoring contract: shared procedure cores, thin domain wrappers, and a no-op test that deletes every sentence that doesn't change the agent's behavior.

```text
You:    /ask-me a billing export feature
Claude: Walk me through the moment a user needs this export.
        What were they doing right before? …
        → writes SPEC.md you both agree on

You:    /design-audit src/
Claude: → scope, hunt, verify, report: the 3 structural moves
          that unlock the most, ranked by leverage
```

## Why Quiver exists

Most skills collections suffer the same three problems: skills that are **vague** ("makes your code better"), **overlapping** (four flavors of code review), and **bloated** (walls of prose the agent skims).
Quiver fixes all three:

- **Every skill is a contract.** Its description says exactly when it triggers; its body says exactly what procedure runs and what deliverable you get.
- **Zero overlap by design.** Audits sweep the codebase, reviews judge the diff, and every name encodes its scope. You always know which arrow to draw.
- **Nothing is bloated.** Wrapper bodies stay under ~150 words, cores under ~300; depth lives in reference files loaded only when needed. The rules are public in [docs/WRITING-SKILLS.md](docs/WRITING-SKILLS.md).

## Install in 60 seconds

**Option A - npm (one cross-platform command):**

```bash
npx @brijeshc2049/quiver install          # all skills -> ~/.claude/skills  (GLOBAL, the default)
npx @brijeshc2049/quiver install --project # -> ./.claude/skills  (this repo only, share via git)
npx @brijeshc2049/quiver install ask-me deep-review   # just a few; required cores are pulled in
```

> **Global is the default.** Plain `install` places skills in `~/.claude/skills`, where **every** project sees them. Only `--project` scopes them to the current repo. If skills seem to only appear in one project, you ran it with `--project` - re-run without that flag.
>
> **`npm install` is not the same as `quiver install`.** Running `npm install @brijeshc2049/quiver` only downloads the package into a local `node_modules/` - Claude Code does **not** read skills from there. You must run the **`quiver install` command** (via `npx`, as above) to copy the skill folders into `~/.claude/skills`. Using `npx` handles both steps for you and leaves nothing behind.

**Option B - plugin marketplace (native, versioned, no file copying):**

```text
/plugin marketplace add brijeshc/quiver
/plugin install quiver@quiver
```

Skills are namespaced as `/quiver:ask-me` and update with `/plugin marketplace update quiver`.

Start (or restart) Claude Code, type `/`, and you'll see the skills.
Manual `git clone` + copy, subset rules, and troubleshooting: see **[docs/INSTALL.md](docs/INSTALL.md)**.

## The architecture: cores + wrappers

Two **core** skills hold the procedures; thin **wrappers** point a domain lens at them.

| Core | The loop | Its wrappers |
|---|---|---|
| [`interviewing`](skills/interviewing/SKILL.md) | one question at a time → saturation → deliverable | `ask-me`, `design-discussion` |
| [`auditing`](skills/auditing/SKILL.md) | scope → hunt → verify → report | `security-audit`, `design-audit`, `ux-audit`, `a11y-audit` |

A wrapper is ~100 words: "run the core with this lens, produce this deliverable."
Its checklist lives in a `lens.md` beside it.
Install a wrapper and its core together; a wrapper without its core fails visibly instead of degrading.

## The quiver

### Interviews - settle it before building

| Skill | Draw it when… | What you get |
|---|---|---|
| [`/ask-me`](skills/ask-me/SKILL.md) | starting anything ambiguous | An interview (one question at a time) → a `SPEC.md` you both agree on |
| [`/design-discussion`](skills/design-discussion/SKILL.md) | weighing architecture choices | Sparring with trade-offs and recommendations → an ADR per decision (or a session `DESIGN.md`) |

### Audits - sweep the existing code

| Skill | Draw it when… | What you get |
|---|---|---|
| [`/security-audit`](skills/security-audit/SKILL.md) | touching auth, input, or going to production | Untrusted-data walk: injection, authz, secrets - severity, source→sink, fixes |
| [`/design-audit`](skills/design-audit/SKILL.md) | code feels hard to change | Structural findings ranked by leverage, each naming the change it makes expensive |
| [`/ux-audit`](skills/ux-audit/SKILL.md) | users say it's hard to use | Flow walk: the moments users are confused, blocked, or misled |
| [`/a11y-audit`](skills/a11y-audit/SKILL.md) | building or auditing any UI | WCAG 2.2 AA pass: keyboard walk, semantics, contrast computed not eyeballed |

### Workflow - build, verify, ship

| Skill | Draw it when… | What you get |
|---|---|---|
| [`/deep-review`](skills/deep-review/SKILL.md) | a diff/branch/PR needs judgment before merge | Real bugs with evidence and severity, never style nitpicks |
| [`/root-cause`](skills/root-cause/SKILL.md) | something is broken or flaky | Reproduce → isolate → prove → fix + regression test |
| [`/write-tests`](skills/write-tests/SKILL.md) | coverage is missing or hollow | Behavior-focused tests that survive refactoring, run and shown passing |
| [`/perf`](skills/perf/SKILL.md) | something is slow | Profile → fix the proven bottleneck → before/after numbers |
| [`/refactor`](skills/refactor/SKILL.md) | structure blocks the next feature | Behavior-preserving steps, tests green after every one |
| [`/readable`](skills/readable/SKILL.md) | code works but humans struggle | Naming/structure/comment pass, behavior untouched |
| [`/simply-explained`](skills/simply-explained/SKILL.md) | anything needs explaining | Plain words, one analogy, one mermaid diagram, exportable to markdown |
| [`/document`](skills/document/SKILL.md) | docs are missing or stale | READMEs/API docs/docstrings/ADRs for a named reader, examples executed |
| [`/api-design`](skills/api-design/SKILL.md) | designing any interface others call | Caller-first design: example code → contract → evolution plan |
| [`/ship`](skills/ship/SKILL.md) | work is done, tree is messy | Atomic commits with honest messages; optional reviewable PR |

### Design suite - the anti-generic system

Start with the foundation, then layer a register:

| Skill | The register |
|---|---|
| [`/design-dna`](skills/design-dna/SKILL.md) | **Foundation** - banned generic tells, identity derivation, type/color/space/motion contract |
| [`/design-scholarly`](skills/design-scholarly/SKILL.md) | A university press monograph |
| [`/design-minimal`](skills/design-minimal/SKILL.md) | Rams-era Braun, Swiss typography |
| [`/design-expressive`](skills/design-expressive/SKILL.md) | A magazine cover, a concert poster |
| [`/design-brutalist`](skills/design-brutalist/SKILL.md) | Béton brut, early-web, gig flyers |
| [`/design-luxe`](skills/design-luxe/SKILL.md) | A flagship boutique at midnight |
| [`/design-playful`](skills/design-playful/SKILL.md) | Great toy design |
| [`/design-mood <emotion>`](skills/design-mood/SKILL.md) | Emotion → full system: 10 recipes in [moods.md](skills/design-mood/moods.md) |
| [`/design-scene <scene>`](skills/design-scene/SKILL.md) | Lived moment → full system: 10 recipes in [scenes.md](skills/design-scene/scenes.md) |

### Meta - run the quiver itself

| Skill | Draw it when… | What you get |
|---|---|---|
| [`/which-arrow`](skills/which-arrow/SKILL.md) | unsure which skill fits | One recommendation with the exact command, or the full chain |
| [`/handoff`](skills/handoff/SKILL.md) | parking work or switching sessions | `HANDOFF.md`: state, decisions, gotchas, next steps - verified against the tree |
| [`/to-issues`](skills/to-issues/SKILL.md) | a spec needs to become tracker work | Vertical-slice issues with acceptance criteria, via `gh` or as files |
| [`/to-prd`](skills/to-prd/SKILL.md) | a discussion settled what to build | `PRD.md` distilled from the conversation, gaps marked as open questions |

## How skills work (30-second primer)

A skill is a folder with a `SKILL.md` - instructions Claude loads only when needed.
Two ways a skill fires:

1. **You invoke it:** type `/readable src/billing/` - explicit, with optional arguments.
2. **Claude invokes it:** say *"this function is impossible to follow"* and Claude loads `readable` on its own.

Six Quiver skills are deliberately **manual-only** (`/ask-me`, `/design-discussion`, `/ship`, `/handoff`, `/to-issues`, `/to-prd`) - interviews, commits, and published artifacts happen on your schedule, never Claude's.

Skills compose. A typical feature, end to end:

```text
/ask-me payments retry logic        → SPEC.md agreed
/design-discussion queue vs cron    → ADR 0007 recorded
/to-issues                          → 4 vertical slices
  …build against the spec…
/write-tests                        → behavior coverage, run green
/deep-review                        → 1 blocker found and fixed
/ship pr                            → atomic commits + reviewable PR
```

More chains in **[docs/USAGE.md](docs/USAGE.md)**.

## Documentation

| Doc | What's in it |
|---|---|
| [docs/INSTALL.md](docs/INSTALL.md) | All three install methods, per-OS commands, verification, updating, troubleshooting |
| [docs/USAGE.md](docs/USAGE.md) | Which skill when, chaining recipes, design-suite decision guide |
| [docs/WRITING-SKILLS.md](docs/WRITING-SKILLS.md) | The authoring contract every Quiver skill is built to - write your own to the same bar |
| [docs/TESTING.md](docs/TESTING.md) | The live-fire test log: how each skill is verified, with results |
| [docs/RELEASING.md](docs/RELEASING.md) | How npm publishing is automated (GitHub Actions), and how to cut a release |

## FAQ

**Do these conflict with Claude Code's bundled skills (`/code-review`, `/security-review`)?**
No - Quiver names avoid every bundled name (`deep-review` not `code-review`, `security-audit` not `security-review`).
That's a rule in the authoring contract, not a coincidence.

**Can I install just one skill?**
Standalone skills (workflow, design, meta): yes, copy the folder.
Wrappers need their core too: `ask-me`/`design-discussion` need `interviewing`; the four `*-audit` skills need `auditing`.
The pairs are listed in [docs/INSTALL.md](docs/INSTALL.md).

**What happened to `/harden` and `/a11y`?**
Renamed in 2.0: `/harden` became `/security-audit` and `/a11y` became `/a11y-audit`, joining the audit family on the shared core.
Delete the old folders when updating a 1.x install.

**Claude triggers a skill when I don't want it.**
Add `disable-model-invocation: true` to that skill's frontmatter, or set it to `"off"` under `skillOverrides` in your settings.

**Why are the SKILL.md files so opinionated?**
Vague instructions produce average output, and average is the problem.
Disagree with an opinion? Edit the file - it's markdown, and it's yours after install.

## License

MIT - see [LICENSE](LICENSE).
