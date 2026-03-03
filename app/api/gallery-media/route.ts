import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

const ALLOWED_TEAMS = new Set(["org", "karma", "riot", "anarchy", "tball"]);

function inferType(pathname: string) {
  const lower = pathname.toLowerCase();
  const isVideo = /\.(mp4|mov|webm|m4v)$/i.test(lower);
  const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(lower);
  return { isVideo, isImage };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const team = (searchParams.get("team") || "").toLowerCase();

  if (!ALLOWED_TEAMS.has(team)) {
    return NextResponse.json({ items: [] });
  }

  const prefix = `gallery/${team}/`;

  const { blobs } = await list({ prefix, limit: 200 });

  const items = blobs
    .slice()
    .sort((a, b) => (b.uploadedAt?.getTime?.() || 0) - (a.uploadedAt?.getTime?.() || 0))
    .map((b) => {
      const t = inferType(b.pathname);
      return {
        url: b.url,
        pathname: b.pathname,
        uploadedAt: b.uploadedAt ?? null,
        size: b.size ?? null,
        ...t,
      };
    })
    .filter((x) => x.isImage || x.isVideo);

  return NextResponse.json({ items });
}
