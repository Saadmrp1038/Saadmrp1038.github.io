# Saad Mohammad Rafid Pial's portfolio

A static SvelteKit site deployed to GitHub Pages.

## Local development

Use Node.js 20 and pnpm 10.34.5, matching the deployment workflow.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Checks

```sh
pnpm test
pnpm lint
pnpm build
```

The production site is written to `build/`. Pushing to `main` runs these checks and deploys that directory to GitHub Pages.
