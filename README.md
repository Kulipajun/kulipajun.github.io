# Yuan Li Academic Website

A lightweight academic website built with Astro. The design is intentionally quiet: simple typography, Aarhus University-inspired blue accents, selected publication images, and data-first content that is easy to maintain.

## Edit content

Most personal content lives in:

```text
src/data/site.ts
```

Update that file to change:

- profile text, email, affiliations, and external links;
- navigation labels;
- selected publications;
- education and experience;
- awards, funding, and academic service.

Images live in:

```text
public/images/
```

Use landscape images for publications, preferably around 16:10.

## Project structure

```text
src/
├── data/site.ts          Personal content
├── layouts/              Base HTML shell and metadata
├── pages/                Website routes
└── styles/global.css     Design tokens and responsive styles
public/
├── images/               Portrait and publication images
├── favicon.svg
└── CNAME                 Custom domain for GitHub Pages
```

## Local development

Requires Node.js 22+ and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

Before publishing:

```bash
pnpm build
```

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the Astro site and publishes `dist/` to GitHub Pages. In the repository settings, choose GitHub Actions as the Pages source.

The custom domain is `theliyuan.com` and is preserved through `public/CNAME`.
