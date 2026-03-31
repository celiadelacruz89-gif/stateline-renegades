import Link from "next/link";
import Image from "next/image";
import { list } from "@vercel/blob";
import { getTeam, phoneHref } from "../../lib/utils";
import { org } from "../../lib/data";

export const dynamic = "force-dynamic";

const ALLOWED_TEAMS = new Set([
  "org",
  "karma",
  "riot",
  "anarchy",
  "mayhem",
  "tball",
]);

type MediaItem = {
  url: string;
  pathname: string;
  uploadedAt: Date | null;
  isImage?: boolean;
  isVideo?: boolean;
};

function inferType(pathname: string) {
  const lower = pathname.toLowerCase();
  const isVideo = /\.(mp4|mov|webm|m4v)$/i.test(lower);
  const isImage = /\.(jpg|jpeg|png|webp|gif)$/i.test(lower);
  return { isVideo, isImage };
}

async function getMedia(teamId: string): Promise<MediaItem[]> {
  if (!ALLOWED_TEAMS.has(teamId)) return [];

  const prefix = `gallery/${teamId}/`;
  const { blobs } = await list({ prefix, limit: 200 });

  return blobs
    .slice()
    .sort(
      (a, b) =>
        (b.uploadedAt?.getTime?.() || 0) - (a.uploadedAt?.getTime?.() || 0)
    )
    .map((b) => {
      const t = inferType(b.pathname);
      return {
        url: b.url,
        pathname: b.pathname,
        uploadedAt: b.uploadedAt ?? null,
        ...t,
      };
    })
    .filter((x) => x.isImage || x.isVideo);
}

function getOrgTeam(teamId: string) {
  if (teamId === "org") {
    return {
      id: "org",
      name: "Organization",
      ages: "Events • Banquets • Community",
      colors: "All Teams",
      logo: "/logos/mayhem.png",
      cashApp: "",
      registration: "",
      contacts: [],
    };
  }

  return getTeam(teamId);
}

export default async function TeamGalleryPage({
  params,
}: {
  params: { team: string };
}) {
  const teamId = params.team.toLowerCase().trim();

  if (!ALLOWED_TEAMS.has(teamId)) {
    return (
      <div className="wrap section">
        <h1>Gallery not found</h1>
        <p>Go back and pick a team.</p>
        <Link className="btn" href="/gallery">
          Back to Gallery
        </Link>
      </div>
    );
  }

  const team = getOrgTeam(teamId);

  if (!team) {
    return (
      <div className="wrap section">
        <h1>Gallery not found</h1>
        <p>Go back and pick a team.</p>
        <Link className="btn" href="/gallery">
          Back to Gallery
        </Link>
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
            <Link className="btn ghost" href="/">
              Home
            </Link>
            <Link className="btn ghost" href="/gallery">
              All Galleries
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
            <h1 style={{ margin: 0 }}>{team.name}</h1>
            <p style={{ marginTop: 6, opacity: 0.9 }}>
              {team.ages} • {team.colors}
            </p>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Image
              src={team.logo}
              alt={team.name}
              width={96}
              height={96}
              style={{ borderRadius: 16 }}
            />
          </div>
        </div>

        {team.contacts?.length ? (
          <div className="card" style={{ padding: 16, marginBottom: 16 }}>
            <h3 style={{ marginTop: 0 }}>Contacts</h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {team.contacts.map((c) => (
                <li key={`${c.name}-${c.phone}`}>
                  <b>{c.name}</b>{" "}
                  <a
                    href={phoneHref(c.phone)}
                    style={{ textDecoration: "underline" }}
                  >
                    {c.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="card" style={{ padding: 16 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3 style={{ marginTop: 0 }}>Media</h3>
              <p style={{ margin: 0, opacity: 0.85 }}>
                Photos and videos uploaded from Admin → Uploads.
              </p>
            </div>

            <Link className="btn" href="/admin/uploads">
              Upload Media
            </Link>
          </div>

          {media.length === 0 ? (
            <p style={{ marginTop: 14, opacity: 0.85 }}>Nothing uploaded yet.</p>
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
                  style={{
                    padding: 10,
                    borderRadius: 16,
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  title="Open media"
                >
                  {m.isVideo ? (
                    <video
                      src={m.url}
                      style={{ width: "100%", borderRadius: 12 }}
                      muted
                      playsInline
                      preload="metadata"
                      controls
                    />
                  ) : (
                    <img
                      src={m.url}
                      alt=""
                      style={{ width: "100%", borderRadius: 12 }}
                    />
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
