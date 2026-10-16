# dmuhoro-web

Monorepo containing two independently deployed **Next.js (App Router)** sites:

- **`/portfolio`** — Personal brand site for **Daniel Muhoro**, Full-stack Engineer & Systems Architect — [dmuhoro-portfolio.vercel.app](https://dmuhoro-portfolio.vercel.app)
- **`/business`** — Client-facing studio site for **Muhoro Systems** — [business-beryl-phi.vercel.app](https://business-beryl-phi.vercel.app)

Both apps are static-first, dependency-light, and deploy to Vercel from their own subdirectory.

## Repository structure

```
dmuhoro-web/
├── portfolio/        # Next.js app — personal portfolio (dmuhoro-portfolio project)
├── business/         # Next.js app — Muhoro Systems studio (business project)
├── sprints/          # Per-sprint engineering records
├── DEPLOY.md         # Launch runbook (env vars, Vercel import, DNS, verification, rollback)
├── CHANGELOG.md      # Keep-a-Changelog log of notable changes
└── README.md
```

## Getting started

```bash
git clone https://github.com/dmuhoro/dmuhoro-web.git
cd dmuhoro-web

# install each app independently
npm install --prefix portfolio
npm install --prefix business

# local env
cp portfolio/.env.example portfolio/.env.local
cp business/.env.example business/.env.local

# run
npm --prefix portfolio run dev    # http://localhost:3000
npm --prefix business  run dev    # http://localhost:3001
```

## Sprints

| Sprint | Focus | Status |
|---|---|---|
| 1 | Initial build — all sections, Tailwind v4, Geist font, dark theme | Done |
| 2 | Pre-launch hardening — config-driven contacts, form validation, SEO, a11y, analytics | Done |
| 3 | Production polish — error pages, JSON-LD, DEPLOY.md, proofread, cross-browser compat | Done |
| 4 | Make Selected Work clickable — per-card View Live / View Code CTAs with verified URLs | Done |
| 5 | Update Selected Work links — Kay's Wellness live URL, AfroPay link removed | Done |
| 6 | Vercel build remediation — Root Directory fix for portfolio & business | Done |
| 7 | Repoint Daftari live link to the current deployment (`daftari-amber`) | Done |

Full sprint records live in [`sprints/`](./sprints/). Changelog is in [`CHANGELOG.md`](./CHANGELOG.md).

## Sprint 3 — Production Polish

What was done:

- **Error & edge states** — Branded `not-found.tsx` (404) and `error.tsx` boundary per app, matching the dark theme with amber accent.
- **JSON-LD structured data** — Portfolio: `Person` schema with name, jobTitle, url, sameAs. Business: `Organization` schema with name, description, url. Injected via `<script type="application/ld+json">` in each layout.
- **External link safety** — All external links (GitHub, LinkedIn, WhatsApp) now use `target="_blank" rel="noopener noreferrer"`. Email `mailto:` links remain same-tab.
- **Copy proofread** — All rendered text audited for typos using `aspell`. Zero issues found.
- **Performance** — Both apps have zero images, zero external fonts (Geist via `next/font`), zero blocking scripts. Build-time static generation for all routes except OG image (edge runtime). Expected Lighthouse: 100 across all categories.
- **DEPLOY.md** — Complete launch runbook at repo root with env vars, Vercel import steps, DNS templates, verification checklist, and rollback procedure.

## Sprint 4 — Make Selected Work Clickable

What was done:

- **Per-card CTAs** — Every "Selected Work" project card now renders a "View Live →" (primary amber) or "View Code →" (secondary outlined) button when a URL exists. Cards without a URL render no button at all.
- **Verified links only** — Daftari live URL; EasyTutor, VoteChain, and Kay's Wellness repo URLs. No invented or guessed URLs.
- **Accessible & consistent** — external links open in a new tab with `rel="noopener noreferrer"`; hover/focus states match the site's amber accent; buttons anchor to card bottoms so the grid stays aligned.

## Sprint 5 — Update Selected Work Links

What was done:

- **Kay's Wellness Centre** — added verified live URL (`https://kays-wellness-centre.vercel.app/`); card now shows the primary "View Live →" button.
- **AfroPay Network** — live link removed; both `liveUrl` and `repoUrl` set to `undefined`. Card renders description + stack tags only, no button. No stale `afropay-network-xi.vercel.app` reference remains anywhere in the repo.
- **Untouched** — Daftari, EasyTutor, VoteChain, FundiOS kept as-is.

## Env setup

```bash
cp portfolio/.env.example portfolio/.env.local
cp business/.env.example business/.env.local
```

### Portfolio env vars

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Deployed URL (e.g. `https://dmuhoro.dev`) |
| `NEXT_PUBLIC_EMAIL` | Yes | Contact email |
| `NEXT_PUBLIC_WHATSAPP` | Yes | WhatsApp link (e.g. `https://wa.me/2547XXXXXXXX`) |
| `NEXT_PUBLIC_LINKEDIN` | Yes | LinkedIn profile URL |

### Business env vars

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Deployed URL (e.g. `https://muhorosystems.com`) |
| `NEXT_PUBLIC_EMAIL` | Yes | Business email (used as mailto fallback) |
| `NEXT_PUBLIC_WHATSAPP` | Yes | WhatsApp Business link |
| `NEXT_PUBLIC_FORMSPREE_ID` | No | Formspree form ID (if omitted, form falls back to mailto) |

## Build & lint

```bash
npm --prefix portfolio run lint && npm --prefix portfolio run build
npm --prefix business  run lint && npm --prefix business  run build
```

Both build clean — zero TypeScript errors, zero lint warnings.

## Deploy

See [`DEPLOY.md`](./DEPLOY.md) for the complete launch runbook.

Two Vercel projects serve this monorepo, both connected to GitHub and building from
their app subdirectory:

| Vercel project | Root directory | Production URL |
|---|---|---|
| `dmuhoro-portfolio` | `portfolio` | https://dmuhoro-portfolio.vercel.app |
| `business` | `business` | https://business-beryl-phi.vercel.app |

Pushing to `master` triggers a production deployment of each project. A root-level
`next build` fails (`Couldn't find any pages or app directory`) if a project's Root
Directory is left at `.` — see `DEPLOY.md` section 8.

> Note: an older Vercel project named `dmuhoro-web` (alias
> `dmuhoro-web-sooty.vercel.app`) is a leftover from before the monorepo was split; it
> is **not** used by either live site. Use the two projects above.

## Lighthouse targets

Both apps are architected for perfect Lighthouse scores:
- **Performance**: 100 (no images, no blocking scripts, optimized fonts, static generation)
- **Accessibility**: 100 (branded focus rings, labeled forms, semantic HTML, high contrast)
- **Best Practices**: 100 (no HTTP mixed content, no console errors, secure external links)
- **SEO**: 100 (meta tags, OG image, JSON-LD, robots.txt, sitemap.xml)

Run locally: open Chrome DevTools → Lighthouse tab → Generate report.

## Business name

The studio working name `Muhoro Systems` is defined in a single constant:

```
business/app/config.ts → BUSINESS_NAME
```

This is referenced by the hero eyebrows, page `<title>`, OG tags, OG image, and JSON-LD schema.
To rename, change this one value (and update `NEXT_PUBLIC_SITE_URL` in Vercel).

## Stack

- Next.js 16 + React 19 + TypeScript 5
- Tailwind CSS v4 (CSS-first config)
- Geist font family (next/font)
- `@vercel/analytics`
- Zero backend dependencies — contact form via Formspree with mailto fallback
