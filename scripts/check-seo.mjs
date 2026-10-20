#!/usr/bin/env node
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const locales = [
  'en', 'zh-cn', 'zh-tw', 'es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru',
  'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl',
  'sv', 'uk', 'ro',
];
const read = (...parts) => readFileSync(join(dist, ...parts), 'utf8');
const htmlCache = new Map();
const readUrl = (urlString) => {
  if (!htmlCache.has(urlString)) {
    const segments = new URL(urlString).pathname.split('/').filter(Boolean);
    htmlCache.set(urlString, read(...segments, 'index.html'));
  }
  return htmlCache.get(urlString);
};
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}=["']([^"']*)["']`, 'i'))?.[1];
const tags = (html, tag) => [...html.matchAll(new RegExp(`<${tag}\\b[^>]*>`, 'gi'))].map(match => match[0]);
const htmlFileForPath = (pathname) => join(dist, ...pathname.split('/').filter(Boolean), 'index.html');
const textContent = (value) => value.replace(/<[^>]+>/g, '').trim();
const isLanguageRootAlias = (pathname) => {
  const segments = pathname.split('/').filter(Boolean);
  return segments.length === 1 && locales.includes(segments[0]);
};

const sitemapIndex = read('sitemap-index.xml');
const sitemapFiles = [...sitemapIndex.matchAll(/<loc>https:\/\/blog\.limaxai\.com\/([^<]+)<\/loc>/g)]
  .map(match => match[1]);
assert.ok(sitemapFiles.length > 0, 'No child sitemap found');
const sitemap = sitemapFiles.map(file => read(file)).join('\n');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
const lastmodByUrl = new Map([...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((match) => {
  const block = match[1];
  return [
    block.match(/<loc>([^<]+)<\/loc>/)?.[1],
    block.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1],
  ];
}).filter(([url, lastmod]) => url && lastmod));
assert.equal(urls.length, new Set(urls).size, 'Duplicate sitemap URLs');
let articleCount = 0;
const titlesByLocale = new Map();
const descriptionsByLocale = new Map();

for (const urlString of urls) {
  const url = new URL(urlString);
  assert.equal(url.origin, 'https://blog.limaxai.com');
  assert.ok(url.pathname.endsWith('/'), `Missing trailing slash: ${urlString}`);
  const segments = url.pathname.split('/').filter(Boolean);
  assert.ok(!(segments.length === 1 && locales.includes(segments[0])), `Non-canonical language root in sitemap: ${urlString}`);
  assert.ok(url.pathname !== '/tutorials/', 'Client redirect page in sitemap');
  assert.ok(url.pathname !== '/app/image/privacy/', 'Cross-domain canonical in sitemap');
  const html = readUrl(urlString);
  const titles = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
  assert.equal(titles.length, 1, `${url.pathname}: title count`);
  const pageTitle = textContent(titles[0][1]);
  assert.ok(pageTitle, `${url.pathname}: empty title`);
  const descriptions = tags(html, 'meta').filter(tag => attr(tag, 'name')?.toLowerCase() === 'description');
  assert.equal(descriptions.length, 1, `${url.pathname}: meta description count`);
  const pageDescription = attr(descriptions[0], 'content')?.trim();
  assert.ok(pageDescription, `${url.pathname}: empty meta description`);
  const robotsTags = tags(html, 'meta').filter(tag => attr(tag, 'name')?.toLowerCase() === 'robots');
  assert.equal(robotsTags.length, 1, `${url.pathname}: robots meta count`);
  const robotsDirectives = (attr(robotsTags[0], 'content') || '').split(',').map(value => value.trim());
  assert.ok(robotsDirectives.includes('max-image-preview:large'), `${url.pathname}: large image previews not enabled`);
  assert.ok(robotsDirectives.includes('max-snippet:-1'), `${url.pathname}: unrestricted text preview not enabled`);
  assert.ok(robotsDirectives.includes('max-video-preview:-1'), `${url.pathname}: unrestricted video preview not enabled`);
  const locale = url.pathname.split('/').filter(Boolean)[0] || 'root';
  const titleKey = `${locale}\u0000${pageTitle}`;
  const descriptionKey = `${locale}\u0000${pageDescription}`;
  titlesByLocale.set(titleKey, [...(titlesByLocale.get(titleKey) || []), urlString]);
  descriptionsByLocale.set(descriptionKey, [...(descriptionsByLocale.get(descriptionKey) || []), urlString]);
  const headings = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)];
  assert.equal(headings.length, 1, `${url.pathname}: H1 count`);
  assert.ok(textContent(headings[0][1]), `${url.pathname}: empty H1`);
  const canonicalTags = tags(html, 'link').filter(tag => attr(tag, 'rel') === 'canonical');
  assert.equal(canonicalTags.length, 1, `${url.pathname}: canonical count`);
  assert.equal(attr(canonicalTags[0], 'href'), urlString, `${url.pathname}: non-self canonical`);
  const structuredData = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(structuredData.length > 0, `${url.pathname}: missing JSON-LD`);
  const structuredObjects = [];
  for (const block of structuredData) {
    assert.doesNotThrow(() => JSON.parse(block[1]), `${url.pathname}: invalid JSON-LD`);
    structuredObjects.push(JSON.parse(block[1]));
  }
  if (structuredObjects.some(object => object['@type'] === 'BlogPosting')) {
    articleCount += 1;
    const articleSchema = structuredObjects.find(object => object['@type'] === 'BlogPosting');
    const ogType = tags(html, 'meta').find(tag => attr(tag, 'property') === 'og:type');
    assert.equal(attr(ogType || '', 'content'), 'article', `${url.pathname}: wrong Open Graph type`);
    assert.ok(tags(html, 'meta').some(tag => attr(tag, 'property') === 'article:published_time'), `${url.pathname}: missing article publish time`);
    assert.match(articleSchema.image, /^https:\/\//, `${url.pathname}: article image is not absolute`);
    assert.equal(articleSchema.thumbnailUrl, articleSchema.image, `${url.pathname}: article thumbnail disagrees with image`);
    assert.equal(lastmodByUrl.get(urlString), articleSchema.dateModified.slice(0, 10), `${url.pathname}: sitemap lastmod disagrees with article dateModified`);
    assert.equal(articleSchema.author?.['@type'], 'Organization', `${url.pathname}: author entity type`);
    assert.equal(articleSchema.publisher?.logo?.width, 1000, `${url.pathname}: publisher logo width`);
    assert.equal(articleSchema.publisher?.logo?.height, 1000, `${url.pathname}: publisher logo height`);
    assert.equal(articleSchema.isPartOf?.['@id'], 'https://blog.limaxai.com/#website', `${url.pathname}: article is disconnected from website entity`);
    assert.ok(articleSchema.keywords, `${url.pathname}: missing article keywords`);
    if (articleSchema.author?.name === 'LimaxAI') {
      assert.equal(articleSchema.author['@id'], 'https://www.limaxai.com/#organization', `${url.pathname}: disconnected LimaxAI author entity`);
    }
  }
  const mainSiteLinks = tags(html, 'a')
    .filter(tag => (attr(tag, 'href') || '').startsWith('https://www.limaxai.com'));
  for (const tag of mainSiteLinks) {
    const href = attr(tag, 'href');
    const target = new URL(href.replaceAll('&amp;', '&'));
    const targetLocale = target.pathname.split('/').filter(Boolean)[0];
    assert.ok(locales.includes(targetLocale), `${url.pathname}: main-site link lacks locale ${href}`);
    assert.ok(target.pathname.endsWith('/'), `${url.pathname}: main-site link lacks trailing slash ${href}`);
    const rel = (attr(tag, 'rel') || '').split(/\s+/);
    assert.ok(!rel.includes('nofollow'), `${url.pathname}: main-site link is nofollow ${href}`);
  }
  const internalLinks = tags(html, 'a')
    .map(tag => attr(tag, 'href'))
    .filter(Boolean)
    .map(href => new URL(href.replaceAll('&amp;', '&'), urlString))
    .filter(target => target.origin === 'https://blog.limaxai.com');
  for (const target of internalLinks) {
    assert.ok(existsSync(htmlFileForPath(target.pathname)), `${url.pathname}: broken internal link ${target.href}`);
    assert.ok(!isLanguageRootAlias(target.pathname), `${url.pathname}: internal link uses non-canonical language root ${target.href}`);
  }
  for (const image of tags(html, 'img')) {
    assert.ok(attr(image, 'alt')?.trim(), `${url.pathname}: image lacks descriptive alt text`);
    const width = Number(attr(image, 'width'));
    const height = Number(attr(image, 'height'));
    assert.ok(width > 0 && height > 0, `${url.pathname}: image lacks intrinsic dimensions`);
  }
  const alternates = tags(html, 'link')
    .filter(tag => attr(tag, 'rel') === 'alternate')
    .map(tag => ({ lang: attr(tag, 'hreflang'), href: attr(tag, 'href') }));
  assert.equal(alternates.length, new Set(alternates.map(item => item.lang)).size, `${url.pathname}: duplicate hreflang`);
  assert.ok(alternates.some(item => item.href === urlString), `${url.pathname}: missing self hreflang`);
  for (const alternate of alternates) {
    assert.ok(urls.includes(alternate.href), `${url.pathname}: missing hreflang target ${alternate.href}`);
    if (alternate.lang !== 'x-default') {
      const targetAlternates = tags(readUrl(alternate.href), 'link')
        .filter(tag => attr(tag, 'rel') === 'alternate');
      assert.ok(targetAlternates.some(tag => attr(tag, 'href') === urlString), `${url.pathname}: non-reciprocal hreflang ${alternate.href}`);
    }
  }
}

for (const [key, matchingUrls] of titlesByLocale) {
  assert.equal(matchingUrls.length, 1, `Duplicate same-locale title ${JSON.stringify(key.split('\u0000')[1])}: ${matchingUrls.join(', ')}`);
}
for (const [key, matchingUrls] of descriptionsByLocale) {
  assert.equal(matchingUrls.length, 1, `Duplicate same-locale description ${JSON.stringify(key.split('\u0000')[1])}: ${matchingUrls.join(', ')}`);
}

for (const locale of locales) {
  const aliasHtml = read(locale, 'index.html');
  const canonicalHtml = read(locale, 'blog', 'index.html');
  const expected = `https://blog.limaxai.com/${locale}/blog/`;
  for (const [label, html] of [['alias', aliasHtml], ['canonical', canonicalHtml]]) {
    const canonicalTags = tags(html, 'link').filter(tag => attr(tag, 'rel') === 'canonical');
    assert.equal(canonicalTags.length, 1, `${locale} ${label}: canonical count`);
    assert.equal(attr(canonicalTags[0], 'href'), expected, `${locale} ${label}: canonical`);
    const alternates = tags(html, 'link').filter(tag => attr(tag, 'rel') === 'alternate');
    assert.ok(alternates.every(tag => (attr(tag, 'href') || '').includes('/blog/')), `${locale} ${label}: hreflang disagrees with canonical`);
    const internalLinks = tags(html, 'a')
      .map(tag => attr(tag, 'href'))
      .filter(Boolean)
      .map(href => new URL(href.replaceAll('&amp;', '&'), expected))
      .filter(target => target.origin === 'https://blog.limaxai.com');
    assert.ok(internalLinks.every(target => !isLanguageRootAlias(target.pathname)), `${locale} ${label}: link uses language-root alias`);
    assert.ok(!html.includes('your-google-verification-code'), `${locale} ${label}: placeholder Google verification`);
    assert.ok(!html.includes('your-bing-verification-code'), `${locale} ${label}: placeholder Bing verification`);
    assert.ok(!html.includes('your-yandex-verification-code'), `${locale} ${label}: placeholder Yandex verification`);
    assert.ok(!html.includes('text/partytown'), `${locale} ${label}: GA4 still uses Partytown`);
    assert.ok(html.includes('googletagmanager.com/gtag/js?id=G-58B3K5R6KY'), `${locale} ${label}: missing async GA4 loader`);
  }
}

