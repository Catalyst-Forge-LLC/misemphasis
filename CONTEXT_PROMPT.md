# Misemphasis — Project Context Prompt

_Session continuity. Locked architecture lives in `docs/PHASE_1_BRIEF.md` and `.forgetrail/workflow_tracking.json`._

**Merged from PHASE_1_BRIEF.md on 2026-09-09.** Brief stays in `docs/` as the audit trail.

---

## What this is

Misemphasis finds how flat prose can be misread when stress is missing. The **skill** is the product: an agent reads it and writes `report.md`. npm ships the folder. There is no command-line comb.

Sibling of Smell Check and Detangler. npm `misemphasis`. Site misemphasis.com. GitHub Catalyst-Forge-LLC/misemphasis.

Hero flow: load the skill → agent writes `report.md` (`<stem>.misemphasis/`).

## Tech Stack

- **Package:** TypeScript ESM catalog + one skill folder. Node ≥20. pnpm. No `bin`.
- **Site:** FilePress (`getfilepress`) + Cloudflare Pages (`pnpm ship`, project `misemphasis`). LocalSlip lease `misemphasis-site` on **5205**. `pnpm site:dev` claims the lease and passes `--port` to FilePress.
- **DB / auth:** none. Local files only.
- **AI/LLM:** The agent reading the skill is the judgment. No provider path.
- **Tests:** `tsc` + `node --test` on the skill catalog. Sample prose in `fixtures/`.
- **License:** MIT, Catalyst Forge LLC.

## Project Structure

```
misemphasis/
  src/                 Skill catalog (paths only)
  fixtures/            Sample ambiguous prose
  skills/misemphasis/  Emphasis pass
  site/                FilePress pages, docs, static
  docs/                PHASE_1_BRIEF
  .forgetrail/         lifecycle tracking
```

## Data Model

Deliverable: `report.md` in `<stem>.misemphasis/`. Shape: `skills/misemphasis/references/report.md`. Findings: id, location, type, severity, readings, default silent reading, rewrites that lock a reading.

## Key Architectural Decisions

- **Product: npm + FilePress site + skill.** WHY: name and domain claimed; same shelf as Smell Check. DECIDED: Phase 1
- **Skill is the product. No CLI.** WHY: the report is agent behavior. DECIDED: Phase 1
- **No accounts, no PocketBase.** WHY: the document and the report are the state. DECIDED: Phase 1
- **TypeScript ESM catalog, not a pipeline.** WHY: house language rule and sibling parity. DECIDED: Phase 1
- **GitHub Catalyst-Forge-LLC/misemphasis.** WHY: user confirmed. DECIDED: Phase 1
- **v1 is report-only.** WHY: comb first. Apply later. DECIDED: Phase 1
- **LocalSlip misemphasis-site on 5205.** WHY: 5200 is gaplast-site. DECIDED: Phase 1

## Critical Patterns

- Fence user document text as data.
- No finding without an action (rewrites that lock distinct readings).
- Do not assume the intended reading. Present options.
- A false likely-misread costs more than a missed judgment call.
- Agents never `pnpm publish`. Site deploy is `pnpm ship` only.
- Site copy speaks as the product. No corporate we. No builder I.
- LocalSlip: claim a named lease, then pass that port to FilePress.

## Out of scope (v1)

Grammar, tone, AI-smell spraying, structural tangles, automatic rewrite, multi-file sets, native docx/PDF, accounts, billing, a command-line comb, apply skill.

## Recent Changes

- 2026-09-09: Teaching sentence is *I didn't say we should cancel Friday.* About quotes Rachel Rooney, *What I Really Mean*, *The Language of Cat* (2011), plus the Massimo clip.
- 2026-09-09: Smell Check pass on the site. Overlay in `docs/smellcheck.md`. Hero no longer inventories npm, domain, or siblings.
- 2026-09-09: Phase 1 locked. Phase 2 spine: skill, catalog, FilePress site, fixture.
