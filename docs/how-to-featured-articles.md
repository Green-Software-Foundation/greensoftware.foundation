# How To: Articles & Featured Content

This guide explains how to add articles to the site, how the frontmatter schema works, and how to feature articles on the homepage carousel.

## Where articles live

All English articles are Markdown files in:

```
src/content/articles/en/
```

Each file is a single `.md` file. The filename becomes part of the URL — e.g. `green-ai-position-paper.md` renders at `/articles/en/green-ai-position-paper/`.

Translated articles go in language subdirectories (e.g. `src/content/articles/zh/`).

## Frontmatter schema

Every article must have YAML frontmatter between `---` fences. The schema is defined in `src/content.config.ts`.

### Required fields

| Field     | Type   | Description                                                  |
| --------- | ------ | ------------------------------------------------------------ |
| `title`   | string | Article title. Displayed as the page heading and in listings |
| `date`    | date   | Publication date in `YYYY-MM-DD` format                      |
| `summary` | string | A longer summary (1–3 sentences). Used as the description in the featured carousel and article listings |

### Optional fields

| Field               | Type            | Description                                                                                          |
| ------------------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| `teaserText`        | string          | A shorter teaser (1 sentence). Falls back from `summary` if not provided                             |
| `mainImage`         | string          | Path to the article hero image, e.g. `/assets/articles/my-article/main.png`                          |
| `mainImageAlt`      | string          | Alt text for the hero image                                                                          |
| `description`       | string          | Meta description for SEO (if different from summary)                                                 |
| `lang`              | string          | Language code. Defaults to `"en"`. Set to e.g. `"zh"` for Chinese translations                       |
| `featured`          | boolean         | Set to `true` to include this article in the homepage Featured Content carousel                       |
| `organizations`     | array of string | Organisation names associated with this article (see rules below)                                    |
| `additionalOrgCount`| number          | Number of additional member organisations not listed by name (shows as "+N more members" in carousel) |
| `authors`           | array of object | Article authors — each with `fullName`, optional `role`, `company`, `photo`, `socialMedia`            |
| `translators`       | array of object | Translators — same structure as authors                                                              |
| `originBlogName`    | string          | If republished, the name of the original blog                                                        |
| `publishedOriginUrl`| string          | URL of the original publication                                                                      |

### Example frontmatter

```yaml
---
title: "Green AI Position Paper"
date: "2025-05-13"
summary: "In a series of workshops in 2024, members of the GSF Green AI Committee defined Green AI, assessed its environmental impacts across the AI lifecycle, and outlined key actions for AI sustainability."
teaserText: "Building a greener AI future through lifecycle accountability, standards, and collaboration."
mainImage: "/assets/articles/green-ai-position-paper/main.png"
featured: true
organizations:
  - "Accenture"
  - "Microsoft"
  - "NTT DATA"
  - "Siemens"
  - "Google"
  - "UBS"
additionalOrgCount: 6
---
```

## Adding a new article

1. Create a new `.md` file in `src/content/articles/en/`. Use a URL-friendly kebab-case filename.
2. Add the required frontmatter (`title`, `date`, `summary`).
3. If the article has a hero image, place it in `public/assets/articles/<article-slug>/main.png` and reference it in `mainImage`.
4. Write the article body in Markdown below the frontmatter.
5. The article will automatically appear in the articles listing page.

## Featuring an article on the homepage

The homepage "Featured Content" carousel shows up to 10 articles, sorted newest first. To feature an article:

1. Add `featured: true` to the article's frontmatter.
2. Add `organizations` listing the relevant member organisations (see rules below).
3. Optionally add `additionalOrgCount` if there are more participants than you're listing.

The carousel is rendered by `src/components/article-carousel.astro` (wrapper) and `src/components/react/article-carousel.tsx` (React island with Embla Carousel).

The data query lives in `src/pages/index.astro`:

```js
const featuredArticles = allArticles
  .filter(a => a.data.featured && a.data.lang === "en")
  .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
  .slice(0, 10)
```

### What displays on each carousel card

- **Image** — from `mainImage` (falls back to the hero illustration)
- **Organisation logos** — resolved automatically from `logos.json` by case-insensitive name matching
- **"+N more members"** — from `additionalOrgCount`
- **Title** — from `title`
- **Description** — from `summary` (falls back to `teaserText`)
- **Link** — auto-generated from the article filename

## Organisation and logo rules

Organisation logos are resolved automatically. The `organizations` array in frontmatter contains organisation names as strings. At build time, these are matched (case-insensitive) against `src/data/logos.json` — which is fetched from Notion and contains all current member logos.

### Which organisations to list

Follow these rules when deciding which organisations to include in the `organizations` array:

1. **If only a few organisations are involved** (e.g. 1–5), list all of them — even if some are general members rather than steering members. There's no need to filter when the list is short.

2. **If many organisations are involved** (e.g. a workshop with 15+ participants), list only the **steering members who were active at the time the article was written**. Use `additionalOrgCount` for the remaining participants.

3. **Fairness principle** — don't cap the visible organisations arbitrarily. If there are 6 steering members, show all 6. The `additionalOrgCount` count is for non-steering participants, not for capping the visible list.

4. **Use the organisation's official member name** — the name must match what's in `logos.json` for the logo to resolve. Check `src/data/logos.json` for exact spellings. Common names:
   - `"Accenture"` (not "Accenture plc")
   - `"NTT DATA"` (not "NTT Data" or "NTT DATA Group")
   - `"UBS"` (not "UBS AG")
   - `"Google"` (not "Alphabet" or "Google LLC")
   - `"Microsoft"` (not "Microsoft Corporation")

5. **If a logo doesn't resolve** — the organisation name will display as text instead. This happens when an organisation has left the foundation or wasn't a member.

### Current steering members (for reference)

Check the current steering member list in `src/data/steering-members.json`. As of writing, steering members include: Accenture, Cisco, Google, NTT DATA, Siemens, UBS. Microsoft was previously a steering member and may appear on older articles.

### Logo display behaviour

- Logos render at `h-4` (16px height) with `max-w-[60px]` to keep wide wordmarks (like NTT DATA and Siemens) from dominating the card
- Logos flex-wrap if there are many, with `gap-x-3 gap-y-1.5` spacing
- If no logo is found, the org name renders as text
- The "+N more members" label appears after the logos when `additionalOrgCount` is set

## Removing an article from featured

Simply remove the `featured: true` line from the article's frontmatter (or set it to `false`). The article remains on the site but no longer appears in the homepage carousel.
