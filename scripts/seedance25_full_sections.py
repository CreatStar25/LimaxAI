# Full section translations for Seedance 2.5 blog.

VIDEO_BLOCK = """<video controls width="100%" style="max-width: 800px; margin: 24px auto; display: block; border-radius: 8px;">
<source src="{video}" type="video/mp4">
</video>"""

try:
    from seedance25_locale_packs import PACKS
except ImportError:
    from scripts.seedance25_locale_packs import PACKS  # type: ignore

FULL_SECTIONS = PACKS
