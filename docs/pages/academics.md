# Academic Members Pages

**URL:** `/academics/` (listing) and `/academics/<slug>/` (individual profiles)  
**Files:**
- `src/pages/academics/index.astro` — listing page
- `src/pages/academics/[slug].astro` — dynamic profile page
- `src/content/academics/*.md` — academic profile content

## What the Pages Show

### Academics Listing (`/academics/`)

An overview page showcasing all published academic members collaborating with GSF. Displays:
- Hero section with program description
- Grid of academic profile cards with summaries
- Links to individual profile pages

### Individual Academic Profile (`/academics/<name>/`)

A detailed profile page for each academic member, featuring:

1. **Hero section** — name, title, institution, breadcrumb, and profile links
2. **Stats strip** — key numbers (publications, patents, citations, years of experience)
3. **Research mission** — highlighted card with the academic's core research statement
4. **About** — structured biographical section: first `aboutParagraphs` item shown large with a left accent border; subsequent items as body text; book cards for `links` with `group: "books"`; SDG alignment chips
5. **Key areas of expertise** — 3-column grid of expertise areas (with title and description)
6. **Collaboration opportunities** — numbered editorial layout showing how the academic's work aligns with GSF initiatives
7. **Affiliations & leadership** — current roles and institutional affiliations; linked items render as hover cards
8. **Experience & background** — career milestones; linked items render as hover cards
9. **Further reading & links** — links grouped by category (Profile & CV, Research Output, Institutional Affiliations, Books, Appearances)
10. **CTA banner** — call to action for collaboration inquiries

## Content Structure

Academic profiles are stored as Markdown files in `src/content/academics/` and rendered via the dynamic route `src/pages/academics/[slug].astro`.

### Frontmatter Schema

Each academic profile Markdown file includes the following frontmatter:

```yaml
---
name: "Prof. Name"
title: "Academic Title"
institution: "Institution Name"
institutionUrl: "https://..."
published: false  # Set to true to publish
summary: "One-paragraph summary of research focus"
researchMission: "Mission statement for the research program"

keyAreas:  # Optional - up to 3 areas
  - title: "Area Title"
    description: "Description of expertise area"

collaborationAreas:  # Optional - up to 3 areas
  - title: "Collaboration Area Title"
    body: "Detailed body about collaboration opportunity"
    relevance: "Specific GSF relevance (optional)"

affiliations:  # Optional array
  - "Current affiliation 1"
  - "Current affiliation 2"

recognition:  # Optional array
  - "Recognition or achievement 1"
  - "Years of experience"

aboutParagraphs:  # Optional - biographical paragraphs for the About section
  - "First paragraph — shown large with a left accent border (the hook/intro)"
  - "Second paragraph — shown as regular body text"

sdgAlignment:  # Optional - UN Sustainable Development Goals this work maps onto
  - number: "9"
    title: "Industry & Infrastructure"
  - number: "13"
    title: "Climate Action"

publications:  # Optional object
  peerReviewed: "50+ peer-reviewed publications"
  patents: "10+ patents"
  citations: "500+ citations"

links:  # Optional - external resource links; use group: "books" to surface in About section
  - label: "Research Profile"
    url: "https://..."
    group: "profile"
  - label: "GitHub"
    url: "https://..."
    group: "research"

lang: "en"  # Language code
---
```

### Body Content

The Markdown body after the frontmatter `---` is **not rendered** on the profile page. All biographical and structured content should go in the frontmatter fields (`aboutParagraphs`, `sdgAlignment`, `affiliations`, `recognition`, `collaborationAreas`, etc.). The Markdown body can be left empty.

## How to Create a New Academic Profile

1. **Create a new Markdown file** in `src/content/academics/` named after the academic (slug format): `src/content/academics/firstname-lastname.md`

2. **Add frontmatter** with all relevant information (see schema above). Keep `published: false` for draft/preview mode.

3. **Add body content** (optional) for additional biography or context.

4. **Preview locally** at `http://localhost:4322/academics/firstname-lastname/` — the page will render even with `published: false`.

5. **Add links** — fill in the external URLs in the `links` frontmatter section once you have them.

6. **Set `published: true`** when ready to go live. The profile will appear in the `/academics/` listing and in search.

## Example: Creating a Profile for a New Academic

```markdown
---
name: "Dr. Jane Smith"
title: "Professor of Sustainable Computing"
institution: "Example University"
institutionUrl: "https://example.edu/"
published: false
summary: "Dr. Smith's research focuses on reducing the carbon footprint of distributed systems and cloud infrastructure."
researchMission: "Building energy-efficient systems that maintain performance while minimizing environmental impact."
keyAreas:
  - title: "Distributed Systems"
    description: "Optimizing cloud architectures for energy efficiency..."
  - title: "Data Center Efficiency"
    description: "Reducing infrastructure carbon footprint..."
  - title: "Measurement & Metrics"
    description: "Developing standards for energy efficiency measurement..."
collaborationAreas:
  - title: "Cloud Infrastructure Optimization"
    body: "Detailed explanation of collaboration opportunity..."
    relevance: "SCI for Cloud, infrastructure standards"
affiliations:
  - "Professor at Example University"
  - "Research Lead at Institute X"
recognition:
  - "15+ years in sustainable computing"
  - "50+ publications"
publications:
  peerReviewed: "45+ peer-reviewed papers"
  patents: "8 patents"
  citations: "300+ citations"
links:
  - label: "Research Profile"
    url: "[to be added]"
  - label: "GitHub"
    url: "[to be added]"
---

## Background

[Additional biographical content in Markdown format...]
```

## Publishing & Draft Mode

- **Draft profiles** (`published: false`) render at their URL for preview but:
  - Don't appear in the `/academics/` listing
  - Are excluded from search
  - Show a "Draft" banner at the top
  - Have `noindex` meta tag to prevent search engine indexing

- **Published profiles** (`published: true`):
  - Appear in the `/academics/` listing
  - Are included in site search
  - Are indexed by search engines
  - No draft banner

To publish, simply change `published: false` to `published: true` in the frontmatter and commit.

## Troubleshooting

**Profile not appearing in listing?**
- Check that `published: true` in frontmatter
- Run `npm run build` to rebuild the site

**Profile page shows but links say "Coming soon"?**
- The link URLs in frontmatter are set to `[to be added]`. Update them with actual URLs.

**Image/photo not showing?**
- Currently using a placeholder SVG icon. To add a custom photo, place the image in `public/assets/academics/` and update the page template to reference it.

## Future Enhancements

Potential improvements for future iterations:
- Add photo/avatar support with image optimization
- Link academic profiles to related standards or working groups
- Display related articles tagged with the academic's name
- Add "Related Academics" suggestions at the bottom of profiles
- Integration with research output feeds (Google Scholar, ResearchGate APIs)
