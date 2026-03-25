# Membership Page

**URL:** `/membership/`
**File:** `src/pages/membership/index.astro`

## What the Page Shows

The membership proposition: steering and general membership benefits, real member stories, fee tables, and the process to join.

## Sub-pages

### How to Apply

**URL:** `/membership/apply/`
**File:** `src/pages/membership/apply.astro`

Step-by-step guide to the Linux Foundation enrolment process. Includes annotated screenshots of the LF login page, LFID creation, and the GSF enrolment form. Also contains an important callout about the non-negotiable membership agreement.

Screenshots are stored in `public/assets/membership/`:

- `lf-login.png` — LF login page (LFID + social login)
- `lf-create-lfid.png` — LFID creation page
- `lf-enrollment-form.png` — LFX Member Enrollment form

## Dynamic Elements

### Logo marquee

The standard LogoMarquee component showing active member logos. See [logo marquee doc](../components/logo-marquee.md).

### Organisation logos on story cards

The ProjectCards component shows member stories with scrolling organisation logos. Organisation names are resolved against `members.json` to display logos:

```js
const logoMap = new Map(membersData.filter(m => m.logo && !m.hideLogo)
  .map(m => [m.companyName.toLowerCase(), `/assets/${m.logo}`]));
```

Note: this filter intentionally includes inactive members (no `m.active` check) so historical stories still show correct logos.

### GA4 event tracking

Clicks on membership enquiry mailto links fire a `membership_enquiry` GA4 event with `click_location` set to the nearest section heading. See [Google Analytics doc](../google-analytics.md).

## Static Elements

- **Hero** — heading, CTA (mailto link)
- **TextBlock** — "Members bring their hardest problems"
- **Steering proposition** — TextWithImage
- **Contact section** — dark banner with email
- **Steering benefits** — FeatureGrid (4 items: bespoke plan, direct resources, executive deep dives, guaranteed seats)
- **Member stories** — ProjectCards with 4 hardcoded stories (Practitioner course, SOFT, Carbon Aware SDK, SCI). Each story has hardcoded org names resolved to logos
- **General membership benefits** — FeatureGrid (6 items)
- **How It Works** — FeatureGrid (8-step process from first conversation to monthly reports)
- **Fee tables** — two tables (already an LF member vs. not yet), with desktop and mobile layouts. Fees range from Free (academic/government) to $100,000 (steering)
- **CTA banner**

## How to Update

| Change | Where |
|--------|-------|
| Update fee tables | Edit the table data in `membership/index.astro` |
| Add/change member stories | Edit the `ProjectCards` props in `membership/index.astro` |
| Update steering benefits | Edit the FeatureGrid in `membership/index.astro` |
| Change contact email | Edit the mailto link (currently `help@greensoftware.foundation`) |
| Update apply screenshots | Replace PNGs in `public/assets/membership/` |
| Update apply page copy | Edit `membership/apply.astro` |
