import type { NextRequest } from "next/server";
import { isColor } from "@/lib/counters";
import { incrementCount } from "@/lib/mockStore";

// POST /api/counters/:color -> increments one counter, returns all counts
export async function POST(_req: NextRequest, ctx: RouteContext<"/api/counters/[color]">) {
  const { color } = await ctx.params;

  if (!isColor(color)) {
    return Response.json({ error: `Unknown counter: ${color}` }, { status: 400 });
  }

  return Response.json(incrementCount(color));
}
