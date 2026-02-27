# Feature Spec: HTML Lang & Canonical Tags

**Status:** Planned
**Created:** 2026-02-27
**Last Updated:** 2026-02-27

## Overview

Add `lang="en"` attribute and `<link rel="canonical">` tags across all pages to establish proper language semantics and prepare for future i18n.

## Problem Statement

The site currently lacks explicit language declaration and canonical URL tags. While this has no visible impact today, adding these now:

- Improves SEO (search engines understand the content language)
- Prepares for i18n — when translated pages (e.g. `/ja/...`) are added later, search engines will already understand the English pages are canonical
- Is a small job now vs. a retroactive fix later

## Solution

1. Set `lang="en"` on the `<html>` element in the base layout
2. Add `<link rel="canonical" href="https://greensoftware.foundation{pathname}" />` to the `<head>` of every page
3. Optionally add `<link rel="alternate" hreflang="en" href="..." />` (future-proofs for when `hreflang` tags for other languages are needed)

## Implementation Plan

1. Identify the base/shared layout file (likely `src/layouts/` or the common `<head>` fragment)
2. Add `lang="en"` to the `<html>` tag
3. Add a canonical `<link>` tag using `Astro.url.pathname` to generate the correct URL
4. Verify the tags render correctly on all pages
