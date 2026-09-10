---
title: Did the reader stress the word you meant?
description: Find sentences a reader could interpret differently from what you intend. An agent writes a report with candidate rewrites.
order: 0
---

Find sentences a reader could interpret differently from what you intend. Misemphasis shows the plausible readings and suggests clearer wording for the meaning you choose.

An agent reads the skill and writes `report.md`. The source text stays unchanged until you apply a selected rewrite. This is not a guarantee that every reader will take one meaning.

[Docs](/docs/) · [Install](/docs/install) · [Skill](/docs/skill) · [Why the name](/about)

## Two readings

> We only promised the beta users a refund.

| Reading | What a silent reader may take | Rewrite that states that meaning |
| --- | --- | --- |
| Limit the audience | Refunds are for beta users only | *We promised a refund only to the beta users.* |
| Limit the remedy | The only promise was a refund | *The only thing we promised the beta users was a refund.* |

A support note about who gets money back favors the first reading. A note about what was promised favors the second. The skill does not know the author's intent. It names the live readings. Full teaching sentence, seven stresses: [sample report](/docs/sample-report).

## Restraint

A sentence with one obvious reading is not a finding.

**No finding.** *The standup is Tuesday at 3pm in room 12.*

**Judgment call.** *I didn't skip the standup because I was busy.* The next sentence, *I was in a dentist chair*, probably fixes the *because*. The skill may still flag it as a glance, not as a likely misread. Findings carry that uncertainty. They do not invent likelihood percentages.

## What you submit, what you get

Submit a file, a selection, or a paste. The skill writes `<stem>.misemphasis/report.md`. Each finding names the live readings, which one a flat reader is likely to take, and candidate rewrites for the meanings you might choose.

| Kind | Means |
| --- | --- |
| **Likely misread** | A typical silent reader could take the wrong one |
| **Possible misread** | Available if someone goes looking |
| **Judgment call** | Context probably settles it, still worth a glance |

Grammar, tone, and structure stay out. [Smell Check](https://smellcheck.dev) reviews register. [Detangler](https://detangler.dev) reviews structure.

## Install

[Download the zip](/docs/install), put the folder where the table says, and ask which readings the sentence already allows.

```bash
pnpm add -D misemphasis
```

Then copy `skills/misemphasis` out of `node_modules`.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
