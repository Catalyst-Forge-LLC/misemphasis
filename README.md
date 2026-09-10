<p align="center">
  <img src="site/static/logo.png" alt="Misemphasis" width="128" />
</p>

# Misemphasis

An installable writing skill for AI agents.

Find sentences a reader could interpret differently from what you
intend. Misemphasis shows the plausible readings and suggests clearer
wording for the meaning you choose. Written **Misemphasis**.
npm **`misemphasis`**.

Same words. Different stress. Different claim. A rewrite can make the
intended claim explicit. It cannot guarantee every reader will take
that reading.

**Docs:** [misemphasis.com/docs](https://misemphasis.com/docs) · **Site:** [misemphasis.com](https://misemphasis.com)

## Two readings

> We only promised the beta users a refund.

- Audience limit: *We promised a refund only to the beta users.*
- Remedy limit: *The only thing we promised the beta users was a refund.*

Submit a file or a paste. The agent writes `report.md`. The source
stays unchanged until you apply a selected rewrite.

## Install

```bash
pnpm add -D misemphasis
```

Copy `node_modules/misemphasis/skills/misemphasis` to
`.cursor/skills/misemphasis`. Or skip npm and
[install the skill](https://misemphasis.com/docs/skill) as a folder.

Markdown you point an agent at. Nothing scans the tree. v1 has no CLI.

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
