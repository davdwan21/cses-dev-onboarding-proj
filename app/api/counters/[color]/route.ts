import type { NextRequest } from "next/server";
import { isColor } from "@/lib/counters";
import { incrementCount } from "@/lib/counterStore";
import { getSessionUsername } from "@/lib/session";

// POST /api/counters/:color -> increments one counter, returns all counts
export async function POST(_req: NextRequest, ctx: RouteContext<"/api/counters/[color]">) {
  const username = await getSessionUsername();
  if (!username) {
    return Response.json({ error: "Not signed in" }, { status: 401 });
  }

  const { color } = await ctx.params;

  if (!isColor(color)) {
    return Response.json({ error: `Unknown counter: ${color}` }, { status: 400 });
  }

  return Response.json(await incrementCount(username, color));
}
