# Feature Spec: Internationalisation & Translation

**Status:** Planned
**Created:** 2026-02-27
**Last Updated:** 2026-02-27

## Overview

Add multi-language support to the GSF website, starting with Japanese and English. Uses Astro's built-in i18n routing for UI chrome, with LLM-based machine translation for the article corpus.

## Problem Statement

GSF has a global audience, with Japanese members and stakeholders being a key demographic. Some articles already exist in translated form. The site needs a scalable approach to serving content in multiple languages.

## Solution

### URL Structure

```
/membership          → English (default, no prefix)
/ja/membership       → Japanese
/zh/membership       → Chinese (future)
```

English URLs never change. Adding languages is purely additive — no redirects, no broken links, no SEO impact on existing English pages. This is why it's safe to implement i18n later.

### Two Content Types, Two Approaches

#### 1. UI Chrome (nav labels, headings, CTAs, button text)

- Use **Astro's built-in i18n** with translation files
- Small corpus (~a few hundred strings), relatively stable
- Human-translated and reviewed
- Stored in `src/i18n/en.json`, `src/i18n/ja.json`, etc.
- Pages use a `t()` helper instead of hardcoded strings

#### 2. Articles & Stories (~200+ documents, growing)

- Use **LLM-based machine translation at build time**
- Translated versions generated during the build pipeline and stored as static pages
- Human review for high-visibility content (homepage, membership page, key articles)
- Clear disclaimer on machine-translated pages

### Translation Tiers

| Content | Translation method | Review |
|---------|-------------------|--------|
| Homepage, membership, about | Human translation | Professional review |
| UI chrome (nav, buttons, CTAs) | Human translation | Native speaker review |
| Articles & stories | LLM machine translation | Light review / disclaimer |
| Member directory, project pages | LLM machine translation | Automated |

## Machine Translation Quality (as of 2026)

The landscape has shifted dramatically. Key findings:

**LLMs now dominate translation benchmarks:**
- Claude 3.5 won 9 out of 11 language pairs at WMT24 (the gold standard benchmark)
- In the Lokalise blind study, professional translators rated Claude output as "good" 78% of the time
- LLMs account for 89% of top-performing systems in translation benchmarks
- LLM output is frequently described as "publishable with minimal review" for technical and marketing content

**Japanese-English:**
- Dramatically improved but remains the harder pair due to structural differences (SOV vs SVO, omitted subjects, politeness registers)
- DeepL's next-gen LLM achieved 1.7x quality improvement for JA-EN
- LLM translations serve as high-quality first drafts, but human review is still recommended for professional content targeting Japanese audiences
- Japanese audiences have particularly high quality expectations

**Chinese-English:**
- In better shape than Japanese, benefiting from heavy investment by Chinese AI labs (DeepSeek, Qwen-MT)
- DeepL's next-gen LLM achieved 1.7x improvement for ZH-EN
- Technical content quality is high; cultural nuance still needs human review

**Practical recommendation:**
- Use Claude or GPT-4 for high-visibility content translation drafts
- Use DeepL or a mid-tier LLM for bulk article translation
- Always flag machine-translated content with a disclaimer
- Budget for human review of key pages

## Implementation Plan

### Prerequisites

- [ ] Implement `lang="en"` and canonical tags first (see `html-lang-canonical.md`)

### Phase 1: Astro i18n Setup

1. Configure Astro's i18n routing in `astro.config.mjs` (default locale: `en`, additional: `ja`)
2. Create translation files (`src/i18n/en.json`, `src/i18n/ja.json`)
3. Build a `t()` helper function for use in Astro components
4. Refactor page files to use translation keys instead of hardcoded English strings
5. Add language switcher to the navbar

### Phase 2: Key Page Translations (Human)

1. Professionally translate homepage content to Japanese
2. Translate membership and about pages
3. Review and refine all UI chrome translations with a native speaker

### Phase 3: Article Translation Pipeline (Machine)

1. Build a translation script that processes article content through an LLM API
2. Store translated articles alongside English originals (e.g. `articles/ja/...`)
3. Add translated articles to the build pipeline
4. Add "This page was machine-translated" disclaimer component
5. Integrate with existing Notion fetch pipeline — translate on content update

### Phase 4: Additional Languages

1. Add Chinese (`zh`) following the same pattern
2. Leverage existing translated articles where available
3. Scale the translation pipeline to additional languages as needed

## References

- [Astro i18n documentation](https://docs.astro.build/en/guides/internationalization/)
- [WMT24 findings — LLM era for MT](https://aclanthology.org/2024.wmt-1.1/)
- [Lokalise — AI translation quality study](https://lokalise.com/blog/ai-translation-quality/)
- [DeepL next-gen LLM improvements](https://www.deepl.com/en/blog/next-gen-language-model)
