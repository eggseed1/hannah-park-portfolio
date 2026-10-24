# Hannah Park — Portfolio

The published site is a faithful snapshot of [the Framer reference](https://affable-impact-924611.framer.app/). The source snapshot and its visual CSS, markup, assets and interactions are preserved in `framer-export/`. The old React/Vite source remains in `src/` for reference, but it is **not** the deployed frontend.

## Deployment

The `.github/workflows/pages.yml` workflow:

1. Downloads all eight Framer pages and checks their contents.
2. Keeps the original documents in `framer-export/` for comparison/rollback.
3. Fixes relative links for the GitHub Pages project URL and corrects the résumé/email destinations in the **published copy**.
4. Mirrors the generated HTML to the branch root as a compatibility fallback (because Pages was configured to **Deploy from a branch: main, /(root)**).
5. Uploads and deploys the verified HTML as the Pages artifact.

Live preview: https://eggseed1.github.io/hannah-park-portfolio/

**Recommended Pages setting:** Settings → Pages → Build and deployment → Source → **GitHub Actions**. This removes competing automatic branch deployments. The branch-root mirror currently avoids blank homepages and 404s even before the source setting is switched.

## Mobile testing

The `Mobile responsive audit` workflow performs real Chromium viewport tests at 375, 393, 768 and 1365 CSS pixels for the public and gated routes, and saves screenshots + machine-readable diagnostics as a GitHub Actions artifact.

To run it manually: Actions → Mobile responsive audit → Run workflow.

## Other notes

- Original Framer-hosted fonts, imagery and runtime scripts are referenced by the copied pages; this is a published-site snapshot, **not** the editable Framer project.
- The Framer-generated HTML remains available at `framer-export/`. Updates to a published asset or layout on Framer are picked up on the next deploy.
- `src/` is an older manual React recreation and should not be used to judge the appearance of the current site.
