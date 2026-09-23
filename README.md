# oralino.github.io

Source for Oralino's developer portfolio, live at https://oralino.github.io (after launch).
Built with React, Vite, TypeScript, Tailwind CSS and React Router.

## Requirements

- Node.js 20.19+ (developed on Node 24)
- npm

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type check and build to `dist/` (also creates `dist/404.html` for GitHub Pages) |
| `npm run preview` | Serve the production build at http://localhost:4173 |
| `npm run lint` | Lint with oxlint |
| `npm run typecheck` | Type check with `tsc -b` |
| `npm run format` | Format with Prettier (`format:check` to verify only) |

## Project structure

```
src/
├── main.tsx        # entry point
├── App.tsx         # routes
├── index.css       # Tailwind + design tokens
├── pages/          # route components
├── data/           # project data
└── types/          # shared types
```

See `CLAUDE.md` for the full folder conventions.

## Editing content

Project information lives in `src/data/projects.ts`, mirrored from `CONTENT.md`. Update `CONTENT.md`
first, then the data file. Project images go in `src/assets/projects/<slug>/`.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which lints, builds and deploys `dist/` to
GitHub Pages. The site is served from the domain root (`base: '/'`). Links like `/projects/<slug>`
work because the build copies `index.html` to `404.html`.

The workflow is skipped while the repository is private. To launch: make the repo public, set
**Settings → Pages → Source** to **GitHub Actions**, then re-run the workflow.

## Secrets

Never commit `.env` files or API keys. `VITE_*` environment variables are embedded in the public
bundle, so nothing secret may go in them. See the secrets policy in `CLAUDE.md`.
