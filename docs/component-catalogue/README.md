# GSF Microsite Component Catalogue

This document catalogues every reusable component from the GSF microsites (SCI, WDPC, SOFT). Use the component names below when specifying which components to use for the new main website.

Full-page screenshots for visual reference:
- [SCI Microsite](sci-full-page.png)
- [WDPC Microsite](wdpc-full-page.png)
- [SOFT Microsite](soft-full-page.png)

---

## Layout Components

### 1. Navbar
**File:** `src/components/navbar.astro` + `src/components/react/navbar.tsx`
**Description:** Fixed top navigation bar with two rows. Top row shows "Project By [GSF Logo]". Bottom row has the project logo (left), navigation links (centre), and a GitHub button (right). On mobile, collapses into a hamburger menu that opens a full-height Sheet (slide-in drawer).
**Used on:** Every page, all microsites.
**Variants:** Navigation links and project logo change per site. Structure is identical.

### 2. Footer
**File:** `src/components/footer.astro`
**Description:** Dark green (#002625) footer with 4 columns: Logo + copyright (left), Project links, About GSF links, Legal links, Contact with social icons (GitHub, LinkedIn, Email). Clean, minimal layout.
**Used on:** Every page, all microsites.
**Variants:** Column headings and link lists change per site. Layout is identical.

### 3. Main Layout
**File:** `src/layouts/main.astro`
**Description:** Root HTML layout providing `<head>` with all meta tags, OG tags, Twitter cards, JSON-LD structured data, Google Analytics, and the font import. Wraps page content.
**Not visual** — structural only.

---

## Hero Sections

### 4. Hero
**File:** `src/components/hero.astro`
**Description:** Full-width hero section with a cream/light background. Left side has: H1 heading, H6 subtitle, body paragraph, and 1-2 CTA buttons (primary + outline variants). Right side has an SVG illustration with a Lottie animation overlay. Below the hero illustration, steering member logos appear in a row (Google, NTT DATA, Siemens, UBS).
**Used on:** Top of every microsite.
**Variants:**
- **SCI:** "Measure What Matters: Software's Carbon Impact" + 2 CTAs
- **WDPC:** "Intelligent Coordination for Sustainable Computing" + 1 CTA
- **SOFT:** "Transform Your Organization for Sustainable Software" + 2 CTAs

---

## Content Sections

### 5. LogoMarquee
**File:** `src/components/logo.astro`
**Description:** Full-width section with a heading, then two rows of member organisation logos scrolling horizontally in opposite directions (infinite marquee animation). Logos are fetched from Notion at build time. Top row shows steering members prominently, then all members scroll beneath.
**Used on:** All microsites, directly below the hero.
**Data source:** Notion API via `src/lib/fetch-logos.mjs`

### 6. TextBlock (What Is...)
**File:** `src/components/what-sci.astro` / `what-wdpc.astro` / `what-soft.astro`
**Description:** Centred text section with H1 heading + 1-2 body paragraphs. Clean, white background. Sometimes includes a scrolling ticker/banner beneath it with key facts.
**Used on:** All microsites.
**Variants:**
- **SCI:** "What is Software Carbon Intensity?" + scrolling ticker banner
- **WDPC:** "What is WDPC?" + 4 feature cards below
- **SOFT:** "What is SOFT?" + illustration to the right

### 7. SectionHeader
**Description:** A simple centred H1 + subtitle paragraph used to introduce topic sections (e.g., "Why SCI Matters", "Why WDPC Matters"). Acts as a divider between content blocks.
**Not a standalone file** — embedded in parent sections. But a consistent pattern.

### 8. TextWithImage (Industry Impact / Environmental Impact)
**File:** Part of `why-sci.astro` / `why-wdpc.astro` / `why-soft.astro`
**Description:** Two-column layout. One side has H1 heading + long body paragraph. Other side has a large SVG illustration. Alternates which side the image is on (left/right). Light background with subtle leaf/nature decorative elements.
**Used on:** All microsites for "Industry Impact" and "Environmental Impact" sections.
**Variants:**
- Text left, image right (Industry Impact)
- Image left, text right (Business Benefits, Environmental Impact)

### 9. BenefitsList (Business Benefits)
**File:** Part of `why-sci.astro` / `why-wdpc.astro` / `why-soft.astro`
**Description:** H1 heading with a vertical list of benefit items. Each item has a numbered circle icon (1, 2, 3, 4) with a green checkmark, plus a one-line description. Appears alongside a large illustration.
**Used on:** All microsites.
**Variants:**
- **SCI:** 4 benefits (Cost Efficiency, Sustainability Goals, Competitive Advantage, Future-Proof)
- **WDPC:** 5 benefits (Grid Stability, Carbon Optimization, Cost Reduction, Heat Recovery, Infrastructure Efficiency)
- **SOFT:** 5 benefits (Cost savings, Operational excellence, Competitive advantage, Risk mitigation, Innovation)

### 10. EquationBlock (How It Works)
**File:** `src/components/how-it-works.astro` (SCI only)
**Description:** Centred section with heading, explanatory paragraph, then a large styled equation display (e.g., "SCI = (E x I + M) per R") rendered in a distinctive display font. Below the equation, additional explanatory text.
**Used on:** SCI only. Unique to SCI.

### 11. SuccessStoriesCarousel
**File:** `src/components/success-stories.astro` + `src/components/react/success-stories-carousel.tsx`
**Description:** Interactive horizontal carousel (Embla) showing case study cards. Each card has: organisation badge, H3 title, summary paragraph, and "Read Case Study" link. Left/right arrow buttons for navigation. Shows 1 card on mobile, 2 on tablet, 3 on desktop.
**Used on:** SCI only.
**Note:** This is a React interactive component (client:visible hydration).

### 12. TestimonialQuote
**File:** `src/components/testimonial.astro`
**Description:** Wide section with a large blockquote in italics, flanked by decorative quotation mark SVGs. Below the quote: person name, title, and company. Cream/light background.
**Used on:** SCI only.

### 13. StatsGrid (Research / Validated by Academia)
**File:** `src/components/research.astro`
**Description:** Split layout. Left side has heading, body text, and a 2x2 grid of stat boxes (e.g., "ISO/IEC - International Standard 21031:2024", "15+ Peer-Reviewed Papers", "10+ Enterprise Implementations", "ACM & IEEE - Published in Top Venues"). Right side has 3 linked reference cards (Microsoft, ACM, ThoughtWorks) with titles and arrow links.
**Used on:** SCI only.

### 14. AudienceTabs
**File:** `src/components/audience-benefits.astro` + `src/components/react/architecture-tabs.tsx`
**Description:** Tabbed interface with H1 heading. Left column shows tab triggers (e.g., "Practitioners", "Business Leaders", "Sustainability Teams"). Clicking a tab reveals its description text. Right column shows a corresponding illustration that changes per tab. Uses Radix UI Tabs with Framer Motion transitions.
**Used on:** SCI ("Built for Every Role in Software"), WDPC ("A New Architecture for Energy Intelligence").
**SOFT variant:** Uses a different layout — 3 side-by-side audience cards instead of tabs (see AudienceCards below).

### 15. AudienceCards (SOFT variant)
**File:** `src/components/blog.astro` (in SOFT/WDPC)
**Description:** Three side-by-side cards, each with: large illustration on top, icon + heading, and body paragraph. Used for different audience segments (C-Suite, Practitioners, Sustainability).
**Used on:** SOFT ("SOFT Works for Everyone"), WDPC ("WDPC Audience").

### 16. ResourceCards
**File:** `src/components/resources.astro`
**Description:** H2 heading + row of 3 cards. Each card has an SVG icon/illustration at top, H3 title, body text, and a CTA button at the bottom. Cards have subtle shadows and rounded corners.
**Used on:** SCI ("Everything You Need to Get Started"), SOFT ("Get Involved"), WDPC ("Shape the Future").
**Variants:**
- 3 cards (SCI, SOFT)
- 3-4 cards (WDPC)

### 17. Timeline
**File:** `src/components/timeline.astro` + `src/components/react/timeline-track.tsx`
**Description:** H2 heading + horizontal timeline with connected milestone nodes. Each node shows a date (H3) and description. Nodes are connected by a progress track line that fills based on current status. Completed milestones have green filled circles; upcoming ones are outlined. The "Current" node has a pulsing ping animation.
**Used on:** All microsites.
**Note:** The timeline track is a React component with Framer Motion animation.

### 18. TeamSection
**File:** `src/components/team.astro`
**Description:** Section with H2 "Project Leadership" + subtitle. Shows 2 team member cards side by side. Each card has: circular photo, name, role title, company, and LinkedIn icon link. Decorative leaf SVG illustration to one side.
**Used on:** All microsites.
**Variants:**
- **SCI:** 2 members + leaf illustration on right
- **WDPC:** 1 member with description text + "actively recruiting" badge
- **SOFT:** 2 members + leaf illustration on right

### 19. AboutGSF
**File:** `src/components/about-gsf.astro`
**Description:** Two-column layout. Left side has GSF logo illustration. Right side has H2 "About the Green Software Foundation", 2 body paragraphs, and a "Learn more about GSF" button link.
**Used on:** All microsites. Content is nearly identical across all three.

### 20. CTABanner
**File:** `src/components/cta.astro` (WDPC/SOFT)
**Description:** Full-width dark green section with centred H1 heading and body paragraph. No buttons — purely a closing statement. Appears just above the footer.
**Used on:** WDPC ("Future of Sustainable Computational Energy"), SOFT ("The Future of Software is Sustainable").
**Note:** SCI does not have this component.

### 21. MissionCard
**File:** `src/components/mission-card.astro` (SOFT/WDPC)
**Description:** A visually distinct card with illustration on one side and a quotation/statement on the other. Has decorative rounded corners and a subtle gradient background.
**Used on:** SOFT, WDPC.

### 22. FeatureGrid
**File:** `src/components/features.astro` (SOFT) / Part of `what-wdpc.astro`
**Description:** Grid of 4 feature cards, each with an icon, H3 title, and description paragraph. Cards have subtle borders and even spacing. Used to explain core pillars or capabilities.
**Used on:**
- **WDPC:** "What is WDPC?" section (4 features: Standardized Data, Real-time Coordination, Grid Stability, Renewable Energy)
- **SOFT:** "The SOFT Framework" (4 pillars: Strategy, Implementation, Operational, Compliance)

### 23. GetStartedCTA
**File:** `src/components/ready-to-implement.astro` / `src/components/get-started.astro` (SOFT)
**Description:** Compact section with illustration, H2 heading, body text, and a single CTA button. Used as a mid-page call-to-action to break up content sections.
**Used on:** SOFT ("Ready to Explore?").

### 24. LeadershipSpotlight
**File:** `src/components/leading.astro` (WDPC)
**Description:** A unique section showing a single project lead with their photo, name, title, organisation, a description block, and a "recruiting contributors" badge. Different from the standard TeamSection — more detailed, single-person focus.
**Used on:** WDPC only.

---

## UI Primitives (src/components/ui/)

These are the low-level building blocks used by all section components above.

### 25. Button
**File:** `src/components/ui/button.tsx`
**Variants:**
- `primary` — Dark green background, white text
- `primary-invert` — White background, dark green text/border
- `outline` — Transparent with green border
- `secondary` — Light grey background
- `link` — Text-only, underline on hover
**Sizes:** `default`, `sm`, `lg`, `icon`

### 26. Card
**File:** `src/components/ui/card.tsx`
**Sub-components:** Card, CardHeader, CardTitle, CardDescription, CardAction, CardContent, CardFooter
**Description:** Flexible card container with rounded corners, border, and shadow. Used by ResourceCards, SuccessStories, FeatureGrid, etc.

### 27. Tabs
**File:** `src/components/ui/tabs.tsx`
**Sub-components:** Tabs, TabsList, TabsTrigger, TabsContent
**Description:** Radix UI tabs with custom styling. Used by AudienceTabs and ArchitectureTabs.

### 28. Badge
**File:** `src/components/ui/badge.tsx`
**Description:** Small pill/label component. Used for organisation names on case study cards, status labels on timeline.

### 29. Sheet
**File:** `src/components/ui/sheet.tsx`
**Sub-components:** Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose
**Description:** Slide-in drawer panel. Used for mobile navigation menu.

### 30. NavigationMenu
**File:** `src/components/ui/navigation-menu.tsx`
**Description:** Radix UI navigation menu with desktop-optimised layout. Used inside Navbar for desktop view.

---

## Shared Utilities

### cn() utility
**File:** `src/lib/utils.ts`
**Description:** Class name merging utility using `clsx` + `tailwind-merge`. Used everywhere.

### fetch-logos.mjs
**File:** `src/lib/fetch-logos.mjs`
**Description:** Build-time script that queries Notion API for member logos, downloads images, and generates `src/data/logos.json`. Runs before `dev` and `build`.

---

## Colour Themes

Each microsite uses the same CSS variable structure but with different values:

| Variable | SCI | WDPC | SOFT |
|----------|-----|------|------|
| `--primary-darkest-2` | #002625 | #002625 | #002625 |
| `--primary-darkest-1` | #003d3b | #003d3b | #003d3b |
| `--primary-dark` | #005451 | #005451 | #005451 |
| `--primary` | #006d69 | #006d69 | #006d69 |
| `--accent` | #aecc53 | #aecc53 | #aecc53 |

Note: The colour palettes appear to be **identical** across all three microsites. Differentiation comes from the illustrations and content, not the colour scheme.

---

## Usage Guide

When specifying a page layout for the new GSF main site, reference components by name:

**Example specification:**
```
Homepage:
1. Navbar (main site navigation: Home, Projects, Articles, Team, Join Us)
2. Hero (H1: "Building a Future Where Software Has Zero Harmful Environmental Impact", CTAs: "Our Projects", "Join the Foundation")
3. LogoMarquee (heading: "Our Steering Members")
4. TextBlock (heading: "What is Green Software?", body: ...)
5. FeatureGrid (4 cards: SCI Standard, SOFT Framework, WDPC, Impact Framework)
6. AudienceCards (3 cards: Developers, Business Leaders, Sustainability Teams)
7. ResourceCards (3 cards: Take a Course, Read Our Articles, Join Us)
8. AboutGSF
9. Footer
```
