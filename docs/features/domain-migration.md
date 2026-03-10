# Feature Spec: Domain Migration — greensoftware.foundation → greensoftware.org

**Status:** Planned
**Created:** 2026-03-10
**Last Updated:** 2026-03-10

## Overview

Migrate the GSF website from `greensoftware.foundation` to `greensoftware.org` without losing search rankings, inbound links, or traffic. This requires 301 redirects, Google Search Console configuration, and careful sequencing.

## Problem Statement

The foundation is rebranding from `.foundation` to `.org`. A domain change is one of the highest-risk SEO operations — done badly it can cause months of lost rankings and traffic. Google treats a domain change as a site move, and we need to explicitly signal this to search engines and ensure every inbound link continues to resolve.

The site has ~189 English articles, multiple translated versions (ja, pt, zh), plus ~15 core pages. There are also external microsites (sci.greensoftware.foundation, patterns.greensoftware.foundation, etc.) that may or may not move at the same time.

## Key Risks

1. **SEO equity loss** — Google may treat the new domain as a new site, resetting PageRank
2. **Broken backlinks** — external sites, academic papers, and social media link to `.foundation`
3. **Indexed pages going 404** — any page that doesn't redirect properly becomes a dead end
4. **Translated content** — `/ja/`, `/pt/`, `/zh/` article URLs need redirects too
5. **Microsite confusion** — subdomains like `learn.greensoftware.foundation` may need separate handling
6. **Analytics continuity** — GA4 property needs updating; historical data comparison becomes harder

## The Plan

### Phase 0: Pre-Migration Audit (Do First)

- [ ] **Export Google Analytics top pages** — get the top 100 pages by traffic for the last 12 months. These are the critical redirects that must work perfectly. Consider exporting a CSV and committing it to `docs/data/` for reference.
- [ ] **Export Google Search Console data** — top queries, top pages, crawl stats. This becomes the baseline for measuring migration success.
- [ ] **Crawl the live site** — use Screaming Frog or `sitemap.xml` to get a complete URL inventory of `greensoftware.foundation`. Every URL that returns 200 needs a redirect.
- [ ] **Inventory all subdomains/microsites** — list every `*.greensoftware.foundation` subdomain and decide: migrate now, migrate later, or keep on `.foundation`.
- [ ] **Check backlinks** — use Ahrefs, Moz, or Google Search Console "Links" report to identify high-value inbound links. These pages are top priority for redirect accuracy.

### Phase 1: Prepare the New Domain

- [ ] **Set up greensoftware.org on Netlify** — deploy the same site to the new domain
- [ ] **Verify greensoftware.org in Google Search Console** — add and verify the property (DNS TXT record or HTML file method)
- [ ] **Set up GA4 for greensoftware.org** — either update the existing GA4 property to include the new domain, or create a new data stream. Updating the existing property preserves continuity.
- [ ] **Update canonical URLs** — ensure all pages on `greensoftware.org` have `<link rel="canonical" href="https://greensoftware.org/...">` (not `.foundation`)
- [ ] **Update sitemap** — `greensoftware.org/sitemap.xml` should list all URLs with the `.org` domain
- [ ] **Update robots.txt** — ensure `greensoftware.org/robots.txt` allows crawling and references the new sitemap
- [ ] **Update all internal links** — any hardcoded references to `greensoftware.foundation` within the site code should point to `greensoftware.org`

### Phase 2: Build the Redirect Map

This is the core technical work. Every URL on `greensoftware.foundation` must 301 redirect to its equivalent on `greensoftware.org`.

#### URL Mapping

