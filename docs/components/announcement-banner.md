# Announcement Banner

A small, subtle strip at the top of every page (above the navbar). Not dismissible, not sticky.

## How it works

- Component: `src/components/announcement-banner.astro`
- Rendered once in `src/layouts/showcase.astro`, before `<main>`, so every page using the layout gets it (including 404). The CMS shell (`src/pages/admin/index.astro`) is standalone and has no banner.
- Content: `src/lib/announcement.ts` (`before`, `linkText`, `href`, `after`). Current text: "Join the [GSF Green Software & AI Academy] pilot", linking to https://academy.greensoftware.foundation.
- Styling: `bg-accent-lighter text-primary-dark text-xs`, with a `border-accent-light` bottom border. Link is bold and underlined.
- Marked `data-pagefind-ignore`, so it is excluded from site search.

## Updating or removing

- Change the wording or link: edit `src/lib/announcement.ts`.
- Hide it everywhere: set `enabled: false` in `src/lib/announcement.ts`.
- On non-production preview builds it stacks above the dark preview strip in `navbar.astro`.
