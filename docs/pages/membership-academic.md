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
- **The Convening Model** — "How It Works" badge, extrabold heading with accent, two intro paragraphs in a 2-column cream card layout, 4-step vertical pipeline, bordered disclaimer callout
- **Forms of Engagement** — 6 cards (3-column on desktop) describing how institutions can engage; each has a button with an external link
- **What Our Members Are Working On** — 6 cards (5 research challenges + 1 "Your Research" CTA card); followed by a full-width Testimonial quote attributed to the GSF Chairperson
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
Edit the text directly in Section 2 of the template. The two intro paragraphs are in the two-column card grid. The numbered steps are an inline `.map()` array — edit the strings there. The disclaimer is in the `border-l-4` callout box below the steps.

### Updating the closing quote on What Our Members Are Working On
Edit the `<Testimonial />` component props after the "What Our Members Are Working On" section. Update `quote`, `author`, `title`, and `company` as needed.

### Updating the Forms of Engagement list
Edit the `engagementForms` array in the frontmatter.

### Wiring up the submission form backend
The form currently prevents the default submit, hides itself, and shows an inline confirmation message. The `<script>` tag at the bottom of the file handles this. To add a real backend, update the `form.addEventListener("submit", ...)` handler to POST the form data before showing the confirmation.

## Navigation

This page is linked from the site nav under **About → For Members → Academic Membership** (`src/lib/nav-items.ts`).
