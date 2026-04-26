// src/utils/sitemap-enhancer.js
// Sitemap 增强工具，用于添加额外的 SEO 信息和优化

/**
 * 增强 sitemap 配置
 * @param {Object} defaultConfig - 默认的 sitemap 配置
 * @returns {Object} 增强后的配置
 */
export function enhanceSitemapConfig(defaultConfig = {}) {
  return {
    ...defaultConfig,
    // 自定义 sitemap 生成器
    customPages: async () => {
      const pages = [];
      
      // 添加静态页面
      const staticPages = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/en/', changefreq: 'daily', priority: 1.0 },
        { url: '/zh-cn/', changefreq: 'daily', priority: 1.0 },
        { url: '/zh-tw/', changefreq: 'daily', priority: 1.0 },
        { url: '/en/tutorials/', changefreq: 'weekly', priority: 0.8 },
        { url: '/zh-cn/tutorials/', changefreq: 'weekly', priority: 0.8 },
        { url: '/zh-tw/tutorials/', changefreq: 'weekly', priority: 0.8 },
        { url: '/en/about/', changefreq: 'monthly', priority: 0.5 },
        { url: '/zh-cn/about/', changefreq: 'monthly', priority: 0.5 },
        { url: '/zh-tw/about/', changefreq: 'monthly', priority: 0.5 },
        { url: '/en/privacy/', changefreq: 'yearly', priority: 0.3 },
        { url: '/zh-cn/privacy/', changefreq: 'yearly', priority: 0.3 },
        { url: '/zh-tw/privacy/', changefreq: 'yearly', priority: 0.3 },
        { url: '/en/terms/', changefreq: 'yearly', priority: 0.3 },
        { url: '/zh-cn/terms/', changefreq: 'yearly', priority: 0.3 },
        { url: '/zh-tw/terms/', changefreq: 'yearly', priority: 0.3 },
      ];
      
      pages.push(...staticPages.map(page => ({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString().split('T')[0],
      })));
      
      return pages;
    },
    
    // 过滤函数，排除不需要的页面
    filter: (page) => {
      // 排除 admin、api 等页面
      const excludePatterns = [
        '/admin/',
        '/api/',
        '/private/',
        '/test/',
        '/dev/',
        '/staging/',
      ];
      
      return !excludePatterns.some(pattern => page.includes(pattern));
    },
    
    // 每个 URL 的额外属性
    serialize: (item) => {
      const baseItem = typeof item === 'string' 
        ? { url: item }
        : item;
      
      return {
        ...baseItem,
        // 确保 URL 格式正确
        url: baseItem.url.endsWith('/') ? baseItem.url : `${baseItem.url}/`,
        // 默认值
        changefreq: baseItem.changefreq || 'weekly',
        priority: baseItem.priority || 0.7,
        lastmod: baseItem.lastmod || new Date().toISOString().split('T')[0],
      };
    },
  };
}

/**
 * 生成新闻 sitemap (用于新闻网站)
 * @param {Array} articles - 文章列表
 * @returns {Array} 新闻 sitemap 条目
 */
export function generateNewsSitemap(articles = []) {
  return articles.map(article => ({
    url: article.url,
    news: {
      publication: {
        name: 'LimaxAI Blog',
        language: article.lang || 'en',
      },
      publication_date: article.pubDate,
      title: article.title,
      keywords: article.tags?.join(', ') || '',
    },
    changefreq: 'daily',
    priority: 0.9,
    lastmod: article.lastmod || article.pubDate,
  }));
}

/**
 * 生成视频 sitemap (如果有视频内容)
 * @param {Array} videos - 视频列表
 * @returns {Array} 视频 sitemap 条目
 */
export function generateVideoSitemap(videos = []) {
  return videos.map(video => ({
    url: video.url,
    video: {
      thumbnail_loc: video.thumbnail,
      title: video.title,
      description: video.description,
      content_loc: video.videoUrl,
      duration: video.duration,
      publication_date: video.pubDate,
      family_friendly: 'yes',
      requires_subscription: 'no',
      live: 'no',
    },
    changefreq: 'monthly',
    priority: 0.8,
  }));
}

/**
 * 生成图片 sitemap (用于图片 SEO)
 * @param {Array} images - 图片列表
 * @returns {Array} 图片 sitemap 条目
 */
export function generateImageSitemap(images = []) {
  return images.map(image => ({
    url: image.pageUrl,
    image: {
      loc: image.url,
      caption: image.caption,
      title: image.title,
      geo_location: image.geoLocation,
      license: image.license,
    },
  }));
}

/**
 * 验证 sitemap URL
 * @param {string} url - 要验证的 URL
 * @returns {boolean} 是否有效
 */
export function validateSitemapUrl(url) {
  if (!url) return false;
  
  // 基本验证
  const urlObj = new URL(url, 'https://blog.limaxai.com');
  
  // 检查协议
  if (urlObj.protocol !== 'https:') return false;
  
  // 检查域名
  if (urlObj.hostname !== 'blog.limaxai.com') return false;
  
  // 检查路径
  if (urlObj.pathname.includes('//')) return false; // 避免双斜杠
  
  // 检查长度
  if (url.length > 2048) return false;
  
  return true;
}

/**
 * 计算页面优先级
 * @param {string} url - 页面 URL
 * @param {number} depth - 页面深度
 * @param {number} traffic - 预估流量
 * @returns {number} 优先级 (0.0 - 1.0)
 */
export function calculatePagePriority(url, depth = 0, traffic = 0) {
  let priority = 0.5;
  
  // 基于深度调整
  if (depth === 0) priority = 1.0; // 首页
  else if (depth === 1) priority = 0.8; // 一级页面
  else if (depth === 2) priority = 0.7; // 二级页面
  else if (depth === 3) priority = 0.6; // 三级页面
  else priority = 0.5; // 更深层页面
  
  // 基于流量调整
  if (traffic > 1000) priority = Math.min(1.0, priority + 0.2);
  else if (traffic > 100) priority = Math.min(1.0, priority + 0.1);
  
  // 基于页面类型调整
  if (url.includes('/blog/') || url.includes('/tutorials/')) {
    priority = Math.min(1.0, priority + 0.1); // 内容页面更重要
  }
  
  return Math.round(priority * 10) / 10; // 保留一位小数
}

/**
 * 计算更新频率
 * @param {string} url - 页面 URL
 * @param {Date} lastUpdate - 最后更新日期
 * @returns {string} 更新频率
 */
export function calculateChangeFrequency(url, lastUpdate) {
  const now = new Date();
  const daysSinceUpdate = Math.floor((now - new Date(lastUpdate)) / (1000 * 60 * 60 * 24));
  
  if (url === '/' || url.includes('/en/') || url.includes('/zh-cn/') || url.includes('/zh-tw/')) {
    return 'daily'; // 首页和主要语言首页
  }
  
  if (url.includes('/blog/')) {
    if (daysSinceUpdate < 7) return 'daily'; // 一周内的新文章
    else if (daysSinceUpdate < 30) return 'weekly'; // 一月内的文章
    else return 'monthly'; // 旧文章
  }
  
  if (url.includes('/tutorials/')) {
    return 'weekly'; // 教程页面
  }
  
  if (url.includes('/about/') || url.includes('/privacy/') || url.includes('/terms/')) {
    return 'yearly'; // 静态页面
  }
  
  return 'monthly'; // 默认
}