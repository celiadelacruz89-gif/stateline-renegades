"use client";

import { useEffect, useState } from "react";

const FOLDERS = [
  { key: "org", label: "Organization" },
  { key: "riot", label: "Riot" },
  { key: "karma", label: "Karma" },
  { key: "anarchy", label: "Anarchy" },
  { key: "blessed-mayhem", label: "Blessed Mayhem" },
  { key: "tball", label: "T-Ball" }
];

export default function AdminPage() {
  const [folder, setFolder] = useState("org");
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [spots, setSpots] = useState({ max: 15, remaining: 15 });
  const [spotsInput, setSpotsInput] = useState(15);

  async function refreshList() {
    setLoading(true);
    setMsg("");
    try {
      const r = await fetch(`/api/gallery/list?folder=${encodeURIComponent(folder)}`, { cache: "no-store" });
      const j = await r.json();
      setItems(Array.isArray(j.items) ? j.items : []);
    } catch (e) {
      setMsg("Failed to load gallery list.");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  async function refreshSpots() {
    try {
      const r = await fetch("/api/admin/spots", { cache: "no-store" });
      const j = await r.json();
      if (j?.remaining != null) {
        setSpots(j);
        setSpotsInput(j.remaining);
      }
    } catch {}
  }

  useEffect(() => {
    refreshList();
  }, [folder]);

  useEffect(() => {
    refreshSpots();
  }, []);

  async function upload() {
    if (!file) return setMsg("Choose a file first.");
    setMsg("Uploading...");
    try {
      const fd = new FormData();
      fd.append("file", file);
      fd.append("folder", folder);

      const r = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Upload failed");
      setMsg("Uploaded!");
      setFile(null);
      await refreshList();
    } catch (e) {
      setMsg(String(e.message || e));
    }
  }

  async function delItem(pathname) {
    if (!confirm("Delete this photo?")) return;
    setMsg("Deleting...");
    try {
      const r = await fetch("/api/admin/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pathname })
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Delete failed");
      setMsg("Deleted!");
      await refreshList();
    } catch (e) {
      setMsg(String(e.message || e));
    }
  }

  async function saveSpots() {
    setMsg("Saving spots...");
    try {
      const remaining = Math.max(0, Math.min(spots.max, Number(spotsInput || 0)));
      const r = await fetch("/api/admin/spots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ max: spots.max, remaining })
      });
      const j = await r.json();
      if (!r.ok) throw new Error(j?.error || "Save failed");
      setMsg("Spots updated!");
      setSpots(j);
    } catch (e) {
      setMsg(String(e.message || e));
    }
  }

  return (
    <div style={{ padding: "22px 0 40px" }}>
      <div className="wrap">
        <div className="sectionTitle">
          <div>
            <h2 style={{ margin: 0 }}>Admin Controls</h2>
            <p style={{ margin: "6px 0 0", color: "var(--muted)" }}>
              Upload photos to the correct team gallery + manage T-Ball spots.
            </p>
          </div>
          <a className="btn dark" href="/">Back to Site</a>
        </div>

        <div className="cols">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>Upload to Gallery</h3>

            <div style={{ display: "grid", gap: 10 }}>
              <label style={{ color: "var(--muted)", fontSize: 13 }}>
                Choose gallery
              </label>
              <select className="select" value={folder} onChange={(e) => setFolder(e.target.value)}>
                {FOLDERS.map((f) => (
                  <option key={f.key} value={f.key}>{f.label}</option>
                ))}
              </select>

              <label style={{ color: "var(--muted)", fontSize: 13 }}>
                Choose image
              </label>
              <input
                className="select"
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />

              <button className="btn primary" type="button" onClick={upload}>
                Upload Photo
              </button>

              <div style={{ color: "var(--muted)", fontSize: 12, lineHeight: 1.5 }}>
                Tip: Upload a few at a time. This stores images in Vercel Blob so they load fast on the website.
              </div>
            </div>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>T-Ball Spots Counter</h3>
            <p className="p" style={{ marginTop: 0 }}>
              Set remaining spots (max 15). This updates the number shown on the homepage.
            </p>

            <div style={{ display: "grid", gap: 10 }}>
              <div className="teamChip">
                <div style={{ width: 36, height: 36, borderRadius: 12, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)", display:"grid", placeItems:"center" }}>
                  🧢
                </div>
                <div>
                  <b>Current:</b>
                  <span>{spots.remaining} / {spots.max}</span>
                </div>
              </div>

              <input
                className="select"
                type="number"
                min="0"
                max={spots.max}
                value={spotsInput}
                onChange={(e) => setSpotsInput(e.target.value)}
              />

              <button className="btn green" type="button" onClick={saveSpots}>
                Save Spots
              </button>

              <button className="btn dark" type="button" onClick={refreshSpots}>
                Refresh
              </button>
            </div>
          </div>
        </div>

        <div className="section" style={{ paddingTop: 18 }}>
          <div className="galleryShell">
            <div className="galleryTop">
              <b>Gallery Items ({folder})</b>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <span style={{ color: "var(--muted)", fontSize: 12 }}>
                  {loading ? "Loading..." : `${items.length} item(s)`}
                </span>
                <button className="btn dark" type="button" onClick={refreshList}>Reload</button>
              </div>
            </div>

            <div style={{ padding: 12, color: "var(--muted)" }}>{msg}</div>

            <div className="galleryGrid">
              {items.map((it) => (
                <div className="gItem" key={it.pathname}>
                  <img src={it.url} alt={it.pathname} />
                  <div className="gCap" style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {it.pathname.split("/").pop()}
                    </span>
                    <button className="btn dark" type="button" onClick={() => delItem(it.pathname)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              {!loading && items.length === 0 && (
                <div style={{ padding: 16, color: "var(--muted)" }}>
                  No photos in this gallery yet.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
