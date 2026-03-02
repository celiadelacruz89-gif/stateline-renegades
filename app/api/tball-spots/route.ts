import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const KEY = "tball:spots";
const DEFAULT_SPOTS = 15;

export async function GET() {
  try {
    const val = await redis.get<number>(KEY);
    const spots = typeof val === "number" ? val : DEFAULT_SPOTS;

    // initialize once if missing
    if (val === null) await redis.set(KEY, spots);

    return NextResponse.json({ spots });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const spots = Number((body as any).spots);

    if (!Number.isFinite(spots) || spots < 0 || spots > 999) {
      return NextResponse.json({ error: "Invalid number" }, { status: 400 });
    }

    await redis.set(KEY, spots);
    return NextResponse.json({ ok: true, spots });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
