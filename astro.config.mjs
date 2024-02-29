import { defineConfig } from 'astro/config';

// import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import alpinejs from "@astrojs/alpinejs";
import lit from "@astrojs/lit";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://iamr2003.github.io',
  integrations: [react(), solidJs(), svelte(), vue(), alpinejs(), lit(), tailwind({
    applyBaseStyles: false,
  })],
  vite: {
    ssr: {
      external: 'lit/decorators.js'
    }
  }
});