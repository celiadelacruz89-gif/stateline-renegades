// app/admin/uploads/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { teams } from "../../lib/data";

type UploadResult = {
  url: string;
  pathname: string;
  contentType?: string;
};

export default function AdminUploadsPage() {
  const [teamId, setTeamId] = useState<string>("karma");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [uploads, setUploads] = useState<UploadResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const accept = useMemo(() => "image/*,video/*", []);

  async function upload() {
    if (!file) return;
    setBusy(true);
    setError(null);

    try {
      const form = new FormData();
      form.append("file", file);
      form.append("team", teamId);

      const res = await fetch("/api/upload", { method: "POST", body: form });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Upload failed");

      setUploads((prev) => [data as UploadResult, ...prev]);
      setFile(null);
    } catch (e: any) {
      setError(e?.message || "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="wrap section">
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
        <Link className="btn ghost" href="/">Home</Link>
        <Link className="btn ghost" href="/gallery">Gallery</Link>
        <Link className="btn ghost" href="/admin">Admin Controls</Link>
      </div>

      <h1 style={{ marginTop: 0 }}>Upload Photos / Videos</h1>

      <div className="card" style={{ padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Gallery Upload (by Team)</h2>
        <p style={{ opacity: 0.85, marginTop: 6 }}>
          Select a team, upload images/videos. They will appear automatically in{" "}
          <code>/gallery/[team]</code>.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 700 }}>Team</span>
            <select
              value={teamId}
              onChange={(e) => setTeamId(e.target.value)}
              style={{ padding: 10, borderRadius: 12 }}
            >
              {teams.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>

          <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 700 }}>File</span>
            <input
              type="file"
              accept={accept}
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>

          <button className="btn" disabled={!file || busy} onClick={upload} style={{ height: 44, marginTop: 20 }}>
            {busy ? "Uploading..." : "Upload"}
          </button>
        </div>

        {error ? (
          <p style={{ marginTop: 12, color: "salmon" }}>
            <b>Error:</b> {error}
          </p>
        ) : null}

        {uploads.length ? (
          <div style={{ marginTop: 14 }}>
            <h3 style={{ marginTop: 0 }}>Uploaded Files</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {uploads.map((u) => (
                <li key={u.url} style={{ marginBottom: 12 }}>
                  <div style={{ fontWeight: 700 }}>{u.pathname}</div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                    <a className="btn ghost" href={u.url} target="_blank" rel="noreferrer">
                      Open
                    </a>
                    <button className="btn ghost" onClick={() => navigator.clipboard.writeText(u.url)}>
                      Copy URL
                    </button>
                    <code style={{ opacity: 0.85 }}>{u.url}</code>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
