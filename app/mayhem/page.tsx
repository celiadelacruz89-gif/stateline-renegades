import { teams } from "../lib/data";
import TeamHero from "../components/TeamHero";

export default function MayhemPage() {
  const team = teams.find((t) => t.id === "mayhem");

  return (
    <main className="wrap section">
      <TeamHero
        title="Mayhem Cheer"
        subtitle="Our Full Travel Team built for athletes seeking advanced competition opportunities. Power, performance, confidence, and exciting cheer progression."
        emoji="🔥"
        colors="linear-gradient(135deg, #111827, #7c2d12, #f97316)"
      />

      <div
        style={{
          background: "#f97316",
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
          <h2>🔥 Program Focus</h2>

          <ul style={{ lineHeight: 2 }}>
            <li>Cheer skill progression</li>
            <li>Performance and showmanship</li>
            <li>Teamwork and confidence</li>
            <li>Stunts, jumps, dance, and motions</li>
            <li>Regional and travel competitions</li>
          </ul>

          {team?.registration && (
            <a className="btn" href={team.registration} target="_blank" rel="noreferrer">
              Register for Mayhem
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