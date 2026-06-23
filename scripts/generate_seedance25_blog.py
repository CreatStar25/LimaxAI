#!/usr/bin/env python3
"""Generate Seedance 2.5 blog posts for all supported locales."""

from __future__ import annotations

from pathlib import Path

try:
    from seedance25_full_sections import FULL_SECTIONS, VIDEO_BLOCK
except ImportError:
    from scripts.seedance25_full_sections import FULL_SECTIONS, VIDEO_BLOCK  # type: ignore

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "blog"
SLUG = "seedance-2-5-30s-native-4k-50-reference-assets"
PUB_DATE = "2026-06-23"
HERO = "https://img.limaxai.com/aiweb/limaxai-260623-1.png"
VIDEO = "https://img.limaxai.com/aiweb/limaxai-260623-1.mp4"
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


BODY_TEMPLATE = """{intro}

{keywords}

{published}

{{cta_top}}

![{img_alt}]({{hero}})

## {h_upgrade}

{upgrade_intro}

{compare_table}

{upgrade_note}

## {h_duration}

{duration}

## {h_multishot}

{multishot}

## {h_audio}

{audio}

## {h_demo}

{demo_caption}

{video_block}

## {h_gpt}

{gpt}

{{cta_mid}}

## {h_sum}

{sum_table}

{sum_line}

{{cta_bottom}}
"""


# fmt: off
LOCALES: dict[str, dict] = {
    "zh-cn": {
        "title": "Seedance 2.5发布：30秒一镜到底、原生4K、50个参考素材",
        "description": "火山引擎发布 Seedance 2.5：原生 30 秒一镜到底、4K 输出、最多 50 路参考素材。附 2.0 对比、演示视频，以及 ChatGPT/GPT-5.6 分镜提示词教程与 LimaxAI 体验入口。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程", "seedance 2.5"]',
        "cta": "开始使用GPT",
    },
    "en": {
        "title": "Seedance 2.5 Launch: 30s One-Take, Native 4K, 50 References",
        "description": "Seedance 2.5 from Volcano Engine: 30s native one-take, 4K, up to 50 references. 2.0 comparison, demo video, ChatGPT/GPT-5.6 storyboard guide, LimaxAI access.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial", "seedance 2.5"]',
        "cta": "Start Using GPT",
    },
}
# fmt: on

