import { getCounts } from "@/lib/counterStore";
import { getSessionUsername } from "@/lib/session";

// GET /api/counters -> { red, green, blue } for the signed-in user
export async function GET() {
  const username = await getSessionUsername();
  if (!username) {
    return Response.json({ error: "Not signed in" }, { status: 401 });
  }

  return Response.json(await getCounts(username));
}
