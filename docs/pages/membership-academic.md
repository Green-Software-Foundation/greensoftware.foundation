# Academic & Research Engagement Page

**URL:** `/membership/academic/`
**File:** `src/pages/membership/academic/index.astro`

## What it shows

A landing page for academic and research institutions explaining how they can engage with and join the Green Software Foundation. Targets Vice-Chancellors, Provosts, Directors of Research, and Heads of Department. The page presents the GSF convening model, active research challenges from member organisations, forms of engagement, standards with open research needs, academic membership benefits, and a proposal submission form.

## Dynamic elements

None. All content is static and hardcoded (see below for update guidance).

## Static elements

All content on this page is hardcoded:

- **Hero** — eyebrow badge, headline "Where Research Becomes Standard", 3-paragraph body, two CTAs (primary → `#submission-form`, secondary → `/governance/`)
- **The Convening Model** — heading, two body paragraphs, 4-step numbered list with preamble, governance disclaimer
- **What Our Members Are Working On** — 5 research challenge cards with icons and closing line
- **Forms of Engagement** — 6 cards in a numbered grid (3-column on desktop, 2-column on tablet) describing how institutions can engage
- **Standards — Active Research Areas** — 4 standard items (SCI, SCI for AI, SCI for Web, SOFT) with research needs; SCI links to `https://sci.greensoftware.foundation/`
- **Academic Membership** — heading, body, 4 benefit items, membership note, current member text list (8 universities), closing line
- **Submission Form** — anchor `#submission-form`, 6 form fields (4 required, 2 optional), client-side confirmation UX (no backend endpoint), privacy note

## How to update

### Adding or removing a "Working On" card
Edit the `workingOnCards` array in the frontmatter. Each item has `title`, `description`, and `icon` (path to a `/assets/` SVG).

### Updating the Standards section
Edit the `standardsItems` array. Items may have an optional `link` and `linkText` for a "view standard" link below the description.

### Adding a benefit to Academic Membership
Edit `membershipBenefits` in the frontmatter. Items render as `**title** — body`.

### Updating the current academic members list
Find the `Current academic members:` line in Section 6 and edit the `·`-separated list of institution names.

### Updating the Convening Model text or disclaimer
Edit the text directly in Section 2 of the template (the custom `<section>` block).

### Updating the Forms of Engagement list
Edit the `engagementForms` array in the frontmatter.

### Wiring up the submission form backend
The form currently prevents the default submit, hides itself, and shows an inline confirmation message. The `<script>` tag at the bottom of the file handles this. To add a real backend, update the `form.addEventListener("submit", ...)` handler to POST the form data before showing the confirmation.

## Navigation

This page is linked from the site nav under **About → For Members → Academic Membership** (`src/lib/nav-items.ts`).
