# 🏹 Quiver

**A curated quiver of skills for Claude Code. Every arrow has a purpose.**

Quiver is a set of 21 sharply-scoped skills that make Claude Code interview like a senior engineer, review like a skeptic, debug like a scientist, and design like it has taste. No overlap, no filler, no "AI slop" output — each skill states exactly what it does, when it fires, and what you get back.

```text
You:    /ask-me a billing export feature
Claude: Walk me through the moment a user needs this export.
        What were they doing right before? …
        → writes SPEC.md you both agree on

You:    /design-mood cozy   the recipe homepage
Claude: → builds it with firelight palette, paperback serif,
          cushioned buttons — not Inter-on-purple-gradient
```

## Why Quiver exists

Most skills collections suffer from the same three problems: skills that are **vague** ("makes your code better"), **overlapping** (four flavors of code review), and **undocumented** (a folder of markdown with no install story). Quiver fixes all three:

- **Every skill is a contract.** Its description says exactly when it triggers; its body says exactly what procedure runs and what report you get.
- **Zero overlap by design.** `/deep-review` hunts bugs and never nitpicks style; `/readable` does the human-readability pass and never hunts bugs. You always know which arrow to draw.
- **Documentation first.** Three install methods that actually work, copy-paste verified, plus recipes for chaining skills into real workflows.

## Install in 60 seconds

**Personal install** (skills available in all your projects):

```bash
# macOS / Linux / Git Bash
git clone https://github.com/brijeshchandrakar/quiver.git
cp -r quiver/skills/* ~/.claude/skills/
```

```powershell
# Windows PowerShell
git clone https://github.com/brijeshchandrakar/quiver.git
Copy-Item -Recurse quiver/skills/* "$env:USERPROFILE\.claude\skills\"
```

Start (or restart) Claude Code, type `/`, and you'll see the skills. That's it.

Prefer a project-only install or the plugin/marketplace route (auto-updates, namespaced names)? See **[docs/INSTALL.md](docs/INSTALL.md)** — all three methods, with verification and uninstall steps.

## The quiver

### Workflow skills

| Skill | Draw it when… | What you get |
|---|---|---|
| [`/ask-me`](skills/ask-me/SKILL.md) | starting anything ambiguous | An interview (one question at a time) → a `SPEC.md` you both agree on |
| [`/deep-review`](skills/deep-review/SKILL.md) | code needs review before merge | Real bugs with evidence and severity — never style nitpicks |
| [`/readable`](skills/readable/SKILL.md) | code works but humans struggle with it | Naming/structure/comment pass, behavior untouched, tests verified |
| [`/perf`](skills/perf/SKILL.md) | something is slow | Profile → fix the proven bottleneck → before/after numbers |
| [`/write-tests`](skills/write-tests/SKILL.md) | coverage is missing or hollow | Behavior-focused tests that survive refactoring, run and shown passing |
| [`/root-cause`](skills/root-cause/SKILL.md) | something is broken or flaky | Scientific debugging: reproduce → isolate → prove → fix + regression test |
| [`/harden`](skills/harden/SKILL.md) | shipping anything user-facing | Defensive security audit along every untrusted-data path, with fixes |
| [`/refactor`](skills/refactor/SKILL.md) | structure blocks the next feature | Behavior-preserving steps, tests green after every one |
| [`/document`](skills/document/SKILL.md) | docs are missing or stale | READMEs/API docs/docstrings/ADRs written for a named reader, examples executed |
| [`/api-design`](skills/api-design/SKILL.md) | designing any interface others call | Caller-first design: example code → contract → evolution plan |
| [`/ship`](skills/ship/SKILL.md) | work is done, tree is messy | Atomic commits with honest messages; optional reviewable PR |
| [`/a11y`](skills/a11y/SKILL.md) | building or auditing UI | WCAG 2.2 AA pass: keyboard walk, semantics, contrast computed not eyeballed |

### Design suite — the anti-generic system

AI-designed pages converge on the same look: Inter, purple gradient, three rounded cards. The design suite exists to make that average choice illegal. Start with the foundation, then layer a style or a mood:

