# Feature Spec: Site Rollout — Astro v3 to greensoftware.foundation

**Status:** In Progress
**Created:** 2026-03-21
**Last Updated:** 2026-03-21

## Overview

Deploy the new Astro 5 site to the existing `greensoftware.foundation` Netlify instance by pushing our codebase as a branch on the greensoftware.foundation repo. This avoids DNS changes entirely — the new site replaces the old Gatsby site on the same Netlify site, same domain, same SSL.

## Problem Statement

The new site is currently deployed on a separate Netlify instance (greensoftware.org). To go live on greensoftware.foundation, we need to replace the old Gatsby site. A DNS swap between two Netlify instances is risky and hard to roll back. Instead, we deploy the new code to the same repo/Netlify instance so rollback is just a git revert.

## Strategy

**Same repo, branch-based deployment.**

The greensoftware.foundation Netlify site is connected to the `greensoftware.foundation` GitHub repo. Netlify builds deploy previews for every branch/PR. We push the new Astro codebase as a branch, get a deploy preview on the real Netlify instance, verify everything works, then merge to main.

### Why This Works

- **No DNS changes** — same Netlify site, same domain
- **Deploy preview** — test on the real Netlify instance with real env vars, forms, redirects
- **Easy rollback** — revert the merge on main, Netlify rebuilds the old Gatsby site
- **Redirects carry over** — our `netlify.toml` already covers all legacy redirects from the old site

## Rollout Plan

### Phase 1: Prepare the Branch

- [ ] Push the Astro codebase as a branch (e.g. `v3`) to the `Green-Software-Foundation/greensoftware.foundation` GitHub repo
- [ ] Netlify auto-builds a deploy preview for the branch
- [ ] The deploy preview uses our `netlify.toml` (build command: `npm run build:full`, publish: `dist`, Node 22)

### Phase 2: Verify on Deploy Preview

Test everything on the deploy preview URL:

- [ ] **NOTION_API_KEY** — verify it's set on the greensoftware.foundation Netlify site (not just the greensoftware.org one). If missing, add it via Netlify dashboard → Site settings → Environment variables
- [ ] **Build succeeds** — check the deploy log for errors
- [ ] **Homepage** renders correctly
- [ ] **Articles** — spot-check 5-10 articles, including translated ones
- [ ] **Stories** — check a few story pages
- [ ] **Standards pages** — SCI, SCI for Web, SCI for AI, RTC, SEE, SOFT, WDPC
- [ ] **Other pages** — About, Press, Governance, Membership, Community, Education, Policy, Brand, Contact
- [ ] **Forms** — test the contact form and any other Netlify forms (`data-netlify="true"`)
- [ ] **Redirects** — test legacy URLs: `/join-us`, `/team`, `/helpdesk`, `/subscribe`, `/manifesto`, `/projects`
- [ ] **Search** — Cmd+K search works (PageFind builds correctly)
- [ ] **Images** — Netlify Image CDN serves images correctly
- [ ] **Mobile** — spot-check responsive layout
- [ ] **Dev preview banner** — should show on the deploy preview (not production)
- [ ] **Draft content** — if any articles have `published: false`, verify they render at direct URL but don't appear in listings

### Phase 3: Go Live

- [ ] Merge the `v3` branch into `main` on the greensoftware.foundation repo (use **merge commit**, not squash)
- [ ] Netlify builds and deploys to production
- [ ] **Dev preview banner** — should NOT show on production (verify `CONTEXT=production` hides it)
- [ ] Spot-check the live site

### Phase 4: Post-Launch

- [ ] Monitor Netlify deploy logs for any build warnings
- [ ] Check Google Search Console for crawl errors over the next few days
- [ ] Verify the sitemap at `greensoftware.foundation/sitemap.xml` looks correct
- [ ] Close the old greensoftware.org Netlify site (or repurpose it)

## Rollback

If something goes wrong after merging to main:

1. Revert the merge commit on main
2. Push — Netlify rebuilds the old Gatsby site
3. Investigate and fix before trying again

## What's Already Done

- [x] New `netlify.toml` covers all legacy redirects from the old site
- [x] `published` flag / draft mode — unpublished content renders at its URL but is hidden from listings, search, and sitemap
- [x] Dev preview banner is production-aware (hidden when `CONTEXT=production`)
- [x] Forms use `data-netlify="true"` (assemblies page)
- [x] PageFind site search configured
- [x] Netlify Image CDN integration

## Git Workflow After Rollout

Once the new site is live on greensoftware.foundation, the workflow simplifies:

- **No dev branch** — feature branches merge directly into main
- **Branch protection on main** — require a PR (no direct pushes), optionally require one approval
- **Netlify deploy previews** on every PR — reviewable before merge
- **Draft content** via `published: false` — Sveltia CMS commits to main, content is invisible in listings until published
- **Rollback** — revert the merge on main, or roll back to a previous deploy in the Netlify dashboard

## Phase 5: Redirect Microsites to Standards Pages

Once the new site is live, redirect the standalone microsite domains to the corresponding standards pages on the main site:

| Microsite | Redirect to |
|-----------|-------------|
| `sci.greensoftware.foundation` | `greensoftware.foundation/standards/sci/` |
| `wdpc.greensoftware.foundation` | `greensoftware.foundation/standards/wdpc/` |
| `soft.greensoftware.foundation` | `greensoftware.foundation/standards/soft/` |
| `patterns.greensoftware.foundation` | TBD — may stay separate |
| `learn.greensoftware.foundation` | TBD — may stay separate |
| `badges.greensoftware.foundation` | TBD — may stay separate |

These microsites are currently on GitHub Pages (see `docs/features/domain-migration.md` for hosting inventory). To redirect:

1. **Cloudflare** — add a Redirect Rule for each subdomain (301 to the standards page)
2. **GitHub Pages** — can be left as-is or archived; Cloudflare handles the redirect before the request reaches GitHub

This consolidates the user experience — visitors land on the main site with full context (lifecycle stage, team, related articles) rather than a standalone spec page.

## Notes

- The domain migration (greensoftware.foundation → greensoftware.org) is a separate, later step — see `docs/features/domain-migration.md`
- The greensoftware.org Netlify site can be kept as a staging/preview environment if useful
