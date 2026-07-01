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
        subtitle="Confidence, teamwork, performance, and cheer training for our Renegade athletes."
        emoji="🦋"
        colors="linear-gradient(135deg, #004d40, #0f766e, #f9a8d4)"
      />

      <section className="grid2">
        <div className="card" style={{ padding: 24 }}>
          <h2>💚 Riot Cheer</h2>
          <p><b>Ages:</b> 6–14<br /><b>Spots Available:</b> 3</p>
          <ul style={{ lineHeight: 2 }}>
            <li>Jumps, motions, dance, and performance</li>
            <li>Teamwork and confidence building</li>
            <li>Competition-style cheer training</li>
          </ul>
          {riot?.registration && <a className="btn" href={riot.registration} target="_blank" rel="noreferrer">Register for Riot</a>}
        </div>

        <div className="card" style={{ padding: 24 }}>
          <h2>🩷 Karma Cheer</h2>
          <p><b>Ages:</b> 3–5<br /><b>Spots Available:</b> 4</p>
          <ul style={{ lineHeight: 2 }}>
            <li>Mini cheer basics</li>
            <li>Fun beginner motions and jumps</li>
            <li>Confidence and listening skills</li>
          </ul>
          {karma?.registration && <a className="btn" href={karma.registration} target="_blank" rel="noreferrer">Register for Karma</a>}
        </div>
      </section>

      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2>Practice Schedule</h2>
        <p><b>Tuesday – Thursday</b><br />6:00 PM – 8:00 PM</p>
      </section>
    </main>
  );
}