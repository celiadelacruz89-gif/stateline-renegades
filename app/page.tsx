"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import { org, teams } from "./lib/data";
import UpcomingEvents from "./components/UpcomingEvents";

export default function HomePage() {
  return (
    <>
      <nav>
        <div className="wrap navInner">
          <div className="brand">
            <div className="brandMark" />
            <div className="brandText">
              <b>{org.name}</b>
              <span>One Organization. Five Teams. One Renegade Family.</span>
            </div>
          </div>

          <div className="navLinks">
            <Link href="/">Home</Link>
            <Link href="/riot-karma">Riot / Karma</Link>
            <Link href="/anarchy">Anarchy</Link>
            <Link href="/mayhem">Mayhem</Link>
            <Link href="/tball">T-Ball</Link>
            <Link href="/sponsors">Sponsors</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/admin">Admin</Link>
          </div>
        </div>
      </nav>

      <main className="wrap section">
        <HeroSlider />

<UpcomingEvents />

        {/* NOW REGISTERING */}
        <section
          className="card"
          style={{
            padding: "22px",
            marginTop: "18px",
            border: "1px solid rgba(255,255,255,0.14)",
            background:
              "linear-gradient(90deg, rgba(255,79,210,0.22), rgba(57,213,255,0.18))",
          }}
        >
          <h2 style={{ marginTop: 0 }}>Riot & Karma Cheer Registration Open</h2>

          <p style={{ lineHeight: 1.8 }}>
            🩷 Karma Cheer Ages 3–5 — Only 4 Spots Available
            <br />
            💚 Riot Cheer Ages 10–12 — Only 3 Spots Available
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a
              className="btn"
              href="https://form.jotform.com/260336801253046"
              target="_blank"
              rel="noreferrer"
            >
              Register for Riot / Karma
            </a>

            <Link className="btn ghost" href="/riot-karma">
              View Riot / Karma
            </Link>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="card" style={{ padding: "22px", marginTop: "14px" }}>
          <h2 style={{ marginTop: 0 }}>Upcoming Events</h2>

          <div
            style={{
              display: "grid",
              gap: "12px",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <div className="card" style={{ padding: "16px" }}>
              <h3 style={{ marginTop: 0 }}>📣 Cheer Camp</h3>
              <p style={{ marginBottom: 0 }}>
                July 17–18
                <br />
                Ages 2–14
              </p>
            </div>

            <div className="card" style={{ padding: "16px" }}>
              <h3 style={{ marginTop: 0 }}>🎟️ Back-to-School Raffle</h3>
              <p style={{ marginBottom: 0 }}>
                Drawing July 25
                <br />
                12 Winners
              </p>
            </div>

            <div className="card" style={{ padding: "16px" }}>
              <h3 style={{ marginTop: 0 }}>🤝 Sponsors Needed</h3>
              <p style={{ marginBottom: 0 }}>
                Support local youth athletes and community programs.
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section
          style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            marginTop: 18,
          }}
        >
          {[
            ["100+", "Athletes"],
            ["5", "Teams"],
            ["10+", "Coaches & Volunteers"],
            ["1", "Renegade Family"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="card"
              style={{
                padding: 30,
                textAlign: "center",
              }}
            >
              <h2 style={{ margin: 0, fontSize: 42, fontWeight: 900 }}>
                {number}
              </h2>
              <p style={{ margin: "6px 0 0", opacity: 0.85 }}>{label}</p>
            </div>
          ))}
        </section>

        {/* QUICK LINKS */}
        <section className="sectionTitle" style={{ marginTop: 28 }}>
          <div>
            <h2>Choose Your Program</h2>
            <p>Select a team or sponsor page to learn more.</p>
          </div>
        </section>

        <section className="grid2">
          {[
            ["🩷 Riot / Karma Cheer", "Local travel Competitive cheer team, Ages 3–5 and 6–14. Registration open now.", "/riot-karma"],
            ["💥 Anarchy Cheer", "Full travel Competitive cheer team information.", "/anarchy"],
            ["⚡ Mayhem Cheer", "Full travel Competitive cheerPerformance, growth, and team development.", "/mayhem"],
            ["⚾ T-Ball", "Beginner baseball fundamentals and teamwork.", "/tball"],
            ["🤝 Sponsors", "Support our athletes and organization.", "/sponsors"],
          ].map(([title, text, href]) => (
            <Link
              key={href}
              href={href}
              className="card"
              style={{
                padding: 22,
                textDecoration: "none",
                color: "inherit",
                borderRadius: 20,
              }}
            >
              <h2 style={{ marginTop: 0 }}>{title}</h2>
              <p style={{ opacity: 0.85, lineHeight: 1.7 }}>{text}</p>
              <span className="btn">View Page</span>
            </Link>
          ))}
        </section>

        {/* GALLERIES */}
        <section className="sectionTitle" style={{ marginTop: 28 }}>
          <div>
            <h2>Team Galleries</h2>
            <p>View photos, highlights, events, and special moments.</p>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <Link
            href="/gallery/org"
            className="card"
            style={{
              padding: 16,
              textDecoration: "none",
              color: "inherit",
              borderRadius: 20,
            }}
          >
            <div style={{ fontWeight: 900 }}>Organization Gallery</div>
            <div style={{ fontSize: 13, opacity: 0.8 }}>
              Events • Banquets • Community
            </div>
          </Link>

          {teams.map((t) => (
            <Link
              key={`gallery-${t.id}`}
              href={`/gallery/${t.id}`}
              className="card"
              style={{
                padding: 16,
                textDecoration: "none",
                color: "inherit",
                borderRadius: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Image
                  src={t.logo}
                  alt={t.name}
                  width={54}
                  height={54}
                  style={{ borderRadius: 14 }}
                />
                <div>
                  <div style={{ fontWeight: 900 }}>{t.name}</div>
                  <div style={{ fontSize: 13, opacity: 0.8 }}>Open gallery</div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* MISSION */}
        <section className="card" style={{ padding: 24, marginTop: 18 }}>
          <h2 style={{ marginTop: 0 }}>Our Mission</h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8, fontSize: 17, marginBottom: 0 }}>
            Stateline Renegades exists to provide youth athletes with a positive
            environment where they can grow through sports, build confidence,
            develop leadership skills, and create lifelong friendships.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="card" style={{ padding: 22, marginTop: 22, marginBottom: 20 }}>
          <h3 style={{ marginTop: 0 }}>Stateline Renegades</h3>
          <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
            T-Ball • Anarchy Cheer • Mayhem Cheer • Riot Cheer • Karma Cheer
          </p>

          <div className="divider" />

          <p style={{ margin: 0, opacity: 0.7 }}>
            © 2026 Stateline Renegades. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}