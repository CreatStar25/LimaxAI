#!/usr/bin/env python3
"""Verify generated GPT 5.5 blog locales: markers and length vs zh-cn."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "src" / "content" / "blog"
SLUG = "openai-gpt-5-5-prompt-guide-7-key-changes.md"
LOCALES = [
    "zh-tw", "ja", "ko", "es", "fr", "de", "pt", "it", "ru", "uk", "pl",
    "nl", "sv", "ro", "ar", "id", "ms", "vi", "th", "tr", "hi", "fa",
]
MARKERS = ("Simon", "Willison", "Codex", "Optimize")
MIN_RATIO = 0.85


def body_text(path: Path) -> str:
    text = path.read_text(encoding="utf-8")
    if text.startswith("---"):
        return text.split("---", 2)[2]
    return text


def main() -> int:
    zh_path = ROOT / "zh-cn" / SLUG
    zh_len = len(body_text(zh_path))
    min_len = int(zh_len * MIN_RATIO)
    failed = []
    for lang in LOCALES:
        path = ROOT / lang / SLUG
        if not path.exists():
            failed.append((lang, "missing file"))
            continue
        body = body_text(path)
        blen = len(body)
        missing = [m for m in MARKERS if m not in body]
        if missing or blen < min_len:
            failed.append((lang, f"len={blen} need>={min_len} missing={missing}"))
    print(f"zh-cn body chars: {zh_len}, min required: {min_len}")
    if failed:
        for lang, msg in failed:
            print(f"FAIL {lang}: {msg}")
        return 1
    print(f"OK all {len(LOCALES)} locales")
    return 0


if __name__ == "__main__":
    sys.exit(main())
