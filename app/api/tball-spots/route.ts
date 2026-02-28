import { NextResponse } from "next/server";
import { get, put } from "@vercel/blob";

export const runtime = "nodejs";

const KEY = "data/tball-spots.json";

export async function GET() {
  try {
    const res = await get(KEY);
    if (!res) return NextResponse.json({ spots: 15 });

    const text = await (await fetch(res.url)).text();
    const parsed = JSON.parse(text);
    const spots = Number(parsed?.spots);
    return NextResponse.json({ spots: Number.isFinite(spots) ? spots : 15 });
  } catch {
    return NextResponse.json({ spots: 15 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const spots = Number(body?.spots);
    if (!Number.isFinite(spots) || spots < 0 || spots > 100) {
      return NextResponse.json({ error: "Invalid spots" }, { status: 400 });
    }

    const blob = await put(KEY, JSON.stringify({ spots }), {
      access: "public",
      addRandomSuffix: false,
      contentType: "application/json"
    });

    return NextResponse.json({ ok: true, spots, url: blob.url });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Save failed" }, { status: 500 });
  }
}
