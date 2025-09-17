import { defineCollection, z } from 'astro:content';

const episodes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    longDescription: z.string().optional(),
    duration: z.string(),
    youtubeId: z.string().optional(),
    audiomackUrl: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    hostNotes: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  episodes,
};
