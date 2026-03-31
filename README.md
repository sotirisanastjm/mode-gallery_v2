# Mode Gallery v2

Next.js App Router project with SSR and static server-side data (no CMS, no database).

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Cloudflare Workers deploy (OpenNext)

This repository is configured for Cloudflare Workers using `@opennextjs/cloudflare`.

```bash
npm install
npm run deploy
```

Useful commands:

```bash
npm run preview
```

## Environment variables

Use `.env` based on `.env.example`:

- `NEXT_PUBLIC_SITE_URL` - your production URL
