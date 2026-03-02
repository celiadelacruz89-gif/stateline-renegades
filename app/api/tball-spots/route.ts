import { NextResponse } from "next/server";
import { createClient } from "redis";

export const runtime = "nodejs";

const KEY = "tball:spots";
const DEFAULT_SPOTS = 15;

const client = createClient({
  url: process.env.REDIS_URL
});

client.connect();

export async function GET() {
  const val = await client.get(KEY);
  const spots = val ? Number(val) : DEFAULT_SPOTS;
  return NextResponse.json({ spots });
}

export async function POST(req: Request) {
  const body = await req.json();
  const spots = Number(body.spotsRemaining);

  if (!Number.isFinite(spots)) {
    return NextResponse.json({ error: "Invalid number" }, { status: 400 });
  }

  await client.set(KEY, String(spots));
  return NextResponse.json({ ok: true, spots });
}
