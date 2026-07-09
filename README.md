# Jabal Al-Sheikh Marble — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS. Built from the approved
sitemap/UX plan: Home, Materials (hub + 4 detail pages), Applications (hub +
4 detail pages), Projects (filterable portfolio + detail template), Trade
Program, About, Contact/Quote, and FAQ/Privacy/Terms.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000. For a production build:

```bash
npm run build
npm run start
```

**Note on this build:** this project was hand-written in a sandboxed
environment without access to the npm registry, so `npm install` /
`npm run build` have not been run or verified yet. The code follows standard,
current Next.js 14 / Tailwind / TypeScript conventions throughout, but please
run `npm install && npm run build` as your first step and let me know if
anything needs fixing — I'll resolve it quickly.

## What's real vs. placeholder

- **Logo**: extracted and cleaned from your uploaded logo file (`public/images/logo/`), navy and white variants for light/dark mode.
- **Sintered Stone photos**: your 8 uploaded photos, background-cleaned (`public/images/materials/sintered-stone/`).
- **Marble, Granite, Quartz photography**: not yet supplied — these pages render an elegant stone-toned placeholder (`src/components/ui/placeholder-image.tsx`) instead of a broken image. Swap in real photos by adding entries to the `images` array in `src/data/materials.ts`.
- **Projects**: six sample/placeholder projects demonstrating the portfolio structure (residential/commercial/hospitality, filtering, detail template). Replace with real completed work in `src/data/projects.ts` before launch.
- **Privacy Policy / Terms**: starting templates only, clearly marked as such on the page — have a lawyer review before publishing.
- **Contact form**: fully functional UI, posts to `/api/quote-request` (and `/api/trade-request` for the Trade Program). Both routes currently just log the submission — see the comment at the top of each file for how to wire up email (Resend/SendGrid), a CRM, or a database.
- **Inspiration/Journal**: intentionally left out of this first build, per the approved plan (phase 2, low priority for launch).

## Adding content (this is the "easy to expand later" part)

- **New material**: add an object to the array in `src/data/materials.ts`. The hub and detail page pick it up automatically — no other code changes needed.
- **New application**: same idea, in `src/data/applications.ts`.
- **New project**: same idea, in `src/data/projects.ts`. Put images in `public/images/projects/<project-slug>/`.

## Structure

```
src/
  app/            Routes (App Router) — one folder per URL
  components/
    layout/       Header, footer, mega menu, mobile nav, page intro
    home/         Home page sections
    cards/        Material/Application/Project card components
    forms/        Quote form, trade form, form field primitives
    ui/           Button, Reveal (scroll animation), placeholder image, etc.
    theme/        Dark/light theme provider + toggle
  data/           Content — materials, applications, projects, site config
  types/          Shared TypeScript types
public/
  images/         Logo, hero, and material photography
```

## Design system

- **Colors**: navy (`#1A3753`, from your logo) as the single accent color, plus a warm stone/greige neutral palette — see `tailwind.config.ts`.
- **Type**: Playfair Display (headlines) + Inter (body/UI), loaded via `next/font/google`.
- **Dark/light theme**: `next-themes`, toggle in the header, defaults to light with system preference support.
- **Animation**: Framer Motion — fade-up on scroll (`Reveal`/`StaggerGroup` in `src/components/ui/reveal.tsx`), mega-menu and mobile nav transitions, hero entrance.

## SEO

- Per-page metadata via Next's Metadata API (`generateMetadata` on dynamic routes).
- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically from your data files.
- JSON-LD business schema in the root layout.
- Update `site.url` in `src/data/site.ts` to your real domain before launch.

## Before launch checklist

- [ ] Run `npm install && npm run build` and fix anything that comes up
- [ ] Replace sample projects with real ones
- [ ] Add real photography for Marble, Granite, Quartz
- [ ] Wire up `/api/quote-request` and `/api/trade-request` to email/CRM
- [ ] Have a lawyer review Privacy Policy and Terms
- [ ] Update contact info, address, and social links in `src/data/site.ts`
- [ ] Update `site.url` and add real Open Graph image
- [ ] Deploy (Vercel is the path of least resistance for Next.js)
