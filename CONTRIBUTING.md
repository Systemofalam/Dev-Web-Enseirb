# Project rules – SeenFlix

## Team

| Who      | Scope                                                     |
|----------|-----------------------------------------------------------|
| Lucas    | Backend core, DB, auth, favorites                         |
| Asad     | Backend TMDB proxy + cache, errors, validation, docs, tests, CI |
| Thibault | Frontend                                                  |

Deadline: **04/12/2026**. Tasks are tracked in [`TODO.md`](TODO.md).

## Language

Everything in **English**: code, comments, commits, PRs, docs.

## Commits

[Conventional Commits](https://www.conventionalcommits.org/): `<type>(<scope>): <message>`

| Type       | Use for                               |
|------------|---------------------------------------|
| `feat`     | New feature                           |
| `fix`      | Bug fix                               |
| `chore`    | Tooling, deps, config                 |
| `docs`     | Documentation only                    |
| `test`     | Adding / updating tests               |
| `refactor` | Code change without behaviour change  |
| `style`    | Formatting only                       |
| `ci`       | CI configuration                      |

Scope (optional): `back`, `front`, `db`, `auth`, `favorites`, `search`, …

Examples:
- `feat(auth): add POST /auth/register`
- `fix(front): redirect to login on 401`
- `chore(back): add prisma`

Message: imperative, lowercase, no final dot.

## Stack

| Layer      | Choice                                  |
|------------|-----------------------------------------|
| Runtime    | Bun (TypeScript)                        |
| Backend    | Express                                 |
| DB         | Prisma + SQLite                         |
| Validation | Zod                                     |
| Auth       | JWT access + refresh (body, stored in DB, rotation), bcrypt |
| Logs       | morgan (HTTP) + pino (app)              |
| Tests      | `bun test` (backend), Vitest + Playwright (frontend) |
| Frontend   | Vue 3, Vue Router, Pinia                |
| API docs   | `openapi.yaml` + Swagger UI on `/docs`  |

## API

Contract: [`docs/API.md`](docs/API.md). Update it **before** changing a route.

Errors are always JSON:

```json
{ "error": { "message": "Human readable", "code": "SNAKE_CASE_CODE" } }
```
