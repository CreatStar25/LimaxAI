#!/usr/bin/env python3
"""Audit GPT-5.6 blog: native content, parity with zh-cn, localized CTAs."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "blog"
SLUG = "openai-gpt-5-6-june-release-1-5m-context-window.md"
LOCALES = [
    "en", "zh-cn", "zh-tw", "es", "ar", "pt", "id", "ms", "fr", "ru",
    "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl",
    "sv", "uk", "ro",
]

PT_MARKERS = (
    "Nomes internos",
    "Contexto de 1,5M",
    "Testes de estresse",
    "Geração de UI",
    "Como ler o calendário",
    "O que ainda não se sabe",
    "Menos fatiamento",
    "Uma linha de log",
    "Leitura atual",
)

# Expected CTA label per locale (must appear in body)
CTA_TEXT = {
    "zh-cn": "开始使用GPT",
    "zh-tw": "開始使用 GPT",
    "en": "Start Using GPT",
    "ja": "GPTを使い始める",
    "ko": "GPT 사용 시작",
    "es": "Empezar a usar GPT",
    "fr": "Commencer avec GPT",
    "de": "GPT jetzt nutzen",
    "pt": "Começar a usar o GPT",
    "it": "Inizia a usare GPT",
    "ru": "Начать использовать GPT",
    "uk": "Почати використовувати GPT",
    "pl": "Zacznij używać GPT",
    "nl": "GPT gaan gebruiken",
    "sv": "Börja använda GPT",
    "ro": "Începe să folosești GPT",
    "ar": "ابدأ استخدام GPT",
    "id": "Mulai Gunakan GPT",
    "ms": "Mula Gunakan GPT",
    "vi": "Bắt đầu dùng GPT",
    "th": "เริ่มใช้ GPT",
    "tr": "GPT'yi Kullanmaya Başla",
    "hi": "GPT का उपयोग शुरू करें",
    "fa": "شروع استفاده از GPT",
}

# English section headers that must NOT dominate non-en locales
ENGLISH_H2_MARKERS = [
    "Where the clues came from",
    "Internal codenames",
    "1.5M context",
    "Stress tests at extreme",
    "UI generation",
    "How to read the release",
    "What is still unclear",
    "GPT tutorial",
    "Summary",
]

# Native h2 markers per locale (at least 2 should appear)
NATIVE_H2 = {
    "zh-cn": ["线索从哪来", "150 万上下文", "小结"],
    "zh-tw": ["線索從哪來", "150 萬上下文", "小結"],
    "en": ["Where the clues", "1.5M context", "Summary"],
    "ja": ["手がかり", "150 万", "まとめ"],
    "ko": ["단서", "150만", "요약"],
    "es": ["De dónde", "Contexto de 1,5M", "Resumen"],
    "fr": ["Origine des indices", "Contexte 1,5M", "Synthèse"],
    "de": ["Woher der Hinweis", "1,5M Kontext", "Kurzfassung"],
    "pt": ["De onde veio", "Contexto de 1,5M", "Resumo"],
    "it": ["Da dove viene", "Contesto 1,5M", "Sintesi"],
    "ru": ["Откуда след", "Контекст 1,5M", "Итог"],
    "uk": ["Звідки слід", "Контекст 1,5M", "Підсумок"],
    "pl": ["Skąd trop", "Kontekst 1,5M", "Podsumowanie"],
    "nl": ["Waar de aanwijzing", "1,5M context", "Samenvatting"],
    "sv": ["Var ledtråden", "1,5M tokens", "Sammanfattning"],
    "ro": ["De unde vine", "Context 1,5M", "Rezumat"],
    "ar": ["من أين", "سياق 1.5M", "خلاصة"],
    "id": ["Asal petunjuk", "Konteks 1,5M", "Mulai GPT"],
    "ms": ["Dari mana", "Konteks 1,5M"],
    "vi": ["Manh mối", "Ngữ cảnh 1,5", "Bắt đầu GPT"],
    "th": ["เบาะแส", "บริบท 1.5", "สรุป"],
    "tr": ["İpucu nereden", "1,5M token", "Özet"],
    "hi": ["सुराग", "15 लाख", "सारांश"],
    "fa": ["سرنخ", "۱٫۵ میلیون", "جمع"],
}


def parse(path: Path) -> tuple[dict, str]:
    raw = path.read_text(encoding="utf-8")
    if not raw.startswith("---"):
        return {}, raw
    parts = raw.split("---", 2)
    fm = parts[1]
    body = parts[2] if len(parts) > 2 else ""
    meta = {}
    for line in fm.strip().splitlines():
        if ":" in line:
            k, _, v = line.partition(":")
            meta[k.strip()] = v.strip().strip('"')
    return meta, body


def main() -> int:
    zh_path = ROOT / "zh-cn" / SLUG
    _, zh_body = parse(zh_path)
    zh_h2 = len(re.findall(r"^## ", zh_body, re.M))
    zh_tables = zh_body.count("\n| ")
    zh_cta = zh_body.count("limaxai.com/zh-cn/chat?model=gpt-5.4")
    zh_len = len(zh_body)
    min_len = int(zh_len * 0.72)

    failures: list[str] = []

    for lang in LOCALES:
        path = ROOT / lang / SLUG
        if not path.exists():
            failures.append(f"{lang}: missing file")
            continue

        meta, body = parse(path)
        issues: list[str] = []

        if meta.get("lang") != lang:
            issues.append(f"frontmatter lang={meta.get('lang')}")

        h2 = len(re.findall(r"^## ", body, re.M))
        if h2 < zh_h2:
            issues.append(f"h2={h2} < zh-cn {zh_h2}")

        table_rows = body.count("\n| ")
        if table_rows < zh_tables * 0.7:
            issues.append(f"table_rows={table_rows} < ~{int(zh_tables * 0.7)}")

        cta_url = f"limaxai.com/{lang}/chat?model=gpt-5.4"
        cta_count = body.count(cta_url)
        if cta_count < 3:
            issues.append(f"cta_urls={cta_count} need 3 with {cta_url}")

        wrong_cta = sum(
            1
            for other in LOCALES
            if other != lang and f"limaxai.com/{other}/chat?model=gpt-5.4" in body
        )
        if wrong_cta:
            issues.append(f"wrong_locale_cta_links={wrong_cta}")

        cta_text = CTA_TEXT.get(lang, "")
        if cta_text and body.count(cta_text) < 3:
            issues.append(f"cta_text '{cta_text}' count < 3")

        if len(body) < min_len:
            issues.append(f"body_len={len(body)} < min {min_len} (zh-cn {zh_len})")

        # Native vs English fallback
        if lang != "en":
            en_h2_hits = sum(1 for m in ENGLISH_H2_MARKERS if m in body)
            native_markers = NATIVE_H2.get(lang, [])
            native_hits = sum(1 for m in native_markers if m in body)
            if en_h2_hits >= 4 and native_hits < 2:
                issues.append(
                    f"likely English fallback (en_h2={en_h2_hits}, native_h2={native_hits})"
                )
            if en_h2_hits >= 6:
                issues.append(f"too many English h2 markers ({en_h2_hits})")

        # zh-cn content in non Chinese locales
        if lang not in ("zh-cn", "zh-tw") and "线索从哪来" in body:
            issues.append("contains zh-cn section title")
        if lang != "pt":
            pt_hits = sum(1 for m in PT_MARKERS if m in body)
            if pt_hits >= 2:
                issues.append(f"Portuguese fallback detected ({pt_hits} markers)")

        if issues:
            failures.append(f"{lang}: " + "; ".join(issues))

    print(f"zh-cn baseline: h2={zh_h2}, table_pipe_rows={zh_tables}, ctas={zh_cta}, chars={zh_len}")
    print(f"min body chars for other locales: {min_len}")
    print()

    if failures:
        print("FAILURES:")
        for f in failures:
            print(f"  - {f}")
        return 1

    print(f"PASS: all {len(LOCALES)} locales exist with native CTAs and parity vs zh-cn")
    return 0


if __name__ == "__main__":
    sys.exit(main())
