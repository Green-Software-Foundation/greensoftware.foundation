# Announcement Banner

A small, subtle strip at the top of every page (above the navbar). Not dismissible, not sticky.

## How it works

- Component: `src/components/announcement-banner.astro`
- Rendered once in `src/layouts/showcase.astro`, before `<main>`, so every page using the layout gets it (including 404). The CMS shell (`src/pages/admin/index.astro`) is standalone and has no banner.
- Content: `src/lib/announcement.ts` (`before`, `linkText`, `href`, `after`). Current text: "Join the [GSF Green Software & AI Academy] pilot", linking to https://academy.greensoftware.foundation.
- Styling: matches the dark preview strip in `navbar.astro` (`bg-primary-dark text-white text-xs`), with a light `border-primary-light` bottom border for separation. Link is bold and underlined, turning `accent-light` on hover.
- Marked `data-pagefind-ignore`, so it is excluded from site search.

## Updating or removing

- Change the wording or link: edit `src/lib/announcement.ts`.
- Hide it everywhere: set `enabled: false` in `src/lib/announcement.ts`.
- On non-production preview builds it stacks above the dark preview strip in `navbar.astro`; the light bottom border keeps the two visually separate.
