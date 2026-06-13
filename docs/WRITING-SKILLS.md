# Writing skills the Quiver way

How these skills are built, so you can extend the quiver with your own — for your stack, your team, your conventions.

## Anatomy of a skill

```text
~/.claude/skills/
└── my-skill/
    ├── SKILL.md          # required: frontmatter + instructions
    └── reference.md      # optional: heavy detail, loaded only when needed
```

A minimal working skill:

```markdown
---
name: changelog
description: Update CHANGELOG.md from recent commits in Keep-a-Changelog format. Use when asked to update the changelog or prepare release notes.
argument-hint: [version]
---

# Changelog update

Target version: **$ARGUMENTS** (default: Unreleased section).

1. Read `git log` since the last version tag.
2. Group changes under Added / Changed / Fixed / Removed.
3. Write entries as user-visible effects, not commit messages.
4. Show the diff of CHANGELOG.md before finishing.
```

Save it, and `/changelog 2.3.0` works. The folder name is the command name.

## Frontmatter that matters

All fields are optional; these five do nearly all the work (full list in the [official reference](https://code.claude.com/docs/en/skills#frontmatter-reference)):

| Field | What it does | Quiver usage |
|---|---|---|
| `description` | **The trigger.** Claude reads this to decide when to auto-load the skill | Every skill; this field is 80% of skill quality |
| `argument-hint` | Autocomplete hint for arguments | `[files or directory]` |
| `disable-model-invocation` | `true` = only you can fire it | `ask-me`, `ship` — timing belongs to the human |
| `allowed-tools` | Pre-approves specific tools while the skill runs | `ship` pre-approves read-only git commands |
| `context: fork` | Runs the skill in an isolated subagent | none — Quiver skills want your conversation context |

## The five rules Quiver skills follow

### 1. The description is a trigger, not a slogan

Claude sees every skill's description all the time, and the body only after invoking. So the description must answer: *what does it do, and which user phrases should summon it?*

```yaml
# Bad — Claude can't tell when to use it:
description: Improves your code quality

# Good — capability + concrete trigger situations:
description: Make code readable for humans. Improves naming, structure,
  function shape, and comment quality... Use when code works but is hard
  to follow, after AI-generated code, or before handing code to a team.
```

Pattern: **what it does** (first sentence, key use case first) + **"Use when…"** (the situations, phrased like users phrase them).

### 2. One skill, one job

If a skill's description needs "and also…", split it. Quiver keeps `deep-review` (bugs) apart from `readable` (humans) apart from `harden` (security) — so the user controls what happens, and each procedure stays sharp. Overlapping skills make Claude's choice ambiguous and the results mushy.

### 3. Give a procedure and a deliverable, not vibes

A skill body is standing instructions. The strongest pattern:

- **Iron rule first** — the one constraint that defines the skill ("no optimization without a measurement").
- **Numbered procedure** — the order of operations, with priorities.
- **Negative space** — what NOT to do. This is where generic output dies; every Quiver skill has a "Never" or "What NOT to do" section.
- **Report format** — what the user receives at the end. A skill without a defined deliverable trails off.

Concrete beats abstract everywhere: "letter-spacing +12 to +20%" not "spaced-out text"; "empty, one, many, max" not "edge cases".

### 4. Keep SKILL.md lean; push bulk to reference files

Once invoked, the skill body stays in context for the whole session — every line is a recurring token cost. Quiver targets 60–120 lines of body. Heavy reference material goes in supporting files, linked so Claude knows when to read them:

```markdown
Full mood recipes in [moods.md](moods.md) — read the entry for the target mood.
```

`design-mood` is the worked example: a ~50-line SKILL.md routes to a 200-line `moods.md` that only loads when a mood is actually being designed.

### 5. Decide who may fire it

Default: both you and Claude. Add `disable-model-invocation: true` for anything with side effects or human timing (commits, deploys, interviews, messages). Add `user-invocable: false` for pure background knowledge that isn't an action ("how our legacy auth works").

## Test your skill

1. **Direct:** `/my-skill some argument` — does the procedure run end to end?
2. **Auto-trigger:** phrase a request the way a user naturally would (*"can you tidy this changelog?"*) — does Claude load it? If not, the description is missing those words.
3. **Negative:** make a request that *shouldn't* trigger it — does it stay quiet? If not, the description is too broad.
4. Edits to a SKILL.md are picked up live within a session — but an already-invoked skill keeps its loaded content; re-invoke to test changes.

## Contributing to Quiver

A new skill belongs in the quiver if it (a) has one job no existing skill covers, (b) defines its trigger, procedure, negative space, and deliverable, and (c) would be useful across many projects — project-specific procedures belong in that project's own `.claude/skills/`. Match the format of an existing skill and open a PR.
