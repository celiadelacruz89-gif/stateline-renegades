import Image from "next/image";
import Link from "next/link";

export default function TBallPage() {
  return (
    <main className="wrap section">
      <section className="card" style={{ padding: 24 }}>
        <h1 style={{ marginTop: 0 }}>⚾ Stateline Renegades T-Ball</h1>
        <p style={{ opacity: 0.9, lineHeight: 1.8, fontSize: 17 }}>
          Our T-Ball program focuses on fundamentals, teamwork, confidence, and
          helping young athletes learn the game in a positive environment.
        </p>

        <div style={{ marginTop: 16 }}>
          <Link href="/gallery/tball" className="btn">
            📸 View T-Ball Gallery
          </Link>
        </div>
      </section>

      <section className="card" style={{ padding: 24, marginTop: 20 }}>
        <h2 style={{ marginTop: 0 }}>⚾ T-Ball Registration & Resources</h2>

        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            marginTop: 16,
          }}
        >
          <a
            href="https://form.jotform.com/260086521920149"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ textAlign: "center" }}
          >
            📝 Register for T-Ball
          </a>

          <a
            href="https://form.jotform.com/260160484299058"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ textAlign: "center" }}
          >
            🎟️ JJ Fundraiser
          </a>
        </div>

        <h3 style={{ marginTop: 28 }}>👕 T-Ball Merch Store</h3>

        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            marginTop: 12,
          }}
        >
          <a
            href="https://form.jotform.com/260125057825050"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ padding: 16, textDecoration: "none", color: "inherit" }}
          >
            <h4>⚾ Player Gear</h4>
            <p>Player shirts, apparel, and team gear.</p>
          </a>

          <a
            href="https://form.jotform.com/260124714767054"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ padding: 16, textDecoration: "none", color: "inherit" }}
          >
            <h4>👨‍👩‍👧 Parent & Family Merch</h4>
            <p>Support your athlete with family apparel.</p>
          </a>

          <a
            href="https://form.jotform.com/260125031204033"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{ padding: 16, textDecoration: "none", color: "inherit" }}
          >
            <h4>🧢 Coach Merch</h4>
            <p>Coach apparel and staff gear.</p>
          </a>
        </div>
      </section>
    </main>
  );
}