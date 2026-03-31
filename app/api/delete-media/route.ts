import { NextResponse } from "next/server";
import { del } from "@vercel/blob";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const url = String(body?.url || "").trim();

    if (!url) {
      return NextResponse.json({ error: "Missing file url" }, { status: 400 });
    }

    await del(url);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete failed:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
