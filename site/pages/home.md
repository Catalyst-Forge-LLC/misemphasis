---
title: Stress the word you mean.
description: Find how flat prose can be misread when stress is missing. An agent with the skill writes the report.
order: 0
---

Text has no intonation. A silent reader supplies one. It may not be yours.

**Misemphasis** finds the readings a sentence already allows, then offers wording that locks the one you meant. An agent reads the skill and writes the report. Nothing in the draft changes until you say so.

[Docs](/docs/) · [Install](/docs/install) · [Skill](/docs/skill) · [Why the name](/about)

## The teaching sentence

*I didn't say we should cancel Friday.*

| Stress | Reading |
| --- | --- |
| **I** | Someone else said it |
| **didn't** | Denial that it was said |
| **say** | Hinted or implied, not spoken |
| **we** | They should cancel, not us |
| **should** | Required, or optional — the modal is the dispute |
| **cancel** | Postpone, don't cancel |
| **Friday** | Another day |

Seven words. Seven claims. Flat text ships all of them.

## What you get

The skill writes `report.md`. Each finding names the live readings, which one a flat reader is likely to take, and rewrites that lock one reading each.

| Kind | Means |
| --- | --- |
| **Likely misread** | A typical silent reader could take the wrong one |
| **Possible misread** | Available if someone goes looking |
| **Judgment call** | Context probably locks it; still worth a glance |

A [sample report](/docs/sample-report) from the teaching sentence plus two companions.

## What it checks

Stress on a different word can change who, what, or whether. *Not* can attach to the verb or to what follows. *Only*, *even*, and *just* bind whichever word you stress. A stressed pronoun picks a different person. *All* and *some* under negation change how many.

A sentence with one obvious reading is not a finding.

## Not a line editor

Grammar, tone, and structure stay out. [Smell Check](https://smellcheck.dev) sprays unearned language. [Detangler](https://detangler.dev) combs what editing tangled. This bottle is for the reading.

## Install

[Download the zip](/docs/install), put the folder where the table says, and ask which readings the sentence already allows.

If you already use npm:

```bash
pnpm add -D misemphasis
```

Then copy `skills/misemphasis` out of `node_modules`.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
