# Task 1: Frontend bugfixing

The counter page at http://localhost:3000 has three buttons: red, green and blue. Each one should increment its own counter. Right now, some of them don't.

## Setup

```bash
git checkout task-1
npm install
npm run dev
```

## What to do

1. Click each button and note what happens. Which counters go up? Which buttons are labeled or colored wrong?
2. Find the cause of each bug. Start in `app/page.tsx`, and read `components/CounterButton.tsx` to see what props it expects.
3. Fix the bugs so that:
   - The page shows a red, a green and a blue button.
   - Clicking a button increments only that button's counter, by 1.
4. Commit your fix.

## Hints

- There is more than one bug.
- Compare the three `<CounterButton />` lines side by side. Look closely at every prop.
- What is the difference between passing `increment` and passing `() => increment`?

## Check your answer

```bash
git diff task-1 task-1-solution
```
