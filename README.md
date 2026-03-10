# Green Software Foundation Website

The official website for the [Green Software Foundation](https://greensoftware.foundation), built with Astro 5, React 19, and Tailwind CSS 4.

## Quick start

```bash
npm install
npm run dev          # Dev server on localhost:4322
```

The homepage is at `/` and the component catalogue is at `/catalogue`.

## Data from Notion

Member logos, team data, and stats are fetched from Notion at build time. To fetch fresh data locally:

```bash
# Requires NOTION_API_KEY in .env
npm run fetch-notion
```

On Netlify, the build command (`npm run build:full`) fetches Notion data automatically before building.

If `NOTION_API_KEY` is not set, the build still succeeds using cached or empty fallback data.

## Build & deploy

```bash
npm run build        # Build with cached data (no Notion fetch)
npm run build:full   # Fetch Notion data, then build (used by Netlify)
```

Deployed on Netlify. Node 22 (set in `.nvmrc` and `netlify.toml`).

## Content management (CMS)

The site uses [Sveltia CMS](https://sveltiacms.app) — a modern, Git-based headless CMS. Content editors work through a browser UI at `/admin/`. All changes are committed directly to the Git repository; there is no separate database.

### Logging in

Access is controlled entirely by **GitHub repository permissions**. Anyone with write access to `Green-Software-Foundation/greensoftware.foundation` can log into the CMS — no separate account or invitation needed.

1. Go to `https://greensoftware.foundation/admin/`
2. Click **Login with GitHub**
3. Authorise via GitHub OAuth (first time only)

That's it. If you can push to the repo, you can edit in the CMS.

### Publishing workflow

The CMS is configured to write to the **`dev` branch**. Changes you save in the CMS are committed to `dev` immediately — they appear on any preview/staging environment pointed at that branch, but **not on the live site**.

To publish to the live website:

1. Merge `dev` into `main` (via a pull request or direct merge — project owner's call)
2. Netlify automatically builds and deploys `main`

This means you can make and preview as many CMS edits as you like on `dev` without affecting the live site. When you're ready to go live, do a single merge.

### Local development

Sveltia uses the browser's **File System Access API** for local editing — no proxy server or extra tooling needed.

1. Run `npm run dev` (dev server starts on `localhost:4401`)
2. Open `http://localhost:4401/admin/` in **Chrome or Edge** (Safari and Firefox don't support the File System API)
3. Click **"Work with Local Repository"** and select the project root folder
4. Sveltia reads and writes your local files directly

Changes made this way are not auto-committed — use Git as normal to review and commit them.

### Internationalisation (i18n)

Articles, Research, and Stories all support translations. Pages (policies, terms, etc.) are English-only.

**How translations work in the CMS:**

When you open any article, research paper, or story in the editor, you'll see a locale bar at the top: `EN | JA | PT | ZH`. By default only English is active.

To create a translation:

1. Open the entry in the editor
2. Click the locale tab for the language you want (e.g. `JA`)
3. Sveltia asks if you want to create a translation — confirm
4. Translate the text fields; the structural fields are pre-filled from English

Translations are entirely optional — if you never click `JA` for an article, no Japanese file is created. The English version is always shown as a fallback.

**Why some fields are locked in non-English locales:**

Fields marked as `duplicate` (date, main image, organisations, featured status) can only be edited in English. Their values are automatically copied to all translation files. This prevents inconsistencies — a Japanese article should have the same publication date and associated organisations as its English counterpart.

Fields marked as `translatable` (title, summary, body, alt text) are fully editable per locale.

**File structure on disk:**

Each locale lives in its own subfolder:

```text
src/content/articles/
  en/my-article/index.md     ← English (always present)
  ja/my-article/index.md     ← Japanese (only if translated)
  pt/my-article/index.md     ← Portuguese (only if translated)
```

Images are co-located with the English article and shared across translations.

**Adding a new language in the future:**

1. Open `src/pages/admin/config.yml.ts`
2. Find the `locales:` line and add the new language code:

   ```yaml
   locales: [en, ja, pt, zh, es]
   ```

3. The new locale tab will appear in the CMS editor immediately
4. No other config changes are needed — translations are opt-in

## Announcement banner

The scrolling announcement banner at the top of the site is driven by `src/data/releases.json`. Each entry has a `text` (displayed in the marquee) and an `href` (link target). To update the announcements, edit that file:

```json
[
  {
    "text": "Your announcement text here",
    "href": "/link/to/page/"
  }
]
```

Remove all entries (leave an empty `[]` array) to hide the banner entirely. The component is `src/components/release-banner.astro`.

## How-to guides

- [Articles & Featured Content](docs/how-to-featured-articles.md) — How to write articles, manage frontmatter, and feature content on the homepage carousel
- [Governance & Leadership Page](docs/how-to-governance-leadership.md) — Where governance page data comes from, Notion data sources, and how to keep it updated

## Project documentation

- [CLAUDE.md](CLAUDE.md) — Full project context: architecture, component library, design tokens, data pipeline
- [Component Catalogue](docs/component-catalogue/README.md) — Guide to the parameterised component library
- [Site Rebuild Spec](docs/features/site-rebuild-componentisation.md) — Original feature spec for the Astro rebuild

## Key directories

| Directory | Contents |
| --------- | -------- |
| `src/pages/` | Astro page files |
| `src/components/` | Parameterised Astro components |
| `src/components/react/` | React islands (interactive components) |
| `src/components/ui/` | UI primitives (shadcn/ui + Radix) |
| `src/content/articles/` | Article Markdown files |
| `src/data/` | JSON data files (fetched from Notion) |
| `public/assets/` | Static assets (images, logos, team photos) |
| `scripts/` | Build and data-fetch scripts |
| `docs/` | Project documentation and how-to guides |