| Old URL Pattern | New URL Pattern | Count | Notes |
|----------------|-----------------|-------|-------|
| `/` | `greensoftware.org/` | 1 | Homepage |
| `/articles/{slug}` | `greensoftware.org/articles/{slug}` | ~189 | English articles |
| `/ja/articles/{slug}` | `greensoftware.org/ja/articles/{slug}` | TBD | Japanese articles |
| `/pt/articles/{slug}` | `greensoftware.org/pt/articles/{slug}` | TBD | Portuguese articles |
| `/zh/articles/{slug}` | `greensoftware.org/zh/articles/{slug}` | TBD | Chinese articles |
| `/articles/` (paginated) | `greensoftware.org/articles/` | Multiple | Listing pages |
| `/about/` | `greensoftware.org/about/` | 1 | |
| `/press/` | `greensoftware.org/press/` | 1 | |
| `/standards/` | `greensoftware.org/standards/` | 1 | |
| `/standards/{slug}/` | `greensoftware.org/standards/{slug}/` | ~7 | SCI, SOFT, WDPC, etc. |
| `/community/` | `greensoftware.org/community/` | 1 | |
| `/education/` | `greensoftware.org/education/` | 1 | |
| `/policy/` | `greensoftware.org/policy/` | 1 | |
| `/membership` | `greensoftware.org/membership` | 1 | |
| `/governance` | `greensoftware.org/governance` | 1 | |
| `/brand/` | `greensoftware.org/brand/` | 1 | |
| `/contact/` | `greensoftware.org/contact/` | 1 | |
| `/stories/` | `greensoftware.org/stories/` | 1 | |
| `/stories/{slug}` | `greensoftware.org/stories/{slug}` | TBD | |
| `/assemblies/` | `greensoftware.org/assemblies/` | 1 | |
| `/assemblies/{slug}` | `greensoftware.org/assemblies/{slug}` | TBD | |
| `/newsletter/` | `greensoftware.org/newsletter/` | 1 | |
| `/join-us` | `greensoftware.org/membership` | 1 | Legacy URL → new equivalent |
| `/team` | `greensoftware.org/governance` | 1 | Legacy URL → new equivalent |
| `/helpdesk` | `greensoftware.org/contact/` | 1 | Legacy URL → new equivalent |

#### Legacy URLs (from old Gatsby site)

The old Gatsby site had some URLs that may still be indexed or linked. These also need redirects. Check GA and Search Console for any legacy paths still receiving traffic.

#### Netlify Redirect Configuration

Netlify supports redirects via `netlify.toml` or a `_redirects` file. For this scale:

**Approach A: Wildcard redirect in `netlify.toml` (recommended)**

Since the URL structure is identical between old and new, a single splat rule handles everything:

```toml
[[redirects]]
  from = "/*"
  to = "https://greensoftware.org/:splat"
  status = 301
  force = true
```

This is deployed on the **old** `greensoftware.foundation` Netlify site. It catches every URL and redirects to the same path on `.org`. This is the simplest approach and handles all current and future URLs, including articles, paginated listings, and translated content.

**Approach B: Explicit redirect map (for complex cases)**

If some URLs need to map to different paths (e.g. `/join-us` → `/membership`), add those above the wildcard:

```toml
# Explicit remaps (order matters — first match wins)
[[redirects]]
  from = "/join-us"
  to = "https://greensoftware.org/membership"
  status = 301

[[redirects]]
  from = "/team"
  to = "https://greensoftware.org/governance"
  status = 301

[[redirects]]
  from = "/helpdesk"
  to = "https://greensoftware.org/contact/"
  status = 301

# Catch-all wildcard (must be last)
[[redirects]]
  from = "/*"
  to = "https://greensoftware.org/:splat"
  status = 301
  force = true
```

**Netlify redirect limits:** Netlify allows up to **2,000 redirect rules** in `netlify.toml` and up to **1 million** in a `_redirects` file. The wildcard approach uses just 1 rule, so limits are not a concern.

### Phase 3: Google Search Console — Change of Address

This is the critical SEO step. Google provides a dedicated "Change of Address" tool specifically for domain migrations.

**Steps:**

1. **Both domains must be verified** in Google Search Console (greensoftware.foundation and greensoftware.org)
2. Go to the **old property** (greensoftware.foundation) in Search Console
3. Navigate to **Settings → Change of address**
4. Select `greensoftware.org` as the new site
5. Google will validate that:
   - The new site is verified
   - 301 redirects are in place from old → new
   - The new site is serving content (not redirecting back)
6. Submit the change of address request

**Important:** This tells Google to transfer search signals (PageRank, crawl history, indexed URLs) from the old domain to the new one. Without this step, Google will eventually figure it out from the 301s, but it takes much longer and rankings may dip significantly in the interim.

