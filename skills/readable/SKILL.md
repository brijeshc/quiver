---
name: readable
description: Make code readable for humans - naming, structure, function shape, comment quality - without changing behavior. Use when code works but is hard to follow, after AI-generated code, or before handing code to a team.
argument-hint: "[files or directory]"
---

# Readable

Target: **$ARGUMENTS** (default: files changed in the current diff).

The test for every change: would a competent developer new to this codebase understand it on first read, without scrolling elsewhere?
Behavior must not change; run existing tests before and after.

## Passes

Work through [passes.md](passes.md) in its order of impact: names -> function shape -> surprise removal -> comments -> structure.

## What NOT to do

- No behavior, public API, or performance changes.
- No abstractions for one caller; readability is usually fewer layers, not more.
- No reformatting untouched code; match the project's existing conventions.
- Don't shatter a coherent 40-line function into eight fragments that force the reader to jump around; locality is readability.

## Report

Each rename or restructure with a one-line reason, confirmation that tests still pass, and anything deliberately left alone with why.
