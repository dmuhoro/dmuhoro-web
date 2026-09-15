# Sprint 4 — Make Selected Work Clickable

**Status:** Done

**Scope:** Every project card in the portfolio's "Selected Work" section now lets a
visitor click through to the real, live thing. No more static text-only cards.

## Goal

The single highest-leverage change to the portfolio at the time: what lets the site
"speak before I talk."

## What was done

### 1. Data model extension

Each project entry in `portfolio/components/selected-work.tsx` now supports two optional
link fields:

```
liveUrl?: string;  // link to the deployed product, if one exists
repoUrl?: string;  // fallback link to GitHub source
```

Cards with neither field render with no button at all.

### 2. Verified link values

Only URLs confirmed against the sprint spec were used. No invented or guessed URLs.

- **Daftari** — `liveUrl: "https://daftari-olive.vercel.app"`
- **AfroPay Network** — no link (no confirmed URL at time of sprint; omitted both fields)
- **EasyTutor** — `repoUrl: "https://github.com/dmuhoro/easytutor"` (React Native, not
  web-deployed — no live URL)
- **VoteChain** — `repoUrl: "https://github.com/dmuhoro/Votechain"`
- **Kay's Wellness Centre** — `repoUrl: "https://github.com/dmuhoro/kays-wellness-centre"` (marketing repo only; the multi-tenant backend is private/pre-launch and deliberately not linked)
- **FundiOS** — no live URL or public repo yet; both fields left undefined

### 3. Card behavior

- `liveUrl` present → primary amber **"View Live →"** button (`target="_blank" rel="noopener noreferrer"`).
- `repoUrl` present (no `liveUrl`) → secondary outlined **"View Code →"** button, same link
  behavior — less emphasis because a working repo isn't the same proof as a working product.
- Neither present → no button. No disabled/greyed-out CTA, so link-free cards stand on their
  content rather than drawing attention to what's missing.
- Button anchored to the card's bottom via `mt-auto` on a `flex flex-col` card, so grid
  heights stay consistent regardless of description length.

### 4. Visual QA

- Hover/focus states match the site's existing amber accent (`hover:bg-brand-hover`,
  `hover:bg-surface-hover`) plus a `focus-visible` amber outline ring shared with the rest of the site.
- Button padding scaled down (`px-4 py-2`, `text-sm`) to fit the card context without
  disrupting the Sprint 1 layout.

## Evidence

- `npm run build` — zero errors, all routes static.
- `npm run lint` — zero warnings.
- Rendered HTML audit: every project anchor resolves to a verified URL; zero `href="undefined"`,
  `href="#"`, or blank hrefs.
- Link-free cards (AfroPay, FundiOS) render name, description, stack tags, and status only — no button node.

## Out of scope / deferred

- No new projects added, no copy changes beyond the button labels.
- No changes to the `business` app.
- FundiOS left link-free until a real deployment source exists.

## Follow-up

- **Sprint 5** — Kay's Wellness Centre gets a `liveUrl` (replacing the repo fallback);
  AfroPay's link state made explicitly undefined.