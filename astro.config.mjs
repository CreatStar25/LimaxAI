// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://blog.limaxai.com',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      // 自定义序列化器，确保所有 URL 都有正确的格式
      serialize(item) {
        // 确保 URL 以斜杠结尾（与 trailingSlash: 'always' 一致）
        let url = item.url;
        if (!url.endsWith('/') && !url.includes('?') && !url.includes('#')) {
          url = url + '/';
        }
        
        return {
          ...item,
          url,
          changefreq: item.changefreq || 'weekly',
          priority: item.priority || 0.7,
          lastmod: item.lastmod || new Date().toISOString().split('T')[0],
        };
      },
      // 过滤不需要的页面
      filter(page) {
        // 排除 admin、api、private 等目录
        const excludePatterns = [
          '/admin/',
          '/api/',
          '/private/',
          '/test/',
          '/dev/',
          '/staging/',
          '/wp-admin/',
          '/wp-login.php',
        ];
        
        return !excludePatterns.some(pattern => page.includes(pattern));
      },
    })
  ],
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, {
        target: '_blank',
        rel: ['noopener', 'noreferrer', 'nofollow'],
        protocols: ['http', 'https', 'mailto', 'tel']
      }]
    ]
  },
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