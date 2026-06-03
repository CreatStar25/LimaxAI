#!/usr/bin/env python3
"""Generate Codex office-workflow blog posts for all supported locales."""

from __future__ import annotations

from pathlib import Path

try:
    from codex_office_full_sections import FULL_SECTIONS
except ImportError:
    from scripts.codex_office_full_sections import FULL_SECTIONS  # type: ignore

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "blog"
SLUG = "openai-codex-office-62-apps-110-skills-update"
PUB_DATE = "2026-06-03"
HERO = "https://img.limaxai.com/aiweb/codex-260603-1.png"
MODEL_URL = "gpt-5.4"

CTA_STYLE = (
    'style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); '
    "color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; "
    'text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45);"'
)

LOCALE_ORDER = [
    "en", "zh-cn", "zh-tw", "es", "ar", "pt", "id", "ms", "fr", "ru",
    "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl",
    "sv", "uk", "ro",
]


def cta_button(lang: str, text: str, margin: str = "32px") -> str:
    url = f"https://www.limaxai.com/{lang}/chat?model={MODEL_URL}"
    return (
        f'<div style="text-align: center; margin: {margin} 0;">\n'
        f'<a href="{url}" {CTA_STYLE}>{text}</a>\n'
        f"</div>"
    )


# fmt: off
LOCALES: dict[str, dict] = {
    "zh-cn": {
        "title": "Codex 重大更新：62 个应用与 110 项技能，面向白领办公",
        "description": "OpenAI Codex 推出六类角色插件、Sites 交互网页与 Annotations 圈选编辑，周活破 500 万。结合 ChatGPT、GPT-5.6 与 GPT 教程，在 LimaxAI 直接体验。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程"]',
        "cta": "开始使用GPT",
        "body": """OpenAI 今天给 **Codex** 做了一次面向办公场景的大改版：六个角色专属插件，捆绑 **62 个应用** 和 **110 个自动化技能**，覆盖数据分析、创意、销售、产品设计、公募股权投资与投行。同时还上线了 **Sites**（把内容变成可分享的交互网页）和 **Annotations**（圈哪改哪）。Codex 的目标已经不只是写代码，而是接管整条工作流。

关键词：chatgpt、GPT-5.6、gpt教程。

发布日期：2026年6月3日

{cta_top}

![Codex 重大更新 62 个应用 110 项技能 面向白领办公]({hero})

## 先看数据：500 万周活，非开发者增速更快

Codex 周活跃用户已突破 **500 万**，自 2 月桌面版上线以来约 **6 倍** 增长。更值得看的是结构：**非开发者**（分析师、营销、运营、设计师、研究员、投资人等）已占约 **20%**，增速约为开发者的 **3 倍以上**。

| 任务类型 | 近期周环比（约） |
| --- | --- |
| 数据分析 | +110% |
| 研究类 | +37% |
| 知识产出（报告、备忘录、合同、PPT、表格等） | +36% |

另有行为数据：**60% 以上** 用户会在一天内并行跑多个 Codex 任务（4 月中旬还不到一半）。这说明 Codex 正在白领日常工作中渗透，而不只是「程序员多了一个助手」。

## 六个插件：按角色打包职业工具链

设计思路是按岗位定制，而不是把通用能力硬套给所有人。每个插件打包该角色常用软件，你用自然语言下指令，Codex 在后台跨应用跑完整流程。

| 插件 | 连接的典型工具 | 能做什么（示例） |
| --- | --- | --- |
| 数据分析 | Snowflake、Tableau 等 | 问「上季度哪个区域收入下降、原因是什么」，查库、分析、出图一气呵成 |
| 创意制作 | Figma、Canva 等 | 根据创意简报生成广告素材变体、产品场景图、电商用图 |
| 销售 | Salesforce、HubSpot 等 | 找高优先级客户、准备会议材料、跟进邮件、更新 CRM、做关单与风险复盘 |
| 产品设计 | Figma、Canva 等 | 线框图转可点击原型，或从网址审计用户流程 |
| 公共股权投资 | FactSet、S&P、PitchBook 等 | 盈利分析、公司对比、投资逻辑验证 |
| 投行 | 研究与尽调材料 | 生成客户就绪 Pitch、可比公司与可比交易分析 |

后续计划还有企业财务、私募、营销策略、咨询、法律等插件，并开放生态让合作伙伴上架。OpenAI 在这里扮演的是 **跨 SaaS 的调度层**：不替代某一个工具，而是坐在工具之上串联流程。

## Sites：一句话生成可分享的交互网页

**Sites** 面向 Business / Enterprise 用户预览开放。以前 Codex 干完活往往给你一个文件；现在可以直接生成 **网页**，把链接发给同事即可查看和操作。

典型场景包括：

- 财务把 Excel 模型变成在线情景规划器，管理层在网页上调参对比假设。
- 产品发布时汇总成 Hub：最新文案、里程碑、负责人、决策记录集中展示。
- 客户评审前生成互动页：产品更新、待解决问题、使用趋势与下一步行动。

从「想要一个交互应用」到「真的有一个」，过去可能要几周开发；现在可以压缩到几分钟对话。页面也不是一次性的——信息变了可以让 Codex 更新，也可用于项目进度、客服指引、团队创意简报等。

## Annotations：圈哪改哪

**Annotations** 从程序员改代码扩展到 **文档、表格、幻灯片**。选中不满意的一块，说明要怎么改，Codex 只动选中区域，其余内容保持不变。

例如：投资分析里圈出一段问数据来源；幻灯片里圈住图表改标签；Sites 页面里选中导航栏换字体。它解决的是「初稿之后怎么精修」，不必整篇重来。

## Codex 与 ChatGPT：走向合并

这次三项功能叠加，信号很明确：Codex 要服务所有上班的人，而不只是工程师。OpenAI 内部 Codex 与 ChatGPT 已由同一团队推进，长期看两者很可能 **合并为一条产品线**——聊天是入口，执行工作流才是核心。行业整体也在从「你问我答」转向「你说一句，我替你做完」。

## 谁会更受影响

数据和合规壁垒深的厂商（如 Salesforce、Snowflake）短期内仍难被插件完全替代。更需要警惕的是 **靠「界面好用」吃饭的中间层**：BI 看板、轻量项目管理、报告生成器等。当用户只需说清楚要什么，而不必学三天 Tableau，「界面体验」这条护城河会变薄。壁垒会向两头集中：**数据与合规源头**，或 **能理解意图、调度工具的 Agent 层**。

## GPT 教程：在 Codex 办公流之外，先把 ChatGPT 用熟

Codex 负责跨应用干活；日常问答、起草文档、头脑风暴仍离不开 **ChatGPT**。在 **GPT-5.6** 正式全面开放前，建议先用 **GPT-5.4 / GPT-5.5** 练这几件事：

1. **任务写清边界**：说明输入来源、输出格式、不要改动哪些部分（和 Annotations 的圈选逻辑一致）。
2. **长文档先给结构**：目录 + 每节一句话目标，再让模型展开，减少跑偏。
3. **办公场景拆步**：先列「要连哪些系统、产出什么文件」，再执行，方便以后迁移到 Codex 插件。
4. **固定样本做对比**：同一组提示在不同推理档位各跑一遍，记录质量与耗时，便于新模型上线后对比。

想先在浏览器里体验 GPT 对话与模型切换，可点击下方按钮进入 LimaxAI（当前入口为 **gpt-5.4**，上新后可在模型列表切换）。

{cta_mid}

## 小结

| 项目 | 要点 |
| --- | --- |
| 插件 | 六类角色，62 应用 + 110 技能 |
| Sites | 自然语言生成交互网页并分享 |
| Annotations | 文档 / 表格 / 幻灯片圈选精修 |
| 用户结构 | 500 万周活，非开发者占比与增速上升 |
| 产品走向 | Codex 与 ChatGPT 趋同，办公 Agent 化 |
| 你的下一步 | 用 ChatGPT 练清需求与提示，再在 LimaxAI 体验 GPT |

办公 AI 的竞争焦点，正在从「会不会写代码」变成「能不能替你跑完流程」。在那之前，把手里的 **ChatGPT** 用熟，往往比追逐每一个新功能名更实在。

{cta_bottom}
""",
    },
    "en": {
        "title": "Codex Major Update: 62 Apps, 110 Skills for Office Workflows",
        "description": "OpenAI Codex adds six role plugins, Sites interactive pages, and Annotations. 5M weekly users, office focus, plus ChatGPT, GPT-5.6, and a GPT tutorial—try it on LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "Start Using GPT",
        "body": """OpenAI shipped a major **Codex** refresh aimed at office work: **six role plugins** bundling **62 apps** and **110 automation skills** across data, creative, sales, product design, public equities, and investment banking. **Sites** turns deliverables into shareable interactive web pages; **Annotations** lets you select a region and edit only that part. Codex is no longer positioning itself as “just coding”—it wants to run whole workflows.

Keywords: chatgpt, GPT-5.6, gpt tutorial.

Published: June 3, 2026

{cta_top}

![Codex major update 62 apps 110 skills office workflows]({hero})

## By the numbers: 5M weekly users, faster growth outside engineering

Codex passed **5 million** weekly active users—about **6×** growth since the desktop launch in February. Structure matters: **non-developers** (analysts, marketing, ops, designers, researchers, investors) are roughly **20%** of users and growing about **3×** faster than developers.

| Work type | Recent week-over-week (approx.) |
| --- | --- |
| Data analysis | +110% |
| Research | +37% |
| Knowledge outputs (reports, memos, contracts, decks, sheets) | +36% |

**60%+** of users now run multiple Codex tasks in a single day (under half in mid-April). That points to penetration in white-collar work, not only “another assistant for programmers.”

## Six plugins: job-specific toolchains

Each plugin packages the software a role already lives in. You give a plain-language instruction; Codex orchestrates cross-app steps in the background.

| Plugin | Typical connectors | Example ask |
| --- | --- | --- |
| Data analysis | Snowflake, Tableau, etc. | “Which region’s revenue fell last quarter and why?”—query, analyze, chart |
| Creative | Figma, Canva, etc. | Turn a creative brief into ad variants, product scenes, commerce images |
| Sales | Salesforce, HubSpot, etc. | Prioritize accounts, prep meetings, follow-ups, CRM updates, close plans |
| Product design | Figma, Canva, etc. | Clickable prototypes from wireframes; audit flows from a live URL |
| Public equities | FactSet, S&P, PitchBook, etc. | Earnings work, comps, thesis checks |
| Investment banking | Research & diligence | Client-ready pitches, trading/comps analyses |

More plugins (corp finance, PE, marketing strategy, consulting, legal) are planned, with a partner ecosystem. OpenAI is acting as a **cross-SaaS orchestration layer**—not replacing one app, but sitting above them.

## Sites: one prompt, a shareable interactive page

**Sites** is in preview for Business and Enterprise. Instead of only handing you a file, Codex can ship a **web page** your team opens and uses.

Common cases:

- Finance turns an Excel model into a scenario planner leadership can tune in the browser.
- Launch hubs that centralize copy, milestones, owners, and decisions.
- Pre-review pages with product updates, open issues, usage trends, and next steps.

The gap from “I need an interactive app” to “here is the URL” shrinks from weeks of build to minutes of conversation—and pages can be updated as facts change.

## Annotations: select, instruct, patch locally

**Annotations** moved beyond code to **documents, spreadsheets, and slides**. Highlight the part you want changed; Codex edits only that region.

Examples: verify a data citation in a memo, fix a chart label on a deck, restyle a nav bar on a Sites page. It targets the “second draft” problem without rewriting everything.

## Codex and ChatGPT: converging

The bundle signals Codex for everyone who works, not only engineers. Internally, Codex and **ChatGPT** are on one trajectory—chat as the front door, workflow execution as the product. The industry shift is from Q&A to “say what you need done.”

## Who feels pressure first

Vendors with deep data, compliance, and integrations (e.g. Salesforce, Snowflake) keep short-term moats. The squeeze hits **middle layers sold on “great UI”**: lightweight BI, PM shells, report builders. When users describe outcomes instead of learning a tool for three days, interface polish is a weaker defense. Moats cluster at **data/compliance sources** or the **agent layer that routes tools**.

## GPT tutorial: master ChatGPT while Codex runs workflows

Codex connects apps; **ChatGPT** still carries daily drafting, Q&A, and brainstorming. Before **GPT-5.6** is everywhere, practice on **GPT-5.4 / GPT-5.5**:

1. **Bound the task**—sources, output format, and “do not change” sections (same mindset as Annotations).
2. **Outline long docs first**—headings plus one-line goals per section, then expand.
3. **Split office work into steps**—systems to touch and artifacts to produce—so plugin migration is easier later.
4. **Keep a fixed eval set**—same prompts across reasoning tiers; log quality and latency for comparisons when new models ship.

Use the button below to open LimaxAI chat (**gpt-5.4** today; pick newer models when they appear).

{cta_mid}

## Summary

| Item | Takeaway |
| --- | --- |
| Plugins | Six roles; 62 apps + 110 skills |
| Sites | Interactive pages from natural language |
| Annotations | Local edits on docs, sheets, slides |
| Users | 5M WAU; non-dev share and growth rising |
| Direction | Codex + ChatGPT converging on office agents |
| Next step | Clarify tasks in ChatGPT; try GPT on LimaxAI |

The race is shifting from “can it code?” to “can it finish the workflow?” Until then, getting more from the **ChatGPT** you already have beats chasing every feature name.

{cta_bottom}
""",
    },
}

