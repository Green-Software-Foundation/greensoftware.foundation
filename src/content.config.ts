import { defineCollection, image } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const personSchema = z.object({
  fullName: z.string(),
  role: z.string().optional(),
  company: z.string().optional(),
  companyWebsite: z.string().optional(),
  // Author photos are shared assets in public/assets/articles/authors/ — kept as strings
  photo: z.string().optional(),
  socialMedia: z
    .array(
      z.object({
        platform: z.string(),
        link: z.string(),
      }),
    )
    .optional(),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: ({ image: img }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      published: z.boolean().default(false),
      summary: z.string(),
      teaserText: z.string().optional(),
      // Co-located image — Astro processes it for optimisation
      mainImage: img().optional(),
      mainImageAlt: z.string().optional(),
      description: z.string().optional(),
      authors: z.array(personSchema).optional(),
      translators: z.array(personSchema).optional(),
      originBlogName: z.string().optional(),
      publishedOriginUrl: z.string().optional(),
      lang: z.string().default("en"),
      featured: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    published: z.boolean().default(false),
    description: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    date: z.coerce.date(),
    published: z.boolean().default(false),
    status: z.enum(["published", "draft", "in-progress"]).default("published"),
    type: z.enum(["paper", "response", "report"]).default("paper"),
    summary: z.string(),
    jurisdiction: z.string().optional(),
    framework: z.string().optional(),
    workingGroup: z.string().optional(),
    authors: z
      .array(
        z.object({
          name: z.string(),
          org: z.string().optional(),
        }),
      )
      .optional(),
    version: z.string().optional(),
    sourceUrl: z.string().optional(),
    mainImage: z.string().optional(),
    doi: z.string().optional(),
    pdfUrl: z.string().optional(),
    featured: z.boolean().optional(),
    tags: z.array(z.string()).optional(),
    lang: z.string().default("en"),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    published: z.boolean().default(false),
    // ── Optional simple fields (legacy / future use) ──────────────────────────
    date: z.coerce.date().optional(),
    challenge: z.string().optional(),
    outcome: z.string().optional(),
    mainImage: z.string().optional(),
    featured: z.boolean().optional(),
    lang: z.string().default("en"),
    // ── Rich story fields ─────────────────────────────────────────────────────
    problemHeading: z.string().optional(),
    journeyHeading: z.string().optional(),
    orgs: z
      .array(
        z.object({
          name: z.string(),
          logo: z.string().nullable().optional(),
        }),
      )
      .optional(),
    stats: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
    timeline: z
      .array(
        z.object({
          date: z.string(),
          heading: z.string(),
          body: z.string(),
          source: z
            .object({
              text: z.string(),
              href: z.string(),
            })
            .nullable()
            .optional(),
        }),
      )
      .optional(),
    featuredQuote: z
      .object({
        text: z.string(),
        author: z.string(),
        role: z.string().optional(),
      })
      .optional(),
    contributors: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
          org: z.string(),
          photo: z.string().nullable().optional(),
          contribution: z.string(),
        }),
      )
      .optional(),
    quotes: z
      .array(
        z.object({
          text: z.string(),
          author: z.string(),
          role: z.string(),
        }),
      )
      .optional(),
    relatedSlugs: z.array(z.string()).optional(),
    cta: z
      .object({
        heading: z.string(),
        body: z.string(),
        ctaText: z.string().optional(),
        ctaHref: z.string().optional(),
        note: z.string().optional(),
      })
      .optional(),
  }),
});

const academics = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/academics" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    institution: z.string(),
    institutionUrl: z.string().optional(),
    institutionLogo: z.string().optional(),
    institutionLogos: z
      .array(
        z.object({
          name: z.string(),
          logo: z.string().optional(),
          url: z.string().optional(),
        }),
      )
      .optional(),
    published: z.boolean().default(false),
    summary: z.string(),
    researchMission: z.string(),
    keyAreas: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
        }),
      )
      .optional(),
    collaborationAreas: z
      .array(
        z.object({
          title: z.string(),
          body: z.string(),
          relevance: z.string().optional(),
        }),
      )
      .optional(),
    affiliations: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().optional(),
        }),
      )
      .optional(),
    recognition: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().optional(),
        }),
      )
      .optional(),
    publications: z
      .object({
        peerReviewed: z.string().optional(),
        patents: z.string().optional(),
        citations: z.string().optional(),
      })
      .optional(),
    aboutParagraphs: z.array(z.string()).optional(),
    sdgAlignment: z
      .array(
        z.object({
          number: z.string(),
          title: z.string(),
        }),
      )
      .optional(),
    stats: z
      .array(
        z.object({
          value: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().optional(),
          group: z.string().optional(),
        }),
      )
      .optional(),
    lang: z.string().default("en"),
  }),
});

export const collections = { academics, articles, pages, research, stories };
