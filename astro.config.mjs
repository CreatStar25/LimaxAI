// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.limaxai.com', // 你的域名
  integrations: [tailwind(), sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'zh-cn', 'zh-tw', 'es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 
      'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 
      'sv', 'uk', 'ro'
    ],
    routing: {
      prefixDefaultLocale: true, // 强制默认语言也显示 /en/ 路径，方便管理
      redirectToDefaultLocale: false // 我们自己处理重定向逻辑
    }
  }
});