import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qmilab.com',
  output: 'static',
  build: {
    assets: '_assets'
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});
