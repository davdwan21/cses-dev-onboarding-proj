# Task 3: Data modeling (Prisma)

The in-memory mock is gone. Counters are now stored in a SQLite database through Prisma. Each user gets their own set of counters. Until sign-in exists (task 4), every request uses a fixed user, `demo`.

The schema is empty, and incrementing a counter is not implemented.

## Setup

```bash
git checkout task-3
npm install
```

## What to do

1. Model the data in `prisma/schema.prisma`. Follow the requirements in the `TODO` comment:
   - A User has a unique `username`.
   - A User has many Counters.
   - A Counter has a `color` (`"red" | "green" | "blue"`) and an integer `value` that starts at 0.
   - A user can have at most one counter per color.
2. Use the model and field names that `lib/counterStore.ts` already queries.
3. Create and apply a migration:

   ```bash
   npx prisma migrate dev --name init
   ```

4. Implement `incrementCount` in `lib/counterStore.ts`:
   - Create the user if they don't exist yet.
   - Create the counter on the first click for that color.
   - Otherwise add 1 to the existing counter.
   - Return all of that user's counts.
5. Run `npm run dev` and check that counts survive a dev server restart.
6. Commit the schema, the migration folder and your code. Do not commit `prisma/dev.db`.

Browse the data with `npx prisma studio`.

## Hints

- "At most one counter per color" is a constraint across two fields. Look up compound unique constraints in the Prisma docs.
- `prisma.counter.upsert` with `{ increment: 1 }` does create-or-update in one call.
- What should happen to a user's counters when the user is deleted?

## Check your answer

```bash
git diff task-3 task-3-solution
```
