---
name: handoff
description: Compact the current session into a handoff file a fresh agent session can resume from. Use when context is long, before switching sessions or machines, or to park work mid-task.
argument-hint: "[optional: focus area]"
disable-model-invocation: true
---

# Handoff

Write `HANDOFF.md` at the project root so a fresh session (or another developer) can continue without this conversation.

Verify against reality before writing: check `git status` and the working tree, not memory; a handoff that lies costs more than none.

Sections, all required:

1. **Goal** - what the work is trying to achieve, one paragraph.
2. **State** - done / in progress / not started, as concrete items with file paths.
3. **Decisions** - choices made and WHY, especially the ones that would be re-litigated without the context.
4. **Gotchas** - anything discovered the hard way: quirks, dead ends already tried, environment traps.
5. **Next steps** - ordered, starting with the exact next action.
6. **Working commands** - build, test, run commands verified in this session.

Keep it under a page; a handoff nobody reads is a handoff that failed.
If `HANDOFF.md` exists, show its heading and date and ask before overwriting.
End by telling the user the next session should start with "read HANDOFF.md".
