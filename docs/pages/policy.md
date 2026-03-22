# Policy & Research Page

**URL:** `/policy/`
**File:** `src/pages/policy/index.astro`

## What the Page Shows

The Policy Working Group's work: leadership, Policy Radar, policy engagement responses, engagement principles, partnerships, research publications, and related articles.

## Dynamic Elements

### Leadership photos

Two leaders are hardcoded by name and looked up in `src/data/people.json`:

- **Chris Adams** — Chair, Policy Working Group
- **Joseph Cook** — Head of Research

Photos and other metadata resolve from `people.json`. See [people component doc](../components/people.md).

### Article carousel

Articles tagged `"policy"` or `"research"` in frontmatter are shown in a carousel (3-article minimum). See [article carousels doc](../components/article-carousels.md).

### Research papers

The `/policy/research/` listing page and `/policy/research/[slug]/` detail pages pull from the `research` content collection (`src/content/research/`). Papers are Markdown files with YAML frontmatter.

**Research frontmatter schema:**

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Paper title |
| `subtitle` | string (optional) | Subtitle |
| `date` | date | Publication date |
| `type` | enum | `"whitepaper"`, `"consultation-response"`, or `"position-paper"` |
| `summary` | string | Short summary |
| `jurisdiction` | string (optional) | Geographic scope |
| `framework` | string (optional) | Related framework |
| `workingGroup` | string (optional) | Slug matching a project in `projects.json` |
| `authors` | array (optional) | Array of `{ name, org }` |
| `published` | boolean | Default `true`; `false` hides from listings |

To add a research paper, see the [CMS doc](../cms.md) or add a Markdown file to `src/content/research/`.

## Static Elements

### Policy Radar section

Hardcoded TextWithImage linking to `policy-radar.greensoftware.foundation`. Badge reads "RATIFIED MAY 2025".

### Policy Engagement cards (6 cards)

Hardcoded at lines 142–188:

- GHG Protocol Scope 2 Consultation
- AI Environmental Impacts Act
- NY Corporate Climate Accountability Act
- European Green Digital Coalition
- UK Government Digital Sustainability Alliance
- EU AI Act

Each card has a title, description, and link to a GSF article.

### Engagement Principles (5 items)

Hardcoded FeatureGrid: Legitimacy, Opportunity, Consistency, Transparency, Accountability. Aligned with the UN Global Compact Guide.

### Partnerships (5 items)

Hardcoded FeatureGrid: W3C, IASA/SustainableArchitectures.org, SustainableIT.org, UK GDSA, British Computer Society. Some have article links.

### Research publication cards (4 cards)

Hardcoded at lines 279–324:

- AI Environmental Assessments
- Green AI Position Paper
- SCI for Foundation Models (Texas State University)
- Carbon-Aware Computing (UBS & Microsoft)

## How to Update

| Change | Where |
|--------|-------|
| Change leadership | Edit names in `policy/index.astro` + ensure person exists in Notion |
| Add article to carousel | Tag article with `"policy"` or `"research"` |
| Add research paper | Add Markdown to `src/content/research/` or use CMS |
| Add engagement card | Edit `policy/index.astro` |
| Add partnership | Edit `policy/index.astro` |
| Update Policy Radar info | Edit `policy/index.astro` |