### Phase 4: Go Live — The Switch

**Recommended sequence (can be done in a single day):**

1. **Deploy greensoftware.org** — confirm the site is live and working on the new domain
2. **Verify all critical pages** — spot-check the top 20 pages from the GA export
3. **Deploy the redirect `netlify.toml`** to the old greensoftware.foundation site — this turns the old site into a pure redirect service
4. **Test redirects** — verify that `curl -I https://greensoftware.foundation/articles/some-slug` returns a `301` pointing to `greensoftware.org`
5. **Submit Change of Address** in Google Search Console
6. **Submit the new sitemap** — in Google Search Console for the `.org` property, submit `https://greensoftware.org/sitemap.xml`
7. **Request re-indexing** of key pages if needed

### Phase 5: Post-Migration Monitoring

- [ ] **Monitor Search Console daily** for the first 2 weeks — watch for crawl errors, indexing drops, or redirect chains
- [ ] **Compare traffic week-over-week** — expect a small dip in the first 1-2 weeks, which should recover
- [ ] **Check for redirect chains** — ensure no URL goes through more than one redirect hop
- [ ] **Monitor 404s** — Search Console will report any URLs that aren't redirecting properly
- [ ] **Keep the old domain and redirects running for at least 1 year** — ideally indefinitely. The old domain should never stop redirecting.
- [ ] **Update external profiles** — GitHub org, npm packages, social media bios, email signatures, LinkedIn, Wikipedia, any directories listing the foundation

### Phase 6: Cleanup (Months Later)

- [ ] Update any remaining hardcoded `.foundation` references in code, configs, and documentation
- [ ] Update email domains if applicable (help@greensoftware.org)
- [ ] Renew the `.foundation` domain — it must keep redirecting for years
- [ ] Consider adding `greensoftware.foundation` as a domain alias in GA4 if not already done

## Infrastructure

Both `greensoftware.foundation` and `greensoftware.org` are managed via **Cloudflare**. This is a significant advantage — Cloudflare Redirect Rules can handle bulk redirects at the edge, without needing to touch each individual site's hosting config.

## Microsites & Subdomains

### Hosting Inventory

| Subdomain | Hosting | Current Use |
|-----------|---------|-------------|
| `badges.greensoftware.foundation` | **Netlify** | SCI certification badges |
| `policy-radar.greensoftware.foundation` | **Notion website** | Policy Radar tool |
| `patterns.greensoftware.foundation` | **GitHub Pages** | Green Software Patterns catalogue |
| `psi.greensoftware.foundation` | **GitHub Pages** | PSI spec |
| `learn.greensoftware.foundation` | **GitHub Pages** | Linux Foundation training links |
| `hack.greensoftware.foundation` | **GitHub Pages** | CarbonHack events |
| `summit.greensoftware.foundation` | **GitHub Pages** | Summit info |
| `sci.greensoftware.foundation` | **GitHub Pages** | SCI spec |
| *(others TBD)* | *TBD* | *Audit Cloudflare DNS for complete list* |

### Migration Approach by Hosting Type

#### Netlify-hosted (main site + badges)

Already covered in Phase 2/4 above. Deploy `netlify.toml` with 301 redirects on the old site.

For `badges.greensoftware.foundation`:
1. Add `badges.greensoftware.org` as a custom domain on the Netlify site
2. Deploy a redirect `netlify.toml` on the old `badges.greensoftware.foundation` Netlify site (same wildcard pattern as the main site)

#### GitHub Pages microsites

These are the bulk of the microsites. The migration for each one:

1. **Cloudflare (.org zone):** Add a CNAME record for `[name].greensoftware.org` pointing to the GitHub Pages target (e.g. `green-software-foundation.github.io`)
2. **GitHub repo:** Update the `CNAME` file in the repo from `[name].greensoftware.foundation` to `[name].greensoftware.org`
3. **GitHub repo settings:** Update the custom domain in the repo's Pages settings
4. **Cloudflare (.foundation zone):** Add a Redirect Rule to 301 `[name].greensoftware.foundation/*` → `https://[name].greensoftware.org/*`

