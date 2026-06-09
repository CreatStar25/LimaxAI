#!/usr/bin/env python3
"""Generate OpenAI third-phase blog posts for all supported locales."""

from __future__ import annotations

from pathlib import Path

try:
    from openai_third_phase_full_sections import FULL_SECTIONS
except ImportError:
    from scripts.openai_third_phase_full_sections import FULL_SECTIONS  # type: ignore

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "blog"
SLUG = "openai-third-phase-ai-accessible-safe"
PUB_DATE = "2026-06-09"
HERO = "https://img.limaxai.com/aiweb/openai-260609-1.png"
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
        "title": "OpenAI 宣布进入第三发展阶段：让 AI 普及、易用且安全",
        "description": "山姆·奥尔特曼与首席科学家联合发文，OpenAI 迈入第三阶段：AI 供给充足、成本亲民、安全易用。结合 ChatGPT、GPT-5.6 与 GPT 教程，在 LimaxAI 直接体验。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程"]',
        "cta": "开始使用GPT",
        "body": """距离 **ChatGPT** 把生成式 AI 带进大众视野，已经过去三年半。当地时间 6 月 9 日，OpenAI 首席执行官山姆·奥尔特曼与首席科学家雅各布·帕霍茨基联合发布博文，宣布公司正式进入 **第三发展阶段**——核心命题是：如何让先进 AI **供给充足、成本亲民、安全实用、上手简单**，让个人和组织都能真正用起来。

关键词：chatgpt、GPT-5.6、gpt教程。

发布日期：2026年6月9日

{cta_top}

![OpenAI 宣布进入第三发展阶段 让 AI 普及易用且安全]({hero})

## 三个发展阶段：从技术研发到普及落地

奥尔特曼和帕霍茨基在文中回顾了 OpenAI 走过的路径，并把未来工作框定在三个阶段里：

| 阶段 | 重点 | 关键动作 |
| --- | --- | --- |
| 第一阶段 | 通用人工智能（AGI）技术研发 | 基础研究、模型训练、能力突破 |
| 第二阶段 | 全球产品落地 | 推出 ChatGPT 等产品，研究真实使用场景 |
| 第三阶段（当前） | AI 普及、易用、安全可靠 | 扩大供给、降低成本、把能力变成日常工具 |

他们写道：「经济格局正围绕人工智能重塑。顶尖模型能力只是一部分，更重要的是把技术变成能帮人做事的 **实用工具**。」第三阶段要回答的不是「模型还能多强」，而是「普通人能不能便宜、放心、简单地用上」。

## 第三阶段的三大核心目标

OpenAI 在博文中列出了三项长期方向：

| 目标 | 具体含义 |
| --- | --- |
| 打造自动化 AI 研究员 | 让 AI 系统能自主推进科研与工程迭代，加速技术本身的前进 |
| 推动经济提速发展 | 把 AI 嵌入生产、服务与创新链条，释放可量化的经济价值 |
| 为每个人配备专属 AGI | 不是少数机构的特权，而是个人、团队乃至国家都能调用的智能助手 |

这三项目标彼此关联：更强的研究能力带来更好的产品，产品落地又反过来需要安全与可及性作为前提。

## 安全与治理：不追求全面自动化

OpenAI 在文中多次强调 **安全底线**。核心观点可以概括为：

- 强大系统必须 **契合人类意愿**，并 **始终处于人类管控之下**。
- 公司 **不追求全面自动化的未来**——那样的社会既缺少人的价值，也潜藏系统性风险。
- AI 应当 **帮助人追逐理想**，而不是脱离人类掌控自行运转。

与此同时，OpenAI 再次呼吁 **各国协同合作**，必要时成立国际机构，在风险可控的前提下协调前沿模型研发节奏——必要时甚至可以 **暂缓** 部分前沿工作，让社会配套与安全研究跟得上技术速度。

## 同日递交 IPO 申请

规划发布当天，OpenAI 还宣布已 **秘密提交首次公开募股（IPO）申请**。公司坦言，股票正式上市仍需等待较长时间，具体时间表尚未对外披露。

从资本层面看，第三阶段需要大量算力、人才与安全投入；IPO 筹备与「让 AI 普及且安全」的长期目标并行，也反映出 OpenAI 希望在更大范围内调配资源。

## 行业背景：Anthropic 呼吁给社会「踩刹车」

OpenAI 这篇规划让人联想到另一家头部 AI 公司 **Anthropic**。上周，Anthropic 研究人员发文称，前沿 AI 迭代速度可能过快，全球需要保留 **暂缓或临时叫停前沿研发** 的选项，以便安全对齐与社会配套机制跟上技术步伐。

两家公司的表述角度不同——OpenAI 强调普及与安全并行，Anthropic 更突出节奏控制——但共同点是：**下一阶段竞争不只看模型榜单，还要看治理框架是否跟得上**。

## GPT 教程：在第三阶段落地前，先把 ChatGPT 用熟

OpenAI 描绘的第三阶段，对普通用户来说还远未完全到来；眼下最实在的一步，是把 **ChatGPT** 用到日常工作和学习里。在 **GPT-5.6** 全面开放之前，建议先用 **GPT-5.4 / GPT-5.5** 练这几件事：

1. **任务写清边界**：说明输入是什么、输出要什么格式、哪些内容不能改。
2. **长文档先给结构**：先列目录和每节目标，再让模型展开，减少跑偏。
3. **把 AI 当协作伙伴**：复杂问题拆成多轮对话，每轮只解决一个子问题。
4. **固定样本做对比**：同一组提示在不同模型或推理档位各跑一遍，记录质量与耗时，便于新模型上线后快速评估。

想先在浏览器里体验 GPT 对话与模型切换，可点击下方按钮进入 LimaxAI（当前入口为 **gpt-5.4**，上新后可在模型列表切换）。

{cta_mid}

## 小结

| 项目 | 要点 |
| --- | --- |
| 阶段定位 | OpenAI 进入第三阶段：普及、易用、安全 |
| 核心目标 | 自动化 AI 研究员、经济提速、人人专属 AGI |
| 安全立场 | 人类管控、不追求全面自动化、国际协同 |
| 资本动作 | 同日秘密提交 IPO 申请 |
| 行业信号 | 头部实验室同时谈能力扩张与节奏治理 |
| 你的下一步 | 用 ChatGPT 练清需求与提示，再在 LimaxAI 体验 GPT |

AI 的第三阶段，本质上是把「能用的模型」变成「人人用得起的工具」。在那之前，把手里的 **ChatGPT** 用熟，往往比追逐每一个新名词更实在。

{cta_bottom}
""",
    },
    "en": {
        "title": "OpenAI Enters Third Development Phase: Making AI Accessible, Easy, and Safe",
        "description": "Altman and OpenAI's chief scientist outline phase three: abundant, affordable, safe AI for everyone. ChatGPT, GPT-5.6, and a practical GPT tutorial—try it on LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "Start Using GPT",
        "body": """It has been three and a half years since **ChatGPT** brought generative AI into the mainstream. On June 9, 2026, CEO Sam Altman and Chief Scientist Jakub Pachocki published a joint blog post saying OpenAI has entered its **third development phase**. The central question is no longer only “how capable can models get?” but how to make advanced AI **abundant, affordable, safe, practical, and easy to use** for individuals and organizations.

Keywords: chatgpt, GPT-5.6, gpt tutorial.

Published: June 9, 2026

{cta_top}

![OpenAI third development phase accessible easy safe AI]({hero})

## Three phases: from R&D to broad adoption

Altman and Pachocki recap OpenAI’s path and frame the work ahead in three stages:

| Phase | Focus | Key actions |
| --- | --- | --- |
| Phase 1 | AGI research and development | Foundational science, training, capability breakthroughs |
| Phase 2 | Global product rollout | Ship ChatGPT and related products; study real usage |
| Phase 3 (now) | Accessible, easy, safe AI | Expand supply, cut cost, turn capability into everyday tools |

They write that the economy is reshaping around AI. Top-tier model scores are only part of the story—the harder part is turning technology into **useful tools** that help people get things done.

## Three core goals for phase three

OpenAI lists three long-term directions:

| Goal | What it means |
| --- | --- |
| Build automated AI researchers | Systems that can push science and engineering forward on their own |
| Accelerate economic growth | Embed AI in production, services, and innovation with measurable impact |
| Personal AGI for everyone | Intelligence assistants available to people, teams, and countries—not just a few labs |

These goals reinforce one another: better research improves products, while adoption depends on safety and accessibility.

## Safety and governance: no rush to full automation

OpenAI repeats its **safety floor** throughout the post:

- Powerful systems must **align with human intent** and stay **under human control**.
- The company does **not** pursue a fully automated future—one that would erode human agency and carry systemic risk.
- AI should **help people pursue their goals**, not run outside human oversight.

They also call again for **international coordination**—including institutions that can slow frontier work when risks outpace safeguards and society needs time to catch up.

## IPO filing on the same day

On the day the roadmap dropped, OpenAI said it had **confidentially filed for an initial public offering (IPO)**. It cautioned that a public listing is still a long way off, with no firm timeline shared.

Phase three will demand massive compute, talent, and safety investment. An IPO process running in parallel signals OpenAI wants broader capital access while pursuing “AI for everyone, safely.”

## Industry context: Anthropic on slowing the frontier

The post arrives as **Anthropic** researchers argue frontier AI may be moving too fast. Last week they wrote that the world should keep the option to **pause or temporarily halt** cutting-edge development so alignment work and social infrastructure can keep pace.

The framing differs—OpenAI stresses access plus safety; Anthropic stresses pacing—but both agree: **the next chapter is not only benchmark scores; it is governance that scales with capability.**

## GPT tutorial: master ChatGPT while phase three rolls out

Phase three is still mostly roadmap for everyday users. The practical step today is getting more from **ChatGPT**. Before **GPT-5.6** is everywhere, practice on **GPT-5.4 / GPT-5.5**:

1. **Bound the task**—inputs, output format, and “do not change” sections.
2. **Outline long docs first**—headings plus one-line goals per section, then expand.
3. **Treat AI as a collaborator**—split hard problems across turns; one sub-problem per turn.
4. **Keep a fixed eval set**—same prompts across models or reasoning tiers; log quality and latency for comparisons when new releases land.

Use the button below to open LimaxAI chat (**gpt-5.4** today; pick newer models when they appear).

{cta_mid}

## Summary

| Item | Takeaway |
| --- | --- |
| Phase | OpenAI enters phase three: access, ease, safety |
| Goals | Automated AI researchers, economic acceleration, personal AGI |
| Safety | Human control, no full-automation end state, global coordination |
| Capital | Confidential IPO filing the same day |
| Industry | Leading labs pair capability expansion with pacing debate |
| Next step | Clarify tasks in ChatGPT; try GPT on LimaxAI |

Phase three is about turning “models that work” into “tools everyone can afford and trust.” Until then, getting more from the **ChatGPT** you already have beats chasing every new name.

{cta_bottom}
""",
    },
}

