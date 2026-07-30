import Link from "next/link";
import { teams } from "../lib/data";
import { phoneHref } from "../lib/utils";
import TeamHero from "../components/TeamHero";

export default function RiotKarmaPage() {
  const riot = teams.find((team) => team.id === "riot");
  const karma = teams.find((team) => team.id === "karma");

  const contacts = Array.from(
    new Map(
      [...(riot?.contacts || []), ...(karma?.contacts || [])].map(
        (contact) => [contact.phone, contact]
      )
    ).values()
  );

  const highlights = [
    {
      icon: "💚",
      value: "3",
      label: "Riot Spots Left",
    },
    {
      icon: "🩷",
      value: "4",
      label: "Karma Spots Left",
    },
    {
      icon: "🏆",
      value: "Local",
      label: "Travel Competitions",
    },
    {
      icon: "📣",
      value: "Tue–Thu",
      label: "Weekly Practices",
    },
  ];

  const riotSkills = [
    {
      icon: "🏆",
      title: "Competition Training",
      description:
        "Athletes learn performance skills and competition-style routines.",
    },
    {
      icon: "🤸",
      title: "Skill Development",
      description:
        "Focused instruction in motions, jumps, dance, and cheer fundamentals.",
    },
    {
      icon: "⭐",
      title: "Confidence",
      description:
        "Athletes build confidence through preparation and performance.",
    },
    {
      icon: "🤝",
      title: "Teamwork",
      description:
        "Practices encourage communication, responsibility, and team unity.",
    },
  ];

  const karmaSkills = [
    {
      icon: "🎀",
      title: "Beginner Cheer",
      description:
        "A positive introduction to beginner motions, jumps, and dance.",
    },
    {
      icon: "🎵",
      title: "Performance Basics",
      description:
        "Athletes learn counts, timing, formations, and performance skills.",
    },
    {
      icon: "🌟",
      title: "Confidence",
      description:
        "Encouraging instruction helps young athletes feel proud and capable.",
    },
    {
      icon: "💕",
      title: "Friendships",
      description:
        "Athletes learn cooperation and create friendships in a team setting.",
    },
  ];

  const seasonItems = [
    {
      icon: "👕",
      title: "Competition Uniform",
      description: "Official team uniform worn at competitions.",
    },
    {
      icon: "🎽",
      title: "Two Practice Sets",
      description: "Coordinated practice clothing for weekly training.",
    },
    {
      icon: "🎒",
      title: "Team Backpack",
      description: "Official backpack for practices and competitions.",
    },
    {
      icon: "🏟️",
      title: "Team Jersey",
      description: "Renegades jersey for games and team appearances.",
    },
    {
      icon: "🎀",
      title: "Team Bows",
      description: "Coordinating bows for performances and competitions.",
    },
    {
      icon: "📣",
      title: "Game/Fundraiser Uniform",
      description: "Uniform for games, appearances, and fundraising events.",
    },
  ];

  const faqs = [
    {
      question: "Does my child need previous cheer experience?",
      answer:
        "No previous experience is required. Athletes are taught skills based on their age, ability, and team placement.",
    },
    {
      question: "What should athletes wear to practice?",
      answer:
        "Athletes should wear fitted athletic clothing, cheer shoes or clean athletic shoes, and have their hair secured away from their face.",
    },
    {
      question: "Are competition fees included in registration?",
      answer:
        "No. Competition entry fees are separate from registration and are divided among the participating athletes on the team.",
    },
    {
      question: "Are payment options available?",
      answer:
        "Payment arrangements and fundraising opportunities may be available. Contact a coach to discuss your family’s needs.",
    },
    {
      question: "Can an athlete join after the season begins?",
      answer:
        "Late registration may be available when the team has open positions. Contact a coach to confirm availability.",
    },
  ];

  return (
    <main className="wrap section">
      <TeamHero
        title="Riot / Karma Cheer"
        subtitle="Our Local Travel Teams focused on athlete development, confidence, teamwork, and preparing athletes for advanced competition opportunities."
        colors="linear-gradient(135deg, #004d40, #0f766e, #f9a8d4)"
        logo="/logos/riot-karma.png"
      />

      {/* TEAM TYPE */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background:
              "linear-gradient(135deg, rgba(15,118,110,0.95), rgba(20,184,166,0.88))",
            color: "white",
            padding: "11px 19px",
            borderRadius: 999,
            fontWeight: 900,
            letterSpacing: "0.08em",
            fontSize: 13,
            boxShadow: "0 12px 28px rgba(15,118,110,0.2)",
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#f9a8d4",
              boxShadow: "0 0 12px rgba(249,168,212,0.9)",
            }}
          />
          LOCAL TRAVEL TEAMS
        </div>
      </div>

      {/* REGISTRATION HERO */}
      <section
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          marginBottom: 24,
          padding: "clamp(24px, 5vw, 44px)",
          borderRadius: 28,
          border: "1px solid rgba(255,255,255,0.14)",
          background:
            "linear-gradient(135deg, rgba(0,77,64,0.48), rgba(15,118,110,0.3), rgba(236,72,153,0.27))",
          boxShadow: "0 24px 65px rgba(0,0,0,0.18)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            right: -100,
            top: -160,
            background: "rgba(249,168,212,0.2)",
            filter: "blur(8px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            left: -100,
            bottom: -130,
            background: "rgba(20,184,166,0.18)",
            filter: "blur(8px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 290px), 1fr))",
            gap: 30,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "7px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.16)",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 14px rgba(74,222,128,0.9)",
                }}
              />
              Registration Open
            </div>

            <h2
              style={{
                margin: 0,
                maxWidth: 650,
                fontSize: "clamp(30px, 5vw, 48px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Find the right cheer team for your athlete
            </h2>

            <p
              style={{
                margin: "16px 0 0",
                maxWidth: 680,
                lineHeight: 1.75,
                opacity: 0.84,
                fontSize: 17,
              }}
            >
              Riot and Karma provide age-appropriate instruction, structured
              practices, team experiences, performances, and local travel
              competition opportunities.
            </p>

            <p
              style={{
                margin: "12px 0 0",
                maxWidth: 680,
                lineHeight: 1.7,
                opacity: 0.78,
                fontSize: 15,
              }}
            >
              Payment arrangements and fundraising opportunities may be
              available for families who need additional support.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: 14,
              padding: 18,
              borderRadius: 22,
              background: "rgba(0,0,0,0.13)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontWeight: 900,
                fontSize: 14,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                opacity: 0.82,
              }}
            >
              Choose Your Team
            </div>

            {riot?.registration && (
              <a
                href={riot.registration}
                target="_blank"
                rel="noreferrer"
                className="btn btnPrimary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  minHeight: 58,
                  padding: "14px 18px",
                  textAlign: "left",
                }}
              >
                <span>
                  <span style={{ display: "block", fontWeight: 900 }}>
                    Register for Riot
                  </span>

                  <span
                    style={{
                      display: "block",
                      marginTop: 2,
                      fontSize: 12,
                      opacity: 0.84,
                    }}
                  >
                    Ages 6–14
                  </span>
                </span>

                <span
                  style={{
                    padding: "6px 9px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.16)",
                    fontSize: 12,
                    whiteSpace: "nowrap",
                  }}
                >
                  3 Spots
                </span>
              </a>
            )}

            {karma?.registration && (
              <a
                href={karma.registration}
                target="_blank"
                rel="noreferrer"
                className="btn btnPrimary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  minHeight: 58,
                  padding: "14px 18px",
                  textAlign: "left",
                }}
              >
                <span>
                  <span style={{ display: "block", fontWeight: 900 }}>
                    Register for Karma
                  </span>

                  <span
                    style={{
                      display: "block",
                      marginTop: 2,
                      fontSize: 12,
                      opacity: 0.84,
                    }}
                  >
                    Ages 3–5
                  </span>
                </span>

                <span
                  style={{
                    padding: "6px 9px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.16)",
                    fontSize: 12,
                    whiteSpace: "nowrap",
                  }}
                >
                  4 Spots
                </span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
          gap: 14,
          marginBottom: 28,
        }}
      >
        {highlights.map((item) => (
          <div
            key={item.label}
            className="card"
            style={{
              padding: "20px 16px",
              borderRadius: 20,
              textAlign: "center",
              border: "1px solid rgba(15,118,110,0.14)",
              background:
                "linear-gradient(145deg, rgba(15,118,110,0.08), rgba(236,72,153,0.06))",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>

            <div
              style={{
                fontSize: 25,
                fontWeight: 950,
                lineHeight: 1,
              }}
            >
              {item.value}
            </div>

            <div
              style={{
                marginTop: 8,
                fontSize: 13,
                fontWeight: 800,
                opacity: 0.7,
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </section>

      {/* TEAM CARDS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 390px), 1fr))",
          gap: 26,
          alignItems: "stretch",
        }}
      >
        {/* RIOT */}
        <article
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: 28,
            border: "1px solid rgba(22,163,74,0.3)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.16)",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src="/images/riot-team.png"
              alt="Stateline Renegades Riot Cheer Team"
              style={{
                width: "100%",
                height: 320,
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,45,38,0.82), transparent 65%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.58)",
                border: "1px solid rgba(249,168,212,0.7)",
                color: "white",
                fontWeight: 900,
                fontSize: 13,
                backdropFilter: "blur(8px)",
              }}
            >
              3 Spots Left
            </div>

            <div
              style={{
                position: "absolute",
                left: 22,
                right: 22,
                bottom: 20,
                color: "white",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  opacity: 0.84,
                }}
              >
                Local Travel Team
              </div>

              <h2
                style={{
                  margin: "7px 0 4px",
                  fontSize: "clamp(30px, 5vw, 43px)",
                  lineHeight: 1,
                }}
              >
                💚 Riot
              </h2>

              <p style={{ margin: 0, opacity: 0.88 }}>
                Competitive training, teamwork, confidence, and performance.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "clamp(20px, 4vw, 28px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 12,
              }}
            >
              <div
                style={{
                  padding: 16,
                  borderRadius: 18,
                  background: "rgba(22,163,74,0.1)",
                  border: "1px solid rgba(22,163,74,0.14)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    opacity: 0.65,
                  }}
                >
                  Ages
                </div>

                <div
                  style={{
                    marginTop: 5,
                    fontSize: 22,
                    fontWeight: 950,
                  }}
                >
                  6–14
                </div>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 18,
                  background: "rgba(22,163,74,0.1)",
                  border: "1px solid rgba(22,163,74,0.14)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    opacity: 0.65,
                  }}
                >
                  Practice
                </div>

                <div
                  style={{
                    marginTop: 5,
                    fontSize: 17,
                    fontWeight: 950,
                    lineHeight: 1.35,
                  }}
                >
                  Tue–Thu
                  <br />
                  6–8 PM
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <div
                style={{
                  marginBottom: 13,
                  fontSize: 13,
                  fontWeight: 950,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#16a34a",
                }}
              >
                What Athletes Learn
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
                  gap: 12,
                }}
              >
                {riotSkills.map((skill) => (
                  <div
                    key={skill.title}
                    style={{
                      padding: 16,
                      borderRadius: 17,
                      background: "rgba(22,163,74,0.06)",
                      border: "1px solid rgba(22,163,74,0.12)",
                    }}
                  >
                    <div style={{ fontSize: 24 }}>{skill.icon}</div>

                    <h3
                      style={{
                        margin: "9px 0 5px",
                        fontSize: 15,
                      }}
                    >
                      {skill.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        lineHeight: 1.55,
                        fontSize: 13,
                        opacity: 0.72,
                      }}
                    >
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                padding: 20,
                borderRadius: 20,
                background:
                  "linear-gradient(135deg, rgba(0,77,64,0.16), rgba(22,163,74,0.09))",
                border: "1px solid rgba(22,163,74,0.18)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 950,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  opacity: 0.68,
                }}
              >
                Registration
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 12,
                  marginTop: 14,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      opacity: 0.65,
                    }}
                  >
                    New Members
                  </div>

                  <div
                    style={{
                      marginTop: 3,
                      fontSize: 32,
                      fontWeight: 950,
                      lineHeight: 1,
                    }}
                  >
                    $400
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      opacity: 0.65,
                    }}
                  >
                    Returning
                  </div>

                  <div
                    style={{
                      marginTop: 3,
                      fontSize: 32,
                      fontWeight: 950,
                      lineHeight: 1,
                    }}
                  >
                    $85
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 16,
                padding: 18,
                borderRadius: 18,
                background: "rgba(22,163,74,0.05)",
                border: "1px solid rgba(22,163,74,0.12)",
              }}
            >
              <h3 style={{ margin: "0 0 9px", fontSize: 16 }}>
                Registration Includes
              </h3>

              <p
                style={{
                  margin: 0,
                  lineHeight: 1.75,
                  fontSize: 14,
                  opacity: 0.78,
                }}
              >
                Team enrollment, two practice sets, competition uniform,
                backpack, jersey, bows, and a game/fundraiser uniform.
              </p>
            </div>

            {riot?.registration && (
              <a
                className="btn btnPrimary"
                href={riot.registration}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minHeight: 56,
                  marginTop: "auto",
                  padding: "15px 18px",
                  textAlign: "center",
                  fontWeight: 950,
                }}
              >
                Register for Riot
              </a>
            )}
          </div>
        </article>

        {/* KARMA */}
        <article
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: 28,
            border: "1px solid rgba(236,72,153,0.3)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.16)",
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src="/images/karma-team.png"
              alt="Karma cheer athletes practicing together"
              style={{
                width: "100%",
                height: 320,
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(101,22,68,0.82), transparent 65%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "absolute",
                top: 18,
                right: 18,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(0,0,0,0.58)",
                border: "1px solid rgba(249,168,212,0.8)",
                color: "white",
                fontWeight: 900,
                fontSize: 13,
                backdropFilter: "blur(8px)",
              }}
            >
              4 Spots Left
            </div>

            <div
              style={{
                position: "absolute",
                left: 22,
                right: 22,
                bottom: 20,
                color: "white",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  opacity: 0.84,
                }}
              >
                Beginner Development Team
              </div>

              <h2
                style={{
                  margin: "7px 0 4px",
                  fontSize: "clamp(30px, 5vw, 43px)",
                  lineHeight: 1,
                }}
              >
                🩷 Karma
              </h2>

              <p style={{ margin: 0, opacity: 0.88 }}>
                A fun and supportive introduction to competitive cheer.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              padding: "clamp(20px, 4vw, 28px)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: 12,
              }}
            >
              <div
                style={{
                  padding: 16,
                  borderRadius: 18,
                  background: "rgba(236,72,153,0.08)",
                  border: "1px solid rgba(236,72,153,0.14)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    opacity: 0.65,
                  }}
                >
                  Ages
                </div>

                <div
                  style={{
                    marginTop: 5,
                    fontSize: 22,
                    fontWeight: 950,
                  }}
                >
                  3–5
                </div>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 18,
                  background: "rgba(236,72,153,0.08)",
                  border: "1px solid rgba(236,72,153,0.14)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    opacity: 0.65,
                  }}
                >
                  Practice
                </div>

                <div
                  style={{
                    marginTop: 5,
                    fontSize: 17,
                    fontWeight: 950,
                    lineHeight: 1.35,
                  }}
                >
                  Tue–Thu
                  <br />
                  6–8 PM
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <div
                style={{
                  marginBottom: 13,
                  fontSize: 13,
                  fontWeight: 950,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ec4899",
                }}
              >
                What Athletes Learn
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
                  gap: 12,
                }}
              >
                {karmaSkills.map((skill) => (
                  <div
                    key={skill.title}
                    style={{
                      padding: 16,
                      borderRadius: 17,
                      background: "rgba(236,72,153,0.05)",
                      border: "1px solid rgba(236,72,153,0.12)",
                    }}
                  >
                    <div style={{ fontSize: 24 }}>{skill.icon}</div>

                    <h3
                      style={{
                        margin: "9px 0 5px",
                        fontSize: 15,
                      }}
                    >
                      {skill.title}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        lineHeight: 1.55,
                        fontSize: 13,
                        opacity: 0.72,
                      }}
                    >
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                padding: 20,
                borderRadius: 20,
                background:
                  "linear-gradient(135deg, rgba(236,72,153,0.13), rgba(20,184,166,0.08))",
                border: "1px solid rgba(236,72,153,0.18)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 950,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  opacity: 0.68,
                }}
              >
                Registration
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 12,
                  marginTop: 14,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      opacity: 0.65,
                    }}
                  >
                    New Members
                  </div>

                  <div
                    style={{
                      marginTop: 3,
                      fontSize: 32,
                      fontWeight: 950,
                      lineHeight: 1,
                    }}
                  >
                    $250
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 800,
                      opacity: 0.65,
                    }}
                  >
                    Returning
                  </div>

                  <div
                    style={{
                      marginTop: 3,
                      fontSize: 32,
                      fontWeight: 950,
                      lineHeight: 1,
                    }}
                  >
                    $85
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 16,
                padding: 18,
                borderRadius: 18,
                background: "rgba(236,72,153,0.04)",
                border: "1px solid rgba(236,72,153,0.12)",
              }}
            >
              <h3 style={{ margin: "0 0 9px", fontSize: 16 }}>
                Registration Includes
              </h3>

              <p
                style={{
                  margin: 0,
                  lineHeight: 1.75,
                  fontSize: 14,
                  opacity: 0.78,
                }}
              >
                Team enrollment, two practice sets, competition uniform,
                backpack, jersey, bows, and a game/fundraiser uniform.
              </p>
            </div>

            {karma?.registration && (
              <a
                className="btn btnPrimary"
                href={karma.registration}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minHeight: 56,
                  marginTop: "auto",
                  padding: "15px 18px",
                  textAlign: "center",
                  fontWeight: 950,
                }}
              >
                Register for Karma
              </a>
            )}
          </div>
        </article>
      </section>

      {/* SEASON INCLUDES */}
      <section
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 30,
          padding: "clamp(24px, 5vw, 38px)",
          borderRadius: 28,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,118,110,0.08), rgba(236,72,153,0.08))",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto 28px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "7px 13px",
                borderRadius: 999,
                background: "rgba(15,118,110,0.12)",
                color: "#0f766e",
                fontSize: 12,
                fontWeight: 950,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Registration Value
            </div>

            <h2
              style={{
                margin: "0 0 11px",
                fontSize: "clamp(28px, 4vw, 42px)",
              }}
            >
              What Your Season Includes
            </h2>

            <p
              style={{
                margin: 0,
                lineHeight: 1.75,
                fontSize: 17,
                opacity: 0.77,
              }}
            >
              Registration provides athletes with the essential apparel and
              equipment needed for practices, competitions, team appearances,
              and fundraising events.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 210px), 1fr))",
              gap: 16,
            }}
          >
            {seasonItems.map((item) => (
              <div
                key={item.title}
                style={{
                  minHeight: 195,
                  padding: 22,
                  borderRadius: 21,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    display: "grid",
                    placeItems: "center",
                    marginBottom: 15,
                    borderRadius: 19,
                    fontSize: 31,
                    background:
                      "linear-gradient(135deg, rgba(15,118,110,0.2), rgba(236,72,153,0.2))",
                    border: "1px solid rgba(236,72,153,0.2)",
                  }}
                >
                  {item.icon}
                </div>

                <h3 style={{ margin: "0 0 8px", fontSize: 18 }}>
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    lineHeight: 1.6,
                    opacity: 0.7,
                    fontSize: 14,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              maxWidth: 780,
              margin: "24px auto 0",
              textAlign: "center",
              lineHeight: 1.7,
              fontSize: 14,
              opacity: 0.67,
            }}
          >
            Competition entry fees, travel expenses, and other seasonal costs
            are separate unless specifically stated otherwise.
          </p>
        </div>
      </section>

      {/* NEXT STEPS AND COMPETITION FEES */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: 22,
          marginTop: 24,
        }}
      >
        <div
          className="card"
          style={{
            padding: 26,
            borderRadius: 24,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 950,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#0f766e",
            }}
          >
            Next Steps
          </div>

          <h2 style={{ margin: "8px 0 18px" }}>After You Register</h2>

          <div style={{ display: "grid", gap: 14 }}>
            {[
              "Complete the online registration form.",
              "A coach will contact you with the next steps.",
              "Receive practice, payment, and team information.",
              "Attend your athlete’s first scheduled practice.",
            ].map((step, index) => (
              <div
                key={step}
                style={{
                  display: "grid",
                  gridTemplateColumns: "42px 1fr",
                  gap: 13,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: 14,
                    background:
                      "linear-gradient(135deg, rgba(15,118,110,0.2), rgba(236,72,153,0.16))",
                    fontWeight: 950,
                  }}
                >
                  {index + 1}
                </div>

                <div
                  style={{
                    lineHeight: 1.55,
                    fontWeight: 750,
                  }}
                >
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="card"
          style={{
            padding: 26,
            borderRadius: 24,
            background:
              "linear-gradient(145deg, rgba(15,118,110,0.12), rgba(236,72,153,0.08))",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 950,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#ec4899",
            }}
          >
            Additional Season Cost
          </div>

          <h2 style={{ margin: "8px 0 16px" }}>🏆 Competition Fees</h2>

          <div
            style={{
              padding: 20,
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                opacity: 0.68,
              }}
            >
              Estimated Event Entry
            </div>

            <div
              style={{
                marginTop: 5,
                fontSize: "clamp(34px, 6vw, 50px)",
                fontWeight: 950,
                lineHeight: 1,
              }}
            >
              $350
            </div>

            <div style={{ marginTop: 7, fontWeight: 800 }}>
              per competition
            </div>
          </div>

          <p
            style={{
              margin: "17px 0 0",
              fontSize: 15,
              lineHeight: 1.75,
              opacity: 0.78,
            }}
          >
            The fee is divided among the athletes on the team, so each
            family&apos;s portion depends on the number of participating
            athletes.
          </p>

          <p
            style={{
              margin: "11px 0 0",
              fontSize: 13,
              lineHeight: 1.65,
              opacity: 0.64,
            }}
          >
            Competition costs are estimates and may change based on the event,
            team size, travel requirements, and vendor pricing.
          </p>
        </div>
      </section>

      {/* FAMILY SUPPORT */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 24,
          padding: "clamp(26px, 5vw, 42px)",
          borderRadius: 26,
          background:
            "linear-gradient(135deg, rgba(15,118,110,0.2), rgba(236,72,153,0.18))",
          textAlign: "center",
          border: "1px solid rgba(15,118,110,0.16)",
        }}
      >
        <div
          style={{
            fontSize: 34,
            marginBottom: 8,
          }}
        >
          💚
        </div>

        <h2
          style={{
            margin: "0 0 10px",
            fontSize: "clamp(26px, 4vw, 38px)",
          }}
        >
          Every Athlete Deserves an Opportunity
        </h2>

        <p
          style={{
            maxWidth: 760,
            margin: "0 auto",
            lineHeight: 1.8,
            fontSize: 17,
            fontWeight: 700,
            opacity: 0.8,
          }}
        >
          Fundraising opportunities and payment options may be available to
          help families throughout the season.
        </p>
      </section>

      {/* FAQ */}
      <section
        className="card"
        style={{
          padding: "clamp(24px, 5vw, 36px)",
          marginTop: 24,
          borderRadius: 26,
        }}
      >
        <div
          style={{
            maxWidth: 700,
            margin: "0 auto 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 950,
              letterSpacing: "0.12em",
              color: "#0f766e",
              textTransform: "uppercase",
            }}
          >
            Parent Information
          </div>

          <h2
            style={{
              margin: "8px 0 8px",
              fontSize: "clamp(27px, 4vw, 39px)",
            }}
          >
            Frequently Asked Questions
          </h2>

          <p
            style={{
              margin: 0,
              lineHeight: 1.7,
              opacity: 0.7,
            }}
          >
            Helpful information for families considering Riot or Karma.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 12,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {faqs.map((faq) => (
            <details
              key={faq.question}
              style={{
                padding: "18px 20px",
                borderRadius: 18,
                background:
                  "linear-gradient(135deg, rgba(15,118,110,0.06), rgba(236,72,153,0.04))",
                border: "1px solid rgba(15,118,110,0.12)",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontWeight: 900,
                  lineHeight: 1.5,
                }}
              >
                {faq.question}
              </summary>

              <p
                style={{
                  margin: "13px 0 0",
                  lineHeight: 1.75,
                  opacity: 0.78,
                }}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* GALLERY CTA */}
      <section
        style={{
          marginTop: 24,
          padding: "clamp(25px, 5vw, 38px)",
          borderRadius: 26,
          textAlign: "center",
          background:
            "linear-gradient(135deg, rgba(0,77,64,0.34), rgba(236,72,153,0.2))",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div style={{ fontSize: 34 }}>📸</div>

        <h2 style={{ margin: "9px 0 8px" }}>See Riot and Karma in Action</h2>

        <p
          style={{
            maxWidth: 650,
            margin: "0 auto 18px",
            lineHeight: 1.7,
            opacity: 0.76,
          }}
        >
          View team moments, practices, performances, competitions, and
          Renegades memories.
        </p>

        <Link
          href="/gallery/riot-karma"
          className="btn btnPrimary"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 250,
            minHeight: 52,
          }}
        >
          View Riot &amp; Karma Gallery
        </Link>
      </section>

      {/* CONTACTS */}
      <section
        className="card"
        style={{
          padding: "clamp(24px, 5vw, 36px)",
          marginTop: 24,
          borderRadius: 26,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 270px), 1fr))",
            gap: 24,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 950,
                letterSpacing: "0.12em",
                color: "#ec4899",
                textTransform: "uppercase",
              }}
            >
              We Are Here to Help
            </div>

            <h2
              style={{
                margin: "8px 0 10px",
                fontSize: "clamp(26px, 4vw, 38px)",
              }}
            >
              Questions Before Registering?
            </h2>

            <p
              style={{
                margin: 0,
                maxWidth: 600,
                lineHeight: 1.75,
                opacity: 0.76,
              }}
            >
              Contact one of our coaches for help with registration, pricing,
              practices, or fundraising opportunities.
            </p>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {contacts.map((contact) => (
              <a
                key={contact.phone}
                href={phoneHref(contact.phone)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 13,
                  padding: "15px 17px",
                  borderRadius: 17,
                  textDecoration: "none",
                  background:
                    "linear-gradient(135deg, rgba(15,118,110,0.1), rgba(236,72,153,0.06))",
                  border: "1px solid rgba(15,118,110,0.15)",
                }}
              >
                <span
                  style={{
                    width: 42,
                    height: 42,
                    display: "grid",
                    placeItems: "center",
                    flexShrink: 0,
                    borderRadius: 14,
                    background: "rgba(15,118,110,0.14)",
                    fontSize: 19,
                  }}
                >
                  📞
                </span>

                <span>
                  <span
                    style={{
                      display: "block",
                      fontWeight: 900,
                    }}
                  >
                    {contact.name}
                  </span>

                  <span
                    style={{
                      display: "block",
                      marginTop: 2,
                      fontSize: 14,
                      opacity: 0.7,
                    }}
                  >
                    {contact.phone}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}