**Important:** GitHub Pages only serves one custom domain per repo. Once you update the CNAME to `.org`, the `.foundation` subdomain will stop serving from GitHub Pages — which is fine, because at that point Cloudflare is handling the `.foundation` → `.org` redirect before the request ever reaches GitHub.

#### Notion-hosted (Policy Radar)

1. **Cloudflare (.org zone):** Add DNS records for `policy-radar.greensoftware.org` pointing to Notion's servers (same records currently on `policy-radar.greensoftware.foundation`)
2. **Notion:** Update the custom domain setting in Notion to `policy-radar.greensoftware.org`
3. **Cloudflare (.foundation zone):** Add a Redirect Rule to 301 `policy-radar.greensoftware.foundation/*` → `https://policy-radar.greensoftware.org/*`

### Cloudflare Bulk Redirect Strategy

Since everything goes through Cloudflare, consider a **single wildcard redirect rule** on the `.foundation` zone that catches all subdomains:

```
Rule: Wildcard redirect
Match: *greensoftware.foundation/*
Redirect to: https://${1}greensoftware.org/${2}
Status: 301
```

This would redirect `anything.greensoftware.foundation/any/path` → `anything.greensoftware.org/any/path` in one rule. You'd set this up **after** all the `.org` subdomains are live and serving content.

**Cloudflare Redirect Rules limits:** Free plan allows 10 single redirect rules. Pro plan allows 25. Bulk Redirects (available on all plans) support up to 20 lists with 500 URL redirects each. The wildcard approach above uses just 1 rule.

### Recommended Sequencing

1. **Main site first** — flip `greensoftware.org` via Netlify (Phase 4)
2. **Badges** — same day, same Netlify approach
3. **GitHub Pages microsites** — phased over 1-2 weeks, one per day, starting with the highest-traffic ones
4. **Policy Radar (Notion)** — can be done any time, low risk
5. **Cloudflare wildcard catch-all** — set up last as a safety net for any subdomains you missed

### Pre-Migration: Audit Cloudflare DNS

Before starting, **export the full DNS zone** for `greensoftware.foundation` from Cloudflare. This gives the complete list of subdomains — there may be ones not listed above. Compare against the `.org` zone to see what's already set up.

```
Cloudflare Dashboard → greensoftware.foundation → DNS → Export DNS file
```

## What We Need from Google Analytics

To prioritise the redirect map and measure success:

1. **Top 100 pages by sessions** (last 12 months) — these are the "must not break" pages
2. **Top 50 landing pages** — pages where users enter the site from search
3. **Top referring domains** — who links to us most
4. **Search queries driving traffic** — what we rank for today (from Search Console)

This data serves as the baseline. After migration, we compare weekly to detect any traffic loss.

## Timeline

| Phase | Duration | When |
|-------|----------|------|
| Phase 0: Audit | 1-2 days | Before anything else |
| Phase 1: Prepare new domain | 1-2 days | After audit |
| Phase 2: Build redirect map | 1 day | Alongside Phase 1 |
| Phase 3: Search Console setup | 30 minutes | Day of switch |
| Phase 4: Go live | 1 day | The flip |
| Phase 5: Monitor | 2-4 weeks | After flip |
| Phase 6: Cleanup | Ongoing | Months later |

**Total active work:** ~3-5 days, spread over a couple of weeks.

## Key Decisions Needed

1. **Migrate all subdomains at once or phased?**
2. **Keep the same GA4 property or create a new one?** (Same property recommended)
3. **When to flip?** Pick a low-traffic day (Saturday?) to minimise impact during the transition
4. **Who updates external listings?** (GitHub, social media, directories, etc.)
5. **Email domain migration timing** — does `help@greensoftware.foundation` move to `.org` at the same time?

## References

- [Google: Change of Address tool](https://support.google.com/webmasters/answer/9370220)
- [Google: Move a site with URL changes](https://developers.google.com/search/docs/crawling-indexing/301-redirects)
- [Netlify redirect documentation](https://docs.netlify.com/routing/redirects/)
- [Netlify `_redirects` vs `netlify.toml`](https://docs.netlify.com/routing/redirects/#syntax-for-the-redirects-file)
