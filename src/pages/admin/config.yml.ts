import type { APIRoute } from "astro";

// ---------------------------------------------------------------------------
// Sveltia CMS configuration
// ---------------------------------------------------------------------------
// Sveltia CMS uses the browser's File System Access API for local development
// rather than a proxy server (unlike Decap/Netlify CMS).
//
// Local development workflow:
//   1. Run `npm run dev` and open http://localhost:4401/admin/ in Chrome or Edge
//   2. Click "Work with Local Repository" and select this project's root folder
//   3. Sveltia reads/writes files directly via the browser File System API
//   4. No proxy server needed — no local_backend setting required
//
// Authentication setup for production (one-time admin task):
//   1. Netlify Dashboard > Site configuration > Access control > OAuth
//   2. Add a GitHub OAuth provider
//   3. Register a GitHub OAuth App at https://github.com/settings/developers
//      - Homepage URL: https://greensoftware.foundation
//      - Callback URL: https://api.netlify.com/auth/done
//   4. Paste the Client ID and Secret into the Netlify OAuth config

const config = `backend:
  name: github
  repo: Green-Software-Foundation/greensoftware.foundation
  branch: dev

# ---------------------------------------------------------------------------
# Internationalisation
# ---------------------------------------------------------------------------
# structure: multiple_folders — each locale lives in its own subfolder:
#   src/content/articles/en/slug/index.md
#   src/content/articles/ja/slug/index.md  (only created if translated)
#
# initial_locales: [en] means only English is enabled when creating a new
# entry. Editors opt-in to other locales by clicking the locale tab.
i18n:
  structure: multiple_folders
  locales: [en, ja, pt, zh]
  default_locale: en

# Global fallback media folder (used by collections that don't override it)
media_folder: public/assets/uploads
public_folder: /assets/uploads

# ---------------------------------------------------------------------------
# Collections
# ---------------------------------------------------------------------------

collections:

  # ── Articles ──────────────────────────────────────────────────────────────
  # Each article lives in its own subfolder: en/slug/index.md
  # Images are co-located alongside the markdown file.
  - name: articles
    label: Articles
    label_singular: Article
    folder: src/content/articles
    path: "{{slug}}/index"
    media_folder: ""
    public_folder: ""
    create: true
    slug: "{{slug}}"
    extension: md
    format: frontmatter
    i18n: true
    initial_locales: [en]
    summary: "{{date}} — {{title}}"
    sortable_fields:
      fields: [date, title]
      default:
        field: date
        direction: Descending
    thumbnail: mainImage
    description: >
      General articles: news, announcements, member spotlights, technical how-tos.
      Images upload directly alongside the article file.
    fields:
      - label: Title
        name: title
        widget: string
        i18n: true

      - label: Date
        name: date
        widget: datetime
        format: "YYYY-MM-DD"
        date_format: "YYYY-MM-DD"
        time_format: false
        i18n: duplicate

      - label: Summary
        name: summary
        widget: text
        i18n: true
        hint: >
          1-3 sentence description shown in article listings and the homepage
          featured carousel. Prefer this over Teaser Text - it displays in more places.

      - label: Teaser Text
        name: teaserText
        widget: string
        required: false
        i18n: true
        hint: "Optional one-sentence teaser. Falls back to Summary if not set."

      - label: Main Image
        name: mainImage
        widget: image
        required: false
        i18n: duplicate

      - label: Main Image Alt Text
        name: mainImageAlt
        widget: string
        required: false
        i18n: true

      - label: Feature on Homepage Carousel
        name: featured
        widget: boolean
        default: false
        required: false
        i18n: duplicate
        hint: "When enabled, this article appears in the Featured Content carousel on the homepage."

      - label: Authors
        name: authors
        widget: list
        required: false
        i18n: true
        hint: "People who wrote this article."
        fields:
          - label: Full Name
            name: fullName
            widget: string
          - label: Role / Title
            name: role
            widget: string
            required: false
          - label: Organisation
            name: company
            widget: string
            required: false
          - label: Organisation Website
            name: companyWebsite
            widget: string
            required: false
          - label: Photo
            name: photo
            widget: image
            required: false
          - label: Social Media
            name: socialMedia
            widget: list
            required: false
            fields:
              - {label: Platform, name: platform, widget: string}
              - {label: URL, name: link, widget: string}

      - label: Translators
        name: translators
        widget: list
        required: false
        i18n: true
        hint: "People who translated this article (if it is a translation)."
        fields:
          - label: Full Name
            name: fullName
            widget: string
          - label: Role / Title
            name: role
            widget: string
            required: false
          - label: Organisation
            name: company
            widget: string
            required: false
          - label: Organisation Website
            name: companyWebsite
            widget: string
            required: false
          - label: Photo
            name: photo
            widget: image
            required: false
          - label: Social Media
            name: socialMedia
            widget: list
            required: false
            fields:
              - {label: Platform, name: platform, widget: string}
              - {label: URL, name: link, widget: string}

      - label: Organisations
        name: organizations
        widget: list
        required: false
        i18n: duplicate
        hint: >
          Member organisations associated with this article. Names must match
          exactly (e.g. "Accenture", "NTT DATA", "UBS", "Google", "Siemens", "Cisco").

      - label: Additional Org Count
        name: additionalOrgCount
        widget: number
        required: false
        value_type: int
        i18n: duplicate
        hint: >
          Number of additional member organisations not listed above.
          Displays as "+N more members" on carousel cards.

      - label: Original Blog Name
        name: originBlogName
        widget: string
        required: false
        i18n: duplicate
        hint: "If republished from another blog, the name of that blog."

      - label: Original Publication URL
        name: publishedOriginUrl
        widget: string
        required: false
        i18n: duplicate

      - label: Language
        name: lang
        widget: hidden
        default: en
        i18n: false

      - label: Body
        name: body
        widget: markdown
        i18n: true

  # ── Research ──────────────────────────────────────────────────────────────
  # Academic and technical research papers published by the foundation.
  - name: research
    label: Research
    label_singular: Research Paper
    folder: src/content/research
    create: true
    slug: "{{slug}}"
    extension: md
    format: frontmatter
    i18n: true
    initial_locales: [en]
    summary: "{{date}} — {{title}}"
    sortable_fields:
      fields: [date, title]
      default:
        field: date
        direction: Descending
    thumbnail: mainImage
    description: >
      Academic and technical research papers - includes abstract, author
      affiliations, DOI, and optional PDF download.
    fields:
      - label: Title
        name: title
        widget: string
        i18n: true

      - label: Date
        name: date
        widget: datetime
        format: "YYYY-MM-DD"
        date_format: "YYYY-MM-DD"
        time_format: false
        i18n: duplicate

      - label: Abstract
        name: abstract
        widget: text
        i18n: true
        hint: "Academic abstract. Concise technical summary of the research."

      - label: Summary
        name: summary
        widget: text
        i18n: true
        hint: "Accessible summary for a general audience (shown in listings)."

      - label: Main Image
        name: mainImage
        widget: image
        required: false
        i18n: duplicate

      - label: Authors
        name: authors
        widget: list
        required: false
        i18n: true
        fields:
          - label: Full Name
            name: fullName
            widget: string
          - label: Role / Title
            name: role
            widget: string
            required: false
          - label: Organisation
            name: company
            widget: string
            required: false
          - label: Organisation Website
            name: companyWebsite
            widget: string
            required: false
          - label: Photo
            name: photo
            widget: image
            required: false
          - label: Social Media
            name: socialMedia
            widget: list
            required: false
            fields:
              - {label: Platform, name: platform, widget: string}
              - {label: URL, name: link, widget: string}

      - label: Organisations
        name: organizations
        widget: list
        required: false
        i18n: duplicate
        hint: "Member organisations involved in the research."

      - label: DOI
        name: doi
        widget: string
        required: false
        i18n: duplicate
        hint: "Digital Object Identifier, e.g. 10.1234/example"

      - label: PDF URL
        name: pdfUrl
        widget: string
        required: false
        i18n: duplicate
        hint: "Direct link to download the full paper as PDF."

      - label: Feature on Homepage Carousel
        name: featured
        widget: boolean
        default: false
        required: false
        i18n: duplicate

      - label: Language
        name: lang
        widget: hidden
        default: en
        i18n: false

      - label: Body
        name: body
        widget: markdown
        i18n: true

  # ── Stories ───────────────────────────────────────────────────────────────
  # Collaborative member stories.
  - name: stories
    label: Stories
    label_singular: Story
    folder: src/content/stories
    create: true
    slug: "{{slug}}"
    extension: md
    format: frontmatter
    i18n: true
    initial_locales: [en]
    summary: "{{date}} — {{title}}"
    sortable_fields:
      fields: [date, title]
      default:
        field: date
        direction: Descending
    thumbnail: mainImage
    description: >
      Collaborative member stories. Narrative accounts of how organisations
      came together through the foundation to solve a shared problem.
    fields:
      - label: Title
        name: title
        widget: string
        i18n: true

      - label: Date
        name: date
        widget: datetime
        format: "YYYY-MM-DD"
        date_format: "YYYY-MM-DD"
        time_format: false
        i18n: duplicate

      - label: Summary
        name: summary
        widget: text
        i18n: true
        hint: "A brief summary of the story shown in listings."

      - label: The Challenge
        name: challenge
        widget: text
        required: false
        i18n: true
        hint: "The problem or challenge the organisations set out to solve."

      - label: The Outcome
        name: outcome
        widget: text
        required: false
        i18n: true
        hint: "What was achieved - the result of the collaboration."

      - label: Main Image
        name: mainImage
        widget: image
        required: false
        i18n: duplicate

      - label: Organisations
        name: organizations
        widget: list
        required: false
        i18n: duplicate
        hint: "The member organisations who collaborated on this story."

      - label: Additional Org Count
        name: additionalOrgCount
        widget: number
        required: false
        value_type: int
        i18n: duplicate
        hint: "Number of additional participating orgs not listed above."

      - label: Feature on Homepage Carousel
        name: featured
        widget: boolean
        default: false
        required: false
        i18n: duplicate

      - label: Language
        name: lang
        widget: hidden
        default: en
        i18n: false

      - label: Body
        name: body
        widget: markdown
        i18n: true

  # ── Pages ─────────────────────────────────────────────────────────────────
  # CMS-managed text pages: policies, terms, code of conduct, etc.
  - name: pages
    label: Pages
    label_singular: Page
    folder: src/content/pages
    create: true
    slug: "{{fields.slug}}"
    extension: md
    format: frontmatter
    sortable_fields:
      fields: [title]
      default:
        field: title
        direction: Ascending
    description: >
      Simple text pages: policies, terms of use, code of conduct, etc.
      The slug field controls the URL path.
    fields:
      - label: Title
        name: title
        widget: string

      - label: URL Slug
        name: slug
        widget: string
        hint: "The URL path for this page, e.g. 'policy/terms' or 'code-of-conduct'."

      - label: Description
        name: description
        widget: text
        required: false
        hint: "Meta description for search engines (optional)."

      - label: Body
        name: body
        widget: markdown
`;

export const GET: APIRoute = () => {
  return new Response(config, {
    headers: { "Content-Type": "text/yaml" },
  });
};
