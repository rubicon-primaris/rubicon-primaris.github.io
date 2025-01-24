// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('build');
const LOCALHOST_URL = 'http://localhost:4321';
const LIVE_URL = 'https://aniradnam.github.io';

let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}


export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    define: {
      'import.meta.env.NOTION_API_KEY': JSON.stringify(process.env.NOTION_API_KEY),
    },
  },
  site: BASE_URL
});