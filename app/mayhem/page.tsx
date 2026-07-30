import { teams } from "../lib/data";
import TeamHero from "../components/TeamHero";

export default function MayhemPage() {
  const team = teams.find((item) => item.id === "mayhem");

  const programFocus = [
    {
      icon: "📣",
      title: "Cheer Skill Progression",
      description:
        "Structured training helps athletes strengthen fundamentals and advance their cheer skills.",
    },
    {
      icon: "🔥",
      title: "Power & Performance",
      description:
        "Athletes develop sharp motions, strong energy, expression, and exciting performance quality.",
    },
    {
      icon: "🤝",
      title: "Teamwork & Confidence",
      description:
        "Practices build trust, communication, responsibility, and confidence.",
    },
    {
      icon: "⚡",
      title: "Complete Routine Training",
      description:
        "Training includes stunts, jumps, dance, motions, transitions, and routine performance.",
    },
    {
      icon: "🏆",
      title: "Travel Competition",
      description:
        "Mayhem represents the Renegades at regional and travel competitions.",
    },
  ];

  return (
    <main className="wrap section">
      <TeamHero
        title="Mayhem Cheer"
        subtitle="Our Full Travel Team built for athletes seeking advanced competition opportunities. Power, performance, confidence, and exciting cheer progression."
        colors="linear-gradient(135deg, #111827, #4c1d95, #9333ea)"
        logo="/logos/mayhem.png"
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
              "linear-gradient(135deg, rgba(76,29,149,0.98), rgba(147,51,234,0.94))",
            color: "white",
            fontSize: 13,
            fontWeight: 900,
            letterSpacing: "0.1em",
            boxShadow: "0 12px 30px rgba(147,51,234,0.24)",
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
          border: "1px solid rgba(147,51,234,0.22)",
          background:
            "linear-gradient(135deg, rgba(17,24,39,0.97), rgba(76,29,149,0.82), rgba(147,51,234,0.48))",
          color: "white",
          boxShadow: "0 24px 65px rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 290,
            height: 290,
            borderRadius: "50%",
            top: -155,
            right: -95,
            background: "rgba(168,85,247,0.28)",
            filter: "blur(10px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            bottom: -135,
            left: -95,
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
              🔥 Powerful. Confident. Competitive.
            </div>

            <h2
              style={{
                margin: 0,
                maxWidth: 650,
                fontSize: "clamp(31px, 5vw, 49px)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
              }}
            >
              Built for athletes ready to perform at the next level
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
              Mayhem is a Stateline Renegades Full Travel Team focused on
              advanced competition opportunities, strong fundamentals,
              confident performance, teamwork, and exciting cheer progression.
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
                Register for Mayhem
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
          border: "1px solid rgba(147,51,234,0.15)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(76,29,149,0.08), rgba(147,51,234,0.05))",
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
                background: "rgba(147,51,234,0.11)",
                color: "#9333ea",
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
              Mayhem Program Focus
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.75,
                opacity: 0.76,
              }}
            >
              Mayhem athletes receive focused instruction designed to develop
              advanced ability, confident performance, and a strong,
              competition-ready team.
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
                    "linear-gradient(145deg, rgba(76,29,149,0.08), rgba(147,51,234,0.05))",
                  border: "1px solid rgba(147,51,234,0.14)",
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
                      "linear-gradient(135deg, rgba(76,29,149,0.18), rgba(147,51,234,0.17))",
                    border: "1px solid rgba(147,51,234,0.19)",
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
            border: "1px solid rgba(147,51,234,0.14)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9333ea",
            }}
          >
            Team Experience
          </div>

          <h2 style={{ margin: "8px 0 16px" }}>What Full Travel Means</h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0.78,
            }}
          >
            Mayhem competes against programs throughout the region and
            represents Stateline Renegades at travel competitions.
          </p>
        </div>

        <div
          className="card"
          style={{
            padding: 26,
            borderRadius: 24,
            border: "1px solid rgba(147,51,234,0.14)",
            background:
              "linear-gradient(145deg, rgba(17,24,39,0.08), rgba(147,51,234,0.07))",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9333ea",
            }}
          >
            Team Identity
          </div>

          <h2 style={{ margin: "8px 0 16px" }}>
            Power. Performance. Confidence.
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0.78,
            }}
          >
            Mayhem combines exciting cheer progression with disciplined skill
            development, confident performance, and strong team unity.
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
            "linear-gradient(135deg, #111827, #4c1d95, #9333ea)",
          boxShadow: "0 22px 55px rgba(76,29,149,0.28)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 245,
            height: 245,
            borderRadius: "50%",
            top: -145,
            right: -85,
            background: "rgba(255,255,255,0.1)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 170,
            height: 170,
            borderRadius: "50%",
            bottom: -100,
            left: -60,
            background: "rgba(168,85,247,0.18)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 38, marginBottom: 8 }}>🔥</div>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(28px, 5vw, 42px)",
            }}
          >
            Ready to Join Mayhem?
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
              Register for Mayhem
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