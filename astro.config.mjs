// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import { isMainSiteUrl, remarkLocalizeMainSiteLinks } from './src/utils/main-site-links.js';
import { rehypeRemoteImageDimensions } from './src/utils/image-dimensions.js';

const blogLocales = [
  'en', 'zh-cn', 'zh-tw', 'es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru',
  'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl',
  'sv', 'uk', 'ro'
];

export default defineConfig({
  site: 'https://blog.limaxai.com',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
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
        
        const { pathname } = new URL(page);
        const segments = pathname.split('/').filter(Boolean);
        if (pathname === '/tutorials/' || pathname === '/app/image/privacy/') {
          return false;
        }
        // Legal/support pages stay available to visitors but are not search landing pages.
        // They declare noindex in HTML and therefore must not be submitted in sitemaps.
        if (/\/(privacy|terms|auto-debit-agreement)\/$/.test(pathname)) {
          return false;
        }
        // /{lang}/ renders the same list as /{lang}/blog/ and canonicalizes there.
        // Keep the useful alias for visitors, but submit only the canonical URL.
        if (segments.length === 1 && blogLocales.includes(segments[0])) {
          return false;
        }

        return !excludePatterns.some(pattern => page.includes(pattern));
      },
    })
  ],
  markdown: {
    remarkPlugins: [remarkLocalizeMainSiteLinks],
    rehypePlugins: [
      rehypeRemoteImageDimensions,
      [rehypeExternalLinks, {
        target: '_blank',
        rel: (element) => isMainSiteUrl(element.properties.href)
          ? ['noopener', 'noreferrer']
          : ['noopener', 'noreferrer', 'nofollow'],
        protocols: ['http', 'https', 'mailto', 'tel']
      }]
    ]
  },
  i18n: {
    defaultLocale: 'en',
    locales: blogLocales,
    routing: {
      prefixDefaultLocale: true, // 强制默认语言也显示 /en/ 路径，方便管理
      redirectToDefaultLocale: false // 我们自己处理重定向逻辑
    }
  }
});
