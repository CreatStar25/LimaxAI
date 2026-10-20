export const supportedLocales = [
  'en', 'zh-cn', 'zh-tw', 'es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru',
  'hi', 'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl',
  'sv', 'uk', 'ro',
];

export function localizeMainSiteUrl(value, locale) {
  if (typeof value !== 'string' || !supportedLocales.includes(locale)) return value;

  let url;
  try {
    url = new URL(value);
  } catch {
    return value;
  }

  if (url.protocol !== 'https:' || url.hostname !== 'www.limaxai.com') return value;

  const segments = url.pathname.split('/').filter(Boolean);
  if (!supportedLocales.includes(segments[0])) {
    segments.unshift(locale);
  }
  url.pathname = `/${segments.join('/')}/`;
  return url.toString();
}

export function isMainSiteUrl(value) {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && url.hostname === 'www.limaxai.com';
  } catch {
    return false;
  }
}

function visitNodes(node, callback) {
  callback(node);
  if (Array.isArray(node.children)) {
    for (const child of node.children) visitNodes(child, callback);
  }
}

export function remarkLocalizeMainSiteLinks() {
  return (tree, file) => {
    const sourcePath = String(file.path || file.history?.[0] || '').replaceAll('\\', '/');
    const match = sourcePath.match(/\/src\/content\/blog\/([^/]+)\//);
    const locale = match?.[1];
    if (!supportedLocales.includes(locale)) return;

    visitNodes(tree, (node) => {
      if ((node.type === 'link' || node.type === 'definition') && typeof node.url === 'string') {
        node.url = localizeMainSiteUrl(node.url, locale);
      }
      if (node.type === 'html' && typeof node.value === 'string') {
        node.value = node.value.replace(
          /(href=["'])(https:\/\/www\.limaxai\.com[^"']*)(["'])/gi,
          (_, prefix, href, suffix) => `${prefix}${localizeMainSiteUrl(href, locale)}${suffix}`,
        );
      }
    });
  };
}
