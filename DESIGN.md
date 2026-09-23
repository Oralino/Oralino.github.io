# DESIGN.md

Visual source of truth for the portfolio site. The design-advisor agent maintains this file; the main
session implements from it. **Status: Approved by the owner (2026-09-23).** Changes go through design-advisor.

Adapted from Mono Deploy by chef on designmd.ai (MIT).

## Constraints (already decided)

- Stack: Tailwind CSS. Design tokens (colors, fonts, radii, shadows) are defined once in the Tailwind
  theme (`@theme` block in `src/index.css`) and used through utility classes, never as ad-hoc hex values.
- Mobile first, fully responsive, no horizontal scroll at 320px.
- Light and dark themes, following `prefers-color-scheme` with a manual toggle.
- Accessible: WCAG AA contrast, visible focus states, respects `prefers-reduced-motion`.
- No flash of the wrong theme on load: the theme class is set on `<html>` before first paint.
- Text hierarchy comes from size, weight and the two text tokens, never from opacity on text.
- Projects only. No personal details in any UI, metadata or image: no real name, photo, email, phone,
  location, work history, education, skills list or resume. Identity is the handle "Oralino" (confirmed); GitHub is
  the only external profile link (see `CONTENT.md` → About).

## Avoid (generic AI-generated patterns)

- Purple/blue gradient hero with a centered "Hi, I'm X 👋" and two pill buttons
- Glassmorphism cards on a blurred gradient background
- Emoji as section icons; generic icon grids of "skills" with percentage bars
- Every section the same centered card grid; identical hover lift + shadow on everything
- Stock "Lorem ipsum"-style filler copy or vague claims ("passionate developer")
- Animations on every element, scroll-jacking, typewriter effects
- Terminal/hacker costume: green-on-black, blinking cursors, fake shell prompts, `> whoami` headings
- Game-UI pastiche: pixel fonts, HUD frames, rarity glows. The game angle lives in the content, not the chrome
- Device/browser mockups, drop shadows on screenshots, numbered section eyebrows ("01 / Work")
- `font-bold` (700), gradients, textures, blurred/translucent header

## Personality / direction

An engineer's spec sheet: monochrome, flat, precisely labelled, with one orange signal colour for
anything you can act on. Technical identifiers (course codes like `4AI3`, repo names, tech tags, counts)
are set in mono so they read as identifiers, which suits a body of work made of Windows utilities, game
stat calculators, scrapers and ML pipelines. Left-aligned, dense but calm; the projects are the content,
and no decoration competes with their screenshots and plots. The orange nods to "legendary" item rarity
in the MMOs these tools serve, without any game styling.

## Layout and information architecture

Pages: `/` Home; `/projects/:slug` Project detail; `*` Not found (h1 "Page not found", the requested path
in mono, link home).

Home, in order (anchor ids in brackets):
1. **Hero**: handle, tagline, project-facts spec list, GitHub action. The top edge of the first featured
   card must be visible in a 1366×768 laptop viewport.
2. **Selected work** (`#work`): the 3 featured projects.
3. **Projects** (`#projects`): remaining personal projects as a card grid.
4. **Coursework** (`#coursework`): remaining course projects as a ruled list, labelled as course projects.
5. **Footer**.

Featured projects are not repeated in sections 3–4.

Container: `mx-auto w-full max-w-5xl px-4 sm:px-6` (1024px max). Prose measure: `max-w-2xl`.

| Area | < 640 | sm 640 | md 768 | lg 1024 |
|---|---|---|---|---|
| Hero | stacked | stacked | stacked | 12 cols: intro 7, spec list 5, bottom-aligned |
| Selected work | 1 col, media on top | same | card is 12 cols: media 7, text 5 | same |
| Projects grid | 1 col | 2 cols | 2 cols | 3 cols, `gap-4` |
| Coursework rows | stacked | stacked | code col `w-20` + content + chevron | same |
| Detail page | header, spec, media, text | same | same | 12 cols: main 8, sticky spec aside 4 |

