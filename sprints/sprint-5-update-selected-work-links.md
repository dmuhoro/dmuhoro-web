# Sprint 5 — Update Selected Work Links

**Status:** Done

**Scope:** Follow-up to Sprint 4. Two changes only — nothing else touched.

## What was done

### 1. Kay's Wellness Centre — add live link

The `repoUrl` fallback from Sprint 4 was replaced with a confirmed live URL:

```ts
liveUrl: "https://kays-wellness-centre.vercel.app/"
```

Per the Sprint 4 button logic, the card now renders the primary **"View Live →"** button.

### 2. AfroPay Network — remove the live link for now

The current live deploy was being taken down. The entry now explicitly holds no link:

```ts
liveUrl: undefined,
repoUrl: undefined,
```

Per the Sprint 4 card logic this means AfroPay shows no button — description and stack tags
only, same treatment as FundiOS. The stale string `afropay-network-xi.vercel.app` was grepped
across the entire repo (config, sitemap, JSON-LD `sameAs`, commit tree) and confirmed absent.

### 3. Left untouched

- **Daftari** — already correct, no change.
- **EasyTutor** — still in progress, keeps the `repoUrl` fallback only.
- **VoteChain** — no change; a separate audit is happening in that repo first.
- **FundiOS** — remains link-free.

## Evidence

- `npm run build` — zero errors.
- `npm run lint` — zero warnings.
- Rendered HTML audit (production `next start`):
  - Kay's Wellness card renders one `View Live →` anchor pointing to
    `https://kays-wellness-centre.vercel.app/` with `target="_blank" rel="noopener noreferrer"`.
  - AfroPay card renders no button and no dead link anywhere on the page —
    zero `href="undefined"`, blank, or stale `afropay-network-xi.vercel.app` references.
- `rg "afropay-network-xi\.vercel\.app"` across the repo → zero matches.

## Out of scope / deferred

- No changes to the `business` app.
- No new copy beyond the button state changes.
- No placeholder links for AfroPay or VoteChain — no button is correct until each has a real,
  confirmed URL.