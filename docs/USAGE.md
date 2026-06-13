# Using Quiver

How to pick the right arrow, pass arguments, and chain skills into real workflows.

## The two ways a skill fires

1. **You type it:** `/perf the dashboard load` — explicit, immediate, takes arguments.
2. **Claude picks it up:** you say *"users complain the dashboard takes forever"* and Claude loads `perf` because the request matches its description.

Both are fine. Type the slash command when you want a specific procedure; talk normally when you want Claude to choose. Exception: `/ask-me` and `/ship` only fire when **you** type them — interviews and commits happen on your schedule, never Claude's.

## Arguments

Everything after the skill name is the skill's input:

```text
/ask-me a CSV import feature for the admin panel
/deep-review PR 142
/readable src/billing/
/perf the /search endpoint p95
/design-mood trustworthy   the onboarding flow for the loans app
/ship pr
```

No argument? Each skill has a sensible default — review skills target the current diff, design skills ask what you're building.

## Which skill? (decision table)

| Situation | Draw |
|---|---|
| "I want to build…" (anything fuzzy) | `/ask-me` first. Always. The spec pays for itself in the first avoided rewrite |
| Code is written, about to merge | `/deep-review` (bugs) → `/readable` (humans) — in that order: no point polishing code that's wrong |
| "It's broken / flaky / works on my machine" | `/root-cause` — it refuses to patch symptoms |
| "It's slow" | `/perf` — it refuses to optimize without measuring |
| "It works but nobody can follow it" | `/readable` (in place) or `/refactor` (structure must change) |
| Touching auth, input handling, or going public | `/harden`, and `/a11y` if there's a UI |
| Interface others will call (API/lib/CLI) | `/api-design` before implementing |
| Tests are missing or assert nothing | `/write-tests` |
| Done, tree is messy, need commits/PR | `/ship` / `/ship pr` |
| Docs missing, stale, or unread | `/document readme` (or `api`, `docstrings`, `adr`) |

## Workflow recipes

### Feature, end to end
```text
/ask-me notifications digest email     → interview → SPEC.md agreed
  build it (plan mode for anything non-trivial)
/write-tests                           → behavior coverage, run green
/deep-review                           → fix findings
/readable                              → human pass on the final shape
/ship pr                               → atomic commits + reviewable PR
```

### Bug fix that stays fixed
```text
/root-cause checkout 500s when coupon is reused
  → reproduced → cause proven → fixed → regression test failing-then-passing
/ship
```

### Legacy rescue (the order matters)
```text
/write-tests src/legacy/pricing.js     → characterization net first
/readable src/legacy/pricing.js        → safe renames & structure
/refactor extract pricing rules        → behavior-preserving steps
/document adr                          → record what was learned and decided
```

### Pre-launch audit
```text
/deep-review        → correctness
/harden             → security walk of every input path
/a11y               → keyboard walk + contrast, computed
/perf               → measured against a stated budget
```
Four reports, four severity-ranked lists — triage from there.

## Design suite recipes

### Any UI work — start with the foundation
```text
/design-dna a study-planner app for med students
  → three adjectives chosen, reference world, type/color/space/motion contract
  → THEN build screens against that contract
```
`design-dna` alone already kills the generic look. The style skills layer a specific register on top.

### Choosing a register

| You're building | Reach for |
|---|---|
| Docs, research, publication, legal/medical content | `/design-scholarly` |
| Portfolio, premium tool, "confident and quiet" | `/design-minimal` |
| Launch page, campaign, agency, must-be-memorable | `/design-expressive` |
| Dev tool, indie product, anti-corporate honesty | `/design-brutalist` |
| High-end commerce, hospitality, premium tier | `/design-luxe` |
| Consumer app, education, community, games | `/design-playful` |
| The brief is a *feeling*, not a style | `/design-mood <emotion>` |

### Mood-first design
```text
/design-mood calm        the meditation app home screen
/design-mood urgent      the incident dashboard
/design-mood cozy        the recipe collection page
```
Ten moods ship with full recipes (palette, type, shape, pace, texture, copy voice, litmus test): calm, energetic, trustworthy, nostalgic, futuristic, organic, somber, urgent, dreamy, cozy. Blends work with a stated dominant: `/design-mood trustworthy with a cozy accent — family budgeting app`.

### Full design workflow
```text
/design-dna + /design-luxe   the jewelry storefront
  → build the pages
/a11y                        → luxury that keyboard users can actually use
/perf                        → those 900ms image reveals still need 60fps
```

## Working well with skills

- **Give the skill real input.** `/deep-review` on a 4,000-line diff produces worse results than on a focused branch. Small inputs, sharp outputs.
- **Chain, don't pile.** Run skills sequentially and let each finish. Asking for "review + readability + security + perf at once" blurs all four procedures.
- **Push back.** Every skill reports decisions ("deliberately left X"). Disagree? Say so — the report exists for that conversation.
- **Edit the skills.** Strong opinions are defaults, not law. Your team indents differently, bans a font, wants stricter severity gates? Edit the SKILL.md — it lives on your disk.
