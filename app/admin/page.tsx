"use client";

import { useEffect, useState } from "react";

type Item = { url: string; pathname: string; uploadedAt?: string; size?: number };

const FOLDERS = [
  { key: "org", label: "Organization" },
  { key: "riot", label: "Riot" },
  { key: "karma", label: "Karma" },
  { key: "anarchy", label: "Anarchy" },
  { key: "blessed-mayhem", label: "Blessed Mayhem" },
  { key: "tball", label: "T-Ball" }
] as const;

async function list(folder: string) {
  const r = await fetch(`/api/gallery/list?folder=${encodeURIComponent(folder)}`, { cache: "no-store" });
  return (await r.json()) as { items: Item[] };
}

async function getSpots() {
  const r = await fetch(`/api/tball-spots`, { cache: "no-store" });
  return (await r.json()) as { spots: number };
}

export default function AdminPage() {
  const [folder, setFolder] = useState<(typeof FOLDERS)[number]["key"]>("org");
  const [items, setItems] = useState<Item[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);

  const [spots, setSpots] = useState(15);
  const [spotsInput, setSpotsInput] = useState("15");

  async function refresh() {
    const d = await list(folder);
    setItems(d.items || []);
  }

  useEffect(() => {
    refresh();
  }, [folder]);

  useEffect(() => {
    getSpots()
      .then((d) => {
        const s = Number.isFinite(d.spots) ? d.spots : 15;
        setSpots(s);
        setSpotsInput(String(s));
      })
      .catch(() => {});
  }, []);

  async function upload() {
    if (!file) return alert("Pick a file first.");
    setBusy(true);
    try {
      const form = new FormData();
      form.append("file", file);
      form.append("folder", folder);

      const r = await fetch("/api/gallery/upload", { method: "POST", body: form });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Upload failed");
      setFile(null);
      await refresh();
      alert("Uploaded!");
    } catch (e: any) {
      alert(e.message || "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  async function remove(pathname: string) {
    if (!confirm("Delete this photo?")) return;
    setBusy(true);
    try {
      const r = await fetch("/api/gallery/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pathname })
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Delete failed");
      await refresh();
    } catch (e: any) {
      alert(e.message || "Delete failed");
    } finally {
      setBusy(false);
    }
  }

  async function saveSpots() {
    const n = parseInt(spotsInput, 10);
    if (!Number.isFinite(n) || n < 0 || n > 100) return alert("Enter a number 0–100.");
    setBusy(true);
    try {
      const r = await fetch("/api/tball-spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spots: n })
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Save failed");
      setSpots(n);
      alert("Saved!");
    } catch (e: any) {
      alert(e.message || "Save failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div style={{ padding: 18, maxWidth: 1100, margin: "0 auto", color: "white" }}>
      <h1 style={{ marginTop: 0 }}>Admin Controls</h1>
      <p style={{ opacity: 0.7, marginTop: 6 }}>
        Upload photos into team folders, delete photos, and update T-Ball spots.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
        <div style={{ border: "1px solid rgba(255,255,255,.12)", borderRadius: 18, padding: 14, background: "rgba(255,255,255,.04)" }}>
          <h3 style={{ marginTop: 0 }}>T-Ball Spots Remaining</h3>
          <p style={{ fontSize: 36, fontWeight: 900, margin: "6px 0" }}>{spots}</p>
          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
            <input
              value={spotsInput}
              onChange={(e) => setSpotsInput(e.target.value)}
              style={{ padding: 10, borderRadius: 12, border: "1px solid rgba(255,255,255,.18)", background: "rgba(0,0,0,.25)", color: "white", width: 140 }}
              placeholder="15"
              inputMode="numeric"
            />
            <button
              onClick={saveSpots}
              disabled={busy}
              style={{ padding: "10px 14px", borderRadius: 999, border: "none", fontWeight: 800, background: "linear-gradient(135deg, #ff4aa2, #8f6bff)", color: "white" }}
            >
              Save Spots
            </button>
          </div>
          <p style={{ opacity: 0.65, fontSize: 12, marginTop: 10 }}>
            This updates the number shown on the public website.
          </p>
        </div>

        <div style={{ border: "1px solid rgba(255,255,255,.12)", borderRadius: 18, padding: 14, background: "rgba(255,255,255,.04)" }}>
          <h3 style={{ marginTop: 0 }}>Upload Photo</h3>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <select
              value={folder}
              onChange={(e) => setFolder(e.target.value as any)}
              style={{ padding: 10, borderRadius: 12, border: "1px solid rgba(255,255,255,.18)", background: "rgba(0,0,0,.25)", color: "white" }}
            >
              {FOLDERS.map((f) => (
                <option key={f.key} value={f.key}>{f.label}</option>
              ))}
            </select>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              style={{ color: "white" }}
            />

            <button
              onClick={upload}
              disabled={busy || !file}
              style={{ padding: "10px 14px", borderRadius: 999, border: "none", fontWeight: 800, background: "linear-gradient(135deg, rgba(0,255,200,.35), rgba(0,255,120,.25))", color: "white" }}
            >
              Upload
            </button>

            <button
              onClick={refresh}
              disabled={busy}
              style={{ padding: "10px 14px", borderRadius: 999, border: "1px solid rgba(255,255,255,.18)", background: "rgba(255,255,255,.06)", color: "white", fontWeight: 800 }}
            >
              Refresh
            </button>
          </div>

          <p style={{ opacity: 0.65, fontSize: 12, marginTop: 10 }}>
            Uploads are stored in Vercel Blob under <b>gallery/{folder}/...</b>
          </p>
        </div>
      </div>

      <h3 style={{ marginTop: 18 }}>Current Photos ({folder})</h3>
      {items.length === 0 ? (
        <p style={{ opacity: 0.7 }}>No photos yet.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 12 }}>
          {items.map((it) => (
            <div
              key={it.pathname}
              style={{
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: 16,
                overflow: "hidden",
                background: "rgba(255,255,255,.03)"
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.url} alt={it.pathname} style={{ width: "100%", height: 160, objectFit: "cover" }} />
              <div style={{ padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <a href={it.url} target="_blank" rel="noopener" style={{ fontSize: 12, opacity: 0.8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {it.pathname.split("/").pop()}
                </a>
                <button
                  onClick={() => remove(it.pathname)}
                  disabled={busy}
                  style={{ padding: "8px 10px", borderRadius: 999, border: "none", background: "linear-gradient(135deg, rgba(255,80,80,.35), rgba(255,60,160,.25))", color: "white", fontWeight: 800, fontSize: 12 }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <p style={{ marginTop: 18, opacity: 0.7 }}>
        Return to site: <a href="/" style={{ textDecoration: "underline" }}>/</a>
      </p>
    </div>
  );
}
