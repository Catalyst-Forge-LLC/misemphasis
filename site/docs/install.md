---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. Nothing scans the tree.

Misemphasis writes a report file. A writable workspace is required. Claude.ai without project files is not a supported first-use route.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project skills folder | Writable workspace | Host listing / discovery not independently verified in this docs pass |
| Claude Code | Project or `~/.claude/skills/` | Writable workspace | Same |
| Other agents that read `SKILL.md` | Manual copy | Writable workspace | Unverified |
| Claude.ai | — | Writable project files | Not a supported first-use route without files |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A report alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)

## Cursor

### Get it

Download [misemphasis.zip](/skills/misemphasis.zip).

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put that folder in the project you are reviewing:

`.cursor/skills/misemphasis/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

If Cursor lists installed skills, confirm `misemphasis`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save this sentence as `refund.md` in the project:

```markdown
We only promised the beta users a refund.
```

Then ask:

> Use Misemphasis on `refund.md`. Follow the installed Misemphasis skill. Write the report and leave the sentence unchanged.

A paste with no filename uses `prose.misemphasis/report.md` in the working directory. Do not invent `refund.misemphasis/` from page copy when you did not supply `refund.md`.

### Find the result

Open `refund.md` → `refund.misemphasis/report.md`.

Success looks like this shape, not identical wording from every model:

- Plausible readings of the sentence
- Candidate wording for each reading
- The original sentence left unchanged

That the example behaved is not the same check as discovery.

## Claude Code

### Get it

Download [misemphasis.zip](/skills/misemphasis.zip).

### Add it

Unzip, then put the folder in the repo you are reviewing:

`.claude/skills/misemphasis/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/misemphasis/` instead.

### Confirm it

If Claude Code lists skills, confirm `misemphasis`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save this sentence as `refund.md`:

```markdown
We only promised the beta users a refund.
```

Then ask:

> Use Misemphasis on `refund.md`. Follow the installed Misemphasis skill. Write the report and leave the sentence unchanged.

### Find the result

Open `refund.misemphasis/report.md`. Source unchanged.

## After the review

There is no apply skill. Choose the wording that expresses your intent, then copy it into the draft or ask your agent to make that specific edit outside this skill.

The source stays unchanged until you do that.

### Update or remove

Replace the installed `misemphasis` folder to update. Delete that folder to uninstall. Copied skills do not refresh when you bump the npm package.

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

Same folder shape. Discovery and first-use checks are the same.

A [sample report](/docs/sample-report) on the teaching sentence.
