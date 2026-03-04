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
    date: z.coerce.date(),
    summary: z.string(),
    challenge: z.string().optional(),
    outcome: z.string().optional(),
    mainImage: z.string().optional(),
    organizations: z.array(z.string()).optional(),
    additionalOrgCount: z.number().optional(),
    featured: z.boolean().optional(),
    lang: z.string().default("en"),
  }),
});

export const collections = { articles, pages, research, stories };
