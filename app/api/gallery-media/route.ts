// app/api/gallery-media/route.ts
import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

function guessTypeFromPath(pathname: string) {
  const p = pathname.toLowerCase();
  const isVideo = p.endsWith(".mp4") || p.endsWith(".mov") || p.endsWith(".webm") || p.endsWith(".m4v");
  const isImage = p.endsWith(".jpg") || p.endsWith(".jpeg") || p.endsWith(".png") || p.endsWith(".webp") || p.endsWith(".gif");
  return { isVideo, isImage };
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const team = (searchParams.get("team") || "").trim().toLowerCase();

  if (!team) {
    return NextResponse.json({ items: [] });
  }

  // We store gallery files under: gallery/<team>/
  const prefix = `gallery/${team}/`;

  const { blobs } = await list({ prefix });

  const items = blobs
    .sort((a, b) => (b.uploadedAt?.getTime?.() || 0) - (a.uploadedAt?.getTime?.() || 0))
    .map((b) => {
      const { isVideo, isImage } = guessTypeFromPath(b.pathname);
      return {
        url: b.url,
        pathname: b.pathname,
        isVideo,
        isImage,
      };
    });

  return NextResponse.json({ items });
}
