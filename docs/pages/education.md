# Education Page

**URL:** `/education/`
**File:** `src/pages/education/index.astro`

## What the Page Shows

GSF's education programme: courses (Green Software Practitioner, SOFT Essentials), Movement Platform, member stories, learning resources, organisation programmes, and related articles.

## Dynamic Elements

### Article carousel

Articles tagged `"education"` in frontmatter are shown in a carousel (3-article minimum). See [article carousels doc](../components/article-carousels.md).

## Static Elements

Everything else on this page is hardcoded:

- **Hero** — heading, CTAs (free course link, patterns catalogue)
- **Courses heading** — intro to Movement Platform courses
- **Green Software Practitioner** — TabbedSection (overview, audience, outcomes)
- **SOFT Essentials** — TabbedSection (overview, audience, outcomes)
- **"More courses coming"** — TextBlock placeholder
- **Movement Platform CTA** — CTACard
- **Member stories** — MemberStories component with 2 hardcoded stories (Green Software Practitioner, Green Software Patterns) linking to `/stories/`
- **Learning resources** — 6 ResourceCards (Patterns, Awesome Green Software, podcasts, meetups, stories)
- **Education for organisations** — FeatureGrid (Cohort Training, In-House Licensing, Champions, Membership)
- **CTA banner** — link to free course

## How to Update

| Change | Where |
|--------|-------|
| Add article to carousel | Tag article with `"education"` |
| Add/update a course | Edit the TabbedSection props in `education/index.astro` |
| Update member stories | Edit the MemberStories props in `education/index.astro` |
| Add learning resource | Edit ResourceCards in `education/index.astro` |
