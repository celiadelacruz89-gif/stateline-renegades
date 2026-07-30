import { teams } from "../lib/data";
import TeamHero from "../components/TeamHero";

export default function AnarchyPage() {
  const team = teams.find((item) => item.id === "anarchy");

  const programFocus = [
    {
      icon: "📣",
      title: "Cheer Skill Progression",
      description:
        "Structured development focused on building strong cheer fundamentals.",
    },
    {
      icon: "⭐",
      title: "Performance & Showmanship",
      description:
        "Athletes develop confidence, energy, expression, and performance quality.",
    },
    {
      icon: "🤝",
      title: "Teamwork & Confidence",
      description:
        "Practices encourage trust, communication, responsibility, and team unity.",
    },
    {
      icon: "⚡",
      title: "Complete Routine Training",
      description:
        "Training includes stunts, jumps, dance, motions, and routine performance.",
    },
    {
      icon: "🏆",
      title: "Travel Competition",
      description:
        "Anarchy represents the Renegades at regional and travel competitions.",
    },
  ];

  return (
    <main className="wrap section">
      <TeamHero
        title="Anarchy Cheer"
        subtitle="Our Full Travel Team competing against top programs throughout the region. Bold energy, strong fundamentals, and high-impact team development."
        colors="linear-gradient(135deg, #111827, #7f1d1d, #dc2626)"
        logo="/logos/anarchy.png"
      />

      {/* TEAM TYPE BADGE */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 22,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "11px 20px",
            borderRadius: 999,
            background:
              "linear-gradient(135deg, rgba(127,29,29,0.98), rgba(220,38,38,0.94))",
            color: "white",
            fontSize: 13,
            fontWeight: 900,
            letterSpacing: "0.1em",
            boxShadow: "0 12px 30px rgba(220,38,38,0.22)",
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "white",
              boxShadow: "0 0 14px rgba(255,255,255,0.9)",
            }}
          />

          FULL TRAVEL TEAM
        </div>
      </div>

      {/* INTRODUCTION */}
      <section
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(24px, 5vw, 44px)",
          borderRadius: 28,
          border: "1px solid rgba(220,38,38,0.2)",
          background:
            "linear-gradient(135deg, rgba(17,24,39,0.96), rgba(127,29,29,0.78), rgba(220,38,38,0.46))",
          color: "white",
          boxShadow: "0 24px 65px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 280,
            height: 280,
            borderRadius: "50%",
            top: -150,
            right: -90,
            background: "rgba(239,68,68,0.25)",
            filter: "blur(10px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 210,
            height: 210,
            borderRadius: "50%",
            bottom: -130,
            left: -90,
            background: "rgba(0,0,0,0.3)",
            filter: "blur(10px)",
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
                marginBottom: 15,
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.14)",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              ⚡ Bold. Focused. Competitive.
            </div>

            <h2
              style={{
                margin: 0,
                maxWidth: 640,
                fontSize: "clamp(31px, 5vw, 49px)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              Built for athletes ready to compete and grow
            </h2>

            <p
              style={{
                maxWidth: 680,
                margin: "16px 0 0",
                fontSize: 17,
                lineHeight: 1.75,
                opacity: 0.85,
              }}
            >
              Anarchy is the Stateline Renegades Full Travel Team. The program
              focuses on strong fundamentals, performance development,
              confidence, teamwork, and competition preparation.
            </p>
          </div>

          <div
            style={{
              padding: 22,
              borderRadius: 22,
              background: "rgba(0,0,0,0.22)",
              border: "1px solid rgba(255,255,255,0.13)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                marginBottom: 14,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.11em",
                textTransform: "uppercase",
                opacity: 0.76,
              }}
            >
              Team Information
            </div>

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
                  borderRadius: 17,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    opacity: 0.68,
                  }}
                >
                  Ages
                </div>

                <div
                  style={{
                    marginTop: 6,
                    fontSize: 20,
                    fontWeight: 900,
                  }}
                >
                  {team?.ages || "Coming Soon"}
                </div>
              </div>

              <div
                style={{
                  padding: 16,
                  borderRadius: 17,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    opacity: 0.68,
                  }}
                >
                  Team Colors
                </div>

                <div
                  style={{
                    marginTop: 6,
                    fontSize: 17,
                    fontWeight: 900,
                    lineHeight: 1.35,
                  }}
                >
                  {team?.colors || "Coming Soon"}
                </div>
              </div>
            </div>

            {team?.registration ? (
              <a
                className="btn btnPrimary"
                href={team.registration}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minHeight: 56,
                  marginTop: 16,
                  padding: "15px 18px",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                Register for Anarchy
              </a>
            ) : (
              <div
                style={{
                  marginTop: 16,
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textAlign: "center",
                  fontWeight: 800,
                  opacity: 0.8,
                }}
              >
                Registration information coming soon
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROGRAM FOCUS */}
      <section
        className="card"
        style={{
          marginTop: 26,
          padding: "clamp(24px, 5vw, 38px)",
          borderRadius: 28,
          border: "1px solid rgba(220,38,38,0.14)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(127,29,29,0.08), rgba(220,38,38,0.04))",
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
                marginBottom: 12,
                borderRadius: 999,
                background: "rgba(220,38,38,0.11)",
                color: "#dc2626",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Athlete Development
            </div>

            <h2
              style={{
                margin: "0 0 10px",
                fontSize: "clamp(28px, 4vw, 42px)",
              }}
            >
              Anarchy Program Focus
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.75,
                opacity: 0.76,
              }}
            >
              Athletes receive focused training designed to strengthen
              individual ability while developing a confident and unified
              competition team.
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
            {programFocus.map((item) => (
              <div
                key={item.title}
                style={{
                  minHeight: 205,
                  padding: 22,
                  borderRadius: 21,
                  background:
                    "linear-gradient(145deg, rgba(127,29,29,0.07), rgba(220,38,38,0.04))",
                  border: "1px solid rgba(220,38,38,0.13)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
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
                    fontSize: 30,
                    background:
                      "linear-gradient(135deg, rgba(127,29,29,0.17), rgba(220,38,38,0.16))",
                    border: "1px solid rgba(220,38,38,0.18)",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: 18,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.65,
                    opacity: 0.72,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL TRAVEL EXPERIENCE */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
          gap: 22,
          marginTop: 24,
        }}
      >
        <div
          className="card"
          style={{
            padding: 26,
            borderRadius: 24,
            border: "1px solid rgba(220,38,38,0.14)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#dc2626",
            }}
          >
            Team Experience
          </div>

          <h2 style={{ margin: "8px 0 16px" }}>
            What Full Travel Means
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0.78,
            }}
          >
            Anarchy competes against programs throughout the region and
            represents Stateline Renegades at travel competitions.
          </p>
        </div>

        <div
          className="card"
          style={{
            padding: 26,
            borderRadius: 24,
            border: "1px solid rgba(220,38,38,0.14)",
            background:
              "linear-gradient(145deg, rgba(17,24,39,0.08), rgba(220,38,38,0.06))",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#dc2626",
            }}
          >
            Team Identity
          </div>

          <h2 style={{ margin: "8px 0 16px" }}>
            Bold Energy. Strong Fundamentals.
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0.78,
            }}
          >
            The Anarchy program combines confident performance with
            disciplined skill progression and high-impact team development.
          </p>
        </div>
      </section>

      {/* REGISTRATION CTA */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 24,
          padding: "clamp(28px, 5vw, 44px)",
          borderRadius: 28,
          textAlign: "center",
          color: "white",
          background:
            "linear-gradient(135deg, #111827, #7f1d1d, #dc2626)",
          boxShadow: "0 22px 55px rgba(127,29,29,0.24)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 240,
            height: 240,
            borderRadius: "50%",
            top: -140,
            right: -80,
            background: "rgba(255,255,255,0.09)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 38, marginBottom: 8 }}>⚡</div>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(28px, 5vw, 42px)",
            }}
          >
            Ready to Join Anarchy?
          </h2>

          <p
            style={{
              maxWidth: 690,
              margin: "0 auto",
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0.84,
            }}
          >
            Begin the registration process and become part of the Stateline
            Renegades Full Travel Team.
          </p>

          {team?.registration ? (
            <a
              className="btn btnPrimary"
              href={team.registration}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 245,
                minHeight: 54,
                marginTop: 20,
                padding: "15px 22px",
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              Register for Anarchy
            </a>
          ) : (
            <div
              style={{
                display: "inline-block",
                marginTop: 20,
                padding: "14px 20px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.14)",
                fontWeight: 800,
              }}
            >
              Registration information coming soon
            </div>
          )}
        </div>
      </section>
    </main>
  );
}