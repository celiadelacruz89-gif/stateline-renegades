import { NextResponse } from "next/server";
import { createClient, type RedisClientType } from "redis";

export const runtime = "nodejs";

const KEY = "tball:spots";
const DEFAULT_SPOTS = 15;

// Reuse the client across hot reloads / invocations
declare global {
  // eslint-disable-next-line no-var
  var __sr_redis__: RedisClientType | undefined;
}

function getRedis() {
  const url = process.env.REDIS_URL;
  if (!url) throw new Error("Missing REDIS_URL env var (Vercel Redis integration)");

  if (!global.__sr_redis__) {
    global.__sr_redis__ = createClient({ url });
    global.__sr_redis__.on("error", (err) => console.error("Redis error:", err));
  }
  return global.__sr_redis__;
}

async function ensureConnected() {
  const client = getRedis();
  if (!client.isOpen) await client.connect();
  return client;
}

export async function GET() {
  try {
    const redis = await ensureConnected();
    const val = await redis.get(KEY);

    const spots = val === null ? DEFAULT_SPOTS : Number(val);
    if (!Number.isFinite(spots)) {
      await redis.set(KEY, String(DEFAULT_SPOTS));
      return NextResponse.json({ spots: DEFAULT_SPOTS });
    }

    // initialize once if missing
    if (val === null) await redis.set(KEY, String(spots));

    return NextResponse.json({ spots });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to load spots" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const spots = Number(body?.spots ?? body?.spotsRemaining ?? body?.spotsRemaining);

    if (!Number.isFinite(spots) || spots < 0 || spots > 999) {
      return NextResponse.json({ error: "Invalid number" }, { status: 400 });
    }

    const redis = await ensureConnected();
    await redis.set(KEY, String(spots));
    return NextResponse.json({ ok: true, spots });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Failed to save spots" }, { status: 500 });
  }
}
