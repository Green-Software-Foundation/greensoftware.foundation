# Google Analytics (GA4)

## Overview

The site uses Google Analytics 4 directly via `gtag.js`. There is no Google Tag Manager — events are fired from the code, keeping the setup simple and requiring no external container configuration.

## GA4 Property

- **Measurement ID:** `G-593HJXNS18`
- **Domain:** greensoftware.foundation
- **Snippet location:** `src/layouts/showcase.astro` (in `<head>`)

The same measurement ID was previously loaded via GTM (`GTM-WTDZZJF`) on the legacy Gatsby site. The GTM container is no longer used.

## Events

### Automatic (GA4 Enhanced Measurement)

These are built-in GA4 events — no custom code required. Ensure they're enabled in **GA4 Admin → Data Streams → Enhanced Measurement**.

| Event | What it tracks |
|-------|----------------|
| `page_view` | Every page load |
| `click` (outbound) | Clicks to external domains (not greensoftware.foundation) |
| `scroll` | 90% scroll depth |
| `file_download` | Clicks on document/file links |

### Custom Events

| Event name | File | When it fires | Parameters |
|------------|------|---------------|------------|
| `newsletter_submission` | `src/components/react/newsletter-form.tsx` | Successful newsletter signup (any location — inline or footer) | `form_variant`: `"inline"` or `"compact"` |
| `membership_enquiry` | `src/pages/membership.astro` | Click on any membership enquiry mailto link | `click_location`: nearest section heading text |
| `assembly_application` | `src/pages/assemblies/[slug].astro` | Successful assembly application form submission | `assembly_name`: name of the assembly |

### Adding New Events

Use `gtag('event', ...)` directly — no dataLayer or GTM triggers needed:

```javascript
if ((window as any).gtag) {
  (window as any).gtag("event", "event_name", {
    parameter_name: "value",
  });
}
```

Follow GA4 naming conventions: `snake_case` for event names and parameter names.

## Subdomains

Subdomains like `wiki.greensoftware.foundation`, `assemblies.greensoftware.foundation`, and `policy-radar.greensoftware.foundation` are treated as internal by default in GA4. Clicks to these won't appear as outbound clicks unless you change the cross-domain settings in the data stream configuration.

## Testing

### On any domain (including localhost or greensoftware.org dev site)

GA4 receives events regardless of which domain sends them. The data stream URL doesn't need to match.

1. **Realtime report** — deploy or run locally, then check **GA4 → Reports → Realtime**. Events appear within seconds.

2. **DebugView** (more detailed) — install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/jnkmfdileelhofjcijamephohjechhna) Chrome extension, enable it, visit your site, then open **GA4 → Admin → DebugView**. Shows every event with full parameter details.

3. **Browser DevTools** — open the Network tab, filter by `collect`, and you'll see requests to `google-analytics.com/g/collect` with event parameters in the query string.

### On localhost

Run `npm run build` then preview the built site. The gtag snippet loads and fires events normally. (The dev server also works but PageFind won't be available without a build.)

## Historical Data

- Data collected under the old GTM setup is preserved in the same GA4 property
- The legacy newsletter event was called `Newsletter Submission` (title case, set by GTM). The new event is `newsletter_submission` (snake_case). These appear as separate events in GA4 reports
- All other historical events (page views, outbound clicks) continue uninterrupted
