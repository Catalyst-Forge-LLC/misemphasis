---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. Nothing scans the tree.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

A folder on disk is not proof the agent found the skill. The first run below is the check.

## Cursor

### Get it

Download [misemphasis.zip](/skills/misemphasis.zip).

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put that folder in the project you are reviewing:

`.cursor/skills/misemphasis/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

Ask Cursor to use Misemphasis on the refund sentence below. If it writes `report.md`, it found the skill and the reference files.

### Try it

Save this sentence as `refund.md` in the project:

```markdown
We only promised the beta users a refund.
```

Then ask:

> Use Misemphasis on `refund.md`. Follow the installed Misemphasis skill. Review that sentence using its instructions.

### Find the result

The report lands in `refund.misemphasis/report.md` next to the file.

Success looks like this shape, not identical wording from every model:

- Plausible readings of the sentence
- Candidate wording for each reading
- The original sentence left unchanged

## Claude Code

### Get it

Download [misemphasis.zip](/skills/misemphasis.zip).

### Add it

Unzip, then put the folder in the repo you are reviewing:

`.claude/skills/misemphasis/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/misemphasis/` instead.

### Confirm it

Same check as Cursor: the first run must produce `report.md`.

### Try it

Same request as [Cursor](#try-it).

### Find the result

Same path as [Cursor](#find-the-result).

## Claude.ai

### Get it

Download [misemphasis.zip](/skills/misemphasis.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

Start a chat and run the request below. If the agent writes a Misemphasis report, it loaded the skill.

### Try it

Paste the sentence, then ask:

> Use Misemphasis on this sentence. Follow the installed Misemphasis skill. Review it using its instructions.
>
> We only promised the beta users a refund.

### Find the result

The report appears in the chat. When the agent can write files, it lands in `refund.misemphasis/report.md`.

## After the review

There is no apply skill. Choose the wording that expresses your intent, then copy it into the draft or ask your agent to make that specific edit outside this skill.

The source stays unchanged until you do that.

## Other ways to ask

Once the first run works:

- Which readings does this sentence already allow?
- Stress pass on this paragraph.
- I didn't mark emphasis. What can be misread?

Those are later shortcuts. They are not the install check.

## Other installation methods

npm supplies the skill files. It does not register the skill with the agent.

```bash
pnpm add -D misemphasis
```

Copy `node_modules/misemphasis/skills/misemphasis/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Node.js 20+. The package is [`misemphasis`](https://www.npmjs.com/package/misemphasis) on npm.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/misemphasis) and copy `skills/misemphasis/`.

### Install for all projects

- Cursor: `~/.cursor/skills/misemphasis/`
- Claude Code: `~/.claude/skills/misemphasis/`

Same folder shape. The first-run check is the same.

A [sample report](/docs/sample-report) on the teaching sentence.
