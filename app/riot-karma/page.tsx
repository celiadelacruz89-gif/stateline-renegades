import { teams } from "../lib/data";
import { phoneHref } from "../lib/utils";
import TeamHero from "../components/TeamHero";

export default function RiotKarmaPage() {
  const riot = teams.find((t) => t.id === "riot");
  const karma = teams.find((t) => t.id === "karma");

  return (
    <main className="wrap section">
      <TeamHero
        title="Riot / Karma Cheer"
        subtitle="Our Local Travel Teams focused on athlete development, confidence, teamwork, and preparing athletes for advanced competition opportunities."
        colors="linear-gradient(135deg, #004d40, #0f766e, #f9a8d4)"
        logo="/logos/riot-karma.png"
      />

      <div
        style={{
          background: "#0f766e",
          color: "white",
          padding: "12px 20px",
          borderRadius: 999,
          display: "inline-block",
          marginBottom: 20,
          fontWeight: 700,
        }}
      >
        LOCAL TRAVEL TEAMS
      </div>

      <section className="card" style={{ padding: 24, marginBottom: 24 }}>
        <h2 style={{ marginTop: 0 }}>Renegades Cheer Pathway</h2>

        <p style={{ fontSize: 18, lineHeight: 1.8 }}>
          🩷 <b>Karma Ages 3–5</b> → Beginner Development
          <br />
          💚 <b>Riot Ages 9–12</b> → Local Travel Team
          <br />
          ⚡ <b>Anarchy</b> → Full Travel Team
          <br />
          🔥 <b>Mayhem</b> → Full Travel Team
        </p>
      </section>

      <section className="grid2">
        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>💚 Riot Cheer</h2>

          <p style={{ color: "#16a34a", fontWeight: 700 }}>
            Local Travel Team
          </p>

          <p style={{ fontSize: 18 }}>
            <b>Ages:</b> 9–12
            <br />
            <b>Spots Available:</b> 3
          </p>

          <ul style={{ lineHeight: 2 }}>
            <li>Local travel competition team</li>
            <li>Competition-style cheer training</li>
            <li>Designed for athletes building advanced skills</li>
            <li>Jumps, motions, dance, and performance</li>
            <li>Teamwork and confidence building</li>
          </ul>

          {riot?.registration && (
            <a
              className="btn"
              href={riot.registration}
              target="_blank"
              rel="noreferrer"
            >
              Register for Riot
            </a>
          )}
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2 style={{ marginTop: 0 }}>🩷 Karma Cheer</h2>

          <p style={{ color: "#ec4899", fontWeight: 700 }}>
            Local Travel Team
          </p>

          <p style={{ fontSize: 18 }}>
            <b>Ages:</b> 3–5
            <br />
            <b>Spots Available:</b> 4
          </p>

          <ul style={{ lineHeight: 2 }}>
            <li>Mini cheer basics</li>
            <li>Fun beginner motions and jumps</li>
            <li>Confidence and listening skills</li>
            <li>Local performances and competitions</li>
            <li>Perfect introduction to competitive cheer</li>
          </ul>

          {karma?.registration && (
            <a
              className="btn"
              href={karma.registration}
              target="_blank"
              rel="noreferrer"
            >
              Register for Karma
            </a>
          )}
        </div>
      </section>

      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Registration & Team Costs</h2>

        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          We strive to keep competitive cheer affordable while providing a
          quality experience for every athlete. Returning members receive
          discounted registration pricing.
        </p>

        <div
          style={{
            display: "grid",
            gap: 18,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            marginTop: 20,
          }}
        >
          <div className="card" style={{ padding: 20 }}>
            <h3 style={{ marginTop: 0 }}>🩷 Karma</h3>

            <p>
              <strong>Ages:</strong> 3–5
            </p>
            <p>
              <strong>New Member Registration:</strong> $250
            </p>
            <p>
              <strong>Returning Member Registration:</strong> $85
            </p>
          </div>

          <div className="card" style={{ padding: 20 }}>
            <h3 style={{ marginTop: 0 }}>💚 Riot</h3>

            <p>
              <strong>Ages:</strong> 9–12
            </p>
            <p>
              <strong>New Member Registration:</strong> $250
            </p>
            <p>
              <strong>Returning Member Registration:</strong> $85
            </p>
          </div>
        </div>

        <div
          className="card"
          style={{
            marginTop: 20,
            padding: 20,
            borderLeft: "5px solid #14b8a6",
          }}
        >
          <h3 style={{ marginTop: 0 }}>🏆 Competition Fees</h3>

          <p style={{ marginBottom: 8 }}>
            Competition entry fees are estimated at{" "}
            <strong>$350 per competition</strong>.
          </p>

          <p style={{ marginBottom: 0 }}>
            These fees are{" "}
            <strong>shared among all athletes on the team</strong>, so each
            family&apos;s portion depends on the number of athletes
            participating.
          </p>
        </div>

        <div
          style={{
            marginTop: 18,
            textAlign: "center",
            fontWeight: 600,
            fontSize: "1.05rem",
          }}
        >
          💚 We believe every child deserves the opportunity to cheer.
          Fundraising opportunities and payment options may be available for
          families who need assistance.
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
            <a
              key={`${c.name}-${c.phone}`}
              href={phoneHref(c.phone)}
              style={{ textDecoration: "underline" }}
            >
              {c.name} — {c.phone}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}