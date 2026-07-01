import SponsorShowcase from "../components/SponsorShowcase";
import { org, sponsors } from "../lib/data";

export default function SponsorsPage() {
  return (
    <main className="wrap section">

      <h1>Sponsors & Donations</h1>

      <SponsorShowcase
        sponsors={sponsors}
        sponsorForm={org.sponsorForm}
      />

      <div className="card">

        <h2>Become A Sponsor</h2>

        <p>
          Help support local athletes,
          equipment purchases,
          uniforms,
          competitions,
          and community programs.
        </p>

        <a
          className="btn"
          href={org.sponsorForm}
        >
          Sponsor Application
        </a>

      </div>

    </main>
  );
}