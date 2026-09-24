# TASKS.md

Development tracker. Move items between sections as they progress; newest completed items go on top.
Owner-only items are marked **(owner)**.

## Current

- [ ] **(owner)** Write a project-focused tagline (`CONTENT.md` → About)
- [ ] **(owner)** Decide whether private coursework (Landmarks, Drug Info App, Dining Philosophers,
      4AI3 Assignments) appears on the site without repo links, or is left out
- [ ] **(owner)** Decide whether the job search agents go on GitHub / the site

## Next

- [ ] Social preview image and apple-touch icon (favicon and page titles done)
- [ ] Accessibility and responsive pass (keyboard, focus, contrast, reduced motion, 320px width)
- [ ] Deploy workflow: bump `actions/configure-pages` / `upload-pages-artifact` when Node 24 versions ship
      (GitHub warns their Node 20 runtime is deprecated)

## Done

- [x] **Launched** at https://oralino.github.io (2026-09-24): history audited (no secrets or personal
      data), commit identity rewritten to Oralino's no-reply address, repo recreated public, Pages source
      GitHub Actions, deploy verified including the `/projects/powertray` deep link
- [x] Images on every project page except TNL API Scrapper (needs a login); captured screenshots added
      to their repos' READMEs; gallery rules recorded in `DESIGN.md` → Imagery

- [x] Overview and features for every project detail page, from each repo's README or code
      (`CONTENT.md` → Project detail copy); READMEs added to TNL-API-Scrapper, 4SA3-Project1,
      4WP3-Project1 and 4WP3-Assignment2
- [x] Site UI built from `DESIGN.md`: tokens, layout, home sections, project detail and 404 pages;
      screenshots for the featured projects; reviewed (code-reviewer) and QA'd (qa-checker)
- [x] Design phase: `DESIGN.md` drafted by design-advisor (adapted from Mono Deploy), approved by owner
- [x] Site scope set to projects only (no personal details); resume kept locally in git-ignored
      `private/`; extra PowerTray / Video Editor / Steam Backlog details added to `CONTENT.md`
- [x] Scaffold React 19 + Vite 8 + TypeScript + Tailwind v4 + React Router v8; oxlint + Prettier
- [x] Typed project data (`src/data/projects.ts`) for all projects with public repos; placeholder pages
      proving routing (home, project detail, 404)
- [x] GitHub Pages setup: `base: '/'`, 404.html SPA fallback, deploy workflow
- [x] Agents (`design-advisor`, `code-reviewer`, `qa-checker`) and `CLAUDE.md` / `DESIGN.md` / `CONTENT.md`
- [x] Course projects published to GitHub with secrets removed; 4SA3-Project1 and 4WP3-Assignment-1
      recreated with clean history
