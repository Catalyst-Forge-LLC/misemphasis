---
title: Install
---

The [skill](/docs/skill) is the product. One folder. The agent reads it and writes the report.

[misemphasis.zip](/skills/misemphasis.zip)

Nothing scans the tree. You point the agent at the prose.

## Drop the folder in

You do not need npm. You need a folder that contains `SKILL.md`.

1. Download the zip.
2. Unzip it. You should see `SKILL.md` and a `references/` folder.
3. Put that folder here:

| Where you work | Put the folder here |
| --- | --- |
| Cursor | `.cursor/skills/misemphasis/` in the project, or `~/.cursor/skills/misemphasis/` |
| Claude Code | `~/.claude/skills/misemphasis/` or `.claude/skills/misemphasis/` in the repo |
| claude.ai | Settings → Customize → Skills → upload the zip (do not unzip) |

4. Ask which readings the sentence already allows. *Which readings does this sentence already allow?*

That is the whole install. The agent reads the folder and writes `report.md`.

## If you already use npm

```bash
pnpm add -D misemphasis
```

Copy `node_modules/misemphasis/skills/misemphasis/` into a skills directory. If the folder is missing from the package, use the zip.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/misemphasis) and copy `skills/misemphasis/`.

Node.js 20+. The package is [`misemphasis`](https://www.npmjs.com/package/misemphasis) on npm.

Example prompts: [Skill](/docs/skill). A [sample report](/docs/sample-report).

## What the skill writes

| Folder | Deliverable |
| --- | --- |
| `<stem>.misemphasis/` next to the file (or `prose.misemphasis/` for a paste) | `report.md` |

The agent may keep other notes in that folder. The report is the deliverable.
