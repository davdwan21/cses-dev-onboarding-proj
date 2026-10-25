import { NextResponse, type NextRequest } from "next/server";

// Runs before every matched request (see `config.matcher` below).
export function proxy(request: NextRequest) {
  // TODO (task 4): block signed-out users.
  // - Signed in = the request has the session cookie (see lib/session.ts).
  // - Signed-out API requests (/api/...) -> 401 JSON { error: "Not signed in" }.
  // - Signed-out page requests -> redirect to /login.
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/api/counters/:path*", "/api/me"],
};
