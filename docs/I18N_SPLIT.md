# 多语种文本拆分说明（ui.ts + content.ts）

## 1. 语种列表（24 种，与 astro.config 一致）

| 键 | 说明 |
|----|------|
| en | English |
| zh-cn | 简体中文 |
| zh-tw | 繁體中文 |
| es | Español |
| ar | العربية |
| pt | Português |
| id | Bahasa Indonesia |
| ms | Bahasa Melayu |
| fr | Français |
| ru | Русский |
| hi | हिन्दी |
| ja | 日本語 |
| de | Deutsch |
| ko | 한국어 |
| tr | Türkçe |
| vi | Tiếng Việt |
| th | ไทย |
| it | Italiano |
| fa | فارسی |
| nl | Nederlands |
| pl | Polski |
| sv | Svenska |
| uk | Українська |
| ro | Română |

---

## 2. 模块归属依据

| 模块 | 归属文件 | 依据 |
|------|----------|------|
| 导航栏（首页、博客、功能、定价、FAQ、联系我们、Logo 旁文案、语言切换） | **ui.ts** | 全站通用 UI，与具体页面无关 |
| 底部栏（品牌标题/简介、四列标题、链接文案、版权） | **ui.ts** | 全站通用 UI |
| 通用按钮（立即开始、了解更多、查看详情、提交、返回） | **ui.ts** | 全站通用交互 |
| 通用提示（加载中、操作成功、请输入） | **ui.ts** | 全站通用提示 |
| 通用标签（搜索、筛选、页码） | **ui.ts** | 全站通用交互 |
| 博客列表区（标题、副标题、无文章提示、稍后查看提示） | **content.ts** | 首页/博客列表页专属内容 |
| Hero 区（标题、副标题、描述） | **content.ts** | 首页专属 |
| 功能介绍区（区域标题、功能名称+描述） | **content.ts** | 首页专属 |
| 用户评论区（区域标题、评论内容、用户名称/身份） | **content.ts** | 首页专属 |
| 定价区（区域标题、套餐名称/描述/价格/权益） | **content.ts** | 首页专属 |
| FAQ 区（区域标题、问题+答案列表） | **content.ts** | 首页专属 |
| 首页 CTA 区（标题、描述、按钮文案） | **content.ts** | 首页专属召唤文案 |

---

## 3. 未翻译文本兜底规则

- **ui.ts**：通过 `withEnFallback()` 合并当前语种覆盖与英文默认值，未提供覆盖的 key 使用英文。若某语种某 key 暂未翻译，不写覆盖即可，自动回退到 `en`。
- **content.ts**：通过 `withEnContentFallback()` 同样以英文为兜底；未提供覆盖的模块（如 testimonials、pricing、faq）使用英文内容。需要补译时在对应语种对象中增加覆盖即可。
- 两文件获取文案时：`getUi(locale)` / `getContent(locale)` 若传入的 `locale` 不在 24 语种内，会回退到 `en`。

---

## 4. Astro 组件中导入与使用示例

### 4.1 在布局或任意页面中按语种取 UI 文案

```typescript
// 在 .astro 的 frontmatter 中
import { getUi } from '../i18n/ui';

const { currentLang = 'en' } = Astro.props;
const t = getUi(currentLang);
```

- 导航栏：`t.navbar.home`、`t.navbar.blog`、`t.navbar.features`、`t.navbar.logoText`、`t.navbar.languageSwitcher` 等。
- 底部栏：`t.footer.brand.title`、`t.footer.brand.intro`、`t.footer.columns.aiTools`、`t.footer.links.blog`、`t.footer.copyright` 等。
- 通用按钮：`t.buttons.getStarted`、`t.buttons.learnMore`、`t.buttons.submit`、`t.buttons.back`。
- 通用提示/标签：`t.common.loading`、`t.common.success`、`t.labels.search`、`t.labels.filter`。

### 4.2 在首页/博客列表页取首页专属内容

```typescript
import { getContent } from '../i18n/content';

const { currentLang = 'en' } = Astro.props;
const c = getContent(currentLang);
```

- 博客区：`c.blog.title`、`c.blog.subtitle`、`c.blog.noPosts`、`c.blog.checkBackLater`。
- Hero：`c.hero.title`、`c.hero.subtitle`、`c.hero.description`。
- 功能介绍：`c.features.sectionTitle`、`c.features.items[0].name`、`c.features.items[0].description`。
- 评论区：`c.testimonials.sectionTitle`、`c.testimonials.items[0].quote`、`c.testimonials.items[0].author`、`c.testimonials.items[0].role`。
- 定价：`c.pricing.sectionTitle`、`c.pricing.plans[0].name`、`c.pricing.plans[0].price`、`c.pricing.plans[0].features`。
- FAQ：`c.faq.sectionTitle`、`c.faq.items[0].question`、`c.faq.items[0].answer`。
- CTA：`c.cta.title`、`c.cta.description`、`c.cta.buttonText`。

### 4.3 语言列表（用于导航/语言切换器）

```typescript
import { LOCALES } from '../i18n/ui';

// 若需要“语种 → 显示名”的映射，可单独维护或从 ui 中取 navbar.languageSwitcher 等；
// LOCALES 仅提供语种键数组，与 astro.config 的 locales 一致。
```

### 4.4 类型与导出

- **ui.ts**：`export type Locale`、`export const LOCALES`、`export function getUi(locale)`、`export const ui`、`export interface UiCopy`。
- **content.ts**：`export type Locale`（从 ui 再导出）、`export function getContent(locale)`、`export const content`、`export interface ContentCopy`。

组件中按 `currentLang` 调用 `getUi(currentLang)` / `getContent(currentLang)` 即可；语种切换（例如通过 URL `/[lang]/`）后传入的 `currentLang` 变化，取到的文案即随之切换。

---

## 5. 24 语种完整性确认

- **ui.ts**：24 种语种均通过 `uiByLocale` 提供完整结构；每种语种均包含 `navbar`（home, blog, features, pricing, faq, contactUs, logoText, languageSwitcher）、`footer`（brand, columns, links, copyright）、`buttons`、`common`、`labels`。未单独翻译的 key 通过 `withEnFallback()` 使用英文兜底，保证无缺失 key。
- **content.ts**：24 种语种均通过 `contentByLocale` 提供完整结构；每种语种均包含 `blog`、`hero`、`features`、`testimonials`、`pricing`、`faq`、`cta`。`blog` 模块在 24 语种中均已按语种补全（title, subtitle, noPosts, checkBackLater）；其余模块在部分语种有专属翻译，未翻译的通过 `withEnContentFallback()` 使用英文内容，保证所有语言均有完整 key、无缺失。
- 当前已接入：`Header.astro` 使用 `getUi(currentLang).navbar` 与 `LOCALE_LABELS`；`Footer.astro` 使用 `getUi(currentLang).footer`；`[lang]/index.astro` 使用 `getContent(currentLang).blog`。
