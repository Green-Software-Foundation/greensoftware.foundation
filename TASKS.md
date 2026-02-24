# TASKS

## Next Up

### Migration: Remove DatoCMS dependency

Full spec: [docs/features/datocms-migration.md](docs/features/datocms-migration.md)

- [ ] **Phase 1: Migration script** — `scripts/migrate-from-datocms.js` to extract all content, convert DAST to Markdown, download images, generate redirects
- [ ] **Phase 2: Gatsby config** — swap `gatsby-source-datocms` for `gatsby-source-filesystem`, add `gatsby-transformer-json`, remove Sharp plugins
- [ ] **Phase 3: gatsby-node.js rewrite** — `onCreateNode` for lang/slug/collection fields, rewrite `createPages` for Markdown sources
- [ ] **Phase 4: Template rewrites** — article, articles-list, manifesto, flat-page templates to use `markdownRemark` queries + `NetlifyImage`
- [ ] **Phase 5: Page & component updates** — press, SEO, person-blob, member-blob, algolia queries
- [ ] **Phase 6: Cleanup** — delete removed pages, add redirects, remove DatoCMS deps, verify build
### Notion Integration: Members & Team Data

Full spec: [docs/features/notion-integration.md](docs/features/notion-integration.md)

- [ ] **Set up Notion integration** — create integration, share with databases, get API key + database IDs
- [ ] **Write pre-build script** — `scripts/fetch-notion-data.js` to query Notion API, download images, write JSON to `content/`
- [ ] **Update homepage** — swap `datoCmsHomepage` query for JSON sources (steering members, general members, stats)
- [ ] **Update team page** — swap `allDatoCmsMember` query for JSON source
- [ ] **Set up daily build trigger** — Netlify build hook + GitHub Actions cron or similar

### Pages to remove

- [ ] **Remove onboarding page** — No longer needed. Currently queries `allDatoCmsCompany`.
- [ ] **Remove projects page** — No longer needed. Currently queries `allDatoCmsProjectV2`.
- [ ] **Remove subscribe page** — No longer needed. Currently queries `allDatoCmsProjectV2`.

### CI/CD & Preview Deploys

- [ ] **Set up Netlify deploy previews for PRs** — Configure Netlify so that each pull request on GitHub gets an automatic preview deploy with a link posted to the PR. Enables visual review of changes before merging.

### Node & Dependency Upgrades

- [ ] **Upgrade Node version** — Currently pinned to 18.5.0. Investigate how far we can upgrade given Gatsby 4 and its plugin ecosystem constraints. Update `.nvmrc` and verify build/dev still work.

### Automation & Visual Testing

- [ ] **Set up browser screenshot automation** — Enable Claude Code to take screenshots of the running dev server (scroll through pages, capture state) to verify changes visually during autonomous development loops. Investigate tooling options (Puppeteer, Playwright, etc.).

### Other

- [ ] **Investigate Zoho helpdesk form** — The [helpdesk page](src/pages/helpdesk.js) submits to a Zoho public form. Check whether anyone monitors submissions. Linked from footer, subscribe, and onboarding pages.

### UI/UX Ideas

- Redesign homepage
- Redesign join-us page
- Redesign members page
- Articles page: add inline search/filter (maybe a search box baked into the page itself)
- Navigation overhaul — figure out what goes in the menu. Needs sections for:
  - Sales
  - Press
  - Success stories
  - White papers
  - Links to microsites
- Remove assemblies section

## Backlog

## Done
