"use client";

import React, { useEffect, useMemo, useState } from "react";

type Folder = "org" | "riot" | "karma" | "anarchy" | "mayhem" | "tball";

type GalleryItem = {
  url: string;
  pathname?: string;
  uploadedAt?: string;
  size?: number;
};

const FOLDERS: Array<{ key: Folder; label: string }> = [
  { key: "org", label: "Organization" },
  { key: "riot", label: "Riot" },
  { key: "karma", label: "Karma" },
  { key: "anarchy", label: "Anarchy" },
  { key: "mayhem", label: "Blessed Mayhem" },
  { key: "tball", label: "T-Ball" },
];

async function safeJson(res: Response) {
  const txt = await res.text();
  try {
    return { ok: res.ok, status: res.status, json: txt ? JSON.parse(txt) : null, text: txt };
  } catch {
    return { ok: res.ok, status: res.status, json: null, text: txt };
  }
}

export default function Admin() {
  const [folder, setFolder] = useState<Folder>("org");
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string>("");

  const [spots, setSpots] = useState<number>(15);
  const [spotsInput, setSpotsInput] = useState<string>("15");

  const title = useMemo(() => "Admin Controls", []);

  const refreshGallery = async (f: Folder) => {
    setBusy(true);
    setMsg("");
    try {
      const res = await fetch(`/api/gallery/list?folder=${encodeURIComponent(f)}`, { cache: "no-store" });
      const out = await safeJson(res);
      if (!out.ok) throw new Error(out.json?.error || out.text || "List failed");
      setItems(Array.isArray(out.json?.items) ? out.json.items : []);
    } catch (e: any) {
      setMsg(e?.message || "List failed");
    } finally {
      setBusy(false);
    }
  };

  const loadSpots = async () => {
    try {
      const res = await fetch("/api/tball-spots", { cache: "no-store" });
      const out = await safeJson(res);
      if (!out.ok) throw new Error(out.text || "Unable to load spots");
      const v = Number(out.json?.spots);
      if (!Number.isNaN(v)) {
        setSpots(v);
        setSpotsInput(String(v));
      }
    } catch (e: any) {
      setMsg(e?.message || "Unable to load spots");
    }
  };

  useEffect(() => {
    refreshGallery(folder);
    loadSpots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpload = async (file: File | null) => {
    if (!file) return;
    setBusy(true);
    setMsg("");
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", folder);

      const res = await fetch("/api/gallery/upload", { method: "POST", body: fd });
      const out = await safeJson(res);
      if (!out.ok) throw new Error(out.json?.error || out.text || "Upload failed");
      setMsg("Uploaded!");
      await refreshGallery(folder);
    } catch (e: any) {
      setMsg(e?.message || "Upload failed");
    } finally {
      setBusy(false);
    }
  };

  const onDelete = async (pathname?: string) => {
    if (!pathname) return;
    if (!confirm("Delete this photo?")) return;
    setBusy(true);
    setMsg("");
    try {
      const res = await fetch(`/api/gallery/delete?pathname=${encodeURIComponent(pathname)}`, { method: "DELETE" });
      const out = await safeJson(res);
      if (!out.ok) throw new Error(out.json?.error || out.text || "Delete failed");
      await refreshGallery(folder);
    } catch (e: any) {
      setMsg(e?.message || "Delete failed");
    } finally {
      setBusy(false);
    }
  };

  const onSaveSpots = async () => {
    const n = Number(spotsInput);
    if (Number.isNaN(n) || n < 0 || n > 999) {
      setMsg("Enter a valid number (0–999).")
      return;
    }

    setBusy(true);
    setMsg("");
    try {
      const res = await fetch("/api/tball-spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ spots: n }),
      });
      const out = await safeJson(res);
      if (!out.ok) throw new Error(out.json?.error || out.text || "Save failed");
      setSpots(n);
      setMsg("Saved!");
    } catch (e: any) {
      setMsg(e?.message || "Save failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ padding: "24px 0" }}>
      <div className="wrap">
        <h1 style={{ margin: 0, fontSize: 44, letterSpacing: "-0.6px" }}>{title}</h1>
        <p style={{ marginTop: 8, color: "var(--muted)" }}>
          Upload photos into team folders, delete photos, and update T-Ball spots.
        </p>

        {msg ? (
          <div
            style={{
              marginTop: 12,
              border: "1px solid var(--line)",
              borderRadius: 16,
              padding: 12,
              background: "rgba(0,0,0,.22)",
            }}
          >
            <b>Status:</b> <span style={{ color: "var(--muted)" }}>{msg}</span>
          </div>
        ) : null}

        <div style={{ height: 16 }} />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          <div className="card">
            <h3 style={{ marginTop: 0 }}>T-Ball Spots Remaining</h3>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div style={{ fontSize: 62, fontWeight: 900, lineHeight: 1 }}>{spots}</div>
              <div style={{ color: "var(--muted)" }}>currently shown on the public website</div>
            </div>

            <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 14, flexWrap: "wrap" }}>
              <input
                value={spotsInput}
                onChange={(e) => setSpotsInput(e.target.value)}
                inputMode="numeric"
                style={{
                  width: 120,
                  padding: "10px 12px",
                  borderRadius: 14,
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,.02)",
                  color: "var(--text)",
                  fontSize: 16,
                  fontWeight: 800,
                }}
              />
              <button className="btn primary" disabled={busy} onClick={onSaveSpots}>
                Save Spots
              </button>
              <button className="btn" disabled={busy} onClick={loadSpots}>
                Refresh
              </button>
            </div>

            <div style={{ marginTop: 10, color: "var(--muted)", fontSize: 12 }}>
              If you see “Forbidden is not valid JSON”, your Blob token or Blob store access is misconfigured.
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>Upload Photo</h3>

            <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <select
                value={folder}
                onChange={(e) => {
                  const f = e.target.value as Folder;
                  setFolder(f);
                  refreshGallery(f);
                }}
                style={{
                  padding: "10px 12px",
                  borderRadius: 14,
                  border: "1px solid var(--line)",
                  background: "rgba(255,255,255,.02)",
                  color: "var(--text)",
                  fontWeight: 800,
                }}
              >
                {FOLDERS.map((f) => (
                  <option key={f.key} value={f.key}>
                    {f.label}
                  </option>
                ))}
              </select>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => onUpload(e.target.files?.[0] || null)}
                disabled={busy}
              />

              <button className="btn" disabled={busy} onClick={() => refreshGallery(folder)}>
                Refresh
              </button>
            </div>

            <div style={{ marginTop: 10, color: "var(--muted)", fontSize: 12 }}>
              Uploads are stored in Vercel Blob under <b>gallery/{folder}/…</b>.
            </div>
          </div>
        </div>

        <div style={{ height: 16 }} />

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Current Photos ({folder})</h3>
          {busy ? <div style={{ color: "var(--muted)" }}>Working…</div> : null}
          {!items.length ? <div style={{ color: "var(--muted)" }}>No photos yet.</div> : null}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
              gap: 10,
              marginTop: 12,
            }}
          >
            {items.map((it) => (
              <div
                key={it.pathname || it.url}
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: 18,
                  overflow: "hidden",
                  background: "rgba(0,0,0,.22)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.url} alt="" style={{ width: "100%", height: 140, objectFit: "cover" }} />
                <div style={{ padding: 10 }}>
                  <div style={{ fontSize: 12, color: "var(--muted)", wordBreak: "break-all" }}>
                    {it.pathname || "(no pathname)"}
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
                    <a className="btn" href={it.url} target="_blank" rel="noopener">
                      Open
                    </a>
                    <button className="btn red" disabled={busy} onClick={() => onDelete(it.pathname)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 14, color: "var(--muted)", fontSize: 12 }}>
            Return to site: <a href="/" style={{ textDecoration: "underline" }}>/</a>
          </div>
        </div>
      </div>
    </div>
  );
}
