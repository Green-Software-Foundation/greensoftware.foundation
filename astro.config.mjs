// @ts-check

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import path from "path";
import { fileURLToPath } from "url";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import astrobook from "astrobook";
import remarkDirective from "remark-directive";
import remarkGfm from "remark-gfm";
import remarkGithubAlerts from "remark-github-alerts";
import remarkMath from "remark-math";
import remarkDirectivesHandler from "./src/plugins/remark-directives-handler.mjs";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

import fs from "fs";

// Build a set of unpublished content URLs to exclude from the sitemap.
// These pages render (for preview) but should not be indexed.
function getUnpublishedUrls() {
  const results = new Set();
  const dirs = [
    { dir: "src/content/articles", prefix: "/articles/" },
    { dir: "src/content/stories", prefix: "/stories/" },
    { dir: "src/content/research", prefix: "/policy/research/" },
  ];
  for (const { dir, prefix } of dirs) {
    if (!fs.existsSync(dir)) continue;
    const entries = fs.readdirSync(dir, { recursive: true });
    for (const entry of entries) {
      const e = entry.toString();
      if (!e.endsWith(".md") && !e.endsWith(".mdx")) continue;
      const content = fs.readFileSync(path.join(dir, e), "utf8");
      const match = content.match(/^---\n([\s\S]*?)\n---/);
      if (match && /published:\s*false/.test(match[1])) {
        const parts = e.split("/");
        const slug = parts.length >= 2 ? parts[parts.length - 2] : parts[0].replace(/\.(md|mdx)$/, "");
        results.add(prefix + slug);
      }
    }
  }
  return results;
}
const unpublishedUrls = getUnpublishedUrls();

// https://astro.build/config
export default defineConfig({
  site: "https://greensoftware.foundation",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        !page.includes("/playground") &&
        !page.includes("/catalogue") &&
        !page.includes("/admin") &&
        ![...unpublishedUrls].some((u) => page.includes(u)),
    }),
    astrobook({
      directory: "src/components",
      subpath: "/playground",
      css: ["./src/styles/global.css"],
      title: "GSF Component Playground",
    }),
  ],
  markdown: {
    remarkPlugins: [remarkGfm, remarkGithubAlerts, remarkMath, remarkDirective, remarkDirectivesHandler],
    rehypePlugins: [
      rehypeKatex,
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
