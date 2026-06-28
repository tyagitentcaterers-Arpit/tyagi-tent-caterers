# Tyagi Tent & Caterers

<!-- Production website repository. -->

Production website for Tyagi Tent & Caterers.

## Status

The production architecture is initialized. No page or UI section has been built yet.

## Technology

- Next.js 15 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- shadcn/ui foundation
- Motion for React (Framer Motion)
- ESLint and Prettier

## Local development

Use Node.js 20 or newer.

```bash
cp .env.example .env.local
npm install
npm run dev
```

## Quality checks

```bash
npm run check
```

This runs linting, TypeScript validation, formatting checks, and a production build.

## Source structure

```text
src/
├── app/                 App Router, metadata, robots, and sitemap
├── components/
│   ├── common/          Reusable application components
│   ├── layout/          Shared layout components
│   ├── providers/       Client and context providers
│   └── ui/              shadcn/ui primitives
├── config/              Typed application configuration
├── hooks/               Reusable React hooks
├── lib/                 Shared utilities and integrations
└── types/               Shared TypeScript types
```

## Environment

| Variable               | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL used by metadata, robots, and sitemap |

Copy `.env.example` to `.env.local` for local overrides. Secrets and local environment files are ignored by Git.
