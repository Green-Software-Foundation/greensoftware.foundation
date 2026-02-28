# Architecture — Data Sources

## Overview

This Gatsby site pulls content from DatoCMS for most pages, with a few pages being entirely local/static. Dynamic pages are created in `gatsby-node.js` from DatoCMS queries.

## Pages (src/pages/)

| Page | Data Source | DatoCMS Models | Notes |
|------|-------------|----------------|-------|
| `index.js` (Homepage) | **DatoCMS** | `datoCmsHomepage` | Steering/general members, individual counts, newsletter |
| `onboarding.js` | **DatoCMS** | `allDatoCmsCompany` | Queries member companies for registration form |
| `press.js` | **DatoCMS** | `allDatoCmsPress` | Press cards (logo, headline, link) |
| `projects.js` | **DatoCMS** | `allDatoCmsProjectV2` | Projects grid/list |
| `subscribe.js` | **DatoCMS** | `allDatoCmsProjectV2` | Populates project checkboxes |
| `team.js` | **DatoCMS** | `allDatoCmsMember` (×3 queries) | Steering committee, admin team, org leads |
| `404.js` | **Local** | — | Static error page |
| `helpdesk.js` | **Local** | — | Hardcoded Zoho form |
| `join-us.js` | **Local** | — | Static membership info, benefits/fees tables |
| `redirect.js` | **Local** | — | Redirect utility (reads query params) |

## Templates (src/templates/) — all DatoCMS-sourced

| Template | DatoCMS Models | Notes |
|----------|----------------|-------|
| `article.js` | `datoCmsArticle`, `allDatoCmsArticle` | Full article with structured text, authors, translation links |
| `articles-list.js` | `allDatoCmsArticle` | Paginated listing (10/page), filters non-translated originals |
| `flat-page.js` | `datoCmsFlatPage` | Generic content (working groups, policy, etc.) |
| `manifesto.js` | `datoCmsManifesto`, `allDatoCmsManifesto` | Multi-language manifesto pages |

## Dynamic Page Generation (gatsby-node.js)

Three types of dynamic pages are created from DatoCMS queries:

1. **Articles** — `allDatoCmsArticle` → paginated list at `/articles/` + individual pages at `/articles/{slug}`
2. **Manifestos** — `allDatoCmsManifesto` → multi-language pages at `/{slug}`
3. **Flat Pages** — `allDatoCmsFlatPage` → generic content at `/{slug}`

## DatoCMS Models Summary

| Model | Used By |
|-------|---------|
| `datoCmsHomepage` | Homepage |
| `datoCmsArticle` | Article template, articles list, gatsby-node |
| `datoCmsManifesto` | Manifesto template, gatsby-node |
| `datoCmsFlatPage` | Flat page template, gatsby-node |
| `datoCmsCompany` | Onboarding page |
| `datoCmsPress` | Press page |
| `datoCmsProjectV2` | Projects page, subscribe page |
| `datoCmsMember` | Team page |

## External Integrations (non-DatoCMS)

| Service | Used Where | Notes |
|---------|-----------|-------|
| Zoho Forms | `helpdesk.js` | Form submits to `forms.zohopublic.eu` — unclear if monitored |
| Mailchimp | Homepage newsletter | Via `gatsby-plugin-mailchimp` |
| Algolia | Site-wide search | Queries in `src/utils/algolia-queries.js` |
| Google Tag Manager | Site-wide | GTM-WTDZZJF via `gatsby-plugin-google-gtag` |
