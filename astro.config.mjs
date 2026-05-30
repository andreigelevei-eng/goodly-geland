import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://obzornik.online',
  output: 'static',
  integrations: [sitemap()],
});
