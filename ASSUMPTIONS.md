# Assumptions

- Email delivery is out of scope; invite links are generated and displayed via API responses and stored in the database.
- File storage uses the local `/uploads` directory with an abstraction to swap to S3/GCS later.
- AI provider is abstracted; default implementation is a simple echo/placeholder using environment-provided API keys. No actual third-party calls are executed in development without configuration.
- PDF generation and advanced field validation are stubbed; background jobs are wired to a Redis-backed queue but heavy jobs are not implemented.
- Rich-text/content is stored as JSON produced by the editor; validation is minimal to allow flexibility.
- Multi-workspace support is simplified: users switch current workspace via API parameter; no cross-tenant leakage is expected.
- JWT secrets and cookie security rely on environment configuration; HTTPS termination is expected in production.
- Mobile experience uses responsive layouts; native mobile apps are not part of scope.

## Non-goals
- Payment/billing, audit-compliant e-signature certificates, and SOC/ISO compliance are not included.
- External email sending, SMS, and webhook callbacks are omitted.
- Full-text search and advanced analytics are deferred.

## Future improvements
- Replace in-memory AI context selection with pgvector-backed semantic search.
- Add granular permission policies per document and per field.
- Implement PDF generation and downloadable signed copies.
- Integrate transactional email for invites and notifications.
- Add end-to-end tests and production-ready CI/CD pipelines.
