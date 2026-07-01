/**
 * Cloudflare Pages Function：根路径服务端 301 跳转，避免静态 index.html 闪烁。
 * 逻辑与 src/middleware.ts 保持一致。
 */

const LOCALE_ALIASES: Record<string, string> = {
  'zh-cn': 'zh-cn',
  zh: 'zh-cn',
  'zh-tw': 'zh-tw',
  'zh-hk': 'zh-tw',
  es: 'es',
  ar: 'ar',
  pt: 'pt',
  id: 'id',
  ms: 'ms',
  fr: 'fr',
  ru: 'ru',
  hi: 'hi',
  ja: 'ja',
  de: 'de',
  ko: 'ko',
  tr: 'tr',
  vi: 'vi',
  th: 'th',
  it: 'it',
  fa: 'fa',
  nl: 'nl',
  pl: 'pl',
  sv: 'sv',
  uk: 'uk',
  ro: 'ro',
};

const DEFAULT_LOCALE = 'en';

function resolveLocaleFromLanguageTag(tag: string): string | null {
  const normalized = tag.trim().toLowerCase();
  if (LOCALE_ALIASES[normalized]) return LOCALE_ALIASES[normalized];

  const prefix = normalized.split('-')[0];
  if (LOCALE_ALIASES[prefix]) return LOCALE_ALIASES[prefix];

  return null;
}

function resolveLocaleFromAcceptLanguage(
  acceptLanguage: string | null,
): string {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const preferences = acceptLanguage
    .split(',')
    .map((part) => {
      const [lang, qPart] = part.trim().split(';');
      const q = qPart?.trim().startsWith('q=')
        ? Number.parseFloat(qPart.trim().slice(2))
        : 1;
      return { lang, q: Number.isFinite(q) ? q : 0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of preferences) {
    const resolved = resolveLocaleFromLanguageTag(lang);
    if (resolved) return resolved;
  }

  return DEFAULT_LOCALE;
}

export const onRequest: PagesFunction = async (context) => {
  const acceptLanguage = context.request.headers.get('Accept-Language');
  const targetLang = resolveLocaleFromAcceptLanguage(acceptLanguage);
  const destination = new URL(`/${targetLang}/blog/`, context.request.url);

  return Response.redirect(destination.toString(), 301);
};
