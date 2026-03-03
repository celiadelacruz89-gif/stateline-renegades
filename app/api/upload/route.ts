// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

const ALLOWED_TEAMS = new Set(["karma", "riot", "anarchy", "tball", "org"]);

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file") as File | null;
    const team = String(form.get("team") || "").trim();

    if (!file) return NextResponse.json({ error: "Missing file" }, { status: 400 });
    if (!ALLOWED_TEAMS.has(team)) {
      return NextResponse.json({ error: "Invalid team" }, { status: 400 });
    }

    const safeName = (file.name || "upload")
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9.\-_]/g, "");

    const pathname = `gallery/${team}/${Date.now()}-${safeName}`;

    const blob = await put(pathname, file, {
      access: "public",
      contentType: file.type || undefined,
    });

    return NextResponse.json({
      url: blob.url,
      pathname: blob.pathname,
      contentType: file.type || undefined,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Upload failed" }, { status: 500 });
  }
}
