#!/usr/bin/env python3
"""Generate GPT 5.5 prompt guide blog posts for all supported locales."""

from __future__ import annotations

from pathlib import Path

try:
    from gpt55_full_sections import FULL_SECTIONS, _en as _en_sections
except ImportError:
    from scripts.gpt55_full_sections import FULL_SECTIONS, _en as _en_sections  # type: ignore

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "blog"
SLUG = "openai-gpt-5-5-prompt-guide-7-key-changes"
PUB_DATE = "2026-05-22"
HERO = "https://img.limaxai.com/aiweb/chatgpt-260522-1.png"
MODEL_URL = "gpt-5.4"

CTA_STYLE = (
    'style="display: inline-block; background: linear-gradient(135deg, #10a37f 0%, #1a7f64 50%, #667eea 100%); '
    "color: white; padding: 16px 48px; border-radius: 8px; font-size: 20px; font-weight: bold; "
    "text-decoration: none; box-shadow: 0 4px 15px rgba(16, 163, 127, 0.45); "
    "transition: transform 0.2s, box-shadow 0.2s;\" "
    "onmouseover=\"this.style.transform='translateY(-2px)'; "
    "this.style.boxShadow='0 6px 20px rgba(16, 163, 127, 0.6)';\" "
    "onmouseout=\"this.style.transform='translateY(0)'; "
    "this.style.boxShadow='0 4px 15px rgba(16, 163, 127, 0.45)';"
)


def cta_button(lang: str, text: str, margin: str = "32px") -> str:
    url = f"https://www.limaxai.com/{lang}/chat?model={MODEL_URL}"
    return f"""<div style="text-align: center; margin: {margin} 0;">
  <a href="{url}" {CTA_STYLE}>
    {text}
  </a>
</div>"""


