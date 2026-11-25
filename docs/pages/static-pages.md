# Static Pages

These pages have no dynamic data — all content is hardcoded in their Astro files. To update them, edit the files directly.

| Page | URL | File |
|------|-----|------|
| About | `/about/` | `src/pages/about/index.astro` |
| Brand & Assets | `/brand/` | `src/pages/brand/index.astro` |
| Contact | `/contact/` | `src/pages/contact/index.astro` |
| Certification | `/certification/` | `src/pages/certification.astro` |
| Newsletter | `/newsletter/` | `src/pages/newsletter.astro` |

## Notes

- The **About** page has a "Recognised by governments and global institutions" panel (FeatureGrid, panel variant) after Mission & Vision, linking to `/partnerships/`. The same panel appears on the homepage; keep the two in sync. Content is hardcoded.
- The **About** and **Contact** pages have `data-pagefind-body` and are included in site search
- The **Brand** page shows colour palettes, logo downloads, and Canva template links
- The **Newsletter** page contains a signup form
- The **Certification** page covers SCI certification (currently TBD)
