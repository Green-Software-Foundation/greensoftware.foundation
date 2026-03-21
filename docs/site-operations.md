# Site Operations FAQ

Practical answers to the questions you'll actually ask when maintaining the GSF website.

## Logos & Members

### How do I add a member's logo to the homepage carousel?

The logo marquee pulls from the **Notion Members database**. A logo appears when all three conditions are met:

1. **Status** = "Active"
2. A **Logo** file is uploaded to the member record
3. **Hide Logo** checkbox is unchecked

Run `npm run fetch-notion` locally (or wait for the next Netlify build) to pick up changes. Steering members appear first, then General, alphabetical within each tier.

### A member wants their logo hidden

In Notion Members DB, check the **Hide Logo** checkbox on their record. The logo will disappear from the marquee and all other logo displays on the next build.

### A new member has joined

Add them to the **Notion Members database** with:

- **Member Name** — company name
- **Membership Level** — "Steering" or "General"
- **Organisation Type** — "Company", "Academia", or "Government"
- **Status** — "Active"
- **Logo** — upload their logo file
- **Website** — their company URL

### A member has left

Set their **Status** to anything other than "Active" in the Notion Members DB. Their logo will disappear from the marquee and membership counts, but will still appear on historical story pages (stories use a separate filter that includes inactive members for accuracy).

### Why do steering members appear before general members?

The logo marquee sorts Steering members first, then General, alphabetical within each tier. This is built into the component — no configuration needed.

---

## People & Photos

### Why isn't someone's photo showing on the governance page?

Photos are resolved from the **Notion Volunteers database**, not from Subscriptions. This is due to a Notion API limitation — roll-up file properties return empty arrays, so photos can't be read from Subscription records.

**To fix a missing photo:**

1. Find the person in the **Volunteers database** in Notion
2. Upload their photo to the **Photo** field
3. Run `npm run fetch-notion` — the script matches volunteers to subscriptions by name

### How do I add someone to the steering committee?

They need an **active Subscription** in the Notion Subscriptions DB with:

- **Subscription Status** = "Active"
- **Role for Subscription** = "Committee Member" (or "Committee Chair" / "Committee Vice-Chair")
- **PWCIs** relation linked to the "Steering Committee" PWCI record

Their name, title, and company are read from roll-up fields on the Subscription. Their photo comes from the Volunteers DB (see above).

### How do I change the Chair or Vice-Chair?

Two places need updating:

1. **Notion** — update the **Role for Subscription** to "Committee Chair" or "Committee Vice-Chair"
2. **Code** — the governance page (`src/pages/governance.astro`, lines 23-24) and press page (`src/pages/press/index.astro`, lines 30-34) have hardcoded name matches to highlight the Chair and Vice-Chair. Update these names when leadership changes.

### How do I add someone to the administrative team (staff)?

Add them to the **Notion GSF Team database** with:

- **Person** — full name
- **Role** — job title
- **Photo** — upload their photo
- **Status** — "Active"

The Executive Director is automatically sorted first on the governance page.

### How do I add a project lead or working group chair?

They need an **active Subscription** in Notion with:

- **Role for Subscription** — "Project Lead", "Project Co-Lead", or "Working Group Chair"
- **PWCIs** relation linked to the relevant project/working group

Their role label on the governance page is automatically generated from the role and project name.

---

## Standards & Projects

### How do I change a standard's lifecycle stage?

Update the **Lifecycle Stage** field in the **Notion PWCI database** for that project. Valid stages appear as badges on the standards page cards.

### How do I add a new standard/project?

Add a new record to the **Notion PWCI database** with:

- **Name** — project name
- **Type** — "WG Project"
- **Parent** — parent working group name
- **Lifecycle Stage** — current stage
- **Website URL** — link to the spec or repo
- **Description** — short description

The standards overview page auto-generates a card for it. To create a dedicated page (like `/standards/sci/`), you'll need to create the Astro page file — that's a code change.

### Why isn't an article showing on a standards page?

Articles appear on standards pages via **tags** in their frontmatter. Check:

