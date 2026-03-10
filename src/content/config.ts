// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('LimaxAI Team'),
    // 支持旧文 image（本地或 URL）或新文 heroImage（URL），至少有一个即可展示
    image: z.union([image(), z.string().url()]).optional(),
    heroImage: z.string().url().optional(),
    tags: z.array(z.string()),
    lang: z.enum([
      'en', 'zh-cn', 'zh-tw', 'es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru',
      'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl',
      'sv', 'uk', 'ro'
    ]),
  }).refine((data) => data.image != null || data.heroImage != null, {
    message: '至少需要 image 或 heroImage 之一',
  }),
});

export const collections = {
  'blog': blogCollection,
};