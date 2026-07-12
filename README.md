# dmuhoro-web

Monorepo containing two independently deployed sites:

- `/portfolio` — personal brand & career site (dmuhoro.dev or similar)
- `/business`  — client-facing agency/studio site

## Deploy
Each folder is its own Vercel project pointing at this repo:
1. Import repo into Vercel twice.
2. Project A → Root Directory = `portfolio`
3. Project B → Root Directory = `business`
4. Assign custom domain / subdomain to each.
