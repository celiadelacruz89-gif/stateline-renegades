"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import { teams } from "./lib/data";
import WhyChooseUs from "./components/WhyChooseUs";
import FeaturedVideo from "./components/FeaturedVideo";

export default function HomePage() {
  return (
    <>
      <main className="wrap section">
        <HeroSlider />
        <FeaturedVideo />
<WhyChooseUs />

        {/* UPCOMING EVENTS */}
<section className="card" style={{ padding: "22px", marginTop: "14px" }}>
  <h2 style={{ marginTop: 0 }}>Upcoming Events</h2>
  <p style={{ opacity: 0.8, marginTop: -8 }}>
    Monthly calendar view with highlighted event dates.
  </p>

  {(() => {
    const events = [
      {
        date: "2026-07-17",
        day: 17,
        team: "Stateline Renegades",
        title: "Cheer Camp",
        details: "Ages 2–14",
      },
      {
        date: "2026-07-18",
        day: 18,
        team: "Stateline Renegades",
        title: "Cheer Camp",
        details: "Ages 2–14",
      },
      {
        date: "2026-07-25",
        day: 25,
        team: "Riot / Karma Cheer",
        title: "Back-to-School Raffle Drawing",
        details: "12 Winners",
      },
    ];

    const eventDays = events.map((event) => event.day);

    const daysInJuly = Array.from({ length: 31 }, (_, i) => i + 1);
    const blanksBeforeJuly = 3; // July 1, 2026 starts on Wednesday

    return (
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          alignItems: "start",
        }}
      >
        <div className="card" style={{ padding: "16px" }}>
          <h3 style={{ marginTop: 0, textAlign: "center" }}>July 2026</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "8px",
              textAlign: "center",
              fontWeight: 800,
              fontSize: "13px",
              marginBottom: "8px",
            }}
          >
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 1fr)",
              gap: "8px",
            }}
          >
            {Array.from({ length: blanksBeforeJuly }).map((_, index) => (
              <div key={`blank-${index}`} />
            ))}

            {daysInJuly.map((day) => {
              const isEvent = eventDays.includes(day);

              return (
                <div
                  key={day}
                  style={{
                    padding: "10px 0",
                    borderRadius: "12px",
                    textAlign: "center",
                    fontWeight: 900,
                    background: isEvent
                      ? "linear-gradient(135deg, #f9a8d4, #14b8a6)"
                      : "rgba(255,255,255,0.08)",
                    color: isEvent ? "#000" : "inherit",
                    border: isEvent
                      ? "2px solid rgba(255,255,255,0.8)"
                      : "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>

        <div className="card" style={{ padding: "16px" }}>
          <h3 style={{ marginTop: 0 }}>Event List</h3>

          <div style={{ display: "grid", gap: "12px" }}>
            {events.map((event) => (
              <div
                key={`${event.date}-${event.title}`}
                style={{
                  padding: "14px",
                  borderRadius: "16px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div style={{ fontWeight: 900 }}>
                  July {event.day} — {event.team}
                </div>
                <div style={{ fontSize: "18px", fontWeight: 900 }}>
                  {event.title}
                </div>
                <div style={{ opacity: 0.8 }}>{event.details}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  })()}
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