---
name: to-prd
description: Synthesize the current conversation into a publishable PRD. Use after a discussion has settled what to build and why, and the thinking needs to become a document others can read.
argument-hint: "[optional: product/feature name]"
disable-model-invocation: true
---

# To PRD

Distill this conversation into `PRD.md` at the project root.

**Only what was actually discussed goes in.**
A gap in the discussion becomes an entry under Open questions, never an invented answer; the PRD's credibility is that every line traces back to the conversation.

Sections:

1. **Problem** - who hurts, how, and the evidence from the discussion.
2. **Goals / Non-goals** - what this must achieve; what it explicitly will not do.
3. **Users & scenarios** - the personas and the moments they hit this.
4. **Requirements** - must / should / could, each one testable.
5. **Success metrics** - how we know it worked, with numbers where the discussion set them.
6. **Risks & mitigations** - what could sink it.
7. **Open questions** - unresolved items, each with who should answer it.

If `PRD.md` exists, show its title and ask before overwriting.
End by asking the user to confirm the PRD reflects the discussion, and flag the three weakest spots where the source conversation was thinnest.
