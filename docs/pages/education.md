# Education Page

**URL:** `/education/`
**File:** `src/pages/education/index.astro`

## What the Page Shows

GSF's education programme at two levels, plus Green Software Patterns for putting it into practice: free **foundation courses** on the Movement Platform (Green Software Practitioner, SCI Fundamentals, SCI for AI Fundamentals, SOFT Essentials) and **professional certification** through the Green Software & AI Academy (five tracks). Also member stories, learning resources, organisation programmes, and related articles.

## Dynamic Elements

### Article carousel

Articles tagged `"education"` in frontmatter are shown in a carousel (3-article minimum). See [article carousels doc](../components/article-carousels.md).

## Static Elements

Everything else on this page is hardcoded:

- **Hero** — heading, CTAs (free course link; "Explore patterns" jumps to `#patterns`)
- **Learning pathway** — FeatureGrid (bordered, 2 columns) explaining the two levels: 1. Foundation courses, 2. Professional certification. Links jump to `#foundation-courses` and `#academy`.
- **Foundation courses heading** (`#foundation-courses`) — intro to the free Movement Platform courses; names Practitioner + SCI Fundamentals as the recommended starting point for the Academy
- **Green Software Practitioner** — TabbedSection (overview, audience, outcomes)
- **SCI Fundamentals** — TabbedSection (overview, audience, outcomes), links to `https://grnsft.org/sci-fundamentals-course`
- **SCI for AI Fundamentals** — TabbedSection (overview, audience, outcomes)
- **SOFT Essentials** — TabbedSection (overview, audience, outcomes)
- **Movement Platform CTA** — CTACard
- **Academy: professional certification** (`#academy`) — FeatureGrid (5 columns, `linkStyle="button"`), one card per track. Each card has the Academy track name as a pill (Lead and manage, Design, Build and measure, Data and models, Run), an audience title ("Courses for people who lead and manage" etc.), a short description of who it is for, the track's courses as links to their Academy course pages (`academy.greensoftware.foundation/course/<slug>`), and a button to the Academy home page. The Academy site has no per-track URLs, so all five buttons go to its home page, where the tracks are shown. Track, course names and slugs come from the Academy site (14 courses).
- **Academy pilot** — dark CTACard with button to `https://academy.greensoftware.foundation`
- **Green Software Patterns** (`#patterns`) — one bordered FeatureGrid panel (4 columns): what a pattern is, how to use them, why they help, how to contribute. Links to the patterns member story and `https://patterns.greensoftware.foundation/contribute`. The panel ends with the section-level call to action (`ctaLeadIn`, `ctaText`, `ctaHref`): "Browse the patterns catalog →" to `https://patterns.greensoftware.foundation`. The "50+" count and pattern structure come from the patterns site.
- **Member stories** — MemberStories component with 2 hardcoded stories (Green Software Practitioner, Green Software Patterns) linking to `/stories/`
- **Learning resources** — 6 ResourceCards (Patterns, Awesome Green Software, podcasts, meetups, stories)
- **Education for organisations** — FeatureGrid (`linkStyle="button"`): Cohort Training (button to the SCI for AI Bootcamp article), In-House Licensing (no link yet), Champions, Membership
- **CTA banner** — link to free course

### FeatureGrid options used here

These optional props were added to `src/components/feature-grid.astro`; without them every other page renders as before: `linkStyle` (`"link"` default, or `"button"`: primary button aligned to the bottom of each card), `ctaText` / `ctaHref` / `ctaLeadIn` (section-level button under the grid, inside the same container; cards and bordered variants), and per feature `badge` (pill above the title) and `descriptionHtml` (HTML description, used instead of `description`).

## How to Update

| Change | Where |
|--------|-------|
| Add article to carousel | Tag article with `"education"` |
| Update the Academy tracks or courses | Edit the `#academy` FeatureGrid in `education/index.astro` (course links use the Academy site's course slugs) |
| Update the Academy pilot card | Edit the dark CTACard after the Academy tracks in `education/index.astro` |
| Add/update a course | Edit the TabbedSection props in `education/index.astro` |
| Update member stories | Edit the MemberStories props in `education/index.astro` |
| Add learning resource | Edit ResourceCards in `education/index.astro` |
