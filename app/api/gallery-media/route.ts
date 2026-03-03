// app/api/gallery-media/route.ts
import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

export const runtime = "nodejs"; // important for @vercel/blob

function safeTeam(team: string) {
  const t = (team || "").toLowerCase().trim();
  const allowed = new Set(["karma", "riot", "anarchy", "tball", "org"]);
  return allowed.has(t) ? t : null;
}

function safeName(name: string) {
  return name.replace(/[^a-zA-Z0-9._-]/g, "-");
}

// GET /api/gallery-media?team=karma
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const team = safeTeam(searchParams.get("team") || "");
  if (!team) return NextResponse.json({ error: "Invalid team" }, { status: 400 });

  const prefix = `gallery/${team}/`;
  const result = await list({ prefix, limit: 200 });

  const items = result.blobs
    .sort((a, b) => (a.uploadedAt?.getTime?.() ?? 0) < (b.uploadedAt?.getTime?.() ?? 0) ? 1 : -1)
    .map((b) => ({
      url: b.url,
      pathname: b.pathname,
      size: b.size,
      uploadedAt: b.uploadedAt,
      contentType: b.contentType,
      isVideo: (b.contentType || "").startsWith("video/") || /\.(mp4|mov|webm)$/i.test(b.pathname),
      isImage: (b.contentType || "").startsWith("image/") || /\.(png|jpg|jpeg|gif|webp)$/i.test(b.pathname),
    }));

  return NextResponse.json({ team, items });
}

// POST multipart/form-data: team + file
export async function POST(req: Request) {
  const form = await req.formData();
  const teamRaw = String(form.get("team") || "");
  const team = safeTeam(teamRaw);
  if (!team) return NextResponse.json({ error: "Invalid team" }, { status: 400 });

  const file = form.get("file");
  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const filename = safeName(file.name || "upload");
  const stamp = Date.now();
  const pathname = `gallery/${team}/${stamp}-${filename}`;

  const blob = await put(pathname, file, { access: "public" });

  return NextResponse.json({
    ok: true,
    team,
    url: blob.url,
    pathname: blob.pathname,
    contentType: file.type,
    size: file.size,
  });
}
