import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { defineCollection } from 'astro:content';
import type { Loader } from 'astro/loaders';

// Policy texts in docs/*.md, rendered by /privacy and /terms.
// Before rendering: drop a leading HTML comment (editor notes), lift the "# Title"
// out so the page renders the only H1, and rewrite host-less links like
// "http:///terms" (from the doc export) to "/terms".
const legalDocs = (slugs: string[]): Loader => ({
  name: 'legal-docs',
  load: async ({ config, store, renderMarkdown, watcher }) => {
    const pathFor = (slug: string) => fileURLToPath(new URL(`docs/${slug}.md`, config.root));

    const loadOne = async (slug: string) => {
      let body = await readFile(pathFor(slug), 'utf8');
      body = body.replace(/^\s*<!--[\s\S]*?-->\s*/, '');
      const title = body.match(/^# +(.+)\n/)?.[1].trim();
      if (title) body = body.slice(body.indexOf('\n') + 1);
      body = body.replace(/\]\(https?:\/\/\//g, '](/');
      store.set({ id: slug, data: { title }, body, rendered: await renderMarkdown(body) });
    };

    await Promise.all(slugs.map(loadOne));

    watcher?.add(slugs.map(pathFor));
    watcher?.on('change', (changed) => {
      const slug = slugs.find((s) => pathFor(s) === changed);
      if (slug) loadOne(slug);
    });
  },
});

export const collections = {
  legal: defineCollection({ loader: legalDocs(['privacy', 'terms']) }),
};
