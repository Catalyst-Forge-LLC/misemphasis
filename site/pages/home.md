---
title: The other reading
description: An installable writing skill for AI agents. Find sentences a reader could interpret differently from what you intend.
order: 0
---

An installable writing skill for AI agents. Misemphasis finds sentences a reader could interpret differently from what you intend. It shows the plausible readings and suggests clearer wording for the meaning you choose.

An agent reads the skill and writes `report.md`. The source text does not change. This is not a guarantee that every reader will take one meaning.

<div class="cta-row">
  <a class="cta cta-primary" href="/docs/install">Install in your agent</a>
  <a class="cta cta-secondary" href="https://github.com/Catalyst-Forge-LLC/misemphasis">View on GitHub</a>
</div>

## Two readings

> We only promised the beta users a refund.

| Reading | What a silent reader may take | Rewrite that states that meaning |
| --- | --- | --- |
| Limit the audience | Refunds are for beta users only | *We promised a refund only to the beta users.* |
| Limit the remedy | The only promise was a refund | *The only thing we promised the beta users was a refund.* |

A support note about who gets money back favors the first reading. A note about what was promised favors the second. The skill does not know the author's intent. It names the live readings.

[Install in your agent](/docs/install) · [See an example report](/docs/sample-report)

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A named file (preferred), or a paste in a writable workspace |
| Writes | `refund.md` → `refund.misemphasis/report.md`; a nameless paste → `prose.misemphasis/report.md` |
| Changes | Nothing. Choose the wording that matches your intent, then copy it into the draft or ask the agent to make that specific edit |

## Restraint

A sentence with one obvious reading is not a finding.

**No finding.** *The standup is Tuesday at 3pm in room 12.*

**Judgment call.** *I didn't skip the standup because I was busy.* The next sentence, *I was in a dentist chair*, probably fixes the *because*. The skill may still flag it as a glance, not as a likely misread. Findings carry that uncertainty. They do not invent likelihood percentages.

## After the report

There is no apply skill. Pick the candidate wording that expresses your intent. Paste it into the draft, or ask your agent to make that one edit outside this skill.

| Kind | Means |
| --- | --- |
| **Likely misread** | A typical silent reader could take the wrong one |
| **Possible misread** | Available if someone goes looking |
| **Judgment call** | Context probably settles it, still worth a glance |

Grammar, tone, and structure stay out. [Smell Check](https://smellcheck.dev) reviews register. [Detangler](https://detangler.dev) reviews structure.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
