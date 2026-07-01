import SponsorShowcase from "../components/SponsorShowcase";
import { org, sponsors } from "../lib/data";

export default function SponsorsPage() {
  return (
    <main className="wrap section">
      <h1>Sponsors & Donations</h1>

      <p style={{ fontSize: 20, opacity: 0.9, lineHeight: 1.7 }}>
        Help support local youth athletes with uniforms, equipment, events,
        training opportunities, and program growth.
      </p>

      <SponsorShowcase sponsors={sponsors} sponsorForm={org.sponsorForm} />

      <section className="grid2" style={{ marginTop: 24 }}>
        {[
          ["All Star Sponsor", "$1,000", "Top recognition, banner placement, and premium sponsor visibility."],
          ["Elite Sponsor", "$750", "Logo placement, social media recognition, and team support."],
          ["Senior Sponsor", "$500", "Business recognition and athlete program support."],
          ["Junior Sponsor", "$250", "Sponsor shoutout and logo recognition."],
          ["Exhibition Sponsor", "$150", "Social media shoutout and sponsor appreciation."],
        ].map(([title, price, text]) => (
          <div key={title} className="card" style={{ padding: 22 }}>
            <h2 style={{ marginTop: 0 }}>{title}</h2>
            <h3>{price}</h3>
            <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{text}</p>
          </div>
        ))}
      </section>

      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Become A Sponsor</h2>

        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Sponsors help keep youth sports affordable and help provide more
          opportunities for athletes in our community.
        </p>

        <a
          className="btn"
          href={org.sponsorForm}
          target="_blank"
          rel="noreferrer"
        >
          Sponsor Application Form
        </a>
      </section>
    </main>
  );
}