"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type UploadResult = {
  url: string;
  pathname: string;
  contentType?: string;
};

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [uploads, setUploads] = useState<UploadResult[]>([]);
  const [error, setError] = useState<string | null>(null);

  const accept = useMemo(
    () => "image/*,video/*",
    []
  );

  async function upload() {
    if (!file) return;
    setBusy(true);
    setError(null);

    try {
      const form = new FormData();
      form.append("file", file);

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
      </div>

      <h1 style={{ marginTop: 0 }}>Admin Controls</h1>

      <div className="card" style={{ padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Upload Sponsor Photos / Videos</h2>
        <p style={{ opacity: 0.85, marginTop: 6 }}>
          Uploads go to Vercel Blob (works on Vercel). After uploading, copy the URL and paste it into
          <code> app/lib/data.ts</code> inside <code>sponsors</code>.
        </p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
          <input
            type="file"
            accept={accept}
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <button className="btn" disabled={!file || busy} onClick={upload}>
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
                <li key={u.url} style={{ marginBottom: 10 }}>
                  <div style={{ fontWeight: 700 }}>{u.pathname}</div>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                    <a className="btn ghost" href={u.url} target="_blank" rel="noreferrer">
                      Open
                    </a>
                    <button
                      className="btn ghost"
                      onClick={() => navigator.clipboard.writeText(u.url)}
                    >
                      Copy URL
                    </button>
                    <code style={{ opacity: 0.85 }}>{u.url}</code>
                  </div>
                </li>
              ))}
            </ul>

            <div className="divider" />

            <p style={{ marginBottom: 0 }}>
              Paste into <code>app/lib/data.ts</code> like:
              <br />
              <code>{`{ name: "Mediano's", logo: "PASTE_URL_HERE" },`}</code>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
