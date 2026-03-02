"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [spots, setSpots] = useState(0);
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    fetch("/api/tball-spots", { cache: "no-store" })
      .then(res => res.json())
      .then(data => setSpots(data.spots || 0));
  }, []);

  // Animated counter effect
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
    <main style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.title}>STATELINE RENEGADES</h1>
        <p style={styles.subtitle}>Elite Youth Athletics</p>
      </section>

      <section style={styles.counterSection}>
        <h2 style={styles.counterLabel}>T-Ball Spots Remaining</h2>
        <div style={styles.counter}>{animated}</div>
      </section>

      <section style={styles.sponsors}>
        <h3 style={styles.sectionTitle}>Our Sponsors</h3>
        <div className="carousel">
          <img src="/sponsors/sponsor1.png" />
          <img src="/sponsors/sponsor2.png" />
          <img src="/sponsors/sponsor3.png" />
        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    background: "linear-gradient(135deg,#0f0f0f,#1a0028)",
    color: "white",
    minHeight: "100vh",
    fontFamily: "sans-serif",
    paddingBottom: 80
  },
  hero: {
    textAlign: "center" as const,
    padding: "100px 20px",
    background:
      "radial-gradient(circle at center,#6b00b6 0%,#0f0f0f 70%)"
  },
  title: {
    fontSize: 56,
    fontWeight: 900,
    letterSpacing: 2
  },
  subtitle: {
    fontSize: 20,
    opacity: 0.8
  },
  counterSection: {
    textAlign: "center" as const,
    marginTop: 60
  },
  counterLabel: {
    fontSize: 22,
    opacity: 0.7
  },
  counter: {
    fontSize: 100,
    fontWeight: 900,
    background: "linear-gradient(90deg,#ff00cc,#6b00ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  sponsors: {
    marginTop: 100,
    textAlign: "center" as const
  },
  sectionTitle: {
    fontSize: 26,
    marginBottom: 20
  }
};
