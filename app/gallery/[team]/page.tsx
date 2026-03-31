import Link from "next/link";
import Image from "next/image";
import { getTeam, phoneHref } from "../../lib/utils";
import { org } from "../../lib/data";

export const dynamic = "force-dynamic";

type MediaItem = {
  url: string;
  pathname: string;
  isImage?: boolean;
  isVideo?: boolean;
};

async function getMedia(teamId: string): Promise<MediaItem[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/gallery?team=${teamId}`, {
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
  const teamId = params.team.toLowerCase();
  const team = getOrgTeam(teamId);

  if (!team) {
    return (
      <div className="wrap section">
        <h1>Gallery not found</h1>
        <Link className="btn" href="/gallery">Back</Link>
      </div>
    );
  }

  const media = await getMedia(team.id);

  return (
    <div className="wrap section">
      <h1>{team.name}</h1>

      {media.length === 0 ? (
        <p>No uploads yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 12,
            marginTop: 16,
          }}
        >
          {media.map((m) => (
            <div key={m.url} className="card" style={{ padding: 10 }}>
              {m.isVideo ? (
                <video
                  src={m.url}
                  controls
                  style={{ width: "100%", borderRadius: 12 }}
                />
              ) : (
                <img
                  src={m.url}
                  alt=""
                  style={{ width: "100%", borderRadius: 12 }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
