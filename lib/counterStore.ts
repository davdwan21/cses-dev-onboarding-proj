import { prisma } from "./db";
import { isColor, type Color, type Counts } from "./counters";

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
  const user = await getOrCreateUser(username);

  await prisma.counter.upsert({
    where: { userId_color: { userId: user.id, color } },
    create: { userId: user.id, color, value: 1 },
    update: { value: { increment: 1 } },
  });

  return getCounts(username);
}
