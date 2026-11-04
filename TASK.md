# Task 2: API routes

The counters now live on the server. The page loads counts with `GET /api/counters` and increments one with `POST /api/counters/:color`. Both routes are broken.

The "database" is an in-memory mock in `lib/mockStore.ts`. It resets when the dev server restarts.

## Setup

```bash
git checkout task-2
npm install
npm run dev
```

## What to do

1. Open the page and watch the error message. Open the browser dev tools Network tab and the terminal running `npm run dev`.
2. Fix `GET /api/counters` so the page loads the current counts.
3. Fix `POST /api/counters/:color` so clicking a button increments that counter and returns all counts.
4. Make the POST route reject unknown colors. For example, `POST /api/counters/purple` must return status `400` with a JSON error body, not crash with a `500`.
5. Commit your fix.

You can test the routes without the page:

```bash
curl http://localhost:3000/api/counters
curl -X POST http://localhost:3000/api/counters/red
curl -i -X POST http://localhost:3000/api/counters/purple
```

## Hints

- Next.js uses file-system routing. Check the exact file name it expects for a route handler.
- This project uses a newer Next.js than you may know. Read `node_modules/next/dist/docs/` for how route handlers receive `params`. Is it still a plain object?
- `lib/counters.ts` already has a helper for checking colors.

## Check your answer

```bash
git diff task-2 task-2-solution
```
