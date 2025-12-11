# PandaDoc Clone Monorepo

## Prerequisites
- Node.js (LTS)
- pnpm package manager
- Docker (for Postgres/Redis)

## Setup
```bash
pnpm install
```

### Run databases
```bash
docker-compose up -d
```

### Environment
Copy `.env.example` to `.env` in root and each app as needed. Important variables:
- `DATABASE_URL=postgresql://pandadoc:pandadoc@localhost:5432/pandadoc`
- `JWT_SECRET` and `JWT_REFRESH_SECRET`
- `AI_API_KEY` (optional for live AI provider)

### Prisma
```bash
pnpm exec prisma generate
pnpm exec prisma migrate dev
```

### Development
Frontend:
```bash
pnpm dev:web
```
Backend:
```bash
pnpm dev:api
```

## Structure
- `apps/web` - Next.js frontend
- `apps/api` - NestJS backend
- `packages/types` - Shared TypeScript interfaces
- `packages/ui` - Shared UI primitives
- `prisma` - Prisma schema
