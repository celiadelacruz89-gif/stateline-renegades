import { NextResponse } from "next/server";
import { del } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const body = await req.json();
    const pathname = (body?.pathname || "").toString();
    if (!pathname.startsWith("gallery/")) {
      return NextResponse.json({ error: "Invalid pathname" }, { status: 400 });
    }
    await del(pathname);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: e?.message || "Delete failed" }, { status: 500 });
  }
}
