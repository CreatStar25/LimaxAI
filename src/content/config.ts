// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('LimaxAI Team'),
    
    // ⚠️ 修改点：删除了 .refine()，不再限制图片必须大于600px
    image: image(),
    
    tags: z.array(z.string()),
    lang: z.enum([
        'en', 'zh-cn', 'zh-tw', 'es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 
        'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 
        'sv', 'uk', 'ro'
    ]),
  }),
});

export const collections = {
  'blog': blogCollection,
};