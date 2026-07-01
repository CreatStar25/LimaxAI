/** 浏览器 Accept-Language / navigator.language → 站点 locale */
export const LOCALE_ALIASES: Record<string, string> = {
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

export const DEFAULT_LOCALE = 'en';

export function resolveLocaleFromLanguageTag(tag: string): string | null {
  const normalized = tag.trim().toLowerCase();
  if (LOCALE_ALIASES[normalized]) return LOCALE_ALIASES[normalized];

  const prefix = normalized.split('-')[0];
  if (LOCALE_ALIASES[prefix]) return LOCALE_ALIASES[prefix];

  return null;
}

/** 解析 Accept-Language 请求头，按 q 权重优先匹配 */
export function resolveLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined,
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
