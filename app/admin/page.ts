"use client";

import { useState } from "react";

export default function AdminPage() {
  const [spots, setSpots] = useState("");

  async function updateSpots() {
    await fetch("/api/tball-spots", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ spotsRemaining: spots })
    });

    alert("Spots updated!");
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Admin Controls</h1>

      <input
        placeholder="Enter remaining spots"
        value={spots}
        onChange={e => setSpots(e.target.value)}
        style={{ padding: 10, marginRight: 10 }}
      />

      <button onClick={updateSpots}>
        Save
      </button>
    </main>
  );
}
