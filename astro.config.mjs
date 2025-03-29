// @ts-check
import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";
import tailwindcss from "@tailwindcss/vite";
import {visualizer} from "rollup-plugin-visualizer";

import {remarkModifiedTime} from "./remark-modified-time.mjs";
import {remarkReadingTime} from "./remark-reading-time.mjs";

export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), react()],
  prefetch: true,

  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: {type: "text", value: " 🔗"},
        },
      ],
    ],
    remarkPlugins: [remarkModifiedTime, remarkReadingTime],
  },

  vite: {
    plugins: [
      tailwindcss(),
      visualizer({
        emitFile: true,
        filename: "stats.html",
      }),
    ],
  },
});
