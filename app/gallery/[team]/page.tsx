// app/gallery/[team]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getTeam, phoneHref } from "../../lib/utils";
import { org } from "../../lib/data";

export default function TeamGalleryPage({
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
              <a className="btn" href={team.registration} target="_blank">
                Register
              </a>
            ) : null}

            <a className="btn ghost" href={org.sponsorForm} target="_blank">
              Sponsor Form
            </a>

            {team.id === "tball" ? (
              <>
                <a className="btn ghost" href={org.tballMerch.players} target="_blank">
                  Players Merch Form
                </a>
                <a className="btn ghost" href={org.tballMerch.parentFamily} target="_blank">
                  Parent/Family Merch Form
                </a>
                <a className="btn ghost" href={org.tballMerch.coach} target="_blank">
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
            Put your photos into:
            <br />
            <code>/public/gallery/{team.id}/</code>
          </p>
          <p style={{ opacity: 0.85, marginBottom: 0 }}>
            Once you upload images there, we can upgrade this page to auto-list them.
          </p>
        </div>
      </div>
    </div>
  );
}
