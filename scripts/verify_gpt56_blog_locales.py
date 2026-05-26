#!/usr/bin/env python3
"""Verify GPT-5.6 release blog: all locales, CTAs, slug, structure."""

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
HERO = "https://img.limaxai.com/aiweb/chatgpt-260526-1.png"
MODEL = "gpt-5.4"
MIN_RATIO = 0.55
REQUIRED_HEADINGS = 8  # ## count minimum in body


def body_text(path: Path) -> str:
    text = path.read_text(encoding="utf-8")
    if text.startswith("---"):
        return text.split("---", 2)[2]
    return text


def main() -> int:
    zh_path = ROOT / "zh-cn" / SLUG
    if not zh_path.exists():
        print(f"FAIL: missing {zh_path}")
        return 1
    zh_len = len(body_text(zh_path))
    min_len = int(zh_len * MIN_RATIO)
    failed: list[tuple[str, str]] = []

    for lang in LOCALES:
        path = ROOT / lang / SLUG
        if not path.exists():
            failed.append((lang, "missing file"))
            continue
        raw = path.read_text(encoding="utf-8")
        body = body_text(path)
        blen = len(body)
        h2 = len(re.findall(r"^## ", body, re.M))
        cta_count = body.count(f"limaxai.com/{lang}/chat?model={MODEL}")
        issues: list[str] = []
        if blen < min_len:
            issues.append(f"len={blen} need>={min_len}")
        if h2 < REQUIRED_HEADINGS:
            issues.append(f"h2={h2} need>={REQUIRED_HEADINGS}")
        if cta_count < 3:
            issues.append(f"cta_links={cta_count} need>=3")
        if HERO not in raw:
            issues.append("missing heroImage/body image")
        if 'lang: "' + lang + '"' not in raw:
            issues.append("lang mismatch in frontmatter")
        if issues:
            failed.append((lang, "; ".join(issues)))

    print(f"zh-cn body chars: {zh_len}, min required: {min_len}")
    if failed:
        for lang, msg in failed:
            print(f"FAIL {lang}: {msg}")
        return 1
    print(f"OK all {len(LOCALES)} locales for slug {SLUG.replace('.md', '')}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
