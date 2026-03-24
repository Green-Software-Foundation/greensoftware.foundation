# Standards Pages

Individual standards pages (SCI, RTC, WDPC, Open19, etc.) at `/standards/<slug>/`.

**Example:** `src/pages/standards/sci/index.astro`

## What the Page Shows

Each standards page is a long-form landing page for a specific GSF standard/project: hero, description, use cases, case studies, resources, timeline, project leadership, and related articles.

## Dynamic Elements

### Project data (from Notion)

- **Project metadata** — imported from `src/data/projects.json`. Each page looks up its project by slug (e.g. `projects.find(p => p.slug === "sci")`)
- **Lifecycle stage** — displayed as a badge in the hero, read from `projects.json`
- **Parent working group** — resolved from `projects.json` to show "A [WG Name] Project"
- **Project leads** — the `leads` array from `projects.json` provides `fullName` and `roleLabel`

See [Notion doc](../notion.md) for how `projects.json` is populated from the PWCIs database.

### Leadership (TeamGrid)

The TeamGrid component at the bottom of each page shows project leads. It receives only names from `projects.json` and auto-resolves photos, companies, and LinkedIn from `people.json`. See [people component doc](../components/people.md).

### Article carousel (tag-based)

Each standards page filters articles by its tag (e.g. `"sci"`) and shows a carousel if 3+ articles match. See [article carousels doc](../components/article-carousels.md).

### Logo marquee

The standard LogoMarquee component showing member logos. See [logo marquee doc](../components/logo-marquee.md).

### Organisation logos on case study cards

Some standards pages (e.g. SCI) have hardcoded case study carousels where organisation names are matched against `members.json` to resolve logos at build time.

## Static Elements

Most page content is hardcoded in each page's Astro file:

- Hero copy (heading, description, CTAs)
- "What is [Standard]?" TextBlock
- "Why it Matters" sections (TextWithImage components)
- "How It Works" equation/diagram section
- Case studies carousel (hardcoded article references)
- Testimonials
- Research & Recognition cards
- "Built for Every Role" TabbedSection
- Mandatory Metadata Parameters section (conformance level tables for Level 1 and Level 2, with links to the specification on GitHub)
- Resource cards
- "Get Involved" CardGrid
- Timeline milestones
- CTA banners

## How to Update

- **Change lifecycle stage or leads** — edit in Notion PWCIs DB, run `npm run fetch-notion`
- **Add articles to the carousel** — add the tag (e.g. `"sci"`) to the article's frontmatter `tags` array (see [article carousels doc](../components/article-carousels.md))
- **Edit page copy** — modify the Astro file directly (e.g. `src/pages/standards/sci/index.astro`)
- **Create a new standards page** — create a new Astro file; the data in `projects.json` is generated automatically from Notion but the page template is a code change. Also add the slug to `src/pages/standards/index.astro` (`standardDefs` array) and add a nav entry in `src/lib/nav-items.ts` under the appropriate Hardware/Software/Process section.

## Hardware Standards Pages

Currently two hardware standards have dedicated pages:

- **WDPC** — `src/pages/standards/wdpc/index.astro` at `/standards/wdpc/`
- **Open19** — `src/pages/standards/open19/index.astro` at `/standards/open19/`

Both appear under the Hardware section in the nav (`src/lib/nav-items.ts`) and in the standards index (`src/pages/standards/index.astro`). Open19 uses WDPC's icon assets as placeholders — dedicated Open19 SVGs should be added to `public/assets/standards/open19/` once available. Articles tagged `"open19"` will automatically appear in the page carousel.

## Lifecycle Stages

The lifecycle stage badge comes from the `Lifecycle Stage` field in Notion's PWCIs database. On the standards overview page (`/standards/`), "Learn more" links are hidden for Proposal/Pre-proposal stages.
