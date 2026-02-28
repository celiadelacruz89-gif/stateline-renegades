import Link from "next/link";
import { teamLabel } from "../../lib/utils";

async function getItems(team: string) {
  const qs = new URLSearchParams({ folder: team }).toString();
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const url = base ? `${base}/api/gallery/list?${qs}` : `http://localhost:3000/api/gallery/list?${qs}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) return [];
  const data = await res.json();
  return data.items || [];
}

export default async function TeamGallery({ params }: { params: { team: string } }) {
  const team = (params.team || "org").toLowerCase();
  const items = await getItems(team);

  return (
    <div>
      <nav>
        <div className="wrap navInner">
          <div className="brand">
            <div className="brandMark" />
            <div className="brandText"><b>{teamLabel(team)} Gallery</b><span>Stateline Renegades</span></div>
          </div>
          <div className="navLinks">
            <Link className="btn ghost" href="/gallery">All Galleries</Link>
            <Link className="btn ghost" href="/">Home</Link>
          </div>
        </div>
      </nav>

      <div className="wrap section">
        {items.length === 0 ? (
          <div className="notice">No photos yet in <b>{teamLabel(team)}</b>. Check back soon!</div>
        ) : (
          <div className="galleryGrid">
            {items.map((it: any) => (
              <a className="galleryItem" key={it.pathname} href={it.url} target="_blank" rel="noopener">
                <img src={it.url} alt={it.pathname} />
                <div className="cap">{it.pathname.split("/").pop()}</div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
