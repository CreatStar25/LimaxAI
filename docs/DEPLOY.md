# 部署与「新文章不展示」排查

## 新文章上线后线上仍不显示时

1. **确认构建包含新内容**
   - 打开线上博客列表页（如 `https://blog.limaxai.com/en/`），**右键 → 查看网页源代码**，搜索 `data-blog-build-time` 和 `data-blog-posts-count`。
   - `data-blog-posts-count` 应为当前该语言下的文章数（例如英文 3 篇则应为 3）。若数字偏小，说明**构建时没有把新文章打进 collection**，见下一条。
   - `data-blog-build-time` 为本次静态页生成时间。若与最近一次部署时间不一致，多半是 CDN/浏览器缓存了旧 HTML。

2. **清理构建缓存后重新部署**
   - **Vercel**：Project → Settings → General → Build Cache → **Clear**，然后重新 Deploy。
   - **Netlify**：Site settings → Build & deploy → Build image selection → 勾选 **Clear cache and deploy** 再部署。
   - 其他平台：在 CI/部署配置里关闭或清理对 `node_modules`、`.astro`、`dist` 的缓存，再触发一次全新构建。
   - 原因：若构建缓存了 `.astro` 的 content 结果，新加的 `src/content/blog/**/*.md` 可能不会被重新收集，列表页就会少文章。

3. **确认仓库里已包含新文章与 schema 修改**
   - 部署用的分支/提交里要有：
     - 新文章的 markdown（如 `src/content/blog/en/midjourney-advanced-prompts-limax-ai.md` 等）；
     - `src/content/config.ts` 中支持 `heroImage` 的 schema；
     - `src/components/BlogCard.astro` 里对 `image ?? heroImage` 的展示逻辑。
   - 若只部署了部分提交，可能出现「本地/另一分支有最新文章，线上没有」的情况。

4. **缓存与 CDN**
   - 本项目已为博客相关 HTML 配置短缓存（`vercel.json` / `public/_headers`），部署后应尽快拿到新页面。
   - 若仍看到旧列表：浏览器无痕模式或换设备访问一次；若使用 CDN，在控制台对博客路径做一次「 purge / 刷新缓存」再试。

## 构建与运行

- 本地：`npm run dev` / `npm run build` && `npm run preview`
- 线上：部署时执行 `npm run build`，发布目录为 `dist/`。
