import { connection } from "next/server";
import { getCounts } from "@/lib/mockStore";

// GET /api/counters -> { red, green, blue }
export async function GET() {
  await connection();
  return Response.json(getCounts());
}
