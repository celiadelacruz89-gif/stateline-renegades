import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

export const runtime = "nodejs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const folder = (searchParams.get("folder") || "org").toLowerCase();
    const safe = folder.replace(/[^a-z0-9-]/g, "") || "org";
    const result = await list({ prefix: `gallery/${safe}/`, limit: 200 });

    return NextResponse.json({
      folder: safe,
      items: result.blobs.map(b => ({ url: b.url, pathname: b.pathname, uploadedAt: b.uploadedAt, size: b.size })),
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "List failed" }, { status: 500 });
  }
}
