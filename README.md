# dmuhoro-web

Monorepo containing two independently deployed Next.js (App Router) sites:

- **`/portfolio`** — Personal brand site (Daniel Muhoro — Full-stack Engineer & Systems Architect)
- **`/business`** — Client-facing studio site (Muhoro Systems — Software Studio)

## Sprint 2 — Pre-Launch Hardening

What was done this sprint:

- **Config-driven placeholders** — All social links, emails, and Formspree IDs moved to `app/contact.ts` per app, sourced from `.env.local`. Single file to update.
- **Contact form with validation** — Business form has client-side validation, loading state, success/error UI, Formspree POST with mailto fallback.
- **SEO & metadata** — Rich `<title>`, OG tags, Twitter card, OG image (1200×630 via `next/og`), SVG favicon, `robots.txt`, `sitemap.xml` per app.
- **Accessibility** — Global `focus-visible` ring in brand color, WCAG AA verified contrast (amber `#D97706` on `#080808` = 6.5:1), labeled form fields with `role="alert"` on errors.
- **Analytics** — `@vercel/analytics` drop-in on both apps.
- **Zero REPLACE_ME in source** — All placeholders replaced by config/env; fallback markers only appear if env vars are unset.

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

## Build

```bash
cd portfolio && npm run build
cd ../business && npm run build
```

Both build clean — zero TypeScript errors, zero lint warnings.

## Deploy (Vercel)

Each folder is its own Vercel project pointing at this repo:

1. Import the GitHub repo into Vercel twice.
2. **Project A** → Root Directory = `portfolio`
   - Set env vars from the portfolio table above in Vercel dashboard
   - Assign custom domain (e.g. `dmuhoro.dev`)
3. **Project B** → Root Directory = `business`
   - Set env vars from the business table above in Vercel dashboard
   - Assign custom domain (e.g. `muhorosystems.com`)

### DNS records (if using a domain provider other than Vercel)

| Record | Target |
|---|---|
| `CNAME @` or `ALIAS @` | `cname.vercel-dns.com` |
| `CNAME www` | `cname.vercel-dns.com` |

## Business name

The studio working name `Muhoro Systems` is defined in a single constant:

```
business/app/config.ts → BUSINESS_NAME
```

This is referenced by the hero eyebrows, page `<title>`, OG image, and OG tags.
To rename, change this one value (and update `SITE_URL` in `.env.local`).

## Stack

- Next.js 16 + React 19 + TypeScript 5
- Tailwind CSS v4 (CSS-first config)
- Geist font family (next/font)
- `@vercel/analytics`
- Zero backend dependencies — contact form via Formspree with mailto fallback
