import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Admin"',
    },
  });
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Protect admin pages + upload API
  const isProtected =
    pathname.startsWith("/admin") || pathname.startsWith("/api/upload");

  if (!isProtected) return NextResponse.next();

  const user = process.env.ADMIN_USER || "";
  const pass = process.env.ADMIN_PASS || "";

  // If env vars not set, block access (safer than leaving it open)
  if (!user || !pass) return unauthorized();

  const auth = req.headers.get("authorization");
  if (!auth?.startsWith("Basic ")) return unauthorized();

  const b64 = auth.slice("Basic ".length);
  const decoded = Buffer.from(b64, "base64").toString("utf8");
  const [u, p] = decoded.split(":");

  if (u === user && p === pass) return NextResponse.next();
  return unauthorized();
}

export const config = {
  matcher: ["/admin/:path*", "/api/upload"],
};
