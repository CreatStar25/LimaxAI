// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';
import { resolveLocaleFromAcceptLanguage } from './lib/detect-locale';

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request, redirect } = context;

  if (url.pathname === '/') {
    const acceptLanguage = request.headers.get('Accept-Language');
    const targetLang = resolveLocaleFromAcceptLanguage(acceptLanguage);
    return redirect(`/${targetLang}/blog/`, 301);
  }

  return next();
});
