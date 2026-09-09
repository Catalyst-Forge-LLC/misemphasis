<p align="center">
  <img src="site/static/logo.svg" alt="Misemphasis" width="128" />
</p>

# Misemphasis

An installable writing skill for AI agents.

Find how flat prose can be misread when stress is missing, and offer
wording that locks the intended reading. Written **Misemphasis**.
npm **`misemphasis`**.

Same words. Different stress. Different claim.

**Docs:** [misemphasis.com/docs](https://misemphasis.com/docs) · **Site:** [misemphasis.com](https://misemphasis.com)

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
sprays unearned language. [Detangler](https://detangler.dev) combs what
editing tangled. This bottle is for the reading.

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
