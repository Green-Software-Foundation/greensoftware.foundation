# Forms

The site uses **Netlify Forms** for all form submissions. Forms are defined in Astro page markup with `data-netlify="true"` and submitted client-side via JavaScript fetch. Netlify captures the data and forwards it to Notion via a Netlify integration.

## Active forms

| Form | Page | Netlify form name | Notion target |
|------|------|-------------------|---------------|
| Assembly application | `/assemblies/[slug]/` | `assembly-application` | Assembly applications database |
| Membership enquiry | `/membership/enquire/` | `membership-enquiry` | Membership enquiries database |

## How it works

1. User submits the form on the website
2. Client-side JavaScript sends the data to Netlify via `fetch` POST
3. Netlify captures the submission (spam filtering, bot detection via honeypot field)
4. Netlify forwards the data to Notion via the Netlify–Notion integration

### Important: the success message only confirms Netlify received the data

The form will show "success" as long as Netlify accepted the submission. It does **not** confirm that the data reached Notion. If there is a problem between Netlify and Notion (integration error, Notion API issue, database schema change), the user will still see a success message but the data won't appear in Notion.

## Troubleshooting

If people report submitting forms but data isn't appearing in Notion:

1. **Check Netlify for errors** — go to the Netlify project dashboard and look for integration errors or failed webhooks
2. **Recover data from Netlify** — every Netlify project has a **Forms** section in the dashboard. All submissions are stored there regardless of whether the Notion integration succeeded. You can always recover the data manually from Netlify.
3. **Check the Notion integration** — verify the Netlify–Notion integration is still connected and the target database hasn't changed

The data is always safe in Netlify. The only failure point is the Netlify → Notion forwarding.

## Spam protection

All forms use a honeypot field (`netlify-honeypot="bot-field"`) — a hidden input that bots fill in but humans don't. Netlify automatically filters these out. Netlify also applies its own built-in spam detection on top of this.

## Adding a new form

To add a new Netlify form:

1. Add `data-netlify="true"` and `netlify-honeypot="bot-field"` to the `<form>` element
2. Include a hidden input: `<input type="hidden" name="form-name" value="your-form-name" />`
3. Include the honeypot: `<p class="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>`
4. Add client-side submission handling (see existing forms for the pattern)
5. Deploy to Netlify — the form will be auto-detected on first deploy
6. Configure the Netlify → Notion integration for the new form in the Netlify dashboard

## GA4 tracking

Both forms fire GA4 events on successful submission:

- Assembly form: `assembly_application` event with `assembly_name`
- Membership enquiry: `membership_enquiry` event with `organisation`

See [Google Analytics doc](google-analytics.md) for more on GA4 tracking.
