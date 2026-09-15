<p align="center">
  <img src="site/static/logo.png" alt="Misemphasis" width="128" />
</p>

# Misemphasis

An installable writing skill for AI agents.

Find sentences a reader could interpret differently from what you
intend. Misemphasis shows the plausible readings and suggests clearer
wording for the meaning you choose. Written **Misemphasis**.

Same words. Different stress. Different claim. A rewrite can make the
intended claim explicit. It cannot guarantee every reader will take
that reading.

**Get started:** pick the agent, install the skill, then run the
refund sentence —
[misemphasis.com/docs/install](https://misemphasis.com/docs/install).

- [Cursor](https://misemphasis.com/docs/install#cursor)
- [Claude Code](https://misemphasis.com/docs/install#claude-code)
- [Claude.ai](https://misemphasis.com/docs/install#claudeai)

**Site:** [misemphasis.com](https://misemphasis.com)

## Two readings

> We only promised the beta users a refund.

- Audience limit: *We promised a refund only to the beta users.*
- Remedy limit: *The only thing we promised the beta users was a refund.*

Ask:

> Use Misemphasis on `refund.md`. Follow the installed Misemphasis
> skill. Write the report and leave the sentence unchanged.

Save the sentence as `refund.md` first. The report lands at
`refund.misemphasis/report.md`. The source does not change. Choose the
wording that matches your intent, then copy it into the draft or ask
the agent to make that specific edit outside this skill.

A writable workspace is required. Nothing scans the tree. v1 has no CLI.

## Other installation methods

npm supplies the skill files. It does not register the skill with the
agent.

```bash
pnpm add -D misemphasis
```

Copy `node_modules/misemphasis/skills/misemphasis` into the same
destination the [Get started](https://misemphasis.com/docs/install)
page names for your agent.

Updating the npm dependency does not refresh a folder you already
copied. Copy again after you bump the package.

## Not a line editor

Grammar, tone, and structure stay out. [Smell Check](https://smellcheck.dev)
reviews unearned language. [Detangler](https://detangler.dev) reviews
what editing tangled. This one is for the reading.

## Development

```bash
pnpm install
pnpm test
pnpm site:dev
```

Site (FilePress + docs mount): `pnpm ship`.
npm: `pnpm publish` (you). There is no `publish` script. `prepublishOnly` runs the tests first.
Agents must not run `npm publish`.

## License

MIT. Copyright Catalyst Forge LLC.
