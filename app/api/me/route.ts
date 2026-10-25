import { getSessionUsername } from "@/lib/session";

// GET /api/me -> { username }
export async function GET() {
  return Response.json({ username: await getSessionUsername() });
}
