# Logo Marquee

The scrolling logo carousel used on the homepage, membership page, and individual standards pages.

**Component:** `src/components/logo-marquee.astro`

## Data Source

By default, logos are loaded from `src/data/members.json` (fetched from Notion — see [Notion doc](../notion.md)). The component filters at runtime:

```
members.json → filter(active && logo && !hideLogo) → sort → display
```

## Sort Order

1. **Steering members first**, then General members
2. Alphabetical by company name within each tier

## How to Add or Hide Logos

All changes happen in the **Notion Members database**:

- **Add a logo:** Upload a logo file to the member's `Logo` field, ensure `Status` = "Active" and `Hide Logo` is unchecked
- **Hide a logo:** Check the `Hide Logo` checkbox on the member record
- **Remove a member's logo:** Set their `Status` to anything other than "Active"

Run `npm run fetch-notion` locally or wait for the next Netlify build.

## Props

| Prop | Default | Description |
|------|---------|-------------|
| `heading` | "ISO-accredited and endorsed by leading technology organizations" | Text above the marquee |
| `logos` | Auto-loaded from members.json | Override with custom logo array |
| `bgClass` | `"bg-white"` | Section background |
| `fadeBgClass` | Auto-detected from bgClass | Gradient fade colour at edges |
| `greyscale` | `false` | Whether logos display in greyscale (note: member logos must be shown in colour per contractual requirement) |
| `directoryHref` | Member directory URL | Link destination for "View all members" |
| `directoryText` | "View all members" | Link text |

## Behaviour

- Logos scroll continuously with CSS animation
- Pauses on hover or when the pause button is clicked
- Respects `prefers-reduced-motion` (animation disabled)
- Duplicated logo set creates seamless infinite loop
- Animation duration scales with number of logos (`logos.length * 3.75s`, minimum 38s)

## Notes

- Member logos must always be shown in **colour** (not greyscale) — this is a contractual requirement
- Stories pages use a separate filter that includes inactive members (for historical accuracy)
- The `logos.json` file no longer exists — all logo consumers read directly from `members.json`
