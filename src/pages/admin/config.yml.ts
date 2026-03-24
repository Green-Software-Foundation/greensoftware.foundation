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
  branch: main

# ---------------------------------------------------------------------------
# Internationalisation
# ---------------------------------------------------------------------------
# structure: multiple_folders — each locale lives in its own subfolder:
#   src/content/articles/en/slug/index.md
#   src/content/articles/ja/slug/index.md  (only created if translated)
#
# initial_locales: [en] means only English is enabled when creating a new
# entry. Editors opt-in to other locales via the three-dot menu in the editor.
i18n:
  structure: multiple_folders
  locales: [en, ja, pt, zh]
  default_locale: en
  initial_locales: [en]

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

      - label: Published
        name: published
        widget: boolean
        default: true
        required: false
        i18n: duplicate
        hint: "Uncheck to hide this article from the site without deleting it."

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

      - label: Tags
        name: tags
        widget: list
        required: false
        i18n: duplicate
        hint: >
          Categorise articles with tags such as "policy", "research", "standards",
          "community". Used to surface articles on topic pages like Policy & Research.

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

      - label: Subtitle
        name: subtitle
        widget: string
        required: false
        i18n: true
        hint: "Optional subtitle displayed below the title."

      - label: Date
        name: date
        widget: datetime
        format: "YYYY-MM-DD"
        date_format: "YYYY-MM-DD"
        time_format: false
        i18n: duplicate

      - label: Published
        name: published
        widget: boolean
        default: true
        required: false
        i18n: duplicate
        hint: "Uncheck to hide this research paper from the site without deleting it."

      - label: Status
        name: status
        widget: select
        options: [published, draft, in-progress]
        default: published
        i18n: duplicate

      - label: Type
        name: type
        widget: select
        options:
          - { label: "Paper", value: paper }
          - { label: "Response", value: response }
          - { label: "Report", value: report }
        default: paper
        i18n: duplicate
        hint: "Paper = original research or analysis. Response = formal reply to an external consultation. Report = documents an outcome or process."

      - label: Summary
        name: summary
        widget: text
        i18n: true
        hint: "Concise summary shown in listings and search results."

      - label: Jurisdiction
        name: jurisdiction
        widget: string
        required: false
        i18n: duplicate
        hint: "Geographic scope, e.g. EU, US, Global."

      - label: Framework
        name: framework
        widget: string
        required: false
        i18n: duplicate
        hint: "Related framework, e.g. GHG Protocol, CSRD, EU AI Act."

      - label: Working Group
        name: workingGroup
        widget: string
        required: false
        i18n: duplicate
        hint: "Slug of the working group (e.g. software-wg, policy-wg). Resolved to a display name from projects.json."

      - label: Version
        name: version
        widget: string
        required: false
        i18n: duplicate

      - label: Source URL
        name: sourceUrl
        widget: string
        required: false
        i18n: duplicate
        hint: "Link to the source document (e.g. GitHub repo)."

      - label: Authors
        name: authors
        widget: list
        required: false
        i18n: duplicate
        fields:
          - label: Name
            name: name
            widget: string
          - label: Organisation
            name: org
            widget: string
            required: false

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

      - label: Tags
        name: tags
        widget: list
        required: false
        i18n: duplicate
        hint: "Tags control which page carousels this paper appears in (e.g. sci, policy, research)."

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
  # Collaborative member stories with rich structured data (timeline, stats,
  # contributors, quotes). Not internationalised — files live directly in
  # src/content/stories/ without locale subfolders.
  - name: stories
    label: Stories
    label_singular: Story
    folder: src/content/stories
    create: true
    slug: "{{slug}}"
    extension: md
    format: frontmatter
    i18n: false
    summary: "{{title}}"
    sortable_fields:
      fields: [title]
      default:
        field: title
        direction: Ascending
    thumbnail: mainImage
    description: >
      Collaborative member stories. Narrative accounts of how organisations
      came together through the foundation to solve a shared problem.
    fields:
      - label: Title
        name: title
        widget: string

      - label: Published
        name: published
        widget: boolean
        default: true
        required: false
        hint: "Uncheck to hide this story from the site without deleting it."

      - label: Summary
        name: summary
        widget: text
        hint: "2-4 sentence summary shown on the stories listing page and cards."

      - label: Main Image
        name: mainImage
        widget: image
        required: false

      - label: Problem Heading
        name: problemHeading
        widget: string
        required: false
        hint: "Short heading for the problem section on the story page."

      - label: Journey Heading
        name: journeyHeading
        widget: string
        required: false
        hint: "Short heading for the journey/timeline section."

      - label: Organisations
        name: orgs
        widget: list
        required: false
        hint: "The member organisations involved in this story."
        fields:
          - label: Name
            name: name
            widget: string
          - label: Logo
            name: logo
            widget: string
            required: false
            hint: "Path to logo, e.g. /assets/logos/accenture.svg"

      - label: Key Stats
        name: stats
        widget: list
        required: false
        hint: "3-4 headline stats displayed prominently on the story page."
        fields:
          - label: Value
            name: value
            widget: string
            hint: "The stat value, e.g. '130,000+' or 'ISO 21031:2024'"
          - label: Label
            name: label
            widget: string
            hint: "What the stat measures, e.g. 'Engineers trained'"

      - label: Timeline
        name: timeline
        widget: list
        required: false
        hint: "Chronological milestones in the story's journey."
        fields:
          - label: Date
            name: date
            widget: string
            hint: "Date label, e.g. '2021', 'April 2024', 'Ongoing'"
          - label: Heading
            name: heading
            widget: string
          - label: Body
            name: body
            widget: text
          - label: Source
            name: source
            widget: object
            required: false
            hint: "Optional link to a related article."
            fields:
              - label: Link Text
                name: text
                widget: string
              - label: URL
                name: href
                widget: string

      - label: Featured Quote
        name: featuredQuote
        widget: object
        required: false
        hint: "A standout quote displayed prominently on the page."
        fields:
          - label: Quote Text
            name: text
            widget: text
          - label: Attribution
            name: author
            widget: string

      - label: Contributors
        name: contributors
        widget: list
        required: false
        hint: "Key individuals who drove this work."
        fields:
          - label: Name
            name: name
            widget: string
          - label: Role
            name: role
            widget: string
          - label: Organisation
            name: org
            widget: string
          - label: Photo
            name: photo
            widget: string
            required: false
          - label: Contribution
            name: contribution
            widget: text

      - label: Additional Quotes
        name: quotes
        widget: list
        required: false
        hint: "Supporting quotes displayed in the story."
        fields:
          - label: Quote Text
            name: text
            widget: text
          - label: Author
            name: author
            widget: string
          - label: Role
            name: role
            widget: string

      - label: Related Article Slugs
        name: relatedSlugs
        widget: list
        required: false
        hint: "Article slugs for 'Related Reading', e.g. 'en/some-article-slug'"

      - label: Call to Action
        name: cta
        widget: object
        required: false
        hint: "CTA section at the bottom of the story."
        fields:
          - label: Heading
            name: heading
            widget: string
          - label: Body
            name: body
            widget: text
          - label: Note
            name: note
            widget: string
            required: false

      - label: Body
        name: body
        widget: markdown
        hint: "The Problem section — displayed as prose above the timeline."

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

      - label: Published
        name: published
        widget: boolean
        default: true
        required: false
        hint: "Uncheck to hide this page from the site without deleting it."

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
