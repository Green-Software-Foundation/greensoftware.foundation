/**
 * Custom remark plugin that transforms remark-directive nodes into HTML elements.
 *
 * remark-directive parses :::syntax but doesn't render anything — this plugin
 * converts parsed directive nodes into hast (HTML AST) elements with appropriate
 * classes for styling.
 *
 * Supported directives:
 *   :::note / :::warning / :::tip      — callout blocks
 *   :::full-width                       — break-out-of-column image wrapper
 *   :::float-right / :::float-left      — floating image with text wrap
 *   :::columns                          — side-by-side content
 *   :::figure{caption="..."}            — image with explicit caption
 */
import { visit } from "unist-util-visit";
import { h } from "hastscript";

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

        // Callout blocks: :::note, :::warning, :::tip
        if (["note", "warning", "tip"].includes(name)) {
          data.hName = "div";
          data.hProperties = {
            class: `callout callout-${name}`,
            role: "note",
          };
          return;
        }

        // Full-width image wrapper
        if (name === "full-width") {
          data.hName = "div";
          data.hProperties = { class: "full-width" };
          return;
        }

        // Float image wrappers
        if (name === "float-right" || name === "float-left") {
          data.hName = "div";
          data.hProperties = { class: name };
          return;
        }

        // Side-by-side columns
        if (name === "columns") {
          data.hName = "div";
          data.hProperties = { class: "columns" };
          return;
        }

        // Figure with explicit caption
        if (name === "figure") {
          data.hName = "figure";
          data.hProperties = { class: "figure" };
          // If there's a caption attribute, we'll add it as a figcaption
          // This is handled via CSS ::after or we can append a node
          if (attributes.caption) {
            data.hProperties["data-caption"] = attributes.caption;
          }
          return;
        }
      }
    });
  };
}
