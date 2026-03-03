import { NextResponse } from "next/server";
import { list } from "@vercel/blob";

export const dynamic = "force-dynamic";

export async function GET() {
  const { blobs } = await list({ prefix: "sponsors/" });

  // Convert blob list -> {name,url}
  // name comes from filename (sponsors/medianos.png -> "medianos")
  const items = blobs.map((b) => {
    const filename = b.pathname.split("/").pop() ?? "sponsor";
    const base = filename.replace(/\.[^/.]+$/, "");
    const pretty = base
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    return { name: pretty, url: b.url };
  });

  return NextResponse.json(items);
}
