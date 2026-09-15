# Changelog

All notable changes to this project are tracked here. Format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Sprint 6 — Vercel build remediation (Fixed)

- **Root cause** — the `dmuhoro-portfolio` Vercel project was building from the repo root (`.`) instead of `portfolio/`, so every git push failed with `Couldn't find any pages or app directory`. The `business` project had the identical misconfiguration (same failed build on the same push).
- **Fixed** — set the project Root Directory to the app directory for both projects:
  - `dmuhoro-portfolio` → `portfolio`
  - `business` → `business`
  - Business app code untouched; this is a Vercel project setting, aligned with what `DEPLOY.md` already prescribed.
- **Verified** — production builds of commit `ab28d7f` for both projects turn `Ready`; the live portfolio serves the Sprint 4/5 cards (verified `View Live`/`View Code` anchors, no stale or blank hrefs).
- **Runbook** — `DEPLOY.md` gained a troubleshooting section (section 8) covering the symptom, cause, CLI fix, and verification.

### Sprint 5 — Update Selected Work Links

- **Kay's Wellness Centre** — added verified `liveUrl` (`https://kays-wellness-centre.vercel.app/`); card now renders the primary **"View Live →"** button (replaces the Sprint 4 repo fallback).
- **AfroPay Network** — live link removed; `liveUrl` and `repoUrl` explicitly `undefined`. Card renders description + stack tags only, no button. No stale reference to the old deploy remains anywhere in the repo.

### Sprint 4 — Make Selected Work Clickable

- **Featured** — portfolio "Selected Work" cards are no longer static. Project entries gained optional `liveUrl`/`repoUrl` fields, and each card now renders a primary **"View Live →"** button (amber, full emphasis) or a secondary **"View Code →"** button (outlined, less emphasis) when the corresponding URL exists. Cards without either URL render no button — no greyed-out placeholder.
- **Verified live links added** — Daftari (`https://daftari-olive.vercel.app`).
- **Verified repo fallbacks added** — EasyTutor (`github.com/dmuhoro/easytutor`), VoteChain (`github.com/dmuhoro/Votechain`), Kay's Wellness Centre marketing repo (`github.com/dmuhoro/kays-wellness-centre`).
- **Left link-free** — AfroPay Network and FundiOS (no confirmed URL; deliberate, explicit `undefined`).
- **Accessibility & consistency** — all new CTAs use `target="_blank" rel="noopener noreferrer"`, match the site's amber accent on hover, and share the `focus-visible` ring pattern. Buttons anchor to the card bottom (`mt-auto`), keeping the grid height-consistent across the row.
- **Housekeeping** — removed two pre-existing unused-var lint warnings (`error.tsx`, `opengraph-image.tsx`) so the portfolio lints fully clean.

## History (pre-Sprint-4, summarized)

Records for Sprints 1–3 live in the root [`README.md`](./README.md):

- **Sprint 1** — Initial build of both apps (all sections, Tailwind v4, Geist font, dark theme).
- **Sprint 2** — Pre-launch hardening (config-driven contacts, form validation, SEO, a11y, analytics).
- **Sprint 3** — Production polish (error pages, JSON-LD, DEPLOY.md, proofread, cross-browser compat).