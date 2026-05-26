#!/usr/bin/env python3
"""Generate GPT-5.6 release leak blog posts for all supported locales."""

from __future__ import annotations

from pathlib import Path

try:
    from gpt56_full_sections import FULL_SECTIONS
except ImportError:
    from scripts.gpt56_full_sections import FULL_SECTIONS  # type: ignore

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "blog"
SLUG = "openai-gpt-5-6-june-release-1-5m-context-window"
PUB_DATE = "2026-05-26"
HERO = "https://img.limaxai.com/aiweb/chatgpt-260526-1.png"
MODEL_URL = "gpt-5.4"

CTA_STYLE = (
    'style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); '
    "color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; "
    'text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45);"'
)


def cta_button(lang: str, text: str, margin: str = "32px") -> str:
    url = f"https://www.limaxai.com/{lang}/chat?model={MODEL_URL}"
    # No indentation inside the block — indented lines break Markdown HTML parsing.
    return (
        f'<div style="text-align: center; margin: {margin} 0;">\n'
        f'<a href="{url}" {CTA_STYLE}>{text}</a>\n'
        f"</div>"
    )


# fmt: off
LOCALES: dict[str, dict] = {
    "zh-cn": {
        "title": "OpenAI GPT-5.6 模型曝下月发布：AI 上下文 150 万 tokens",
        "description": "OpenAI Codex 日志曝 GPT-5.6 或于 2026 年 6 月发布，上下文约 150 万 tokens，较 GPT-5.5 API 提升约 43%。含代号对照、实测与 GPT 教程，附 LimaxAI 体验入口。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程"]',
        "cta": "开始使用GPT",
        "author": "LimaxAI Team",
        "body": """多名开发者在 OpenAI Codex 后端日志里发现了尚未正式官宣的 **GPT-5.6** 线索。如果爆料属实，这一代模型的上下文窗口可能提升到约 **150 万 tokens**，发布时间指向 **2026 年 6 月**。本文把目前能核实的信息与仍不确定的部分分开说明，并附上跟 GPT-5.5 的对比，方便你做技术判断。

关键词：chatgpt、GPT-5.6、gpt教程。

发布日期：2026年5月26日

{cta_top}

![OpenAI GPT-5.6 模型曝下月发布 AI 上下文 150 万 tokens]({hero})

## 线索从哪来：Codex 日志里的「金丝雀」

GPT-5.5 上线约三周后，研究社区里开始出现关于下一代模型的讨论。与以往不同，这次不是系统卡或开发者大会，而是有人复现了 **OpenAI Codex 路由日志** 里的一条记录：在绝大多数请求仍映射到 `gpt-5.5` 时，偶尔出现指向 `gpt-5.6` 的条目。该记录在后续会话文件中又消失，更像部署配置里的残留映射，而非有意官宣。

需要强调：**OpenAI 尚未发布公告**。下面内容来自开发者抓包、社区复现与公开爆料，可能随官方澄清而调整。

## 内部代号：iris-alpha、ember-alpha、beacon-alpha

日志与爆料里提到过多个内部构建代号，例如 **iris-alpha**（与 GPT-5.6 关联最紧）、**ember-alpha**、**beacon-alpha**。现阶段无法确认它们分别对应「标准 / Pro / 极速」中的哪一个，也无法确认是否都会对外发布。

| 代号 | 目前公开信息 | 备注 |
| --- | --- | --- |
| iris-alpha | 与 GPT-5.6 名称一同出现 | 被认为是最接近对外版本的构建 |
| ember-alpha | 日志中提及 | 定位待定 |
| beacon-alpha | 日志中提及 | 定位待定 |

## 150 万上下文：相对 GPT-5.5 涨了多少

爆料称 GPT-5.6 的上下文窗口约 **1,500,000 tokens**。对比当前已上架的 GPT-5.5：

| 渠道 / 版本 | 上下文上限（约） | 相对 150 万 |
| --- | --- | --- |
| GPT-5.5 API | 1,050,000 tokens | 约 +43% |
| GPT-5.5（Codex OAuth） | 400,000 tokens | 约 +275% |
| 爆料中的 GPT-5.6 | 1,500,000 tokens | — |

对长文档分析、跨仓库代码审查、多轮 Agent 任务来说，窗口变大通常意味着更少的手动切块和摘要，但也会带来更高的单次调用成本与延迟——是否值得用，还得看你的工作负载。

## 超长上下文实测（非官方）

社区开发者在 **OpenCode** 等工具里做过压力测试：输入约 **90 万 tokens** 时模型仍能正常响应；有案例称在超过 **105 万 tokens** 的请求下也能跑通。需要说明：这类测试依赖特定渠道与构建版本，**不能等同于官方 SLA**，也不代表所有用户上线第一天就能用到满窗口。

## 前端生成：从「能写代码」到「更像成品 UI」

爆料截图里出现过一个例子：在提示词很短的情况下，模型直接生成了名为 **Lumen Notes** 的极简记事应用界面——栅格更整齐、配色更克制、字体层级和导航结构也更清晰。如果属实，说明 GPT-5.6 在 **UI 结构与视觉约束** 上可能又进了一档；但最终还要等公开版本与对比评测。

## 发布时间怎么判断

目前还没有确定的发布日期。可参考的「弱信号」包括：

| 信号类型 | 说明 |
| --- | --- |
| 爆料时间线 | 多家渠道指向 **2026 年 6 月** 对外亮相 |
| 预测市场 | Polymarket 等对「6 月 30 日前发布」一度给出较高概率（社区预期，非官方承诺） |
| 产品节奏 | GPT-5.5 发布约三周后出现 5.6 线索，符合 OpenAI 近年快速迭代的节奏 |
| 后续观察点 | 更多金丝雀日志、新版系统卡、Codex 路由变更、奖励/对齐相关博文 |

金丝雀名称出现又消失在大厂里很常见：**有日志不代表下周就上**，也可能只是内部 A/B。稳妥做法是把上述当作跟踪清单，而不是排期承诺。

## 目前还说不清的事

截至本文写作时，外界仍不清楚：

- 参数规模、训练数据与架构是否有大改（三周窗口通常更像「补丁型」大版本）
- API 定价、速率档位是否与 GPT-5.5 分化
- ChatGPT 各订阅档是否同步升级、是否单独开放「ultrafast」等产品形态
- 与哥布林（goblin）对齐事件相关的修复是否会写进系统卡

这些都得等 OpenAI 正式公告或系统卡，再下结论。

## GPT 教程：发布前你可以先练什么

在 GPT-5.6 落地之前，用现有 **GPT-5.5 / GPT-5.4** 就能把习惯养好，发布后迁移成本更低：

1. **长上下文任务先压缩输入**：上传前去掉无关章节，用目录或小摘要当锚点，避免把窗口浪费在重复内容上。
2. **Agent / 编程任务写清停止条件**：例如「检索最多两轮」「证据足够就停止」，减少无效工具调用。
3. **前端/UI 类需求拆层**：先让模型输出信息架构和组件清单，再要代码，比一步要完整应用更稳。
4. **对比测试固定样本**：同一组问题在 `low` / `medium` 推理档位各跑一遍，记录延迟、成本与答案质量，方便 5.6 发布后做 A/B。

若你想先在浏览器里体验 GPT 对话与多模型切换，可以通过下方按钮进入 LimaxAI 聊天页（当前入口指向 **gpt-5.4**，后续可在模型列表中选择上新版本）。

{cta_mid}

## 小结

| 项目 | 目前判断 |
| --- | --- |
| 是否已官宣 | 否 |
| 上下文爆料 | 约 150 万 tokens |
| 对比 GPT-5.5 API | 约 +43% |
| 发布时间 | 多指向 2026 年 6 月，待官方确认 |
| 实用建议 | 用现有 GPT 练长上下文与 Agent 写法，等新版本系统卡再迁移 |

GPT-5.6 会不会按时来、窗口能不能全开，还要看 OpenAI 的下一张公告。在那之前，把手里已有的 GPT 能力用熟，往往比追着爆料改架构更划算。

{cta_bottom}
""",
    },
    "en": {
        "title": "OpenAI GPT-5.6 Rumored for June: 1.5M Token Context Window",
        "description": "Codex logs hint at GPT-5.6 around June 2026 with ~1.5M tokens of context—about 43% more than GPT-5.5 API. Codenames, stress tests, and a practical GPT tutorial, plus LimaxAI chat access.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "Start Using GPT",
        "author": "LimaxAI Team",
        "body": """Several developers have spotted **GPT-5.6** references in OpenAI Codex backend logs before any official announcement. If the reports hold, the next generation may offer roughly **1.5 million tokens** of context, with a launch window around **June 2026**. This article separates what can be verified today from what is still unknown, and compares the rumored limits with GPT-5.5.

Keywords: chatgpt, GPT-5.6, gpt tutorial.

Published: May 26, 2026

{cta_top}

![OpenAI GPT-5.6 rumored June release 1.5M context]({hero})

## Where the clues came from: a Codex log canary

About three weeks after GPT-5.5 shipped, researchers began discussing a possible successor. Unlike a system card or Dev Day keynote, the first signal was a **routing entry in OpenAI Codex logs**: most traffic still mapped to `gpt-5.5`, but some sessions briefly pointed to `gpt-5.6`. The line then disappeared from later session files—more like a leftover deployment mapping than a deliberate reveal.

**OpenAI has not announced GPT-5.6.** Everything below comes from developer logs, community reproductions, and public leaks; it may change when official docs land.

## Internal codenames: iris-alpha, ember-alpha, beacon-alpha

Leaks and logs mention several internal build names, including **iris-alpha** (most often tied to GPT-5.6), **ember-alpha**, and **beacon-alpha**. It is unclear whether each maps to a public tier (standard, Pro, fast) or whether all will ship.

| Codename | What is public today | Notes |
| --- | --- | --- |
| iris-alpha | Appears alongside the GPT-5.6 name | Treated as the closest to a shipping build |
| ember-alpha | Mentioned in logs | Role still unknown |
| beacon-alpha | Mentioned in logs | Role still unknown |

## 1.5M context: how much more than GPT-5.5

Leaks point to a context window of about **1,500,000 tokens** for GPT-5.6. Compared with GPT-5.5 today:

| Channel / version | Approx. context cap | vs. 1.5M leak |
| --- | --- | --- |
| GPT-5.5 API | 1,050,000 tokens | ~+43% |
| GPT-5.5 (Codex OAuth) | 400,000 tokens | ~+275% |
| Rumored GPT-5.6 | 1,500,000 tokens | — |

For long-document analysis, repo-wide code review, and multi-step agents, a larger window often means less manual chunking—but also higher per-call cost and latency. Whether it pays off depends on your workload.

## Stress tests at extreme length (unofficial)

Community developers have run heavy tests in tools such as **OpenCode**: inputs around **900k tokens** still got responses; some reports claim requests above **1.05M tokens** completed. These runs depend on specific channels and builds—they are **not** an official SLA and do not guarantee day-one access at full window for every user.

## UI generation: closer to shippable front ends

Leak screenshots showed **Lumen Notes**, a minimal notes UI generated with very short prompts—cleaner grids, restrained palettes, and clearer type hierarchy and navigation. If that holds in public builds, GPT-5.6 may be stronger at **layout and visual constraints**, not just code snippets; wait for release builds and benchmarks before betting production UI on it.

## How to read the release timeline

There is no confirmed ship date yet. Weak signals you can track:

| Signal | Notes |
| --- | --- |
| Leak timeline | Multiple sources point to **June 2026** |
| Prediction markets | Polymarket-style odds on "before June 30" reflect community expectation, not OpenAI commitments |
| Product cadence | GPT-5.6 hints ~3 weeks after GPT-5.5 fits recent fast iteration |
| What to watch | More canary logs, a new system card, Codex routing changes, alignment/reward blog posts |

Canary names appear and vanish at large labs all the time—**a log line is not a launch date**. Treat the table as a checklist, not a schedule.

## What is still unclear

As of this writing, outsiders still do not know:

- Whether parameter count, training data, or architecture change materially (a ~3-week window often looks like a strong point release, not a full rebuild)
- API pricing and rate tiers versus GPT-5.5
- Whether ChatGPT plans sync on day one and whether products like an "ultrafast" mode ship separately
- How fixes tied to the goblin alignment incident will show up in the system card

Wait for OpenAI's announcement or system card before treating any of this as final.

## GPT tutorial: what to practice before launch

You can build good habits on **GPT-5.5 / GPT-5.4** now so migration is cheaper when GPT-5.6 lands:

1. **Trim long inputs** before upload—drop irrelevant sections and anchor with an outline or short summary.
2. **Write stop rules for agents and coding** (e.g. "at most two search rounds," "stop when evidence is enough") to cut useless tool calls.
3. **Layer UI asks**—ask for information architecture and component list first, then code, instead of one-shot "full app" prompts.
4. **Keep a fixed eval set**—run the same prompts at `low` and `medium` reasoning effort and log latency, cost, and quality for an A/B when 5.6 ships.

To try GPT chat and model switching in the browser now, use the button below on LimaxAI (currently **gpt-5.4**; pick newer models from the list when they appear).

{cta_mid}

## Summary

| Item | Current read |
| --- | --- |
| Officially announced | No |
| Context leak | ~1.5M tokens |
| vs. GPT-5.5 API | ~+43% |
| Timing | Often cited as June 2026—unconfirmed |
| Practical takeaway | Master today's GPT for long context and agents; migrate after the system card |

Whether GPT-5.6 ships on time and whether the full window opens to everyone depends on OpenAI's next announcement. Until then, getting more from the GPT you already have is usually a better bet than reshaping your stack around every leak.

{cta_bottom}
""",
    },
}