1. The article has `published: true` (or the field is absent — defaults to true)
2. The article has the right tag in its `tags` array (e.g. `"sci"`, `"rtc"`, `"wdpc"`)
3. There are **at least 3 articles** with that tag — carousels are hidden below 3

See the [tags reference in the README](../README.md) for the full list of tags and which pages they map to.

---

## Press & Media

### How do I add a press mention?

Add it to the **Notion "GSF Mentions in the News" database** with:

- **Title** — article headline
- **Source URL** — link to the article
- **Source Name** — publication name (e.g. "Forbes", "TechCrunch")
- **Date** — publication date

Press mentions are sorted by date (newest first) and appear in the press mentions carousel.

### How do I update the press page timeline?

The 22-item timeline is **hardcoded** in `src/pages/press/index.astro` (lines 51-74). This requires a code change — add a new entry to the timeline array with a `date`, `text`, and optional `href` link.

### How do I update the press page leadership section?

The leadership names are **hardcoded** in `src/pages/press/index.astro` (lines 30-34). Photos and LinkedIn links are pulled dynamically from `people.json` by matching on the hardcoded name. To change leadership, update both the name in the code and ensure the person exists in Notion with a photo.

---

## Assemblies

### How do I create a new assembly?

Add it to the **Notion Assemblies database** with:

- **Workshop/Name** — assembly name
- **Status** — controls visibility (see below)
- **Purpose**, **Deliverable**, **Summary** — descriptive fields
- **Lead**, **Facilitator** — people names
- **Seats** — number of available seats
- **Start Date**, **End Date** — schedule
- **Visibility** — "Public", "GSF Members Only", or "Invite Only"
- **Project** — relation to the relevant PWCI record

Optionally add a "Details" heading in the page body — content below it renders as rich HTML on the assembly detail page.

### What do the assembly status values mean?

| Status | Visible on site? | Application form? |
|--------|-----------------|-------------------|
| **Apply now** | Yes | Yes — full application form |
| **Register interest** | Yes | Yes — interest registration form |
| **Upcoming** | Yes | Yes — interest registration form |
| **In Progress** | Yes | No |
| **Done** | Yes (in "Completed" section) | No |
| **Pending** | Hidden | — |
| **Backlog** | Hidden | — |

### How do I open/close applications for an assembly?

Change the **Status** field in Notion:

- Set to **"Apply now"** to show the full application form
- Set to **"In Progress"** to hide the form (assembly has started)
- Set to **"Done"** to move it to the completed section

---

## Content: Articles, Stories & Research

### How do I publish a new article?

Either use **Sveltia CMS** at `/admin/` or add a Markdown file to `src/content/articles/en/`. Key frontmatter fields:

```yaml
title: "Article Title"
date: 2026-03-21
summary: "One to three sentence summary."
published: true      # Set false to hide from listings
featured: true       # Set true for homepage carousel
tags: ["sci", "standards"]  # Controls which page carousels show it
```

With `published: false`, the article renders at its direct URL (for preview) but is hidden from all listings, search, and sitemap.

### How do I add a member story?

Add a Markdown file to `src/content/stories/`. Stories have a rich frontmatter schema including `orgs`, `stats`, `timeline`, `contributors`, `quotes`, and `cta`. Look at an existing story file for the full structure.

Stories need a `timeline` array to render — without it, the story page won't generate.

### How do I add a research paper or whitepaper?

Add a Markdown file to `src/content/research/`. Key frontmatter:

```yaml
title: "Paper Title"
type: whitepaper          # or "consultation_response"
date: 2026-03-21
workingGroup: policy-wg   # slug matching a project in projects.json
authors: ["Name One", "Name Two"]
published: true
```

Research papers appear on the [Policy & Research page](/policy/) and have detail pages at `/policy/research/[slug]/`.

### How do I make an article appear on a specific page?

Add the right tag to the article's `tags` array in frontmatter:

