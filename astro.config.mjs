import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Update site URL for your Cloudflare Pages deployment
  // Replace with your actual Cloudflare Pages URL
  site: 'https://your-site.pages.dev',
  // Remove base path for Cloudflare Pages (serves from root)
  // base: '/personal-website', // Only needed for GitHub Pages
});
