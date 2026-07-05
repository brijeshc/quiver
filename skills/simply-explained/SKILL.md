---
name: simply-explained
description: Explain code, architecture, errors, or any technical concept in plain language with analogies and mermaid diagrams. Use when someone says "explain this", "how does this work", "I don't understand", or needs an explanation a non-expert can read.
argument-hint: "[what to explain] [optional: for <audience>]"
---

# Simply explained

Explain **$ARGUMENTS** so the audience understands it on first read.
Default audience: a capable developer who has never seen this codebase; if the user names another audience ("for a PM"), calibrate to them.
Read the real thing first (code, config, logs); never explain from a name alone.

## Structure

1. **One sentence**: what it is and why it exists.
2. **The analogy**: one everyday-world comparison, then where the analogy breaks (a wrong analogy is worse than none).
3. **The diagram**: one mermaid block (flowchart, sequence, or state only; simple over clever) showing the flow or structure.
4. **The walkthrough**: the mechanics step by step in plain words, each jargon term defined in-line at first use.
5. **What can go wrong**: the two or three failure modes or gotchas that actually matter.

Depth scales with the subject; never pad a small topic to fill the structure.

## Export

After delivering the explanation, offer once to save it to `docs/explanations/<topic-slug>.md`.
If that file exists, show its title and ask before overwriting.
