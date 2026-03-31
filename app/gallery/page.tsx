import Link from "next/link";
import { org } from "../lib/data";

export const dynamic = "force-dynamic";

const galleries = [
  { id: "org", name: "Organization" },
  { id: "karma", name: "Karma" },
  { id: "riot", name: "Riot" },
  { id: "anarchy", name: "Anarchy" },
  { id: "mayhem", name: "Blessed Mayhem" },
  { id: "tball", name: "T-Ball" },
];

export default function GalleryIndexPage() {
  return (
    <div>
      <nav>
        <div className="wrap navInner">
          <div className="brand">
            <div className="brandMark" />
            <div className="brandText">
              <b>Gallery</b> <span>{org.name}</span>
            </div>
          </div>

          <div className="navLinks">
            <Link className="btn ghost" href="/">
              Home
            </Link>
            <Link className="btn" href="/admin/uploads">
              Upload
            </Link>
          </div>
        </div>
      </nav>

      <div className="wrap section">
        <div className="sectionTitle">
          <div>
            <h1 style={{ margin: 0 }}>All Galleries</h1>
            <p style={{ marginTop: 6, opacity: 0.9 }}>
              View uploaded media for each team and the organization.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            marginTop: 20,
          }}
        >
          {galleries.map((gallery) => (
            <Link
              key={gallery.id}
              href={`/gallery/${gallery.id}`}
              className="card"
              style={{
                padding: 20,
                borderRadius: 18,
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <h3 style={{ marginTop: 0, marginBottom: 8 }}>{gallery.name}</h3>
              <p style={{ margin: 0, opacity: 0.85 }}>Open gallery</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
