# Feature Spec: Notion Integration for Members & Team Data

**Status:** Planned
**Created:** 2026-02-23
**Last Updated:** 2026-02-23

## Overview

Replace DatoCMS as the source for membership and team data with Notion databases. A pre-build script fetches data from the Notion API, downloads images, and writes JSON files to `content/`. Gatsby then sources these JSON files like any other static data. Builds run on a daily schedule with the option to trigger manually.

## Problem Statement

The homepage displays steering members, general members, and numerical figures (individual/organisation counts) sourced from DatoCMS (`datoCmsHomepage`). The team page shows steering committee, admin team, and org leads from DatoCMS (`allDatoCmsMember`). This data is already maintained in Notion databases. Having it duplicated in DatoCMS creates sync issues and an unnecessary dependency.

## Solution

### Architecture

```
Notion databases
       │
       ▼
Pre-build script (scripts/fetch-notion-data.js)
       │
       ├── content/members/steering-members.json
       ├── content/members/general-members.json
       ├── content/members/logos/microsoft.png
       ├── content/members/logos/accenture.png
       ├── content/team/team.json
       ├── content/team/photos/asim-hussain.jpg
       └── content/members/stats.json
       │
       ▼
gatsby-source-filesystem + gatsby-transformer-json
       │
       ▼
GraphQL layer → React pages
```

### Data Required

**Homepage — Member Logos (Section 4 & 5):**

Currently from `datoCmsHomepage.steeringMembers` and `datoCmsHomepage.generalMembers`:

```json
// content/members/steering-members.json
[
  {
    "companyName": "Microsoft",
    "companyWebsite": "https://microsoft.com",
    "logo": "logos/microsoft.png",
    "logoWidth": 200,
    "logoHeight": 50,
    "logoFormat": "png"
  }
]
```

```json
// content/members/general-members.json
[
  {
    "companyName": "Accenture",
    "companyWebsite": "https://accenture.com",
    "logo": "logos/accenture.svg",
    "logoWidth": 150,
    "logoHeight": 40,
    "logoFormat": "svg"
  }
]
```

The `logoWidth`, `logoHeight`, and `logoFormat` fields are needed because the homepage currently uses aspect ratio (`width/height > 2`) to apply `horizontal` vs `vertical` CSS classes, and checks `format === "svg"` for an `isSVG` class.

**Homepage — Stats (Section 3):**

```json
// content/members/stats.json
{
  "numberOfIndividuals": 42000,
  "numberOfOrganisations": 80
}
```

These are currently single number fields on the `datoCmsHomepage` model. In Notion, they could be properties on a dedicated "Website Stats" page/database, or computed from the member databases (count of rows). TBD based on how the Notion databases are structured.

**Team Page:**

Currently from `allDatoCmsMember` with three boolean filters:

```json
// content/team/team.json
[
  {
    "fullName": "Asim Hussain",
    "role": "Executive Director",
    "company": "Green Software Foundation",
    "companyWebsite": "https://greensoftware.foundation",
    "photo": "photos/asim-hussain.jpg",
    "socialMedia": [
      { "platform": "Twitter", "link": "https://twitter.com/jawache" },
      { "platform": "Linkedin", "link": "https://linkedin.com/in/jawache" }
    ],
    "groups": ["steeringCommittee", "administrativeTeam"]
  }
]
```

The `groups` array replaces the three DatoCMS booleans (`isSteeringCommitteeMember`, `isAdministrativeTeamMember`, `isGeneralMember`). The page filters at render time, or the script could output three separate JSON files. A single file with tags is simpler.

Alternatively, if dedicated Notion views or databases exist per group, the script fetches each separately and writes `steering-committee.json`, `admin-team.json`, `org-leads.json`.

### Notion Database Mapping

**TBD** — exact database IDs and field names to be filled in once Notion access is available. The script will need:

| Data | Notion Source | Notes |
|------|--------------|-------|
| Steering members | TBD — database or view | Company name, website, logo file |
| General members | TBD — database or view | Company name, website, logo file |
| Stats | TBD — could be computed or manual | Individual count, organisation count |
| Team members | TBD — database or view | Name, role, company, photo, social links, group tags |

Consider using simplified Notion views that pre-filter the right members, so the script doesn't need complex filtering logic.

### Pre-Build Script

`scripts/fetch-notion-data.js`:

