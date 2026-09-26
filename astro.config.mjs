import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.longevity-engineer.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
});
