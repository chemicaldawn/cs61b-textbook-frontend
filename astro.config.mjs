// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  markdown: {
      shikiConfig: {
          themes: {
            light: 'one-dark-pro',
            default: 'one-dark-pro',
            dark: 'gruvbox-dark-medium'
          } 
      },
  },

  integrations: [mdx(), svelte()],
});