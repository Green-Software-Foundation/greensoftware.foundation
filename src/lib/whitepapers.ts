/**
 * Load whitepaper metadata and content from local markdown files.
 *
 * Whitepapers live in src/content/whitepapers/ and are fetched from the
 * upstream GitHub repo via scripts/fetch-whitepapers.cjs.
 */

export interface Whitepaper {
  /** URL-safe slug derived from the filename */
  slug: string;
  /** Original filename (without .md extension) used as the display title */
  title: string;
  /** Raw markdown content */
  content: string;
}

/** Convert a filename (without extension) to a URL-safe slug */
function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Load all whitepapers from the local src/content/whitepapers/ directory.
 * Uses Vite's import.meta.glob to read files at build time.
 */
export async function fetchWhitepapers(): Promise<Whitepaper[]> {
  const modules = import.meta.glob("/src/content/whitepapers/*.md", {
    query: "?raw",
    import: "default",
  });

  const papers: Whitepaper[] = [];
  for (const [path, loader] of Object.entries(modules)) {
    const filename = path.split("/").pop()!;
    const title = filename.replace(/\.md$/, "");
    const slug = toSlug(title);
    const content = (await loader()) as string;
    papers.push({ slug, title, content });
  }

  return papers.sort((a, b) => a.title.localeCompare(b.title));
}
