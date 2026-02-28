import { NextRequest, NextResponse } from "next/server";

export const config = {
  // Only protect the admin UI and admin-write endpoints.
  // Gallery viewing + listing must stay public.
  matcher: ["/admin/:path*", "/api/gallery/upload", "/api/gallery/delete", "/api/tball-spots"],
};

function unauthorized() {
  return new NextResponse("Unauthorized", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin Area", charset="UTF-8"' },
  });
}

export function middleware(req: NextRequest) {
  // Allow public reads for the T-Ball spot counter.
  if (req.nextUrl.pathname === "/api/tball-spots" && req.method === "GET") {
    return NextResponse.next();
  }

  const user = process.env.ADMIN_USER || "";
  const pass = process.env.ADMIN_PASS || "";
  if (!user || !pass) return unauthorized();

  const auth = req.headers.get("authorization") || "";
  if (!auth.startsWith("Basic ")) return unauthorized();

  let decoded = "";
  try {
    decoded = Buffer.from(auth.split(" ")[1] || "", "base64").toString("utf8");
  } catch {
    return unauthorized();
  }

  const [u, p] = decoded.split(":");
  if (u === user && p === pass) return NextResponse.next();
  return unauthorized();
}
