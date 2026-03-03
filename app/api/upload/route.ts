import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

const ALLOWED_TEAMS = new Set(["org", "karma", "riot", "anarchy", "tball"]);

function safeName(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9.\-_]/g, "")
    .replace(/-+/g, "-");
}

export async function POST(req: Request) {
  const form = await req.formData();

  const team = String(form.get("team") || "").toLowerCase();
  const file = form.get("file") as File | null;

  if (!ALLOWED_TEAMS.has(team)) {
    return NextResponse.json({ error: "Invalid team" }, { status: 400 });
  }
  if (!file) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const filename = safeName(file.name);
  const pathname = `gallery/${team}/${Date.now()}-${filename}`;

  const blob = await put(pathname, file, {
    access: "public",
    addRandomSuffix: false,
  });

  return NextResponse.json({
    url: blob.url,
    pathname: blob.pathname,
  });
}
