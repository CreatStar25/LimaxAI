# 页脚多语种与链接说明

## 1. 多语种文本在 `ui.ts` 中的存储位置

- **文件路径**：`src/lib/ui.ts`
- **导出**：`getFooterCopy(locale: string): FooterCopy`
- **结构**：
  - **`brand`**：品牌区
    - `brand.title`：标题（如 "LimaxAI"）
    - `brand.intro`：简介文案
  - **`columns`**：四列标题
    - `columns.aiTools`、`columns.aiVideo`、`columns.aiImage`、`columns.company`
  - **`links`**：所有链接的显示文案（产品名与通用词）
    - 通用：`blog`、`about`、`privacy`、`terms`
    - 产品名：`limaxai`、`suno`、`deepseek4`、`notebooklm`、`openclaw`、`gemini30`、`seedance20`、`seedance15`、`veo31`、`veo3`、`sora`、`sora2`、`midjourney`、`nanoBanana2`、`nanoBananaPro`、`nanoBanana3`
  - **`copyright`**：版权行后缀（如 "All rights reserved."）

未在 `footerByLocale` 中单独配置的语种会回退到英文 `en`。

---

## 2. 语种切换时底部栏文本同步更新的核心逻辑

1. **URL 即语种**：站点使用 `/[lang]/` 路由（如 `/en/`、`/zh-cn/`），当前页的语种由 `lang` 决定。
2. **布局传入语种**：所有使用 `BaseLayout` 的页面都会传入 `currentLang={currentLang}`；`BaseLayout` 再把 `currentLang` 传给 `<Footer currentLang={currentLang} />`。
3. **Footer 按语种取文案**：在 `Footer.astro` 中执行 `const t = getFooterCopy(currentLang)`，得到的 `t` 即为当前语种的 `FooterCopy`。
4. **服务端渲染**：每次请求（或静态生成时）对应的是某个确定的 `lang`，因此 Footer 在构建/请求时已按该语种渲染，无需前端再切换文案。用户通过头部语言切换器跳转到 `/${lang}/` 后，整页（含页脚）会重新加载为对应语种，底部栏标题与链接文案即与该语种一致。

**结论**：语种由 URL 的 `[lang]` 决定 → `currentLang` 传入 Footer → `getFooterCopy(currentLang)` 得到该语种文案 → 底部栏标题与链接文案随语种同步更新，链接 URL 不变。

---

## 3. 页脚链接与目标 URL 对照表

| 列 | 链接文案（英文 key） | 目标 URL |
|----|----------------------|----------|
| **AI Tools** | LimaxAI | https://www.limaxai.com/ |
| | Suno | https://suno.hk/ |
| | deepseek 4 | https://deepseek4.hk/ |
| | Notebooklm | https://notebooklm.vip/ |
| | Openclaw | https://openclawd.hk/ |
| | Gemini 3.0 | https://gemini3.hk/ |
| **AI Video** | Seedance 2.0 | https://seedance22.com/ |
| | Seedance 1.5 | https://seedance2.hk/ |
| | Veo 3.1 | https://veo3.hk/ |
| | Veo 3 | https://veo3.hk/ |
| | Sora | https://www.limaxai.com/generate/video-tools/so |
| | Sora 2 | https://www.limaxai.com/generate/video-tools/so |
| **AI Image** | Midjourney | https://www.limaxai.com/generate/image-tools/mjpro |
| | Nano Banana 2 | https://nanobananapro.hk/ |
| | Nano Banana Pro | https://nanobanana-pro.vip/ |
| | Nano Banana 3 | https://nanobanana3.top/ |
| **Company** | Blog | `/{currentLang}/`（站点博客首页） |
| | About | `/{currentLang}/about/` |
| | Privacy | `/{currentLang}/privacy/` |
| | Terms | `/{currentLang}/terms/` |

About / Privacy / Terms 的页面实现位于 `src/pages/[lang]/about.astro`、`privacy.astro`、`terms.astro`，多语种正文在 `src/lib/pages.ts` 的 `getAboutContent`、`getPrivacyContent`、`getTermsContent` 中按 `locale` 返回。
