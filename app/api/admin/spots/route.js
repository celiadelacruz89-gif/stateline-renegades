import { NextResponse } from "next/server";
import { list, put } from "@vercel/blob";

export const runtime = "nodejs";

const SPOTS_PATH = "gallery/_meta/tball-spots.json";
const DEFAULT = { max: 15, remaining: 15 };

async function readSpots() {
  try {
    const res = await list({ prefix: SPOTS_PATH, limit: 1 });
    const found = res.blobs?.[0];
    if (!found?.url) return DEFAULT;

    const r = await fetch(found.url, { cache: "no-store" });
    const j = await r.json();
    if (typeof j?.remaining !== "number") return DEFAULT;

    return {
      max: typeof j.max === "number" ? j.max : 15,
      remaining: j.remaining
    };
  } catch {
    return DEFAULT;
  }
}

export async function GET() {
  const data = await readSpots();
  return NextResponse.json(data);
}

export async function POST(req) {
  try {
    const body = await req.json();
    const max = typeof body?.max === "number" ? body.max : 15;
    let remaining = typeof body?.remaining === "number" ? body.remaining : 15;

    remaining = Math.max(0, Math.min(max, remaining));

    const payload = JSON.stringify({ max, remaining });
    const file = new File([payload], "tball-spots.json", { type: "application/json" });

    await put(SPOTS_PATH, file, {
      access: "public",
      addRandomSuffix: false
    });

    return NextResponse.json({ max, remaining });
  } catch (e) {
    return NextResponse.json({ error: e?.message || "Save failed" }, { status: 500 });
  }
}
