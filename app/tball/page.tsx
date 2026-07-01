import { org, teams } from "../lib/data";
import { phoneHref } from "../lib/utils";
import TeamHero from "../components/TeamHero";

export default function TBallPage() {
  const tballTeam = teams.find((t) => t.id === "tball");

  return (
    <main className="wrap section">
      <TeamHero
        title="T-Ball"
        subtitle="Building confidence, teamwork, and baseball fundamentals for young athletes."
        emoji="⚾"
        colors="linear-gradient(135deg, #111827, #991b1b, #ef4444)"
      />

      <section className="grid2">
        <div className="card" style={{ padding: 24 }}>
          <h2>⚾ Program Focus</h2>
          <ul style={{ lineHeight: 2 }}>
            <li>Baseball fundamentals</li>
            <li>Throwing, catching, and hitting basics</li>
            <li>Teamwork and sportsmanship</li>
            <li>Fun, beginner-friendly environment</li>
          </ul>
          <a className="btn" href={org.tballRegistration} target="_blank" rel="noreferrer">
            Register for T-Ball
          </a>
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2>👕 T-Ball Merch</h2>
          <p>Shop team gear for players, parents, families, and coaches.</p>
        </div>
      </section>
    </main>
  );
}