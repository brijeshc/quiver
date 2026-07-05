---
name: auditing
description: Audit a codebase through a domain lens with a scope, hunt, verify, report loop. Core loop behind the *-audit skills; use directly when asked to audit something no dedicated lens covers.
argument-hint: "[target paths]"
---

# Auditing loop

Target: **$ARGUMENTS** (default: the whole codebase from the repo root).
The wrapper that started this session supplies a lens file; read it before hunting.

## 1. Scope

Map the surface before judging it: the entry points, the modules or flows the lens cares about, and what is out of scope.
State the scope in one paragraph so the report can show its coverage.

## 2. Hunt

Work the lens checklist against the scoped code.
Read the real code; never report from file names or assumptions.
Collect candidate findings with file:line.

## 3. Verify

Every finding needs evidence: the code quoted, the concrete scenario that triggers the problem, and the impact.
If a claim is checkable in under a minute (run the test, trace the caller), check it instead of speculating.
If you cannot construct the failing scenario, downgrade the finding to a question.

## 4. Report

Group findings by severity:

- **Critical** - exploitable or data-corrupting today.
- **High** - real problem on a plausible path.
- **Medium** - a trap that bites under change or growth.
- **Question** - suspicious but unproven, phrased as a question.

Each finding: severity, file:line, triggering scenario, impact, fix direction.
Apply fixes only where the lens says to; otherwise propose.
Close with coverage: what was checked and found clean.
An empty report must still prove it looked.

Never report style or taste: if it does not change behavior, risk, or cost, it is not a finding.
