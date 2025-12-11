# System Design

## Overview
A monorepo hosts a Next.js frontend (`apps/web`) and NestJS backend (`apps/api`) sharing types and UI primitives. PostgreSQL + Prisma provide persistence; Redis (optional) supports BullMQ queues. File storage uses a local `/uploads` adapter with an interface to swap providers. AI features are abstracted behind an `AiProvider` interface with environment-driven configuration.

## Architecture Diagram
```
[Next.js Web] --HTTP/HTTPS--> [NestJS API] --Prisma--> [PostgreSQL]
                                    |                 
                                    |--BullMQ--> [Redis] (optional)
                                    |--Filesystem--> [/uploads]
                                    |--AI Provider--> [LLM Vendor]
```

## Modules
- **Auth**: JWT access/refresh tokens, guards for protected routes, basic email/password.
- **Workspaces**: workspace CRUD, membership roles (Owner/Admin/Member), invite link generation.
- **Documents/Templates**: CRUD, status transitions, recipients, variables, activity timeline. Templates reuse document model with an `isTemplate` flag.
- **Signing**: generates per-recipient signing tokens; public signing endpoint consumes token and updates status/events.
- **AI**: summarization and question answering endpoints backed by pluggable provider; currently a mock/in-memory strategy with TODO to integrate embeddings/pgvector.
- **Uploads**: simple local storage abstraction supporting future S3/GCS swap.

## Data Flow
1. Users authenticate and receive access + refresh tokens.
2. Authenticated requests include access token; guards resolve current user and workspace.
3. Document operations read/write Prisma models; activity events are appended per mutation.
4. AI endpoints fetch document content, build context (or vector search placeholder), and delegate to the AI provider.
5. Signing links embed opaque tokens referencing recipient + document; public handler validates token and records signatures.

## Deployment
- Local development uses `docker-compose` for PostgreSQL (and Redis if desired).
- Both apps can run via `npm run dev --workspace <app>`.
- Environment variables configure DB URL, JWT secrets, AI provider keys, and storage paths.
