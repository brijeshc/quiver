# Installing Quiver

Three ways to install, depending on how you want to use it. If unsure, use **Method 1**.

| Method | Skill names | Scope | Updates | Best for |
|---|---|---|---|---|
| 1. Personal copy | `/ask-me` | All your projects | `git pull` + re-copy | Individuals |
| 2. Project copy | `/ask-me` | One project (and teammates via git) | committed with the repo | Teams standardizing a repo |
| 3. Plugin marketplace | `/quiver:ask-me` | Wherever enabled | `/plugin marketplace update` | Distribution, versioned updates |

> **Prerequisite:** Claude Code installed and authenticated ([official quickstart](https://code.claude.com/docs/en/quickstart)). Skills work in the CLI, the desktop app, and the IDE extensions.

---

## Method 1 — Personal install (recommended)

Copies skill folders into your personal skills directory. Available in every project, short names, fully editable.

**macOS / Linux / Git Bash on Windows:**

```bash
git clone https://github.com/brijeshchandrakar/quiver.git
mkdir -p ~/.claude/skills
cp -r quiver/skills/* ~/.claude/skills/
```

**Windows PowerShell:**

```powershell
git clone https://github.com/brijeshchandrakar/quiver.git
New-Item -ItemType Directory -Force "$env:USERPROFILE\.claude\skills" | Out-Null
Copy-Item -Recurse quiver/skills/* "$env:USERPROFILE\.claude\skills\"
```

**Only want some skills?** Copy just those folders — each skill is self-contained:

```bash
cp -r quiver/skills/ask-me quiver/skills/design-dna quiver/skills/design-mood ~/.claude/skills/
```

### Verify

1. Restart Claude Code **if `~/.claude/skills/` did not exist before** (a brand-new top-level skills directory is only watched from startup; changes inside an existing one are picked up live).
2. Type `/` — Quiver skills appear in the menu (`/ask-me`, `/deep-review`, …).
3. Or just ask: `What skills are available?`

### Update

```bash
cd quiver && git pull && cp -r skills/* ~/.claude/skills/
```

### Uninstall

Delete the skill folders from `~/.claude/skills/` (each Quiver skill is one folder, named exactly as in this repo's `skills/`).

---

## Method 2 — Project install (share with your team)

Same as Method 1, but into the project's `.claude/skills/` directory, committed to version control. Everyone who clones the repo gets the skills.

```bash
mkdir -p .claude/skills
cp -r path/to/quiver/skills/* .claude/skills/
git add .claude/skills && git commit -m "add quiver skills"
```

Notes:

- If a personal skill and a project skill share a name, the **personal one wins**. Keep one copy per name to avoid confusion.
- Project skills run after teammates accept the workspace **trust dialog** — normal for anything checked into a repo. (`/ship` declares `allowed-tools` for read-only git commands plus `git add`/`git branch`; that pre-approval activates only once the workspace is trusted.)
- A common pattern: project install for the team's shared baseline (`deep-review`, `readable`, `ship`), personal install for individual preferences (design suite).

---

## Method 3 — Plugin install (marketplace)

Installs Quiver as a versioned plugin. Skills are namespaced (`/quiver:ask-me`), which prevents any name collisions and gives you clean updates.

Inside Claude Code:

```text
/plugin marketplace add brijeshchandrakar/quiver
/plugin install quiver@quiver
```

Then restart or run `/reload-plugins`. Invoke skills as `/quiver:ask-me`, `/quiver:design-mood calm`, etc.

### Update

```text
/plugin marketplace update quiver
```

### Uninstall

```text
/plugin uninstall quiver
```

### Try it without installing

From a local clone, load the plugin for one session:

```bash
claude --plugin-dir ./quiver
```

---

## Troubleshooting

**Skills don't appear in the `/` menu.**
- Method 1/2: confirm the layout is `skills-dir/<skill-name>/SKILL.md` — e.g. `~/.claude/skills/ask-me/SKILL.md`. A nested `~/.claude/skills/skills/ask-me/` (double `skills`) is the most common copy mistake.
- If the top-level skills directory was created fresh, restart Claude Code once.
- Method 3: run `/reload-plugins`, and remember the namespace — type `/quiver:` to see them.

**Claude never auto-invokes a skill that should fire.**
- Run `/doctor` — with many skills installed, the description listing budget can overflow and drop descriptions; `/doctor` shows whether that's happening.
- Phrase requests closer to the skill's description, or invoke explicitly with `/skill-name`.
- `ask-me` and `ship` are manual-only **by design** (`disable-model-invocation: true`) — Claude will never fire them on its own.

**A skill fires too often.**
Add `disable-model-invocation: true` to its frontmatter, or disable it without editing files via `skillOverrides` in settings (the `/skills` menu can write this for you: highlight the skill, press Space to cycle, Enter to save).

**Permission prompts during `/ship`.**
Expected for anything not in its `allowed-tools` list (e.g. `git commit`, `git push`) — commits and pushes should stay deliberate. Approve per-use, or extend `allowed-tools` in `skills/ship/SKILL.md` if you accept the tradeoff.

**Edits to a SKILL.md don't take effect.**
Live reload covers SKILL.md text in existing skill directories. For plugins, run `/reload-plugins`. Note that a skill already invoked in the current session keeps its loaded content for that session — re-invoke it or start a new session to pick up edits.

Still stuck? The official references: [Skills](https://code.claude.com/docs/en/skills) · [Plugins](https://code.claude.com/docs/en/plugins) · [Settings](https://code.claude.com/docs/en/settings).
