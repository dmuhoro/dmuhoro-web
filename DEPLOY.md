# Deploy Runbook

> Launch-day steps for `dmuhoro-web` — two Next.js sites from one repo to Vercel.

---

## 1. Prerequisites

- GitHub repo: `github.com/dmuhoro/dmuhoro-web`
- Vercel account connected to GitHub
- Custom domains purchased (or placeholder `*.vercel.app` domains for testing)
- Formspree account with a form created (for the Business contact form)

---

## 2. Environment variables

Set these in the Vercel dashboard for each project (Settings → Environment Variables). Do **not** commit them.

### Portfolio (`/portfolio`)

| Variable | Source | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your domain | `https://dmuhoro.dev` (or actual domain) |
| `NEXT_PUBLIC_EMAIL` | Your email | Inbox for contact button |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp link | Full URL: `https://wa.me/2547XXXXXXXX` |
| `NEXT_PUBLIC_LINKEDIN` | LinkedIn profile | Full URL to your profile |

### Business (`/business`)

| Variable | Source | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your domain | `https://muhorosystems.com` (or actual domain) |
| `NEXT_PUBLIC_EMAIL` | Your email | Used as mailto fallback if Formspree fails |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp Business link | Full URL: `https://wa.me/2547XXXXXXXX` |
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree dashboard | Form ID from your Formspree form (omit to use mailto fallback) |

---

## 3. Vercel import

### Project A — Portfolio

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the `dmuhoro/dmuhoro-web` repo
3. **Root Directory**: `portfolio`
4. **Framework Preset**: Next.js (auto-detected)
5. **Environment Variables**: Paste all portfolio vars from section 2
6. Click **Deploy**

### Project B — Business

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the same `dmuhoro/dmuhoro-web` repo
3. **Root Directory**: `business`
4. **Framework Preset**: Next.js (auto-detected)
5. **Environment Variables**: Paste all business vars from section 2
6. Click **Deploy**

Both builds will complete in under 2 minutes each. No build commands or output directory overrides needed — defaults work.

---

## 4. Custom domains

Once Vercel assigns you a `*.vercel.app` URL, add your custom domain:

1. Project → Settings → Domains
2. Enter your domain (e.g. `dmuhoro.dev` or `muhorosystems.com`)
3. Vercel will show you the required DNS records

Typical DNS setup (at your registrar/DNS provider):

| Use case | Record type | Name | Value |
|---|---|---|---|
| Apex domain (`example.com`) | `A` | `@` | `76.76.21.21` (Vercel's anycast IP) |
| Apex domain (alternative) | `ALIAS` | `@` | `cname.vercel-dns.com` |
| Subdomain (`www.example.com`) | `CNAME` | `www` | `cname.vercel-dns.com` |

Replace `example.com` with your actual domain. Propagation may take 5–30 minutes.

---

## 5. Verify launch readiness

After deployment:

- [ ] Visit both sites — homepage loads without errors
- [ ] Contact form submits and sends to Formspree (test with a real message)
- [ ] WhatsApp links open the WhatsApp app on mobile
- [ ] `mailto:` links open the default email client
- [ ] OG image renders — check via [opengraph.xyz](https://www.opengraph.xyz/) or Twitter Card Validator
- [ ] 404 page loads on a nonexistent path (e.g. `/nonexistent`)
- [ ] Lighthouse scores: 90+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO
- [ ] Console has zero errors in Chrome DevTools

---

## 6. Rollback

If a deployment breaks the live site:

1. Go to Vercel dashboard → Project → Deployments
2. Find the last known-good deployment (green checkmark)
3. Click the three dots (`...`) → **Promote to Production**
4. Vercel swaps the traffic in seconds — no rebuild needed

For a full rollback to a specific git commit:

```bash
git revert <bad-commit-hash>
git push origin master
```

Vercel will auto-deploy the revert.

---

## 7. Renaming BUSINESS_NAME or SITE_URL

The business name is defined in a single file:

```
business/app/config.ts → BUSINESS_NAME
```

The site URLs are defined per-app:

```
portfolio/app/config.ts   → SITE_URL
business/app/config.ts    → SITE_URL
```

To rename:
1. Update the config file(s)
2. Update the corresponding `NEXT_PUBLIC_SITE_URL` in Vercel environment variables
3. Deploy

That's it — the name flows into the page `<title>`, OG tags, OG image, hero eyebrow, and JSON-LD structured data from those two sources.
