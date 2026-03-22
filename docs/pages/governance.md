# Governance & Leadership Page

**URL:** `/governance/`
**File:** `src/pages/governance.astro`

## What the Page Shows

The foundation's governance structure: hierarchy diagram, steering committee, staff, chairs/project leads, organisation leads, and legal details.

## Dynamic Elements

All people sections are driven by `src/data/people.json` (fetched from Notion). See [people component doc](../components/people.md) for how this data is produced.

### Steering Committee

**Source:** `people.json` entries where `groups` includes `"steeringCommittee"`

- **Chair** (Gadhu Sundaram) and **Vice-Chair** (Jonathan Turnbull) are displayed as highlighted dark cards — matched by hardcoded names in `governance.astro` (lines 23–24)
- Remaining members display in a 3-column grid, sorted alphabetically

**Notion pipeline:** Queries Subscriptions for active subscriptions linked to the "Steering Committee" PWCI with committee roles (`Committee Chair`, `Committee Vice-Chair`, `Committee Member`). Resolves each to a person via Volunteers DB.

**When the Chair or Vice-Chair changes:** update both the Notion Subscription role AND the hardcoded name strings in `governance.astro`.

### Staff / Our Team

**Source:** `people.json` entries where `groups` includes `"administrativeTeam"`

Sorted with Executive Director first, then alphabetical. Displayed in a 3-column grid on white background.

**Notion pipeline:** Queries GSF Team DB for pages with Status = "Active". Cross-references against Volunteers DB for LinkedIn and photos.

### Chairs & Project Leads

**Source:** `people.json` entries where `groups` includes `"chairsAndLeads"`

- Committee Members (role ending in `(Member)`) are filtered out — only chairs, leads, and vice-chairs shown
- Each person's card shows their `leadershipRoles` as labels (e.g. "Software Standards WG (Chair)")
- Displayed in a 4-column grid

**Notion pipeline:** Queries Subscriptions for active subscriptions with leadership roles. The PWCI name is resolved to build labels like "Software Standards WG (Chair)". Multiple roles for the same person are collected into the `leadershipRoles` array.

### Organisation Leads

**Source:** `people.json` entries where `groups` includes `"organisationalLeads"`

Displayed as a table sorted by company name. Shows: Organisation, Lead name, Title, LinkedIn link. Only leads with a `company` value are shown.

**Notion pipeline:** Queries Subscriptions where `Role for Subscription` = "Organization Lead" and Status = Active. Resolves company via the Member relation.

## Static Elements

### Governance Structure Diagram

Static SVG component at `src/components/governance-diagram.astro`. Shows the hierarchy: Linux Foundation → JDF → GSF → Steering Committee → Working Groups/Committees → Staff. **Update only when the structural hierarchy changes.**

### Legal & Registration

Hardcoded section with EIN (`47-1122212`), fiscal sponsor (Linux Foundation), registered address, and ProPublica tax filing link.

## Notion Data Sources

| Constant | Contains |
|----------|----------|
| `DS.MEMBERS` | Member organisations |
| `DS.SUBSCRIPTIONS` | Role subscriptions linking people to PWCIs |
| `DS.PWCIS` | Projects, working groups, committees |
| `DS.VOLUNTEERS` | Individual people (photos, LinkedIn) |
| `DS.GSF_TEAM` | GSF staff members |

See [Notion doc](../notion.md) for database IDs and property details.

## Key Notion Properties

### Subscriptions

- `Role for Subscription` (select) — "Committee Chair", "Committee Vice-Chair", "Committee Member", "Working Group Chair", "Project Lead", "Project Co-Lead", "Organization Lead"
- `PWCIs` (relation) — links to the working group/project/committee
- `Subscription Status` (select) — must be "Active"

### Volunteers

- `First Name`, `Last Name` (rich text)
- `Job Title` (rich text)
- `LinkedIn` (URL)
- `Photo` (files) — primary source for headshots
- `Member` (relation) — links to the member organisation

### PWCIs

- `Name` (title) — e.g. "Software Standards WG"
- `Internal Status` (select) — must be "Active"

## Troubleshooting

**Person missing from a section?** Check their Subscription in Notion — is it Active? Does it have the right role? Run `npm run fetch-notion` and check console output.

**Photo not showing?** Check `public/assets/team/` for the file. Ensure the person has a Photo in the Volunteers DB. Notion file URLs expire — a fresh `fetch-notion` run re-downloads them.

**New working group not appearing?** Ensure the PWCI has `Internal Status` = "Active" and at least one person has a leadership subscription. The governance diagram is static — update `governance-diagram.astro` manually.
