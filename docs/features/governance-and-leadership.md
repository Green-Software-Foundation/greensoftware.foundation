# Page Description: Governance & Leadership

**URL:** `/governance`
**Status:** Planned
**Created:** 2026-02-27

## Purpose

Explains how the Green Software Foundation is structured, governed, and led. For members wanting to understand who runs things, for prospective members evaluating the foundation's credibility, and for transparency.

## Data Source

All people data on this page is rendered from the JSON files produced by `scripts/fetch-notion-data.cjs`. The Notion fetch script pulls steering committee members, working group chairs, project leads, and committee members into `src/data/` at build time. No people data is hardcoded — if someone's role changes in Notion, the page updates on the next build.

Staff/executive team data will also need to be sourced from Notion (currently missing from the fetch script — needs adding).

## Entity Information

- **Legal name:** Green Software Foundation
- **Type:** Nonprofit, registered and accredited under the [Joint Development Foundation](https://jointdevelopment.org/)
- **Fiscal sponsor:** The Linux Foundation (548 Market St, PMB 57274, San Francisco, California)
- **Registered address:** Green Software Foundation, 3500 South Dupont Highway, Suite AA101, Dover, DE 19901
- **EIN:** 47-1122212
- **Tax information:** [ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/organizations/471122212)

The GSF is **not** a direct-service nonprofit. It sits under the Joint Development Foundation, which itself sits under the Linux Foundation. The Linux Foundation serves as fiscal sponsor.

---

## Page Sections

### 1. Introduction

**Component:** TextBlock (compact), cream background (`bg-accent-lightest-2`)

A brief paragraph explaining the foundation's governance model:

> The Green Software Foundation is an accredited nonprofit under the Joint Development Foundation, part of the Linux Foundation family. Our governance is transparent, member-driven, and consensus-based. The Steering Committee provides strategic direction and fiduciary oversight, while our working groups and committees drive the standards and initiatives that move the industry towards a sustainable future.

Below the text, a visual diagram showing the governance hierarchy:

```
Linux Foundation
  └── Joint Development Foundation
        └── Green Software Foundation
              ├── Steering Committee / Board
              │     ├── Working Groups (standards)
              │     │     ├── Software Standards WG
              │     │     ├── Hardware Standards WG
              │     │     └── Policy WG
              │     └── Committees
              │           ├── Green AI Committee
              │           └── Developer Relations Committee
              └── Staff (day-to-day operations)
```

This diagram will be a styled HTML/SVG component — not an image. It needs to be responsive (stacks vertically on mobile).

---

### 2. Steering Committee / Board

**Component:** Team component (from catalogue — `src/components/_catalogue/team.astro`)

**Introductory text (1-2 sentences):**

> The Steering Committee is the primary governing body of the Green Software Foundation. Members are selected by Steering Member organisations and are responsible for strategic direction, fiduciary oversight, budget approval, and ratification of working group deliverables. The committee also serves as the point of contact for media inquiries and represents the GSF at major conferences and events.

**Layout:**

1. **Chair and Vice-Chair displayed first, visually separated** — larger cards or a highlighted row:
   - **Chair:** Gadhu Sundaram, Vice President, NTT DATA
   - **Vice-Chair:** Jonathan Turnbull, Program Manager, Google

2. **Remaining members** displayed using the Team component (circular photos, name, title, company, LinkedIn link):
   - Ben Logan — Global Technology Lead, UBS
   - Carolin Rubner — Head of Research Group, Siemens
   - Christopher Liljenstolpe — Data Centre Architecture & Sustainability, Cisco
   - Navveen Balani — Managing Director and Chief Technologist, Accenture
   - Sanjay Podder — Managing Director, Accenture
   - Vinjosh Varghese — Data Engineer, UBS
   - Yusuke Kobayashi — Senior Manager, R&D / Green Innovation, NTT DATA

**Data source:** Notion → `committees[0]` in fetched JSON (chair, vice_chair, members array with name, title, company)

**Photos:** Need to be sourced from Notion. The fetch script should download member photos into `public/assets/people/` or similar.

---

### 3. Staff

**Component:** Team component (same as Steering Committee section)

**Introductory text (1 sentence):**

> The foundation's staff run day-to-day operations and report to the Steering Committee.

Staff members displayed using the Team component — circular photos, name, role, LinkedIn link.

**Data source:** Notion. Currently **not included** in the fetch script — needs to be added. The staff data should be fetched into the same JSON structure as other people data.

---

### 4. Chairs

**Component:** Team component, with each person's card showing their role

**Introductory text (1-2 sentences):**

> These are the people driving the initiatives at the Green Software Foundation — chairing working groups, committees, and projects, and moving the industry forward towards a sustainable future.

Each chair's card should show:
- Photo (circular)
- Name
- Title and company
- Which working group, committee, or project they chair

**Current chairs (from directory data):**

| Name                     | Company                   | Chair of                                    |
| ------------------------ | ------------------------- | ------------------------------------------- |
| Gadhu Sundaram           | NTT DATA                  | Steering Committee (Chair)                  |
| Jonathan Turnbull        | Google                    | Steering Committee (Vice-Chair)             |
| Henry Richardson         | WattTime                  | Software Standards WG (Co-Chair)            |
| Navveen Balani           | Accenture                 | Software Standards WG (Co-Chair)            |
| Christopher Liljenstolpe | Cisco                     | Hardware Standards WG (Chair)               |
| Chris Adams              | The Green Web Foundation  | Policy WG (Chair)                           |
| Vaughan Knight           | Microsoft                 | Carbon Aware SDK (Project Lead)             |
| Pindy Bhullar            | ClimateAction.tech        | SOFT (Project Lead)                         |
| My Truong                | ZutaCore                  | WDPC (Project Lead)                         |
| Joseph Cook              | Green Software Foundation | Impact Framework (Project Lead)             |
| Florent Morel            | Amadeus                   | Carmen (Project Lead)                       |
| Robin Castellon          | Amadeus                   | Carmen (Project Lead)                       |
| Srinivasan Rakhunathan   | Microsoft                 | Impact Framework (Project Lead)             |

**Data source:** Notion → `working_groups[].chairs`, `projects[].leads`, and `committees[].chair` / `committees[].vice_chair` in fetched JSON. The fetch script needs to be updated to produce a unified list of chairs/leads with their role labels.

**Note:** Some chairs also appear on the Steering Committee (e.g. Navveen Balani, Christopher Liljenstolpe). That's fine — they should appear in both sections.

---

### 5. Organisation Leads

**Component:** Simple table or compact card list

**Introductory text (1 sentence):**

> Every member organisation has a primary Organisation Lead — the point of contact for people from that organisation who want to get involved with the foundation.

**Current Org Leads (from directory data):**

| Organisation | Org Lead                  | Title                                      |
| ------------ | ------------------------- | ------------------------------------------ |
| Accenture    | *(not listed — needs adding)* | —                                      |
| Cisco        | Christopher Liljenstolpe  | Data Centre Architecture & Sustainability  |
| Google       | Jonathan Turnbull         | Program Manager                            |
| NTT DATA     | Yusuke Kobayashi          | Senior Manager, R&D / Green Innovation     |
| Siemens      | Carolin Rubner            | Head of Research Group                     |
| UBS          | Ben Logan                 | Global Technology Lead                     |

**Data source:** Notion → `members.steering[].representatives` where role includes "Organization Lead"

---

### 6. Legal & Registration

**Component:** TextBlock (compact), smaller text, cream background

A brief transparency section at the bottom of the page:

> The Green Software Foundation is a nonprofit registered under the Joint Development Foundation, with the Linux Foundation serving as fiscal sponsor. We are not a direct-service nonprofit.

- **EIN:** 47-1122212
- **Registered address:** 3500 South Dupont Highway, Suite AA101, Dover, DE 19901
- **Fiscal sponsor:** The Linux Foundation, 548 Market St, PMB 57274, San Francisco, California
- **Tax filings:** [View on ProPublica Nonprofit Explorer](https://projects.propublica.org/nonprofits/organizations/471122212)

---



## Component Summary

| #   | Section                    | Component                                                          | Data Source                                                                    |
| --- | -------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| 1   | Introduction               | TextBlock (compact) + custom governance diagram                    | Static text + styled HTML/SVG                                                  |
| 2   | Steering Committee / Board | Team component (Chair/Vice-Chair highlighted, then remaining members) | Notion → `committees[0]`                                                    |
| 3   | Staff                      | Team component                                                     | Notion → **needs adding to fetch script**                                      |
| 4   | Chairs                     | Team component (with role labels on each card)                     | Notion → `working_groups[].chairs` + `projects[].leads` + `committees[].chair` |
| 5   | Organisation Leads         | Table or compact card list                                         | Notion → `members.steering[].representatives` (role = "Organization Lead")     |
| 6   | Legal & Registration       | TextBlock (compact, small text)                                    | Static text                                                                    |

## Design Notes

- This page should feel authoritative and transparent — it's governance, not marketing
- Cream background (`bg-accent-lightest-2`) as default section background
- The governance diagram in Section 1 is the most important visual — must make the hierarchy immediately clear
- All people sections use the same Team component for visual consistency
- No sidebar or sticky nav needed — the page is linear and not excessively long with the simplified structure
