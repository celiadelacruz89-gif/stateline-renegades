import { NextResponse } from "next/server";
import { del } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { pathname } = await req.json();
    if (!pathname || typeof pathname !== "string") {
      return NextResponse.json({ error: "Missing pathname" }, { status: 400 });
    }
    if (!pathname.startsWith("gallery/")) {
      return NextResponse.json({ error: "Invalid pathname" }, { status: 400 });
    }

    await del(pathname);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Delete failed" }, { status: 500 });
  }
}
