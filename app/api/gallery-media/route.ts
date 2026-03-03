// app/api/gallery-media/route.ts
import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

const ALLOWED_TEAMS = new Set(["karma", "riot", "anarchy", "tball"]);

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const team = String(searchParams.get("team") || "").trim();

  if (!ALLOWED_TEAMS.has(team)) {
    return NextResponse.json({ items: [] });
  }

  const prefix = `gallery/${team}/`;
  const { blobs } = await list({ prefix });

  const items = blobs
    .sort((a, b) => (b.uploadedAt?.getTime?.() || 0) - (a.uploadedAt?.getTime?.() || 0))
    .map((b) => {
      const contentType = b.contentType || "";
      const isVideo = contentType.startsWith("video/");
      const isImage = contentType.startsWith("image/");
      return { url: b.url, pathname: b.pathname, contentType, isVideo, isImage };
    });

  return NextResponse.json({ items });
}
