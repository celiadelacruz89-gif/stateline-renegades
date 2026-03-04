import Link from "next/link";
import Image from "next/image";
import { getTeam, phoneHref } from "../../lib/utils";
import { org } from "../../lib/data";

type MediaItem = {
  url: string;
  pathname: string;
  isImage?: boolean;
  isVideo?: boolean;
};

async function getMedia(teamId: string): Promise<MediaItem[]> {
  // Works in Vercel because it’s same-origin at build/runtime
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/gallery-media?team=${teamId}`, {
    cache: "no-store",
  }).catch(() => null);

  if (!res || !res.ok) return [];
  const data = await res.json();
  return data.items || [];
}

function getOrgTeam(teamId: string) {
  if (teamId === "org") {
    return {
      id: "org",
      name: "Organization",
      ages: "Events • Banquets • Community",
      colors: "All Teams",
      logo: "/logos/blessedmayhem.png",
      cashApp: "",
      registration: "",
      contacts: [],
    };
  }
  return getTeam(teamId);
}

export default async function TeamGalleryPage({ params }: { params: { team: string } }) {
  const teamId = params.team.toLowerCase();
  const team = getOrgTeam(teamId);

  if (!team) {
    return (
      <div className="wrap section">
        <h1>Gallery not found</h1>
        <p>Go back and pick a team.</p>
        <Link className="btn" href="/gallery">Back to Gallery</Link>
      </div>
    );
  }

  const media = await getMedia(team.id);

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
            <Link className="btn ghost" href="/">Home</Link>
            <Link className="btn ghost" href="/gallery">All Galleries</Link>
            <Link className="btn" href="/admin/uploads">Upload</Link>
          </div>
        </div>
      </nav>

      <div className="wrap section">
        <div className="sectionTitle">
          <div>
            <h1 style={{ margin: 0 }}>{team.name}</h1>
            <p style={{ marginTop: 6, opacity: 0.9 }}>
              {team.ages} • {team.colors}
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Image src={team.logo} alt={team.name} width={64} height={64} style={{ borderRadius: 14 }} />
          </div>
        </div>

        {team.contacts?.length ? (
          <div className="card" style={{ padding: 16, marginBottom: 16 }}>
            <h3 style={{ marginTop: 0 }}>Contacts</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {team.contacts.map((c) => (
                <li key={`${c.name}-${c.phone}`}>
                  <b>{c.name}</b>{" "}
                  <a href={phoneHref(c.phone)} style={{ textDecoration: "underline" }}>
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="card" style={{ padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <h3 style={{ marginTop: 0 }}>Media</h3>
              <p style={{ margin: 0, opacity: 0.85 }}>
                Photos and videos uploaded from Admin → Uploads.
              </p>
            </div>
            <Link className="btn" href="/admin/uploads">Upload Media</Link>
          </div>

          {media.length === 0 ? (
            <p style={{ marginTop: 14, opacity: 0.85 }}>
              Nothing uploaded yet.
            </p>
          ) : (
            <div
              style={{
                marginTop: 14,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 12,
              }}
            >
              {media.map((m) => (
                <a
                  key={m.url}
                  href={m.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card"
                  style={{ padding: 10, borderRadius: 16, textDecoration: "none", color: "inherit" }}
                  title="Open media"
                >
                  <div style={{ fontWeight: 800, fontSize: 12, opacity: 0.9, marginBottom: 8 }}>
                    {m.pathname.split("/").pop()}
                  </div>

                  {m.isVideo ? (
                    <video
                      src={m.url}
                      style={{ width: "100%", borderRadius: 12 }}
                      muted
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.url} alt="" style={{ width: "100%", borderRadius: 12 }} />
                  )}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
