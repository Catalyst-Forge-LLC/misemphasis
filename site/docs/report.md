---
title: Report
---

`report.md` is what you read. The skill writes it.

1. Header: name, counts, timestamp, counts by severity
2. Likely misread
3. Possible misread
4. Judgment calls
5. Deferred skips: a count, not the sentences

Every finding has an id, a location, a type, the live readings, the default silent reading, and an action. The action is two or more rewrites that lock distinct readings. Findings without an action are dropped.

Severity:

- **likely misread** — a typical silent reader could take the wrong one
- **possible misread** — available if someone goes looking
- **judgment call** — context probably locks it

Do not invent which reading the author meant. The author picks.
