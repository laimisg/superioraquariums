import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://superioraquariums.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
  image: { layout: 'constrained' },
  build: { inlineStylesheets: 'auto' },
});
