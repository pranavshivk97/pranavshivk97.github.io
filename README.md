# Portfolio — pranavshivk97.github.io

Personal portfolio site for Pranav Shivkumar, built with **React + TypeScript + Vite**.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs a single self-contained dist/index.html
```

## Deploy

The site is served by GitHub Pages straight from this branch's root
`index.html` — a single self-contained file produced by the build:

```bash
npm run build   # -> dist/index.html
```

After changing the source, rebuild and copy `dist/index.html` over the
root `index.html`, then commit and push. (A GitHub Actions
build-and-deploy workflow is the natural next step; it needs the
`Workflows` permission on the repo's access token first.)

## Structure

```
src/
  components/   IntroScreen, SignalField, Navbar, Hero, Marquee,
                About, Experience, TrackRecord, Skills, Education, Contact
  data/         All site copy in one typed module (content.ts)
  hooks/        useReveal (scroll-triggered section reveals)
  lib/          smoothScroll (eased in-page navigation)
  App.tsx       Composition + intro state
  index.css     Full design system (custom CSS, no framework)
```
