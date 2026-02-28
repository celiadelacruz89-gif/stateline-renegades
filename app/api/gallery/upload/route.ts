import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const form = await req.formData();
    const file = form.get("file");
    const folder = (form.get("folder") || "org").toString();

    if (!(file instanceof File)) {
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    const safeFolder = folder.replace(/[^a-z0-9\-]/gi, "").toLowerCase() || "org";
    const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
    const stamp = Date.now();
    const rand = Math.random().toString(16).slice(2);
    const pathname = `gallery/${safeFolder}/${stamp}-${rand}.${ext}`;

    const blob = await put(pathname, file, {
      access: "public",
      addRandomSuffix: false
    });

    return NextResponse.json({ url: blob.url, pathname: blob.pathname });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Upload failed" }, { status: 500 });
  }
}
