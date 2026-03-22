/**
 * Custom remark plugin that transforms remark-directive nodes into HTML elements.
 *
 * remark-directive parses :::syntax but doesn't render anything — this plugin
 * converts parsed directive nodes into hast (HTML AST) elements with appropriate
 * classes for styling.
 *
 * Supported directives:
 *
 *   LAYOUT
 *   :::note / :::warning / :::tip      — callout blocks
 *   :::full-width                       — break-out-of-column image wrapper
 *   :::float-right / :::float-left      — floating image with text wrap
 *   :::columns                          — side-by-side content
 *   :::figure{caption="..."}            — image with explicit caption
 *
 *   EMBEDS (leaf directives — double colon)
 *   ::youtube{id="VIDEO_ID"}                          — responsive YouTube embed
 *   ::vimeo{id="VIDEO_ID"}                            — responsive Vimeo embed
 *   ::google-slides{id="PRESENTATION_ID"}             — Google Slides embed
 *   ::google-docs{id="DOCUMENT_ID"}                   — Google Docs embed
 *   ::google-sheets{id="SPREADSHEET_ID"}              — Google Sheets embed
 *   ::google-drive{id="FILE_ID"}                      — Google Drive file preview
 *   ::pdf{src="/path/to/file.pdf" title="..."}        — PDF embed
 *
 *   INTERACTIVE
 *   ::button{href="..." label="..."}                  — styled CTA button
 *   :::card                                           — bordered content card
 *   ::link-card{href="..." title="..." description="..." image="..."} — rich link card
 *
 *   AUTO-READING
 *   ::article{slug="article-slug"}                    — auto-reads title & summary from frontmatter
 */
import { visit } from "unist-util-visit";
import { h } from "hastscript";
import fs from "fs";
import path from "path";

