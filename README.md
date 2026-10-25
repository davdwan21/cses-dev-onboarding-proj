# Counter App (Onboarding)

A tiny Next.js app: three buttons, three counters. Used for onboarding tasks 0-4.

## Setup

```bash
git clone https://github.com/davdwan21/onboarding-proj.git
cd onboarding-proj
npm install
npm run dev
```

Open http://localhost:3000.

## Tasks

Each task has its own branch. Check out the branch, then follow your task sheet.

| Task | Branch   | Topic                     |
| ---- | -------- | ------------------------- |
| 0    | `main`   | Project setup             |
| 1    | `task-1` | Frontend bugfixing        |
| 2    | `task-2` | API routes                |
| 3    | `task-3` | Data modeling (Prisma)    |
| 4    | `task-4` | Auth (sign-in + proxy)    |

## Layout

- `app/page.tsx` — the counter page
- `components/CounterButton.tsx` — reusable button + count display
- `lib/counters.ts` — shared types
- `app/api/counters/` — API routes
- `lib/counterStore.ts` — DB reads/writes
- `lib/db.ts` — Prisma client
- `prisma/schema.prisma` — DB schema (SQLite, file at `prisma/dev.db`)

## Database

After changing `prisma/schema.prisma`:

```bash
npx prisma migrate dev --name <describe-change>
```

Browse data with `npx prisma studio`.
