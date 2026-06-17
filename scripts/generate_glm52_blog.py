#!/usr/bin/env python3
"""Generate GLM-5.2 coding blog posts for all supported locales."""

from __future__ import annotations

from pathlib import Path

try:
    from glm52_full_sections import FULL_SECTIONS
except ImportError:
    from scripts.glm52_full_sections import FULL_SECTIONS  # type: ignore

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "blog"
SLUG = "glm-5-2-coding-long-horizon-tasks"
PUB_DATE = "2026-06-17"
HERO = "https://img.limaxai.com/aiweb/openai-260617-1.png"
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
        "title": "GLM-5.2 介绍：专注 Coding 与长程任务",
        "description": "智谱 AI 开源 GLM-5.2：1M 上下文、强化 Coding、Terminal-Bench 81.0。结合 ChatGPT、GPT-5.6 与 GPT 教程，在 LimaxAI 直接体验 GPT 对话。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程"]',
        "cta": "开始使用GPT",
        "body": """6 月 17 日，智谱 AI 正式上线并开源新一代旗舰模型 **GLM-5.2**。和前代 GLM-5.1 相比，这次升级的核心不是「刷榜分数」，而是把 **Coding 能力** 和 **长程任务** 做扎实——1M 无损上下文、更强的工程执行、MIT 开源，Day 0 适配多家国产算力平台。

关键词：chatgpt、GPT-5.6、gpt教程。

发布日期：2026年6月17日

{cta_top}

![GLM-5.2 介绍 专注 Coding 与长程任务]({hero})

## GLM-5.2 定位：Coding 优先，长程任务能跑完

GLM-5.2 面向两类高频场景：

| 场景 | 具体需求 | GLM-5.2 的应对 |
| --- | --- | --- |
| 工程 Coding | 多文件改动、调试、跑测试 | 强化代码生成与 Agent 执行 |
| 长程任务 | 跨多轮规划、实现、验收 | 1M 上下文稳定承载完整工程 |

官方把 GLM-5.2 定义为「长程任务旗舰」：不是单次问答更强，而是 **一个任务从开始到交付，上下文不断档**。

## 1M 上下文：能装下整个软件工程

GLM-5.2 实现了真正可用的 **1M token 上下文**（前代 GLM-5.1 约 200K）。这意味着：

- 中大型 monorepo 可以在 **单次对话** 里完成分析，不必频繁切分文件。
- 文档 + 实现 + 测试用例可以同时放进上下文，减少「模型忘了前面写了什么」的问题。
- 长程 Agent 工作流（规划 → 编码 → 调试 → 回归）有更大的「工作记忆」。

官方实测案例：模型一次性交付覆盖 **Web、移动端与小程序** 的完整应用，累计处理约 **88 万 tokens**，几乎用满 1M 窗口。这类任务如果上下文不够，往往中途就要人工拼接上下文，效率会掉一大截。

## 评测表现：开源第一，逼近 Claude Opus 4.8

在多个权威 Coding 评测里，GLM-5.2 是目前 **排名最高的开源模型**，与闭源头部模型的差距已缩到个位数百分点：

| 评测 | GLM-5.2 | 对比参考 |
| --- | --- | --- |
| Code Arena（前端盲测） | 全球可用模型第一 | 百万用户参与 |
| FrontierSWE | 仅比 Claude Opus 4.8 低约 1% | 超过 GPT-5.5 |
| Terminal-Bench 2.1 | **81.0** | GLM-5.1 为 63.5（+17.5） |
| SWE-bench Pro | **62.1** | GLM-5.1 为 58.4 |

Terminal-Bench 从 63.5 跳到 81.0，是这次升级最直观的数据——说明模型在 **终端/Agent 执行** 类任务上进步明显，而不只是静态代码补全。

## 架构升级：IndexShare 与 MTP

GLM-5.2 在架构上做了两项关键优化：

**IndexShare（稀疏注意力优化）**：在 1M 上下文长度下，每 token 计算量（FLOPs）降低约 **2.9 倍**。长上下文如果不做注意力优化，推理成本和延迟会快速膨胀；IndexShare 让「能用 1M」和「用得起 1M」更接近。

**MTP 层改进（推测解码）**：多 token 预测层的接受长度提升最高约 **20%**，加快长输出场景下的生成速度——对 Coding 任务里的大段代码输出尤其有用。

此外，GLM-5.2 提供 **high / max** 两档推理强度，开发者可以在「速度」和「深度思考」之间切换，类似其他前沿模型的 reasoning effort 设计。

## 开源、API 与国产算力适配

GLM-5.2 采用 **MIT 协议** 开源，权重已上线 Hugging Face 与 ModelScope，可自由下载、部署与商用。API 同步上线 BigModel 开放平台与 Z.ai。

线上推理 **Day 0** 完成与以下国产算力平台适配：

- 华为昇腾、平头哥、摩尔线程、寒武纪
- 昆仑芯、沐曦、海光、壁仞

对需要 **私有化部署** 或 **国产 GPU 推理** 的团队，这是落地时的重要加分项。模型也已向 GLM Coding Plan 全量用户开放。

## GPT 教程：Coding 模型很强，日常仍离不开 ChatGPT

GLM-5.2 专攻工程与长程 Agent，但日常写文档、头脑风暴、快速问答，**ChatGPT** 仍是最高频入口。在 **GPT-5.6** 全面开放前，建议先用 **GPT-5.4 / GPT-5.5** 练这几件事：

1. **任务拆步**：长程 Coding 前先列「目标 → 子任务 → 验收标准」，和 Agent 工作流同一套思路。
2. **上下文管理**：大项目先给目录结构和关键文件清单，再让模型深入，减少 1M 窗口里的无效 token。
3. **固定测试样本**：同一组 Coding 提示在不同模型/档位各跑一遍，记录通过率与耗时。
4. **推理档位对照**：类似 GLM-5.2 的 high/max，ChatGPT 也有不同 reasoning 档位——先摸清「快答」和「深想」各自适合什么任务。

想先在浏览器里体验 GPT 对话与模型切换，可点击下方按钮进入 LimaxAI（当前入口为 **gpt-5.4**，上新后可在模型列表切换）。

{cta_mid}

## 小结

| 项目 | 要点 |
| --- | --- |
| 定位 | Coding + 长程任务旗舰 |
| 上下文 | 1M token，可承载完整工程 |
| 评测 | Terminal-Bench 81.0；开源模型第一 |
| 架构 | IndexShare + MTP 推测解码 |
| 开源 | MIT；Hugging Face / ModelScope |
| 算力 | Day 0 适配 8 家国产平台 |
| 你的下一步 | 用 ChatGPT 练任务拆分与提示，再在 LimaxAI 体验 GPT |

GLM-5.2 把开源 Coding 模型的天花板又抬高了一档。无论你用它跑长程 Agent，还是继续用 **ChatGPT** 处理日常协作，先把「任务怎么拆、上下文怎么管」练熟，比追每一个新模型名更实在。

{cta_bottom}
""",
    },
    "en": {
        "title": "GLM-5.2 Intro: Built for Coding and Long-Horizon Tasks",
        "description": "Zhipu open-sources GLM-5.2: 1M context, stronger coding, Terminal-Bench 81.0. Plus ChatGPT, GPT-5.6, and a GPT tutorial—try it on LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "Start Using GPT",
        "body": """On June 17, 2026, Zhipu AI officially launched and open-sourced its new flagship **GLM-5.2**. Compared with GLM-5.1, the upgrade is less about one-shot benchmark scores and more about making **coding** and **long-horizon tasks** actually work—1M lossless context, stronger engineering execution, MIT license, and Day 0 support on multiple domestic compute platforms.

Keywords: chatgpt, GPT-5.6, gpt tutorial.

Published: June 17, 2026

{cta_top}

![GLM-5.2 intro coding long-horizon tasks]({hero})

## What GLM-5.2 is for: coding first, finish long jobs

GLM-5.2 targets two high-frequency workflows:

| Scenario | Need | GLM-5.2 response |
| --- | --- | --- |
| Engineering coding | Multi-file edits, debug, tests | Stronger code generation and agent execution |
| Long-horizon tasks | Plan → build → verify across turns | 1M context that holds the whole project |

Zhipu positions GLM-5.2 as a long-horizon flagship: the win is not a single clever answer, but **one task running start to delivery without context collapse**.

## 1M context: room for an entire codebase

GLM-5.2 ships a usable **1M-token context** (GLM-5.1 was around 200K). That means:

- Mid-size monorepos can be analyzed in **one session** without constant chunking.
- Docs, implementation, and tests can sit in the same window—fewer “the model forgot what it wrote” moments.
- Long agent loops (plan → code → debug → regression) get a much larger working memory.

In an official stress test, the model delivered a full app spanning **web, mobile, and mini-program** in one run—about **880K tokens** processed, nearly filling the 1M window. Without enough context, humans end up stitching history by hand; throughput drops fast.

## Benchmarks: top open model, closing in on Claude Opus 4.8

On major coding evals, GLM-5.2 ranks as the **strongest open-weight model**, within single-digit points of closed frontier models:

| Benchmark | GLM-5.2 | Reference |
| --- | --- | --- |
| Code Arena (frontend blind test) | #1 among available models | Millions of user votes |
| FrontierSWE | ~1% behind Claude Opus 4.8 | Ahead of GPT-5.5 |
| Terminal-Bench 2.1 | **81.0** | GLM-5.1 was 63.5 (+17.5) |
| SWE-bench Pro | **62.1** | GLM-5.1 was 58.4 |

The jump from 63.5 to 81.0 on Terminal-Bench is the clearest signal—gains show up in **terminal/agent execution**, not just static completion.

## Architecture: IndexShare and MTP

Two engineering changes matter for builders:

**IndexShare (sparse attention)**: at 1M context, per-token FLOPs drop about **2.9×**. Long windows are useless if inference cost explodes; IndexShare makes “1M available” closer to “1M affordable.”

**Improved MTP (speculative decoding)**: acceptance length rises up to **20%**, speeding long outputs—especially large code generations.

GLM-5.2 also offers **high / max** reasoning effort tiers so teams can trade latency for depth, similar to other frontier models.

## Open weights, APIs, and domestic compute

GLM-5.2 is **MIT-licensed**, with weights on Hugging Face and ModelScope—download, deploy, and commercial use allowed. APIs are live on BigModel and Z.ai.

Day 0 inference support includes:

- Huawei Ascend, T-Head, Moore Threads, Cambricon
- Kunlunxin, MetaX, Hygon, Biren

For teams needing **on-prem** or **domestic GPU** inference, that matters. GLM Coding Plan users already have access.

## GPT tutorial: great coding model—but ChatGPT still runs your day

GLM-5.2 is built for engineering agents; daily drafting, brainstorming, and quick Q&A still flow through **ChatGPT**. Before **GPT-5.6** is everywhere, practice on **GPT-5.4 / GPT-5.5**:

1. **Split tasks**—goal → subtasks → acceptance criteria, same mindset as agent workflows.
2. **Manage context**—give directory layout and key files before deep edits; don’t waste the window.
3. **Fixed test prompts**—run the same coding asks across models/tiers; log pass rate and latency.
4. **Compare reasoning tiers**—like GLM-5.2 high/max, ChatGPT has fast vs deep modes; learn which fits which job.

Use the button below to open LimaxAI chat (**gpt-5.4** today; pick newer models when they appear).

{cta_mid}

## Summary

| Item | Takeaway |
| --- | --- |
| Focus | Coding + long-horizon flagship |
| Context | 1M tokens for whole projects |
| Benchmarks | Terminal-Bench 81.0; top open model |
| Architecture | IndexShare + MTP speculative decoding |
| License | MIT; Hugging Face / ModelScope |
| Compute | Day 0 on 8 domestic platforms |
| Next step | Practice task splitting in ChatGPT; try GPT on LimaxAI |

GLM-5.2 raises the open coding ceiling again. Whether you run long agents on GLM or keep **ChatGPT** for daily work, getting task design and context hygiene right beats chasing every new model name.

{cta_bottom}
""",
    },
}

