# CLAUDE.md

This file guides Claude Code when working in this repository.

## Project overview

A personal portfolio website showcasing the GitHub projects of **Oralino** (https://github.com/Oralino),
a current student at **McMaster University**. The site covers both personal projects and coursework.
Each project gets a card on the home page and its own detail page with a description, features,
tech stack, screenshots, and links to the repo and releases/downloads.

**Status:** Live at https://oralino.github.io. `DESIGN.md` is approved and implemented; every project has
an overview, features and images (except TNL API Scrapper). Current work is tracked in `TASKS.md`.

## Source-of-truth documents

| File | Owns | Maintained by |
|---|---|---|
| `CLAUDE.md` | How the site is built: stack, architecture, workflow, rules | main session |
| `DESIGN.md` | How it looks: tokens, typography, layout, components, motion | design-advisor (main session approves) |
| `CONTENT.md` | What it says: bio, project list, descriptions, links, media | main session + owner input |
| `TASKS.md` | Current, next and completed work | main session |
| `README.md` | Developer setup: run, build, deploy | main session |

Don't duplicate information across these files; link to the owning file instead.

## Tech stack

- **React 19 + Vite 8 + TypeScript 6** (strict)
- **Tailwind CSS v4** via `@tailwindcss/vite`; design tokens go in an `@theme` block in `src/index.css`
  (no `tailwind.config.js` in v4)
- **React Router v8** in data mode (`createBrowserRouter` + `RouterProvider` from `react-router/dom`)
- **oxlint** for linting (the Vite template default), **Prettier** + `prettier-plugin-tailwindcss` for
  formatting and Tailwind class ordering. Style: no semicolons, single quotes
- Hosting: **GitHub Pages** user site at https://oralino.github.io via GitHub Actions

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:5173
npm run build        # type check + production build into dist/ (also writes dist/404.html)
npm run preview      # serve the production build at http://localhost:4173
npm run lint         # oxlint
npm run typecheck    # tsc -b
npm run format       # prettier --write . (format:check to verify only)
```

Run `npm run format` before committing. Markdown files are excluded from Prettier on purpose.

## Agent workflow

Agents live in `.claude/agents/`. The main session (Opus) does all coding, architecture, major UI
decisions, refactors, difficult debugging and final decisions.

| Agent | Model | Edits files? | Use for |
|---|---|---|---|
| `design-advisor` | Opus | `DESIGN.md` only | Design direction before a new page/major section; critiques of implemented UI |
| `code-reviewer` | Sonnet | No (read-only tools) | Reviewing a finished feature; pass it the changed files |
| `qa-checker` | Haiku | No (runs commands only) | Lint, type check, build, mechanical searches |

Workflow for a feature:
1. Main session plans the work.
2. `design-advisor` gives direction **only when** the feature introduces new visual patterns.
3. Main session implements.
4. `code-reviewer` reviews the changed files.
5. `qa-checker` runs lint/typecheck/build and searches.
6. Main session evaluates findings and applies fixes; browser checks (console errors, visual/responsive
   behaviour) are done by the main session with the built-in browser.

Rules:
- Don't spawn an agent for small tasks the main session can do directly (one-file fixes, quick greps,
  a single build run during active debugging).
- Reviewer and QA report; they never change production code. The main session decides and fixes.
- Never have two agents writing to the same files at once. Review (step 4) and QA (step 5) are read-only,
  so they may run in parallel.
- Brief agents with exactly what they need (file list, what changed, what to focus on) so they don't
  re-read the whole repo.

## Architecture conventions

Folder layout. **Create a folder only when its first real file exists**; don't add empty folders or
placeholder components.

```
src/
├── main.tsx              # entry: mounts <App />, imports index.css
├── App.tsx               # router definition only
├── index.css             # Tailwind import + @theme tokens
├── pages/                # one component per route (HomePage, ProjectPage, NotFoundPage)
├── components/
│   ├── layout/           # site chrome shared by pages: header, footer, root layout
│   ├── sections/         # home page sections (hero, projects, about, contact)
│   └── ui/               # small reusable primitives (Button, Tag, Card) used in 2+ places
├── data/                 # typed content (projects.ts), mirroring CONTENT.md
├── types/                # shared TypeScript types (project.ts)
├── assets/projects/<slug>/  # project images, imported so Vite hashes/optimizes them
├── hooks/                # custom hooks, only once one is needed (e.g. theme)
└── lib/                  # small pure helpers, only once one is needed
public/                   # files served as-is (favicon, social preview image)
private/                  # git-ignored, never served: owner's resume, kept for reference only
```

- Keep project content as **data**, not hard-coded JSX. `src/data/projects.ts` is typed by
  `src/types/project.ts`; add fields (description, features, images, downloadUrl...) to the type only
  when real content for them exists. Adding a project should only require a data entry and its images.
- Relative imports include the extension (`./pages/HomePage.tsx`), matching the Vite template.
- One component per file, default-exported, named after the file.
- Styling with Tailwind utilities; use design tokens from the theme, not arbitrary values, unless a
  one-off is justified. Extract a component rather than repeating long class lists.
- Prefer small, focused components and clean architecture over unnecessary abstraction; no global
  state library unless a real need appears.

## Secrets policy (applies to this site and every linked repo)

- `.env` files are **never** committed; every repo's `.gitignore` must list `.env` and `.env.*`
  (with `!.env.example` allowed). Provide a `.env.example` with empty values instead.
- API keys are never hard-coded, including front-end keys (e.g. Google Maps JS keys). Load them from
  a git-ignored file such as `config.js` (with a committed `config.example.js`) or from env vars.
- For this Vite site: anything in `import.meta.env.VITE_*` ends up in the public bundle, so never put a
  secret there. If the site ever needs a private key, it must go through a serverless function.
- Before any push, scan staged files: `git grep --cached -nE 'AIza|mongodb(\+srv)?://|sk-|gh[pousr]_'`.

## Deployment (GitHub Pages)

- Repo: `Oralino/Oralino.github.io` (**public**, live since 2026-09-24), served at https://oralino.github.io
  with `base: '/'` in `vite.config.ts`. No custom domain. Pages source: GitHub Actions.
- Commit identity for this repo: `Oralino <92961231+Oralino@users.noreply.github.com>` (set in the repo's
  git config). Never commit with the owner's real name or email.
- Clean URLs (`/projects/<slug>`) via the 404 fallback: a small plugin in `vite.config.ts` copies
  `dist/index.html` to `dist/404.html` so GitHub Pages boots the app on deep links.
- `.github/workflows/deploy.yml` lints, builds and deploys on push to `main`, so every push to `main`
  goes live. (The build job skips itself if the repo is ever made private again.)

## Guidelines

- Must be responsive (mobile first) and accessible (semantic HTML, alt text, keyboard navigable,
  respects `prefers-reduced-motion`).
- Support light and dark themes.
- Don't add dependencies without a clear reason.
- Never commit secrets; none of the linked projects' `config.yaml` / `.env` / `config.js` files belong here.
- The site shows projects only: no real name, email, phone, location, work history or resume, in the
  site or in any committed file (see `CONTENT.md` → About).
