import { NextResponse } from "next/server";
import { list, put } from "@vercel/blob";

export const runtime = "nodejs";

const KEY = "tball/spots.json";
const MAX_SPOTS = 15;

// Reads current spots JSON from Blob by listing + fetching the file URL
async function readSpots(): Promise<{ max: number; remaining: number; updatedAt: string }> {
  const res = await list({ prefix: KEY, limit: 1 });

  // If not found yet, initialize
  if (!res.blobs || res.blobs.length === 0) {
    const init = { max: MAX_SPOTS, remaining: MAX_SPOTS, updatedAt: new Date().toISOString() };
    await put(KEY, JSON.stringify(init), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false
    });
    return init;
  }

  const url = res.blobs[0].url;
  const json = await fetch(url, { cache: "no-store" }).then(r => r.json());
  return json;
}

export async function GET() {
  try {
    const data = await readSpots();
    return NextResponse.json(data, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to read spots" }, { status: 500 });
  }
}

// Call this AFTER a successful registration (manual button in admin page is easiest)
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const action = (body?.action || "decrement") as "decrement" | "reset";

    const current = await readSpots();

    let next = current;
    if (action === "reset") {
      next = { max: MAX_SPOTS, remaining: MAX_SPOTS, updatedAt: new Date().toISOString() };
    } else {
      next = {
        max: current.max ?? MAX_SPOTS,
        remaining: Math.max(0, (current.remaining ?? MAX_SPOTS) - 1),
        updatedAt: new Date().toISOString()
      };
    }

    await put(KEY, JSON.stringify(next), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false
    });

    return NextResponse.json(next, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to update spots" }, { status: 500 });
  }
}
