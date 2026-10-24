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

# Small, audited mobile adjustments on the *published copy* only.
# Framer's original markup/CSS stays intact under framer-export/ for rollback.
RESPONSIVE_CSS = """<style id="hannah-pages-responsive-fixes">
@media (max-width:809px) {
  /* Framer's 334px hero row clips its text on 320px phones. */
  #hero .framer-1bc5zmt {
    width: min(334px, calc(100vw - 32px)) !important;
    max-width: 100% !important;
  }
  #hero .framer-1bc5zmt h1 {
    font-size: clamp(26px, 8.5vw, 32px) !important;
    line-height: 1.18 !important;
  }

  /* Keep the contact headline in proportion with a small phone screen. */
  #contact h2 {
    font-size: clamp(39px, 10.5vw, 52px) !important;
    line-height: 1.13 !important;
  }

  /* Footer rich-text anchors were only 14-16px tall on phones. */
  footer.framer-MDJKr a[data-styles-preset="ro7OPezbn"],
  a[href$="#projects"] {
    display: inline-flex !important;
    align-items: center !important;
    min-height: 56px !important; /* parent animation scales by ~0.8 on mobile */
  }

  /* Framer retained 619px fixed widths on small project-detail layouts. */
  .framer-cVd3z .framer-8cti9g,
  .framer-cVd3z .framer-12mrlz6,
  .framer-cVd3z .framer-1bmm2r6,
  .framer-cVd3z .framer-1jql7gu,
  .framer-cVd3z .framer-63ghmk,
  .framer-cVd3z .framer-1cogktb,
  .framer-cVd3z .framer-1aor2sy,
  .framer-cVd3z .framer-15swqiz,
  .framer-cVd3z .framer-uiup3i,
  .framer-cVd3z .framer-18d9xcv,
  .framer-cVd3z .framer-gink0f,
  .framer-cVd3z .framer-1jx5pu5,
  .framer-cVd3z .framer-15xyo1e,
  .framer-cVd3z .framer-1bp2753,
  .framer-cVd3z .framer-mf5yw0 {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
  /* USDA's mobile research / solution rows were fixed at 283px despite
     containing paragraphs taller than their containers. Let text determine height. */
  .framer-cVd3z .framer-1khcv5s,
  .framer-cVd3z .framer-qs2onr,
  .framer-cVd3z .framer-1adbrjk,
  .framer-cVd3z .framer-zi4g4b,
  .framer-cVd3z .framer-v2kfmf,
  .framer-cVd3z .framer-op3h9x,
  .framer-cVd3z .framer-15a1zch,
  .framer-cVd3z .framer-ju8j3o {
    height: auto !important;
    min-height: 0 !important;
    gap: 20px !important;
    align-items: stretch !important;
  }
  .framer-cVd3z .framer-1khcv5s > *,
  .framer-cVd3z .framer-qs2onr > *,
  .framer-cVd3z .framer-1adbrjk > *,
  .framer-cVd3z .framer-zi4g4b > *,
  .framer-cVd3z .framer-v2kfmf > *,
  .framer-cVd3z .framer-op3h9x > *,
  .framer-cVd3z .framer-15a1zch > *,
  .framer-cVd3z .framer-ju8j3o > * {
    flex: 0 0 auto !important;
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
  /* USDA's research text and findings headings are 337–344px wide even
     on a 320px phone; reduce them to the actual column width. */
  .framer-cVd3z .framer-19eudy1,
  .framer-cVd3z .framer-y23cpf,
  .framer-cVd3z .framer-vspdrj,
  .framer-cVd3z .framer-wfo80i,
  .framer-cVd3z .framer-1l6uffy,
  .framer-cVd3z .framer-5yjtcl,
  .framer-cVd3z .framer-1lijeez,
  .framer-cVd3z .framer-6r5pw2 {
    width: 100% !important;
    min-width: 0 !important;
    max-width: 100% !important;
  }
  .framer-cVd3z .framer-j3ola8,
  .framer-cVd3z .framer-1ms2bvw,
  .framer-cVd3z .framer-1qvqpo7 {
    overflow: visible !important;
    min-width: 0 !important;
  }
  /* Long unbroken case-study URLs should wrap instead of being cut off. */
  .framer-cVd3z .framer-1g4qqgi,
  .framer-cVd3z .framer-1n4f1i5,
  .framer-cVd3z .framer-x150cb {
    max-width: calc(100vw - 48px) !important;
    min-width: 0 !important;
  }
  .framer-cVd3z a[href^="http"] {
    overflow-wrap: anywhere !important;
    word-break: break-word !important;
  }
}
a:focus-visible, button:focus-visible, input:focus-visible {
  outline: 2px solid #eb4f41 !important;
  outline-offset: 3px !important;
}
</style>"""

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
        # Safety net: future Framer captures must not restore either legacy
        # contact address in text, labels, or mailto links.
        for outdated in ("hello@artemis.com", "hpark@college.harvard.edu"):
            result = result.replace(outdated, "hannahpark0424@gmail.com")
        result = result.replace(
            "https://drive.google.com/drive/u/0/home",
            "https://drive.google.com/file/d/1Bd4iLsRflw9EOaKZE4lgFxXbWA2hW6Yy/view?usp=sharing",
        )
        result = result.replace("</head>", RESPONSIVE_CSS + "\n</head>", 1)
        if any(old in result for old in ("hello@artemis.com", "hpark@college.harvard.edu")):
            raise RuntimeError(f"Outdated public contact in {route}")
        if route in ("/", "/about") and "hannahpark0424@gmail.com" not in result:
            raise RuntimeError(f"Contact address absent from {route}")
        file.write_text(result, encoding="utf-8")
        total += changes
        print(f"{route}: fixed {changes} route-relative links")
    print(f"Prepared Pages site at {base}: {total} corrected links")
    assert total >= 10, "No Framer relative routes found: likely changed page structure"

if __name__ == "__main__":
    main()
