# Feature Spec: Site Search

**Status:** Planned
**Created:** 2026-02-27
**Last Updated:** 2026-02-27

## Overview

Add search functionality to the GSF website using Pagefind for instant keyword search, with a future option to add semantic (embeddings-based) search via Supabase pgvector.

## Problem Statement

The site currently has no search — the navbar search icon is a non-functional placeholder. With ~300+ documents (188 articles, 13 member stories, 64+ members, 17 projects, working groups), users need a way to find content.

## Solution

### Phase 1: Pagefind (keyword search)

Use [Pagefind](https://pagefind.app/) for zero-config, client-side keyword search.

- **How it works:** At build time, Pagefind crawls rendered HTML and creates a compressed, chunked index. At query time, it loads only the index chunks needed — no API calls, works offline.
- **Index size:** ~100-200 KB for this site, loaded incrementally.
- **Effort:** Minimal. Add Pagefind to the build step, drop a search UI component into the navbar.
- **Covers:** "Find me the article called X", exact matches, keyword lookups.

### Phase 2 (future): Supabase pgvector (semantic search)

Add embeddings-based search for conceptual/fuzzy queries. GSF already uses Supabase in other projects.

- **How it works:**
  1. At build time, embed all content using an embedding model (e.g. OpenAI `text-embedding-3-small`) and store vectors in a Supabase `pgvector` column.
  2. At query time, a Supabase Edge Function receives the search string, embeds it server-side, runs a similarity search against stored vectors, and returns ranked results.
- **Why server-side:** The query string must be embedded at runtime. Doing this client-side would require downloading a ~30-50 MB embedding model to the browser — impractical. A server-side Edge Function keeps it to one small API call per search.
- **Covers:** "Articles about reducing environmental impact of AI training" matching content that never uses those exact words.
- **Vector index size:** ~300 docs × 1536 dimensions × 4 bytes = ~1.8 MB in Postgres. Trivial.

### Why not Orama?

Orama is a capable JavaScript search engine with a vector plugin, but:

- For keyword search, Pagefind is simpler (zero config vs manual schema/indexing).
- For vector search, Orama has the same query-time embedding problem — the query still needs embedding somewhere. If you're already calling an API for that, you might as well do the similarity search server-side too (pgvector), rather than shipping vectors to the browser.

Orama doesn't have a clear role when Pagefind + Supabase pgvector covers both sides better.

## Implementation Plan

### Phase 1: Pagefind

1. Install Pagefind as a build dependency
2. Add Pagefind indexing step after Astro build in `package.json`
3. Create a search UI component (can use Pagefind's default UI or custom)
4. Wire the navbar search icon to open the search interface
5. Configure Pagefind to index relevant content (articles, stories, member pages)

### Phase 2: Supabase pgvector

1. Add a `pgvector` column to a Supabase table for content embeddings
2. Create a build script to embed all content and upsert vectors
3. Create a Supabase Edge Function for similarity search (embed query → pgvector lookup → return results)
4. Add a "semantic search" option to the search UI that calls the Edge Function
5. Consider a hybrid UX: Pagefind results appear instantly, semantic results load asynchronously
