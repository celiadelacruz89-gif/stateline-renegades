"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [spots, setSpots] = useState(0);
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    fetch("/api/tball-spots", { cache: "no-store" })
      .then(res => res.json())
      .then(data => setSpots(data.spots || 15));
  }, []);

  useEffect(() => {
    let start = 0;
    const duration = 800;
    const step = spots / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= spots) {
        start = spots;
        clearInterval(interval);
      }
      setAnimated(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [spots]);

  return (
    <main style={{ textAlign: "center", padding: 40 }}>
      <h1 style={{ fontSize: 48, fontWeight: 900 }}>
        STATELINE RENEGADES
      </h1>

      <h2 style={{ marginTop: 60 }}>T-Ball Spots Remaining</h2>
      <div style={{
        fontSize: 100,
        fontWeight: 900,
        background: "linear-gradient(90deg,#ff00cc,#6b00ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
      }}>
        {animated}
      </div>
    </main>
  );
}