Section spacing: `py-12 md:py-16`. Hero: `pt-10 pb-10 md:pt-16 md:pb-12`. Sticky header offset on
anchors: `scroll-mt-20`.

## Typography

- `--font-sans`: **Inter** (variable), weights 400 / 500 / 600 only.
- `--font-mono`: **JetBrains Mono** (variable), weights 400 / 500. Used for: course codes, tech chips,
  repo names, counts, spec-list labels, the site URL, file names in captions. Never for headings or prose.
- Loading (self-hosted vs Google Fonts `display=swap`) is a main-session decision; fallbacks below.
- Numbers use `tabular-nums`.

| Role | Class | Size / line height | Weight | Tracking |
|---|---|---|---|---|
| Hero h1 ("Oralino") | `text-4xl sm:text-5xl lg:text-display` | 36 / 48 / 64px, lh 1–1.1 | 600 | -0.04em |
| Detail h1 | `text-2xl sm:text-title` | 24 / 32px | 600 | -0.03em |
| Section h2 | `text-2xl` | 24 / 32 | 600 | `tracking-tight` |
| Featured card title | `text-lg` | 18 / 28 | 600 | normal |
| Card / row title | `text-base` | 16 / 24 | 600 | normal |
| Lead (tagline, detail summary) | `text-lg` | 18 / 28 | 400 | normal |
| Body prose | `text-base leading-relaxed` | 16 / 1.625 | 400 | normal |
| Card summary, feature bullets | `text-sm leading-relaxed` | 14 / 1.625 | 400 | normal |
| Nav, labels, buttons | `text-label` / `text-sm` | 13 / 20, 14 / 20 | 500 | normal |
| Chips, meta, captions | `text-xs` | 12 / 16 | 400–500 | normal |

## Color

Tokens swap by theme; components use `bg-surface`, `text-muted`, `border-border` etc. and never need
`dark:` except for rare image cases. Set `color-scheme` to match the theme.

```css
@custom-variant dark (&:where(.dark, .dark *));
@theme {
  --color-bg: #fafafa;          --color-surface: #ffffff;       --color-raised: #f2f2f2;
  --color-text: #171717;        --color-muted: #666666;
  --color-border: #e5e5e5;      --color-border-strong: #d4d4d4;
  --color-accent: #c2410c;      --color-accent-hover: #9a3412;  --color-accent-fg: #ffffff;
  --font-sans: 'Inter Variable', Inter, ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono Variable', 'JetBrains Mono', ui-monospace, 'Cascadia Mono', Consolas, monospace;
  --text-label: 0.8125rem;  --text-label--line-height: 1.25rem;
  --text-title: 2rem;       --text-title--line-height: 2.5rem;  --text-title--letter-spacing: -0.03em;
  --text-display: 4rem;     --text-display--line-height: 1;     --text-display--letter-spacing: -0.04em;
}
.dark {
  --color-bg: #0a0a0a;          --color-surface: #111111;       --color-raised: #1a1a1a;
  --color-text: #ededed;        --color-muted: #a1a1a1;
  --color-border: #333333;      --color-border-strong: #525252;
  --color-accent: #fb923c;      --color-accent-hover: #fdba74;  --color-accent-fg: #0a0a0a;
}
```

Accent is one hue (orange, approved by the owner), darker in light theme and lighter in dark theme. It is reserved for primary
buttons, inline links, focus rings and text selection. Everything else is monochrome. No status colours
(nothing on the site has a status).

Contrast (WCAG 2.x ratios; AA needs 4.5 for text, 3 for focus indicators):

| Pair | Light: on bg / surface / raised | Dark: on bg / surface / raised |
|---|---|---|
| text | 17.2 / 17.9 / 16.0 | 16.9 / 16.1 / 14.9 |
| muted | 5.5 / 5.7 / 5.1 | 7.7 / 7.3 / 6.7 |
| accent (as text, focus ring) | 5.0 / 5.2 / 4.6 | 8.8 / 8.3 / 7.7 |
| accent-fg on accent | 5.2 | 8.8 |
| accent-fg on accent-hover | 7.3 | 11.7 |

