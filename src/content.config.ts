import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const providers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/providers' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    location: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    website: z.string().url().optional(),
    photo: z.string().optional(),
    bio: z.string(),
    active: z.boolean().default(true),
    featured: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    name: z.string(),
    provider: z.string(),
    category: z.string(),
    summary: z.string(),
    priceRange: z.string(),
    deliveryTime: z.string(),
    remote: z.boolean().default(false),
    inPerson: z.boolean().default(false),
    active: z.boolean().default(true),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

const categories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/categories' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    order: z.number().default(100),
    active: z.boolean().default(true),
  }),
});

export const collections = { providers, services, categories };
