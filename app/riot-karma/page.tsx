import { teams } from "../lib/data";
import { phoneHref } from "../lib/utils";

export default function RiotKarmaPage() {
  const riot = teams.find((t) => t.id === "riot");
  const karma = teams.find((t) => t.id === "karma");

  return (
    <main className="wrap section">
      <h1>Riot / Karma Cheer</h1>

      <p style={{ fontSize: 20, opacity: 0.9, lineHeight: 1.7 }}>
        Stateline Renegades Riot and Karma are built for athletes who want to
        grow in confidence, teamwork, performance, and cheer skills.
      </p>

      <section className="grid2">
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>💚 Riot Cheer</h2>

          <p style={{ fontSize: 18 }}>
            <b>Ages:</b> 6–14
            <br />
            <b>Spots Available:</b> 3
          </p>

          <ul style={{ lineHeight: 2 }}>
            <li>Jumps, motions, dance, and performance</li>
            <li>Teamwork and confidence building</li>
            <li>Competition-style cheer training</li>
            <li>Beginner-friendly coaching</li>
          </ul>

          {riot?.registration ? (
            <a className="btn" href={riot.registration} target="_blank" rel="noreferrer">
              Register for Riot
            </a>
          ) : (
            <span className="pill subtle">Registration coming soon</span>
          )}
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>🩷 Karma Cheer</h2>

          <p style={{ fontSize: 18 }}>
            <b>Ages:</b> 3–5
            <br />
            <b>Spots Available:</b> 4
          </p>

          <ul style={{ lineHeight: 2 }}>
            <li>Local Travel team</li>
            <li>Mini cheer basics</li>
            <li>Fun beginner motions and jumps</li>
            <li>Confidence and listening skills</li>
            <li>Family-friendly team environment</li>
          </ul>

          {karma?.registration ? (
            <a className="btn" href={karma.registration} target="_blank" rel="noreferrer">
              Register for Karma
            </a>
          ) : (
            <span className="pill subtle">Registration coming soon</span>
          )}
        </div>
      </section>

      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Practice Schedule</h2>
        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          <b>Days:</b> Tuesday – Thursday
          <br />
          <b>Time:</b> 6:00 PM – 8:00 PM
        </p>
      </section>

      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Contacts</h2>

        <div style={{ display: "grid", gap: 10 }}>
          {[...(riot?.contacts || []), ...(karma?.contacts || [])].map((c) => (
            <a key={`${c.name}-${c.phone}`} href={phoneHref(c.phone)} style={{ textDecoration: "underline" }}>
              {c.name} — {c.phone}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}