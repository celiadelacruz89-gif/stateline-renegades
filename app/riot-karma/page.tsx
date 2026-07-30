import { teams } from "../lib/data";
import { phoneHref } from "../lib/utils";
import TeamHero from "../components/TeamHero";

export default function RiotKarmaPage() {
  const riot = teams.find((t) => t.id === "riot");
  const karma = teams.find((t) => t.id === "karma");

  return (
    <main className="wrap section">
      <TeamHero
        title="Riot / Karma Cheer"
        subtitle="Our Local Travel Teams focused on athlete development, confidence, teamwork, and preparing athletes for advanced competition opportunities."
        colors="linear-gradient(135deg, #004d40, #0f766e, #f9a8d4)"
        logo="/logos/riot-karma.png"
      />

      <div
        style={{
          background: "#0f766e",
          color: "white",
          padding: "12px 20px",
          borderRadius: 999,
          display: "inline-block",
          marginBottom: 24,
          fontWeight: 800,
          letterSpacing: "0.04em",
        }}
      >
        LOCAL TRAVEL TEAMS
      </div>

      <section
        style={{
          display: "grid",
          gap: 22,
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        }}
      >
        {/* RIOT TEAM CARD */}
        <article
          className="card"
          style={{
            overflow: "hidden",
            borderRadius: 24,
            border: "1px solid rgba(22, 163, 74, 0.35)",
          }}
        >
          <div
            style={{
              padding: "24px",
              background:
                "linear-gradient(135deg, rgba(0,77,64,0.98), rgba(22,163,74,0.82))",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    opacity: 0.9,
                  }}
                >
                  LOCAL TRAVEL TEAM
                </div>

                <h2
                  style={{
                    margin: "8px 0 4px",
                    fontSize: 34,
                  }}
                >
                  💚 Riot Cheer
                </h2>

                <p style={{ margin: 0, opacity: 0.9 }}>
                  Competitive training, teamwork, confidence, and performance.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: 999,
                  padding: "8px 12px",
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                }}
              >
                3 Spots Left
              </div>
            </div>
          </div>

          <div style={{ padding: 24 }}>
            <div
              style={{
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              }}
            >
              <div
                style={{
                  padding: 14,
                  borderRadius: 16,
                  background: "rgba(22,163,74,0.08)",
                }}
              >
                <div style={{ fontSize: 13, opacity: 0.7 }}>Ages</div>
                <div style={{ fontSize: 20, fontWeight: 900 }}>6–14</div>
              </div>

              <div
                style={{
                  padding: 14,
                  borderRadius: 16,
                  background: "rgba(22,163,74,0.08)",
                }}
              >
                <div style={{ fontSize: 13, opacity: 0.7 }}>Practice</div>
                <div style={{ fontSize: 16, fontWeight: 900 }}>
                  Tue–Thu
                  <br />
                  6–8 PM
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h3 style={{ marginBottom: 10 }}>What Athletes Learn</h3>

              <ul style={{ lineHeight: 1.9, paddingLeft: 22 }}>
                <li>Competition-style cheer training</li>
                <li>Jumps, motions, dance, and performance</li>
                <li>Teamwork and confidence building</li>
                <li>Skill development for advanced opportunities</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: 20,
                padding: 18,
                borderRadius: 18,
                background: "rgba(22,163,74,0.08)",
              }}
            >
              <div style={{ fontWeight: 900, marginBottom: 8 }}>
                Registration Cost
              </div>

              <div style={{ lineHeight: 1.8 }}>
                <strong>New Members:</strong> $250
                <br />
                <strong>Returning Members:</strong> $85
              </div>
            </div>

            {riot?.registration && (
              <a
                className="btn"
                href={riot.registration}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: 20,
                  padding: "14px 18px",
                }}
              >
                Register for Riot
              </a>
            )}
          </div>
        </article>

        {/* KARMA TEAM CARD */}
        <article
          className="card"
          style={{
            overflow: "hidden",
            borderRadius: 24,
            border: "1px solid rgba(236,72,153,0.35)",
          }}
        >
          <div
            style={{
              padding: "24px",
              background:
                "linear-gradient(135deg, rgba(236,72,153,0.95), rgba(20,184,166,0.82))",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 12,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    opacity: 0.9,
                  }}
                >
                  BEGINNER DEVELOPMENT TEAM
                </div>

                <h2
                  style={{
                    margin: "8px 0 4px",
                    fontSize: 34,
                  }}
                >
                  🩷 Karma Cheer
                </h2>

                <p style={{ margin: 0, opacity: 0.9 }}>
                  A fun and supportive introduction to competitive cheer.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: 999,
                  padding: "8px 12px",
                  fontWeight: 900,
                  whiteSpace: "nowrap",
                }}
              >
                4 Spots Left
              </div>
            </div>
          </div>

          <div style={{ padding: 24 }}>
            <div
              style={{
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              }}
            >
              <div
                style={{
                  padding: 14,
                  borderRadius: 16,
                  background: "rgba(236,72,153,0.08)",
                }}
              >
                <div style={{ fontSize: 13, opacity: 0.7 }}>Ages</div>
                <div style={{ fontSize: 20, fontWeight: 900 }}>3–5</div>
              </div>

              <div
                style={{
                  padding: 14,
                  borderRadius: 16,
                  background: "rgba(236,72,153,0.08)",
                }}
              >
                <div style={{ fontSize: 13, opacity: 0.7 }}>Practice</div>
                <div style={{ fontSize: 16, fontWeight: 900 }}>
                  Tue–Thu
                  <br />
                  6–8 PM
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h3 style={{ marginBottom: 10 }}>What Athletes Learn</h3>

              <ul style={{ lineHeight: 1.9, paddingLeft: 22 }}>
                <li>Beginner motions, jumps, and dance</li>
                <li>Listening skills and confidence</li>
                <li>Teamwork and performance basics</li>
                <li>Local performances and competitions</li>
              </ul>
            </div>

            <div
              style={{
                marginTop: 20,
                padding: 18,
                borderRadius: 18,
                background: "rgba(236,72,153,0.08)",
              }}
            >
              <div style={{ fontWeight: 900, marginBottom: 8 }}>
                Registration Cost
              </div>

              <div style={{ lineHeight: 1.8 }}>
                <strong>New Members:</strong> $250
                <br />
                <strong>Returning Members:</strong> $85
              </div>
            </div>

            {karma?.registration && (
              <a
                className="btn"
                href={karma.registration}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  marginTop: 20,
                  padding: "14px 18px",
                }}
              >
                Register for Karma
              </a>
            )}
          </div>
        </article>
      </section>

      {/* COMPETITION FEES */}
      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>🏆 Competition Fees</h2>

        <p style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 0 }}>
          Competition entry fees are estimated at{" "}
          <strong>$350 per competition</strong>. The fee is divided among the
          athletes on the team, so each family&apos;s portion depends on the
          number of athletes participating.
        </p>
      </section>

      {/* FAMILY SUPPORT */}
      <section
        style={{
          marginTop: 24,
          padding: 22,
          borderRadius: 20,
          background:
            "linear-gradient(135deg, rgba(15,118,110,0.16), rgba(236,72,153,0.14))",
          textAlign: "center",
          fontWeight: 700,
          lineHeight: 1.8,
        }}
      >
        We believe every child deserves the opportunity to cheer. Fundraising
        opportunities and payment options may be available to help families
        throughout the season.
      </section>

      {/* CONTACTS */}
      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Contacts</h2>

        <div style={{ display: "grid", gap: 10 }}>
          {[...(riot?.contacts || []), ...(karma?.contacts || [])].map((c) => (
            <a
              key={`${c.name}-${c.phone}`}
              href={phoneHref(c.phone)}
              style={{ textDecoration: "underline" }}
            >
              {c.name} — {c.phone}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}