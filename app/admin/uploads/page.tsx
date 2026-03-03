"use client";

import { useMemo, useState } from "react";
import { teams } from "../../lib/data";

type UploadResult = {
  ok?: boolean;
  url?: string;
  pathname?: string;
  error?: string;
};

export default function AdminUploadsPage() {
  const teamOptions = useMemo(
    () => [
      { id: "org", name: "Organization (All Teams)" },
      ...teams.map((t) => ({ id: t.id, name: t.name })),
    ],
    []
  );

  const [team, setTeam] = useState<string>(teamOptions[0].id);
  const [files, setFiles] = useState<FileList | null>(null);
  const [busy, setBusy] = useState(false);
  const [results, setResults] = useState<UploadResult[]>([]);
  const [message, setMessage] = useState<string>("");

  async function uploadOne(file: File) {
    const fd = new FormData();
    fd.append("team", team);
    fd.append("file", file);

    const res = await fetch("/api/gallery-media", { method: "POST", body: fd });
    return (await res.json()) as UploadResult;
  }

  async function onUpload() {
    if (!files || files.length === 0) {
      setMessage("Choose at least 1 file.");
      return;
    }

    setBusy(true);
    setMessage("");
    setResults([]);

    const out: UploadResult[] = [];
    for (const f of Array.from(files)) {
      try {
        out.push(await uploadOne(f));
      } catch (e: any) {
        out.push({ error: e?.message || "Upload failed" });
      }
    }

    setResults(out);
    setBusy(false);
    setMessage("Done! Your gallery media is uploaded.");
  }

  return (
    <div className="wrap section">
      <div className="card" style={{ padding: 16 }}>
        <h1 style={{ marginTop: 0 }}>Gallery Uploads</h1>
        <p style={{ marginTop: 6, opacity: 0.9 }}>
          Upload photos/videos by team. Files are stored in Vercel Blob.
        </p>

        <div style={{ display: "grid", gap: 10, marginTop: 14 }}>
          <label style={{ fontWeight: 700 }}>Choose Team</label>
          <select
            className="input"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            disabled={busy}
          >
            {teamOptions.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name} ({t.id})
              </option>
            ))}
          </select>

          <label style={{ fontWeight: 700, marginTop: 10 }}>Select Files</label>
          <input
            type="file"
            accept="image/*,video/*"
            multiple
            onChange={(e) => setFiles(e.target.files)}
            disabled={busy}
          />

          <button className="btn" onClick={onUpload} disabled={busy}>
            {busy ? "Uploading..." : "Upload to Gallery"}
          </button>

          {message ? <div className="pill subtle">{message}</div> : null}
        </div>
      </div>

      {results.length > 0 ? (
        <div className="card" style={{ padding: 16, marginTop: 16 }}>
          <h2 style={{ marginTop: 0 }}>Upload Results</h2>
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {results.map((r, idx) => (
              <li key={idx}>
                {r.error ? (
                  <span style={{ color: "salmon" }}>{r.error}</span>
                ) : (
                  <a href={r.url} target="_blank" rel="noreferrer" style={{ textDecoration: "underline" }}>
                    {r.pathname}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
