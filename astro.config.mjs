import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qmilab.com',
  build: {
    assets: '_assets'
  },
  markdown: {
    shikiConfig: {
      defaultTheme: 'github-light'
    }
  }
});
