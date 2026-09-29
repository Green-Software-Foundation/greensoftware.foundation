# Announcement Banner

A small ribbon tab, centred directly below the navbar on every page. Dark teal core with two lighter teal layers either side, slanting in towards the bottom. Not dismissible, not sticky.

## How it works

- Component: `src/components/announcement-banner.astro`
- Rendered by `src/components/navbar.astro`, immediately after `</header>`, so every page that renders `Navbar` gets it (all pages, including 404). Pass `showAnnouncement={false}` to `Navbar` to suppress it; the component catalogue demo (`src/pages/catalogue/index.astro`) does this. The CMS shell (`src/pages/admin/index.astro`) has no Navbar and no banner.
- Content: `src/lib/announcement.ts` (`before`, `linkText`, `href`, `after`, optional `logoSrc`). Current text: "Join the [GSF Green Software & AI Academy] pilot", linking to https://academy.greensoftware.foundation.
- Styling: three nested layers (`bg-primary-lighter`, `bg-primary-light`, `bg-primary-dark`) shaped with `clip-path` in a scoped `<style>` block. Text is white, `text-sm font-semibold`; link is bold and underlined, turning `accent-light` on hover.
- Below `sm` (640px) the outer layers are hidden and the banner is a single dark pill with rounded bottom corners.
- Marked `data-pagefind-ignore`, so it is excluded from site search.

## Updating or removing

- Change the wording or link: edit `src/lib/announcement.ts`.
- Add the GSF Academy logo: put the file in `public/assets/` and set `logoSrc` in `src/lib/announcement.ts` (for example `"/assets/gsf-academy-logo.svg"`). It renders to the left of the text.
- Hide it everywhere: set `enabled: false` in `src/lib/announcement.ts`.
- On non-production preview builds the dark preview strip sits above the header, and the ribbon sits below it, so they no longer stack.
