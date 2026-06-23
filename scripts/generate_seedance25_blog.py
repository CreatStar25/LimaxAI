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
CTA_PATH = "/generate/video-tools/seedance/"

CTA_LABELS: dict[str, str] = {
    "zh-cn": "去创作",
    "zh-tw": "去創作",
    "en": "Go Create",
    "ja": "創作へ",
    "ko": "창작하기",
    "es": "Ir a crear",
    "fr": "Aller créer",
    "de": "Jetzt erstellen",
    "pt": "Ir criar",
    "it": "Vai a creare",
    "ru": "Перейти к созданию",
    "uk": "Перейти до творення",
    "pl": "Przejdź do tworzenia",
    "nl": "Ga creëren",
    "sv": "Gå och skapa",
    "ro": "Mergi la creare",
    "ar": "اذهب للإبداع",
    "id": "Mulai berkarya",
    "ms": "Pergi mencipta",
    "vi": "Đi sáng tạo",
    "th": "ไปสร้างสรรค์",
    "tr": "Oluşturmaya git",
    "hi": "निर्माण करें",
    "fa": "برو به خلق",
}

GPT_CLOSE: dict[str, str] = {
    "zh-cn": "分镜和提示词准备好后，点击下方「去创作」按钮，进入 LimaxAI 的 Seedance 视频生成页开始创作。",
    "zh-tw": "分鏡和提示詞準備好後，點擊下方「去創作」按鈕，進入 LimaxAI 的 Seedance 影片生成頁開始創作。",
    "en": "When your shot list is ready, click **Go Create** below to open Seedance video generation on LimaxAI.",
    "ja": "絵コンテとプロンプトの準備ができたら、下の「創作へ」ボタンから LimaxAI の Seedance 動画生成ページへ進んでください。",
    "ko": "샷 리스트가 준비되면 아래 「창작하기」 버튼을 눌러 LimaxAI의 Seedance 영상 생성 페이지에서 바로 시작하세요.",
    "es": "Cuando tengas el storyboard listo, pulsa **Ir a crear** abajo para abrir la generación de vídeo Seedance en LimaxAI.",
    "fr": "Une fois le storyboard prêt, cliquez sur **Aller créer** ci-dessous pour ouvrir la génération vidéo Seedance sur LimaxAI.",
    "de": "Wenn Ihre Shot-Liste steht, klicken Sie unten auf **Jetzt erstellen**, um die Seedance-Videogenerierung auf LimaxAI zu öffnen.",
    "pt": "Com o storyboard pronto, clique em **Ir criar** abaixo para abrir a geração de vídeo Seedance no LimaxAI.",
    "it": "Quando lo storyboard è pronto, clicca **Vai a creare** sotto per aprire la generazione video Seedance su LimaxAI.",
    "ru": "Когда раскадровка готова, нажмите **Перейти к созданию** ниже — откроется генерация видео Seedance на LimaxAI.",
    "uk": "Коли розкадровка готова, натисніть **Перейти до творення** нижче — відкриється генерація відео Seedance на LimaxAI.",
    "pl": "Gdy lista ujęć jest gotowa, kliknij **Przejdź do tworzenia** poniżej, aby otworzyć generowanie wideo Seedance w LimaxAI.",
    "nl": "Als je shotlist klaar is, klik op **Ga creëren** hieronder om Seedance-videogeneratie op LimaxAI te openen.",
    "sv": "När din shotlista är klar, klicka på **Gå och skapa** nedan för att öppna Seedance-videogenerering på LimaxAI.",
    "ro": "Când storyboard-ul e gata, apasă **Mergi la creare** mai jos pentru a deschide generarea video Seedance pe LimaxAI.",
    "ar": "عندما يصبح المخطط جاهزًا، اضغط **اذهب للإبداع** أدناه لفتح توليد فيديو Seedance على LimaxAI.",
    "id": "Setelah storyboard siap, klik **Mulai berkarya** di bawah untuk membuka pembuatan video Seedance di LimaxAI.",
    "ms": "Apabila storyboard siap, klik **Pergi mencipta** di bawah untuk membuka penjanaan video Seedance di LimaxAI.",
    "vi": "Khi đã có shot list, nhấn **Đi sáng tạo** bên dưới để mở trang tạo video Seedance trên LimaxAI.",
    "th": "เมื่อ shot list พร้อมแล้ว คลิก **ไปสร้างสรรค์** ด้านล่างเพื่อเปิดหน้าสร้างวิดีโอ Seedance บน LimaxAI",
    "tr": "Shot listeniz hazır olduğunda, LimaxAI'da Seedance video üretimini açmak için aşağıdaki **Oluşturmaya git** düğmesine tıklayın.",
    "hi": "शॉट लिस्ट तैयार होने पर, LimaxAI पर Seedance वीडियो जनरेशन खोलने के लिए नीचे **निर्माण करें** पर क्लिक करें।",
    "fa": "وقتی storyboard آماده شد، روی **برو به خلق** در پایین کلیک کنید تا تولید ویدیوی Seedance در LimaxAI باز شود.",
}

