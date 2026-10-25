import type { NextRequest } from "next/server";
import { isColor } from "@/lib/counters";
import { DEMO_USERNAME, incrementCount } from "@/lib/counterStore";

// POST /api/counters/:color -> increments one counter, returns all counts
export async function POST(_req: NextRequest, ctx: RouteContext<"/api/counters/[color]">) {
  // TODO (task 4): use the signed-in user instead of DEMO_USERNAME.
  const { color } = await ctx.params;

  if (!isColor(color)) {
    return Response.json({ error: `Unknown counter: ${color}` }, { status: 400 });
  }

  return Response.json(await incrementCount(DEMO_USERNAME, color));
}