MORE_LOCALES: dict[str, dict] = {
    "zh-tw": {
        "title": "Seedance 2.5 發布：30秒一鏡到底、原生4K、50個參考素材",
        "description": "火山引擎發布 Seedance 2.5：原生 30 秒一鏡到底、4K 輸出、最多 50 路參考素材。附 2.0 對比、演示影片，以及 ChatGPT/GPT-5.6 分鏡教程與 LimaxAI 體驗入口。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程", "seedance 2.5"]',
        "cta": "開始使用 GPT",
    },
    "ja": {
        "title": "Seedance 2.5登場：30秒ワンテイク・ネイティブ4K・参照50件",
        "description": "火山引擎がSeedance 2.5を発表。ネイティブ30秒ワンテイク、4K、最大50参照。2.0比較・デモ動画・ChatGPT/GPT-5.6分鏡チュートリアルとLimaxAI体験。",
        "tags": '["chatgpt", "GPT-5.6", "gptチュートリアル", "seedance 2.5"]',
        "cta": "GPTを使い始める",
    },
    "ko": {
        "title": "Seedance 2.5 출시: 30초 원테이크, 네이티브 4K, 참조 50개",
        "description": "화산엔진 Seedance 2.5: 네이티브 30초 원테이크, 4K, 최대 50 참조. 2.0 비교, 데모 영상, ChatGPT/GPT-5.6 샷리스트 가이드, LimaxAI 체험.",
        "tags": '["chatgpt", "GPT-5.6", "gpt 튜토리얼", "seedance 2.5"]',
        "cta": "GPT 사용 시작",
    },
    "es": {
        "title": "Seedance 2.5: 30 s plano secuencia, 4K nativo, 50 referencias",
        "description": "Volcano Engine lanza Seedance 2.5: 30 s nativos, 4K, hasta 50 referencias. Comparativa 2.0, vídeo demo, tutorial ChatGPT/GPT-5.6 y acceso LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
        "cta": "Empezar a usar GPT",
    },
    "fr": {
        "title": "Seedance 2.5 : 30 s plan séquence, 4K natif, 50 références",
        "description": "Volcano Engine déploie Seedance 2.5 : 30 s natifs, 4K, jusqu'à 50 références. Comparaison 2.0, démo, tutoriel ChatGPT/GPT-5.6 et accès LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutoriel gpt", "seedance 2.5"]',
        "cta": "Commencer avec GPT",
    },
    "de": {
        "title": "Seedance 2.5: 30s One-Take, nativ 4K, 50 Referenzen",
        "description": "Volcano Engine stellt Seedance 2.5 vor: 30 s native One-Take-Clips, 4K, bis 50 Referenzen. 2.0-Vergleich, Demo, ChatGPT/GPT-5.6-Tutorial und LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial", "seedance 2.5"]',
        "cta": "GPT jetzt nutzen",
    },
    "pt": {
        "title": "Seedance 2.5: 30s one-take, 4K nativo, 50 referências",
        "description": "Volcano Engine lança Seedance 2.5: 30 s nativos, 4K, até 50 referências. Comparação 2.0, demo, tutorial ChatGPT/GPT-5.6 e LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
        "cta": "Começar a usar o GPT",
    },
    "it": {
        "title": "Seedance 2.5: 30s one-take, 4K nativo, 50 riferimenti",
        "description": "Volcano Engine presenta Seedance 2.5: 30 s nativi, 4K, fino a 50 riferimenti. Confronto 2.0, demo, tutorial ChatGPT/GPT-5.6 e LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
        "cta": "Inizia a usare GPT",
    },
    "ru": {
        "title": "Seedance 2.5: 30 с one-take, нативное 4K, 50 референсов",
        "description": "Volcano Engine выпустила Seedance 2.5: 30 с нативно, 4K, до 50 референсов. Сравнение с 2.0, демо, урок ChatGPT/GPT-5.6 и LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt", "seedance 2.5"]',
        "cta": "Начать использовать GPT",
    },
    "ar": {
        "title": "Seedance 2.5: 30 ثانية بلقطة واحدة، 4K أصلي، 50 مرجعًا",
        "description": "Volcano Engine تطلق Seedance 2.5: 30 ثانية أصلية، 4K، حتى 50 مرجعًا. مقارنة 2.0، فيديو تجريبي، دليل ChatGPT/GPT-5.6 وLimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "دليل gpt", "seedance 2.5"]',
        "cta": "ابدأ استخدام GPT",
    },
    "id": {
        "title": "Seedance 2.5: 30 detik one-take, 4K native, 50 referensi",
        "description": "Volcano Engine meluncurkan Seedance 2.5: 30 detik native, 4K, hingga 50 referensi. Perbandingan 2.0, demo, tutorial ChatGPT/GPT-5.6 dan LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
        "cta": "Mulai Gunakan GPT",
    },
    "ms": {
        "title": "Seedance 2.5: 30 saat one-take, 4K native, 50 rujukan",
        "description": "Volcano Engine melancarkan Seedance 2.5: 30 saat native, 4K, sehingga 50 rujukan. Perbandingan 2.0, demo, tutorial ChatGPT/GPT-5.6 dan LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
        "cta": "Mula Gunakan GPT",
    },
    "vi": {
        "title": "Seedance 2.5: 30 giây one-take, 4K native, 50 tham chiếu",
        "description": "Volcano Engine ra mắt Seedance 2.5: 30 giây native, 4K, tối đa 50 tham chiếu. So sánh 2.0, video demo, hướng dẫn ChatGPT/GPT-5.6 và LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "hướng dẫn gpt", "seedance 2.5"]',
        "cta": "Bắt đầu dùng GPT",
    },
    "th": {
        "title": "Seedance 2.5: 30 วินาที one-take, 4K native, 50 อ้างอิง",
        "description": "Volcano Engine เปิดตัว Seedance 2.5: 30 วินาที native, 4K, สูงสุด 50 อ้างอิง เปรียบเทียบ 2.0 วิดีโอสาธิต บทช่วยสอน ChatGPT/GPT-5.6 และ LimaxAI",
        "tags": '["chatgpt", "GPT-5.6", "บทช่วยสอน gpt", "seedance 2.5"]',
        "cta": "เริ่มใช้ GPT",
    },
    "tr": {
        "title": "Seedance 2.5: 30 sn tek çekim, native 4K, 50 referans",
        "description": "Volcano Engine Seedance 2.5: 30 sn native, 4K, 50 referansa kadar. 2.0 karşılaştırma, demo, ChatGPT/GPT-5.6 eğitimi ve LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt eğitimi", "seedance 2.5"]',
        "cta": "GPT'yi Kullanmaya Başla",
    },
    "hi": {
        "title": "Seedance 2.5: 30s वन-टेक, नेटिव 4K, 50 संदर्भ",
        "description": "Volcano Engine ने Seedance 2.5 लॉन्च किया: 30s नेटिव, 4K, 50 संदर्भ तक। 2.0 तुलना, डेमो, ChatGPT/GPT-5.6 ट्यूटोरियल और LimaxAI।",
        "tags": '["chatgpt", "GPT-5.6", "gpt ट्यूटोरियल", "seedance 2.5"]',
        "cta": "GPT का उपयोग शुरू करें",
    },
    "nl": {
        "title": "Seedance 2.5: 30s one-take, native 4K, 50 referenties",
        "description": "Volcano Engine lanceert Seedance 2.5: 30s native, 4K, tot 50 referenties. 2.0-vergelijking, demo, ChatGPT/GPT-5.6-tutorial en LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial", "seedance 2.5"]',
        "cta": "GPT gaan gebruiken",
    },
    "pl": {
        "title": "Seedance 2.5: 30s one-take, natywne 4K, 50 referencji",
        "description": "Volcano Engine prezentuje Seedance 2.5: 30s native, 4K, do 50 referencji. Porównanie 2.0, demo, samouczek ChatGPT/GPT-5.6 i LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "samouczek gpt", "seedance 2.5"]',
        "cta": "Zacznij używać GPT",
    },
    "sv": {
        "title": "Seedance 2.5: 30s one-take, native 4K, 50 referenser",
        "description": "Volcano Engine lanserar Seedance 2.5: 30s native, 4K, upp till 50 referenser. 2.0-jämförelse, demo, ChatGPT/GPT-5.6-guide och LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt guide", "seedance 2.5"]',
        "cta": "Börja använda GPT",
    },
    "uk": {
        "title": "Seedance 2.5: 30 с one-take, нативне 4K, 50 референсів",
        "description": "Volcano Engine представила Seedance 2.5: 30 с нативно, 4K, до 50 референсів. Порівняння з 2.0, демо, урок ChatGPT/GPT-5.6 і LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt", "seedance 2.5"]',
        "cta": "Почати використовувати GPT",
    },
    "ro": {
        "title": "Seedance 2.5: 30s one-take, 4K nativ, 50 referințe",
        "description": "Volcano Engine lansează Seedance 2.5: 30s native, 4K, până la 50 referințe. Comparație 2.0, demo, tutorial ChatGPT/GPT-5.6 și LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
        "cta": "Începe să folosești GPT",
    },
    "fa": {
        "title": "Seedance 2.5: ۳۰ ثانیه one-take، 4K بومی، ۵۰ مرجع",
        "description": "Volcano Engine مدل Seedance 2.5 را عرضه کرد: ۳۰ ثانیه بومی، 4K، تا ۵۰ مرجع. مقایسه 2.0، دمو، آموزش ChatGPT/GPT-5.6 و LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "آموزش gpt", "seedance 2.5"]',
        "cta": "شروع استفاده از GPT",
    },
}


def build_body(lang: str, meta: dict) -> str:
    sections = FULL_SECTIONS[lang]
    video_block = VIDEO_BLOCK.format(video=VIDEO)
    body = BODY_TEMPLATE.format(video_block=video_block, **sections)
    return body.format(
        cta_top=cta_button(lang, meta["cta"], "32px"),
        cta_mid=cta_button(lang, meta["cta"], "28px"),
        cta_bottom=cta_button(lang, meta["cta"], "40px"),
        hero=HERO,
    )


def write_post(lang: str, meta: dict) -> None:
    path = ROOT / lang / f"{SLUG}.md"
    path.parent.mkdir(parents=True, exist_ok=True)
    body = build_body(lang, meta)
    frontmatter = f"""---
title: "{meta['title']}"
description: "{meta['description']}"
tags: {meta['tags']}
pubDate: "{PUB_DATE}"
heroImage: "{HERO}"
lang: "{lang}"
author: "LimaxAI Team"
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
        if lang not in FULL_SECTIONS:
            raise SystemExit(f"Missing sections for: {lang}")
        write_post(lang, all_meta[lang])


if __name__ == "__main__":
    main()
