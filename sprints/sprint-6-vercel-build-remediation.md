# Sprint 6 — Vercel Build Remediation (Root Directory)

**Status:** Done

**Scope:** Unblock the Vercel git auto-deploy that broke after Sprint 5. Infra/config only —
no app source changes (the `business` app code stays untouched by design).

## Symptoms

The Vercel build for `dmuhoro-portfolio` failed on push `ab28d7f`:

```
> Build error occurred
Error: > Couldn't find any `pages` or `app` directory. Please create one under the project root
```

## Root cause

`vercel project inspect dmuhoro-portfolio` showed `Root Directory: .` (repo root). Both apps
live in subdirectories of this monorepo, so a root-level `next build` finds no `app/` and exits
with that exact error. The `business` project had the identical misconfiguration — its build
failed on the same push (`business-dc6079k4i-...` → Error). This contradicted the intended
setup in `DEPLOY.md`, which prescribes Root Directory `portfolio` / `business` respectively.

## Fix applied

```bash
vercel project update dmuhoro-portfolio --root-directory portfolio --yes
vercel project update business --root-directory business --yes
```

Verified via `vercel project inspect --json` → `"rootDirectory": "portfolio"` / `"business"`.

`dmuhoro-web` (a separate project connected to the same repo) built successfully on the same
push and was left untouched.

## Verification (evidence)

- Re-deployed commit `ab28d7f` from git source (`target: production`, repo
  `github.com/dmuhoro/dmuhoro-web`, ref `master`, sha `ab28d7f`) for `dmuhoro-portfolio`:
  build → `READY`.
- Re-deployed the same commit for `business`: build → `READY`.
- Live `https://dmuhoro-portfolio.vercel.app` now serves the Sprint 4/5 cards:
  - `View Live` anchors → `https://daftari-olive.vercel.app`,
    `https://kays-wellness-centre.vercel.app/`
  - `View Code` anchors → `https://github.com/dmuhoro/easytutor`,
    `https://github.com/dmuhoro/Votechain`
  - Zero `href="undefined"`/blank anchors; zero stale `afropay-network-xi.vercel.app` references.
- `DEPLOY.md` updated with a troubleshooting section (section 8) so this can be diagnosed and
  fixed from the CLI in the future.

## Notes / residual

- The `business` production alias is behind Vercel SSO protection (pre-existing project
  setting); the build itself is green, but the alias requires the owner to be signed in.
- No app code was changed in this sprint — this is project configuration on the Vercel side.