# fmt: off
LOCALES: dict[str, dict] = {
    "zh-cn": {
        "title": "OpenAI 官方发布 GPT 5.5 提示词指南，我总结了 7 个关键变化！",
        "description": "OpenAI 发布 GPT-5.5 官方提示词指南：从流程导向转向结果导向。本文解读 7 个关键变化、7 段式骨架与停止条件，附对比表，帮你快速改写 ChatGPT Prompt。",
        "tags": '["chatgpt", "gpt 5.5", "gpt教程"]',
        "cta": "开始使用GPT",
        "author": "LimaxAI Team",
        "body": """OpenAI 在 GPT-5.5 上线时同步发布了官方提示词指南。如果你还在用旧模型的「分步指挥」写法，很可能已经把模型的发挥空间压窄了。本文基于官方文档与社区实践，把最值得关注的 7 个变化整理成可落地的写法。

关键词：chatgpt、gpt 5.5、gpt教程。

发布日期：2026年5月22日

{cta_top}

![OpenAI GPT 5.5 提示词指南 7 个关键变化]({hero})

## 背景：为什么旧 Prompt 要重写

官方文档写得很直白：旧提示词常常**过度规定流程**，是因为早期模型需要更多引导才能「不跑偏」。GPT-5.5 推理能力更强后，这类细节反而可能变成噪音，缩小模型的搜索空间，输出也会显得更机械。

Django 联合创始人 Simon Willison 也提到：OpenAI 建议**从头重写**，而不是假设以前调好的 Prompt 还能直接沿用。如果你准备迁移到 GPT-5.5（或在 LimaxAI 上体验同类能力），建议把 Prompt 当成新产品重新设计，而不是简单替换模型名。

## 变化一：从「手把手」到「只描述结果」

**旧写法**（流程导向）：

> 先检查 A，再检查 B，逐个字段对比，想清楚所有异常，再决定调用哪个工具，调完工具把全过程解释给用户。

**新写法**（结果导向）：

> 把用户的问题彻底解决。根据现有政策和账户数据判断，能做的事先做完再回复，最后说明做了什么、还有什么没解决。缺信息就追问，只问最关键的那一个。

核心就一句：**描述目的地，而不是规定每一步怎么走。** GPT-5.5 会自己规划路径；你把路线写死，反而可能挡住更优解。

## 变化二：少用「必须」「禁止」，红线才用绝对语气

过去常用「永远 JSON」「绝对不超过 500 字」「必须先搜索再回答」来约束模型。GPT-5.5 对绝对指令**非常敏感**——两条互相矛盾的「必须」出现时，模型可能同时硬扛两条，两边都做不好。

| 场景 | 推荐写法 |
| --- | --- |
| 安全规则、必填字段、绝对禁止的操作 | 用「永远」「绝不」 |
| 要不要搜索、要不要追问用户 | 用条件句 |

示例：把「回答前必须先搜索」改成「收到问题后先判断现有上下文能否直接回答；能就直接回复，不用再搜。」

## 变化三：角色定义回归，但要短

「你是一个拥有 20 年经验的顶级分析师……」这种大段人设，在 GPT-5.5 上性价比不高。官方推荐的 **7 段式结构**里，前两段仍是「角色」和「人设」，但写法变了：

- **角色（Role）**：1～2 句话说清功能和上下文即可。
- **人设（Personality）**：管语气、温度、协作风格，而不是堆履历。

官方给了两种人设参考：

- **稳重型**：靠谱协作者，沉稳直接，假设用户有能力，能推进就别反复确认。
- **表达型**：对话感强，聪明好奇，问题模糊时多问，上下文够了就果断给建议。

「人设」管怎么说，「协作风格」管怎么做（模糊需求是猜还是追问），建议分开写。

## 变化四：多步任务先「确认收到」，再动手

复杂任务里，模型可能先内部推理很久，界面上一段时间没有输出，用户容易以为卡住了。官方建议在提示词里加一条 **Preamble（开场确认）** 规则：

> 处理多步任务时，在调用任何工具之前，先回复一句简短、用户可见的更新，说明已收到请求以及第一步要做什么，控制在一两句话。

Codex 等产品已经在用类似模式（例如「正在分析代码库，先从测试文件开始」），对 API 和 ChatGPT 长任务都适用。

## 变化五：必须写「停止条件」

只写「搜索相关信息然后回答」，却不定义何时停，模型可能反复检索，token 涨、答案却更散。

两种常用策略：

1. **检索预算**：普通问答先搜一轮；首页结果已能支撑答案就直接回答。只有首页没答案、缺关键数据或用户要求全面覆盖时，再开第二轮。
2. **任务循环停止**：每完成一轮工具调用后自问——现有证据能否回答用户核心问题？能就停。

## 变化六：官方 7 段式提示词骨架

复杂任务可以用下面骨架，每段保持简短，只写会改变行为的信息：

| 段落 | 说明 |
| --- | --- |
| 角色（Role） | 1～2 句，定义功能与上下文 |
| 人设（Personality） | 语气、风格、协作方式 |
| 目标（Goal） | 用户可见的最终产出 |
| 成功标准（Success） | 什么条件算完成 |
| 约束（Constraints） | 安全、商业、证据、副作用边界 |
| 输出（Output） | 格式、长度、语气 |
| 停止规则（Stop rules） | 何时重试、回退、拒绝、追问或停止 |

注意：**不是每次都要写满 7 段**。简单问答可能只要「目标 + 输出」；多工具 Agent 才需要全套。OpenAI 开发者后台也提供了 **Optimize** 工具，可按该结构自动改写现有 Prompt。

## 变化七：格式控制与简洁表达

GPT-5.5 默认更简洁直接。API 侧可用 `text.verbosity`（默认 `medium`，需要短答可试 `low`）；复杂格式尽量用 **Structured Outputs**，少在 Prompt 里堆 JSON 样例。

提示词里也可以直接约束版式，例如：

> 默认用自然段落回复；标题、加粗、列表只在帮助理解时使用。

改写类任务建议先说「保留什么」，再说「怎么改」：

> 保留原文结构、长度和文风，在此基础上提升清晰度；不要新增观点或段落，除非用户要求。

不写「保留项」时，模型容易默认扩写、加戏。

## 迁移时别忘了：推理强度从低档位试起

除了 Prompt，**`reasoning.effort`** 也要重新评测。GPT-5.5 默认 `medium`，很多任务在 `low` 就够；不是越强越好——指令冲突、停止条件模糊时，开太高可能过度搜索、绕远路。建议用固定测试集做 A/B，先 `low` / `medium`，有明确收益再升 `high` / `xhigh`。

## 总结：一句话记住新写法

**说清楚你要什么，别教它怎么做。**

| 维度 | GPT-5.4 及之前 | GPT-5.5 |
| --- | --- | --- |
| 流程指定 | 详细分步 | 只描述结果 |
| 指令语气 | 大量绝对指令 | 红线用绝对，其余用条件 |
| 角色定义 | 大段背景 | 1～2 句功能 + 人设 |
| 多步任务 | 直接执行 | 先确认再执行 |
| 停止条件 | 常省略 | 建议明确写出 |
| 结构 | 自由发挥 | 7 段式骨架（按需裁剪） |
| 格式控制 | 依赖默认 | API 参数 + Prompt 引导 |

改完 Prompt 后，建议在真实任务上跑一轮对比测试。若你想直接体验 GPT 对话能力，可通过下方入口进入 LimaxAI 聊天页，选择对应模型开始试用。

{cta_bottom}
""",
    },
    "en": {
        "title": "OpenAI's Official GPT 5.5 Prompt Guide: 7 Key Changes Summarized",
        "description": "OpenAI's GPT-5.5 prompt guide shifts from process-first to outcome-first prompts. Learn 7 key changes, the 7-part skeleton, stop rules, and a comparison table to rewrite your ChatGPT prompts.",
        "tags": '["chatgpt", "gpt 5.5", "gpt tutorial"]',
        "cta": "Start Using GPT",
        "author": "LimaxAI Team",
        "body": """When GPT-5.5 launched, OpenAI published an official prompting guide. If you still write step-by-step "micromanagement" prompts from older models, you may be narrowing what the model can do. This article turns the seven most important shifts into practical guidance you can apply today.

Keywords: chatgpt, gpt 5.5, gpt tutorial.

Published: May 22, 2026

{cta_top}

![OpenAI GPT 5.5 prompt guide seven key changes]({hero})

## Background: why legacy prompts need a rewrite

The docs are explicit: older prompts often **over-specify the process** because earlier models needed more guardrails. With GPT-5.5, that detail can become noise, shrink the search space, and produce mechanical answers.

Django co-creator Simon Willison noted that OpenAI recommends **rewriting from scratch** rather than assuming tuned legacy prompts still work. Treat migration as a new product design—not a model-name swap.

## Change 1: from hand-holding to outcome-first

**Old (process-first):**

> Check A, then B, compare fields, reason through exceptions, pick a tool, then explain every step to the user.

**New (outcome-first):**

> Fully resolve the user's issue. Use policy and account data to decide what to do first, then report what was done and what remains. Ask only the single most critical question if information is missing.

**Describe the destination, not every turn on the map.** GPT-5.5 plans its own path; a rigid script can block better routes.

## Change 2: fewer absolutes—reserve them for real red lines

Phrases like "always JSON," "never exceed 500 words," or "must search before answering" were common guardrails. GPT-5.5 is **highly sensitive to absolutes**—conflicting "must" rules can make the model try to satisfy both and fail both.

| Situation | Recommended style |
| --- | --- |
| Safety, required fields, hard bans | Use always/never |
| Whether to search or ask the user | Use conditional rules |

Example: replace "must search before answering" with "If existing context is sufficient, answer directly without searching."

## Change 3: roles return—but stay short

Long résumé-style personas ("20-year expert analyst…") are low ROI on GPT-5.5. The official **seven-part skeleton** still starts with **Role** and **Personality**, but shorter:

- **Role:** 1–2 sentences on function and context.
- **Personality:** tone, warmth, and collaboration style—not a CV.

Two personality templates from the guide:

- **Steady:** reliable, calm, direct; assume good intent; advance work without unnecessary check-ins.
- **Expressive:** conversational, curious, witty when appropriate; ask when ambiguous, decide when context is enough.

Separate **how it sounds** from **how it behaves** (guess vs. clarify on vague asks).

## Change 4: acknowledge multi-step work before executing

On complex jobs the model may reason silently; users think it froze. Add a **preamble** rule:

> Before any tool call on multi-step tasks, send a short user-visible update confirming receipt and the first action—one or two sentences.

Products like Codex already use this pattern ("Analyzing your repo, starting with tests…") for APIs and long ChatGPT tasks alike.

## Change 5: define stop conditions

"Search, then answer" without a stop rule can loop retrieval, burn tokens, and dilute answers.

Two patterns:

1. **Retrieval budget:** one search round by default; answer if page-one evidence is enough. Second round only if page one lacks the answer, key data is missing, or the user wants exhaustive coverage.
2. **Loop stop:** after each tool round, ask whether existing evidence answers the core question; if yes, stop.

## Change 6: the official seven-part prompt skeleton

For complex work, use this scaffold—keep each section short and behavior-changing:

| Section | Purpose |
| --- | --- |
| Role | 1–2 sentences: function and context |
| Personality | Tone and collaboration style |
| Goal | User-visible deliverable |
| Success | Definition of done |
| Constraints | Safety, business, evidence, side effects |
| Output | Format, length, voice |
| Stop rules | When to retry, escalate, refuse, ask, or stop |

You **do not need all seven every time**—simple Q&A may need only Goal + Output; multi-tool agents need the full set. OpenAI's developer UI also offers an **Optimize** action to reshape prompts against this structure.

## Change 7: format control and concise defaults

GPT-5.5 defaults to concise, direct answers. Use API `text.verbosity` (`medium` default; try `low` for shorter replies) and **Structured Outputs** instead of huge JSON examples in the prompt.

You can also steer layout in prose:

> Default to natural paragraphs; headings, bold, and lists only when they aid comprehension.

For rewrite tasks, state **what to preserve** before **how to edit**:

> Keep structure, length, and voice; improve clarity only—no new claims or paragraphs unless requested.

Without preserve rules, the model often expands and restructures by default.

## Migration tip: tune reasoning effort from the low end

Beyond prompts, re-evaluate **`reasoning.effort`**. Default is `medium`; many jobs work at `low`. Higher is not automatically better—weak stop rules plus high effort can mean over-searching. A/B on a fixed eval set; step up only when quality gains justify latency and cost.

## Summary in one line

**Say what you want—not how to do every step.**

| Dimension | GPT-5.4 and earlier | GPT-5.5 |
| --- | --- | --- |
| Process | Detailed steps | Outcomes |
| Tone | Many absolutes | Absolutes for red lines only |
| Role | Long bios | Short role + personality |
| Multi-step | Execute immediately | Preamble first |
| Stopping | Often omitted | Should be explicit |
| Structure | Free-form | Seven-part skeleton (trim as needed) |
| Format | Defaults | API params + prompt guidance |

After rewriting, run side-by-side tests on real tasks. To try GPT in chat, use the button below on LimaxAI with your preferred model.

{cta_bottom}
""",
    },
}
# fmt: on