/** Read an article's frontmatter by slug and return { title, summary } */
function readArticleFrontmatter(slug) {
  const bases = [
    path.resolve("src/content/articles/en", slug, "index.md"),
    path.resolve("src/content/articles", slug, "index.md"),
  ];
  for (const filePath of bases) {
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      const match = content.match(/^---\n([\s\S]*?)\n---/);
      if (!match) continue;
      const fm = match[1];
      const title = fm.match(/^title:\s*["']?(.+?)["']?\s*$/m)?.[1] || slug;
      const summary = fm.match(/^summary:\s*["']?(.+?)["']?\s*$/m)?.[1] || "";
      const teaserText = fm.match(/^teaserText:\s*["']?(.+?)["']?\s*$/m)?.[1] || "";
      return { title, summary: teaserText || summary };
    } catch {
      continue;
    }
  }
  return { title: slug, summary: "" };
}

/** Extract a YouTube video ID from various URL formats */
function extractYouTubeId(input) {
  if (!input) return null;
  // Already a bare ID (no dots or slashes)
  if (/^[\w-]{11}$/.test(input)) return input;
  try {
    const url = new URL(input);
    if (url.hostname.includes("youtu.be")) return url.pathname.slice(1).split("/")[0];
    return url.searchParams.get("v") || url.pathname.split("/").pop();
  } catch {
    return input;
  }
}

export default function remarkDirectivesHandler() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        const data = node.data || (node.data = {});
        const name = node.name;
        const attributes = node.attributes || {};

        // ── Callout blocks: :::note, :::warning, :::tip ───────────────────
        if (["note", "warning", "tip"].includes(name)) {
          data.hName = "div";
          data.hProperties = {
            class: `callout callout-${name}`,
            role: "note",
          };
          return;
        }

        // ── Full-width image wrapper ──────────────────────────────────────
        if (name === "full-width") {
          data.hName = "div";
          data.hProperties = { class: "full-width" };
          return;
        }

        // ── Float image wrappers ──────────────────────────────────────────
        if (name === "float-right" || name === "float-left") {
          data.hName = "div";
          data.hProperties = { class: name };
          return;
        }

        // ── Side-by-side columns ──────────────────────────────────────────
        if (name === "columns") {
          data.hName = "div";
          data.hProperties = { class: "columns" };
          return;
        }

        // ── Figure with explicit caption ──────────────────────────────────
        if (name === "figure") {
          data.hName = "figure";
          data.hProperties = { class: "figure" };
          if (attributes.caption) {
            data.hProperties["data-caption"] = attributes.caption;
          }
          return;
        }

        // ── YouTube embed ─────────────────────────────────────────────────
        if (name === "youtube") {
          const videoId = extractYouTubeId(attributes.id || attributes.url);
          if (!videoId) return;
          const start = attributes.start || "";
          const srcUrl = `https://www.youtube-nocookie.com/embed/${videoId}${start ? `?start=${start}` : ""}`;
          data.hName = "div";
          data.hProperties = { class: "embed embed-video" };
          data.hChildren = [
            h("iframe", {
              src: srcUrl,
              title: attributes.title || "YouTube video",
              frameborder: "0",
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen: true,
              loading: "lazy",
            }),
          ];
          // Add caption if provided
          if (attributes.caption) {
            data.hChildren.push(
              h("p", { class: "embed-caption" }, attributes.caption),
            );
          }
          return;
        }

        // ── Vimeo embed ───────────────────────────────────────────────────
        if (name === "vimeo") {
          const videoId = attributes.id;
          if (!videoId) return;
          data.hName = "div";
          data.hProperties = { class: "embed embed-video" };
          data.hChildren = [
            h("iframe", {
              src: `https://player.vimeo.com/video/${videoId}?dnt=1`,
              title: attributes.title || "Vimeo video",
              frameborder: "0",
              allow: "autoplay; fullscreen; picture-in-picture",
              allowfullscreen: true,
              loading: "lazy",
            }),
          ];
          if (attributes.caption) {
            data.hChildren.push(
              h("p", { class: "embed-caption" }, attributes.caption),
            );
          }
          return;
        }

        // ── Google Slides embed ───────────────────────────────────────────
        if (name === "google-slides") {
          const id = attributes.id;
          if (!id) return;
          data.hName = "div";
          data.hProperties = { class: "embed embed-slides" };
          data.hChildren = [
            h("iframe", {
              src: `https://docs.google.com/presentation/d/${id}/embed?start=false&loop=false&delayms=3000`,
              title: attributes.title || "Google Slides presentation",
              frameborder: "0",
              allowfullscreen: true,
              loading: "lazy",
            }),
          ];
          if (attributes.caption) {
            data.hChildren.push(
              h("p", { class: "embed-caption" }, attributes.caption),
            );
          }
          return;
        }

        // ── Google Docs embed ─────────────────────────────────────────────
        if (name === "google-docs") {
          const id = attributes.id;
          if (!id) return;
          data.hName = "div";
          data.hProperties = { class: "embed embed-document" };
          data.hChildren = [
            h("iframe", {
              src: `https://docs.google.com/document/d/${id}/pub?embedded=true`,
              title: attributes.title || "Google Docs document",
              frameborder: "0",
              loading: "lazy",
            }),
          ];
          if (attributes.caption) {
            data.hChildren.push(
              h("p", { class: "embed-caption" }, attributes.caption),
            );
          }
          return;
        }

        // ── Google Sheets embed ───────────────────────────────────────────
        if (name === "google-sheets") {
          const id = attributes.id;
          if (!id) return;
          data.hName = "div";
          data.hProperties = { class: "embed embed-document" };
          data.hChildren = [
            h("iframe", {
              src: `https://docs.google.com/spreadsheets/d/${id}/pubhtml?widget=true&headers=false`,
              title: attributes.title || "Google Sheets spreadsheet",
              frameborder: "0",
              loading: "lazy",
            }),
          ];
          if (attributes.caption) {
            data.hChildren.push(
              h("p", { class: "embed-caption" }, attributes.caption),
            );
          }
          return;
        }

        // ── Google Drive file preview ─────────────────────────────────────
        if (name === "google-drive") {
          const id = attributes.id;
          if (!id) return;
          data.hName = "div";
          data.hProperties = { class: "embed embed-document" };
          data.hChildren = [
            h("iframe", {
              src: `https://drive.google.com/file/d/${id}/preview`,
              title: attributes.title || "Google Drive file",
              frameborder: "0",
              allow: "autoplay",
              loading: "lazy",
            }),
          ];
          if (attributes.caption) {
            data.hChildren.push(
              h("p", { class: "embed-caption" }, attributes.caption),
            );
          }
          return;
        }

        // ── PDF embed ─────────────────────────────────────────────────────
        if (name === "pdf") {
          const src = attributes.src;
          if (!src) return;
          data.hName = "div";
          data.hProperties = { class: "embed embed-pdf" };
          data.hChildren = [
            h("iframe", {
              src: src,
              title: attributes.title || "PDF document",
              frameborder: "0",
              loading: "lazy",
            }),
            h(
              "p",
              { class: "embed-pdf-fallback" },
              h("a", { href: src, target: "_blank", rel: "noopener" }, attributes.title || "Download PDF"),
            ),
          ];
          if (attributes.caption) {
            data.hChildren.push(
              h("p", { class: "embed-caption" }, attributes.caption),
            );
          }
          return;
        }

        // ── CTA button ────────────────────────────────────────────────────
        if (name === "button") {
          const href = attributes.href || attributes.url || "#";
          const label = attributes.label || "Learn more";
          const variant = attributes.variant || "primary"; // primary | outline
          data.hName = "div";
          data.hProperties = { class: `embed-button embed-button-${variant}` };
          data.hChildren = [
            h("a", { href, class: `embed-btn embed-btn-${variant}` }, label),
          ];
          return;
        }

        // ── Content card ──────────────────────────────────────────────────
        if (name === "card") {
          data.hName = "div";
          data.hProperties = { class: "embed-card" };
          return;
        }

        // ── Rich link card ────────────────────────────────────────────────
        if (name === "link-card") {
          const href = attributes.href || attributes.url || "#";
          const title = attributes.title || href;
          const description = attributes.description || "";
          const image = attributes.image || "";
          data.hName = "a";
          data.hProperties = {
            class: "embed-link-card",
            href,
            target: "_blank",
            rel: "noopener",
          };
          const children = [];
          if (image) {
            children.push(
              h("div", { class: "embed-link-card-image" }, [
                h("img", { src: image, alt: title, loading: "lazy" }),
              ]),
            );
          }
          children.push(
            h("div", { class: "embed-link-card-body" }, [
              h("span", { class: "embed-link-card-title" }, title),
              ...(description
                ? [h("span", { class: "embed-link-card-description" }, description)]
                : []),
              h("span", { class: "embed-link-card-url" }, href.replace(/^https?:\/\//, "").split("/")[0]),
            ]),
          );
          data.hChildren = children;
          return;
        }

        // ── Article link (auto-reads frontmatter) ─────────────────────────
        if (name === "article") {
          const slug = attributes.slug;
          if (!slug) return;
          const { title, summary } = readArticleFrontmatter(slug);
          const href = `/articles/${slug}/`;
          data.hName = "a";
          data.hProperties = {
            class: "embed-link-card embed-article-card",
            href,
          };
          data.hChildren = [
            h("div", { class: "embed-link-card-body" }, [
              h("span", { class: "embed-link-card-title" }, title),
              ...(summary
                ? [h("span", { class: "embed-link-card-description" }, summary)]
                : []),
              h("span", { class: "embed-link-card-url" }, "greensoftware.foundation"),
            ]),
          ];
          return;
        }

        // ── Fallback: convert unrecognised directives back to plain text ──
        // This prevents remark-directive from swallowing things like
        // `:2024` in "ISO/IEC 21031:2024" or other colon-prefixed text.
        if (node.type === "textDirective") {
          // Reconstruct the original text including any children
          // (e.g. `:name[label]{attrs}` — children hold the label)
          let text = `:${name}`;
          if (node.children && node.children.length > 0) {
            const label = node.children.map((c) => c.value || "").join("");
            if (label) text += `[${label}]`;
          }
          const attrs = node.attributes || {};
          const attrStr = Object.entries(attrs)
            .filter(([, v]) => v != null && v !== "")
            .map(([k, v]) => `${k}="${v}"`)
            .join(" ");
          if (attrStr) text += `{${attrStr}}`;

          // Replace this node with a plain text node
          node.type = "text";
          node.value = text;
          delete node.children;
          delete node.data;
          delete node.name;
          delete node.attributes;
          return;
        }
      }
    });
  };
}
