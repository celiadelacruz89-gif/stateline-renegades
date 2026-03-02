import { NextResponse } from "next/server";
import redis from "@/lib/redis";

const KEY = "tball:spots";
const DEFAULT_SPOTS = 15;

export async function GET() {
  const val = await redis.get(KEY);
  const spots = val ? Number(val) : DEFAULT_SPOTS;

  // If empty or invalid, initialize it once
  if (!Number.isFinite(spots)) {
    await redis.set(KEY, String(DEFAULT_SPOTS));
    return NextResponse.json({ spots: DEFAULT_SPOTS });
  }

  return NextResponse.json({ spots });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const spots = Number(body?.spots);

  if (!Number.isFinite(spots) || spots < 0 || spots > 99) {
    return NextResponse.json({ error: "Invalid number" }, { status: 400 });
  }

  await redis.set(KEY, String(spots));
  return NextResponse.json({ ok: true, spots });
}

export async function GET() {
  try {
    const spots = await getCurrent();
    return NextResponse.json({ spots });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const spots = Number(body.spots);
    if (Number.isNaN(spots)) return NextResponse.json({ error: "Invalid number" }, { status: 400 });

    await put("config/" + FILE, JSON.stringify({ spots }), {
      access: "public",
      contentType: "application/json",
      addRandomSuffix: false,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
