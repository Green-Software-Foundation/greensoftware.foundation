# Feature Spec: Centralised Data Layer

**Status:** Planned
**Created:** 2026-03-07
**Last Updated:** 2026-03-07

## Overview

Replace scattered `import data from '../data/foo.json'` patterns across pages with a typed, centralised data access layer. Notion UUIDs become the stable identifier for all records. A build-time lookup function resolves IDs to full records and warns (or fails) if an ID can't be matched.

## Problem Statement

The site references people, projects, and members in many places — hardcoded in page configs, scattered JSON imports with ad-hoc filtering, and name-based lookups that break on typos or name changes. When a photo, title, or name updates in Notion, you have to find and fix it in multiple files. There's no single place to ask "give me all steering members" or "look up this person by ID".

Illustrations and other static assets suffer similarly — they're copied into pages without a registry, making it hard to know what's in use, what's stale, and what's missing.

## Solution

### 1. Notion UUIDs in All Exported JSON

The fetch script (`scripts/fetch-notion-data.cjs`) already has access to each row's Notion page ID. Export it as an `id` field on every record in every JSON file (team, members, projects, press mentions, etc.). This UUID becomes the stable, human-independent key for a record — it won't change if someone's name changes or a project is renamed.

### 2. Centralised Data Access Layer (`src/lib/data.ts`)

A single TypeScript module with named, typed query functions:

```ts
// People
getPerson(id: string): TeamMember | null
getAllTeam(): TeamMember[]

// Members
getMember(id: string): Member | null
getActiveMembers(): Member[]
getSteeringMembers(): Member[]
getGeneralMembers(): Member[]

// Projects
getProject(id: string): Project | null
getAllProjects(): Project[]
getActiveProjects(): Project[]
```

Pages import from `src/lib/data.ts` instead of directly importing JSON. This is the single place to add fallback logic, type coercions, and warnings.

### 3. ID-Based Component Props

Where pages or components currently reference a person by name (e.g. in a leadership section), they should instead pass a Notion UUID. The component (or page) calls `getPerson(id)` to resolve the full record.

Example — instead of hardcoding:
```astro
name="Naveen Balani"
title="Chair"
photo="/assets/team/naveen-balani.jpg"
```

Pass an ID and resolve at build time:
```astro
---
const chair = getPerson("abc-123-def");
---
<PersonCard {...chair} />
```

UUIDs in config should have a comment with the person's name for readability.

### 4. Build-Time Warnings for Unresolved IDs

When `getPerson(id)` or any lookup function receives an ID that doesn't exist in the JSON, it:
1. Logs a structured warning: `[DATA] Unresolved ID "abc-123" (team) — check Notion fetch`
2. Returns `null` (component renders nothing or a fallback)
3. Optionally: throw in production builds to make the problem visible in Netlify logs

Build log warnings are automatically captured by Netlify and searchable. A Slack notification via Netlify's build notifications can be added if the signal-to-noise ratio warrants it.

### 5. Static JSON API Endpoints

Generate static JSON files at build time under `/api/` for cross-microsite consumption:

- `/api/members.json` — all active members with name, logo URL, tier
- `/api/projects.json` — all active projects with name, description, status
- `/api/team.json` — public team data

These are plain static files served from Netlify's CDN. No server required, no new infrastructure. Other microsites (SCI, WDPC, SOFT) can fetch from `greensoftware.foundation/api/members.json` without needing their own data pipelines.

## What's Out of Scope (For Now)

- **Illustration registry** — illustrations don't have a natural 1:1 Notion row. An asset viewer (listing what's in `public/assets/`) is useful but separate.
- **Slack alerting** — build log warnings are sufficient initially. Add Slack only if warnings are being missed.
- **Runtime data fetching** — everything stays build-time. No SSR, no API server.

## Implementation Plan

1. **Update fetch script** — add `id` field (Notion page UUID) to all exported JSON records
2. **Create `src/lib/data.ts`** — typed query functions wrapping the JSON files
3. **Migrate pages** — replace direct JSON imports with `data.ts` calls, starting with the most duplicated (team lookups on `/press/`, `/policy/`, `/governance/`)
4. **Update component configs** — replace name-based person references with UUID-based lookups
5. **Add build-time warnings** — unresolved ID logging in all lookup functions
6. **Generate `/api/` endpoints** — add an Astro endpoint file per data type

## Notes

- The Notion page UUID is available in the API response as `page.id` — no extra API calls needed
- UUIDs look like `3d6f3f2a-1234-...` — always add a comment in config files with the human-readable name
- This pattern is sometimes called a "build-time ORM" — it's not a new idea, just a new layer of discipline
