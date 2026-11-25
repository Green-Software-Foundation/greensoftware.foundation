# Education Page

**URL:** `/education/`
**File:** `src/pages/education/index.astro`

## What the Page Shows

GSF's education program as three routes: **foundational courses** (free, Movement Platform: Green Software Practitioner, SCI Fundamentals, SCI for AI Fundamentals, SOFT Essentials), **professional certification** through the Green Software & AI Academy (the centrepiece, five role tracks, fourteen courses), and **Green Software Patterns** for putting it into practice. Also member stories, learning resources, organization programs, and related articles.

## Dynamic Elements

### Article carousel

Articles tagged `"education"` in frontmatter are shown in a carousel (3-article minimum). See [article carousels doc](../components/article-carousels.md).

## Static Elements

Everything else on this page is hardcoded:

- **Hero** — heading, body naming the three routes, CTAs "Start with the foundations" (`#foundation-courses`), "Explore the Academy" (`#academy`), "Explore patterns" (`#patterns`)
- **Three ways to learn** — FeatureGrid (cards, 3 columns, `linkStyle="button"`): Foundational courses ("Start here", button "Gain the foundations"), Green Software & AI Academy ("Go professional", `featured` dark card), Green Software Patterns ("Put it into practice"). Buttons jump to the three sections below.
- **Foundational courses** (`#foundation-courses`; the anchor keeps its old name so existing links still work) — one compact bordered FeatureGrid (4 columns, `linkStyle="button"`): a card per course with a one-line description and "Take the course →" button (Practitioner, SCI Fundamentals via `https://grnsft.org/sci-fundamentals-course`, SCI for AI Fundamentals, SOFT Essentials). Ends with the section-level "Join the Movement Platform →" button and a note that Practitioner + SCI Fundamentals are the recommended starting point for the Academy. The earlier long tabbed sections (overview, audience, outcomes per course) were removed from this page; the detail lives on each course page.
- **Academy: professional certification** (`#academy`) — the centerpiece: one large dark FeatureGrid `variant="panel"`. Contents: eyebrow "Professional certification", heading, intro (14 courses, 5 tracks, GSF standards, scenario-based assessment, vendor-neutral certification), three headline numbers, five white audience cards, a quote from the Academy launch announcement (Navveen Balani, Executive Director), and closing buttons "Explore the Academy →" (`https://academy.greensoftware.foundation`) and "Become a member →" (`/membership/`). Each audience card has: the Academy track name as a pill, an audience title that does not repeat the track name (Leaders and policymakers, Architects, Developers and engineers, Data and ML engineers, Platform, SRE, and DevOps teams), a who-it's-for line, the track's courses in alphabetical order as links to their Academy course pages (`academy.greensoftware.foundation/course/<slug>`), and a button to the Academy home page (the Academy site has no per-track URLs). Track, course names and slugs come from the Academy site.
- **Green Software Patterns** (`#patterns`) — one bordered FeatureGrid panel (4 columns): what a pattern is, how to use them, why they help, how to contribute. Links to the patterns member story and `https://patterns.greensoftware.foundation/contribute`. Ends with the section-level call to action "Browse the patterns catalog →" to `https://patterns.greensoftware.foundation`. The "50+" count and pattern structure come from the patterns site.
- **Member stories** — MemberStories component with 2 hardcoded stories (Green Software Practitioner, Green Software Patterns) linking to `/stories/`
- **Learning resources** — 5 ResourceCards (Awesome Green Software, podcasts, meetups, stories). Patterns has its own section above, so it is not repeated here.
- **Education for organizations** — FeatureGrid (`linkStyle="button"`): Cohort Training (button to the SCI for AI Bootcamp article), In-House Licensing (no link yet), Champions, Membership
- **CTA banner** — link to free course

### FeatureGrid options used here

Optional props added to `src/components/feature-grid.astro`; without them every other page renders as before: `linkStyle` (`"link"` default, or `"button"`: primary button pinned to the bottom of each card); section-level `ctaText` / `ctaHref` / `ctaLeadIn` (button under the grid, inside the same container); per feature `badge` (pill above the title) and `descriptionHtml` (HTML description); and a `variant="panel"` look (large dark panel with white cards) that also takes `eyebrow`, `stats` (headline numbers), `quote` (pull quote) and `ctaSecondaryText` / `ctaSecondaryHref` (second, outlined button).

## How to Update

| Change | Where |
|--------|-------|
| Add article to carousel | Tag article with `"education"` |
| Update the Academy tracks, courses, stats or quote | Edit the `#academy` FeatureGrid (`variant="panel"`) in `education/index.astro` (course links use the Academy site's course slugs) |
| Add or change a foundational course | Edit the `#foundation-courses` FeatureGrid features in `education/index.astro` |
| Update member stories | Edit the MemberStories props in `education/index.astro` |
| Add learning resource | Edit ResourceCards in `education/index.astro` |
