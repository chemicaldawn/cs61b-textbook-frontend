import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const textbook = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./content-legacy/"}),
    schema: z.object({
        title: z.string(),
        authors: z.string().array().default([]),
        union_bug : z.boolean().default(false),
        section: z.number(),
        slug: z.string()
    })
})

export const collections = { textbook }