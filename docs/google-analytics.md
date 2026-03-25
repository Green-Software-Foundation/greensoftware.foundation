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

### On any domain (including localhost or deploy previews)

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

## MCP Server (AI-powered Analytics Access)

The Google Analytics MCP server lets Claude (Desktop or Code) query our GA4 data directly — run reports, check real-time stats, list custom dimensions, etc.

### What you'll need

You'll be given a file called **`analytics-mcp-key.json`** — this is the credentials file. Keep it private and don't share it over email or commit it to git.

---

### Mac Setup

#### Step 1: Save the key file

1. Open **Finder**
2. Press **Cmd + Shift + G** (Go to Folder)
3. Type `~/.secrets` and press Enter
   - If it says the folder doesn't exist, type `~` instead, press Enter, then create a new folder called `.secrets`
   - Note: folders starting with `.` are hidden. If you need to see it again later, press **Cmd + Shift + .** in Finder to show hidden files
4. Drag the `analytics-mcp-key.json` file into this `.secrets` folder

#### Step 2: Edit the Claude Desktop config

1. Open **Finder**
2. Press **Cmd + Shift + G**
3. Type `~/Library/Application Support/Claude` and press Enter
4. You should see a file called `claude_desktop_config.json`
5. Right-click it → **Open With** → **TextEdit**
6. You'll see something like this:

```json
{
  "mcpServers": {}
}
```

1. Replace the entire contents of the file with:

```json
{
  "mcpServers": {
    "analytics-mcp": {
      "command": "/opt/homebrew/bin/pipx",
      "args": ["run", "analytics-mcp"],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "/Users/YOURUSERNAME/.secrets/analytics-mcp-key.json",
        "GOOGLE_PROJECT_ID": "helpy-gsf"
      }
    }
  }
}
```

1. Replace `YOURUSERNAME` with your Mac username
   - Not sure what it is? Open **Finder** → click **Go** in the menu bar → **Home**. The folder name at the top is your username
2. **Save** the file (Cmd + S) and **close** TextEdit
3. **Quit Claude Desktop completely** (right-click the dock icon → Quit), then reopen it

#### Step 3: Install pipx (one-time setup)

This is the only step that requires the terminal — ask a colleague to help, or:

1. Open **Terminal** (press Cmd + Space, type "Terminal", press Enter)
2. Copy and paste this line, then press Enter:

```
brew install pipx && pipx ensurepath
```

1. If you get "brew: command not found", paste this first, then try again:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

1. Close and reopen Terminal, then run the `brew install pipx && pipx ensurepath` line again

---

### Windows Setup

#### Step 1: Save the key file

1. Open **File Explorer**
2. Click in the address bar at the top and type `%USERPROFILE%` then press Enter — this takes you to your home folder (e.g. `C:\Users\YourName`)
3. Create a new folder called `.secrets`
   - Right-click → **New** → **Folder** → name it `.secrets`
   - Windows may warn you about the dot — click **Yes**
4. Drag the `analytics-mcp-key.json` file into this `.secrets` folder

#### Step 2: Edit the Claude Desktop config

1. Open **File Explorer**
2. Click in the address bar and type `%APPDATA%\Claude` then press Enter
3. You should see a file called `claude_desktop_config.json`
4. Right-click it → **Open with** → **Notepad**
5. Replace the entire contents of the file with:

```json
{
  "mcpServers": {
    "analytics-mcp": {
      "command": "pipx",
      "args": ["run", "analytics-mcp"],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "C:\\Users\\YOURUSERNAME\\.secrets\\analytics-mcp-key.json",
        "GOOGLE_PROJECT_ID": "helpy-gsf"
      }
    }
  }
}
```

1. Replace `YOURUSERNAME` with your Windows username
   - Not sure what it is? Look at the address bar in File Explorer when you're in your home folder — it's the name after `Users\`
2. **Save** the file (Ctrl + S) and **close** Notepad
3. **Quit Claude Desktop completely** (right-click the icon in the system tray near the clock → **Quit**), then reopen it

#### Step 3: Install pipx (one-time setup)

1. Open the **Start menu**, type `cmd`, and press Enter
2. Copy and paste this line, then press Enter:

```
pip install pipx && pipx ensurepath
```

1. If you get "pip: not recognized", you need Python first — download it from **python.org**, install it, and tick **"Add to PATH"** during installation. Then close and reopen cmd and try the line above again.

---

### Check it works

Open Claude Desktop and type:

> What can the analytics-mcp server do?

If it lists analytics tools, you're all set. If you see an error, check that:

- The `YOURUSERNAME` in the config matches your actual username
- The `analytics-mcp-key.json` file is in the `.secrets` folder
- You restarted Claude Desktop after editing the config
