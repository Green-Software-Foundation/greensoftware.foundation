---
title: "Rich Content Showcase: Markdown Embed Examples"
date: 2026-03-22
published: false
summary: "A showcase of all the rich content directives available to article writers — videos, Google embeds, buttons, link cards, and more."
tags:
  - internal
authors:
  - fullName: GSF Web Team
---

This article demonstrates every rich content directive available in our Markdown articles. Use this as a **reference guide** when writing articles. None of these require MDX — they all work in plain `.md` files.

> [!TIP]
> This article has `published: false` so it won't appear on the site, in sitemaps, or in search results. It's just for internal reference.

---

## Video Embeds

### YouTube

Drop a YouTube video into any article with `::youtube{id="VIDEO_ID"}`. The video ID is the part after `v=` in the YouTube URL.

Here's the GSF Global Summit 2024 keynote:

::youtube{id="U9zIW7OTI4Y" caption="GSF Global Summit 2024 — full keynote"}

You can also link to a specific start time (in seconds):

::youtube{id="D-spTjqAswA" start="3324" caption="Measuring frontend energy consumption — jump to the demo"}

And here's one using a short youtu.be-style ID:

::youtube{id="4zKSSK8BdN8" caption="Celebrating the graduation of the Carbon-Aware SDK"}

**Syntax reference:**

```
::youtube{id="VIDEO_ID"}
::youtube{id="VIDEO_ID" start="120" caption="Optional caption text"}
```

---

## Google Embeds

These are particularly useful for reports, presentations, and data that we already maintain in Google Workspace.

### Google Slides

Perfect for embedding presentations and decks directly in articles. The writer just needs the presentation ID from the URL (the long string between `/d/` and `/edit`).

::google-slides{id="1Dk6lfmvn8vbFUNAETM3Ldn8vuGlXvHtUE_WNRfiSrsw" caption="GSF 2022 Year in Review — slide deck"}

Another example — the GSF Global Summit Tokyo presentation:

::google-slides{id="1aUvsxOe3FiXXgJDigvitOKim3LrAWTH9" caption="What is Green Software — GSF Global Summit 2022 Tokyo"}

**Syntax reference:**

```
::google-slides{id="PRESENTATION_ID"}
::google-slides{id="PRESENTATION_ID" caption="Optional caption"}
```

### Google Docs

Embed a document for inline reading — great for policy documents, submissions, or shared reports.

::google-docs{id="189dVe6jImIbtOvzYM4pMRBVQnPvnoYpxnT-gjzbqrWI" caption="COP27 Book of News"}

**Syntax reference:**

```
::google-docs{id="DOCUMENT_ID"}
::google-docs{id="DOCUMENT_ID" title="Accessible title" caption="Optional caption"}
```

### Google Sheets

Useful for embedding data tables, carbon calculations, or research data.

::google-sheets{id="1k-6JtneEu4E9pXQ9QMCXAfyntNJl8MnV2YzO4aKHh-0" caption="Cloud Carbon Footprint — Embodied Carbon Data"}

**Syntax reference:**

```
::google-sheets{id="SPREADSHEET_ID"}
::google-sheets{id="SPREADSHEET_ID" caption="Optional caption"}
```

### Google Drive Files (PDFs, reports, etc.)

For files hosted on Google Drive (like our annual reports), use `::google-drive`. This embeds the Google Drive preview viewer, which handles PDFs, images, and many other file types.

::google-drive{id="1grzqNwVt3eaOfkLAYkv2rAHDq9Nc6mib" caption="GSF Annual Report 2024"}

Here's the 2022 annual report too:

::google-drive{id="19J1PuAbcGQjwYrS06QY_WPcwgLv5DcRv" caption="GSF Annual Report 2022"}

**Syntax reference:**

```
::google-drive{id="FILE_ID"}
::google-drive{id="FILE_ID" caption="Optional caption"}
```

> [!NOTE]
> The file ID is the long string in the Google Drive URL between `/d/` and `/view`. For example, in `https://drive.google.com/file/d/1grzqNwVt3eaOfkLAYkv2rAHDq9Nc6mib/view`, the ID is `1grzqNwVt3eaOfkLAYkv2rAHDq9Nc6mib`.

---

## PDF Embeds

For PDFs hosted elsewhere (not on Google Drive), use `::pdf`. This embeds the browser's native PDF viewer with a download fallback.

::pdf{src="https://arxiv.org/pdf/2106.11750.pdf" title="Measuring and Reducing Carbon Emissions of Machine Learning" caption="Google Cloud carbon footprint methodology paper"}

**Syntax reference:**

```
::pdf{src="https://example.com/paper.pdf" title="Accessible title"}
::pdf{src="/local/path/to/file.pdf" title="Local PDF" caption="Optional caption"}
```

---

## Buttons (CTAs)

Use `::button` to add a centered call-to-action button anywhere in an article. Two variants are available: `primary` (filled) and `outline`.

::button{href="https://greensoftware.foundation/membership/" label="Become a Member" variant="primary"}

::button{href="https://greensoftware.foundation/articles/" label="Browse All Articles" variant="outline"}

**Syntax reference:**

```
::button{href="/path/" label="Button text"}
::button{href="/path/" label="Button text" variant="outline"}
```

---

## Rich Link Cards

Use `::link-card` to create a visually rich link preview — like how Notion or Slack unfurl links. Provide the metadata yourself for full control.

