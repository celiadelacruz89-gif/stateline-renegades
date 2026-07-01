import { teams } from "../lib/data";
import { phoneHref } from "../lib/utils";

export default function AnarchyPage() {
  const team = teams.find((t) => t.id === "anarchy");

  return (
    <main className="wrap section">
      <h1>Anarchy Cheer</h1>

      <p style={{ fontSize: 20, opacity: 0.9, lineHeight: 1.7 }}>
        A competitive cheer team built for athletes ready to grow, perform,
        and push toward higher-level routines.
      </p>

      <section className="grid2">
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>💥 Program Focus</h2>

          <ul style={{ lineHeight: 2 }}>
            <li>Full Travel Team</li>
            <li>Competitive cheer development</li>
            <li>Stunts, jumps, dance, and performance quality</li>
            <li>Team discipline and accountability</li>
            <li>Confidence and leadership</li>
            <li>Strong team bonds</li>
          </ul>

          {team?.registration ? (
            <a className="btn" href={team.registration} target="_blank" rel="noreferrer">
              Register for Anarchy
            </a>
          ) : (
            <span className="pill subtle">Registration coming soon</span>
          )}
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>Team Details</h2>

          <p style={{ lineHeight: 1.8 }}>
            <b>Ages:</b> {team?.ages || "Coming soon"}
            <br />
            <b>Colors:</b> {team?.colors || "Team colors coming soon"}
          </p>
        </div>
      </section>

      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Contacts</h2>

        {team ? (
          <div style={{ display: "grid", gap: 10 }}>
            {team.contacts.map((c) => (
              <a key={c.phone} href={phoneHref(c.phone)} style={{ textDecoration: "underline" }}>
                {c.name} — {c.phone}
              </a>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}