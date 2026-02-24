# Feature Spec: Upload Team Photos to Notion Volunteers Database

**Status:** Planned
**Created:** 2026-02-24
**Last Updated:** 2026-02-24

## Overview

Upload existing team photos (originally from DatoCMS) to the Notion Volunteers database `Photo` field, so that the fetch script can pull them from Notion as the single source of truth.

## Problem Statement

The Notion Volunteers database has a `Photo` files property, but only 1 of ~39 displayed team members (Christopher Liljenstolpe) currently has a photo uploaded. We have 422 team photos from the DatoCMS migration stored locally in `content/team/photos/`. These need to be uploaded to the correct Volunteer records in Notion so the website can display them.

## Current State

- **Local photos:** `content/team/photos/` contains 422 photos (slugified names, e.g. `gadhu-sundaram.png`)
- **DatoCMS migration photos also at:** `content/articles/images/authors/` (28 article author photos) and `content/manifesto/images/editors/` (7 editor photos)
- **Notion Volunteers DB:** `Photo` is a `files` property. Only 1 record has a photo.
- **Fetch script:** `scripts/fetch-notion-data.js` already reads the `Photo` field from Volunteers and downloads it. No code changes needed on the read side.

## Solution

Create a one-time upload script (`scripts/upload-photos-to-notion.js`) that:

1. Reads the current `team.json` (from DatoCMS migration) to get the mapping of person names to photo filenames
2. For each person with a local photo, finds the matching Volunteer record in Notion
3. Uploads the photo binary to Notion via the File Upload API
4. Attaches the uploaded file to the Volunteer's `Photo` property

## Notion File Upload API

Requires **Notion-Version: 2025-09-03** header on all requests.

### Step 1: Create File Upload

```
POST https://api.notion.com/v1/file_uploads
Headers:
  Authorization: Bearer {NOTION_API_KEY}
  Content-Type: application/json
  Notion-Version: 2025-09-03
Body:
  { "filename": "gadhu-sundaram.png", "content_type": "image/png" }
```

Response includes an `id` (file upload ID) needed for steps 2 and 3.

### Step 2: Send File Binary

```
POST https://api.notion.com/v1/file_uploads/{file_upload_id}/send
Headers:
  Authorization: Bearer {NOTION_API_KEY}
  Notion-Version: 2025-09-03
  Content-Type: multipart/form-data
Body:
  file=@content/team/photos/gadhu-sundaram.png
```

JavaScript example:
```javascript
const FormData = require("form-data");
const fs = require("fs");

const form = new FormData();
form.append("file", fs.createReadStream(filePath), {
  filename: path.basename(filePath),
});

const response = await fetch(
  `https://api.notion.com/v1/file_uploads/${fileUploadId}/send`,
  {
    method: "POST",
    body: form,
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      "Notion-Version": "2025-09-03",
    },
  }
);
```

### Step 3: Attach to Volunteer Page

```
PATCH https://api.notion.com/v1/pages/{volunteer_page_id}
Headers:
  Authorization: Bearer {NOTION_API_KEY}
  Content-Type: application/json
  Notion-Version: 2025-09-03
Body:
  {
    "properties": {
      "Photo": {
        "type": "files",
        "files": [
          {
            "type": "file_upload",
            "file_upload": { "id": "{file_upload_id}" },
            "name": "gadhu-sundaram.png"
          }
        ]
      }
    }
  }
```

### Constraints

- Files must be attached **within 1 hour** of upload (or they expire)
- Max **20 MB** per file for single-part upload (team photos are well under this)
- Max filename length: **900 bytes**
- Notion API requires **read-write** MCP/integration permissions on the Volunteers database
- Rate limit: 3 requests/second for the Notion API

## Implementation Plan

### 1. Build the name-matching logic

The DatoCMS `team.json` has `fullName` fields. The Notion Volunteers DB has separate `First Name` and `Last Name` rich_text properties. Match by:
- Splitting DatoCMS `fullName` into first/last
- Querying Volunteers with `First Name` equals + `Last Name` contains
- Same cross-reference approach already used in `fetchAdminTeam()`

### 2. Filter to only missing photos

Before uploading, check if the Volunteer record already has a `Photo` file. Skip records that already have photos (don't overwrite Christopher Liljenstolpe's existing photo).

### 3. Upload loop with rate limiting

For each match:
1. Create file upload object (POST /v1/file_uploads)
2. Send binary (POST /v1/file_uploads/{id}/send)
3. Patch volunteer page (PATCH /v1/pages/{page_id})
4. Wait 400ms between iterations (stay under 3 req/s rate limit)

Log each upload: success, skip (already has photo), skip (no match), failure.

### 4. Handle edge cases

- **Multiple photos for same name:** Use the one from `content/team/photos/` first (most complete set)
- **Name mismatches:** Log unmatched names for manual review. Common issues: accented characters, name order differences, nicknames
- **Photo format:** Detect MIME type from file extension (.png -> image/png, .jpg -> image/jpeg, etc.)

## Script Interface

```bash
# Dry run — show what would be uploaded without making changes
node scripts/upload-photos-to-notion.js --dry-run

# Upload all missing photos
node scripts/upload-photos-to-notion.js

# Upload for a specific person
node scripts/upload-photos-to-notion.js --name "Gadhu Sundaram"
```

## Dependencies

- `form-data` npm package (for multipart uploads) — or use Node 18's built-in `FormData` if available
- `NOTION_API_KEY` environment variable with **read-write** access to Volunteers database
- Notion integration must have the Volunteers database shared with it (already done for read access)

## Verification

After uploading:
1. Run `yarn fetch-notion` to pull fresh data from Notion
2. Run `yarn build` and check the team page — photos should now appear
3. Spot-check a few Volunteer records in Notion to confirm photos are attached

## Risks

- **Notion rate limits:** With ~400 photos and 3 API calls each, that's ~1200 requests. At 3 req/s with 400ms delays, the upload will take ~8 minutes. May hit rate limits — add retry with exponential backoff.
- **Overwriting data:** The PATCH to update `Photo` replaces the entire files array. If a volunteer has multiple files in Photo, they'll be replaced. The script should preserve existing files by reading the current value first and appending.
- **One-time operation:** This script is meant to run once to seed the data. After that, photos should be managed directly in Notion.