MORE_LOCALES: dict[str, dict] = {
    "zh-tw": {
        "title": "Codex 重大更新：62 個應用與 110 項技能，面向白領辦公",
        "description": "OpenAI Codex 推出六類角色外掛、Sites 互動網頁與 Annotations 圈選編輯，週活破 500 萬。結合 ChatGPT、GPT-5.6 與 GPT 教程，在 LimaxAI 直接體驗。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程"]',
        "cta": "開始使用 GPT",
    },
    "ja": {
        "title": "Codex大型アップデート：62アプリ・110スキルでオフィス業務へ",
        "description": "OpenAI Codexが6種のロールプラグイン、Sites、Annotationsを追加。週500万WAU。ChatGPT・GPT-5.6・GPTチュートリアル付き。LimaxAIで体験。",
        "tags": '["chatgpt", "GPT-5.6", "gptチュートリアル"]',
        "cta": "GPTを使い始める",
    },
    "ko": {
        "title": "Codex 대규모 업데이트: 62개 앱·110스킬, 오피스 워크플로",
        "description": "OpenAI Codex 6종 역할 플러그인, Sites, Annotations. 주간 500만 WAU. ChatGPT·GPT-5.6·GPT 튜토리얼. LimaxAI에서 체험.",
        "tags": '["chatgpt", "GPT-5.6", "gpt 튜토리얼"]',
        "cta": "GPT 사용 시작",
    },
    "es": {
        "title": "Gran actualización de Codex: 62 apps y 110 habilidades para oficina",
        "description": "OpenAI Codex añade 6 plugins por rol, Sites y Annotations. 5M usuarios semanales. ChatGPT, GPT-5.6 y tutorial GPT en LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Empezar a usar GPT",
    },
    "fr": {
        "title": "Codex : 62 apps et 110 compétences pour les bureaux",
        "description": "OpenAI Codex : 6 plugins métiers, Sites et Annotations. 5M WAU. ChatGPT, GPT-5.6 et tutoriel GPT sur LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutoriel gpt"]',
        "cta": "Commencer avec GPT",
    },
    "de": {
        "title": "Codex-Update: 62 Apps, 110 Skills für Büro-Workflows",
        "description": "OpenAI Codex: 6 Rollen-Plugins, Sites, Annotations. 5M wöchentliche Nutzer. ChatGPT, GPT-5.6 und GPT-Tutorial auf LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "GPT jetzt nutzen",
    },
    "pt": {
        "title": "Codex: 62 apps e 110 skills para fluxos de escritório",
        "description": "OpenAI Codex com 6 plugins por função, Sites e Annotations. 5M WAU. ChatGPT, GPT-5.6 e tutorial GPT no LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Começar a usar o GPT",
    },
    "it": {
        "title": "Codex: 62 app e 110 skill per il lavoro d'ufficio",
        "description": "OpenAI Codex: 6 plugin per ruolo, Sites e Annotations. 5M WAU. ChatGPT, GPT-5.6 e tutorial GPT su LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Inizia a usare GPT",
    },
    "ru": {
        "title": "Codex: 62 приложения и 110 навыков для офиса",
        "description": "OpenAI Codex: 6 ролевых плагинов, Sites и Annotations. 5 млн WAU. ChatGPT, GPT-5.6 и урок GPT на LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt"]',
        "cta": "Начать использовать GPT",
    },
    "ar": {
        "title": "تحديث Codex: 62 تطبيقًا و110 مهارة للعمل المكتبي",
        "description": "OpenAI Codex: 6 إضافات أدوار وSites وAnnotations. 5 ملايين مستخدم أسبوعي. ChatGPT وGPT-5.6 ودليل GPT على LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "دليل gpt"]',
        "cta": "ابدأ استخدام GPT",
    },
    "id": {
        "title": "Codex: 62 aplikasi & 110 skill untuk kantor",
        "description": "OpenAI Codex: 6 plugin peran, Sites, Annotations. 5 juta WAU. ChatGPT, GPT-5.6, tutorial GPT di LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Mulai Gunakan GPT",
    },
    "ms": {
        "title": "Codex: 62 apl & 110 kemahiran untuk pejabat",
        "description": "OpenAI Codex: 6 plugin peranan, Sites, Annotations. 5 juta WAU. ChatGPT, GPT-5.6, tutorial GPT di LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Mula Gunakan GPT",
    },
    "vi": {
        "title": "Codex: 62 ứng dụng, 110 kỹ năng cho văn phòng",
        "description": "OpenAI Codex: 6 plugin vai trò, Sites, Annotations. 5 triệu WAU. ChatGPT, GPT-5.6, hướng dẫn GPT trên LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "hướng dẫn gpt"]',
        "cta": "Bắt đầu dùng GPT",
    },
    "th": {
        "title": "Codex: 62 แอป 110 สกิลสำหรับงานออฟฟิศ",
        "description": "OpenAI Codex: 6 ปลั๊กอินตามบทบาท Sites Annotations WAU 5 ล้าน ChatGPT GPT-5.6 บทช่วยสอน GPT บน LimaxAI",
        "tags": '["chatgpt", "GPT-5.6", "บทช่วยสอน gpt"]',
        "cta": "เริ่มใช้ GPT",
    },
    "tr": {
        "title": "Codex: Ofis için 62 uygulama, 110 beceri",
        "description": "OpenAI Codex: 6 rol eklentisi, Sites, Annotations. 5M WAU. ChatGPT, GPT-5.6 ve GPT eğitimi LimaxAI'da.",
        "tags": '["chatgpt", "GPT-5.6", "gpt eğitimi"]',
        "cta": "GPT'yi Kullanmaya Başla",
    },
    "hi": {
        "title": "Codex: ऑफिस के लिए 62 ऐप, 110 स्किल",
        "description": "OpenAI Codex: 6 रोल प्लगइन, Sites, Annotations. 5M WAU. ChatGPT, GPT-5.6, GPT ट्यूटोरियल LimaxAI पर।",
        "tags": '["chatgpt", "GPT-5.6", "gpt ट्यूटोरियल"]',
        "cta": "GPT का उपयोग शुरू करें",
    },
    "nl": {
        "title": "Codex-update: 62 apps en 110 skills voor kantoor",
        "description": "OpenAI Codex: 6 rol-plugins, Sites, Annotations. 5M WAU. ChatGPT, GPT-5.6 en GPT-tutorial op LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "GPT gaan gebruiken",
    },
    "pl": {
        "title": "Codex: 62 aplikacje i 110 umiejętności dla biura",
        "description": "OpenAI Codex: 6 wtyczek ról, Sites, Annotations. 5 mln WAU. ChatGPT, GPT-5.6 i samouczek GPT na LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "samouczek gpt"]',
        "cta": "Zacznij używać GPT",
    },
    "sv": {
        "title": "Codex: 62 appar och 110 färdigheter för kontoret",
        "description": "OpenAI Codex: 6 rollplugins, Sites, Annotations. 5M WAU. ChatGPT, GPT-5.6 och GPT-guide på LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt guide"]',
        "cta": "Börja använda GPT",
    },
    "uk": {
        "title": "Codex: 62 застосунки та 110 навичок для офісу",
        "description": "OpenAI Codex: 6 рольових плагінів, Sites, Annotations. 5 млн WAU. ChatGPT, GPT-5.6 і урок GPT на LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt"]',
        "cta": "Почати використовувати GPT",
    },
    "ro": {
        "title": "Codex: 62 aplicații și 110 skill-uri pentru birou",
        "description": "OpenAI Codex: 6 pluginuri pe rol, Sites, Annotations. 5M WAU. ChatGPT, GPT-5.6 și tutorial GPT pe LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Începe să folosești GPT",
    },
    "fa": {
        "title": "به‌روزرسانی Codex: ۶۲ اپ و ۱۱۰ مهارت اداری",
        "description": "OpenAI Codex: ۶ افزونه نقش، Sites و Annotations. ۵ میلیون WAU. ChatGPT، GPT-5.6 و آموزش GPT در LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "آموزش gpt"]',
        "cta": "شروع استفاده از GPT",
    },
}
# fmt: on


