# How To: Governance & Leadership Page

This guide explains where the governance page data comes from, how the Notion data pipeline works, and how to keep the page updated.

## Overview

The governance page at `/governance/` displays the foundation's leadership structure. **No people data is hardcoded** — everything comes from Notion via the fetch script. If someone's role changes in Notion, the page updates on the next build.

**Key files:**

| File | Purpose |
| ---- | ------- |
| `src/pages/governance.astro` | Page template — composes components and prepares data from JSON |
| `src/data/team.json` | All people data (fetched from Notion) |
| `scripts/fetch-notion-data.cjs` | Notion fetch script that produces team.json |
| `src/components/team-grid.astro` | Team display component (photo, name, role, company, LinkedIn) |
| `src/components/governance-diagram.astro` | Visual hierarchy diagram |

## Page sections and their data sources

### 1. Governance Structure Diagram

**Source:** Static HTML/SVG in `src/components/governance-diagram.astro`

This is a hand-maintained component showing the hierarchy: Linux Foundation → Joint Development Foundation → GSF → Steering Committee → Working Groups / Committees → Staff.

**When to update:** Only when the foundation's structural hierarchy changes (e.g. a new working group is created or renamed). Edit the component directly.

### 2. Steering Committee / Board

**Source:** `team.json` → entries where `groups` includes `"steeringCommittee"`

**Notion pipeline:**
- The fetch script queries the **PWCIs** data source for the "Steering Committee" entity
- Then queries **Subscriptions** for active subscriptions linked to that entity with committee roles (`Committee Chair`, `Committee Vice-Chair`, `Committee Member`)
- Resolves each subscription to a person via the **Volunteers** data source
- Downloads photos to `public/assets/team/`

**On the page:**
- Chair (Gadhu Sundaram) and Vice-Chair (Jonathan Turnbull) are displayed first as highlighted cards — these names are matched in `governance.astro` (lines 23–24)
- Remaining members display in a 3-column grid

**When to update:** Changes in Notion are picked up automatically on the next `npm run fetch-notion` + build. If the Chair or Vice-Chair changes, update the name strings in `governance.astro` (the `steeringChair` and `steeringViceChair` lookups).

### 3. Staff / Our Team

**Source:** `team.json` → entries where `groups` includes `"administrativeTeam"`

**Notion pipeline:**
- Queries the **GSF Team** database (`DS.GSF_TEAM`) for pages with Status = "Active"
- Reads the `Person` (rich text) and `Role` (title) properties
- Cross-references against the **Volunteers** database to find LinkedIn URLs and photos
- Downloads photos to `public/assets/team/`

**On the page:**
- Sorted with Executive Director first, then alphabetically
- Displayed in a 3-column grid on white background

**When to update:** Add/remove/edit staff in the GSF Team database in Notion. Run `npm run fetch-notion` to pull changes.

### 4. Chairs & Project Leads

**Source:** `team.json` → entries where `groups` includes `"chairsAndLeads"`

**Notion pipeline:**
- Queries **Subscriptions** for active subscriptions with any of these roles: `Working Group Chair`, `Project Lead`, `Project Co-Lead`, `Committee Chair`, `Committee Vice Chair`, `Committee Member`
- For each subscription, resolves the **PWCI name** (the working group / project / committee) to build a human-readable label like `"Software Standards WG (Chair)"`
- Resolves the person via **Volunteers**
- De-duplicates: if someone has multiple leadership roles, all roles are collected into a `leadershipRoles` array

**On the page:**
- Committee Members (role ending in `(Member)`) are filtered out — only chairs, leads, and vice-chairs are shown
- Each person's card shows their leadership role(s) as a label
- Displayed in a 4-column grid

**When to update:** Subscription role changes in Notion are picked up automatically. If a new working group or project is created in Notion, it will appear once someone has a leadership subscription to it.

### 5. Organisation Leads

**Source:** `team.json` → entries where `groups` includes `"organisationalLeads"`

**Notion pipeline:**
- Queries **Subscriptions** where `Role for Subscription` = `"Organization Lead"` and Status = Active
- Resolves each to a person via **Volunteers**
- Resolves their company via the **Member** relation

**On the page:**
- Displayed as a table sorted by company name
- Shows: Organisation, Lead name, Title, LinkedIn link
- Only leads with a company are shown (filtered on `p.company`)

**When to update:** Org Lead assignments in Notion are picked up automatically. Each steering member organisation should have an Organisation Lead assigned via a Subscription in Notion.

### 6. Legal & Registration

**Source:** Static content in `governance.astro`

