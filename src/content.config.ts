import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    pillar: z.enum(['1', '2', '3', '1-3']),
    status: z.enum(['in-preparation', 'preprint', 'submitted', 'accepted', 'published']),
    venue: z.string().optional(),
    date: z.date(),
    arxiv: z.string().url().optional(),
    code: z.string().url().optional(),
    abstract: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { publications };
