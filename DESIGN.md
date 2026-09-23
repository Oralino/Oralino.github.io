# DESIGN.md

Visual source of truth for the portfolio site. The design-advisor agent maintains this file; the main
session implements from it. **Status: outline only. The visual design has not been decided yet.**
Sections marked _TBD_ are filled in during the design phase, before any UI is built.

## Constraints (already decided)

- Stack: Tailwind CSS. Design tokens (colors, fonts, radii, shadows) are defined once in the Tailwind
  theme (`@theme` block in `src/index.css`) and used through utility classes, never as ad-hoc hex values.
- Mobile first, fully responsive, no horizontal scroll at 320px.
- Light and dark themes, following `prefers-color-scheme` with a manual toggle.
- Accessible: WCAG AA contrast, visible focus states, respects `prefers-reduced-motion`.

## Avoid (generic AI-generated patterns)

- Purple/blue gradient hero with a centered "Hi, I'm X 👋" and two pill buttons
- Glassmorphism cards on a blurred gradient background
- Emoji as section icons; generic icon grids of "skills" with percentage bars
- Every section the same centered card grid; identical hover lift + shadow on everything
- Stock "Lorem ipsum"-style filler copy or vague claims ("passionate developer")
- Animations on every element, scroll-jacking, typewriter effects

## Personality / direction

_TBD._ What the site should feel like, and what makes it specific to Oralino (game tooling, desktop
utilities, ML projects, web apps).

## Layout and information architecture

_TBD._ Page list, section order, grid/columns per breakpoint, max content width.

## Typography

_TBD._ Font families (Google Fonts), type scale, weights, line heights, letter spacing for headings.

## Color

_TBD._ Palette tokens for light and dark themes: background, surface, text (primary/secondary/muted),
border, accent, and states. Contrast ratios noted per pair.

## Spacing, radius, elevation

_TBD._ Spacing rhythm (which Tailwind steps), section spacing, corner radius, shadow/border usage.

## Components

_TBD._ Appearance and states for: navigation, project card, project detail page, tags/course badges,
buttons/links, footer, theme toggle.

## Motion

_TBD._ What animates, durations, easing, and the reduced-motion fallback.

## Imagery

_TBD._ Screenshot treatment (framing, aspect ratios, borders), plot/chart images, favicon and social
preview image.
