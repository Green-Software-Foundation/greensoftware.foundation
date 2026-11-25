# Education Page

**URL:** `/education/`
**File:** `src/pages/education/index.astro`

## What the Page Shows

GSF's education programme at two levels: free **foundation courses** on the Movement Platform (Green Software Practitioner, SCI Fundamentals, SCI for AI Fundamentals, SOFT Essentials) and **professional certification** through the Green Software & AI Academy (five tracks). Also member stories, learning resources, organisation programmes, and related articles.

## Dynamic Elements

### Article carousel

Articles tagged `"education"` in frontmatter are shown in a carousel (3-article minimum). See [article carousels doc](../components/article-carousels.md).

## Static Elements

Everything else on this page is hardcoded:

- **Hero** — heading, CTAs (free course link, patterns catalogue)
- **Learning pathway** — FeatureGrid (bordered, 2 columns) explaining the two levels: 1. Foundation courses, 2. Professional certification. Links jump to `#foundation-courses` and `#academy`.
- **Foundation courses heading** (`#foundation-courses`) — intro to the free Movement Platform courses; names Practitioner + SCI Fundamentals as the recommended starting point for the Academy
- **Green Software Practitioner** — TabbedSection (overview, audience, outcomes)
- **SCI Fundamentals** — TabbedSection (overview, audience, outcomes), links to `https://grnsft.org/sci-fundamentals-course`
- **SCI for AI Fundamentals** — TabbedSection (overview, audience, outcomes)
- **SOFT Essentials** — TabbedSection (overview, audience, outcomes)
- **Movement Platform CTA** — CTACard
- **Academy: professional certification** (`#academy`) — FeatureGrid (5 columns), one card per track: Lead and manage, Design, Build and measure, Data and models, Run, each listing its courses. Track and course names are taken from the Academy launch article (2026-10-01).
- **Academy pilot** — dark CTACard with button to `https://academy.greensoftware.foundation`
- **Member stories** — MemberStories component with 2 hardcoded stories (Green Software Practitioner, Green Software Patterns) linking to `/stories/`
- **Learning resources** — 6 ResourceCards (Patterns, Awesome Green Software, podcasts, meetups, stories)
- **Education for organisations** — FeatureGrid (Cohort Training, In-House Licensing, Champions, Membership)
- **CTA banner** — link to free course

## How to Update

| Change | Where |
|--------|-------|
| Add article to carousel | Tag article with `"education"` |
| Update the Academy tracks or courses | Edit the `#academy` FeatureGrid in `education/index.astro` |
| Update the Academy pilot card | Edit the dark CTACard after the Academy tracks in `education/index.astro` |
| Add/update a course | Edit the TabbedSection props in `education/index.astro` |
| Update member stories | Edit the MemberStories props in `education/index.astro` |
| Add learning resource | Edit ResourceCards in `education/index.astro` |
