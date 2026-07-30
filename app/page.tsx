"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import FeaturedVideo from "./components/FeaturedVideo";
import WhyChooseUs from "./components/WhyChooseUs";
import { teams } from "./lib/data";

const events: {
  date: string;
  day: number;
  team: string;
  title: string;
  details: string;
  icon: string;
}[] = [];

const stats = [
  {
    number: "100+",
    label: "Youth Athletes",
    description: "Growing through sports",
  },
  {
    number: "5",
    label: "Competitive Teams",
    description: "Cheer and baseball",
  },
  {
    number: "10+",
    label: "Coaches & Volunteers",
    description: "Committed to our athletes",
  },
  {
    number: "1",
    label: "Renegades Family",
    description: "United by community",
  },
];

const programs = [
  {
    title: "Riot & Karma Cheer",
    subtitle: "Local Travel Cheer",
    description:
      "Competitive cheer programs serving athletes ages 3–5 and 6–14 with skill development, teamwork, and exciting competition opportunities.",
    href: "/riot-karma",
    icon: "🩷",
    badge: "Registration Open",
    accent: "#14b8a6",
    background:
      "linear-gradient(145deg, rgba(20,184,166,0.12), rgba(249,168,212,0.12))",
    border: "rgba(20,184,166,0.22)",
  },
  {
    title: "Anarchy Cheer",
    subtitle: "Full Travel Cheer",
    description:
      "A bold competitive program focused on strong fundamentals, confidence, performance, and regional travel competition.",
    href: "/anarchy",
    icon: "💥",
    badge: "Full Travel",
    accent: "#b50c0c",
    background:
      "linear-gradient(145deg, rgba(127,29,29,0.12), rgba(220,38,38,0.1))",
    border: "rgba(220,38,38,0.21)",
  },
  {
    title: "Mayhem Cheer",
    subtitle: "Full Travel Cheer",
    description:
      "Power, performance, confidence, and advanced competition opportunities for athletes ready to take the next step.",
    href: "/mayhem",
    icon: "⚡",
    badge: "Full Travel",
    accent: "#9333ea",
    background:
      "linear-gradient(145deg, rgba(76,29,149,0.12), rgba(147,51,234,0.11))",
    border: "rgba(147,51,234,0.22)",
  },
  {
    title: "Renegades T-Ball",
    subtitle: "Youth Baseball",
    description:
      "A positive introduction to baseball fundamentals, teamwork, confidence, sportsmanship, and fun.",
    href: "/tball",
    icon: "⚾",
    badge: "Future Renegades",
    accent: "#dc2626",
    background:
      "linear-gradient(145deg, rgba(24,24,27,0.09), rgba(220,38,38,0.1))",
    border: "rgba(220,38,38,0.2)",
  },
  {
    title: "Become a Sponsor",
    subtitle: "Support Our Organization",
    description:
      "Help provide equipment, uniforms, competition opportunities, and meaningful experiences for local youth athletes.",
    href: "/sponsors",
    icon: "🤝",
    badge: "Make an Impact",
    accent: "#f59e0b",
    background:
      "linear-gradient(145deg, rgba(245,158,11,0.1), rgba(255,255,255,0.04))",
    border: "rgba(245,158,11,0.2)",
  },
];

