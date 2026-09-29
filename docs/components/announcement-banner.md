# Announcement Banner

A small ribbon tab, centred directly above the navbar on every page. Not dismissible, not sticky.

## How it works

- Component: `src/components/announcement-banner.astro`
- Rendered by `src/components/navbar.astro`, immediately before `<header>` (after the non-production preview strip), so every page that renders `Navbar` gets it (all pages, including 404). Pass `showAnnouncement={false}` to `Navbar` to suppress it; the component catalogue demo (`src/pages/catalogue/index.astro`) does this. The CMS shell (`src/pages/admin/index.astro`) has no Navbar and no banner.
- Artwork: `public/assets/announcement-banner.svg` (viewBox 860x46). It contains the three layered teal shapes and the GSF Academy logo, but no text. It is shown with `<img>` (decorative, `alt=""`), max width 860px.
- Text: `src/lib/announcement.ts` (`before`, `linkText`, `href`, `after`). Current text: "Join the [GSF Green Software & AI Academy] pilot", linking to https://academy.greensoftware.foundation. It is real HTML overlaid on the artwork (so it is a proper link, selectable and accessible), starting at 34.35% from the left, white and bold. Font size is `1.91cqw` (a container query unit), which scales with the artwork exactly like the original 16.429px in an 860px-wide design. Only the link text is underlined.
- Below `sm` (640px) the artwork is hidden (the text would be too small) and the text shows on a single dark pill (`bg-primary-dark`) with rounded bottom corners. The logo is part of the artwork, so it is not shown on mobile.
- Marked `data-pagefind-ignore`, so it is excluded from site search.

## Updating or removing

- Change the wording or link: edit `src/lib/announcement.ts`. If the text becomes much longer or shorter, it may no longer sit centred in the artwork; adjust the `left` offset in the component or update the SVG.
- Change the artwork: replace `public/assets/announcement-banner.svg`, keeping the 860x46 viewBox and no baked-in text. If the logo or shapes move, re-check the `left: 34.35%` text offset.
- Hide it everywhere: set `enabled: false` in `src/lib/announcement.ts`.
- On non-production preview builds the dark preview strip is at the very top, with the ribbon directly below it and above the header.
