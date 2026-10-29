---
title: "Catch the other meaning in your sentence."
description: "A reader can stress a different word from the one you intended. Misemphasis shows plausible alternate readings and clearer wording for each, so you can choose the meaning before sending the text."
order: 0
---

<section class="value-hero" aria-label="Misemphasis overview"><div class="value-intro"><div class="value-headline"><p class="value-kind">Reading and meaning review skill for your AI agent</p><h1 class="hero-phrased"><span class="hero-phrase">Catch the other meaning</span> <span class="hero-phrase">in your sentence.</span></h1></div><div class="value-pitch"><p class="value-lede">A reader can stress a different word from the one you intended. Misemphasis shows plausible alternate readings and clearer wording for each, so you can choose the meaning before sending the text.</p><div class="cta-row"><a class="cta cta-primary" href="/docs/install">Install Misemphasis</a><a class="cta cta-secondary" href="#two-readings">Compare the two exact rewrites</a></div><p class="value-limit">Your agent writes report.md and leaves the source unchanged. No wording guarantees one reading for everyone.</p></div></div>
<figure class="value-proof worked-example" id="two-readings" tabindex="-1">
<figcaption>Choose which promise you mean before sending the sentence</figcaption>
<p class="example-context">Illustrative report excerpt. Both readings fit the original words; the author supplies the intended meaning.</p>
<section class="example-step" aria-labelledby="example-step-1">
<h2 id="example-step-1"><span>Original sentence</span> “Only” can attach to different parts</h2>
<blockquote><p>We only promised the beta users a refund.</p></blockquote><p>Is the limit about <strong>who</strong> gets a refund, or <strong>what</strong> was promised?</p>
</section>
<section class="example-step example-report" aria-labelledby="example-step-2">
<h2 id="example-step-2"><span>Report · reading A</span> Only the beta users get the promise</h2>
<p><strong>Reading:</strong> Limit the audience.</p><p><strong>Suggested rewrite:</strong></p><blockquote><p>We promised a refund only to the beta users.</p></blockquote><p>Choose this if the message is about who gets money back.</p>
</section>
<section class="example-step" aria-labelledby="example-step-3">
<h2 id="example-step-3"><span>Report · reading B</span> A refund is the only thing promised</h2>
<p><strong>Reading:</strong> Limit the remedy.</p><p><strong>Suggested rewrite:</strong></p><blockquote><p>The only thing we promised the beta users was a refund.</p></blockquote><p>Choose this if the message is about what was promised.</p>
</section>
<p class="value-note">The report gives you the alternatives. You choose and apply the sentence that matches your intent; review does not edit the original.</p>
<p class="example-links"><a href="/docs/sample-report">See more readings in the sample report</a></p>
</figure></section>

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