# Additional locales: compact but complete translations
MORE_LOCALES = {
    "zh-tw": {
        "title": "OpenAI 官方發布 GPT 5.5 提示詞指南，我整理了 7 個關鍵變化！",
        "description": "OpenAI 發布 GPT-5.5 官方提示詞指南：從流程導向轉向結果導向。解讀 7 個關鍵變化、7 段式骨架與停止條件，附對照表，快速改寫 ChatGPT Prompt。",
        "tags": '["chatgpt", "gpt 5.5", "gpt教程"]',
        "cta": "開始使用 GPT",
        "author": "LimaxAI Team",
    },
    "ja": {
        "title": "OpenAI 公式 GPT 5.5 プロンプトガイド：7つの重要な変化をまとめた",
        "description": "OpenAI の GPT-5.5 公式プロンプトガイドはプロセス型から結果重視へ。7つの変化、7部構成、停止条件と比較表で ChatGPT プロンプトを書き直す。",
        "tags": '["chatgpt", "gpt 5.5", "gptチュートリアル"]',
        "cta": "GPTを使い始める",
        "author": "LimaxAI Team",
    },
    "ko": {
        "title": "OpenAI 공식 GPT 5.5 프롬프트 가이드: 핵심 변화 7가지 정리",
        "description": "OpenAI GPT-5.5 공식 프롬프트 가이드는 프로세스 중심에서 결과 중심으로 전환합니다. 7가지 변화, 7단 구조, 중단 조건과 비교표로 ChatGPT 프롬프트를 개선하세요.",
        "tags": '["chatgpt", "gpt 5.5", "gpt 튜토리얼"]',
        "cta": "GPT 사용 시작",
        "author": "LimaxAI Team",
    },
    "es": {
        "title": "OpenAI publica la guía de prompts de GPT 5.5: 7 cambios clave",
        "description": "La guía oficial de GPT-5.5 pasa de prompts por procesos a prompts orientados a resultados. 7 cambios, estructura en 7 partes, reglas de parada y tabla comparativa.",
        "tags": '["chatgpt", "gpt 5.5", "tutorial gpt"]',
        "cta": "Empezar a usar GPT",
        "author": "LimaxAI Team",
    },
    "fr": {
        "title": "OpenAI publie le guide de prompts GPT 5.5 : 7 changements clés",
        "description": "Le guide officiel GPT-5.5 privilégie les prompts orientés résultat. 7 changements, squelette en 7 parties, règles d'arrêt et tableau comparatif pour réécrire vos prompts ChatGPT.",
        "tags": '["chatgpt", "gpt 5.5", "tutoriel gpt"]',
        "cta": "Commencer avec GPT",
        "author": "LimaxAI Team",
    },
    "de": {
        "title": "OpenAI veröffentlicht den GPT-5.5-Prompt-Leitfaden: 7 zentrale Änderungen",
        "description": "Der offizielle GPT-5.5-Leitfaden setzt auf ergebnisorientierte Prompts. 7 Änderungen, 7-teiliges Gerüst, Stoppregeln und Vergleichstabelle für ChatGPT-Prompts.",
        "tags": '["chatgpt", "gpt 5.5", "gpt tutorial"]',
        "cta": "GPT jetzt nutzen",
        "author": "LimaxAI Team",
    },
    "pt": {
        "title": "OpenAI lança o guia de prompts do GPT 5.5: 7 mudanças essenciais",
        "description": "O guia oficial do GPT-5.5 prioriza prompts orientados a resultados. 7 mudanças, estrutura em 7 partes, regras de parada e tabela comparativa para reescrever prompts do ChatGPT.",
        "tags": '["chatgpt", "gpt 5.5", "tutorial gpt"]',
        "cta": "Começar a usar o GPT",
        "author": "LimaxAI Team",
    },
    "it": {
        "title": "OpenAI pubblica la guida ai prompt di GPT 5.5: 7 cambiamenti chiave",
        "description": "La guida ufficiale GPT-5.5 sposta i prompt da processo a risultato. 7 cambiamenti, scheletro in 7 parti, regole di stop e tabella comparativa per riscrivere i prompt ChatGPT.",
        "tags": '["chatgpt", "gpt 5.5", "tutorial gpt"]',
        "cta": "Inizia a usare GPT",
        "author": "LimaxAI Team",
    },
    "ru": {
        "title": "OpenAI выпустил официальное руководство по промптам GPT 5.5: 7 ключевых изменений",
        "description": "Официальный гайд GPT-5.5 переходит от пошаговых инструкций к промптам с фокусом на результат. 7 изменений, 7-блочная структура, правила остановки и сравнительная таблица.",
        "tags": '["chatgpt", "gpt 5.5", "урок gpt"]',
        "cta": "Начать использовать GPT",
        "author": "LimaxAI Team",
    },
    "ar": {
        "title": "OpenAI تنشر دليل مطالبات GPT 5.5 الرسمي: 7 تغييرات أساسية",
        "description": "دليل GPT-5.5 الرسمي ينتقل من التوجيه خطوة بخطوة إلى مطالبات مبنية على النتائج. 7 تغييرات وهيكل من 7 أجزاء وقواعد إيقاف وجدول مقارنة.",
        "tags": '["chatgpt", "gpt 5.5", "دليل gpt"]',
        "cta": "ابدأ استخدام GPT",
        "author": "LimaxAI Team",
    },
    "id": {
        "title": "OpenAI merilis panduan prompt GPT 5.5 resmi: 7 perubahan penting",
        "description": "Panduan resmi GPT-5.5 beralih dari prompt berbasis proses ke berbasis hasil. 7 perubahan, kerangka 7 bagian, aturan berhenti, dan tabel perbandingan untuk menulis ulang prompt ChatGPT.",
        "tags": '["chatgpt", "gpt 5.5", "tutorial gpt"]',
        "cta": "Mulai Gunakan GPT",
        "author": "LimaxAI Team",
    },
    "ms": {
        "title": "OpenAI keluarkan panduan prompt GPT 5.5 rasmi: 7 perubahan utama",
        "description": "Panduan rasmi GPT-5.5 beralih daripada prompt berasaskan proses kepada berasaskan hasil. 7 perubahan, rangka 7 bahagian, peraturan henti dan jadual perbandingan.",
        "tags": '["chatgpt", "gpt 5.5", "tutorial gpt"]',
        "cta": "Mula Gunakan GPT",
        "author": "LimaxAI Team",
    },
    "vi": {
        "title": "OpenAI phát hành hướng dẫn prompt GPT 5.5: 7 thay đổi quan trọng",
        "description": "Hướng dẫn chính thức GPT-5.5 chuyển từ prompt theo quy trình sang theo kết quả. 7 thay đổi, khung 7 phần, điều kiện dừng và bảng so sánh để viết lại prompt ChatGPT.",
        "tags": '["chatgpt", "gpt 5.5", "hướng dẫn gpt"]',
        "cta": "Bắt đầu dùng GPT",
        "author": "LimaxAI Team",
    },
    "th": {
        "title": "OpenAI เปิดตัวคู่มือพรอมต์ GPT 5.5 อย่างเป็นทางการ: 7 การเปลี่ยนแปลงสำคัญ",
        "description": "คู่มือ GPT-5.5 อย่างเป็นทางการเปลี่ยนจากพรอมต์แบบขั้นตอนเป็นผลลัพธ์ 7 การเปลี่ยนแปลง โครงสร้าง 7 ส่วน กฎการหยุด และตารางเปรียบเทียบ",
        "tags": '["chatgpt", "gpt 5.5", "บทช่วยสอน gpt"]',
        "cta": "เริ่มใช้ GPT",
        "author": "LimaxAI Team",
    },
    "tr": {
        "title": "OpenAI resmi GPT 5.5 istem kılavuzunu yayınladı: 7 kritik değişiklik",
        "description": "Resmi GPT-5.5 kılavuzu süreç odaklı istemlerden sonuç odaklı istemlere geçiyor. 7 değişiklik, 7 bölümlü iskelet, durma kuralları ve karşılaştırma tablosu.",
        "tags": '["chatgpt", "gpt 5.5", "gpt eğitimi"]',
        "cta": "GPT'yi Kullanmaya Başla",
        "author": "LimaxAI Team",
    },
    "hi": {
        "title": "OpenAI ने GPT 5.5 प्रॉम्प्ट गाइड जारी की: 7 महत्वपूर्ण बदलाव",
        "description": "आधिकारिक GPT-5.5 गाइड प्रक्रिया-आधारित से परिणाम-आधारित प्रॉम्प्ट की ओर जाती है। 7 बदलाव, 7-भाग संरचना, स्टॉप नियम और तुलना तालिका।",
        "tags": '["chatgpt", "gpt 5.5", "gpt ट्यूटोरियल"]',
        "cta": "GPT का उपयोग शुरू करें",
        "author": "LimaxAI Team",
    },
    "nl": {
        "title": "OpenAI publiceert officiële GPT 5.5-promptgids: 7 belangrijke wijzigingen",
        "description": "De officiële GPT-5.5-gids verschuift van proces- naar resultaatgerichte prompts. 7 wijzigingen, 7-delig skelet, stopregels en vergelijkingstabel voor ChatGPT-prompts.",
        "tags": '["chatgpt", "gpt 5.5", "gpt tutorial"]',
        "cta": "GPT gaan gebruiken",
        "author": "LimaxAI Team",
    },
    "pl": {
        "title": "OpenAI opublikował oficjalny przewodnik promptów GPT 5.5: 7 kluczowych zmian",
        "description": "Oficjalny przewodnik GPT-5.5 przechodzi od promptów procesowych do zorientowanych na wynik. 7 zmian, szkielet 7 części, reguły zatrzymania i tabela porównawcza.",
        "tags": '["chatgpt", "gpt 5.5", "samouczek gpt"]',
        "cta": "Zacznij używać GPT",
        "author": "LimaxAI Team",
    },
    "sv": {
        "title": "OpenAI publicerar officiell GPT 5.5-promptguide: 7 viktiga förändringar",
        "description": "Den officiella GPT-5.5-guiden går från process- till resultatfokuserade prompts. 7 förändringar, 7-delad struktur, stoppregler och jämförelsetabell.",
        "tags": '["chatgpt", "gpt 5.5", "gpt guide"]',
        "cta": "Börja använda GPT",
        "author": "LimaxAI Team",
    },
    "uk": {
        "title": "OpenAI опублікував офіційний гайд із промптів GPT 5.5: 7 ключових змін",
        "description": "Офіційний гайд GPT-5.5 переходить від покрокових інструкцій до промптів із фокусом на результат. 7 змін, 7-блочна структура, правила зупинки та порівняльна таблиця.",
        "tags": '["chatgpt", "gpt 5.5", "урок gpt"]',
        "cta": "Почати використовувати GPT",
        "author": "LimaxAI Team",
    },
    "ro": {
        "title": "OpenAI a publicat ghidul oficial de prompturi GPT 5.5: 7 schimbări cheie",
        "description": "Ghidul oficial GPT-5.5 trece de la prompturi bazate pe proces la cele orientate spre rezultat. 7 schimbări, schelet în 7 părți, reguli de oprire și tabel comparativ.",
        "tags": '["chatgpt", "gpt 5.5", "tutorial gpt"]',
        "cta": "Începe să folosești GPT",
        "author": "LimaxAI Team",
    },
    "fa": {
        "title": "OpenAI راهنمای رسمی پرامپت GPT 5.5 را منتشر کرد: ۷ تغییر کلیدی",
        "description": "راهنمای رسمی GPT-5.5 از پرامپت‌های فرآیندمحور به نتیجه‌محور می‌رود. ۷ تغییر، اسکلت ۷ بخشی، قوانین توقف و جدول مقایسه برای بازنویسی پرامپت ChatGPT.",
        "tags": '["chatgpt", "gpt 5.5", "آموزش gpt"]',
        "cta": "شروع استفاده از GPT",
        "author": "LimaxAI Team",
    },
}


