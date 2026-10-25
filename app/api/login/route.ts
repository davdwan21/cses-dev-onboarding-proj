import { cookies } from "next/headers";
import { getOrCreateUser } from "@/lib/counterStore";
import { SESSION_COOKIE } from "@/lib/session";

// POST /api/login  body: { username } -> sets the session cookie
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const username = typeof body?.username === "string" ? body.username.trim() : "";

  if (!username) {
    return Response.json({ error: "Username is required" }, { status: 400 });
  }

  await getOrCreateUser(username);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, username, { httpOnly: true, sameSite: "lax", path: "/" });

  return Response.json({ username });
}