Displays the foundation's legal details: EIN, fiscal sponsor (Linux Foundation), registered address, and a link to ProPublica tax filings.

**When to update:** Only if legal details change. Edit the HTML directly in `governance.astro`.

## Notion data sources

The fetch script (`scripts/fetch-notion-data.cjs`) uses these Notion data sources:

| Constant | Data Source ID | Contains |
| -------- | -------------- | -------- |
| `DS.MEMBERS` | `13c561d4-30ca-47ef-92cc-5f59fe803c80` | Member organisations (name, logo, website, membership level) |
| `DS.SUBSCRIPTIONS` | `9ac54c12-ae9b-43ae-8a46-db440a485cb2` | Role subscriptions linking people to PWCIs (working groups, committees, projects) |
| `DS.PWCIS` | `68118401-8eba-471d-bfec-fc09b5f99257` | Projects, Working groups, Committees, Initiatives |
| `DS.VOLUNTEERS` | `5274eabc-3b79-4eef-a254-4ed92879d86d` | Individual people (name, job title, LinkedIn, photo, member org) |
| `DS.GSF_TEAM` | `123456c0-7cab-806c-86a0-000b10bfc753` | GSF staff members (person name, role) |

### Key Notion properties used

**Subscriptions:**
- `Role for Subscription` (select) — e.g. "Committee Chair", "Project Lead", "Organization Lead"
- `PWCIs` (relation) — links to the working group / project / committee
- `Subscription Status` (select) — must be "Active"

**Volunteers:**
- `First Name`, `Last Name` (rich text)
- `Job Title` (rich text)
- `LinkedIn` (URL)
- `Photo` (files)
- `Member` (relation) — links to the member organisation

**PWCIs:**
- `Name` (title) — e.g. "Software Standards WG", "Carbon Aware SDK"
- `Internal Status` (select) — must be "Active"

## How to refresh the data

### Locally

```bash
# Requires NOTION_API_KEY in .env
npm run fetch-notion
```

This writes updated JSON to `src/data/` and downloads photos/logos to `public/assets/`. Then run `npm run dev` to see changes.

### On Netlify (production)

The build command is `npm run build:full`, which runs `fetch-notion` before the Astro build. The `NOTION_API_KEY` is set in the Netlify dashboard.

Every deploy automatically fetches fresh data from Notion.

### If NOTION_API_KEY is missing

The fetch script exits gracefully and creates empty fallback JSON files (`team.json: []`, `logos.json: []`, etc.) so the build doesn't break. The governance page will render with empty sections.

## Output files

The fetch script produces these files relevant to governance:

| Output file | Contents |
| ----------- | -------- |
| `src/data/team.json` | Array of person objects, each with `fullName`, `role`, `company`, `photo`, `socialMedia`, `groups[]`, and optionally `leadershipRoles[]` |
| `public/assets/team/*.{png,jpg}` | Downloaded headshot photos, named by slugified person name |

### team.json structure

Each entry in `team.json` looks like:

```json
{
  "fullName": "Gadhu Sundaram",
  "role": "Vice President",
  "company": "NTT DATA",
  "companyWebsite": "https://nttdata.com/",
  "photo": "/assets/team/gadhu-sundaram.jpg",
  "socialMedia": [
    { "platform": "Linkedin", "link": "https://linkedin.com/in/..." }
  ],
  "groups": ["steeringCommittee", "chairsAndLeads", "organisationalLeads"],
  "leadershipRoles": ["Steering Committee (Chair)"]
}
```

The `groups` array determines which page sections a person appears in:

| Group value | Page section |
| ----------- | ------------ |
| `steeringCommittee` | Steering Committee / Board |
| `administrativeTeam` | Our Team (staff) |
| `chairsAndLeads` | Chairs & Project Leads |
| `organisationalLeads` | Organisation Leads |

A person can belong to multiple groups and will appear in each corresponding section.

## Troubleshooting

**Person missing from a section?**
- Check their subscription in Notion — is it Active? Does it have the right role?
- Run `npm run fetch-notion` and check the console output for warnings
- Look in `src/data/team.json` for their name and check their `groups` array

**Photo not showing?**
- Check `public/assets/team/` for the photo file
- Ensure the person has a Photo file attached in the Volunteers database in Notion
- Notion file URLs expire — a fresh `fetch-notion` run will re-download them

**New working group or committee not appearing?**
- Ensure the PWCI has `Internal Status` = "Active" in Notion
- Ensure at least one person has a leadership subscription to it
- The governance diagram (`governance-diagram.astro`) is static — update it manually if the hierarchy changes
