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
      organizations: z.array(z.string()).optional(),
      additionalOrgCount: z.number().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    abstract: z.string(),
    summary: z.string(),
    mainImage: z.string().optional(),
    authors: z.array(personSchema).optional(),
    organizations: z.array(z.string()).optional(),
    doi: z.string().optional(),
    pdfUrl: z.string().optional(),
    featured: z.boolean().optional(),
    lang: z.string().default("en"),
  }),
});

const stories = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/stories" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // ── Optional simple fields (legacy / future use) ──────────────────────────
    date: z.coerce.date().optional(),
    challenge: z.string().optional(),
    outcome: z.string().optional(),
    mainImage: z.string().optional(),
    organizations: z.array(z.string()).optional(),
    additionalOrgCount: z.number().optional(),
    featured: z.boolean().optional(),
    lang: z.string().default("en"),
    // ── Rich story fields ─────────────────────────────────────────────────────
    problemHeading: z.string().optional(),
    journeyHeading: z.string().optional(),
    orgs: z.array(z.object({
      name: z.string(),
      logo: z.string().nullable().optional(),
    })).optional(),
    stats: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })).optional(),
    timeline: z.array(z.object({
      date: z.string(),
      heading: z.string(),
      body: z.string(),
      source: z.object({
        text: z.string(),
        href: z.string(),
      }).nullable().optional(),
    })).optional(),
    featuredQuote: z.object({
      text: z.string(),
      author: z.string(),
    }).optional(),
    contributors: z.array(z.object({
      name: z.string(),
      role: z.string(),
      org: z.string(),
      photo: z.string().nullable().optional(),
      contribution: z.string(),
    })).optional(),
    quotes: z.array(z.object({
      text: z.string(),
      author: z.string(),
      role: z.string(),
    })).optional(),
    relatedSlugs: z.array(z.string()).optional(),
    cta: z.object({
      heading: z.string(),
      body: z.string(),
      note: z.string().optional(),
    }).optional(),
  }),
});

export const collections = { articles, pages, research, stories };
