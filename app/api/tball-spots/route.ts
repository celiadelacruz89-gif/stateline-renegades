import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

export const runtime = "nodejs";

const FILE = "tball-spots.json";
const MAX = 15;

async function getCurrent() {
  try {
    const result = await list({ prefix: "config/" });
    const file = result.blobs.find(b => b.pathname === "config/" + FILE);
    if (!file) return MAX;
    const res = await fetch(file.url, { cache: "no-store" });
    if (!res.ok) return MAX;
    const data = await res.json();
    return Number(data.spots ?? MAX);
  } catch {
    return MAX;
  }
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