const tutorialRedirect = read('tutorials', 'index.html');
assert.match(tutorialRedirect, /name="robots" content="noindex, follow"/, 'Tutorial redirect must be noindex');

const excludedSupportPaths = ['privacy', 'terms', 'auto-debit-agreement'];
for (const locale of locales) {
  for (const supportPath of excludedSupportPaths) {
    const supportUrl = `https://blog.limaxai.com/${locale}/${supportPath}/`;
    assert.ok(!urls.includes(supportUrl), `${supportUrl}: noindex support page appears in sitemap`);
    const supportHtml = read(locale, supportPath, 'index.html');
    assert.match(supportHtml, /name="robots" content="noindex, follow"/, `${supportUrl}: missing noindex`);
  }
}

const article = read('en', 'nanobanana2-blog-cover-clickthrough', 'index.html');
assert.ok(article.includes('https://www.limaxai.com/en/'), 'Article breadcrumb/main-site link lacks locale');
assert.ok(article.includes('https://www.limaxai.com/en/generate/image-tools/nano/?model=nano-banana-2'), 'Article CTA is not contextual');
assert.ok(article.includes('https://www.limaxai.com/#organization'), 'Article schema is not connected to the main organization');
assert.equal(lastmodByUrl.size, articleCount + locales.length, 'Expected lastmod only on articles and blog indexes');

console.log(JSON.stringify({
  sitemapUrls: urls.length,
  canonicalBlogIndexes: locales.length,
  ga4Loader: 'gtag.js async',
  contextualArticleCta: true,
  localizedMainSiteLinks: true,
  internalLinksResolve: true,
  onPageEssentials: 'title, description, H1',
  imageEssentials: 'alt, width, height',
  articleSemantics: 'Open Graph article, BlogPosting, author entity',
  searchPreviews: 'large images and unrestricted snippets',
  structuredDataEntities: 'article, publisher, website',
  sitemapPolicy: 'indexable canonical pages only',
  accurateSitemapLastmod: lastmodByUrl.size,
  canonicalInternalLinks: true,
  uniqueMetadataPerLocale: true,
}, null, 2));
