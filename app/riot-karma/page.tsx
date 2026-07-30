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

  const seasonItems = [
    {
      icon: "👕",
      title: "Competition Uniform",
      description: "Official team competition uniform",
    },
    {
      icon: "🎽",
      title: "Two Practice Sets",
      description: "Team practice clothing for weekly training",
    },
    {
      icon: "🎀",
      title: "Team Bows",
      description: "Coordinating bows for team events",
    },
    {
      icon: "🎒",
      title: "Team Backpack",
      description: "Official backpack for practices and competitions",
    },
    {
      icon: "🏟️",
      title: "Team Jersey",
      description: "Renegades jersey for team appearances",
    },
    {
      icon: "📣",
      title: "Game/Fundraiser Uniform",
      description: "Uniform for games, appearances, and fundraisers",
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: 20,
        }}
      >
        <div
          style={{
            background: "#0f766e",
            color: "white",
            padding: "12px 20px",
            borderRadius: 999,
            display: "inline-block",
            fontWeight: 800,
            letterSpacing: "0.04em",
          }}
        >
          LOCAL TRAVEL TEAMS
        </div>
      </div>

      {/* REGISTRATION STATUS */}
      <section
        style={{
          marginBottom: 24,
          padding: "18px 20px",
          borderRadius: 18,
          background:
            "linear-gradient(135deg, rgba(15,118,110,0.22), rgba(236,72,153,0.18))",
          textAlign: "center",
          fontWeight: 800,
          fontSize: 18,
        }}
      >
        Registration is open for Riot and Karma. Limited spots are available.
      </section>

      {/* TEAM CARDS */}
      <section
        style={{
          display: "grid",
          gap: 22,
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          alignItems: "stretch",
        }}
      >
        {/* RIOT */}
        <article
          className="card"
          style={{
            overflow: "hidden",
            borderRadius: 24,
            border: "1px solid rgba(22,163,74,0.35)",
          }}
        >
          <img
            src="/images/riot-team.png"
            alt="Stateline Renegades Riot Cheer Team"
            style={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />

          <div
            style={{
              padding: 24,
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
                flexWrap: "wrap",
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

                <h2 style={{ margin: "8px 0 4px", fontSize: 34 }}>
                  💚 Riot Cheer
                </h2>

                <p style={{ margin: 0, opacity: 0.9 }}>
                  Competitive training, teamwork, confidence, and performance.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.18)",
                  border: "1px solid rgba(247,146,227,0.9)",
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
                  background: "rgba(22,163,74,0.12)",
                }}
              >
                <div style={{ fontSize: 13, opacity: 0.75 }}>Ages</div>
                <div style={{ fontSize: 20, fontWeight: 900 }}>6–14</div>
              </div>

              <div
                style={{
                  padding: 14,
                  borderRadius: 16,
                  background: "rgba(22,163,74,0.12)",
                }}
              >
                <div style={{ fontSize: 13, opacity: 0.75 }}>Practice</div>

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
                <strong>New Members:</strong> $400
                <br />
                <strong>Returning Members:</strong> $85
              </div>
            </div>

            <div
              style={{
                marginTop: 18,
                padding: 18,
                borderRadius: 16,
                background: "rgba(22,163,74,0.06)",
                border: "1px solid rgba(22,163,74,0.16)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>What Registration Covers</h3>

              <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
                Team enrollment, two practice sets, competition uniform,
                backpack, jersey, bows, and a game/fundraiser uniform.
              </p>
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

        {/* KARMA */}
        <article
          className="card"
          style={{
            overflow: "hidden",
            borderRadius: 24,
            border: "1px solid rgba(236,72,153,0.35)",
          }}
        >
          <img
            src="/images/karma-team.png"
            alt="Karma cheer athletes practicing together"
            style={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />

          <div
            style={{
              padding: 24,
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
                flexWrap: "wrap",
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

                <h2 style={{ margin: "8px 0 4px", fontSize: 34 }}>
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
                <div style={{ fontSize: 13, opacity: 0.75 }}>Ages</div>
                <div style={{ fontSize: 20, fontWeight: 900 }}>3–5</div>
              </div>

              <div
                style={{
                  padding: 14,
                  borderRadius: 16,
                  background: "rgba(236,72,153,0.08)",
                }}
              >
                <div style={{ fontSize: 13, opacity: 0.75 }}>Practice</div>

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

            <div
              style={{
                marginTop: 18,
                padding: 18,
                borderRadius: 16,
                background: "rgba(236,72,153,0.06)",
                border: "1px solid rgba(236,72,153,0.16)",
              }}
            >
              <h3 style={{ marginTop: 0 }}>What Registration Covers</h3>

              <p style={{ marginBottom: 0, lineHeight: 1.8 }}>
                Team enrollment, two practice sets, competition uniform,
                backpack, jersey, bows, and a game/fundraiser uniform.
              </p>
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

      {/* SEASON INCLUDES */}
      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <div style={{ textAlign: "center", marginBottom: 22 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 900,
              letterSpacing: "0.1em",
              color: "#0f766e",
            }}
          >
            REGISTRATION VALUE
          </div>

          <h2 style={{ margin: "8px 0" }}>What Your Season Includes</h2>

          <p
            style={{
              margin: "0 auto",
              maxWidth: 700,
              lineHeight: 1.7,
              opacity: 0.78,
            }}
          >
            Athletes receive the essential team apparel and equipment needed
            for practices, appearances, fundraisers, and competitions.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
          }}
        >
          {seasonItems.map((item) => (
            <div
              key={item.title}
              style={{
                padding: 20,
                borderRadius: 18,
                textAlign: "center",
                background:
                  "linear-gradient(135deg, rgba(15,118,110,0.08), rgba(236,72,153,0.08))",
                border: "1px solid rgba(15,118,110,0.12)",
              }}
            >
              <div style={{ fontSize: 34, marginBottom: 10 }}>{item.icon}</div>

              <h3 style={{ margin: "0 0 8px" }}>{item.title}</h3>

              <p style={{ margin: 0, lineHeight: 1.6, opacity: 0.75 }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* AFTER REGISTRATION */}
      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>After You Register</h2>

        <ol style={{ lineHeight: 2, paddingLeft: 24, marginBottom: 0 }}>
          <li>Complete the online registration form.</li>
          <li>A coach will contact you with the next steps.</li>
          <li>Receive practice, payment, and team information.</li>
          <li>Attend your athlete&apos;s first scheduled practice.</li>
        </ol>
      </section>

      {/* COMPETITION FEES */}
      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>🏆 Competition Fees</h2>

        <p style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 12 }}>
          Competition entry fees are estimated at{" "}
          <strong>$350 per competition</strong>. The fee is divided among the
          athletes on the team, so each family&apos;s portion depends on the
          number of participating athletes.
        </p>

        <p style={{ marginBottom: 0, fontSize: 14, opacity: 0.75 }}>
          Competition costs are estimates and may change based on the event,
          team size, travel requirements, and vendor pricing.
        </p>
      </section>

      {/* FAMILY SUPPORT */}
      <section
        style={{
          marginTop: 24,
          padding: 24,
          borderRadius: 20,
          background:
            "linear-gradient(135deg, rgba(15,118,110,0.16), rgba(236,72,153,0.14))",
          textAlign: "center",
          lineHeight: 1.8,
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 8 }}>
          Every Athlete Deserves an Opportunity
        </h2>

        <p
          style={{
            margin: "0 auto",
            maxWidth: 760,
            fontWeight: 700,
          }}
        >
          Fundraising opportunities and payment options may be available to
          help families throughout the season.
        </p>
      </section>

      {/* FAQ */}
      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <div style={{ textAlign: "center", marginBottom: 22 }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 900,
              letterSpacing: "0.1em",
              color: "#0f766e",
            }}
          >
            PARENT INFORMATION
          </div>

          <h2 style={{ margin: "8px 0" }}>Frequently Asked Questions</h2>
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          {faqs.map((faq) => (
            <details
              key={faq.question}
              style={{
                padding: "16px 18px",
                borderRadius: 16,
                background: "rgba(15,118,110,0.06)",
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
                  margin: "12px 0 0",
                  lineHeight: 1.7,
                  opacity: 0.8,
                }}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <div style={{ textAlign: "center", marginTop: 24 }}>
        <Link href="/gallery/riot-karma" className="btn">
          View Riot &amp; Karma Gallery
        </Link>
      </div>

      {/* CONTACTS */}
      <section className="card" style={{ padding: 24, marginTop: 24 }}>
        <h2 style={{ marginTop: 0 }}>Questions Before Registering?</h2>

        <p style={{ lineHeight: 1.7 }}>
          Contact one of our coaches for help with registration, pricing,
          practices, or fundraising opportunities.
        </p>

        <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
          {contacts.map((contact) => (
            <a
              key={contact.phone}
              href={phoneHref(contact.phone)}
              style={{
                padding: "14px 16px",
                borderRadius: 14,
                textDecoration: "none",
                fontSize: 17,
                fontWeight: 800,
                background: "rgba(15,118,110,0.08)",
                border: "1px solid rgba(15,118,110,0.15)",
              }}
            >
              📞 {contact.name} — {contact.phone}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}