MORE_LOCALES: dict[str, dict] = {
    "zh-tw": {
        "title": "GLM-5.2 介紹：專注 Coding 與長程任務",
        "description": "智譜 AI 開源 GLM-5.2：1M 上下文、強化 Coding、Terminal-Bench 81.0。結合 ChatGPT、GPT-5.6 與 GPT 教程，在 LimaxAI 直接體驗 GPT 對話。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程"]',
        "cta": "開始使用 GPT",
    },
    "ja": {
        "title": "GLM-5.2紹介：Codingと長期タスクに特化",
        "description": "智譜AIがGLM-5.2をオープンソース化：1Mコンテキスト、Coding強化、Terminal-Bench 81.0。ChatGPT・GPT-5.6・GPTチュートリアル。LimaxAIで体験。",
        "tags": '["chatgpt", "GPT-5.6", "gptチュートリアル"]',
        "cta": "GPTを使い始める",
    },
    "ko": {
        "title": "GLM-5.2 소개: Coding과 장기 작업에 특화",
        "description": "智谱 AI GLM-5.2 오픈소스: 1M 컨텍스트, Coding 강화, Terminal-Bench 81.0. ChatGPT·GPT-5.6·GPT 튜토리얼. LimaxAI에서 체험.",
        "tags": '["chatgpt", "GPT-5.6", "gpt 튜토리얼"]',
        "cta": "GPT 사용 시작",
    },
    "es": {
        "title": "GLM-5.2: enfocado en Coding y tareas de largo horizonte",
        "description": "Zhipu open-source GLM-5.2: contexto 1M, Coding reforzado, Terminal-Bench 81.0. ChatGPT, GPT-5.6 y tutorial GPT en LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Empezar a usar GPT",
    },
    "fr": {
        "title": "GLM-5.2 : Coding et tâches longues",
        "description": "Zhipu open-source GLM-5.2 : contexte 1M, Coding renforcé, Terminal-Bench 81.0. ChatGPT, GPT-5.6 et tutoriel GPT sur LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutoriel gpt"]',
        "cta": "Commencer avec GPT",
    },
    "de": {
        "title": "GLM-5.2: Coding und Langzeit-Aufgaben",
        "description": "Zhipu open-source GLM-5.2: 1M Kontext, stärkeres Coding, Terminal-Bench 81.0. ChatGPT, GPT-5.6 und GPT-Tutorial auf LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "GPT jetzt nutzen",
    },
    "pt": {
        "title": "GLM-5.2: foco em Coding e tarefas longas",
        "description": "Zhipu open-source GLM-5.2: contexto 1M, Coding reforçado, Terminal-Bench 81.0. ChatGPT, GPT-5.6 e tutorial GPT no LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Começar a usar o GPT",
    },
    "it": {
        "title": "GLM-5.2: Coding e compiti a lungo orizzonte",
        "description": "Zhipu open-source GLM-5.2: contesto 1M, Coding potenziato, Terminal-Bench 81.0. ChatGPT, GPT-5.6 e tutorial GPT su LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Inizia a usare GPT",
    },
    "ru": {
        "title": "GLM-5.2: Coding и длинные задачи",
        "description": "Zhipu open-source GLM-5.2: контекст 1M, усиленный Coding, Terminal-Bench 81.0. ChatGPT, GPT-5.6 и урок GPT на LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt"]',
        "cta": "Начать использовать GPT",
    },
    "ar": {
        "title": "GLM-5.2: التركيز على Coding والمهام طويلة الأمد",
        "description": "Zhipu مفتوح المصدر GLM-5.2: سياق 1M، Coding أقوى، Terminal-Bench 81.0. ChatGPT وGPT-5.6 ودليل GPT على LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "دليل gpt"]',
        "cta": "ابدأ استخدام GPT",
    },
    "id": {
        "title": "GLM-5.2: fokus Coding dan tugas jangka panjang",
        "description": "Zhipu open-source GLM-5.2: konteks 1M, Coding diperkuat, Terminal-Bench 81.0. ChatGPT, GPT-5.6, tutorial GPT di LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Mulai Gunakan GPT",
    },
    "ms": {
        "title": "GLM-5.2: fokus Coding dan tugas jangka panjang",
        "description": "Zhipu open-source GLM-5.2: konteks 1M, Coding diperkukuh, Terminal-Bench 81.0. ChatGPT, GPT-5.6, tutorial GPT di LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Mula Gunakan GPT",
    },
    "vi": {
        "title": "GLM-5.2: tập trung Coding và tác vụ dài hạn",
        "description": "Zhipu open-source GLM-5.2: ngữ cảnh 1M, Coding mạnh hơn, Terminal-Bench 81.0. ChatGPT, GPT-5.6, hướng dẫn GPT trên LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "hướng dẫn gpt"]',
        "cta": "Bắt đầu dùng GPT",
    },
    "th": {
        "title": "GLM-5.2: เน้น Coding และงานระยะยาว",
        "description": "Zhipu open-source GLM-5.2: บริบท 1M Coding แข็งแกร่ง Terminal-Bench 81.0 ChatGPT GPT-5.6 บทช่วยสอน GPT บน LimaxAI",
        "tags": '["chatgpt", "GPT-5.6", "บทช่วยสอน gpt"]',
        "cta": "เริ่มใช้ GPT",
    },
    "tr": {
        "title": "GLM-5.2: Coding ve uzun vadeli görevler",
        "description": "Zhipu open-source GLM-5.2: 1M bağlam, güçlü Coding, Terminal-Bench 81.0. ChatGPT, GPT-5.6 ve GPT eğitimi LimaxAI'da.",
        "tags": '["chatgpt", "GPT-5.6", "gpt eğitimi"]',
        "cta": "GPT'yi Kullanmaya Başla",
    },
    "hi": {
        "title": "GLM-5.2: Coding और लंबी अवधि के कार्य",
        "description": "Zhipu open-source GLM-5.2: 1M संदर्भ, मजबूत Coding, Terminal-Bench 81.0. ChatGPT, GPT-5.6, GPT ट्यूटोरियल LimaxAI पर।",
        "tags": '["chatgpt", "GPT-5.6", "gpt ट्यूटोरियल"]',
        "cta": "GPT का उपयोग शुरू करें",
    },
    "nl": {
        "title": "GLM-5.2: Coding en langetermijntaken",
        "description": "Zhipu open-source GLM-5.2: 1M context, sterker Coding, Terminal-Bench 81.0. ChatGPT, GPT-5.6 en GPT-tutorial op LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "GPT gaan gebruiken",
    },
    "pl": {
        "title": "GLM-5.2: Coding i zadania długoterminowe",
        "description": "Zhipu open-source GLM-5.2: kontekst 1M, wzmocniony Coding, Terminal-Bench 81.0. ChatGPT, GPT-5.6 i samouczek GPT na LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "samouczek gpt"]',
        "cta": "Zacznij używać GPT",
    },
    "sv": {
        "title": "GLM-5.2: Coding och långsiktiga uppgifter",
        "description": "Zhipu open-source GLM-5.2: 1M kontext, starkare Coding, Terminal-Bench 81.0. ChatGPT, GPT-5.6 och GPT-guide på LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt guide"]',
        "cta": "Börja använda GPT",
    },
    "uk": {
        "title": "GLM-5.2: Coding і довгострокові задачі",
        "description": "Zhipu open-source GLM-5.2: контекст 1M, посилений Coding, Terminal-Bench 81.0. ChatGPT, GPT-5.6 і урок GPT на LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt"]',
        "cta": "Почати використовувати GPT",
    },
    "ro": {
        "title": "GLM-5.2: Coding și sarcini pe termen lung",
        "description": "Zhipu open-source GLM-5.2: context 1M, Coding îmbunătățit, Terminal-Bench 81.0. ChatGPT, GPT-5.6 și tutorial GPT pe LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Începe să folosești GPT",
    },
    "fa": {
        "title": "GLM-5.2: تمرکز بر Coding و وظایف بلندمدت",
        "description": "Zhipu متن‌باز GLM-5.2: زمینه 1M، Coding قوی‌تر، Terminal-Bench 81.0. ChatGPT، GPT-5.6 و آموزش GPT در LimaxAI.",
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

## {t['h_focus']}

{t['focus_intro']}

{t['focus_table']}

{t['focus_note']}

## {t['h_context']}

{t['context']}

## {t['h_bench']}

{t['bench_intro']}

{t['bench_table']}

{t['bench_note']}

## {t['h_arch']}

{t['arch']}

## {t['h_open']}

{t['open']}

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
