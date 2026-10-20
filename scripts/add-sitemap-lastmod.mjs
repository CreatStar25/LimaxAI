#!/usr/bin/env node
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const contentRoot = join(root, 'src', 'content', 'blog');
const baseUrl = 'https://blog.limaxai.com';
const dateField = (source, name) => source.match(new RegExp(`^${name}:\\s*["']?([^"'\\s]+)["']?\\s*$`, 'm'))?.[1];
const validDate = /^\d{4}-\d{2}-\d{2}$/;
const lastmodByUrl = new Map();
const latestByLocale = new Map();

for (const entry of readdirSync(contentRoot, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const locale = entry.name;
  const localeDir = join(contentRoot, locale);
  for (const file of readdirSync(localeDir)) {
    if (extname(file) !== '.md') continue;
    const source = readFileSync(join(localeDir, file), 'utf8');
    const published = dateField(source, 'pubDate');
    const updated = dateField(source, 'updatedDate');
    const lastmod = updated || published;
    assert.match(lastmod || '', validDate, `${locale}/${file}: missing or invalid content date`);
    assert.equal(new Date(lastmod).toISOString().slice(0, 10), lastmod, `${locale}/${file}: invalid calendar date`);
    assert.ok(!updated || updated >= published, `${locale}/${file}: update precedes publication`);
    const slug = parse(file).name;
    lastmodByUrl.set(`${baseUrl}/${locale}/${slug}/`, lastmod);
    if (!latestByLocale.has(locale) || lastmod > latestByLocale.get(locale)) {
      latestByLocale.set(locale, lastmod);
    }
  }
}

for (const [locale, lastmod] of latestByLocale) {
  lastmodByUrl.set(`${baseUrl}/${locale}/blog/`, lastmod);
}

const sitemapIndexPath = join(dist, 'sitemap-index.xml');
assert.ok(existsSync(sitemapIndexPath), 'Missing dist/sitemap-index.xml');
const sitemapIndex = readFileSync(sitemapIndexPath, 'utf8');
const sitemapFiles = [...sitemapIndex.matchAll(/<loc>https:\/\/blog\.limaxai\.com\/([^<]+)<\/loc>/g)]
  .map((match) => match[1]);
let updatedEntries = 0;

for (const sitemapFile of sitemapFiles) {
  const sitemapPath = join(dist, sitemapFile);
  const xml = readFileSync(sitemapPath, 'utf8');
  const nextXml = xml.replace(/<url>([\s\S]*?)<\/url>/g, (block) => {
    const loc = block.match(/<loc>([^<]+)<\/loc>/)?.[1];
    const lastmod = lastmodByUrl.get(loc);
    const withoutLastmod = block.replace(/\s*<lastmod>[^<]*<\/lastmod>/g, '');
    if (!lastmod) return withoutLastmod;
    updatedEntries += 1;
    return withoutLastmod.replace(/(<loc>[^<]+<\/loc>)/, `$1<lastmod>${lastmod}</lastmod>`);
  });
  writeFileSync(sitemapPath, nextXml, 'utf8');
}

assert.equal(updatedEntries, lastmodByUrl.size, 'Some dated content URLs are missing from the sitemap');
console.log(`[add-sitemap-lastmod] Added accurate lastmod dates to ${updatedEntries} URLs.`);
