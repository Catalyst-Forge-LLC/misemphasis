# Misemphasis — architecture brief

**Status:** locked  
**Last updated:** 2026-09-09  
**Phase 1 exit:** User said build it. Sibling-parity defaults below are the lock.

---

## 1. Problem and outcome

Flat prose has no intonation. The same sentence can mean several things depending on which word is stressed. Writers and agents ship the words and leave the reading to chance. Misemphasis finds the available readings and offers wording that locks the intended one.

**Project archetype:** `product`

**What “done” looks like for v1:**

- Comb skill (`misemphasis`) writes `<stem>.misemphasis/report.md`.
- Site at misemphasis.com: home, docs (install, skill, report, sample), about.
- npm `misemphasis` ships the skill folder plus a tiny path catalog. No `bin`.

---

## 2. Users and hero flow

**Primary users:** writers, editors, and agents on sentences and short passages where a silent reader could take the wrong reading.

**Hero flow:** load the skill → agent writes `report.md` (likely misread, then possible, then judgment calls) → author picks the intended reading and rewrites, or rewrites by hand from the suggestions.

**Also:** install the skill folder; read the site for install and skill copy.

---

## 3. Constraints

- **Technical:** TypeScript ESM, Node ≥20, pnpm. No accounts. Input: Markdown, plain text, HTML. Docx/PDF only via a pre-step.
- **Business:** npm `misemphasis` reserved. Domain misemphasis.com. GitHub Catalyst-Forge-LLC/misemphasis. Maintainer publishes to npm.
- **Non-goals:** grammar, tone, AI-smell spraying, structural tangles, automatic rewrite, a command-line comb, accounts.

**State:** local files only. The draft and `report.md` are the state.

**Exports:** `report.md` is the deliverable.

**Tenancy:** none.

**Draft text:** fence as data. Do not send it to a project-owned cloud API.

**Live web search:** no.

---

## 4. Stack and tooling

| Area | Choice | Status | Notes |
| --- | --- | --- | --- |
| Package | Skill folder + TypeScript path catalog. No `bin`. | confirmed | Sibling of Smell Check and Detangler |
| Language | TypeScript, ESM | confirmed | House rule |
| Runtime | Node ≥20 | confirmed | |
| Package manager | pnpm | confirmed | |
| DB / auth | none | confirmed | Local files only |
| Site | FilePress (`getfilepress`) + Cloudflare Pages | confirmed | `pnpm ship` |
| Local ports | LocalSlip lease `misemphasis-site` on **5205** | confirmed | Claim, then pass `--port` |
| Tests | `tsc` + `node --test` on the catalog | confirmed | |
| License | MIT, Catalyst Forge LLC | confirmed | |
| GitHub | Catalyst-Forge-LLC/misemphasis | confirmed | |

```
misemphasis/
├── src/                      # skill catalog (paths only)
├── skills/misemphasis/       # comb pass
├── fixtures/                 # sample ambiguous prose
├── site/                     # FilePress
├── docs/                     # this brief
└── package.json              # name: misemphasis, no bin
```

---

## 5. Data model (sketch)

**Deliverable:** `report.md` in `<stem>.misemphasis/`. Shape: `skills/misemphasis/references/report.md`.

- **Finding** — id `F-001`, location, type, severity, readings (stress → meaning), default silent reading, action (rewrites that lock a reading).
- **Severity** — likely misread / possible misread / judgment call.
- **Types** — emphasis_shift, negation_scope, exclusive_particle, pronoun_stress, quantifier_scope.

**Existing data:** none. Fixture is *I didn't say we should cancel Friday* plus two companions.

---

## 6. Integrations

| Integration | Purpose | Auth | Risk |
| --- | --- | --- | --- |
| Hosting agent | Reads the skill. That is the judgment. | none | Fence draft as data |
| FilePress / Wrangler | Marketing site. `pnpm ship`. | Cloudflare login | |
| npm | Package. Maintainer publishes. | user 2FA | Agents never publish |
| LocalSlip | Site port lease | local CLI | Fallback to 5205 |

No payments, email, analytics, or search API.

**Content-generation pattern:** none in the package. The agent reading the skill produces the report.

---

## 7. Hardest problems and risks

1. Flagging every sentence that *could* be stressed — noise. Need a “plausible other reading” bar.
2. Assuming the intended reading. The report presents options; the author picks.
3. Overlap with Smell Check (tone) and Detangler (structure). Stay on emphasis and scope.

---

## 8. Architectural decisions

**D1.** npm `misemphasis` + site misemphasis.com + GitHub Catalyst-Forge-LLC/misemphasis.

**D2.** Skill is the product. No CLI. Same shelf as Smell Check and Detangler.

**D3.** No accounts, no PocketBase. The document and the report are the state.

**D4.** TypeScript ESM catalog, not a pipeline.

**D5.** Phase 2 exit criteria rewritten for a skill + static site (not web-app CRUD).

**D6.** Pruned Phase 7 auth-flow and payment-flow exit criteria.

**D7.** LocalSlip lease `misemphasis-site` on 5205.

**D8.** v1 is report-only. Apply is a later skill.

---

## 9. Open questions

| # | Question | Owner / resolve by |
| - | -------- | ------------------ |
| 1 | Apply skill in a later pass? | Deferred to TODO |
| 2 | Public vs private GitHub after first ship | User |

---

## 10. Explicitly out of scope (v1)

Grammar, tone, AI-smell spraying, structural tangles, automatic rewrite, multi-file sets as a first-class object, native docx/PDF, accounts, billing, a command-line comb, apply skill.

---

## 11. First feature batch (post-scaffold)

- Dogfood the skill on real copy (site home, sibling READMEs).
- Tighten the “plausible other reading” bar from that pass.
- Apply skill (`misemphasis-apply`) if the comb report is trusted.
- AppFacts / SkillFacts nutrition labels when the siblings’ pattern is copied.

---

## 12. Handoff checklist

- [x] Stack, folder shape, data sketch, hero flow, and v1 boundaries locked by “please build it” plus named domain/npm/repo
- [x] This brief is **locked**
- [x] Tracking `decisions[]` mirrors D1–D8
- [x] Phase 2 reads this file + tracking first