::link-card{href="https://greensoftware.foundation/articles/can-ai-truly-be-green/" title="Can AI Truly Be Green?" description="Exploring the environmental impact of artificial intelligence and what the green software community can do about it."}

With an image:

::link-card{href="https://patterns.greensoftware.foundation/" title="Green Software Patterns" description="An online open-source database of software patterns reviewed and curated by the Green Software Foundation across a wide range of categories." image="https://patterns.greensoftware.foundation/og-image.png"}

**Syntax reference:**

```
::link-card{href="URL" title="Title" description="Description text"}
::link-card{href="URL" title="Title" description="..." image="https://example.com/og-image.png"}
```

---

## Article Cross-Links (Auto-Reading)

The `::article` directive is the easiest way to link to another GSF article. Just provide the slug — the title and summary are **automatically read from the article's frontmatter** at build time. No need to type them out.

::article{slug="gsf-announces-executive-director-transition"}

::article{slug="after-five-years-im-stepping-down-as-executive-director-of-the-green-software-fou"}

::article{slug="celebrating-the-graduation-of-the-carbon-aware-sdk"}

**Syntax reference:**

```
::article{slug="article-slug-here"}
```

The slug is the folder name of the article in `src/content/articles/en/`. That's it — one line, and you get a styled card with the real title and summary pulled automatically.

---

## Content Cards

Wrap any Markdown content in a `:::card` container to give it a bordered card treatment. Useful for highlighting key information, quotes, or callouts.

:::card

### Key Takeaway

The Software Carbon Intensity (SCI) specification provides a consistent approach to measuring the carbon emissions of software systems. It's now an ISO standard (ISO/IEC 21031:2024).

::button{href="https://sci.greensoftware.foundation/" label="Read the SCI Spec" variant="primary"}
:::

You can also nest embeds inside cards:

:::card

### Watch: Can AI Truly Be Green?

A deep dive into AI's environmental impact with the GSF team.

::youtube{id="0CX9J3oAipM"}
:::

**Syntax reference:**

```
:::card
Any **Markdown** content here — headings, lists, images, even other embeds.
:::
```

---

## Combining Everything

Here's a realistic example of how you might use these in an actual article section:

---

### Our 2024 Annual Report is Live

We're proud to share the Green Software Foundation's 2024 Annual Report, covering our progress across standards, tooling, and community growth.

::google-drive{id="1grzqNwVt3eaOfkLAYkv2rAHDq9Nc6mib" caption="GSF Annual Report 2024 — full report"}

Watch the highlights from our Global Summit where we presented these results:

::youtube{id="U9zIW7OTI4Y" caption="GSF Global Summit 2024"}

:::card

### Want to get involved?

The Green Software Foundation is an open community. Whether you're a developer, researcher, or sustainability professional, there's a place for you.

::button{href="https://greensoftware.foundation/membership/" label="Join the Foundation" variant="primary"}

::button{href="https://greensoftware.foundation/community/" label="Explore the Community" variant="outline"}
:::

---

## Existing Features (still available)

These were already supported before the embed directives — they still work exactly the same.

### GitHub-style Alerts

> [!NOTE]
> This is a note — useful for supplementary information.

> [!WARNING]
> This is a warning — something the reader should be careful about.

> [!TIP]
> This is a tip — helpful advice for the reader.

> [!IMPORTANT]
> This is an important notice — critical information.

> [!CAUTION]
> This is a caution — potential danger or significant risk.

### Callout Blocks (legacy)

:::note
This is a legacy note callout using the `:::note` directive syntax.
:::

:::tip
This is a legacy tip callout.
:::

### Tables (GFM)

| Directive | Type | Use Case |
|-----------|------|----------|
| `::youtube` | Video | YouTube embeds |
| `::vimeo` | Video | Vimeo embeds |
| `::google-slides` | Document | Presentations |
| `::google-docs` | Document | Documents |
| `::google-sheets` | Document | Spreadsheets |
| `::google-drive` | Document | Drive files (PDFs, etc.) |
| `::pdf` | Document | External PDFs |
| `::button` | Interactive | CTA buttons |
| `::link-card` | Interactive | Rich link previews |
| `:::card` | Layout | Content card wrapper |

### Math (KaTeX)

The SCI formula: $SCI = ((E \times I) + M)$ per functional unit $R$.

---

## Quick Reference for Writers

**Video:** Just need the video ID from the URL.

```
::youtube{id="dQw4w9WgXcQ"}
::youtube{id="dQw4w9WgXcQ" start="60" caption="Starting at 1 minute"}
```

**Google Workspace:** Just need the document ID from the URL.

```
::google-slides{id="LONG_ID_HERE"}
::google-docs{id="LONG_ID_HERE"}
::google-sheets{id="LONG_ID_HERE"}
::google-drive{id="LONG_ID_HERE"}
```

**PDF:** Full URL to the PDF file.

```
::pdf{src="https://example.com/paper.pdf" title="Paper Title"}
```

**Buttons:** Center-aligned call-to-action.

```
::button{href="/path/" label="Click Me"}
::button{href="/path/" label="Click Me" variant="outline"}
```

**Link cards:** Rich preview card.

```
::link-card{href="URL" title="Title" description="Description"}
```

**Article cross-link:** Auto-reads title and summary from frontmatter.

```
::article{slug="article-folder-name"}
```

**Content card:** Wrap anything in a card.

```
:::card
Your content here.
:::
```

All directives also accept an optional `caption="..."` attribute for a styled caption below the embed.
