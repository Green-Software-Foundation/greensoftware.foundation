# Research & White Papers

**URL:** `/policy/research/` (listing) and `/policy/research/{slug}/` (detail)
**Source files:** `src/pages/policy/research/index.astro` (listing), `src/pages/policy/research/[slug].astro` (detail)

## What the pages show

The **listing page** displays all published research papers sorted by date (newest first). Each card shows the type badge (White Paper or Consultation Response), jurisdiction, date, title, subtitle, and summary.

The **detail page** shows the full paper with a metadata grid, auto-generated table of contents (from h2 headings), and the Markdown body content.

## Dynamic elements

| Element | Source | Notes |
|---------|--------|-------|
| Paper content | Content collection (`src/content/research/`) | Managed via [Sveltia CMS](../cms.md) or Markdown files |
| Working group name | `projects.json` (from [Notion](../notion.md)) | Resolved from the `workingGroup` slug in frontmatter |
| Draft banner | `published` frontmatter field | Shows amber banner when `published: false` |

## Static elements

- Page heading and description
- CTA banner at the bottom
- Breadcrumb navigation

## How research papers work

Research papers are Markdown files in `src/content/research/`. Unlike articles, they are **English-only** (no translations).

### Key frontmatter fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Paper title |
| `date` | date | Yes | Publication date |
| `type` | enum | Yes | `"paper"`, `"response"`, or `"report"` — see type definitions below |
| `summary` | string | No | Short summary for the listing card |
| `subtitle` | string | No | Displayed below the title |
| `published` | boolean | No | Defaults to `true`. Set `false` to hide from listings |
| `workingGroup` | string | No | Slug of the working group (e.g. `"policy-wg"`). Resolved to a display name from `projects.json` |
| `authors` | array | No | Author objects with `name` field |
| `status` | enum | No | `"published"`, `"draft"`, or `"in-progress"` — for workflow tracking |
| `jurisdiction` | string | No | Geographic scope (e.g. "EU", "US", "Global") |
| `framework` | string | No | Related framework (e.g. "GHG Protocol", "EU AI Act") |
| `doi` | string | No | Digital Object Identifier — displayed as a link in the hero |
| `pdfUrl` | string | No | Direct PDF download link — displayed as a download button in the hero |
| `version` | string | No | Document version |

### Research types

| Type | Label | Definition |
|------|-------|-----------|
| `paper` | Paper | Original research, analysis, or position authored by GSF. Makes a case, presents findings, or proposes a framework. |
| `response` | Response | GSF's formal reply to an external consultation, regulation, or standard. Written in reaction to someone else's process. |
| `report` | Report | Documents an outcome, process, or state of affairs. Descriptive rather than argumentative. Assembly reports, workshop summaries, State of Green Software. |

### Detail page metadata grid

The detail page shows a metadata grid built from the frontmatter fields. Items are conditionally displayed — only fields with values appear:

- Type (always shown)
- Published date (always shown)
- Status, Jurisdiction, Framework, Working Group, Authors, Version (shown if present)

### Table of contents

The detail page auto-generates a table of contents from all h2 (`##`) headings in the Markdown body. The TOC appears as a sidebar on desktop.

### Search indexing

Research paper detail pages are indexed by [PageFind](../search.md) when `published !== false`.

### Draft mode

Same as articles — setting `published: false` hides from listings, shows a draft banner, and adds `noindex`. The page remains accessible via direct URL.

## How to update

- **Add a research paper** — create a Markdown file in `src/content/research/` with the frontmatter above, or use [Sveltia CMS](../cms.md)
- **Link to a working group** — set `workingGroup` to the slug of the PWCI record in [Notion](../notion.md) (e.g. `"policy-wg"`)
- **Hide without deleting** — set `published: false`

## Also appears on

Research papers are also shown on the [Policy & Research page](policy.md) in hardcoded cards (4 publications) — those are separate from this content collection and require a code change to update.

## Cross-links from standards pages

A standards page can link to a research entry as a supporting resource. For example, the [SILO standards page](standards.md#silo-hero-ctas--white-paper-and-companion-technical-note) links to `silo-companion-technical-note.md` (`/policy/research/silo-companion-technical-note/`) as a companion to the external SILO white paper, from its hero CTA row. There is no automatic cross-link in either direction beyond the `workingGroup` slug — the standards page must link to the research entry's URL explicitly.
