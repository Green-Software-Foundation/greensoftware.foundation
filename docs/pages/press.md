# Press & Media Page

**URL:** `/press/`
**File:** `src/pages/press/index.astro`

## What the Page Shows

Press boilerplate, impact stories, leadership, key messages, timeline, media coverage, and contact details.

## Dynamic Elements

### Member counts

Computed from `src/data/members.json` at build time:

- Total members = active steering + active general + active academic/government
- "Governed by" list = active steering member company names

### Leadership photos

Three leaders are configured at the top of the file (lines 30–34):

```js
const leadershipConfig = [
  { name: "Gadhu Sundaram", title: "Chairperson" },
  { name: "Jonathan Turnbull", title: "Vice-Chairperson" },
  { name: "Asim Hussain", title: "Executive Director" },
];
```

These names are matched against `src/data/people.json` to resolve photos, companies, and LinkedIn links. See [people component doc](../components/people.md).

**When leadership changes:** update both the name strings in the code AND ensure the person exists in Notion with a photo.

### Impact stories

Pulled from the stories content collection, filtered to only stories with `stats` data (`s.data.published !== false && !!s.data.stats?.length`). Each card links to the full story page.

### Press mentions (media coverage)

From `src/data/press-mentions.json` (fetched from the Notion "GSF Mentions in the News" database). Each mention shows source name, date, title, and links to the external article.

**To add a press mention:** add it to the Notion Press Mentions database. See [Notion doc](../notion.md).

## Static Elements

### Leadership names (lines 30–34)

The three names in `leadershipConfig` are hardcoded. Photos are dynamic.

### Key Messages (lines 204–230)

Five hardcoded bullet points about GSF's approach.

### Timeline (lines 51–74)

22 hardcoded milestones from May 2021 to December 2025, each with a date, event description, and optional link. **To add a timeline entry:** edit the `milestones` array in the page file.

### Boilerplate text

The "About the Green Software Foundation" and "Approved Boilerplate" sections are hardcoded HTML.

### Media contact section

Hardcoded email (`help@greensoftware.foundation`) and spokesperson note.

### Design resources link

Static link to `/brand/`.

## How to Update

| Change | Where |
|--------|-------|
| Add press mention | Notion Press Mentions DB |
| Update member count | Automatic from Notion Members DB |
| Change leadership | Code (names) + Notion (photos) |
| Add timeline entry | Edit `milestones` array in `press/index.astro` |
| Update boilerplate | Edit HTML in `press/index.astro` |
| Update key messages | Edit HTML in `press/index.astro` |