MORE_LOCALES = {
    "zh-tw": {
        "title": "OpenAI GPT-5.6 傳下月發布：AI 上下文 150 萬 tokens",
        "description": "Codex 日誌曝 GPT-5.6 或於 2026 年 6 月發布，上下文約 150 萬 tokens，較 GPT-5.5 API 提升約 43%。含代號對照、實測與 GPT 教程。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程"]',
        "cta": "開始使用 GPT",
    },
    "ja": {
        "title": "OpenAI GPT-5.6、6月公開の噂：コンテキスト150万トークン",
        "description": "CodexログにGPT-5.6の痕跡。2026年6月頃、約150万トークンのコンテキスト（GPT-5.5 API比約+43%）。内部代号・実測・GPTチュートリアル付き。",
        "tags": '["chatgpt", "GPT-5.6", "gptチュートリアル"]',
        "cta": "GPTを使い始める",
    },
    "ko": {
        "title": "OpenAI GPT-5.6, 6월 공개 설? 컨텍스트 150만 토큰",
        "description": "Codex 로그에 GPT-5.6 단서. 2026년 6월 전후 약 150만 토큰(GPT-5.5 API 대비 약 +43%). 코드명·실측·GPT 튜토리얼.",
        "tags": '["chatgpt", "GPT-5.6", "gpt 튜토리얼"]',
        "cta": "GPT 사용 시작",
    },
    "es": {
        "title": "OpenAI GPT-5.6, ¿en junio? Ventana de contexto de 1,5M tokens",
        "description": "Los logs de Codex apuntan a GPT-5.6 en junio de 2026 con ~1,5M tokens (~+43% vs API GPT-5.5). Nombres internos, pruebas y tutorial GPT.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Empezar a usar GPT",
    },
    "fr": {
        "title": "OpenAI GPT-5.6 prévu en juin ? Contexte de 1,5M tokens",
        "description": "Des logs Codex évoquent GPT-5.6 vers juin 2026 avec ~1,5M tokens (+43% vs API GPT-5.5). Noms de code, tests et tutoriel GPT.",
        "tags": '["chatgpt", "GPT-5.6", "tutoriel gpt"]',
        "cta": "Commencer avec GPT",
    },
    "de": {
        "title": "OpenAI GPT-5.6 angeblich im Juni: 1,5M Token Kontext",
        "description": "Codex-Logs deuten auf GPT-5.6 im Juni 2026 mit ~1,5M Token (~+43% vs. GPT-5.5 API). Codenamen, Tests und GPT-Tutorial.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "GPT jetzt nutzen",
    },
    "pt": {
        "title": "OpenAI GPT-5.6 em junho? Janela de contexto de 1,5M tokens",
        "description": "Logs do Codex sugerem GPT-5.6 em junho de 2026 com ~1,5M tokens (~+43% vs API GPT-5.5). Codinomes, testes e tutorial GPT.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Começar a usar o GPT",
    },
    "it": {
        "title": "OpenAI GPT-5.6 a giugno? Contesto da 1,5M token",
        "description": "I log Codex indicano GPT-5.6 nel giugno 2026 con ~1,5M token (~+43% vs API GPT-5.5). Nomi in codice, test e tutorial GPT.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Inizia a usare GPT",
    },
    "ru": {
        "title": "OpenAI GPT-5.6: слухи о июне и контексте 1,5 млн токенов",
        "description": "Логи Codex намекают на GPT-5.6 в июне 2026 с ~1,5 млн токенов (~+43% к API GPT-5.5). Кодовые имена, тесты и урок GPT.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt"]',
        "cta": "Начать использовать GPT",
    },
    "ar": {
        "title": "OpenAI GPT-5.6: شائعات يونيو ونافذة 1.5 مليون رمز",
        "description": "سجلات Codex تشير إلى GPT-5.6 في يونيو 2026 بنحو 1.5 مليون رمز (~+43% مقابل API GPT-5.5). أسماء رمزية واختبارات ودليل GPT.",
        "tags": '["chatgpt", "GPT-5.6", "دليل gpt"]',
        "cta": "ابدأ استخدام GPT",
    },
    "id": {
        "title": "OpenAI GPT-5.6 di Juni? Konteks 1,5 juta token",
        "description": "Log Codex mengisyaratkan GPT-5.6 sekitar Juni 2026 dengan ~1,5 juta token (~+43% vs API GPT-5.5). Nama kode, uji, tutorial GPT.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Mulai Gunakan GPT",
    },
    "ms": {
        "title": "OpenAI GPT-5.6 Jun? Konteks 1.5 juta token",
        "description": "Log Codex menunjuk GPT-5.6 sekitar Jun 2026 dengan ~1.5 juta token (~+43% vs API GPT-5.5). Nama kod, ujian, tutorial GPT.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Mula Gunakan GPT",
    },
    "vi": {
        "title": "OpenAI GPT-5.6 tháng 6? Ngữ cảnh 1,5 triệu token",
        "description": "Log Codex gợi ý GPT-5.6 khoảng tháng 6/2026 với ~1,5 triệu token (~+43% so với API GPT-5.5). Tên mã, thử nghiệm, hướng dẫn GPT.",
        "tags": '["chatgpt", "GPT-5.6", "hướng dẫn gpt"]',
        "cta": "Bắt đầu dùng GPT",
    },
    "th": {
        "title": "OpenAI GPT-5.6 มิถายน? บริบท 1.5 ล้านโทเค็น",
        "description": "ล็อก Codex ชี้ GPT-5.6 ราวมิ.ย. 2026 ~1.5 ล้านโทเค็น (~+43% เทียบ API GPT-5.5) พร้อมชื่อรหัสและบทช่วยสอน GPT",
        "tags": '["chatgpt", "GPT-5.6", "บทช่วยสอน gpt"]',
        "cta": "เริ่มใช้ GPT",
    },
    "tr": {
        "title": "OpenAI GPT-5.6 Haziran söylentisi: 1,5M token bağlam",
        "description": "Codex günlükleri Haziran 2026'da ~1,5M tokenlı GPT-5.6'yı işaret ediyor (GPT-5.5 API'ye ~+43%). Kod adları, testler, GPT eğitimi.",
        "tags": '["chatgpt", "GPT-5.6", "gpt eğitimi"]',
        "cta": "GPT'yi Kullanmaya Başla",
    },
    "hi": {
        "title": "OpenAI GPT-5.6 जून में? 15 लाख टोकन संदर्भ",
        "description": "Codex लॉग जून 2026 में ~15 लाख टोकन वाले GPT-5.6 का संकेत देते हैं (GPT-5.5 API से ~+43%)। कोड नाम, परीक्षण, GPT ट्यूटोरियल।",
        "tags": '["chatgpt", "GPT-5.6", "gpt ट्यूटोरियल"]',
        "cta": "GPT का उपयोग शुरू करें",
    },
    "nl": {
        "title": "OpenAI GPT-5.6 in juni? Context van 1,5M tokens",
        "description": "Codex-logs wijzen op GPT-5.6 rond juni 2026 met ~1,5M tokens (~+43% vs GPT-5.5 API). Codenamen, tests en GPT-tutorial.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "GPT gaan gebruiken",
    },
    "pl": {
        "title": "OpenAI GPT-5.6 w czerwcu? Kontekst 1,5 mln tokenów",
        "description": "Logi Codex sugerują GPT-5.6 około czerwca 2026 z ~1,5 mln tokenów (~+43% vs API GPT-5.5). Nazwy kodowe i samouczek GPT.",
        "tags": '["chatgpt", "GPT-5.6", "samouczek gpt"]',
        "cta": "Zacznij używać GPT",
    },
    "sv": {
        "title": "OpenAI GPT-5.6 i juni? 1,5M tokens kontext",
        "description": "Codex-loggar tyder på GPT-5.6 runt juni 2026 med ~1,5M tokens (~+43% vs GPT-5.5 API). Kodnamn, tester och GPT-guide.",
        "tags": '["chatgpt", "GPT-5.6", "gpt guide"]',
        "cta": "Börja använda GPT",
    },
    "uk": {
        "title": "OpenAI GPT-5.6 у червні? Контекст 1,5 млн токенів",
        "description": "Логи Codex натякають на GPT-5.6 у червні 2026 з ~1,5 млн токенів (~+43% до API GPT-5.5). Кодові імена та урок GPT.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt"]',
        "cta": "Почати використовувати GPT",
    },
    "ro": {
        "title": "OpenAI GPT-5.6 în iunie? Context de 1,5M tokeni",
        "description": "Jurnalele Codex sugerează GPT-5.6 în iunie 2026 cu ~1,5M tokeni (~+43% față de API GPT-5.5). Nume de cod și tutorial GPT.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Începe să folosești GPT",
    },
    "fa": {
        "title": "OpenAI GPT-5.6 در ژوئن؟ زمینه ۱٫۵ میلیون توکن",
        "description": "لاگ Codex از GPT-5.6 در ژوئن ۲۰۲۶ با ~۱٫۵ میلیون توکن خبر می‌دهد (~+۴۳٪ نسبت به API GPT-5.5). نام‌های رمز و آموزش GPT.",
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

## {t['h_leak']}

{t['leak']}

## {t['h_codenames']}

{t['codenames']}

{t['codenames_table']}

## {t['h_context']}

{t['context']}

{t['ctx_table']}

{t['context_note']}

## {t['h_test']}

{t['test']}

## {t['h_ui']}

{t['ui']}

## {t['h_release']}

{t['release']}

{t['sig_table']}

{t['release_note']}

## {t['h_unknown']}

{t['unknown']}

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

    for lang in [
        "en", "zh-cn", "zh-tw", "es", "ar", "pt", "id", "ms", "fr", "ru",
        "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl",
        "sv", "uk", "ro",
    ]:
        if lang not in all_meta:
            raise SystemExit(f"Missing locale: {lang}")
        if lang not in ("zh-cn", "en") and lang not in FULL_SECTIONS:
            raise SystemExit(f"Missing sections for: {lang}")
        write_post(lang, all_meta[lang])


if __name__ == "__main__":
    main()