Borders are decorative (controls are identified by their text labels). Reference: Mono Deploy's `#888888`
would be 3.5:1 on white, so it is not used.

## Spacing, radius, elevation

- Default Tailwind 4px scale. Padding/margin/gap steps in use: `1 2 3 4 5 6 8 10 12 16 20 24`; don't
  introduce others. Control heights: `h-6` chips, `h-10` buttons/icon buttons.
- Inside components: `gap-2` chips, `gap-3` title-to-summary, `gap-4` grids and stacks, `p-5 sm:p-6` cards.
- Section header to content: `mb-6`. Between rows in a list: `divide-y divide-border`, rows `py-5`.
- Radius (Tailwind defaults): `rounded-md` 6px controls and chips; `rounded-lg` 8px cards and image
  frames. No `rounded-full` (no pills, no avatars).
- Elevation: flat. No shadows anywhere. Depth = `bg` → `surface` (cards) → `raised` (chips, media
  panels, button hover), each with a 1px `border-border`.

## Components

**Header**: sticky, `h-14 sm:h-16`, `bg-bg border-b border-border`, container inner. Left: wordmark
"Oralino" (`text-sm font-semibold`, links home). Right: section links Work, Projects, Coursework (`md:`
and up; ghost, `text-label`); GitHub (ghost, icon + "GitHub" from `sm:`, icon-only with
`aria-label="Oralino on GitHub"` below); theme toggle. A "Skip to content" link appears on focus.

