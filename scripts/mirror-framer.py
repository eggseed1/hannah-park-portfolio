#!/usr/bin/env python3
"""Snapshot published Framer pages with the portfolio owner's current contact email.

Layout, CSS, interactions, and asset references are preserved, while outdated
public contact addresses are replaced both in links and visible copy.
Run: python3 scripts/mirror-framer.py --out framer-export
"""
from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET

SOURCE = "https://affable-impact-924611.framer.app"
CONTACT_EMAIL = "hannahpark0424@gmail.com"
OUTDATED_CONTACT_EMAILS = ("hello@artemis.com", "hpark@college.harvard.edu")

def update_contact_email(document: bytes) -> bytes:
    for old in OUTDATED_CONTACT_EMAILS:
        document = document.replace(old.encode("utf-8"), CONTACT_EMAIL.encode("utf-8"))
    return document

# Keep all known routes, including private case-study gates.
ROUTES = (
    "/",
    "/about",
    "/portfolio/coinbase-2025-summer",
    "/portfolio/ibm-2024-summer",
    "/portfolio/hanhwa-investment",
    "/portfolio/usda",
    "/coinbase",
    "/ibm",
)

def fetch(url: str) -> bytes:
    last_error = None
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers={
                "User-Agent": "Mozilla/5.0 (compatible; PortfolioFramerSnapshot/1.0)",
                "Accept": "text/html,application/xml,text/plain;q=0.9,*/*;q=0.5",
            })
            with urllib.request.urlopen(request, timeout=35) as response:
                if response.status != 200:
                    raise RuntimeError(f"Unexpected status {response.status} for {url}")
                return response.read()
        except (OSError, urllib.error.URLError, RuntimeError) as exc:
            last_error = exc
            if attempt < 2:
                time.sleep(1 + attempt)
    raise RuntimeError(f"Cannot capture {url}: {last_error}")

def additional_routes():
    try:
        xml = ET.fromstring(fetch(SOURCE + "/sitemap.xml"))
        found = set()
        for node in xml.iter():
            if node.tag.rsplit("}", 1)[-1] != "loc" or not node.text:
                continue
            url = urllib.parse.urlparse(node.text.strip())
            if url.hostname not in ("affable-impact-924611.framer.app", "hannah-park.com", "www.hannah-park.com"):
                continue
            path = urllib.parse.unquote(url.path).rstrip("/") or "/"
            if re.fullmatch(r"/[A-Za-z0-9_./-]*", path) and ".." not in path.split("/"):
                found.add(path)
        return sorted(found)
    except Exception as exc:
        print(f"Sitemap unavailable; using known routes: {exc}", flush=True)
        return []

def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--out", default="framer-export")
    args = parser.parse_args()
    output = Path(args.out)
    output.mkdir(parents=True, exist_ok=True)
    manifest = {}
    routes = list(dict.fromkeys([*ROUTES, *additional_routes()]))
    for path in routes:
        url = SOURCE + path
        page = update_contact_email(fetch(url))
        if b"data-framer" not in page or b"<html" not in page.lower():
            raise RuntimeError(f"Framer document check failed: {url}")
        destination = output / path.lstrip("/") / "index.html" if path != "/" else output / "index.html"
        destination.parent.mkdir(parents=True, exist_ok=True)
        destination.write_bytes(page)
        digest = hashlib.sha256(page).hexdigest()
        manifest[path] = {"file": str(destination.relative_to(output)), "bytes": len(page), "sha256": digest}
        print(f"Captured {path} ({len(page):,} bytes; sha256 {digest[:12]})", flush=True)

    # GitHub Pages uses 404.html for invalid paths. Existing paths are real pages.
    # Don't disguise missing pages as a successful homepage: preserve useful 404 semantics.
    (output / "404.html").write_text(
        '<!doctype html><html lang="en"><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width,initial-scale=1">'
        '<title>Page not found</title><body style="font:16px system-ui;padding:3rem">'
        '<h1>Page not found</h1><p><a href="../">Back to portfolio</a></p></body></html>',
        encoding="utf-8",
    )
    (output / ".nojekyll").touch()
    # Keep a deterministic manifest so source snapshots don't churn on every build.
    (output / "framer-snapshot.json").write_text(
        json.dumps({"source": SOURCE, "routes": manifest}, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"Published HTML captured for {len(routes)} routes in {output}; public email normalized to {CONTACT_EMAIL}", flush=True)

if __name__ == "__main__":
    main()