SUM_TOOL: dict[str, str] = {
    "zh-cn": "ChatGPT 写分镜；LimaxAI Seedance 创作",
    "zh-tw": "ChatGPT 寫分鏡；LimaxAI Seedance 創作",
    "en": "ChatGPT storyboards; LimaxAI Seedance creation",
    "ja": "ChatGPTで絵コンテ；LimaxAI Seedance創作",
    "ko": "ChatGPT 샷리스트；LimaxAI Seedance 창작",
    "es": "Storyboard en ChatGPT; creación Seedance en LimaxAI",
    "fr": "Storyboard ChatGPT ; création Seedance sur LimaxAI",
    "de": "Storyboard in ChatGPT; Seedance-Erstellung auf LimaxAI",
    "pt": "Storyboard no ChatGPT; criação Seedance no LimaxAI",
    "it": "Storyboard in ChatGPT; creazione Seedance su LimaxAI",
    "ru": "Раскадровка в ChatGPT; создание Seedance на LimaxAI",
    "uk": "Розкадровка в ChatGPT; створення Seedance на LimaxAI",
    "pl": "Storyboard w ChatGPT; tworzenie Seedance w LimaxAI",
    "nl": "Storyboard in ChatGPT; Seedance-creatie op LimaxAI",
    "sv": "Storyboard i ChatGPT; Seedance-skapande på LimaxAI",
    "ro": "Storyboard în ChatGPT; creare Seedance pe LimaxAI",
    "ar": "مخطط في ChatGPT؛ إنشاء Seedance على LimaxAI",
    "id": "Storyboard di ChatGPT; buat Seedance di LimaxAI",
    "ms": "Storyboard di ChatGPT; cipta Seedance di LimaxAI",
    "vi": "Storyboard ChatGPT; tạo Seedance trên LimaxAI",
    "th": "Storyboard ใน ChatGPT; สร้าง Seedance บน LimaxAI",
    "tr": "ChatGPT storyboard; LimaxAI'da Seedance üretimi",
    "hi": "ChatGPT storyboard; LimaxAI पर Seedance निर्माण",
    "fa": "storyboard در ChatGPT؛ خلق Seedance در LimaxAI",
}

_CTA_TAIL_MARKERS = (
    "LimaxAI", "gpt-5.4", "按钮", "按鈕", "button", "Button", "knop", "botón", "bouton",
    "pulsante", "кнопк", "زر", "tombol", "butang", "nút", "ปุ่ม", "düğme", "बटन", "دکمه", "버튼",
)


def patch_sections(sections: dict, lang: str) -> dict:
    """Align GPT tutorial closing and summary tool row with Seedance CTA."""
    s = dict(sections)
    paragraphs = s["gpt"].split("\n\n")
    if paragraphs and any(m in paragraphs[-1] for m in _CTA_TAIL_MARKERS):
        paragraphs[-1] = GPT_CLOSE[lang]
        s["gpt"] = "\n\n".join(paragraphs)

    tool = SUM_TOOL[lang]
    lines = []
    for line in s["sum_table"].split("\n"):
        if line.startswith("|") and "LimaxAI" in line and ("GPT" in line or "gpt" in line or "体验" in line or "체험" in line or "essayer" in line or "probar" in line or "testen" in line or "проб" in line or "prova" in line or "próximo" in line.lower() or "siguiente" in line.lower() or "nächster" in line.lower() or "다음" in line or "次" in line or "التالي" in line):
            cols = [c.strip() for c in line.strip("|").split("|")]
            if len(cols) >= 2:
                lines.append(f"| {cols[0]} | {tool} |")
                continue
        lines.append(line)
    s["sum_table"] = "\n".join(lines)
    return s

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
    url = f"https://www.limaxai.com/{lang}{CTA_PATH}"
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
    },
    "en": {
        "title": "Seedance 2.5 Launch: 30s One-Take, Native 4K, 50 References",
        "description": "Seedance 2.5 from Volcano Engine: 30s native one-take, 4K, up to 50 references. 2.0 comparison, demo video, ChatGPT/GPT-5.6 storyboard guide, LimaxAI access.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial", "seedance 2.5"]',
    },
}
# fmt: on

