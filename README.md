# Yuan Li — Academic Website

A lightweight academic website built with Astro. The design uses an editorial
layout, an Aarhus University-inspired blue palette, and data-first content files
that are easy to maintain.

## The one file you will edit most

All personal content lives in:

```text
src/data/site.ts
```

Update that file to change:

- name, email, research statement, and affiliations;
- navigation and external links;
- selected research projects;
- education and experience;
- funding, scholarships, and academic service.

Project images live in `public/images/`. Replace a placeholder image while
keeping the same filename, or update its path in `src/data/site.ts`.

## Project structure

```text
src/
├── components/       Reusable sections and content patterns
├── data/site.ts      Personal content and project data
├── layouts/          HTML shell, metadata, and shared behavior
├── pages/            Website routes
└── styles/global.css Design tokens and responsive styles
public/
├── images/           Portrait and research images
└── CNAME             Custom domain
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

The workflow in `.github/workflows/deploy.yml` builds and publishes the site to
GitHub Pages when changes are pushed to `master`.

In the repository settings, choose **GitHub Actions** as the Pages source. The
custom domain remains `theliyuan.com`.

## Replacing placeholder research

Each item in `researchProjects` includes:

```ts
{
  title: "Project title",
  summary: "Short research story",
  image: "/images/project-image.jpg",
  tags: ["HCI", "XR"],
  links: [{ label: "Paper", url: "https://..." }]
}
```

Use a concise title, a two- or three-sentence summary, and a landscape image.
