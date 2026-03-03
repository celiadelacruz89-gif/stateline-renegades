// app/admin/page.tsx
"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="wrap section">
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
        <Link className="btn ghost" href="/">Home</Link>
        <Link className="btn ghost" href="/gallery">Gallery</Link>
        <Link className="btn" href="/admin/uploads">Upload Photos/Videos</Link>
      </div>

      <h1 style={{ marginTop: 0 }}>Admin Controls</h1>

      <div className="card" style={{ padding: 16 }}>
        <h2 style={{ marginTop: 0 }}>Uploads</h2>
        <p style={{ opacity: 0.85, marginTop: 6 }}>
          Use the Upload page to add photos/videos by team (shows automatically in the Gallery pages).
        </p>

        <Link className="btn" href="/admin/uploads">
          Go to Uploads
        </Link>
      </div>
    </div>
  );
}
