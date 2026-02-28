# Member Stories: Mining & Assembly Plan

**Status:** Planned
**Created:** 2026-02-27
**Last Updated:** 2026-02-27

## Objective

Mine GSF's 188 articles and online directory to extract and reframe 12-15+ member stories as problem → journey → impact narratives. These stories will be used on the homepage (problem-solution sections), membership page (proof section), and impact page (success stories).

## Data Sources

### Articles
- **Location:** `/Users/jawache/Development/gsf/greensoftware.foundation/_legacy/content/articles/en/`
- **Count:** 188 markdown files with frontmatter (title, date, summary)
- **Total size:** ~13,000 lines
- **Types include:** member Q&As, case studies, whitepapers, announcements, workshop reports

### Directory Website
- **URL:** `https://directory.greensoftware.foundation/`
- **Confirmed fetchable** via WebFetch (no JavaScript rendering issues)
- **Pages to spider:**
  - `/members/` — 6 steering + 80+ general members
  - `/members/[name]` — individual profiles with representatives, titles, roles
  - `/projects` — 17 projects with status and working group assignments
  - `/working-groups` — 3 working groups (Hardware Standards, Policy, Software Standards)
  - `/committees` — 3 committees (Developer Relations, Green AI, Steering)
  - Individual project pages for chairs and participants

### Key Directory Data Already Extracted
- **Steering members:** Accenture, Cisco, Google, NTT DATA, Siemens, UBS
- **17 projects:** SCI, SOFT, WDPC, SCI for AI, SCI for Web, Carbon Aware SDK, Carmen, Impact Framework, Green Software Practitioner, Green Software Patterns, Awesome Green Software, Policy Radar, RTC, SCI Guide, SCI Self Certification, SEE, Green AI Practitioner Course

## Target Stories (~15)

| # | Story | Theme | Key Companies | Notes |
| - | ----- | ----- | ------------- | ----- |
| 1 | SCI Specification | Standards | Microsoft, Accenture, Thoughtworks, Goldman Sachs + many | ISO certified, the flagship standard |
| 2 | Carbon Aware SDK | Tools | Microsoft, UBS | Enterprise-scale, led to Carbon Hack hackathon |
| 3 | UBS Carbon-Aware Computing | Adoption | UBS | First enterprise SCI implementation, whitepaper exists |
| 4 | SOFT Framework | Org Change | HSBC, Microsoft, Google, Accenture, UBS, Siemens | Ratified, training created |
| 5 | Green Software Practitioner Course | Education | Goldman Sachs (Sarah Tosu), Microsoft, Accenture, Thoughtworks | 130k+ completions, Sarah wrote a book |
| 6 | Green Software Patterns | Education | Microsoft + others | May merge with SPC/Goldman story |
| 7 | WDPC | Hardware Standards | Cisco, Zutacore + hardware vendors | Still in progress but significant progress |
| 8 | SCI for AI | AI Standards | Accenture + workshop participants | Workshop → working group → ratification → public consultation |
| 9 | SCI for Web | Standards | Green Web Foundation, W3C | AI-facilitated workshop, in active development |
| 10 | Impact Framework | Tools | Microsoft, Accenture | Ratified, hackathon (Carbon Hack) used for adoption |
| 11 | Carmen | Tools | Amadeus | Open source, SCI at scale |
| 12 | Amadeus SCI Adoption | Adoption | Amadeus | CTO set 30% reduction targets per product |
| 13 | Policy Radar | Policy | Green Web Foundation + policy WG | Published |
| 14 | Thoughtworks Engagement | Community | Thoughtworks | Employee engagement, country-specific leadership roles |
| 15 | Carbon Hack | Community | Cross-cutting | Hackathon series, multiple years |

**Plus:** agents should surface additional stories not listed here from the article archive.

## Output Artefacts

### 1. Article Index
- **File:** `docs/content/article-index.json`
- **Format:** JSON array, one entry per article
- **Fields per entry:**
  ```json
  {
    "file": "filename.md",
    "title": "Article Title",
    "date": "YYYY-MM-DD",
    "type": "case-study | member-qa | whitepaper | announcement | workshop-report | opinion | other",
    "companies": ["Company1", "Company2"],
    "people": [{"name": "Name", "title": "Title", "company": "Company"}],
    "projects": ["SCI", "Carbon Aware SDK"],
    "themes": ["measurement", "adoption", "standards", "education", "policy", "tools", "community"],
    "key_quotes": ["quote1", "quote2"],
    "summary": "One-line summary",
    "potential_story": true,
    "story_note": "Why this might be a story we haven't identified"
  }
  ```
