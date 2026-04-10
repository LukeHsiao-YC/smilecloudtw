import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date().optional(),
        pubDate: z.coerce.date().optional(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.optional(image()),
        category: z.string().optional(),
        series: z.string().optional(),
        tags: z.array(z.string()).optional(),
        recommend: z.boolean().optional(),
    }),
});

const guideline = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string().optional(),
    }),
});

export const collections = { blog, guideline };