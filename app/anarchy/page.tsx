import { teams } from "../lib/data";
import { phoneHref } from "../lib/utils";
import TeamHero from "../components/TeamHero";

export default function AnarchyPage() {
  const team = teams.find((t) => t.id === "anarchy");

  return (
    <main className="wrap section">
      <TeamHero
        title="Anarchy Cheer"
        subtitle="Bold energy, strong fundamentals, and high-impact team development."
        emoji="⚡"
        colors="linear-gradient(135deg, #111827, #7f1d1d, #dc2626)"
      />

      <section className="grid2">
        <div className="card" style={{ padding: 24 }}>
          <h2>⚡ Program Focus</h2>
          <ul style={{ lineHeight: 2 }}>
            <li>Cheer skill progression</li>
            <li>Performance and showmanship</li>
            <li>Teamwork and confidence</li>
            <li>Stunts, jumps, dance, and motions</li>
          </ul>
          {team?.registration && <a className="btn" href={team.registration} target="_blank" rel="noreferrer">Register for Anarchy</a>}
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2>Team Details</h2>
          <p><b>Ages:</b> {team?.ages || "Coming soon"}<br /><b>Colors:</b> {team?.colors || "Coming soon"}</p>
        </div>
      </section>
    </main>
  );
}