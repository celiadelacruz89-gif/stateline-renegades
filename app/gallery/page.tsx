import Link from "next/link";

const galleries = [
  {
    title: "📸 Organization Gallery",
    description: "Events • Banquets • Community • Fundraisers",
    href: "/gallery/org",
  },
  {
    title: "🩷 Riot / Karma",
    description: "Practices • Competitions • Team Memories",
    href: "/gallery/riot",
  },
  {
    title: "❤️ Anarchy",
    description: "Travel Team Highlights • Events • Performances",
    href: "/gallery/anarchy",
  },
  {
    title: "💜 Mayhem",
    description: "Full Travel Team Highlights • Practices • Competitions",
    href: "/gallery/mayhem",
  },
  {
    title: "⚾ T-Ball",
    description: "Games • Practices • Player Highlights",
    href: "/gallery/tball",
  },
  {
    title: "🎥 Videos",
    description: "Highlights • Reels • Team Performances",
    href: "/gallery/videos",
  },
];

export default function GalleryPage() {
  return (
    <main className="wrap section">
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Gallery
        </h1>

        <p style={{ opacity: 0.8 }}>
          Explore photos, videos, events, competitions, and memories from
          across the Stateline Renegades organization.
        </p>
      </div>

      <section
        style={{
          display: "grid",
          gap: "18px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {galleries.map((gallery) => (
          <Link
            key={gallery.href}
            href={gallery.href}
            className="card"
            style={{
              padding: "24px",
              textDecoration: "none",
              color: "inherit",
              borderRadius: "22px",
            }}
          >
            <h2 style={{ marginTop: 0 }}>{gallery.title}</h2>

            <p
              style={{
                opacity: 0.85,
                lineHeight: 1.7,
                marginBottom: "18px",
              }}
            >
              {gallery.description}
            </p>

            <span className="btn">
              View Gallery
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}