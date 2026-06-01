import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    robots: z.string().default('index, follow'),
    keywords: z.array(z.string()).default([]),
    category: z.string(),
    productName: z.string(),
    productSlug: z.string(),
    productBaseUrl: z.string().url(),
    ctaText: z.string(),
    publishDate: z.string(),
    updatedDate: z.string().optional(),
    price: z.string().optional(),
    format: z.string().optional(),
    pages: z.number().optional(),
    sourceVerified: z.boolean().default(false),
  }),
});

export const collections = { products };
