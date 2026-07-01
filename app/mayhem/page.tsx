import { teams } from "../lib/data";
import TeamHero from "../components/TeamHero";

export default function MayhemPage() {
  const team = teams.find((t) => t.id === "mayhem");

  return (
    <main className="wrap section">
      <TeamHero
        title="Mayhem Cheer"
        subtitle="Power, performance, confidence, and exciting cheer progression."
        emoji="🔥"
        colors="linear-gradient(135deg, #111827, #7c2d12, #f97316)"
      />

      <section className="grid2">
        <div className="card" style={{ padding: 24 }}>
          <h2>🔥 Program Focus</h2>
          <ul style={{ lineHeight: 2 }}>
            <li>Cheer skill progression</li>
            <li>Performance and showmanship</li>
            <li>Teamwork and confidence</li>
            <li>Stunts, jumps, dance, and motions</li>
          </ul>
          {team?.registration && <a className="btn" href={team.registration} target="_blank" rel="noreferrer">Register for Mayhem</a>}
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2>Team Details</h2>
          <p><b>Ages:</b> {team?.ages || "Coming soon"}<br /><b>Colors:</b> {team?.colors || "Coming soon"}</p>
        </div>
      </section>
    </main>
  );
}