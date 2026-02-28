import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = (searchParams.get("folder") || "org").toString();
    const safeFolder = folder.replace(/[^a-z0-9\-]/gi, "").toLowerCase() || "org";

    const result = await list({ prefix: `gallery/${safeFolder}/`, limit: 200 });

    return NextResponse.json({
      folder: safeFolder,
      items: result.blobs.map((b) => ({
        url: b.url,
        pathname: b.pathname,
        uploadedAt: b.uploadedAt,
        size: b.size
      }))
    });
  } catch {
    return NextResponse.json({ folder: "org", items: [] });
  }
}
