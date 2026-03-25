# Notion Data Pipeline

All dynamic site data is fetched from Notion via `scripts/fetch-notion-data.cjs` and written to `src/data/*.json` plus downloaded assets in `public/assets/`.

## Notion Databases

| Constant | Database ID | Database Name | Description |
|----------|-------------|---------------|-------------|
| `DS.MEMBERS` | `13c561d4-30ca-47ef-92cc-5f59fe803c80` | Members | Member organisations (name, logo, website, tier) |
| `DS.SUBSCRIPTIONS` | `9ac54c12-ae9b-43ae-8a46-db440a485cb2` | Subscriptions | Role subscriptions linking people to working groups/projects/committees |
| `DS.PWCIS` | `68118401-8eba-471d-bfec-fc09b5f99257` | PWCIs | Projects, Working groups, Committees, Initiatives |
| `DS.VOLUNTEERS` | `5274eabc-3b79-4eef-a254-4ed92879d86d` | Volunteers | Individual people (name, title, LinkedIn, photo, member org) |
| `DS.GSF_TEAM` | `123456c0-7cab-806c-86a0-000b10bfc753` | GSF Team | GSF staff members (person name, role) |
| `DS.PRESS_MENTIONS` | `e9e7a23c-9c9e-4811-8eae-e473fbeaa0e5` | GSF Mentions in the News | Press coverage of GSF |
| `DS.ASSEMBLIES` | `a3d1f9ea-d3ba-435b-8824-53886b0fb64f` | Assemblies | Assembly workshops and their metadata |

## Output Files

| Output file | Source database(s) | Consumers |
|-------------|-------------------|-----------|
| `src/data/members.json` | Members | Logo marquee, member counts, org badge resolution on articles/stories |
| `src/data/people.json` | Subscriptions + Volunteers + GSF Team | Governance page, press page leadership, policy page leadership, TeamGrid component |
| `src/data/stats.json` | Computed from Members + Volunteers | Homepage stats |
| `src/data/projects.json` | PWCIs | Standards pages, nav items, working group lookups |
| `src/data/press-mentions.json` | Press Mentions | Press page media coverage section |
| `src/data/assemblies.json` | Assemblies | Assembly index and detail pages |

## Downloaded Assets

| Asset type | Destination | Source |
|------------|------------|--------|
| Member logos | `public/assets/logos/` | Members DB `Logo` field |
| Team/volunteer photos | `public/assets/team/` | Volunteers DB `Photo` field |
| Project icons | `public/assets/project-icons/` | PWCIs DB icon/image fields |

All three asset directories are gitignored — assets are fetched fresh from Notion at build time. This ensures that updates made in Notion (e.g. a new logo or updated project icon) are always picked up on the next build rather than being masked by stale files in Git.

## How to Refresh Data

### Locally

```bash
# Requires NOTION_API_KEY in .env
npm run fetch-notion
```

Writes updated JSON to `src/data/` and downloads images to `public/assets/`. Then run `npm run dev` to see changes.

### On Netlify (production)

The build command `npm run build:full` runs `fetch-notion` before the Astro build. The `NOTION_API_KEY` is set in the Netlify dashboard. Every deploy automatically fetches fresh data.

## Missing NOTION_API_KEY

If the environment variable is absent, the fetch script exits gracefully and creates empty fallback JSON files:

- `members.json` -> `[]`
- `people.json` -> `[]`
- `stats.json` -> `{}`
- `projects.json` -> `[]`
- `press-mentions.json` -> `[]`
- `assemblies.json` -> `[]`

The build succeeds but pages render with empty dynamic sections.

## Known Limitations

### Roll-up files return empty

Notion API roll-up properties of type `files` do **not** return signed download URLs — the `files` array is always empty. This affects photos for subscription-based people (steering committee, chairs/leads, org leads).

**Workaround:** The fetch script builds a `volunteerPhotoByName` map from the Volunteers DB records fetched during `main()`. Photos are resolved by matching the volunteer's name to the subscription holder's name, not via the roll-up relation.

### Subscription roll-ups for person data

Person data for subscription-based people (name, title, LinkedIn, member org) is read directly from Subscription DB roll-up fields (`First Name`, `Surname`, `Title`, `LinkedIn`, `Member`, `Volunteer Status`) via `extractPersonFromSub()`. No per-subscription volunteer lookup is needed. Volunteer Status is checked as a warning only — people with active subscriptions are included regardless of volunteer status.

## Key Notion Properties

### Members DB

- `Member Name` (title) — company name
- `Membership Level` (select) — "Steering" or "General"
- `Organisation Type` (select) — "Company", "Academia", or "Government"
- `Status` (select) — "Active" or other
- `Logo` (files) — company logo
- `Hide Logo` (checkbox) — suppresses logo display
- `Website` (URL) — company URL

### Subscriptions DB

- `Role for Subscription` (select) — e.g. "Committee Chair", "Project Lead", "Organization Lead"
- `PWCIs` (relation) — links to the working group/project/committee
- `Subscription Status` (select) — must be "Active"
- Roll-up fields: `First Name`, `Surname`, `Title`, `LinkedIn`, `Member`, `Volunteer Status`

### Volunteers DB

- `First Name`, `Last Name` (rich text)
- `Job Title` (rich text)
- `LinkedIn` (URL)
- `Photo` (files)
- `Member` (relation) — links to the member organisation
- `Volunteer Status` (select) — "Active" or other

### PWCIs DB

- `Name` (title) — e.g. "Software Standards WG", "Carbon Aware SDK"
- `Internal Status` (select) — "Active" or other
- `Lifecycle Stage` (select) — lifecycle badge on standards page
- `Website URL` (URL)
- `Description` (rich text)

### Assemblies DB

- `Workshop` / `Name` (title) — assembly name
- `Status` (status) — controls visibility and form display (see [assemblies page doc](pages/assemblies.md))
- `Purpose` (select), `Summary` (rich text), `Deliverable` (rich text)
- `Lead`, `Facilitator` (rich text)
- `Visibility` (select) — "Public", "GSF Members Only", or "Invite Only"
- `Start Date`, `End Date`, `Applications Open`, `Application Deadline` (date)
- `Seats`, `Average Attendees` (number)
- `Project` (relation), `Working Group` (relation) — links to PWCIs
- Page body: content below a "Details" heading is extracted as rich HTML

### Press Mentions DB

- `Title` (title)
- `Source URL` (URL)
- `Source Name` (rich text)
- `Date` (date)
