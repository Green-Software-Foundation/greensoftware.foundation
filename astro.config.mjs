// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import astrobook from "astrobook";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkDirectivesHandler from "./src/plugins/remark-directives-handler.mjs";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://greensoftware.org",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes("/playground") &&
        !page.includes("/catalogue") &&
        !page.includes("/admin"),
    }),
    astrobook({
      directory: "src/components",
      subpath: "/playground",
      css: ["./src/styles/global.css"],
      title: "GSF Component Playground",
    }),
  ],
  markdown: {
    remarkPlugins: [remarkGfm, remarkDirective, remarkDirectivesHandler],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          properties: { className: ["heading-anchor"], ariaHidden: true, tabIndex: -1 },
          content: {
            type: "element",
            tagName: "span",
            properties: { className: ["heading-anchor-icon"] },
            children: [{ type: "text", value: "#" }],
          },
        },
      ],
    ],
  },
});
