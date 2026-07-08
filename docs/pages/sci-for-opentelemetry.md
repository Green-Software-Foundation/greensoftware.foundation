# SCI for OpenTelemetry Page

Project page for SCI for OpenTelemetry at `/tools/sci-for-opentelemetry/`.

**File:** `src/pages/tools/sci-for-opentelemetry/index.astro`

## What the Page Shows

A short landing page for the SCI for OpenTelemetry project — a new GSF project (convened with Sarah Hsu) developing draft OpenTelemetry semantic conventions for the Software Carbon Intensity (SCI) specification. The project hasn't started yet, so the page is deliberately brief: the problem it addresses, the SCI formula components it will standardise, and who's being recruited to work on it.

## Dynamic Elements

None. Unlike `carmen.md`, this page does not import from `projects.json` — the project isn't yet in the Notion PWCIs database, so there's no lead/lifecycle data to pull. All content is hardcoded directly in the Astro file.

## Static Elements

All content is hardcoded in the page file (in page order):

- Hero — "SCI for OpenTelemetry" heading, "New Project — Recruiting Participants" badge, CTAs to the Assembly application page and the SCI specification
- "Carbon Has No Shared Vocabulary in OpenTelemetry" TextBlock — the problem statement
- "What We're Standardizing" CardGrid — the four SCI formula components (E, I, M, R)
- "Who We're Looking For" CardGrid — the four participant profiles being recruited
- CTABanner — links back to the Assembly page to apply, with named contacts (Russ Trow, Jamie Cowan, Sarah Hsu)

## Relationship to the Assembly

This project runs its recruitment through an Assembly: `/assemblies/sci-for-open-telemetry/`. Both CTAs on this page ("Apply to Join the Project") link straight to the Assembly detail page rather than duplicating an application form here — the Assembly page owns the actual form, status badge, and deadline logic (see [assemblies doc](./assemblies.md)).

If the Assembly's slug ever changes in Notion, update the `assemblyUrl` constant at the top of `src/pages/tools/sci-for-opentelemetry/index.astro`.

## How to Update

- **Edit page copy** — modify `src/pages/tools/sci-for-opentelemetry/index.astro` directly
- **Once the project has leads/lifecycle data in Notion** — add it to the PWCIs database with a matching slug, then follow the Carmen page's pattern (`docs/pages/carmen.md`) to pull `projects.json` data dynamically (lifecycle badge, TeamGrid, parent working group)
- **Navigation** — the entry in `src/lib/nav-items.ts` (Adoption → Tools section) points to `/tools/sci-for-opentelemetry/`
- **Assembly status changes** — handled entirely on the Assembly page; no changes needed here unless the slug changes
