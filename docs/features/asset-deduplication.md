# Feature Spec: Asset Deduplication

**Status:** Planned
**Created:** 2026-03-07
**Last Updated:** 2026-03-07

## Overview

Scan `public/assets/` for duplicate files (by content hash), consolidate to canonical paths, and add an asset registry to CLAUDE.md to prevent future duplication during agentic coding sessions.

## Problem Statement

Over multiple agentic coding sessions, the same illustrations and images get copied to different locations in `public/assets/`. The AI generates from scratch rather than reusing existing assets because it doesn't hold a persistent mental model of all available files. GitClear's 2025 report found duplicated code blocks increased eightfold when using AI assistants — the same pattern applies to static assets.

## Solution

Two-part fix: a one-off cleanup, plus a preventive measure.

### Part 1: One-off deduplication

1. Run a content-hash scan across `public/assets/` to find exact duplicates:
   ```bash
   find public/assets -type f \( -name "*.svg" -o -name "*.png" -o -name "*.jpg" -o -name "*.webp" \) | xargs md5 | sort | uniq -d -w 32
   ```
2. For each set of duplicates, pick a canonical location (shortest/most logical path)
3. Update all references in `src/` to point to the canonical path
4. Delete the duplicates
5. Verify with a build (`npm run build`)

### Part 2: Asset registry in CLAUDE.md

Add a "Shared Illustrations" section to CLAUDE.md listing available reusable assets and their intended purpose. This gives the agent a lookup table before it creates or copies new files.

```markdown
### Shared Illustrations (`public/assets/`)
- hero-illustration.svg — generic hero/landing page illustration
- why-feat-1.svg, why-feat-2.svg, why-feat-3.svg — feature/explanation sections
- why-wdpc-feat-1.svg, why-wdpc-feat-3.svg — standards/process illustrations
- world-map.svg — global reach/meetup sections
- ready.svg — CTA/certification sections
- standardized-icon.svg, renewable-icon.svg, co2-icon.svg, realtime-icon.svg — feature grid icons
```

## Implementation Plan

1. Run the hash scan and produce a report of duplicates
2. Review with user before deleting anything
3. Update all file references across `src/pages/`, `src/components/`
4. Add the asset registry section to CLAUDE.md
5. Verify build passes
