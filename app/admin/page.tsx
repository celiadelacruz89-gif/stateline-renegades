"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {

  const [spots, setSpots] = useState(0);
  const [newSpots, setNewSpots] = useState("");

  useEffect(() => {
    fetch("/api/tball-spots")
      .then(res => res.json())
      .then(data => setSpots(data.spots));
  }, []);

  async function save() {

    await fetch("/api/tball-spots", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        spots: Number(newSpots),
      }),
    });

    setSpots(Number(newSpots));
    setNewSpots("");
  }

  return (

    <div style={{
      padding: 40,
      color: "white"
    }}>

      <h1>Admin Controls</h1>

      <h2>T-Ball Spots Remaining: {spots}</h2>

      <input
        value={newSpots}
        onChange={(e) => setNewSpots(e.target.value)}
        placeholder="Enter number"
        style={{
          padding: 10,
          color: "black"
        }}
      />

      <br /><br />

      <button onClick={save}
        style={{
          padding: 10,
          background: "hotpink",
          border: "none",
          color: "white"
        }}>
        Save
      </button>

    </div>

  );

}
