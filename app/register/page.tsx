import Link from "next/link";
import { teams } from "../lib/data";

type RegistrationProgram = {
  id: string;
  name: string;
  label: string;
  ages: string;
  teamType: string;
  description: string;
  colors: string;
  icon: string;
  registration?: string;
  pageHref: string;
};

export default function RegisterPage() {
  const riot = teams.find((team) => team.id === "riot");
  const karma = teams.find((team) => team.id === "karma");
  const anarchy = teams.find((team) => team.id === "anarchy");
  const mayhem = teams.find((team) => team.id === "mayhem");
  const tball = teams.find((team) => team.id === "tball");

  const programs: RegistrationProgram[] = [
    {
      id: "riot",
      name: "Riot",
      label: "Riot Cheer",
      ages: "Ages 6–14",
      teamType: "Local Travel Team",
      description:
        "Competitive cheer training focused on skill development, teamwork, confidence, and performance.",
      colors:
        "linear-gradient(135deg, rgba(0,77,64,0.98), rgba(22,163,74,0.88), rgba(249,168,212,0.72))",
      icon: "💚",
      registration: riot?.registration,
      pageHref: "/riot-karma",
    },
    {
      id: "karma",
      name: "Karma",
      label: "Karma Cheer",
      ages: "Ages 3–5",
      teamType: "Beginner Development Team",
      description:
        "A supportive introduction to cheer that builds confidence, coordination, teamwork, and performance skills.",
      colors:
        "linear-gradient(135deg, rgba(13,148,136,0.96), rgba(236,72,153,0.9), rgba(249,168,212,0.76))",
      icon: "🩷",
      registration: karma?.registration,
      pageHref: "/riot-karma",
    },
    {
      id: "anarchy",
      name: "Anarchy",
      label: "Anarchy Cheer",
      ages: "Full Travel Team",
      teamType: "Competitive Cheer",
      description:
        "Advanced competitive cheer training for athletes ready to represent Renegades at full-travel events.",
      colors:
        "linear-gradient(135deg, rgba(85,0,0,0.98), rgba(185,28,28,0.92), rgba(239,68,68,0.7))",
      icon: "❤️",
      registration: anarchy?.registration,
      pageHref: "/anarchy",
    },
    {
      id: "mayhem",
      name: "Mayhem",
      label: "Mayhem Cheer",
      ages: "Full Travel Team",
      teamType: "Competitive Cheer",
      description:
        "High-energy competitive cheer focused on strong technique, teamwork, performance, and travel competition.",
      colors:
        "linear-gradient(135deg, rgba(49,18,86,0.98), rgba(109,40,217,0.92), rgba(192,132,252,0.72))",
      icon: "💜",
      registration: mayhem?.registration,
      pageHref: "/mayhem",
    },
    {
      id: "tball",
      name: "T-Ball",
      label: "Renegades T-Ball",
      ages: "Youth Baseball",
      teamType: "Baseball Program",
      description:
        "A positive youth baseball program that teaches fundamentals, teamwork, confidence, and sportsmanship.",
      colors:
        "linear-gradient(135deg, rgba(12,12,15,0.98), rgba(127,29,29,0.94), rgba(239,68,68,0.72))",
      icon: "⚾",
      registration: tball?.registration,
      pageHref: "/tball",
    },
  ];

  const activePrograms = programs.filter((program) => program.registration);

  return (
    <main className="wrap section">
      {/* PAGE HERO */}
      <section
        className="card panelGlow"
        style={{
          padding: "clamp(28px, 6vw, 64px)",
          textAlign: "center",
          borderRadius: 28,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 13px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "rgba(0,0,0,0.22)",
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Registration Hub
        </div>

        <h1
          style={{
            margin: 0,
            fontSize: "clamp(38px, 8vw, 72px)",
            lineHeight: 1,
            letterSpacing: "-0.045em",
          }}
        >
          Join the Stateline Renegades
        </h1>

        <p
          style={{
            maxWidth: 760,
            margin: "18px auto 0",
            color: "rgba(247,248,255,0.76)",
            fontSize: "clamp(16px, 2.4vw, 19px)",
            lineHeight: 1.75,
          }}
        >
          Choose the program that best fits your athlete. Each registration
          button will take you directly to that team&apos;s official
          registration form.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            flexWrap: "wrap",
            marginTop: 24,
          }}
        >
          <span className="pill">Cheer</span>
          <span className="pill">Baseball</span>
          <span className="pill">Community</span>
          <span className="pill">Family</span>
        </div>
      </section>

      {/* PROGRAM CARDS */}
      <section style={{ marginTop: 30 }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 22px",
          }}
        >
          <div className="kicker">Choose a program</div>

          <h2
            style={{
              margin: "8px 0",
              fontSize: "clamp(28px, 5vw, 42px)",
            }}
          >
            Find Your Team
          </h2>

          <p
            style={{
              margin: 0,
              color: "rgba(247,248,255,0.7)",
              lineHeight: 1.7,
            }}
          >
            Registration availability may vary by team, age, roster size, and
            season.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
            gap: 20,
          }}
        >
          {programs.map((program) => (
            <article
              key={program.id}
              className="card"
              style={{
                display: "flex",
                minHeight: 430,
                flexDirection: "column",
                borderRadius: 24,
              }}
            >
              <div
                style={{
                  minHeight: 170,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: program.colors,
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 17,
                    background: "rgba(255,255,255,0.16)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    fontSize: 30,
                  }}
                >
                  {program.icon}
                </div>

                <div style={{ marginTop: 22 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 900,
                      letterSpacing: "0.11em",
                      textTransform: "uppercase",
                      opacity: 0.86,
                    }}
                  >
                    {program.teamType}
                  </div>

                  <h2
                    style={{
                      margin: "7px 0 0",
                      fontSize: 32,
                    }}
                  >
                    {program.label}
                  </h2>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "column",
                  padding: 24,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    width: "fit-content",
                    padding: "7px 11px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: 13,
                    fontWeight: 850,
                  }}
                >
                  {program.ages}
                </div>

                <p
                  style={{
                    margin: "17px 0 0",
                    lineHeight: 1.75,
                    color: "rgba(247,248,255,0.74)",
                  }}
                >
                  {program.description}
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: 10,
                    marginTop: "auto",
                    paddingTop: 24,
                  }}
                >
                  {program.registration ? (
                    <a
                      className="btn btnPrimary"
                      href={program.registration}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: "100%",
                        minHeight: 50,
                      }}
                    >
                      Register for {program.name}
                    </a>
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        minHeight: 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "11px 16px",
                        borderRadius: 14,
                        border: "1px solid rgba(255,255,255,0.12)",
                        background: "rgba(0,0,0,0.2)",
                        color: "rgba(247,248,255,0.68)",
                        fontWeight: 800,
                        textAlign: "center",
                      }}
                    >
                      Registration Not Currently Listed
                    </div>
                  )}

                  <Link
                    className="btn ghost"
                    href={program.pageHref}
                    style={{
                      width: "100%",
                      minHeight: 48,
                    }}
                  >
                    View Team Information
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* OPEN REGISTRATION SUMMARY */}
      <section
        className="card"
        style={{
          padding: "clamp(24px, 5vw, 40px)",
          marginTop: 30,
          textAlign: "center",
          borderRadius: 24,
        }}
      >
        <div className="kicker">Current options</div>

        <h2
          style={{
            margin: "8px 0 10px",
            fontSize: "clamp(27px, 5vw, 40px)",
          }}
        >
          Programs With Registration Links
        </h2>

        {activePrograms.length > 0 ? (
          <>
            <p
              style={{
                maxWidth: 700,
                margin: "0 auto",
                color: "rgba(247,248,255,0.72)",
                lineHeight: 1.7,
              }}
            >
              Registration links are currently available for the programs
              listed below.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                flexWrap: "wrap",
                marginTop: 20,
              }}
            >
              {activePrograms.map((program) => (
                <a
                  key={program.id}
                  href={program.registration}
                  target="_blank"
                  rel="noreferrer"
                  className="pill"
                  style={{
                    minHeight: 42,
                    padding: "10px 14px",
                    fontWeight: 900,
                  }}
                >
                  {program.icon} {program.name}
                </a>
              ))}
            </div>
          </>
        ) : (
          <p
            style={{
              margin: "0 auto",
              color: "rgba(247,248,255,0.72)",
            }}
          >
            Registration links have not yet been added to the team data.
          </p>
        )}
      </section>

      {/* WHY FAMILIES CHOOSE US */}
      <section style={{ marginTop: 30 }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 20px",
          }}
        >
          <div className="kicker">The Renegades experience</div>

          <h2
            style={{
              margin: "8px 0",
              fontSize: "clamp(28px, 5vw, 40px)",
            }}
          >
            Why Families Choose Renegades
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
            gap: 14,
          }}
        >
          {[
            {
              icon: "⭐",
              title: "Athlete Development",
              text: "Programs designed to help athletes build skills, confidence, and discipline.",
            },
            {
              icon: "🤝",
              title: "Teamwork",
              text: "Athletes learn to support one another and work toward shared goals.",
            },
            {
              icon: "🏆",
              title: "Competitive Opportunities",
              text: "Cheer and baseball opportunities that allow athletes to grow through competition.",
            },
            {
              icon: "💵",
              title: "Family Support",
              text: "Fundraising opportunities and payment arrangements may be available.",
            },
            {
              icon: "❤️",
              title: "Community and Family",
              text: "A welcoming organization focused on athletes, families, and community.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="card"
              style={{
                padding: 20,
                minHeight: 190,
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ fontSize: 30 }}>{item.icon}</div>

              <h3 style={{ margin: "12px 0 7px" }}>{item.title}</h3>

              <p
                style={{
                  margin: 0,
                  color: "rgba(247,248,255,0.7)",
                  fontSize: 14,
                  lineHeight: 1.65,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          marginTop: 30,
          padding: "clamp(28px, 6vw, 50px)",
          borderRadius: 26,
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(255,79,210,0.2), rgba(57,213,255,0.16), rgba(124,58,237,0.18))",
          border: "1px solid rgba(255,255,255,0.13)",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(28px, 5vw, 42px)",
          }}
        >
          Ready to Become a Renegade?
        </h2>

        <p
          style={{
            maxWidth: 700,
            margin: "12px auto 0",
            color: "rgba(247,248,255,0.74)",
            lineHeight: 1.75,
          }}
        >
          Select your athlete&apos;s program above to begin registration or
          visit the team page for additional information.
        </p>

        <Link
          href="/"
          className="btn ghost"
          style={{
            marginTop: 20,
            minWidth: 190,
          }}
        >
          Return to Homepage
        </Link>
      </section>
    </main>
  );
}