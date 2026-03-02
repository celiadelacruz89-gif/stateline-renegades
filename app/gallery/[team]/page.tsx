import Link from "next/link";
import { teams as TEAMS } from "../../lib/data";

export default function GalleryHome() {
  return (
    <div>
      <nav>
        <div className="wrap navInner">
          <div className="brand">
            <div className="brandMark" />
            <div className="brandText"><b>Gallery</b><span>Stateline Renegades</span></div>
          </div>
          <div className="navLinks">
            <Link className="btn ghost" href="/">Home</Link>
            <Link className="btn" href="/admin">Admin Controls</Link>
          </div>
        </div>
      </nav>

      <div className="wrap section">
        <div className="sectionTitle"><div><h2>Galleries</h2><p>Choose a team folder.</p></div></div>

        <div className="grid2">
          <Link className="card program" href="/gallery/org"><h3>Organization</h3><p>Highlights across all teams.</p></Link>
          {TEAMS.map(t => (
            <Link className="card program" href={`/gallery/${t.key}`} key={t.key}>
              <h3>{t.name}</h3><p>{t.colors}</p>
            </Link>
          ))}
        </div>

        <div className="notice" style={{ marginTop: 14 }}>
          Admin photo uploads happen in <b>/admin</b>. Public visitors can view galleries here.
        </div>
      </div>
    </div>
  );
}

