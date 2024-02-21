import { z, defineCollection } from 'astro:content';

const codeCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
    }),
  });

export const collections = {
  'code': codeCollection,
};