MORE_LOCALES: dict[str, dict] = {
    "zh-tw": {
        "title": "Seedance 2.5 發布：30秒一鏡到底、原生4K、50個參考素材",
        "description": "火山引擎發布 Seedance 2.5：原生 30 秒一鏡到底、4K 輸出、最多 50 路參考素材。附 2.0 對比、演示影片，以及 ChatGPT/GPT-5.6 分鏡教程與 LimaxAI 體驗入口。",
        "tags": '["chatgpt", "GPT-5.6", "gpt教程", "seedance 2.5"]',
    },
    "ja": {
        "title": "Seedance 2.5登場：30秒ワンテイク・ネイティブ4K・参照50件",
        "description": "火山引擎がSeedance 2.5を発表。ネイティブ30秒ワンテイク、4K、最大50参照。2.0比較・デモ動画・ChatGPT/GPT-5.6分鏡チュートリアルとLimaxAI体験。",
        "tags": '["chatgpt", "GPT-5.6", "gptチュートリアル", "seedance 2.5"]',
    },
    "ko": {
        "title": "Seedance 2.5 출시: 30초 원테이크, 네이티브 4K, 참조 50개",
        "description": "화산엔진 Seedance 2.5: 네이티브 30초 원테이크, 4K, 최대 50 참조. 2.0 비교, 데모 영상, ChatGPT/GPT-5.6 샷리스트 가이드, LimaxAI 체험.",
        "tags": '["chatgpt", "GPT-5.6", "gpt 튜토리얼", "seedance 2.5"]',
    },
    "es": {
        "title": "Seedance 2.5: 30 s plano secuencia, 4K nativo, 50 referencias",
        "description": "Volcano Engine lanza Seedance 2.5: 30 s nativos, 4K, hasta 50 referencias. Comparativa 2.0, vídeo demo, tutorial ChatGPT/GPT-5.6 y acceso LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
    },
    "fr": {
        "title": "Seedance 2.5 : 30 s plan séquence, 4K natif, 50 références",
        "description": "Volcano Engine déploie Seedance 2.5 : 30 s natifs, 4K, jusqu'à 50 références. Comparaison 2.0, démo, tutoriel ChatGPT/GPT-5.6 et accès LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutoriel gpt", "seedance 2.5"]',
    },
    "de": {
        "title": "Seedance 2.5: 30s One-Take, nativ 4K, 50 Referenzen",
        "description": "Volcano Engine stellt Seedance 2.5 vor: 30 s native One-Take-Clips, 4K, bis 50 Referenzen. 2.0-Vergleich, Demo, ChatGPT/GPT-5.6-Tutorial und LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial", "seedance 2.5"]',
    },
    "pt": {
        "title": "Seedance 2.5: 30s one-take, 4K nativo, 50 referências",
        "description": "Volcano Engine lança Seedance 2.5: 30 s nativos, 4K, até 50 referências. Comparação 2.0, demo, tutorial ChatGPT/GPT-5.6 e LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
    },
    "it": {
        "title": "Seedance 2.5: 30s one-take, 4K nativo, 50 riferimenti",
        "description": "Volcano Engine presenta Seedance 2.5: 30 s nativi, 4K, fino a 50 riferimenti. Confronto 2.0, demo, tutorial ChatGPT/GPT-5.6 e LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
    },
    "ru": {
        "title": "Seedance 2.5: 30 с one-take, нативное 4K, 50 референсов",
        "description": "Volcano Engine выпустила Seedance 2.5: 30 с нативно, 4K, до 50 референсов. Сравнение с 2.0, демо, урок ChatGPT/GPT-5.6 и LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt", "seedance 2.5"]',
    },
    "ar": {
        "title": "Seedance 2.5: 30 ثانية بلقطة واحدة، 4K أصلي، 50 مرجعًا",
        "description": "Volcano Engine تطلق Seedance 2.5: 30 ثانية أصلية، 4K، حتى 50 مرجعًا. مقارنة 2.0، فيديو تجريبي، دليل ChatGPT/GPT-5.6 وLimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "دليل gpt", "seedance 2.5"]',
    },
    "id": {
        "title": "Seedance 2.5: 30 detik one-take, 4K native, 50 referensi",
        "description": "Volcano Engine meluncurkan Seedance 2.5: 30 detik native, 4K, hingga 50 referensi. Perbandingan 2.0, demo, tutorial ChatGPT/GPT-5.6 dan LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
    },
    "ms": {
        "title": "Seedance 2.5: 30 saat one-take, 4K native, 50 rujukan",
        "description": "Volcano Engine melancarkan Seedance 2.5: 30 saat native, 4K, sehingga 50 rujukan. Perbandingan 2.0, demo, tutorial ChatGPT/GPT-5.6 dan LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
    },
    "vi": {
        "title": "Seedance 2.5: 30 giây one-take, 4K native, 50 tham chiếu",
        "description": "Volcano Engine ra mắt Seedance 2.5: 30 giây native, 4K, tối đa 50 tham chiếu. So sánh 2.0, video demo, hướng dẫn ChatGPT/GPT-5.6 và LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "hướng dẫn gpt", "seedance 2.5"]',
    },
    "th": {
        "title": "Seedance 2.5: 30 วินาที one-take, 4K native, 50 อ้างอิง",
        "description": "Volcano Engine เปิดตัว Seedance 2.5: 30 วินาที native, 4K, สูงสุด 50 อ้างอิง เปรียบเทียบ 2.0 วิดีโอสาธิต บทช่วยสอน ChatGPT/GPT-5.6 และ LimaxAI",
        "tags": '["chatgpt", "GPT-5.6", "บทช่วยสอน gpt", "seedance 2.5"]',
    },
    "tr": {
        "title": "Seedance 2.5: 30 sn tek çekim, native 4K, 50 referans",
        "description": "Volcano Engine Seedance 2.5: 30 sn native, 4K, 50 referansa kadar. 2.0 karşılaştırma, demo, ChatGPT/GPT-5.6 eğitimi ve LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt eğitimi", "seedance 2.5"]',
    },
    "hi": {
        "title": "Seedance 2.5: 30s वन-टेक, नेटिव 4K, 50 संदर्भ",
        "description": "Volcano Engine ने Seedance 2.5 लॉन्च किया: 30s नेटिव, 4K, 50 संदर्भ तक। 2.0 तुलना, डेमो, ChatGPT/GPT-5.6 ट्यूटोरियल और LimaxAI।",
        "tags": '["chatgpt", "GPT-5.6", "gpt ट्यूटोरियल", "seedance 2.5"]',
    },
    "nl": {
        "title": "Seedance 2.5: 30s one-take, native 4K, 50 referenties",
        "description": "Volcano Engine lanceert Seedance 2.5: 30s native, 4K, tot 50 referenties. 2.0-vergelijking, demo, ChatGPT/GPT-5.6-tutorial en LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt tutorial", "seedance 2.5"]',
    },
    "pl": {
        "title": "Seedance 2.5: 30s one-take, natywne 4K, 50 referencji",
        "description": "Volcano Engine prezentuje Seedance 2.5: 30s native, 4K, do 50 referencji. Porównanie 2.0, demo, samouczek ChatGPT/GPT-5.6 i LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "samouczek gpt", "seedance 2.5"]',
    },
    "sv": {
        "title": "Seedance 2.5: 30s one-take, native 4K, 50 referenser",
        "description": "Volcano Engine lanserar Seedance 2.5: 30s native, 4K, upp till 50 referenser. 2.0-jämförelse, demo, ChatGPT/GPT-5.6-guide och LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "gpt guide", "seedance 2.5"]',
    },
    "uk": {
        "title": "Seedance 2.5: 30 с one-take, нативне 4K, 50 референсів",
        "description": "Volcano Engine представила Seedance 2.5: 30 с нативно, 4K, до 50 референсів. Порівняння з 2.0, демо, урок ChatGPT/GPT-5.6 і LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "урок gpt", "seedance 2.5"]',
    },
    "ro": {
        "title": "Seedance 2.5: 30s one-take, 4K nativ, 50 referințe",
        "description": "Volcano Engine lansează Seedance 2.5: 30s native, 4K, până la 50 referințe. Comparație 2.0, demo, tutorial ChatGPT/GPT-5.6 și LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "tutorial gpt", "seedance 2.5"]',
    },
    "fa": {
        "title": "Seedance 2.5: ۳۰ ثانیه one-take، 4K بومی، ۵۰ مرجع",
        "description": "Volcano Engine مدل Seedance 2.5 را عرضه کرد: ۳۰ ثانیه بومی، 4K، تا ۵۰ مرجع. مقایسه 2.0، دمو، آموزش ChatGPT/GPT-5.6 و LimaxAI.",
        "tags": '["chatgpt", "GPT-5.6", "آموزش gpt", "seedance 2.5"]',
    },
}


def build_body(lang: str, meta: dict) -> str:
    sections = patch_sections(FULL_SECTIONS[lang], lang)
    video_block = VIDEO_BLOCK.format(video=VIDEO)
    cta_text = CTA_LABELS[lang]
    body = BODY_TEMPLATE.format(video_block=video_block, **sections)
    return body.format(
        cta_top=cta_button(lang, cta_text, "32px"),
        cta_mid=cta_button(lang, cta_text, "28px"),
        cta_bottom=cta_button(lang, cta_text, "40px"),
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
        if lang not in CTA_LABELS or lang not in GPT_CLOSE or lang not in SUM_TOOL:
            raise SystemExit(f"Missing CTA/GPT_CLOSE/SUM_TOOL for: {lang}")
        write_post(lang, all_meta[lang])


if __name__ == "__main__":
    main()
