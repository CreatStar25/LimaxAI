// src/middleware.ts
import { defineMiddleware } from "astro:middleware";

// 语言映射表：浏览器 Accept-Language -> 我们的 locales
const langMap: Record<string, string> = {
  'zh-CN': 'zh-cn', 'zh': 'zh-cn',
  'zh-TW': 'zh-tw', 'zh-HK': 'zh-tw',
  'es': 'es', 'ar': 'ar', 'pt': 'pt', 'id': 'id',
  'ms': 'ms', 'fr': 'fr', 'ru': 'ru', 'hi': 'hi',
  'ja': 'ja', 'de': 'de', 'ko': 'ko', 'tr': 'tr',
  'vi': 'vi', 'th': 'th', 'it': 'it', 'fa': 'fa',
  'nl': 'nl', 'pl': 'pl', 'sv': 'sv', 'uk': 'uk',
  'ro': 'ro'
};

export const onRequest = defineMiddleware(async (context, next) => {
  //const { url, request, redirect } = context;

  // 仅针对根路径 "/" 进行处理
  //if (url.pathname === "/") {
  //  const acceptLanguage = request.headers.get("Accept-Language");
  //  let targetLang = "en"; // 默认 fallback

  //  if (acceptLanguage) {
      // 获取首选语言 (例如 "zh-CN,zh;q=0.9")
    //  const preferredLang = acceptLanguage.split(',')[0].trim(); 
      
      // 简单匹配逻辑
    //  for (const [key, value] of Object.entries(langMap)) {
      //   if (preferredLang.toLowerCase().startsWith(key.toLowerCase())) {
        //    targetLang = value;
         //   break;
         //}
      //}
    //}
    //return redirect(`/${targetLang}/`);
  //}

  return next();
});