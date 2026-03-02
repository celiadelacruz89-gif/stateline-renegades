
import { NextResponse } from "next/server";
import { createClient } from "redis";

const client = createClient({
  url: process.env.REDIS_URL,
});

client.connect();

const KEY = "tball:spots";

export async function GET() {
  const val = await client.get(KEY);
  const spots = val ? Number(val) : 15;
  return NextResponse.json({ spots });
}

export async function POST(req) {
  const body = await req.json();
  const spots = Number(body.spotsRemaining);
  await client.set(KEY, String(spots));
  return NextResponse.json({ ok: true });
}
