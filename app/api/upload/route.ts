import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const form = await req.formData();

  const file = form.get("file") as File | null;
  const folder = (form.get("folder") as string | null) ?? "sponsors";
  const team = (form.get("team") as string | null) ?? "org";

  if (!file) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

  // sponsors -> sponsors/filename
  // gallery  -> gallery/{team}/filename
  const cleanName = file.name.replace(/\s+/g, "-");
  const pathname = folder === "gallery" ? `gallery/${team}/${cleanName}` : `sponsors/${cleanName}`;

  const blob = await put(pathname, file, {
    access: "public",
    addRandomSuffix: true,
  });

  return NextResponse.json({ url: blob.url, pathname: blob.pathname });
}
