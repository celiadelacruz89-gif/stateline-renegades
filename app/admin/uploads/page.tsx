"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { GALLERY_TEAMS } from "../../lib/data";

type MediaItem = {
  url: string;
  pathname: string;
  uploadedAt?: string | null;
  size?: number | null;
  isImage?: boolean;
  isVideo?: boolean;
};

export default function AdminUploadsPage() {
  const [team, setTeam] = useState<string>("org");
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<MediaItem[]>([]);

  const accept = useMemo(() => "image/*,video/*", []);

  async function refresh() {
    const res = await fetch(`/api/gallery-media?team=${team}`, { cache: "no-store" });
    const data = await res.json();
    setItems(data.items || []);
  }

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [team]);

  async function uploadAll() {
    if (!files.length) return;
    setBusy(true);
    setError(null);

    try {
      for (const file of files) {
        const form = new FormData();
        form.append("team", team);
        form.append("file", file);

        const res = await fetch("/api/upload", { method: "POST", body: form });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Upload failed");
      }

      setFiles([]);
      await refresh();
    } catch (e: any) {
      setError(e?.message || "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const picked = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...picked]);
    e.target.value = "";
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files || []);
    setFiles((prev) => [...prev, ...dropped]);
  }

  return (
    <div className="wrap section">
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
        <Link className="btn ghost" href="/">Home</Link>
        <Link className="btn ghost" href="/gallery">Gallery</Link>
        <Link className="btn" href="/admin">Admin Controls</Link>
      </div>

      <h1 style={{ marginTop: 0 }}>Admin Uploads</h1>

      <div className="card" style={{ padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Upload Photos / Videos (by Team)</h2>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <label style={{ fontWeight: 700 }}>Choose gallery:</label>
          <select
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            style={{ padding: 10, borderRadius: 12 }}
          >
            {GALLERY_TEAMS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>

          <input type="file" accept={accept} multiple onChange={onPick} />
          <button className="btn" disabled={busy || files.length === 0} onClick={uploadAll}>
            {busy ? "Uploading..." : `Upload ${files.length || ""}`}
          </button>
        </div>

        <div
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          className="card"
          style={{
            marginTop: 12,
            padding: 14,
            borderRadius: 16,
            border: "1px dashed rgba(255,255,255,0.22)",
            opacity: 0.95,
          }}
        >
          <b>Drag & drop files here</b>
          <div style={{ opacity: 0.85, marginTop: 6 }}>
            Uploads are stored publicly and shown automatically in the gallery grid.
          </div>

          {files.length ? (
            <div style={{ marginTop: 10, opacity: 0.9 }}>
              <b>Queued:</b> {files.map((f) => f.name).join(", ")}
            </div>
          ) : null}
        </div>

        {error ? (
          <p style={{ marginTop: 12, color: "salmon" }}>
            <b>Error:</b> {error}
          </p>
        ) : null}
      </div>

      <div className="card" style={{ padding: 16, marginTop: 16 }}>
        <h2 style={{ marginTop: 0 }}>Current Media ({team})</h2>

        {items.length === 0 ? (
          <p style={{ opacity: 0.85, marginBottom: 0 }}>No uploads yet.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 12,
              marginTop: 12,
            }}
          >
            {items.map((m) => (
              <a
                key={m.url}
                href={m.url}
                target="_blank"
                rel="noreferrer"
                className="card"
                style={{ padding: 10, borderRadius: 16, textDecoration: "none", color: "inherit" }}
              >
                <div style={{ fontWeight: 800, fontSize: 12, opacity: 0.9, marginBottom: 8 }}>
                  {m.pathname.split("/").pop()}
                </div>

                {m.isVideo ? (
                  <video
                    src={m.url}
                    style={{ width: "100%", borderRadius: 12 }}
                    muted
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={m.url} alt="" style={{ width: "100%", borderRadius: 12 }} />
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