MORE_LOCALES: dict[str, dict] = {
    "zh-tw": {
        "title": "OpenAI 宣布進入第三發展階段：讓 AI 普及、易用且安全",
        "description": "山姆·奧爾特曼與首席科學家聯合發文，OpenAI 邁入第三階段：AI 供給充足、成本親民、安全易用。結合 ChatGPT、GPT-5.6 與 GPT 教程，在 LimaxAI 直接體驗。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程"]',
        "cta": "開始使用 GPT",
    },
    "ja": {
        "title": "OpenAIが第三開発段階へ：AIを普及・易用・安全に",
        "description": "アルトマンと首席科学者が第三段階を宣言。AIの供給拡大と安全な普及。ChatGPT・GPT-5.6・GPTチュートリアル。LimaxAIで体験。",
        "tags": '["chatgpt", "GPT-5.6", "gptチュートリアル"]',
        "cta": "GPTを使い始める",
    },
    "ko": {
        "title": "OpenAI 3단계 진입: AI 보급·쉬운 사용·안전",
        "description": "알트man과 수석 과학자, 3단계 로드맵 공개. AI 공급·비용·안전. ChatGPT·GPT-5.6·GPT 튜토리얼. LimaxAI에서 체험.",
        "tags": '["chatgpt", "GPT-5.6", "gpt 튜토리얼"]',
        "cta": "GPT 사용 시작",
    },
    "es": {
        "title": "OpenAI entra en la tercera fase: IA accesible, fácil y segura",
        "description": "Altman y el científico jefe definen la fase 3: IA abundante, asequible y segura. ChatGPT, GPT-5.6 y tutorial GPT en LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Empezar a usar GPT",
    },
    "fr": {
        "title": "OpenAI entre dans sa 3e phase : IA accessible, simple et sûre",
        "description": "Altman et le directeur scientifique décrivent la phase 3 : IA abondante, abordable et sûre. ChatGPT, GPT-5.6 et tutoriel GPT sur LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutoriel gpt"]',
        "cta": "Commencer avec GPT",
    },
    "de": {
        "title": "OpenAI in Phase 3: KI zugänglich, einfach und sicher",
        "description": "Altman und der Chief Scientist skizzieren Phase 3: reichlich, bezahlbar, sichere KI. ChatGPT, GPT-5.6 und GPT-Tutorial auf LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "GPT jetzt nutzen",
    },
    "pt": {
        "title": "OpenAI entra na terceira fase: IA acessível, fácil e segura",
        "description": "Altman e o cientista-chefe definem a fase 3: IA abundante, acessível e segura. ChatGPT, GPT-5.6 e tutorial GPT no LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Começar a usar o GPT",
    },
    "it": {
        "title": "OpenAI entra nella terza fase: IA accessibile, facile e sicura",
        "description": "Altman e il chief scientist sulla fase 3: IA abbondante, conveniente e sicura. ChatGPT, GPT-5.6 e tutorial GPT su LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Inizia a usare GPT",
    },
    "ru": {
        "title": "OpenAI переходит к третьей фазе: доступный и безопасный ИИ",
        "description": "Альтман и главный учёный о фазе 3: доступный, недорогой, безопасный ИИ. ChatGPT, GPT-5.6 и урок GPT на LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt"]',
        "cta": "Начать использовать GPT",
    },
    "ar": {
        "title": "OpenAI تدخل المرحلة الثالثة: ذكاء اصطناعي متاح وسهل وآمن",
        "description": "ألتمان وكبير العلماء يحددان المرحلة 3: ذكاء وفير وبأسعار معقولة وآمن. ChatGPT وGPT-5.6 ودليل GPT على LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "دليل gpt"]',
        "cta": "ابدأ استخدام GPT",
    },
    "id": {
        "title": "OpenAI masuk fase ketiga: AI mudah diakses dan aman",
        "description": "Altman dan chief scientist tentang fase 3: AI melimpah, terjangkau, aman. ChatGPT, GPT-5.6, tutorial GPT di LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Mulai Gunakan GPT",
    },
    "ms": {
        "title": "OpenAI masuk fasa ketiga: AI mudah diakses dan selamat",
        "description": "Altman dan ketua saintis tentang fasa 3: AI mencukupi, mampu milik, selamat. ChatGPT, GPT-5.6, tutorial GPT di LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Mula Gunakan GPT",
    },
    "vi": {
        "title": "OpenAI vào giai đoạn 3: AI dễ tiếp cận, an toàn",
        "description": "Altman và giám đốc khoa học về giai đoạn 3: AI dồi dào, giá hợp lý, an toàn. ChatGPT, GPT-5.6, hướng dẫn GPT trên LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "hướng dẫn gpt"]',
        "cta": "Bắt đầu dùng GPT",
    },
    "th": {
        "title": "OpenAI เข้าสู่ระยะที่ 3: AI เข้าถึงง่ายและปลอดภัย",
        "description": "Altman และ chief scientist เรื่องระยะ 3: AI เพียงพอ ราคาเข้าถึงได้ ปลอดภัย ChatGPT GPT-5.6 บทช่วยสอน GPT บน LimaxAI",
        "tags": '["chatgpt", "GPT-5.6", "บทช่วยสอน gpt"]',
        "cta": "เริ่มใช้ GPT",
    },
    "tr": {
        "title": "OpenAI 3. aşamaya geçti: erişilebilir ve güvenli yapay zeka",
        "description": "Altman ve baş bilim insanı 3. aşamayı anlatıyor: bol, uygun fiyatlı, güvenli AI. ChatGPT, GPT-5.6 ve GPT eğitimi LimaxAI'da.",
        "tags": '["chatgpt", "GPT-5.6", "gpt eğitimi"]',
        "cta": "GPT'yi Kullanmaya Başla",
    },
    "hi": {
        "title": "OpenAI तीसरे चरण में: सुलभ और सुरक्षित AI",
        "description": "Altman और chief scientist ने चरण 3 बताया: पर्याप्त, सस्ती, सुरक्षित AI। ChatGPT, GPT-5.6, GPT ट्यूटोरियल LimaxAI पर।",
        "tags": '["chatgpt", "GPT-5.6", "gpt ट्यूटोरियल"]',
        "cta": "GPT का उपयोग शुरू करें",
    },
    "nl": {
        "title": "OpenAI in fase 3: AI toegankelijk, eenvoudig en veilig",
        "description": "Altman en chief scientist over fase 3: ruim, betaalbaar, veilig AI. ChatGPT, GPT-5.6 en GPT-tutorial op LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial"]',
        "cta": "GPT gaan gebruiken",
    },
    "pl": {
        "title": "OpenAI wchodzi w fazę 3: AI dostępne, proste i bezpieczne",
        "description": "Altman i główny naukowiec o fazie 3: obfite, tanie, bezpieczne AI. ChatGPT, GPT-5.6 i samouczek GPT na LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "samouczek gpt"]',
        "cta": "Zacznij używać GPT",
    },
    "sv": {
        "title": "OpenAI går in i fas 3: tillgänglig, enkel och säker AI",
        "description": "Altman och chief scientist om fas 3: riklig, prisvärd, säker AI. ChatGPT, GPT-5.6 och GPT-guide på LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt guide"]',
        "cta": "Börja använda GPT",
    },
    "uk": {
        "title": "OpenAI переходить до третьої фази: доступний і безпечний ШІ",
        "description": "Альтман і головний науковець про фазу 3: доступний, недорогий, безпечний ШІ. ChatGPT, GPT-5.6 і урок GPT на LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt"]',
        "cta": "Почати використовувати GPT",
    },
    "ro": {
        "title": "OpenAI intră în faza 3: IA accesibilă, ușoară și sigură",
        "description": "Altman și chief scientist despre faza 3: IA abundentă, accesibilă, sigură. ChatGPT, GPT-5.6 și tutorial GPT pe LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt"]',
        "cta": "Începe să folosești GPT",
    },
    "fa": {
        "title": "OpenAI وارد فاز سوم: هوش مصنوعی در دسترس، ساده و امن",
        "description": "آلتمن و سرپرست علمی درباره فاز ۳: هوش فراوان، مقرون‌به‌صرفه و امن. ChatGPT، GPT-5.6 و آموزش GPT در LimaxAI.",
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

## {t['h_phases']}

{t['phases_intro']}

{t['phases_table']}

{t['phases_note']}

## {t['h_goals']}

{t['goals_intro']}

{t['goals_table']}

{t['goals_note']}

## {t['h_safety']}

{t['safety']}

## {t['h_ipo']}

{t['ipo']}

## {t['h_industry']}

{t['industry']}

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
