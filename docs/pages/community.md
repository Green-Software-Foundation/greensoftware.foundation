# Community Page

**URL:** `/community/`
**File:** `src/pages/community/index.astro`

## What the Page Shows

The green software community: reach stats, podcasts, connection platforms (Movement Platform, Champions, Newsletter, Badges), meetup network, events, and related articles.

## Dynamic Elements

### Article carousel

Articles tagged `"community"` in frontmatter are shown in a carousel (3-article minimum). See [article carousels doc](../components/article-carousels.md).

## Static Elements

Everything else on this page is hardcoded:

- **Hero** — heading, description, CTAs (Movement Platform, Champions)
- **Community Reach stats** — 5 stats (podcast downloads, meetup members, LinkedIn followers, newsletter subscribers, meetup groups). These are manually maintained values, not pulled from any API
- **Podcasts** — Environment Variables and CXO Bytes cards with images and links
- **Connect section** — FeatureGrid with Movement Platform, Champions Programme, Newsletter, Earn Badges
- **Meetup Network** — world map image + stats (37 groups, 17 countries, 12,000+ members)
- **Events** — Global Summit and Carbon Hack cards
- **CTA banner**

## How to Update

| Change | Where |
|--------|-------|
| Add article to carousel | Tag article with `"community"` |
| Update reach stats | Edit the `CommunityReach` props in `community/index.astro` |
| Update podcast info | Edit the podcast card HTML in `community/index.astro` |
| Update meetup stats | Edit the meetup section in `community/index.astro` |
