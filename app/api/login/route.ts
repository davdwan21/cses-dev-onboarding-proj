// POST /api/login  body: { username } -> sets the session cookie
export async function POST(request: Request) {
  // TODO (task 4):
  // 1. Read `username` from the JSON body. Empty/missing -> 400.
  // 2. Make sure the user exists (lib/counterStore.ts).
  // 3. Set the session cookie (lib/session.ts) to the username.
  //    Use httpOnly so browser JS can't read it.
  // 4. Return { username }.
  return Response.json({ error: "Not implemented" }, { status: 501 });
}
