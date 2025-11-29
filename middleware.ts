import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isWorkspace = req.nextUrl.pathname.startsWith("/workspace");
  const isLibrary = req.nextUrl.pathname.startsWith("/library");
  const isLogin = req.nextUrl.pathname === "/login";
  const isSignup = req.nextUrl.pathname === "/signup";

  // ✅ BLOCK PRIVATE PAGES IF NOT LOGGED IN
  if ((isWorkspace || isLibrary) && !session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // ✅ BLOCK LOGIN/SIGNUP IF ALREADY LOGGED IN
  if ((isLogin || isSignup) && session) {
    return NextResponse.redirect(new URL("/workspace", req.url));
  }

  return res;
}

export const config = {
  matcher: ["/workspace/:path*", "/library/:path*", "/login", "/signup"],
};
