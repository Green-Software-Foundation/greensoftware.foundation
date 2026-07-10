# Site Search (PageFind)

The site uses [PageFind](https://pagefind.app/) for static site search. PageFind indexes the built HTML at build time and serves a chunked index client-side — no server required.

## How It Works

1. After `astro build`, `pagefind --site dist` runs automatically (configured in `package.json`)
2. PageFind indexes all HTML pages that have the `data-pagefind-body` attribute
3. The search UI is a custom React component at `src/components/react/search-dialog.tsx` using PageFind's JS API (not its default UI)
4. The search dialog is lazy-loaded via `React.lazy()` in `navbar.tsx` — PageFind JS only loads when search is opened

## Triggering Search

- Click the search icon in the navbar
- Press `Cmd+K` (Mac) or `Ctrl+K` (Windows/Linux)

## Indexed Pages (Opt-In Model)

Only pages with `data-pagefind-body` are indexed. Currently:

| Page template | File |
|--------------|------|
| Individual article pages (English, published) | `src/pages/articles/[...slug].astro` |
| Individual story pages (published) | `src/pages/stories/[slug].astro` |
| Individual research paper pages (published) | `src/pages/policy/research/[slug].astro` |
| Assembly detail pages | `src/pages/assemblies/[slug].astro` |
| About page | `src/pages/about/index.astro` |
| Contact page | `src/pages/contact/index.astro` |

**Not indexed:** homepage, listing/index pages, standards pages, navigation, footer, CTA banners.

Chrome elements (navbar, footer, CTA banner, newsletter signup) have `data-pagefind-ignore` to exclude them even within indexed pages.

## Search Behaviour

- **Multi-word queries** default to phrase search (wrapped in quotes); falls back to OR search if no phrase results
- **Single-word queries** use standard search
- Results show title, content type badge, and highlighted excerpt
- Content type badges: `article` (articles), `story` (member stories), `research` (policy & research papers), `page` (everything else)

## Testing Locally

PageFind needs a built index to work:

1. Run `npm run build` to generate the index in `dist/pagefind/`
2. Copy `dist/pagefind/` to `public/pagefind/`
3. Run `npm run dev` — search uses the copied index

The `public/pagefind/` directory is gitignored.

## Adding a Page to Search

Add `data-pagefind-body` to the content wrapper in the page template. Ensure chrome elements (navbar, footer) have `data-pagefind-ignore`.

## Vite Compatibility

The PageFind import uses `new Function("return import('/pagefind/pagefind.js')")` to bypass Vite's import analysis, which would otherwise try to bundle it at build time.