| Tag | Page |
|-----|------|
| `standards` | /standards/ |
| `sci` | /standards/sci/ |
| `sci-web` | /standards/sci-web/ |
| `sci-ai` | /standards/sci-ai/ |
| `rtc` | /standards/rtc/ |
| `see` | /standards/see/ |
| `soft` | /standards/soft/ |
| `wdpc` | /standards/wdpc/ |
| `policy` | /policy/ |
| `research` | /policy/ |
| `community` | /community/ |
| `education` | /education/ |

An article can have multiple tags and will appear on every matching page. The homepage carousel uses the `featured: true` flag instead of tags.

---

## Search

### How does site search work?

The site uses [PageFind](https://pagefind.app/) — a static search engine that indexes the built HTML. It runs automatically after `astro build`.

### Which pages are searchable?

Only pages with `data-pagefind-body` are indexed (opt-in model):

- Individual article pages (English only, published only)
- Individual story pages (published only)
- Individual research paper pages (published only)
- Assembly detail pages
- About page
- Contact page

**Not indexed:** homepage, listing pages, standards pages, navigation, footer, CTA banners.

### Why doesn't a page appear in search results?

Check:

1. The page has `data-pagefind-body` attribute in its template
2. The content is `published: true`
3. You've run a full build (`npm run build`) — PageFind needs built HTML to index

### How do I test search locally?

1. Run `npm run build` to generate the PageFind index in `dist/pagefind/`
2. Copy `dist/pagefind/` to `public/pagefind/`
3. Run `npm run dev` — search will work using the copied index

The `public/pagefind/` directory is gitignored.

---

## Notion Data Pipeline

### How do I refresh data from Notion?

**Locally:**

```bash
# Requires NOTION_API_KEY in .env
npm run fetch-notion
```

**On Netlify:**
Data is fetched automatically on every build (`npm run build:full`). Push to main to trigger a fresh build.

### What if NOTION_API_KEY is missing?

The build still succeeds. The fetch script creates empty fallback JSON files so pages render without Notion data (with empty member lists, team sections, etc.).

### What Notion databases does the site use?

| Database | Output File | Used For |
|----------|-------------|----------|
| Members | `members.json` | Logo marquee, member counts, org badges on articles |
| Subscriptions | `people.json` | Steering committee, chairs/leads, org leads |
| Volunteers | `people.json` | Photos and LinkedIn for subscription-based people |
| GSF Team | `people.json` | Staff / administrative team |
| PWCI (Projects) | `projects.json` | Standards cards, nav icons, working group lookups |
| Press Mentions | `press-mentions.json` | Press page carousel |
| Assemblies | `assemblies.json` | Assembly index and detail pages |

### What assets does the fetch script download?

- **Member logos** → `public/assets/logos/`
- **Team/volunteer photos** → `public/assets/team/`
- **Project icons** → `public/assets/project-icons/`

---

## What Comes from Notion vs What's in Code

| Data | Source | To Change It |
|------|--------|-------------|
| Member logos, names, tiers | Notion Members DB | Edit in Notion |
| Team photos, roles, LinkedIn | Notion Volunteers + GSF Team + Subscriptions DBs | Edit in Notion |
| Standards projects, lifecycle stages | Notion PWCI DB | Edit in Notion |
| Press mentions | Notion Press Mentions DB | Edit in Notion |
| Assemblies | Notion Assemblies DB | Edit in Notion |
| Homepage stats (orgs, individuals) | Notion (via stats.json) | Edit in Notion |
| Articles, stories, research | Git (Markdown in `src/content/`) | Use Sveltia CMS or edit files |
| Press timeline (22 milestones) | Hardcoded in `src/pages/press/index.astro` | Code change |
| Chair/Vice-Chair names | Hardcoded in governance + press pages | Code change |
| Policy engagement cards | Hardcoded in `src/pages/policy/index.astro` | Code change |
| Research publication cards | Hardcoded in `src/pages/policy/index.astro` | Code change |
| Mission, vision, values | Hardcoded in `src/pages/about/index.astro` | Code change |
| Brand colours, downloads | Hardcoded in `src/pages/brand/index.astro` | Code change |
