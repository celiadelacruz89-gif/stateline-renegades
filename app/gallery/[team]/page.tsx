// app/gallery/[team]/page.tsx
import Link from "next/link";
import Image from "next/image";
import path from "path";
import { promises as fs } from "fs";

import { getTeam, phoneHref } from "../../lib/utils";
import { org } from "../../lib/data";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

async function listTeamImages(teamId: string) {
  // Reads from /public/gallery/<teamId>/
  const dir = path.join(process.cwd(), "public", "gallery", teamId);

  try {
    const files = await fs.readdir(dir);
    return files
      .filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => `/gallery/${teamId}/${f}`); // public URL path
  } catch {
    // Folder doesn't exist yet (or no access in dev)
    return [];
  }
}

export default async function TeamGalleryPage({
  params,
}: {
  params: { team: string };
}) {
  const team = getTeam(params.team);

  if (!team) {
    return (
      <div className="wrap section">
        <h1>Team not found</h1>
        <p>Go back to the gallery and pick a team.</p>
        <Link className="btn" href="/gallery">
          Back to Gallery
        </Link>
      </div>
    );
  }

  const images = await listTeamImages(team.id);

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
              All Teams
            </Link>
          </div>
        </div>
      </nav>

      <div className="wrap section">
        <div className="sectionTitle">
          <div>
            <h1>{team.name}</h1>
            <p>
              {team.ages} • {team.colors}
            </p>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Image
              src={team.logo}
              alt={team.name}
              width={64}
              height={64}
              style={{ borderRadius: 14 }}
            />
          </div>
        </div>

        <div className="card" style={{ padding: 16, marginBottom: 18 }}>
          <h3 style={{ marginTop: 0 }}>Quick Links</h3>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {team.registration ? (
              <a className="btn" href={team.registration} target="_blank" rel="noreferrer">
                Register
              </a>
            ) : null}

            <a className="btn ghost" href={org.sponsorForm} target="_blank" rel="noreferrer">
              Sponsor Form
            </a>

            {team.id === "tball" ? (
              <>
                <a className="btn ghost" href={org.tballMerch.players} target="_blank" rel="noreferrer">
                  Players Merch Form
                </a>
                <a className="btn ghost" href={org.tballMerch.parentFamily} target="_blank" rel="noreferrer">
                  Parent/Family Merch Form
                </a>
                <a className="btn ghost" href={org.tballMerch.coach} target="_blank" rel="noreferrer">
                  Coach Merch Form
                </a>
              </>
            ) : null}
          </div>

          <div style={{ marginTop: 14 }}>
            {team.cashApp ? (
              <p style={{ margin: 0 }}>
                <b>CashApp:</b> {team.cashApp}
              </p>
            ) : (
              <p style={{ margin: 0 }}>
                <b>CashApp:</b> (add one in <code>app/lib/data.ts</code>)
              </p>
            )}
          </div>
        </div>

        <div className="card" style={{ padding: 16 }}>
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

        <div className="card" style={{ padding: 16, marginTop: 18 }}>
          <h3 style={{ marginTop: 0 }}>Photos</h3>

          <p style={{ marginTop: 0 }}>
            Upload images here:
            <br />
            <code>/public/gallery/{team.id}/</code>
          </p>

          {images.length === 0 ? (
            <p style={{ opacity: 0.85, marginBottom: 0 }}>
              No images found yet. Add JPG/PNG/WebP files to that folder and redeploy.
            </p>
          ) : (
            <div
              style={{
                marginTop: 12,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 12,
              }}
            >
              {images.map((src) => (
                <div
                  key={src}
                  className="card"
                  style={{
                    padding: 10,
                    borderRadius: 16,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", aspectRatio: "4/3" }}>
                    <Image src={src} alt={`${team.name} photo`} fill style={{ objectFit: "cover" }} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
