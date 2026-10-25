import { cookies } from "next/headers";

// Name of the cookie that holds the signed-in username.
// NOTE: a plain username cookie is easy to forge. Real apps sign or encrypt it.
export const SESSION_COOKIE = "username";

export async function getSessionUsername(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value ?? null;
}
