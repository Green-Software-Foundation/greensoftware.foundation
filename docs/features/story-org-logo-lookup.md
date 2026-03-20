# Feature Spec: Auto-resolve Story Org Logos from members.json

**Status:** Planned
**Created:** 2026-03-20
**Last Updated:** 2026-03-20

## Overview

Story pages currently hardcode org logo paths in frontmatter. These should auto-resolve from `members.json` (already imported in the template) so logos stay in sync with Notion.

## Problem Statement

- Logo paths in story frontmatter go stale (e.g. Microsoft `.svg` vs `.webp`)
- Adding an org requires knowing the exact asset path
- No single source of truth — `members.json` has the canonical logos but stories duplicate paths

## Solution

1. **Update `[slug].astro`** — use the existing `logoMap` to resolve org logos when frontmatter doesn't provide one. Frontmatter `logo` still wins as an override.
2. **Strip hardcoded logo paths** from all story frontmatter, leaving just org names.
3. **Handle logo restrictions** — some orgs (e.g. HSBC, Shell) have contractual rules about logo display. Need a `hideLogo` flag (or similar) in `members.json` that the story template respects. Check whether the existing `hideLogo` field in members.json already covers this, or whether a separate story-specific flag is needed.

## Implementation Plan

1. Audit `members.json` `hideLogo` field — does it already cover the HSBC/Shell cases?
2. If not, add a flag (e.g. `hideLogoInStories`) or reuse `hideLogo` with clear semantics
3. Update `[slug].astro` orgs section to look up from `logoMap`, skip orgs where `hideLogo` applies
4. Update all story frontmatter to remove hardcoded `logo` paths
5. Test with orgs that have logo restrictions (HSBC, Shell)
