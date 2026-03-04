import Link from "next/link";
import { GALLERY_TEAMS } from "../lib/data";

export default function GalleryHome() {
  return (
    <div>
      <nav>
        <div className="wrap navInner">
          <div className="brand">
            <div className="brandMark" />
            <div className="brandText">
              <b>Gallery</b> <span>Stateline Renegades</span>
            </div>
          </div>

          <div className="navLinks">
            <Link className="btn ghost" href="/">Home</Link>
            <Link className="btn" href="/admin">Admin Controls</Link>
          </div>
        </div>
      </nav>

      <div className="wrap section">
        <div className="sectionTitle">
          <div>
            <h2>Galleries</h2>
            <p>Choose a team or Organization.</p>
          </div>
        </div>

        <div className="grid2">
          {GALLERY_TEAMS.map((t) => (
            <Link key={t.id} className="card program" href={`/gallery/${t.id}`}>
              <h3>{t.name}</h3>
              <p>{t.colors}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