const organizationHighlights = [
  {
    icon: "🏆",
    title: "Competitive Development",
    description:
      "Athletes receive structured instruction designed to support individual and team growth.",
  },
  {
    icon: "💪",
    title: "Confidence Building",
    description:
      "Sports help athletes learn resilience, responsibility, leadership, and self-belief.",
  },
  {
    icon: "🤝",
    title: "Community & Family",
    description:
      "Our organization brings athletes, coaches, volunteers, and families together.",
  },
];
export default function HomePage() {
  return (
    <main className="wrap section">
      {/* EXISTING HOME HERO */}
      <HeroSlider />

      {/* HOME INTRODUCTION */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 22,
          padding: "clamp(30px, 6vw, 62px)",
          borderRadius: 30,
          color: "white",
          background:
            "linear-gradient(135deg, #030712 0%, #111827 38%, #7f1d1d 72%, #dc2626 100%)",
          border: "1px solid rgba(220,38,38,0.3)",
          boxShadow: "0 28px 75px rgba(0,0,0,0.27)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 360,
            height: 360,
            top: -205,
            right: -115,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.09)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            bottom: -165,
            left: -95,
            borderRadius: "50%",
            background: "rgba(220,38,38,0.23)",
            filter: "blur(10px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            alignItems: "center",
            gap: 34,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "8px 14px",
                marginBottom: 17,
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.14)",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "white",
                  boxShadow: "0 0 13px rgba(255,255,255,0.9)",
                }}
              />

              Cheer • Baseball • Community • Family
            </div>

            <h1
              style={{
                maxWidth: 780,
                margin: 0,
                fontSize: "clamp(38px, 7vw, 70px)",
                lineHeight: 0.99,
                letterSpacing: "-0.045em",
              }}
            >
              Building Strong Athletes and Confident Leaders
            </h1>

            <p
              style={{
                maxWidth: 720,
                margin: "20px 0 0",
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.78,
                opacity: 0.87,
              }}
            >
              Stateline Renegades provides youth athletes with competitive
              cheer and baseball opportunities centered around development,
              teamwork, confidence, leadership, and family.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 26,
              }}
            >
              <Link
                href="/riot-karma"
                className="btn btnPrimary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 215,
                  minHeight: 54,
                  padding: "14px 21px",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                Explore Cheer Programs
              </Link>

              <Link
                href="/tball"
                className="btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 215,
                  minHeight: 54,
                  padding: "14px 21px",
                  color: "white",
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                Explore T-Ball
              </Link>
            </div>
          </div>

          <div
            style={{
              padding: "clamp(22px, 4vw, 30px)",
              borderRadius: 25,
              background: "rgba(0,0,0,0.27)",
              border: "1px solid rgba(255,255,255,0.13)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                marginBottom: 16,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              Stateline Renegades Programs
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {[
                {
                  icon: "📣",
                  title: "Competitive Cheer",
                  text: "Local and full travel teams",
                },
                {
                  icon: "⚾",
                  title: "Youth T-Ball",
                  text: "Baseball fundamentals and teamwork",
                },
                {
                  icon: "🤝",
                  title: "Family Community",
                  text: "Support on and off the field",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "15px",
                    borderRadius: 17,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <div
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: 46,
                      height: 46,
                      flex: "0 0 auto",
                      borderRadius: 15,
                      background: "rgba(220,38,38,0.25)",
                      fontSize: 23,
                    }}
                  >
                    {item.icon}
                  </div>

                  <div>
                    <div style={{ fontWeight: 900 }}>{item.title}</div>

                    <div
                      style={{
                        marginTop: 2,
                        fontSize: 13,
                        lineHeight: 1.5,
                        opacity: 0.72,
                      }}
                    >
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section style={{ marginTop: 26 }}>
        <FeaturedVideo />
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ marginTop: 26 }}>
        <WhyChooseUs />
      </section>

      {/* STATISTICS */}
      <section
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
          marginTop: 26,
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="card"
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: 190,
              padding: 25,
              borderRadius: 23,
              border: "1px solid rgba(220,38,38,0.13)",
              background:
                "linear-gradient(145deg, rgba(17,24,39,0.04), rgba(220,38,38,0.045))",
              boxShadow: "0 13px 34px rgba(0,0,0,0.07)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 100,
                height: 100,
                top: -50,
                right: -35,
                borderRadius: "50%",
                background: "rgba(220,38,38,0.07)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                fontSize: "clamp(38px, 5vw, 50px)",
                lineHeight: 1,
                fontWeight: 950,
                letterSpacing: "-0.04em",
              }}
            >
              {stat.number}
            </div>

            <div
              style={{
                position: "relative",
                marginTop: 9,
                fontSize: 17,
                fontWeight: 900,
              }}
            >
              {stat.label}
            </div>

            <div
              style={{
                position: "relative",
                marginTop: 5,
                fontSize: 13,
                lineHeight: 1.5,
                opacity: 0.66,
              }}
            >
              {stat.description}
            </div>
          </div>
        ))}
      </section>

      {/* PROGRAMS */}
      <section style={{ marginTop: 38 }}>
        <div
          style={{
            maxWidth: 790,
            margin: "0 auto 27px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 13px",
              marginBottom: 12,
              borderRadius: 999,
              background: "rgba(220,38,38,0.1)",
              color: "#dc2626",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Find Your Team
          </div>

          <h2
            style={{
              margin: "0 0 11px",
              fontSize: "clamp(31px, 5vw, 47px)",
            }}
          >
            Choose Your Renegades Program
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0.74,
            }}
          >
            Explore our competitive cheer teams, youth baseball program, and
            opportunities to support Stateline Renegades athletes.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
          }}
        >
          {programs.map((program) => (
            <Link
              key={program.href}
              href={program.href}
              className="card"
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 330,
                padding: 27,
                borderRadius: 25,
                border: `1px solid ${program.border}`,
                background: program.background,
                boxShadow: "0 15px 38px rgba(0,0,0,0.08)",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 150,
                  height: 150,
                  top: -78,
                  right: -50,
                  borderRadius: "50%",
                  background: program.border,
                  opacity: 0.45,
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 15,
                }}
              >
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: 64,
                    height: 64,
                    flex: "0 0 auto",
                    borderRadius: 20,
                    background: "rgba(255,255,255,0.08)",
                    border: `1px solid ${program.border}`,
                    fontSize: 31,
                  }}
                >
                  {program.icon}
                </div>

                <div
                  style={{
                    padding: "7px 11px",
                    borderRadius: 999,
                    background: program.border,
                    color: program.accent,
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}
                >
                  {program.badge}
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  marginTop: 22,
                  fontSize: 12,
                  fontWeight: 900,
                  letterSpacing: "0.11em",
                  textTransform: "uppercase",
                  color: program.accent,
                }}
              >
                {program.subtitle}
              </div>

              <h3
                style={{
                  position: "relative",
                  margin: "7px 0 10px",
                  fontSize: 27,
                }}
              >
                {program.title}
              </h3>

              <p
                style={{
                  position: "relative",
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.72,
                  opacity: 0.74,
                }}
              >
                {program.description}
              </p>

              <div
                style={{
                  position: "relative",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: "auto",
                  paddingTop: 23,
                  color: program.accent,
                  fontWeight: 900,
                }}
              >
                View Program
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

     {/* UPCOMING EVENTS */}
