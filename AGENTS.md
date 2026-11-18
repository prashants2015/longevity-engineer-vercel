# AGENTS.md — Longevity Engineer marketing site (longevity-engineer-vercel repo)

**Read `AGENTS.shared.md` first:** the rules for every one of the founder's repos ("ship it", tests before every PR, how we work, no secrets, no health data in logs, copy law, add-only migrations, handoff, plain English). It is a copy of the master in `prashants2015/nutrition-companion`: never edit it here (the verify command fails if you do); change the master and run `node scripts/sync-shared-rules.mjs`. This file adds the rules for this repo only, for every coding agent (Claude Code and Codex alike). `CLAUDE.md` imports both.

**Verify command:** `npm run verify`. Run it before every pull request and paste the result. It checks `AGENTS.shared.md`, then builds the site.

## This repo
- Astro, static output (`output: 'static'`). Astro is the only dependency; ask before adding another.
- Needs Node 22.12+ (`.replit` uses `nodejs-22`). `npm install`, then `npm run dev` (localhost:4321), `npm run build` (writes `dist/`), `npm run preview`.
- Vercel deploys `main` to production from GitHub; every branch gets a preview URL. `vercel.json` pins framework Astro, `npm run build`, output `dist`.
- Git fetch/push work from the agent after `gh auth setup-git`; open PRs with `gh pr create`. The user can also push through Replit's Git panel.
- All config (WhatsApp number and prefilled text, CTA label, contact email, founder quote, FAQ) lives in `src/config.ts`. Don't hard-code these in pages.
- Layout: `src/layouts/Base.astro` (head, SEO/OG tags, fonts, analytics), components in `src/components/`, pages in `src/pages/`, styles in `src/styles/global.css`. Sitemap and robots.txt are hand-written endpoints in `src/pages/`; add new pages to `sitemap.xml.ts`.
- Design is frozen: don't restyle. Barlow Condensed (headlines), Barlow (body), JetBrains Mono (labels); colours are the CSS variables at the top of `global.css`.
- No client framework. Plain JS only, and only when needed (the sticky mobile CTA is the one script).
- Keep pages under 300 KB excluding fonts; keep one H1 per page, alt text, visible focus states, AA contrast.
- No secrets or API keys belong in this repo — it's all public, client-side HTML/CSS/JS.
- Keep changes scoped: one small change per branch/PR.
