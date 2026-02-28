import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const personSchema = z.object({
  fullName: z.string(),
  role: z.string().optional(),
  company: z.string().optional(),
  companyWebsite: z.string().optional(),
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
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    teaserText: z.string().optional(),
    mainImage: z.string().optional(),
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

export const collections = { articles, pages };
