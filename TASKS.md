# TASKS.md

Development tracker. Move items between sections as they progress; newest completed items go on top.
Owner-only items are marked **(owner)**.

## Current

- [ ] **(owner)** Fill in the About section of `CONTENT.md`: display name, one-line intro, program and
      graduation year, short bio, public email, LinkedIn, and whether to include a resume PDF
- [ ] **(owner)** Decide whether private coursework (Landmarks, Drug Info App, Dining Philosophers,
      4AI3 Assignments) appears on the site without repo links, or is left out
- [ ] **(owner)** Decide whether the job search agents go on GitHub / the site

## Next

- [ ] Design phase: `design-advisor` proposes direction; fill in `DESIGN.md` (personality, layout,
      typography, color, spacing, components, motion, imagery); owner approves
- [ ] Define design tokens in `src/index.css` (`@theme`) from the approved `DESIGN.md`
- [ ] Root layout (header, footer, theme toggle) in `src/components/layout/`
- [ ] Home page sections in `src/components/sections/`
- [ ] Project detail page (replace placeholder `ProjectPage`)
- [ ] Collect screenshots (see `CONTENT.md` → Screenshots and media) into `src/assets/projects/<slug>/`
- [ ] Favicon, social preview image, page titles/meta descriptions per route
- [ ] Accessibility and responsive pass (keyboard, focus, contrast, reduced motion, 320px width)

## Launch

- [ ] Final secrets scan of the full git history
- [ ] **(owner)** Make `Oralino/Oralino.github.io` public
- [ ] Settings → Pages → Source: **GitHub Actions**; re-run the deploy workflow
- [ ] Verify https://oralino.github.io, including a deep link like `/projects/powertray`

## Done

- [x] Scaffold React 19 + Vite 8 + TypeScript + Tailwind v4 + React Router v8; oxlint + Prettier
- [x] Typed project data (`src/data/projects.ts`) for all projects with public repos; placeholder pages
      proving routing (home, project detail, 404)
- [x] GitHub Pages setup: `base: '/'`, 404.html SPA fallback, deploy workflow (skipped while private)
- [x] Private repo `Oralino/Oralino.github.io` created
- [x] Agents (`design-advisor`, `code-reviewer`, `qa-checker`) and `CLAUDE.md` / `DESIGN.md` / `CONTENT.md`
- [x] Course projects published to GitHub with secrets removed; 4SA3-Project1 and 4WP3-Assignment-1
      recreated with clean history
