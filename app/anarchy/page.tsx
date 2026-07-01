import { teams } from "../lib/data";
import TeamHero from "../components/TeamHero";

export default function AnarchyPage() {
  const team = teams.find((t) => t.id === "anarchy");

  return (
    <main className="wrap section">
      <TeamHero
        title="Anarchy Cheer"
        subtitle="Our Full Travel Team competing against top programs throughout the region. Bold energy, strong fundamentals, and high-impact team development."
        colors="linear-gradient(135deg, #111827, #7f1d1d, #dc2626)"
        logo="/logos/anarchy.png"
      />

      <div
        style={{
          background: "#dc2626",
          color: "white",
          padding: "12px 20px",
          borderRadius: 999,
          display: "inline-block",
          marginBottom: 20,
          fontWeight: 700,
        }}
      >
        FULL TRAVEL TEAM
      </div>

      <section className="grid2">
        <div className="card" style={{ padding: 24 }}>
          <h2>⚡ Program Focus</h2>

          <ul style={{ lineHeight: 2 }}>
            <li>Cheer skill progression</li>
            <li>Performance and showmanship</li>
            <li>Teamwork and confidence</li>
            <li>Stunts, jumps, dance, and motions</li>
            <li>Regional and travel competitions</li>
          </ul>

          {team?.registration && (
            <a
              className="btn"
              href={team.registration}
              target="_blank"
              rel="noreferrer"
            >
              Register for Anarchy
            </a>
          )}
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2>Team Details</h2>

          <p>
            <b>Ages:</b> {team?.ages || "Coming soon"}
            <br />
            <b>Colors:</b> {team?.colors || "Coming soon"}
          </p>
        </div>
      </section>
    </main>
  );
}