def shared_body(lang: str, meta: dict) -> str:
    """Generate full article body for locales using English structure with localized section titles."""
    # Section labels per language (7 changes + headers)
    t = SECTIONS.get(lang, _en_sections())
    return f"""{t['intro']}

{t['keywords']}

{t['published']}

{{cta_top}}

![{t['img_alt']}]({{hero}})

## {t['h_bg']}

{t['bg']}

## {t['h1']}

{t['c1']}

## {t['h2']}

{t['c2']}

| {t['tbl_h1']} | {t['tbl_h2']} |
| --- | --- |
| {t['tbl_r1']} | {t['tbl_r1b']} |
| {t['tbl_r2']} | {t['tbl_r2b']} |

{t['c2_ex']}

## {t['h3']}

{t['c3']}

## {t['h4']}

{t['c4']}

## {t['h5']}

{t['c5']}

## {t['h6']}

{t['c6_table']}

{t['c6_note']}

## {t['h7']}

{t['c7']}

## {t['h_mig']}

{t['mig']}

## {t['h_sum']}

{t['sum_line']}

{t['sum_table']}

{t['outro']}

{{cta_bottom}}
"""


SECTIONS = FULL_SECTIONS


def write_post(lang: str, meta: dict) -> None:
    path = ROOT / lang / f"{SLUG}.md"
    path.parent.mkdir(parents=True, exist_ok=True)

    if lang in ("zh-cn", "en"):
        body_template = meta["body"]
    else:
        body_template = shared_body(lang, meta)

    body = body_template.format(
        cta_top=cta_button(lang, meta["cta"], "32px"),
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
author: "{meta['author']}"
---

"""
    path.write_text(frontmatter + body, encoding="utf-8")
    print(f"Wrote {path.relative_to(ROOT.parents[2])}")


def main() -> None:
    all_meta = {**LOCALES}
    for lang, extra in MORE_LOCALES.items():
        merged = {**extra}
        if lang not in ("zh-cn", "en"):
            merged.setdefault("body", "")  # uses shared_body
        all_meta[lang] = merged

    for lang in [
        "en", "zh-cn", "zh-tw", "es", "ar", "pt", "id", "ms", "fr", "ru",
        "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl",
        "sv", "uk", "ro",
    ]:
        if lang not in all_meta:
            raise SystemExit(f"Missing locale: {lang}")
        write_post(lang, all_meta[lang])


if __name__ == "__main__":
    main()
