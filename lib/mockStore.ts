import type { Color, Counts } from "./counters";

// In-memory mock "database". Resets when the dev server restarts.
// Stored on globalThis so hot reloads don't wipe it.
const store = globalThis as unknown as { counts?: Counts };
store.counts ??= { red: 0, green: 0, blue: 0 };

export function getCounts(): Counts {
  return { ...store.counts! };
}

export function incrementCount(color: Color): Counts {
  const counts = store.counts!;
  if (!(color in counts)) {
    throw new Error(`Unknown counter: ${color}`);
  }
  counts[color] += 1;
  return { ...counts };
}
