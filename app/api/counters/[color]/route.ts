import type { NextRequest } from "next/server";
import type { Color } from "@/lib/counters";
import { incrementCount } from "@/lib/mockStore";
import { isColor } from "@/lib/counters";

// POST /api/counters/:color -> increments one counter, returns all counts
export async function POST(_req: NextRequest, { params }: { params: Promise<{ color: Color }> }) {
  const color = (await params).color;
  if(!isColor(color)) {
    return Response.json({ error: "Invalid color" }, { status: 400 });
  }
  return Response.json(incrementCount(color));
}
