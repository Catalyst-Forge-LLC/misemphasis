# Report shape

You write `report.md`. This is the document the author reads.

Do not use the words "issue" or "problem" as headings. The three
bucket names are the headings.

```markdown
# Misemphasis report — <source filename>

<N> sentences checked. <N> findings. <ISO timestamp>.

Likely misread: <n>. Possible: <n>. Judgment calls: <n>.

## Likely misread

1. **F-001** · line 1 — emphasis_shift
   I didn't say we should cancel Friday.
   Default silent reading: a flat denial that the statement was made.
   Readings:
   - **I** — someone else said it
   - **didn't** — denial that it was said
   - **say** — hinted or implied, not spoken
   - **we** — they should cancel, not us
   - **should** — required, or optional
   - **cancel** — postpone, don't cancel
   - **Friday** — another day
   Action: Pick the intended reading and use a rewrite from the set
   in the sample, or write one that names the contrast.

## Possible misread

None.

## Judgment calls

None.

## Deferred skips

<N> sentences had no plausible other reading.
```

Empty buckets say `None.`

Every finding has an id, a location, a type, readings, a default
silent reading, and an action. No action → the finding is not
emitted.

Do not invent which reading the author meant.
