# 多语言站点搜索引擎差异化收录优化

## 1. 方案摘要

### 核心逻辑（引擎分工双信号策略）

- **国际引擎（Google / Bing）**：沿用原有逻辑，通过 **hreflang + x-default** 识别多语言；**x-default 固定指向英文**（如 `/en/`、`/en/about/`），未匹配用户语言时展示英文版。仅提交**主 Sitemap（sitemap-index.xml）**，保持全站多语言收录。
- **国内引擎（百度 / 360）**：不依赖 hreflang，通过 **content-language 元标签** 识别页面语言；**单独生成并提交仅含中文 URL 的 Sitemap（sitemap-zh-cn.xml）**，引导优先抓取、收录中文页。

两套信号互不干扰：国际引擎继续用 hreflang，国内引擎用 content-language + 中文 Sitemap。

### 改造点

| 改造项 | 说明 |
|--------|------|
| SEO 头部（BaseLayout） | 每页输出 `content-language` 元标签（中文页 `zh-CN`，英文页 `en-US` 等）；保留并输出全语种 hreflang + x-default 指向英文。 |
| 中文 Sitemap | 构建后自动从主 Sitemap 筛选 `/zh-cn/` URL，生成 `sitemap-zh-cn.xml` 至 dist，部署后可通过根域名访问。 |
| 构建命令 | `npm run build` 改为先执行 `astro build`，再执行 `node scripts/generate-zh-sitemap.js`。 |

### 最终效果

- 百度/360：优先发现并收录中文页面（content-language + 独立中文 Sitemap）。
- Google/Bing：继续按 hreflang 与 x-default 展示对应语言，默认展示英文，收录逻辑不变。

---

## 2. 搜索引擎差异化提交规则（可直接复制）

| 搜索引擎 | 建议提交地址 | 提交目的 |
|----------|--------------|----------|
| **Google** | `https://你的域名/sitemap-index.xml` | 提交主 Sitemap，保留全站多语言收录，依靠 hreflang + x-default 优先展示英文。 |
| **Bing** | `https://你的域名/sitemap-index.xml` | 同上。 |
| **百度** | `https://你的域名/sitemap-zh-cn.xml` | **优先/单独提交**中文 Sitemap，便于优先发现和收录中文页面；可辅助提交主 Sitemap。 |
| **360** | `https://你的域名/sitemap-zh-cn.xml` | 同上。 |

**说明**：表中「你的域名」需替换为实际站点域名（如 `blog.limaxai.com`）。

---

## 3. 部署后验证步骤

### 3.1 中文 Sitemap 可访问性

1. 部署完成后在浏览器访问：`https://你的域名/sitemap-zh-cn.xml`
2. 应返回 XML，且仅包含中文路径（如含 `/zh-cn/` 的 URL），无英文或其他语种 URL。
3. 若 404，检查部署是否包含 `dist` 根目录下的 `sitemap-zh-cn.xml`，且服务器未对该路径做屏蔽。

### 3.2 多语言标签渲染正确性

1. 打开任意**中文页**（如 `https://你的域名/zh-cn/` 或 `https://你的域名/zh-cn/about/`），查看源码（右键 → 查看网页源代码）。
2. 在 `<head>` 内应存在：`<meta http-equiv="content-language" content="zh-CN">`
3. 打开任意**英文页**（如 `https://你的域名/en/`），应存在：`<meta http-equiv="content-language" content="en-US">`
4. 同一中文或英文页的 `<head>` 内应存在多组 `<link rel="alternate" hreflang="..." href="...">` 及一条 `hreflang="x-default"`，且 x-default 的 `href` 指向对应路径的**英文版** URL。

---

## 4. 搜索引擎提交实操步骤

### 4.1 百度站长平台

1. 打开 [百度搜索资源平台](https://ziyuan.baidu.com/)，登录。
2. 进入「用户中心」→「站点管理」→ 选择站点（无则先添加并验证）。
3. 左侧「数据引入」→「链接提交」→「sitemap」。
4. 提交地址填写：`https://你的域名/sitemap-zh-cn.xml`，提交。
5. **注意**：优先或单独提交中文 Sitemap 即可；如需可再提交主 Sitemap，但以中文 Sitemap 为主。

### 4.2 360 站长平台

1. 打开 [360 站长平台](https://zhanzhang.so.com/)，登录。
2. 添加/选择站点并完成验证。
3. 在「链接提交」或「Sitemap 提交」中，提交：`https://你的域名/sitemap-zh-cn.xml`。
4. **注意**：同样以中文 Sitemap 为主。

### 4.3 Google Search Console

1. 打开 [Google Search Console](https://search.google.com/search-console)，选择对应资源（站点）。
2. 左侧「Sitemaps」。
3. 在「添加新的 sitemap」中填写：`sitemap-index.xml`（或完整 URL：`https://你的域名/sitemap-index.xml`），提交。
4. **注意**：仅提交主 Sitemap，依靠 hreflang 与 x-default 处理多语言，不要用中文 Sitemap 替代主 Sitemap。

### 4.4 Bing Webmaster Tools

1. 打开 [Bing Webmaster Tools](https://www.bing.com/webmasters)，登录并选择站点。
2. 进入「Sitemaps」。
3. 提交：`https://你的域名/sitemap-index.xml`。
4. **注意**：与 Google 一致，只提交主 Sitemap。

---

## 5. 维护注意事项

- **新增中文页面**：只要新页面 URL 仍落在 `/zh-cn/` 下，下次执行 `npm run build` 会自动更新主 Sitemap，脚本会从主 Sitemap 中筛出中文 URL 并重新生成 `sitemap-zh-cn.xml`，**无需手动改 Sitemap**。
- **修改中文路径**：若将来中文目录不是 `/zh-cn/`（如改为 `/zh/`），需在 `scripts/generate-zh-sitemap.js` 中修改 `ZH_PATH_SEGMENT` 为对应路径段，并重新构建、部署。
- **域名变更**：若站点域名变更，需在 `astro.config.mjs` 中修改 `site`，并视情况在脚本或文档中替换「你的域名」说明。
- **content-language 与 hreflang**：新增语种时，若使用同一 BaseLayout，需在 `contentLanguageMap` 中补充对应 `content-language` 值；hreflang 已通过 `LOCALES` 自动输出，一般无需改。

---

## 6. 可替换配置速查

| 位置 | 配置项 | 说明 |
|------|--------|------|
| `astro.config.mjs` | `site` | 站点根域名，用于 hreflang/canonical 等。 |
| `src/layouts/BaseLayout.astro` | `contentLanguageMap` | 各语种与 `content-language` 的对应关系。 |
| `scripts/generate-zh-sitemap.js` | `DIST_DIR` | 构建输出目录，默认 `dist`。 |
| `scripts/generate-zh-sitemap.js` | `ZH_PATH_SEGMENT` | 中文 URL 路径段，默认 `/zh-cn/`。 |
| `scripts/generate-zh-sitemap.js` | `OUTPUT_FILE` | 中文 Sitemap 文件名，默认 `sitemap-zh-cn.xml`。 |
