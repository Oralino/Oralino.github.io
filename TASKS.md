# TASKS.md

Development tracker. Move items between sections as they progress; newest completed items go on top.
Owner-only items are marked **(owner)**.

## Current

- [ ] **(owner)** Write a project-focused tagline (`CONTENT.md` → About)
- [ ] **(owner)** Decide whether private coursework (Landmarks, Drug Info App, Dining Philosophers,
      4AI3 Assignments) appears on the site without repo links, or is left out
- [ ] **(owner)** Decide whether the job search agents go on GitHub / the site

## Next

- [ ] Screenshots for the remaining projects (see `CONTENT.md` → Screenshots and media)
- [ ] Social preview image and apple-touch icon (favicon and page titles done)
- [ ] Accessibility and responsive pass (keyboard, focus, contrast, reduced motion, 320px width)

## Launch

- [ ] Final secrets scan of the full git history
- [ ] **(owner)** Make `Oralino/Oralino.github.io` public
- [ ] Settings → Pages → Source: **GitHub Actions**; re-run the deploy workflow
- [ ] Verify https://oralino.github.io, including a deep link like `/projects/powertray`

## Done

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
- [x] GitHub Pages setup: `base: '/'`, 404.html SPA fallback, deploy workflow (skipped while private)
- [x] Private repo `Oralino/Oralino.github.io` created
- [x] Agents (`design-advisor`, `code-reviewer`, `qa-checker`) and `CLAUDE.md` / `DESIGN.md` / `CONTENT.md`
- [x] Course projects published to GitHub with secrets removed; 4SA3-Project1 and 4WP3-Assignment-1
      recreated with clean history
