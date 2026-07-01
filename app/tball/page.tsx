import { org, teams } from "../lib/data";
import { phoneHref } from "../lib/utils";

export default function TBallPage() {
  const tballTeam = teams.find((t) => t.id === "tball");

  return (
    <main className="wrap section">
      <h1>T-Ball Program</h1>

      <p style={{ fontSize: 20, opacity: 0.9, lineHeight: 1.7 }}>
        A beginner-friendly baseball program focused on fundamentals,
        confidence, teamwork, and sportsmanship.
      </p>

      <section className="grid2">
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>⚾ Program Focus</h2>

          <ul style={{ lineHeight: 2 }}>
            <li>Baseball fundamentals</li>
            <li>Throwing, catching, and hitting basics</li>
            <li>Teamwork and sportsmanship</li>
            <li>Confidence building</li>
            <li>Fun, beginner-friendly environment</li>
          </ul>

          <a
            className="btn"
            href={org.tballRegistration}
            target="_blank"
            rel="noreferrer"
          >
            Register for T-Ball
          </a>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>👕 T-Ball Merch</h2>

          <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
            Shop team gear for players, parents, families, and coaches.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a className="btn ghost" href={org.tballMerch.players} target="_blank" rel="noreferrer">
              Players
            </a>

            <a className="btn ghost" href={org.tballMerch.parentFamily} target="_blank" rel="noreferrer">
              Parent / Family
            </a>

            <a className="btn ghost" href={org.tballMerch.coach} target="_blank" rel="noreferrer">
              Coaches
            </a>
          </div>
        </div>
      </section>

      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Contacts</h2>

        {tballTeam ? (
          <div style={{ display: "grid", gap: 10 }}>
            {tballTeam.contacts.map((c) => (
              <a
                key={c.phone}
                href={phoneHref(c.phone)}
                style={{ textDecoration: "underline" }}
              >
                {c.name} — {c.phone}
              </a>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}