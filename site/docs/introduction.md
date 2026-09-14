---
title: What it does
---

**Misemphasis** is an installable writing skill for AI agents. It finds sentences a reader could interpret differently from what you intend.

An agent reads the skill and writes a report of the live readings, plus candidate wording for each meaning you might choose.

**[Get started](/docs/install)** — install the skill in your agent, then use it.

Text has no intonation. The silent reader supplies one. It may not be yours. A rewrite can make the intended claim explicit. It cannot lock every reader to one interpretation.

The teaching sentence is *I didn't say we should cancel Friday*: seven words, seven claims. A shorter two-meaning case, *We only promised the beta users a refund*, is on the [home page](/).

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A file, a selection, or a paste |
| Writes | `report.md` |
| Changes | Nothing. You choose a rewrite and apply it yourself |

| Bucket | Means |
| --- | --- |
| **Likely misread** | A typical silent reader could take the wrong one |
| **Possible misread** | Available if someone goes looking |
| **Judgment call** | Context probably settles it, still worth a glance |

A sentence with one obvious reading is not a finding. Example that should pass: *The standup is Tuesday at 3pm in room 12.*

## What it checks

- **Emphasis shift.** Stress on a different word changes who, what, or whether.
- **Negation scope.** What *not* attaches to.
- **Exclusive particles.** *Only*, *even*, *just*.
- **Pronoun stress.** Which referent the contrast picks.
- **Quantifier scope.** *All*, *some*, *any* under negation.

Grammar, tone, and structure stay out.

A [sample report](/docs/sample-report). The [report shape](/docs/report).
