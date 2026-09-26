# Longevity Engineer marketing site

- Astro, static output (`output: 'static'`). Astro is the only dependency; ask before adding another.
- Needs Node 22.12+ (`.replit` uses `nodejs-22`). `npm install`, then `npm run dev` (localhost:4321), `npm run build` (writes `dist/`), `npm run preview`.
- Vercel deploys `main` to production from GitHub; every branch gets a preview URL. `vercel.json` pins framework Astro, `npm run build`, output `dist`.
- Git fetch/push don't work from the agent here; the user pushes through Replit's Git panel.
- All config (WhatsApp number and prefilled text, CTA label, contact email, founder quote, FAQ) lives in `src/config.ts`. Don't hard-code these in pages.
- Layout: `src/layouts/Base.astro` (head, SEO/OG tags, fonts, analytics), components in `src/components/`, pages in `src/pages/`, styles in `src/styles/global.css`. Sitemap and robots.txt are hand-written endpoints in `src/pages/`; add new pages to `sitemap.xml.ts`.
- Design is frozen: don't restyle. Barlow Condensed (headlines), Barlow (body), JetBrains Mono (labels); colours are the CSS variables at the top of `global.css`.
- No client framework. Plain JS only, and only when needed (the sticky mobile CTA is the one script).
- Keep pages under 300 KB excluding fonts; keep one H1 per page, alt text, visible focus states, AA contrast.
- No secrets or API keys belong in this repo — it's all public, client-side HTML/CSS/JS.
- Keep changes scoped: one small change per branch/PR.
