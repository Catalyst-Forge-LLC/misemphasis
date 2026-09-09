# Report shape

You write `report.md`. This is the document the author reads.

Do not use the words "issue" or "problem" as headings. The three
bucket names are the headings. Each finding is its own heading,
then the sentence, the default silent reading, a readings table,
and a rewrite list. Do not nest lists under a numbered item.

```markdown
# Misemphasis report — <source filename>

<N> sentences checked. <N> findings. <ISO timestamp>.

Likely misread: <n>. Possible: <n>. Judgment calls: <n>.

## Likely misread

### F-001 · line 1 — emphasis_shift

> I didn't say we should cancel Friday.

Default silent reading: a flat denial that the statement was made.

| Stress | Reading |
|--------|---------|
| I | someone else said it |
| didn't | denial that it was said |
| say | hinted or implied, not spoken |
| we | they should cancel, not us |
| should | required, or optional |
| cancel | postpone, don't cancel |
| Friday | another day |

**Rewrites**

- Denial: *I never proposed cancelling Friday.*
- Not us: *I said they should cancel Friday. I did not say we would.*
- Not cancel: *I said we should move Friday. I did not say cancel it.*
- Not Friday: *I said we should cancel a day. I did not name Friday.*

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