def shared_body(lang: str) -> str:
    t = FULL_SECTIONS[lang]
    return f"""{t['intro']}

{t['keywords']}

{t['published']}

{{cta_top}}

![{t['img_alt']}]({{hero}})

## {t['h_data']}

{t['data']}

{t['data_table']}

{t['data_note']}

## {t['h_plugins']}

{t['plugins_intro']}

{t['plugins_table']}

{t['plugins_note']}

## {t['h_sites']}

{t['sites']}

{t['sites_list']}

{t['sites_note']}

## {t['h_annotations']}

{t['annotations']}

## {t['h_merge']}

{t['merge']}

## {t['h_pressure']}

{t['pressure']}

## {t['h_guide']}

{t['guide']}

{{cta_mid}}

## {t['h_sum']}

{t['sum_table']}

{t['sum_line']}

{{cta_bottom}}
"""


def write_post(lang: str, meta: dict) -> None:
    path = ROOT / lang / f"{SLUG}.md"
    path.parent.mkdir(parents=True, exist_ok=True)

    if lang in ("zh-cn", "en"):
        body_template = meta["body"]
    else:
        body_template = shared_body(lang)

    body = body_template.format(
        cta_top=cta_button(lang, meta["cta"], "32px"),
        cta_mid=cta_button(lang, meta["cta"], "28px"),
        cta_bottom=cta_button(lang, meta["cta"], "40px"),
        hero=HERO,
    )

    frontmatter = f"""---
title: "{meta['title']}"
description: "{meta['description']}"
tags: {meta['tags']}
pubDate: "{PUB_DATE}"
heroImage: "{HERO}"
lang: "{lang}"
author: "{meta.get('author', 'LimaxAI Team')}"
---

"""
    path.write_text(frontmatter + body, encoding="utf-8")
    print(f"Wrote {path.relative_to(ROOT.parents[2])}")


def main() -> None:
    all_meta = {**LOCALES}
    for lang, extra in MORE_LOCALES.items():
        all_meta[lang] = {**extra, "author": "LimaxAI Team"}

    for lang in LOCALE_ORDER:
        if lang not in all_meta:
            raise SystemExit(f"Missing locale meta: {lang}")
        if lang not in ("zh-cn", "en") and lang not in FULL_SECTIONS:
            raise SystemExit(f"Missing sections for: {lang}")
        write_post(lang, all_meta[lang])


if __name__ == "__main__":
    main()
