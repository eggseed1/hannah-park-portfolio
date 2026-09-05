# Hannah Park Portfolio

Code recreation of [hannah-park.com](https://hannah-park.com), originally built in Framer.

## Local

```bash
npm install
npm run dev
```

## GitHub Pages

The live recreation is in this repo. GitHub Pages deploy is in `deploy-pages.yml.example` (the GitHub token used to create the repo did not include the `workflow` scope).

To publish:

1. Copy `deploy-pages.yml.example` to `.github/workflows/pages.yml`
2. Push, then enable **Settings → Pages → GitHub Actions**

The site will be at `https://eggseed1.github.io/hannah-park-portfolio/`

To serve it on `hannah-park.com`, add a Pages custom domain and set `VITE_BASE` to `/` in that workflow.