**Theme toggle**: ghost icon button `size-10`, 16px sun/moon icon (shows the theme you'll switch to),
`aria-label="Switch to dark theme"` / "light". Initial value from `prefers-color-scheme`; manual choice
persists in `localStorage`. The theme swap itself is instant (no colour transition).

**Buttons** (base `inline-flex h-10 items-center gap-2 rounded-md px-4 text-sm font-medium`):
- Primary: `bg-accent text-accent-fg hover:bg-accent-hover`. At most one per view.
- Secondary: `border border-border-strong text-text hover:bg-raised`.
- Ghost: `text-muted hover:text-text` (nav, back link, icon buttons).
- Inline link in prose: `text-accent underline underline-offset-4 decoration-1 hover:decoration-2`.
- External destinations end with a 14px arrow-up-right icon. All focusable elements:
  `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent`.

**Chips**: tech tag `h-6 px-2 rounded-md bg-raised border border-border font-mono text-xs text-muted`.
Course badge: same box but `bg-transparent border-border-strong text-text font-medium` (outlined, not
filled), text is the code only (`4AI3`) with `aria-label="Course 4AI3"`. Cards show at most 4 tech chips,
then `+N` in the same style.

**Section header**: `flex items-baseline justify-between border-b border-border pb-3 mb-6`; h2 left, mono
`text-xs text-muted` count right ("6 projects").

**Spec list** (shared primitive, `dl`): rows of mono `text-xs text-muted` label + sans `text-sm text-text`
value, `gap-y-2`, label column `w-24`. Used in the hero and the detail aside.

**Hero**: projects-first, left-aligned, no photo, no background art. h1 "Oralino"; lead tagline in
`text-muted`, `max-w-xl`, one line on desktop (owner TODO in `CONTENT.md`, project-focused). Spec list of
project facts, three rows: `projects` "6 personal · 8 coursework" (counts derived from `projects.ts`,
never hard-coded), `built with` the 4–5 most common tech tags across projects, `source` mono
`github.com/Oralino` link. One action: primary "View GitHub profile ↗". At lg the spec list sits in the
right 5 columns, bottom-aligned with the action; on mobile it follows the tagline. Budget: header 64 +
hero ≈ 330px at lg, so the Selected work header and first card top land well above 768px.

**Featured project card** (Selected work): `bg-surface border rounded-lg overflow-hidden`, whole card is
one link (stretched link on the title). Media panel: `aspect-[16/10] bg-raised p-4 sm:p-6`, image
`size-full object-contain`, `border-b` (mobile) / `border-r` (md+). Text side `p-5 sm:p-6`: meta line
(course badge or mono "Personal project"), title `text-lg font-semibold`, summary `text-sm text-muted`,
tech chips, then mono repo name (`PowerTrayOptimizer`) and "View project →" in `text-accent`. With no
image yet, the card drops the media panel and runs full width; it must still look finished.

**Project grid card** (Projects): `bg-surface border border-border rounded-lg p-5 sm:p-6 flex flex-col`,
text only (no thumbnails, so missing screenshots never show). Order: mono repo name `text-xs text-muted`,
title, summary `text-sm text-muted`, chips pinned bottom with `mt-auto pt-4`. Hover: `border-border-strong`
and the trailing arrow moves `translate-x-0.5`. No lift, no shadow.

**Coursework row**: `divide-y` list inside the section. Course badge in a fixed left column, then title +
one-line summary, tech as plain mono muted text (`React Native · Express`), chevron right on md+. Whole
row is a link; hover `bg-surface`. Reads like a transcript, deliberately unlike the card grid.

**Project detail page**: ghost back link "← All projects". Header: meta line (course badge + course name,
or "Personal project"), h1, lead summary `max-w-2xl`, actions (primary = release/download if it exists,
else "View repository"; secondary = repo when a release is primary). Spec aside (spec list): Type, Course,
Stack (chips), Repository (mono), Release. Main: media, then "Overview" prose, then "Features" as a list
with muted en-dash markers, `max-w-2xl`. Private repos show "Repository: private" in muted text, no link.

**Footer**: `border-t border-border py-10`, one row (stacks below `sm`): left "Oralino" `text-sm
font-semibold` + mono `text-xs text-muted` "oralino.github.io"; right GitHub ghost link. Below it
`text-xs text-muted`: "© 2026 Oralino · Built with React + Tailwind".

## Motion

- Animated: colour, background and border on interactive elements (`transition-colors duration-150
  ease-out`); the arrow on card/row hover (`motion-safe:transition-transform duration-150`).
- Anchor scrolling is smooth only under `motion-safe` (`scroll-behavior: smooth` in a
  `prefers-reduced-motion: no-preference` query).
- Nothing else: no page transitions, scroll reveals, skeleton shimmer, animated theme swap or hover lift.
- Reduced motion: transforms and smooth scroll are off; colour transitions stay (they aren't motion).

## Imagery

- **Screenshots** (desktop apps): capture the app window only, including its title bar, no wallpaper, no
  OS shadow, same theme across a project where possible. Web apps: browser viewport at 1440×900 (16:10),
  no browser chrome. Export PNG/WebP at 2x, max 2000px wide. Check every capture for personal details
  (usernames in paths, account names, emails, taskbar) and crop or blur them.
- **Plots** (matplotlib ROC curves, confusion matrices): keep their white background; never filter or
  recolour them (it changes the data encoding). They sit in the `bg-raised` frame so white reads as a
  figure, not a glare.
- **Detail page media**: `figure` with the image at natural aspect, `w-full h-auto border border-border
  rounded-lg`, explicit `width`/`height`, first image eager, rest `loading="lazy"`. Caption
  `text-xs text-muted` below. Extra images: 1 col, `md:grid-cols-2 gap-4`. Each image links to the
  full-size file; no carousel or lightbox.
- Alt text states what the image shows ("ROC curves: Random Forest AUC vs Fisher LDA"), not "screenshot".
- **Favicon**: SVG, 32×32 `rounded-md` square in `accent` with "O" in `accent-fg`, JetBrains Mono 500
  (its squared-oval O reads as a mark, not a plain letter); plus a 180px PNG apple-touch icon.
- **Social preview**: 1200×630 PNG, dark theme: `#0a0a0a` background, "Oralino" 64px Inter 600
  `#ededed`, tagline `#a1a1a1`, `oralino.github.io` in mono `#fb923c`, 64px margins. Nothing else.
