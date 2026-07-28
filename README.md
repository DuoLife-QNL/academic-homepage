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

The project builds to a Cloudflare Worker-compatible ESM bundle through
[vinext](https://github.com/cloudflare/vinext). It can also be adapted for a
conventional Node.js or static hosting workflow on `duolife.cc`.

```bash
npm run build
npm run start
```

Deployment-specific server configuration is intentionally kept out of this
repository until the target path and domain are finalized.

## Content

- Main page: `app/page.tsx`
- Visual system: `app/globals.css`
- Metadata and social preview: `app/layout.tsx`, `public/og.png`

