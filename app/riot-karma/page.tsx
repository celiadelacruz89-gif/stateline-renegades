import Link from "next/link";

export default function RiotKarmaPage() {
  return (
    <main className="wrap section">
      <h1>Riot & Karma Cheer</h1>

      <p>
        Join one of our fastest growing cheer programs.
      </p>

      <div className="grid2">

        <div className="card">
          <h2>🩷 Karma Cheer</h2>

          <p>Ages 3–5</p>

          <p>
            Only 4 Spots Available
          </p>

          <ul>
            <li>Cheer Fundamentals</li>
            <li>Confidence Building</li>
            <li>Fun Environment</li>
          </ul>

          <a
            className="btn"
            href="https://form.jotform.com/260336801253046"
          >
            Register
          </a>
        </div>

        <div className="card">
          <h2>💚 Riot Cheer</h2>

          <p>Ages 6–14</p>

          <p>
            Only 3 Spots Available
          </p>

          <ul>
            <li>Competition Opportunities</li>
            <li>Athlete Development</li>
            <li>Leadership</li>
          </ul>

          <a
            className="btn"
            href="https://form.jotform.com/260336801253046"
          >
            Register
          </a>
        </div>

      </div>
    </main>
  );
}