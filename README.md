# iBookshelf — Website

The marketing website for **iBookshelf**, an iOS app for cataloging and
organizing your personal book collection. Visitors land here, learn about the
app, and tap through to the App Store.

A single-page site built with [Next.js](https://nextjs.org) (App Router,
TypeScript) and configured for **static export**, so it can be hosted anywhere —
Vercel, Netlify, GitHub Pages, Cloudflare Pages, or any static file host.

The look follows the iBookshelf warm "reading sanctuary" design system (cream
paper, amber accent, ink-brown text, Nunito + Lora). The full design spec lives
in [`DESIGN.md`](DESIGN.md) — read it before changing styles.

## Quick start

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the dev server at http://localhost:3000
```

Open http://localhost:3000 in your browser. Edits hot-reload automatically.

## Build for production

```bash
npm run build
```

This generates a fully static site in the `out/` folder. Upload the contents of
`out/` to any static host, or connect the repo to Vercel/Netlify for automatic
deploys.

## Editing the site — start here

Almost everything you'll want to change lives in one file:

### `site.config.ts`

| What to change | Field |
| --- | --- |
| App Store link | `appStoreUrl` |
| Google Play link | `playStoreUrl` |
| Flip from "Coming soon" to live | `released` (set to `true`) |
| Description / hero subtitle | `description` |
| Contact email | `email` |
| Your domain (for SEO) | `url` |
| Feature cards | the `features` array |
| "How it works" steps | the `steps` array |
| Books shown in the hero shelf | the `shelfBooks` array |

> **When the app goes live:** paste your real App Store and Google Play URLs into
> `appStoreUrl` / `playStoreUrl` and change `released` to `true`. Both store
> badges become working links and the "Coming soon" note disappears.

## Project structure

```
app/
  layout.tsx        Root layout + fonts (Nunito/Lora) + SEO metadata
  page.tsx          The one-page site (hero, features, how-it-works, CTA, footer)
  globals.css       All styles (design tokens at the top under :root)
  privacy/page.tsx  Privacy policy (required for the App Store)
  terms/page.tsx    Terms of use
components/
  StoreButtons.tsx  App Store + Google Play badges (handle Coming soon state)
  Icons.tsx         Inline SVG stroke icons + store logos
public/
  favicon.svg       Browser tab icon
site.config.ts      ← edit your links & copy here
DESIGN.md           Full design system spec
```

## Customizing the look

Design tokens (colors, shadows, radii, fonts) are CSS variables at the top of
[`app/globals.css`](app/globals.css) under `:root`. Change `--amber` to shift the
whole accent. Keep within the warm palette — see [`DESIGN.md`](DESIGN.md).

The hero "shelf" is built from generative CSS book covers (no artwork needed) —
edit the `shelfBooks` array in [`site.config.ts`](site.config.ts) to change which
books appear, their colors, and authors.

## Legal pages

`privacy` and `terms` contain **starter** text. Review them with a legal
professional and update them before publishing — Apple requires a working
privacy policy URL when you submit an app to the App Store.