- **Purpose:** Reusable index for enriching article frontmatter later, powering article filters on the new site, and feeding future agents

### 2. Directory Data
- **File:** `docs/content/directory-data.json`
- **Format:** JSON with sections for members, projects, working groups, committees
- **Purpose:** Cross-reference with articles, identify gaps

### 3. Individual Story Files
- **Location:** `docs/content/stories/`
- **One file per story:** e.g. `sci-specification.md`, `carbon-aware-sdk.md`
- **Format per story:**
  ```markdown
  ## Story: [Title]

  **Theme:** Standards / Tools / Education / Policy / Adoption / Community
  **Key Companies:** [list]
  **Key People:** [name, title, company]

  ### The Problem
  [2-3 paragraphs, framed from the member's perspective]

  ### The Journey
  [Timeline: how it was developed — workshops, working groups, milestones, hackathons]
  [Solutions baked into the journey narrative, not separated out]

  ### The Impact
  [Adoption metrics, ISO status, downstream effects]

  ### Key Quotes
  [Pulled from articles, with attribution]

  ### Related Articles
  [File paths to source articles in _legacy/content/articles/en/]

  ### Call to Action
  [What should the reader do next — take training, adopt the standard, etc.]

  ### Open Questions
  [Things we couldn't find or need to verify]
  ```

### 4. Stories Index
- **File:** `docs/content/stories/index.md`
- **Format:** Summary table of all stories with status, theme, key companies

## Multi-Agent Execution Plan

### Phase 1: Catalogue & Classify (4 agents, parallel)

Each agent gets ~50 articles (split alphabetically or by file order). Task:
- Read each article fully
- Produce structured index entries (see format above)
- Flag articles with `potential_story: true` if they contain narrative patterns:
  - A member's problem or motivation
  - Two or more companies collaborating
  - A progression (proposal → development → ratification → adoption)
  - A result, metric, or outcome
  - A member Q&A where someone describes what drew them to GSF
- Write results to a temporary JSON file per agent

After all 4 complete: merge into single `docs/content/article-index.json`

### Phase 2: Spider Directory (1 agent, parallel with Phase 1)

- Fetch all member profiles (prioritise steering members + key general members mentioned in target stories)
- Fetch all project pages for chairs, participants, descriptions
- Fetch working group and committee pages
- Write to `docs/content/directory-data.json`
- Cross-reference: flag projects that have directory data but no articles, and vice versa

### Phase 2.5: Gap Analysis & New Story Discovery (1 agent, after Phases 1 & 2)

- Read both JSON files
- Identify story clusters from the article index
- Cross-reference with directory data (who chairs what, who's involved where)
- Surface new stories not in the target list above
- Produce a proposed story list with evidence
- **STOP and present to user for review before continuing**

### Phase 3: Story Assembly (5 agents, parallel, after user approval)

Grouped by cluster:
1. **Standards cluster:** SCI, WDPC, SCI for AI, SCI for Web, SEE/SWE
2. **Tools cluster:** Carbon Aware SDK, Impact Framework, Carmen
3. **Education cluster:** SPC, Patterns, Thoughtworks engagement
4. **Policy cluster:** Policy Radar + any policy stories surfaced
5. **Adoption & Community cluster:** UBS, Amadeus, Carbon Hack + any new stories

Each agent:
- Reads the full text of relevant articles (using the index to identify them)
- Reads relevant directory data
- Produces individual story files in `docs/content/stories/`
- Flags gaps and open questions

### Phase 4: Index & Review (1 agent, after Phase 3)

- Reads all story files
- Produces `docs/content/stories/index.md`
- Produces a summary of all open questions across stories
- Flags which stories are strongest (most evidence, best quotes) for homepage/membership page use

## Estimated Agent Count

- Phase 1: 4 agents
- Phase 2: 1 agent
- Phase 2.5: 1 agent
- Phase 3: 5 agents
- Phase 4: 1 agent
- **Total: ~12 agents**

## Key Principles

- **Surface new stories** — don't just look for the 15 targets, find stories we've forgotten
- **Problem-first framing** — every story must start from the member's perspective, not GSF's
- **Article references** — every story must link back to source articles (file paths)
- **Name names** — companies and individuals with titles
- **Flag gaps honestly** — if we can't find something, say so in Open Questions
- **Journey includes solutions** — don't separate problem/solution/journey; the solutions emerge during the journey
