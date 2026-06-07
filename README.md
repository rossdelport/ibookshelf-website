# iBookshelf — Website

The marketing website for **iBookshelf**, an iOS app for cataloging and
organizing your personal book collection. Visitors land here, learn about the
app, and tap through to the App Store.

Built with [Next.js](https://nextjs.org) (App Router, TypeScript) and configured
for **static export**, so it can be hosted anywhere — Vercel, Netlify, GitHub
Pages, Cloudflare Pages, or any static file host.

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
| Flip from "Coming Soon" to live | `released` (set to `true`) |
| Tagline & description | `tagline`, `description` |
| Contact email | `email` |
| Your domain (for SEO) | `url` |
| Feature cards | the `features` array |

> **When the app goes live:** paste your real App Store URL into `appStoreUrl`
> and change `released` to `true`. Every download button across the site will
> automatically switch from the disabled "Coming Soon" state to a working link.

## Project structure

```
app/
  layout.tsx        Root layout + SEO metadata
  page.tsx          The landing page (hero, features, CTA, footer)
  globals.css       All styles (theme variables at the top)
  privacy/page.tsx  Privacy policy (required for the App Store)
  terms/page.tsx    Terms of use
components/
  DownloadButton.tsx  App Store button (handles Coming Soon state)
  Icons.tsx           Inline SVG icons
public/
  favicon.svg       Browser tab icon
site.config.ts      ← edit your links & copy here
```

## Customizing the look

Theme colors and spacing are CSS variables at the top of
[`app/globals.css`](app/globals.css) (look for `:root`). Change `--color-accent`
to re-brand the whole site.

The phone mockup on the homepage is pure CSS. To use a real screenshot instead,
drop an image into `public/` and replace the `.mockup` block in
[`app/page.tsx`](app/page.tsx) with an `<img>`.

## Legal pages

`privacy` and `terms` contain **starter** text. Review them with a legal
professional and update them before publishing — Apple requires a working
privacy policy URL when you submit an app to the App Store.
