import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files starting with "_" are ignored (used as copyable templates).
const pattern = '**/[^_]*.{json,md}';

const projects = defineCollection({
  loader: glob({ pattern, base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      sample: z.boolean().default(false), // true = placeholder entry, shown with a "Sample" tag
      type: z.string(),
      categories: z.array(z.string()), // see src/data/categories.ts
      size: z.string().default('[XX]'),
      volume: z.string().default('[XX] gallons'),
      location: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(100),
      image: image(),
      imageAlt: z.string(),
      gallery: z.array(z.object({ image: image(), alt: z.string() })).default([]),
      summary: z.string(),
      highlights: z.array(z.string()).default([]),
      challenge: z.string().default('[CHALLENGE]'),
      design: z.string().default('[DESIGN]'),
      engineering: z.string().default('[ENGINEERING]'),
      manufacturing: z.string().default('[MANUFACTURING]'),
      installation: z.string().default('[INSTALLATION]'),
      solution: z.string().default('[SOLUTION]'),
      result: z.string().default('[RESULT]'),
      specs: z.record(z.string(), z.string()).default({}),
    }),
});

const testimonials = defineCollection({
  loader: glob({ pattern, base: './src/content/testimonials' }),
  schema: z.object({
    quote: z.string(),
    name: z.string(),
    company: z.string(),
    position: z.string(),
    project: z.string().optional(),
    placeholder: z.boolean().default(false),
  }),
});

const resellers = defineCollection({
  loader: glob({ pattern, base: './src/content/resellers' }),
  schema: z.object({
    name: z.string(),
    type: z.string(),
    location: z.string(),
    url: z.string().url().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern, base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, testimonials, resellers, posts };
