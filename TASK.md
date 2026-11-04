# Task 4: Auth (sign-in + proxy)

Every user currently shares the `demo` counters. Add sign-in so each user sees only their own counters.

Sign-in is by username only, with no password. The session is a cookie that holds the username (see `lib/session.ts`). The sign-in page (`app/login/page.tsx`), `GET /api/me` and `POST /api/logout` already work.

## Setup

```bash
git checkout task-4
npm install
npx prisma migrate dev
npm run dev
```

## What to do

1. Implement `POST /api/login` in `app/api/login/route.ts`:
   - Read `username` from the JSON body. Empty or missing must return `400`.
   - Make sure the user exists (`lib/counterStore.ts`).
   - Set the session cookie to the username. Make it `httpOnly` so browser JS can't read it.
   - Return `{ username }`.
2. Implement the guard in `proxy.ts`:
   - Signed in means the request has the session cookie.
   - Signed-out API requests (`/api/...`) return `401` with JSON `{ error: "Not signed in" }`.
   - Signed-out page requests redirect to `/login`.
3. Update both counter routes in `app/api/counters/` to use the signed-in user instead of `DEMO_USERNAME`. Then remove `DEMO_USERNAME`.
4. Test it:
   - Signed out, visiting `/` redirects to `/login`.
   - Sign in as two different users in two browsers (or a private window). Each user has separate counts.
   - Sign out, then confirm `curl -i http://localhost:3000/api/counters` returns `401`.
5. Commit your work.

## Hints

- This project uses a newer Next.js, where middleware is called `proxy`. Read `node_modules/next/dist/docs/` before writing `proxy.ts`.
- `cookies()` from `next/headers` is async in this version.
- The proxy only runs on the paths in `config.matcher`. Should the route handlers also check the session?
- Read the `NOTE` in `lib/session.ts`. In your write-up, explain why this cookie is not safe for a real app.

## Check your answer

```bash
git diff task-4 task-4-solution
```
