# Hongzheng Li — Academic Homepage

Personal academic website for Hongzheng Li (李鸿政), a Ph.D. candidate at
Beijing University of Posts and Telecommunications.

The site presents research interests, selected publications, and experience in
ML systems, large-scale recommendation, distributed GNN training, and efficient
LLM inference.

## Local development

Requirements:

- Node.js `>=22.13.0`
- npm

```bash
npm install
npm run dev
```

The local preview is available at `http://localhost:3000`.

## Validation

```bash
npm test
```

This creates a production build and verifies the rendered homepage metadata and
core content.

## Deployment

The project deploys to Cloudflare Workers through
[vinext](https://github.com/cloudflare/vinext). The production Worker serves
`lihongzheng.duolife.cc`; the GitHub repository remains the source of truth for
automatic builds from `main`.

```bash
npm run build
npm run deploy
```

## Content

- Main page: `app/page.tsx`
- Visual system: `app/globals.css`
- Metadata and social preview: `app/layout.tsx`, `public/og.png`
