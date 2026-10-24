#!/usr/bin/env python3
"""Adapt only relative links for GitHub Pages' trailing-slash project URLs.

The archived framer-export HTML is byte-for-byte unchanged. Applied solely to
published dist HTML, keeping all visual CSS, assets and animations untouched.
"""
from __future__ import annotations
import argparse
import html
import json
from pathlib import Path
import re
from urllib.parse import urljoin, urlsplit
from urllib.parse import unquote

ORIGIN = "https://affable-impact-924611.framer.app"
HREF_RE = re.compile(r'(?P<start>\bhref\s*=\s*")(?P<value>[^"]*)(?P<end>")')

def convert_link(link: str, original_path: str, base: str) -> str:
    if not link.startswith(("./", "../", "/")) or link.startswith("//"):
        return link
    target = urlsplit(urljoin(ORIGIN + original_path, html.unescape(link)))
    if target.netloc != urlsplit(ORIGIN).netloc:
        return link
    # Framer uses clean extensionless URLs; GitHub Pages serves directories.
    route = unquote(target.path).strip("/")
    path = base + (route + "/" if route else "")
    if target.query:
        path += "?" + target.query
    if target.fragment:
        path += "#" + target.fragment
    return html.escape(path, quote=True)

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", default="dist")
    parser.add_argument("--base", default="/hannah-park-portfolio/")
    options = parser.parse_args()
    root = Path(options.root)
    base = "/" + options.base.strip("/") + "/" if options.base.strip("/") else "/"
    routes = json.loads((root / "framer-snapshot.json").read_text())["routes"]
    total = 0
    for route, meta in routes.items():
        file = root / meta["file"]
        original = file.read_text(encoding="utf-8")
        changes = 0
        def rewrite(match):
            nonlocal changes
            old = match.group("value")
            new = convert_link(old, route, base)
            if old != new:
                changes += 1
            return match.group("start") + new + match.group("end")
        result = HREF_RE.sub(rewrite, original)
        # Fix confirmed incorrect destinations without altering visible portfolio design.
        # The Framer-export archive remains untouched for rollback.
        result = result.replace("mailto:hello@artemis.com", "mailto:hpark@college.harvard.edu")
        result = result.replace(
            "https://drive.google.com/drive/u/0/home",
            "https://drive.google.com/file/d/1Bd4iLsRflw9EOaKZE4lgFxXbWA2hW6Yy/view?usp=sharing",
        )
        file.write_text(result, encoding="utf-8")
        total += changes
        print(f"{route}: fixed {changes} route-relative links")
    print(f"Prepared Pages site at {base}: {total} corrected links")
    assert total >= 10, "No Framer relative routes found: likely changed page structure"

if __name__ == "__main__":
    main()