1. **Authenticate** with the Notion API using an integration token (stored as `NOTION_API_KEY` environment variable)
2. **Query each database/view** using the Notion SDK (`@notionhq/client`)
3. **Map Notion properties** to the JSON schema above (property name mapping is configured at the top of the script)
4. **Download images** — Notion file URLs are temporary (expire after ~1 hour). The script must download every logo and photo to `content/members/logos/` and `content/team/photos/` on every build. Use a hash of the Notion file URL or the company/person name as the filename.
5. **Write JSON files** to `content/members/` and `content/team/`
6. **Log** a summary: how many members fetched, how many images downloaded, any errors

```js
// Pseudocode
const { Client } = require("@notionhq/client");
const notion = new Client({ auth: process.env.NOTION_API_KEY });

async function fetchMembers(databaseId) {
  const response = await notion.databases.query({ database_id: databaseId });
  return response.results.map(page => ({
    companyName: page.properties["Company Name"].title[0]?.plain_text,
    companyWebsite: page.properties["Website"].url,
    // ... map other fields
  }));
}

// Download images, write JSON, etc.
```

### Image Handling

Notion file attachment URLs expire after ~1 hour. The script **must** download images on every build:

1. For each member/team entry with a logo or photo, download the file
2. Save to `content/members/logos/{company-name-slugified}.{ext}` or `content/team/photos/{name-slugified}.{ext}`
3. Store the relative path in the JSON
4. Images are then served via Netlify Image CDN like all other images

To avoid re-downloading unchanged images on every build, the script could:
- Compare file sizes or use ETags if available
- Cache a manifest of `{ notionPageId: lastModified }` and skip unchanged entries
- Or just re-download everything — for ~100 logos + ~30 photos, it's fast enough

### Build Pipeline

**Netlify build command** changes from `gatsby build` to:

```bash
node scripts/fetch-notion-data.js && gatsby build
```

Or in `package.json`:

```json
{
  "scripts": {
    "prebuild": "node scripts/fetch-notion-data.js",
    "build": "gatsby build"
  }
}
```

Netlify automatically runs `prebuild` before `build` if both are npm scripts.

### Build Triggers

**Daily scheduled build:**
- Set up a Netlify build hook (a unique URL that triggers a build when POSTed to)
- Trigger it via:
  - A GitHub Actions cron workflow (e.g. `schedule: - cron: '0 6 * * *'` for daily at 6am UTC)
  - Or Netlify's scheduled functions
  - Or an external cron service

**Manual trigger:**
- Netlify dashboard "Trigger deploy" button
- Or POST to the build hook URL (could be a bookmarklet or Slack shortcut)

### Environment Variables

Add to Netlify (and `.env.example`):

```
NOTION_API_KEY=secret_xxx          # Notion integration token
NOTION_MEMBERS_DB_ID=xxx           # Database ID for members
NOTION_TEAM_DB_ID=xxx              # Database ID for team
```

The Notion integration must be shared with the relevant databases in Notion's settings.

### Gatsby Config Changes

Add filesystem sources for the new content directories:

```js
{
  resolve: "gatsby-source-filesystem",
  options: { name: "members", path: "./content/members/" },
},
{
  resolve: "gatsby-source-filesystem",
  options: { name: "team", path: "./content/team/" },
},
```

`gatsby-transformer-json` (added as part of the DatoCMS migration) handles the JSON files.

### Page Updates

**`src/pages/index.js`:**
- Replace `datoCmsHomepage` query with `allSteeringMembersJson`, `allGeneralMembersJson`, `statsJson`
- Logo `<img>` tags use Netlify Image CDN URLs instead of DatoCMS fluid images
- `logoWidth`/`logoHeight`/`logoFormat` fields preserved for the aspect ratio CSS logic

**`src/pages/team.js`:**
- Replace three `allDatoCmsMember` queries with `allTeamJson`
- Filter by `groups` array in the component (or query three separate JSON files)
- Photos via Netlify Image CDN

## Implementation Plan

1. **Set up Notion integration** — create a Notion integration, share it with the relevant databases, get the API key and database IDs
2. **Write `scripts/fetch-notion-data.js`** — Notion API queries, property mapping, image downloads, JSON output
3. **Test locally** — run the script, verify JSON output and downloaded images
4. **Update Gatsby config** — add filesystem sources and transformer-json
5. **Update `src/pages/index.js`** — swap DatoCMS query for JSON queries, update rendering
6. **Update `src/pages/team.js`** — swap DatoCMS query for JSON query, update rendering
7. **Update build command** — add `prebuild` script
8. **Add environment variables** to Netlify
9. **Set up daily build trigger** — GitHub Actions cron or Netlify scheduled function
10. **Verify** — full build, check homepage members render, check team page renders
