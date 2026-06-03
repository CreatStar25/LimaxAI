#!/usr/bin/env python3
"""Audit Codex office blog: native content, parity vs zh-cn, SEO, localized CTAs."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "blog"
SLUG = "openai-codex-office-62-apps-110-skills-update.md"
LOCALES = [
    "en", "zh-cn", "zh-tw", "es", "ar", "pt", "id", "ms", "fr", "ru",
    "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl",
    "sv", "uk", "ro",
]

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

ZH_CN_H2 = ["先看数据", "六个插件", "GPT 教程", "小结"]
EN_H2 = ["By the numbers", "Six plugins", "GPT tutorial", "Summary"]
EN_BODY_MARKERS = [
    "That points to penetration in white-collar",
    "Each plugin packages the software",
    "The gap from “I need an interactive app”",
    "Keywords: chatgpt, GPT-5.6, gpt tutorial.",
    "Published: June 3, 2026",
    "OpenAI shipped a major **Codex** refresh",
]
ES_BODY_MARKERS = ["Los **no desarrolladores** son", "Más plugins (finanzas"]


def parse(path: Path) -> tuple[dict, str]:
    raw = path.read_text(encoding="utf-8")
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
    zh_meta, zh_body = parse(zh_path)
    zh_h2 = len(re.findall(r"^## ", zh_body, re.M))
    zh_tables = zh_body.count("\n| ")
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
            issues.append(f"lang fm={meta.get('lang')}")
        if meta.get("pubDate") != "2026-06-03":
            issues.append("pubDate")
        if not meta.get("title") or len(meta.get("title", "")) < 12:
            issues.append("title too short")
        if not meta.get("description") or len(meta.get("description", "")) < 40:
            issues.append("description too short")
        if "chatgpt" not in meta.get("tags", "").lower():
            issues.append("missing chatgpt tag")
        if not meta.get("heroImage"):
            issues.append("missing heroImage")

        h2 = len(re.findall(r"^## ", body, re.M))
        if h2 < zh_h2:
            issues.append(f"h2={h2}<{zh_h2}")
        if body.count("\n| ") < int(zh_tables * 0.85):
            issues.append(f"tables<{int(zh_tables * 0.85)}")
        if len(body) < min_len:
            issues.append(f"len={len(body)}<{min_len}")

        cta_url = f"limaxai.com/{lang}/chat?model=gpt-5.4"
        if body.count(cta_url) < 3:
            issues.append(f"cta_url={body.count(cta_url)}")
        wrong = sum(
            1 for o in LOCALES if o != lang and f"limaxai.com/{o}/chat?model=gpt-5.4" in body
        )
        if wrong:
            issues.append(f"wrong_cta_locale={wrong}")
        cta = CTA_TEXT.get(lang, "")
        if cta and body.count(cta) < 3:
            issues.append(f"cta_text<{3}")
        if "开始使用GPT" in body and lang not in ("zh-cn",):
            issues.append("zh-cn CTA in non zh-cn")
        if "Start Using GPT" in body and lang != "en":
            issues.append("en CTA in non en")

        if lang not in ("zh-cn", "zh-tw") and sum(1 for m in ZH_CN_H2 if m in body) >= 2:
            issues.append("zh-cn h2 leak")
        if lang != "en":
            en_h2 = sum(1 for m in EN_H2 if m in body)
            en_body = sum(1 for m in EN_BODY_MARKERS if m in body)
            if en_h2 >= 4 or en_body >= 2:
                issues.append(f"EN fallback h2={en_h2} body={en_body}")
        if lang == "pt" and sum(1 for m in ES_BODY_MARKERS if m in body) >= 1:
            issues.append("Spanish fallback in pt")
        if "codex-260603-1.png" not in body:
            issues.append("missing hero in body")

        if issues:
            failures.append(f"{lang}: " + "; ".join(issues))

    print(f"zh-cn: h2={zh_h2}, tables≈{zh_tables}, chars={zh_len}, min_len={min_len}")
    if failures:
        print("\nFAILURES:")
        for f in failures:
            print(f"  - {f}")
        return 1
    print(f"\nPASS: all {len(LOCALES)} locales — native, parity, SEO, CTAs")
    return 0


if __name__ == "__main__":
    sys.exit(main())
