import { connection } from "next/server";
import { DEMO_USERNAME, getCounts } from "@/lib/counterStore";

// GET /api/counters -> { red, green, blue }
export async function GET() {
  await connection();
  return Response.json(await getCounts(DEMO_USERNAME));
}