<section
  className="card"
  style={{
    position: "relative",
    overflow: "hidden",
    marginTop: 38,
    padding: "clamp(26px, 5vw, 42px)",
    borderRadius: 29,
    border: "1px solid rgba(20,184,166,0.16)",
    background:
      "linear-gradient(145deg, rgba(20,184,166,0.045), rgba(249,168,212,0.05))",
  }}
>
  <div
    style={{
      position: "absolute",
      width: 250,
      height: 250,
      top: -145,
      right: -80,
      borderRadius: "50%",
      background: "rgba(20,184,166,0.08)",
      pointerEvents: "none",
    }}
  />

  <div style={{ position: "relative" }}>
    <div
      style={{
        maxWidth: 750,
        margin: "0 auto 27px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "7px 13px",
          marginBottom: 12,
          borderRadius: 999,
          background: "rgba(20,184,166,0.11)",
          color: "#14b8a6",
          fontSize: 12,
          fontWeight: 900,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Renegades Calendar
      </div>

      <h2
        style={{
          margin: "0 0 10px",
          fontSize: "clamp(30px, 5vw, 45px)",
        }}
      >
        Upcoming Events
      </h2>

      <p
        style={{
          margin: 0,
          fontSize: 16,
          lineHeight: 1.75,
          opacity: 0.72,
        }}
      >
        Check back for upcoming camps, competitions, fundraisers, team
        activities, and organization events.
      </p>
    </div>

    {events.length > 0 ? (
      <div
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
        }}
      >
        {events.map((event) => (
          <div
            key={`${event.date}-${event.title}`}
            style={{
              padding: 20,
              borderRadius: 20,
              background:
                "linear-gradient(145deg, rgba(20,184,166,0.055), rgba(249,168,212,0.065))",
              border: "1px solid rgba(20,184,166,0.13)",
              boxShadow: "0 13px 32px rgba(0,0,0,0.07)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
              }}
            >
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 58,
                  height: 58,
                  flex: "0 0 auto",
                  borderRadius: 17,
                  background:
                    "linear-gradient(135deg, #f9a8d4, #14b8a6)",
                  color: "#07111a",
                  fontSize: 26,
                }}
              >
                {event.icon}
              </div>

              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    opacity: 0.65,
                  }}
                >
                  {event.date}
                </div>

                <h3
                  style={{
                    margin: "3px 0 2px",
                    fontSize: 19,
                  }}
                >
                  {event.title}
                </h3>

                <div
                  style={{
                    fontSize: 13,
                    opacity: 0.72,
                  }}
                >
                  {event.team}
                </div>
              </div>
            </div>

            <p
              style={{
                margin: "15px 0 0",
                fontSize: 14,
                lineHeight: 1.65,
                opacity: 0.72,
              }}
            >
              {event.details}
            </p>
          </div>
        ))}
      </div>
    ) : (
      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "clamp(28px, 6vw, 48px)",
          borderRadius: 25,
          textAlign: "center",
          background:
            "linear-gradient(145deg, rgba(20,184,166,0.06), rgba(249,168,212,0.07))",
          border: "1px solid rgba(20,184,166,0.15)",
          boxShadow: "0 15px 38px rgba(0,0,0,0.07)",
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
            width: 74,
            height: 74,
            margin: "0 auto 18px",
            borderRadius: 23,
            background:
              "linear-gradient(135deg, rgba(249,168,212,0.2), rgba(20,184,166,0.2))",
            border: "1px solid rgba(20,184,166,0.16)",
            fontSize: 34,
          }}
        >
          📅
        </div>

        <h3
          style={{
            margin: "0 0 10px",
            fontSize: "clamp(23px, 4vw, 31px)",
          }}
        >
          No Upcoming Events Scheduled
        </h3>

        <p
          style={{
            maxWidth: 560,
            margin: "0 auto",
            fontSize: 15,
            lineHeight: 1.75,
            opacity: 0.72,
          }}
        >
          New events will be posted here as soon as dates are confirmed.
          Follow Stateline Renegades for announcements and team updates.
        </p>
      </div>
    )}
  </div>
