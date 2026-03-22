# People & Team Display

People data powers the governance page, press page leadership, policy page leadership, and individual standards pages.

## Data Source

All people data comes from `src/data/people.json`, produced by `scripts/fetch-notion-data.cjs` from multiple Notion databases. See [Notion doc](../notion.md) for database details.

### How people.json is built

The fetch script combines data from three Notion sources:

1. **Subscriptions DB** — steering committee members, chairs/leads, org leads (via `extractPersonFromSub()`)
2. **Volunteers DB** — provides photos, LinkedIn URLs, and job titles for subscription-based people
3. **GSF Team DB** — GSF staff members

### people.json structure

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

## Groups

The `groups` array determines which page sections a person appears in:

| Group value | Governance page section | Populated from |
|-------------|----------------------|----------------|
| `steeringCommittee` | Steering Committee / Board | Subscriptions with committee roles linked to "Steering Committee" PWCI |
| `administrativeTeam` | Our Team (staff) | GSF Team DB, Status = "Active" |
| `chairsAndLeads` | Chairs & Project Leads | Subscriptions with roles: WG Chair, Project Lead/Co-Lead, Committee Chair/Vice-Chair |
| `organisationalLeads` | Organisation Leads | Subscriptions with Role = "Organization Lead" |

A person can belong to multiple groups and appears in each corresponding section.

## TeamGrid Component

**File:** `src/components/team-grid.astro`

The TeamGrid component displays people cards with photos, names, roles, and LinkedIn links. It auto-resolves people from `people.json` by name — you only need to pass `fullName` and the component fills in photo, company, and social links.

### Props

| Prop | Description |
|------|-------------|
| `heading` | Section heading (supports `*accent*` syntax) |
| `body` | Introductory text |
| `members` | Array of team members to display |
| `highlighted` | Optional highlighted members shown first in larger dark cards (e.g. Chair, Vice-Chair) |
| `columns` | 2, 3, or 4 column layout |
| `bgClass` | Background class |

### Auto-resolution

When a member is passed with only `fullName`, the component looks up the person in `people.json` and merges:

- `jobTitle`, `company`, `photo`, `socialMedia` — all resolved automatically
- Explicit props take precedence over `people.json` values

This is used on standards pages where only the lead's name comes from `projects.json`.

## Photo Resolution Chain

Photos for subscription-based people follow this chain:

1. **Volunteers DB `Photo` field** — primary source
2. If no photo found, the component shows initials as a fallback

Due to the [Notion roll-up limitation](../notion.md#known-limitations), photos cannot be read from Subscription records directly. The fetch script builds a `volunteerPhotoByName` map to resolve photos by matching volunteer names.

## Updating People

- **Add/remove steering committee members** — update Subscriptions in Notion (see [governance page doc](../pages/governance.md))
- **Add/remove staff** — update GSF Team DB in Notion
- **Fix missing photos** — upload to the Volunteers DB `Photo` field in Notion
- **Change Chair/Vice-Chair** — update Notion Subscriptions AND hardcoded names in `governance.astro` and `press/index.astro`
