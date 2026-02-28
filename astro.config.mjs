// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import react from "@astrojs/react";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectivesHandler from "./src/plugins/remark-directives-handler.mjs";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkDirective, remarkDirectivesHandler],
    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
  },
});
