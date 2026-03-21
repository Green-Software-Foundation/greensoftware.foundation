# Content Management (Sveltia CMS)

The site uses [Sveltia CMS](https://sveltiacms.app) — a modern, Git-based headless CMS. Content editors work through a browser UI at `/admin/`. All changes are committed directly to the Git repository; there is no separate database.

## Logging in

Access is controlled entirely by **GitHub repository permissions**. Anyone with write access to the repo can log into the CMS — no separate account or invitation needed.

1. Go to `https://greensoftware.foundation/admin/`
2. Click **Login with GitHub**
3. Authorise via GitHub OAuth (first time only)

That's it. If you can push to the repo, you can edit in the CMS.

## Publishing workflow

The CMS commits directly to the **`main` branch**. New content should be created with `published: false` (the default in the CMS). This means:

1. Content is committed to `main` and deployed immediately
2. Because `published` is `false`, it's hidden from all listings — only accessible via direct URL
3. Review the content on the deploy preview or via its direct URL
4. When you're ready to go live, set `published: true` in the CMS and save

This gives you a preview-able staging workflow without needing a separate branch.

### What `published: false` does

- The page **renders** at its direct URL (so you can preview and share the link)
- The page is **hidden** from all listings, carousels, and index pages
- A **"Draft" banner** appears at the top of the page
- The page has a **`noindex` meta tag** so search engines won't index it
- The page is **excluded from site search** (PageFind)

## Local development

Sveltia uses the browser's **File System Access API** for local editing — no proxy server or extra tooling needed.

1. Run `npm run dev` (dev server starts on `localhost:4322`)
2. Open `http://localhost:4322/admin/` in **Chrome or Edge** (Safari and Firefox don't support the File System API)
3. Click **"Work with Local Repository"** and select the project root folder
4. Sveltia reads and writes your local files directly

Changes made this way are not auto-committed — use Git as normal to review and commit them.

## Internationalisation (i18n)

Articles, Research, and Stories all support translations. Pages (policies, terms, etc.) are English-only.

### How translations work

When you open any article, research paper, or story in the editor, you'll see a locale bar at the top: `EN | JA | PT | ZH`. By default only English is active.

To create a translation:

1. Open the entry in the editor
2. Click the locale tab for the language you want (e.g. `JA`)
3. Sveltia asks if you want to create a translation — confirm
4. Translate the text fields; the structural fields are pre-filled from English

Translations are entirely optional — if you never click `JA` for an article, no Japanese file is created. The English version is always shown as a fallback.

### Why some fields are locked in non-English locales

Fields marked as `duplicate` (date, main image, organisations, featured status) can only be edited in English. Their values are automatically copied to all translation files. This prevents inconsistencies — a Japanese article should have the same publication date and associated organisations as its English counterpart.

Fields marked as `translatable` (title, summary, body, alt text) are fully editable per locale.

### File structure on disk

Each locale lives in its own subfolder:

```text
src/content/articles/
  en/my-article/index.md     ← English (always present)
  ja/my-article/index.md     ← Japanese (only if translated)
  pt/my-article/index.md     ← Portuguese (only if translated)
```

Images are co-located with the English article and shared across translations.

### Adding a new language

1. Open `src/pages/admin/config.yml.ts`
2. Find the `locales:` line and add the new language code:

   ```yaml
   locales: [en, ja, pt, zh, es]
   ```

3. The new locale tab will appear in the CMS editor immediately
4. No other config changes are needed — translations are opt-in
