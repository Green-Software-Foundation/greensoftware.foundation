# SCI for OpenTelemetry Page

Project page for SCI for OpenTelemetry at `/tools/sci-for-opentelemetry/`.

**File:** `src/pages/tools/sci-for-opentelemetry/index.astro`

## What the Page Shows

A short landing page for the SCI for OpenTelemetry project — a new GSF project (convened with Sarah Hsu) bringing Software Carbon Intensity (SCI) to OpenTelemetry. The project's scope is bigger than just drafting semantic conventions: it starts with a draft set of semantic conventions (the Assembly's deliverable), then builds the instrumentation that puts them into practice. The page copy reflects both phases — don't reduce it back to "drafting semantic conventions" only. The project hasn't started yet, so the page is deliberately brief: the problem it addresses, the SCI formula components it will standardise, and who's being recruited to work on it.

## Dynamic Elements

### Project data (from Notion)

The project is in the Notion PWCIs database with slug `"sci-otel"` (not `"sci-for-opentelemetry"` — that's just this page's URL). Following the Carmen page's pattern:

- **Parent working group badge** — resolved from `projects.json` to show "A Software Standards Working Group Project" in the hero
- **Lifecycle stage badge** — read from `projects.json` (currently `"Pre-draft"`), then title-cased per hyphen segment (`"Pre-draft"` → `"Pre-Draft"`) to match the canonical stage names used on `/standards/` (`src/pages/standards/index.astro`) — Notion's casing on this field doesn't always match

If either lookup misses (e.g. `projects.json` hasn't been fetched, or the slug changes in Notion), the badge is simply omitted — there's no hardcoded fallback, matching Carmen's convention once real Notion data exists.

See [Notion doc](../notion.md) for how `projects.json` is populated from the PWCIs database.

## Static Elements

Everything else is hardcoded in the page file (in page order):

- Hero — heading/body copy written in the same format as `/standards/sci/`'s hero (statement heading + accent phrase + single body paragraph, no separate subtitle), uses the project's own illustration (`/assets/OTel-hero.svg`), CTAs to the Assembly application page and the SCI specification
- "Starting with an Assembly" TextWithImage — explains why the project begins with a GSF Assembly (broad OTel + Green Software community input toward an initial semconv draft) rather than a closed drafting group, with a CTA to `/assemblies/` (reuses the same illustration and framing as the "What is an Assembly" section on `/assemblies/`)
- "Carbon Has No Shared Vocabulary in OpenTelemetry" TextBlock — the problem statement
- "What We're Standardizing" — hand-rolled section (not the `CardGrid` component): heading/body, then the SCI formula diagram (`/assets/SCI-formula-2.svg`). The E/I/M/R card grid that used to sit below the diagram was removed as redundant once the diagram covered the same ground — if this section grows new content later, it doesn't need to be `CardGrid`-shaped again. The diagram is a hand-built SVG (not a photo/screenshot) recreating a GSF formula-explainer graphic in site brand colours — update it by editing the SVG directly if the callout copy changes
- "Who We're Looking For" CardGrid — the four participant profiles being recruited
- "Ways to Get Involved" ResourceCards — mirrors the canonical steps from the project's Notion page body (GSF registration → project subscription → Assembly application)
- CTABanner — links back to the Assembly page to apply, with named contacts (Russ Trow, Jamie Cowan, Sarah Hsu)

The project's GitHub repo (`Green-Software-Foundation/sci-otel`) is currently private per Notion, so it isn't linked from this page. Once it's made public, add it as a resource card/CTA.

## Relationship to the Assembly

This project runs its recruitment through an Assembly: `/assemblies/sci-for-open-telemetry/`. Both CTAs on this page ("Apply to Join the Project") link straight to the Assembly detail page rather than duplicating an application form here — the Assembly page owns the actual form, status badge, and deadline logic (see [assemblies doc](./assemblies.md)).

If the Assembly's slug ever changes in Notion, update the `assemblyUrl` constant at the top of `src/pages/tools/sci-for-opentelemetry/index.astro`.

## How to Update

- **Change lifecycle stage or parent working group** — edit in Notion PWCIs DB (slug `"sci-otel"`), run `npm run fetch-notion`
- **Add a TeamGrid once named leads exist** — leads are populated from Subscriptions records with role "Project Lead"/"Project Co-Lead" against this PWCI, not from the "Responsible PM" field. Once at least one exists, add a `TeamGrid` fed by `sciOtelProject?.leads`, matching Carmen's pattern
- **Edit page copy** — modify `src/pages/tools/sci-for-opentelemetry/index.astro` directly
- **Navigation** — the entry in `src/lib/nav-items.ts` (Adoption → Tools section) points to `/tools/sci-for-opentelemetry/`
- **Assembly status changes** — handled entirely on the Assembly page; no changes needed here unless the slug changes
