# dmuhoro-web

Monorepo containing two independently deployed Next.js (App Router) sites:

- **`/portfolio`** — Personal brand site (Daniel Muhoro — Full-stack Engineer & Systems Architect)
- **`/business`** — Client-facing studio site (Muhoro Systems — Software Studio)

## What was built

### Portfolio
Sections: Hero → About → What I Do → Selected Work (6 projects) → Contact/Footer
- Dark theme with deep amber accent (`#D97706`)
- Geist font via `next/font`
- All CTAs use smooth-scroll anchor links
- Contact buttons: Email, WhatsApp, GitHub, LinkedIn — all `REPLACE_ME` placeholders

### Business
Sections: Hero → Services (5 cards) → Process (4-step timeline) → Why This Studio → Contact
- Same dark theme / amber accent as portfolio
- Contact form POSTs to Formspree (placeholder endpoint)
- Business name is exported as `BUSINESS_NAME` constant in `app/config.ts`

## Env setup

```bash
cp portfolio/.env.example portfolio/.env.local
cp business/.env.example business/.env.local
```

Set `NEXT_PUBLIC_FORMSPREE_ID` to your Formspree form ID in each.

## Build

```bash
cd portfolio && npm run build
cd ../business && npm run build
```

Both build clean — zero TypeScript errors, zero lint warnings.

## Deploy (Vercel)

Each folder is its own Vercel project pointing at this repo:

1. Import repo into Vercel twice.
2. Project A → Root Directory = `portfolio`
3. Project B → Root Directory = `business`
4. Assign custom domain / subdomain to each.

## Placeholders to replace before going live

Search for `REPLACE_ME` across both apps:

| Placeholder | Where | What to put |
|---|---|---|
| `mailto:REPLACE_ME` | Portfolio Contact | Your email address |
| `https://wa.me/REPLACE_ME` | Portfolio + Business | Your WhatsApp link |
| `https://linkedin.com/in/REPLACE_ME` | Portfolio Contact | Your LinkedIn URL |
| `https://formspree.io/f/REPLACE_ME` | Business Contact form | Your Formspree endpoint |

## Stack

- Next.js 16 + React 19 + TypeScript 5
- Tailwind CSS v4 (CSS-first config)
- Geist font family
- Zero backend dependencies — static export ready
