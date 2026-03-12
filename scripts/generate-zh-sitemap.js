#!/usr/bin/env node
/**
 * 从主 Sitemap 中筛选中文目录 URL，生成仅给百度/360 使用的独立中文 Sitemap。
 * 使用：在项目根目录执行 node scripts/generate-zh-sitemap.js
 * 依赖：先执行 astro build，生成 dist/sitemap-index.xml 及子 sitemap。
 *
 * 可替换配置（按需修改）：
 * - DIST_DIR: 构建输出目录，与 astro.config 的 outDir 一致
 * - ZH_PATH_SEGMENT: 中文 URL 路径段，默认 /zh-cn/（仅包含该路径的 URL）
 * - OUTPUT_FILE: 输出文件名，部署后访问 https://你的域名/sitemap-zh-cn.xml
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ========== 可替换配置 ==========
const DIST_DIR = join(ROOT, 'dist');
const ZH_PATH_SEGMENT = '/zh-cn/';  // 仅筛选包含该路径的 URL，可改为包含 zh-tw 等
const OUTPUT_FILE = 'sitemap-zh-cn.xml';
// ================================

const SITEMAP_INDEX = join(DIST_DIR, 'sitemap-index.xml');
const NS = 'http://www.sitemaps.org/schemas/sitemap/0.9';

function extractLocFromXml(xml) {
  const locs = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) locs.push(m[1].trim());
  return locs;
}

function main() {
  if (!existsSync(DIST_DIR)) {
    console.error('[generate-zh-sitemap] 错误：构建目录不存在，请先执行 astro build。');
    process.exit(1);
  }
  if (!existsSync(SITEMAP_INDEX)) {
    console.error('[generate-zh-sitemap] 错误：未找到 sitemap-index.xml，请先执行 astro build。');
    process.exit(1);
  }

  const indexXml = readFileSync(SITEMAP_INDEX, 'utf8');
  const indexLocs = extractLocFromXml(indexXml);
  const allUrls = new Set();

  for (const loc of indexLocs) {
    const fileName = loc.replace(/^https?:\/\/[^/]+\//, '').replace(/\/$/, '');
    const localPath = join(DIST_DIR, fileName);
    if (!existsSync(localPath)) continue;
    const xml = readFileSync(localPath, 'utf8');
    const urls = extractLocFromXml(xml);
    urls.forEach((u) => allUrls.add(u));
  }

  const zhUrls = [...allUrls].filter((url) => url.includes(ZH_PATH_SEGMENT));
  const urlset = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    `<urlset xmlns="${NS}">`,
    ...zhUrls.map((u) => `  <url><loc>${escapeXml(u)}</loc></url>`),
    '</urlset>',
  ].join('\n');

  const outPath = join(DIST_DIR, OUTPUT_FILE);
  writeFileSync(outPath, urlset, 'utf8');
  console.log(`[generate-zh-sitemap] 已生成 ${OUTPUT_FILE}，共 ${zhUrls.length} 条中文 URL。`);
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

main();
