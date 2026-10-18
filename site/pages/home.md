---
title: "Catch the other meaning in your sentence."
description: "A reader can stress a different word from the one you intended. Misemphasis shows plausible alternate readings and clearer wording for each, so you can choose the meaning before sending the text."
order: 0
---

<section class="value-hero" aria-label="Misemphasis overview"><div class="value-intro"><p class="value-kind">Reading and meaning review skill for your AI agent</p><h1>Catch the other meaning in your sentence.</h1><p class="value-lede">A reader can stress a different word from the one you intended. Misemphasis shows plausible alternate readings and clearer wording for each, so you can choose the meaning before sending the text.</p><div class="cta-row"><a class="cta cta-primary" href="/docs/install">Install Misemphasis</a><a class="cta cta-secondary" href="/docs/sample-report">Read an example report</a></div><p class="value-limit">Your agent writes report.md and leaves the source unchanged. No wording guarantees one reading for everyone.</p></div><figure class="value-proof"><figcaption>Illustrative example</figcaption><p><strong>Starting point</strong><br>“We only promised the beta users a refund.”</p><div class="value-result"><p><strong>What you get</strong><br>Audience: refunds only for beta users.<br>Remedy: a refund was the only promise.</p></div><p>The report gives a rewrite for each meaning. You supply the intent.</p><p class="value-note">Illustrative readings from the worked example.</p></figure></section>

## One sentence, seven readings

*I didn't say we should cancel Friday.*

| Stress | Reading |
| --- | --- |
| **I** | Someone else said it |
| **didn't** | Denial that it was said |
| **say** | Hinted or implied, not spoken |
| **we** | They should cancel, not us |
| **should** | Required, or optional |
| **cancel** | Postpone, don't cancel |
| **Friday** | Another day |

Seven words. Seven claims. Flat text ships all of them. The [sample report](/docs/sample-report) walks this sentence and two others.

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

Misemphasis checks stress and scope only. An *it* with two possible owners, or a phrase that could modify either of two words, is a different ambiguity. [Smell Check](https://smellcheck.dev) catches those as a sense collision, and it also reviews register. [Detangler](https://detangler.dev) reviews structure. Grammar and tone stay out.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
