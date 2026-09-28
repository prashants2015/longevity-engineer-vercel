import { defineConfig } from 'astro/config';
import { SITE_TEMPLATE } from './src/config.ts';

export default defineConfig({
  site: 'https://www.longevity-engineer.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [
    {
      // The homepage is whichever template SITE_TEMPLATE picks. Routing it here, rather than
      // importing both templates into an index page, keeps the other template's CSS out of /.
      name: 'home-template',
      hooks: {
        'astro:config:setup': ({ injectRoute }) => {
          injectRoute({ pattern: '/', entrypoint: `./src/pages/${SITE_TEMPLATE}.astro` });
        },
      },
    },
  ],
});