</section>

      {/* ORGANIZATION HIGHLIGHTS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 250px), 1fr))",
          gap: 18,
          marginTop: 30,
        }}
      >
        {organizationHighlights.map((item) => (
          <div
            key={item.title}
            className="card"
            style={{
              padding: 25,
              borderRadius: 23,
              border: "1px solid rgba(220,38,38,0.13)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "grid",
                placeItems: "center",
                width: 62,
                height: 62,
                margin: "0 auto 15px",
                borderRadius: 19,
                background:
                  "linear-gradient(135deg, rgba(17,24,39,0.1), rgba(220,38,38,0.14))",
                fontSize: 29,
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                margin: "0 0 9px",
                fontSize: 20,
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                margin: 0,
                fontSize: 14,
                lineHeight: 1.7,
                opacity: 0.72,
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </section>

      {/* TEAM GALLERIES */}
      <section
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 38,
          padding: "clamp(26px, 5vw, 42px)",
          borderRadius: 29,
          border: "1px solid rgba(220,38,38,0.14)",
          background:
            "linear-gradient(145deg, rgba(17,24,39,0.04), rgba(220,38,38,0.045))",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto 27px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 13px",
              marginBottom: 12,
              borderRadius: 999,
              background: "rgba(220,38,38,0.1)",
              color: "#dc2626",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Renegades Memories
          </div>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(30px, 5vw, 45px)",
            }}
          >
            Team Galleries
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.75,
              opacity: 0.72,
            }}
          >
            Explore team photos, competitions, practices, events, banquets,
            and special moments from across the organization.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
          }}
        >
          <Link
            href="/gallery/org"
            style={{
              minHeight: 170,
              padding: 21,
              borderRadius: 21,
              textDecoration: "none",
              color: "white",
              background:
                "linear-gradient(135deg, #111827, #7f1d1d, #dc2626)",
              border: "1px solid rgba(220,38,38,0.28)",
              boxShadow: "0 13px 32px rgba(0,0,0,0.12)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "grid",
                placeItems: "center",
                width: 55,
                height: 55,
                borderRadius: 17,
                background: "rgba(255,255,255,0.1)",
                fontSize: 27,
              }}
            >
              📸
            </div>

            <div>
              <div
                style={{
                  fontSize: 19,
                  fontWeight: 900,
                }}
              >
                Organization Gallery
              </div>

              <div
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  opacity: 0.75,
                }}
              >
                Events • Banquets • Community
              </div>
            </div>
          </Link>

          {teams.map((team) => (
            <Link
              key={`gallery-${team.id}`}
              href={`/gallery/${team.id}`}
              className="card"
              style={{
                minHeight: 170,
                padding: 21,
                borderRadius: 21,
                textDecoration: "none",
                color: "inherit",
                border: "1px solid rgba(220,38,38,0.13)",
                boxShadow: "0 13px 32px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Image
                src={team.logo}
                alt={`${team.name} logo`}
                width={64}
                height={64}
                style={{
                  width: 64,
                  height: 64,
                  objectFit: "contain",
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />

              <div>
                <div
                  style={{
                    fontSize: 19,
                    fontWeight: 900,
                  }}
                >
                  {team.name}
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 4,
                    fontSize: 13,
                    opacity: 0.68,
                  }}
                >
                  Open team gallery
                  <span aria-hidden="true">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 38,
          padding: "clamp(32px, 6vw, 58px)",
          borderRadius: 30,
          color: "white",
          background:
            "linear-gradient(135deg, #020617, #111827 42%, #7f1d1d 76%, #dc2626)",
          boxShadow: "0 25px 65px rgba(0,0,0,0.23)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 290,
            height: 290,
            top: -170,
            right: -90,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              marginBottom: 14,
              borderRadius: 999,
              background: "rgba(255,255,255,0.09)",
              border: "1px solid rgba(255,255,255,0.13)",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Our Purpose
          </div>

          <h2
            style={{
              margin: "0 0 15px",
              fontSize: "clamp(32px, 6vw, 52px)",
            }}
          >
            Our Mission
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "clamp(17px, 2vw, 20px)",
              lineHeight: 1.8,
              opacity: 0.86,
            }}
          >
            Stateline Renegades exists to provide youth athletes with a
            positive environment where they can grow through sports, build
            confidence, develop leadership skills, and create lifelong
            friendships.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginTop: 25,
            }}
          >
            <Link
              href="/riot-karma"
              className="btn btnPrimary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 215,
                minHeight: 54,
                padding: "14px 21px",
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              Join a Cheer Team
            </Link>

            <Link
              href="/sponsors"
              className="btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 215,
                minHeight: 54,
                padding: "14px 21px",
                color: "white",
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.19)",
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="card"
        style={{
          marginTop: 26,
          marginBottom: 20,
          padding: "clamp(24px, 5vw, 38px)",
          borderRadius: 27,
          border: "1px solid rgba(220,38,38,0.13)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
            gap: 28,
          }}
        >
          <div>
            <h3
              style={{
                margin: "0 0 9px",
                fontSize: 24,
              }}
            >
              Stateline Renegades
            </h3>

            <p
              style={{
                maxWidth: 430,
                margin: 0,
                fontSize: 14,
                lineHeight: 1.75,
                opacity: 0.72,
              }}
            >
              Cheer • Baseball • Community • Family
            </p>
          </div>

          <div>
            <div
              style={{
                marginBottom: 10,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.62,
              }}
            >
              Programs
            </div>

            <div
              style={{
                display: "grid",
                gap: 8,
                fontSize: 14,
              }}
            >
              <Link
                href="/riot-karma"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Riot & Karma Cheer
              </Link>

              <Link
                href="/anarchy"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Anarchy Cheer
              </Link>

              <Link
                href="/mayhem"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Mayhem Cheer
              </Link>

              <Link
                href="/tball"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Renegades T-Ball
              </Link>
            </div>
          </div>

          <div>
            <div
              style={{
                marginBottom: 10,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.62,
              }}
            >
              Get Involved
            </div>

            <div
              style={{
                display: "grid",
                gap: 8,
                fontSize: 14,
              }}
            >
              <Link
                href="/sponsors"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Become a Sponsor
              </Link>

              <Link
                href="/gallery/org"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Organization Gallery
              </Link>

              <Link
                href="/riot-karma"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Registration Information
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            height: 1,
            margin: "27px 0 19px",
            background: "rgba(255,255,255,0.1)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            fontSize: 13,
            opacity: 0.66,
          }}
        >
          <span>© 2026 Stateline Renegades. All rights reserved.</span>

          <span>
            T-Ball • Anarchy • Mayhem • Riot • Karma
          </span>
        </div>
      </footer>
    </main>
  );
}