import { NextResponse } from "next/server";
import { createClient } from "redis";

export const runtime = "nodejs";

const KEY = "tball:spots";
const DEFAULT_SPOTS = 15;

// Uses REDIS_URL (you already have it in Vercel env vars)
function redisClient() {
  const url = process.env.REDIS_URL;
  if (!url) throw new Error("Missing REDIS_URL environment variable");
  return createClient({ url });
}

async function getCurrentSpots(): Promise<number> {
  const redis = redisClient();
  await redis.connect();
  try {
    const val = await redis.get(KEY);
    const n = val ? Number(val) : DEFAULT_SPOTS;
    if (!Number.isFinite(n)) {
      await redis.set(KEY, String(DEFAULT_SPOTS));
      return DEFAULT_SPOTS;
    }
    // initialize if key didn't exist
    if (val == null) await redis.set(KEY, String(n));
    return n;
  } finally {
    await redis.disconnect();
  }
}

async function setSpots(n: number): Promise<number> {
  const redis = redisClient();
  await redis.connect();
  try {
    await redis.set(KEY, String(n));
    return n;
  } finally {
    await redis.disconnect();
  }
}

export async function GET() {
  try {
    const spots = await getCurrentSpots();
    return NextResponse.json({ spots }, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    return NextResponse.json(
      { error: e?.message || "Unable to load spots" },
      { status: 500, headers: { "Cache-Control": "no-store" } }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));

    // accept either "spots" OR "spotsRemaining" (your admin code used spotsRemaining earlier)
    const raw = body?.spots ?? body?.spotsRemaining;
    const n = Number(raw);

    if (!Number.isFinite(n) || n < 0 || n > 999) {
      return NextResponse.json({ error: "Invalid number" }, { status: 400 });
    }

    const spots = await setSpots(n);
    return NextResponse.json({ ok: true, spots }, { headers: { "Cache-Control": "no-store" } });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Save failed" }, { status: 500 });
  }
}
