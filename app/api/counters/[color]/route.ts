import type { NextRequest } from "next/server";
import type { Color } from "@/lib/counters";
import { incrementCount } from "@/lib/mockStore";

// POST /api/counters/:color -> increments one counter, returns all counts
export async function POST(_req: NextRequest, { params }: { params: { color: Color } }) {
  const color = params.color;

  return Response.json(incrementCount(color));
}
