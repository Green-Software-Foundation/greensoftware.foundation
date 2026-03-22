# Assemblies

**URLs:** `/assemblies/` (index), `/assemblies/[slug]/` (detail)
**Files:** `src/pages/assemblies/index.astro`, `src/pages/assemblies/[slug].astro`

## What the Page Shows

Assemblies are AI-facilitated consensus workshops. The index page lists active and completed assemblies. Detail pages show full metadata, rich content from Notion, and an application form.

## Data Source

All assembly data comes from `src/data/assemblies.json`, fetched from the Notion Assemblies database. See [Notion doc](../notion.md) for database properties.

The fetch script also extracts the Notion page body content: anything below a "Details" heading is converted to HTML and stored in the `detailsHtml` field.

## Status Values and Visibility

Assembly status is a Notion "status" type property (not "select"). The exact values and their effects:

| Status | Visible on site? | Where shown | Application form? |
|--------|-----------------|-------------|-------------------|
| `Apply now` | Yes | "Upcoming assemblies" | Yes — full application form |
| `Register interest` | Yes | "Upcoming assemblies" | Yes — interest registration form |
| `Upcoming` | Yes | "Upcoming assemblies" | Yes — interest registration form |
| `In Progress` | Yes | "Upcoming assemblies" | No |
| `Done` | Yes | "Completed assemblies" | No — shows report link if available |
| `Pending` | **Hidden** | Not shown | — |
| `Backlog` | **Hidden** | Not shown | — |

### Sort order (in assemblies.json)

The fetch script sorts assemblies by status priority: Apply now (0) → Register interest (1) → In Progress (2) → Upcoming (3) → Done (4) → Pending (5) → Backlog (6), then alphabetical by name.

### Index page filtering

- **Visible:** all assemblies except `Backlog` and `Pending`
- **Active section:** statuses `Apply now`, `Register interest`, `Upcoming`, `In Progress`
- **Completed section:** status `Done`, sorted by end date (most recent first)

### Detail page routing

Only visible assemblies (not `Backlog` or `Pending`) generate detail pages.

## Visibility Badges

Each assembly has an optional `Visibility` field:

| Visibility | Badge colour | Meaning |
|------------|-------------|---------|
| `Public` | Green (accent) | Open to anyone |
| `GSF Members Only` | Teal (primary) | Members-only |
| `Invite Only` | Dark teal (primary-darker) | By invitation |

## Application Form

The form appears on detail pages when `status` is `Apply now`, `Register interest`, or `Upcoming`.

### Form fields

**About you (required marked with *):**

- Full name *
- Work email *
- Organisation *
- Job title
- LinkedIn profile URL
- GitHub username
- Sector/Industry (dropdown: Cloud & Infrastructure, AI & ML, Financial Services, Energy & Utilities, Government, Healthcare, Manufacturing, Telecommunications, Consulting, Academia & Research, Non-profit/NGO, Other)
- Timezone
- Years of experience (dropdown: 0–2, 3–5, 5–10, 10–15, 15+)

**Your contribution:**

- Relevant expertise * (textarea)
- Motivation * (textarea)
- Previous GSF involvement (textarea)
- How did you hear about this assembly?

**Confirmations:**

- Attendance commitment checkbox *
- Stay informed checkbox (optional)
- Privacy policy consent checkbox *

### Form submission

- **Method:** Netlify Forms (`data-netlify="true"`)
- **Action:** posts to the assembly's own URL
- **Hidden fields:** `form-name`, `assembly-name`, `assembly-id`
- **Spam protection:** honeypot field (`bot-field`)
- **Client-side handling:** JavaScript intercepts submission, shows success/error state, tracks `assembly_application` GA4 event with `assembly_name` parameter

### Success states

- For `Apply now`: "Application submitted" message
- For `Register interest` / `Upcoming`: "Interest registered" message

## Completed Assemblies

When status is `Done`:

- Hero uses a light grey background (instead of dark teal)
- "Completed" badge shown
- If `reportUrl` is set, a "Read the report" CTA button appears
- If no `reportUrl`, shows "Report incoming — check back soon"
- Date range and participant count shown on the card

## Detail Page Metadata

The detail page displays available metadata in a compact grid:

- Deliverable, Purpose, Stage, Facilitator
- Start Date, End Date, Applications Open, Application Deadline
- Seats, Participants (average attendees)

## Governing Body

If the assembly has a `workingGroup` relation (resolved from Notion PWCIs), a "Governing Body" section appears with the working group name and optional directory link.

## How to Update

| Change | Where |
|--------|-------|
| Create new assembly | Add to Notion Assemblies DB |
| Open/close applications | Change `Status` in Notion |
| Add details content | Add content below a "Details" heading in the Notion page body |
| Set report URL | Set `Report` URL field in Notion |
| Change visibility | Set `Visibility` field in Notion |

See [Notion doc](../notion.md) for the full list of Assemblies DB properties.
