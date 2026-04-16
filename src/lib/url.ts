export function toTrailingPath(input: string): string {
  const raw = (input || '/').trim();
  const normalizedRaw = raw === '' ? '/' : raw;

  const queryIndex = normalizedRaw.indexOf('?');
  const hashIndex = normalizedRaw.indexOf('#');
  const suffixIndex =
    queryIndex === -1 ? hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);

  const pathnamePart = suffixIndex === -1 ? normalizedRaw : normalizedRaw.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? '' : normalizedRaw.slice(suffixIndex);

  let pathname = pathnamePart.replace(/\/{2,}/g, '/');
  if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  if (pathname !== '/' && !pathname.endsWith('/')) pathname = `${pathname}/`;

  return `${pathname}${suffix}`;
}

export function toAbsoluteTrailingUrl(siteUrl: string, input: string): string {
  const siteBase = siteUrl.replace(/\/+$/, '');
  const value = (input || '/').trim();

  if (/^https?:\/\//i.test(value)) {
    const url = new URL(value);
    const path = toTrailingPath(url.pathname);
    return `${url.origin}${path}`;
  }

  const path = toTrailingPath(value);
  return `${siteBase}${path}`;
}
