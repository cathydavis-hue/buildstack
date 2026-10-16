import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({ site: 'https://buildstacklist.com', integrations: [sitemap()], trailingSlash: 'always' });
