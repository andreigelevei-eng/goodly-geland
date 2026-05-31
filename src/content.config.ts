import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    productName: z.string(),
    authorName: z.string().optional(),
    category: z.string(),
    ctaText: z.string(),
    ctaUrl: z.string().url(),
    keywords: z.array(z.string()).default([]),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    robots: z.string().default('index, follow'),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    category: z.string(),
    ctaText: z.string().optional(),
    ctaUrl: z.string().url().optional(),
    relatedProductSlug: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    robots: z.string().default('index, follow'),
  }),
});

export const collections = { products, articles };
