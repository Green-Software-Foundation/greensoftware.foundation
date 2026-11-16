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
- **Academic Membership** — eyebrow badge, heading with accent, intro paragraph, 4 benefit cards (each with checkmark icon, bold title, and body text), green callout box ("Available at no cost") with CTA, closing line
- **Academic member logos marquee** — scrolling logo marquee filtered to `organisationType === "Academia"` from `src/data/members.json`. Falls back to a static text list of 8 university names if no academic logos are available (e.g. during local dev without Notion data).
- **Submission Form** — anchor `#submission-form`, 6 form fields (4 required, 2 optional), client-side confirmation UX (no backend endpoint), privacy note

## How to update

### Adding or removing a "Working On" card
Edit the `workingOnCards` array in the frontmatter. Each item has `title`, `description`, and `icon` (path to a `/assets/` SVG).

### Updating the Standards section
Edit the `standardsItems` array. Items may have an optional `link` and `linkText` for a "view standard" link below the description.

### Adding a benefit to Academic Membership
Edit `membershipBenefits` in the frontmatter. Each item has `title`, `body`, and `icon` (unused in the current layout — checkmark icons are rendered inline). Items render as a card with a green checkmark, bold title, and body paragraph.

### Updating the academic member logos
Academic member logos are fetched from Notion (`Members` DB, `Organisation Type = Academia`) at build time. To add or update a logo, update the member's entry in Notion — the logo downloads automatically on the next `npm run build:full`. The marquee uses `LogoMarquee` with a pre-filtered `logos` prop.

### Updating the fallback university list
If academic logos are unavailable (e.g. during local dev), a static text list is shown. Edit the `·`-separated list in the fallback `<section>` inside the `{academicLogos.length > 0 ? ... : ...}` conditional.

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
