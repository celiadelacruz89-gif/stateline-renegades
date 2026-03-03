// app/gallery/page.tsx
import Link from "next/link";
import Image from "next/image";
import path from "path";
import { promises as fs } from "fs";

import { teams, org } from "../lib/data";

const IMAGE_EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);

async function countTeamImages(teamId: string) {
  const dir = path.join(process.cwd(), "public", "gallery", teamId);

  try {
    const files = await fs.readdir(dir);
    return files.filter((f) => IMAGE_EXTS.has(path.extname(f).toLowerCase()))
      .length;
  } catch {
    return 0;
  }
}

export default async function GalleryHome() {
  const counts = await Promise.all(teams.map((t) => countTeamImages(t.id)));
  const byId = new Map(teams.map((t, i) => [t.id, counts[i]]));

  return (
    <div>
      <nav>
        <div className="wrap navInner">
          <div className="brand">
            <div className="brandMark" />
            <div className="brandText">
              <b>Gallery</b> <span>{org?.name ?? "Stateline Renegades"}</span>
            </div>
          </div>

          <div className="navLinks">
            <Link className="btn ghost" href="/">
              Home
            </Link>
            <Link className="btn" href="/admin">
              Admin Controls
            </Link>
          </div>
        </div>
      </nav>

      <div className="wrap section">
        <div className="sectionTitle">
          <div>
            <h2>Team Galleries</h2>
            <p>Choose a team to view photos.</p>
          </div>
        </div>

        <div className="grid2">
          {teams.map((t) => {
            const count = byId.get(t.id) ?? 0;

            return (
              <Link
                key={t.id}
                className="card programCard"
                href={`/gallery/${t.id}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 12,
                  }}
                >
                  <div>
                    <h3 style={{ margin: 0 }}>{t.name}</h3>
                    <p style={{ margin: "6px 0 0 0", opacity: 0.9 }}>
                      {t.colors}
                    </p>
                  </div>

                  <Image
                    src={t.logo}
                    alt={t.name}
                    width={62}
                    height={62}
                    style={{ borderRadius: 16 }}
                  />
                </div>

                <div className="divider" />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 10,
                  }}
                >
                  <span className="pill subtle">
                    {count} photo{count === 1 ? "" : "s"}
                  </span>

                  <span className="btn ghost" style={{ pointerEvents: "none" }}>
                    View Photos →
                  </span>
                </div>

                <div style={{ marginTop: 10, opacity: 0.75, fontSize: 12 }}>
                  Upload photos to: <code>/public/gallery/{t.id}/</code>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="card" style={{ padding: 16, marginTop: 18 }}>
          <h3 style={{ marginTop: 0 }}>How to Add Photos</h3>
          <ol style={{ margin: 0, paddingLeft: 18, opacity: 0.9 }}>
            <li>
              Create folders in GitHub:
              <br />
              <code>public/gallery/karma</code>, <code>public/gallery/riot</code>,{" "}
              <code>public/gallery/anarchy</code>, <code>public/gallery/tball</code>
            </li>
            <li>Upload JPG/PNG/WebP images into the correct folder.</li>
            <li>Commit & push → Vercel redeploys → photo counts update.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