| Skill | The register | Reference world |
|---|---|---|
| [`/design-dna`](skills/design-dna/SKILL.md) | **Foundation** — identity derivation, banned generic tells, type/color/spacing/motion contracts | (use with everything below) |
| [`/design-scholarly`](skills/design-scholarly/SKILL.md) | Academic authority: serif craft, scholar's margin, footnotes | A university press monograph |
| [`/design-minimal`](skills/design-minimal/SKILL.md) | Radical reduction: one typeface, whitespace as structure | Rams-era Braun, Swiss typography |
| [`/design-expressive`](skills/design-expressive/SKILL.md) | Art-directed boldness: oversized type, one unforgettable move | A magazine cover, a concert poster |
| [`/design-brutalist`](skills/design-brutalist/SKILL.md) | Exposed structure: hard borders, stark contrast, honest metadata | Béton brut, early-web, gig flyers |
| [`/design-luxe`](skills/design-luxe/SKILL.md) | Premium restraint: slowness, letterspaced caps, withheld color | A flagship boutique at midnight |
| [`/design-playful`](skills/design-playful/SKILL.md) | Crafted joy: sticker shadows, springy motion, warm voice | Great toy design |
| [`/design-mood <emotion>`](skills/design-mood/SKILL.md) | Emotion → full design system: **calm, energetic, trustworthy, nostalgic, futuristic, organic, somber, urgent, dreamy, cozy** | 10 complete recipes in [moods.md](skills/design-mood/moods.md) |
| [`/design-scene <scene>`](skills/design-scene/SKILL.md) | Lived moment → full design system: **sunrise, sunset, sunny, rainy, winter, midnight, festival, wedding, interview, thesis** | 10 complete recipes in [scenes.md](skills/design-scene/scenes.md) |

## How skills work (30-second primer)

A skill is a folder with a `SKILL.md` — instructions Claude loads only when needed. Two ways a skill fires:

1. **You invoke it:** type `/readable src/billing/` — explicit, with optional arguments.
2. **Claude invokes it:** say *"this function is impossible to follow"* and Claude loads `readable` on its own, because the request matches the skill's description.

Two Quiver skills are deliberately **manual-only** (`/ask-me`, `/ship`) — you control when an interview starts and when commits happen. Everything else Claude may pick up automatically when your request matches.

Skills compose. A typical feature, end to end:

```text
/ask-me payments retry logic        → SPEC.md agreed
  …Claude builds against the spec…
/write-tests                        → behavior coverage, run green
/deep-review                        → 1 blocker found and fixed
/readable                           → naming + structure pass
/ship pr                            → atomic commits + reviewable PR
```

More chains (bug-fix flow, legacy rescue, pre-launch audit, full design workflow) in **[docs/USAGE.md](docs/USAGE.md)**.

## Documentation

| Doc | What's in it |
|---|---|
| [docs/INSTALL.md](docs/INSTALL.md) | All three install methods (personal / project / plugin marketplace), per-OS commands, verification, updating, uninstalling, troubleshooting |
| [docs/USAGE.md](docs/USAGE.md) | Recipes: which skill when, how to chain them, design-suite decision guide, arguments reference |
| [docs/WRITING-SKILLS.md](docs/WRITING-SKILLS.md) | How Quiver skills are built — write your own in the same style |

## FAQ

**Do these conflict with Claude Code's bundled skills (`/code-review`, `/debug`)?**
No — Quiver names avoid every bundled name (`deep-review` not `code-review`, `root-cause` not `debug`). Bundled and Quiver skills coexist; use whichever fits.

**A skill isn't showing up after install.**
If `~/.claude/skills/` didn't exist before you copied, restart Claude Code once (new top-level skill directories are only watched from startup). Then check with `/doctor`. Full troubleshooting in [docs/INSTALL.md](docs/INSTALL.md#troubleshooting).

**Claude triggers a skill when I don't want it.**
Add `disable-model-invocation: true` to that skill's frontmatter — it becomes manual-only. Or set it to `"off"` under `skillOverrides` in your settings.

**Can I use just the design suite (or just one skill)?**
Yes. Skills are independent folders — copy only what you want. The design style skills work best alongside `design-dna`, so keep that one if you take any of them.

**Why are the SKILL.md files so opinionated?**
Vague instructions produce average output, and average is the problem. Disagree with an opinion? Edit the file — it's markdown, and it's yours after install.

## License

MIT — see [LICENSE](LICENSE).
