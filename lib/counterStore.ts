import { prisma } from "./db";
import { isColor, type Color, type Counts } from "./counters";

// Until sign-in exists (task 4), every request uses this user.
export const DEMO_USERNAME = "demo";

export async function getOrCreateUser(username: string) {
  return prisma.user.upsert({
    where: { username },
    create: { username },
    update: {},
  });
}

export async function getCounts(username: string): Promise<Counts> {
  const counters = await prisma.counter.findMany({ where: { user: { username } } });

  const counts: Counts = { red: 0, green: 0, blue: 0 };
  for (const counter of counters) {
    if (isColor(counter.color)) counts[counter.color] = counter.value;
  }
  return counts;
}

export async function incrementCount(username: string, color: Color): Promise<Counts> {
  // TODO (task 3): add 1 to this user's counter for `color`.
  // - Create the user if they don't exist yet (see getOrCreateUser).
  // - Create the counter if this is the first click for that color.
  // Hint: prisma.counter.upsert and `{ increment: 1 }`.
  throw new Error("incrementCount not implemented");
}
