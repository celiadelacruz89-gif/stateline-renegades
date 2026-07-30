import SponsorShowcase from "../components/SponsorShowcase";
import { org, sponsors } from "../lib/data";

const sponsorshipLevels = [
  {
    name: "All Star Sponsor",
    tier: "Platinum",
    price: "$1,000",
    icon: "🏆",
    featured: true,
    description:
      "Our premier sponsorship level with maximum recognition throughout the Stateline Renegades organization.",
    benefits: [
      "Sponsor appreciation plaque",
      "Team appearance at a business or community event",
      "Business logo displayed on the organization banner",
      "Premium sponsor recognition",
      "Support for Renegades youth athletes",
    ],
  },
  {
    name: "Elite Sponsor",
    tier: "Gold",
    price: "$750",
    icon: "🥇",
    featured: false,
    description:
      "High-level recognition for businesses making a major impact on our athletes and programs.",
    benefits: [
      "Two competition admission tickets",
      "Social-media recognition after every competition",
      "Business logo on team business cards",
      "Organization sponsor recognition",
      "Support for Renegades youth athletes",
    ],
  },
  {
    name: "Senior Sponsor",
    tier: "Silver",
    price: "$500",
    icon: "🥈",
    featured: false,
    description:
      "Meaningful visibility while helping provide equipment, apparel, and opportunities for our athletes.",
    benefits: [
      "Business logo on athlete backpacks",
      "Business logo on team jackets",
      "Sponsor shoutout video",
      "Organization sponsor recognition",
      "Support for Renegades youth athletes",
    ],
  },
  {
    name: "Junior Sponsor",
    tier: "Bronze",
    price: "$250",
    icon: "🥉",
    featured: false,
    description:
      "A community-focused partnership that helps strengthen our youth sports programs.",
    benefits: [
      "Business logo displayed on the team banner",
      "Renegades sponsor T-shirt",
      "Tax-recognition documentation when applicable",
      "Sponsor appreciation recognition",
      "Support for Renegades youth athletes",
    ],
  },
  {
    name: "Exhibition Sponsor",
    tier: "Black",
    price: "$150",
    icon: "⭐",
    featured: false,
    description:
      "An accessible sponsorship option for local businesses, families, and community supporters.",
    benefits: [
      "Business logo featured on social media",
      "Renegades team photograph",
      "Renegades water bottle",
      "Sponsor appreciation recognition",
      "Support for Renegades youth athletes",
    ],
  },
];

const impactAreas = [
  {
    icon: "👕",
    title: "Uniforms & Apparel",
    description:
      "Helping athletes represent the Renegades with pride at practices, games, and competitions.",
  },
  {
    icon: "🏆",
    title: "Competition Expenses",
    description:
      "Supporting registration fees and opportunities for athletes to compete and grow.",
  },
  {
    icon: "⚾",
    title: "Equipment",
    description:
      "Providing safe, age-appropriate cheer and baseball training equipment.",
  },
  {
    icon: "🚌",
    title: "Team Travel",
    description:
      "Helping reduce the cost of travel for competitions, games, and organization activities.",
  },
  {
    icon: "📣",
    title: "Training Opportunities",
    description:
      "Creating access to camps, clinics, coaching resources, and athlete-development programs.",
  },
  {
    icon: "❤️",
    title: "Family Support",
    description:
      "Keeping youth sports more affordable and accessible for families in our community.",
  },
];

const partnershipReasons = [
  {
    icon: "🌟",
    title: "Support Local Youth",
    description:
      "Your sponsorship directly supports young athletes as they build confidence, discipline, and leadership skills.",
  },
  {
    icon: "📣",
    title: "Increase Visibility",
    description:
      "Show your commitment to the community through sponsor recognition, team materials, and social media.",
  },
  {
    icon: "🤝",
    title: "Strengthen Community",
    description:
      "Partner with an organization that brings athletes, families, coaches, and local businesses together.",
  },
  {
    icon: "🏆",
    title: "Create Opportunities",
    description:
      "Help athletes participate in programs, competitions, training, and experiences that support their growth.",
  },
];

export default function SponsorsPage() {
  return (
    <main className="wrap section">
      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(32px, 7vw, 70px)",
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
            width: 370,
            height: 370,
            top: -215,
            right: -120,
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
            bottom: -170,
            left: -90,
            borderRadius: "50%",
            background: "rgba(245,158,11,0.16)",
            filter: "blur(8px)",
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
            gap: 36,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "8px 14px",
                marginBottom: 18,
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
                  background: "#fbbf24",
                  boxShadow: "0 0 14px rgba(251,191,36,0.9)",
                }}
              />

              Community Partnership
            </div>

            <h1
              style={{
                maxWidth: 760,
                margin: 0,
                fontSize: "clamp(40px, 7vw, 70px)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
              }}
            >
              Invest in the Next Generation
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
              Your support helps Stateline Renegades provide uniforms,
              equipment, training, competition opportunities, and meaningful
              experiences for local youth athletes.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 27,
              }}
            >
              <a
                href={org.sponsorForm}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btnPrimary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 225,
                  minHeight: 54,
                  padding: "14px 21px",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                Become a Sponsor
              </a>

              <a
                href="#sponsorship-levels"
                className="btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 225,
                  minHeight: 54,
                  padding: "14px 21px",
                  color: "white",
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                View Sponsor Levels
              </a>
            </div>
          </div>

          <div
            style={{
              padding: "clamp(22px, 4vw, 30px)",
              borderRadius: 25,
              background: "rgba(0,0,0,0.28)",
              border: "1px solid rgba(255,255,255,0.13)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 48px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                marginBottom: 17,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              Your Sponsorship Helps Provide
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {[
                "Uniforms and team apparel",
                "Training and competition equipment",
                "Competition and event expenses",
                "Travel support",
                "Affordable youth programs",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "13px 15px",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    fontWeight: 800,
                  }}
                >
                  <span
                    style={{
                      display: "grid",
                      placeItems: "center",
                      width: 29,
                      height: 29,
                      flex: "0 0 auto",
                      borderRadius: "50%",
                      background: "#dc2626",
                      color: "white",
                      fontSize: 14,
                      fontWeight: 900,
                    }}
                  >
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 190px), 1fr))",
          marginTop: 26,
        }}
      >
        {[
          ["100+", "Youth Athletes"],
          ["5", "Renegades Teams"],
          ["10+", "Coaches & Volunteers"],
          ["1", "Strong Community"],
        ].map(([number, label]) => (
          <div
            key={label}
            className="card"
            style={{
              minHeight: 165,
              padding: 24,
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
                fontSize: "clamp(38px, 5vw, 50px)",
                lineHeight: 1,
                fontWeight: 950,
                letterSpacing: "-0.04em",
              }}
            >
              {number}
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 16,
                fontWeight: 900,
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </section>

      {/* WHY PARTNER */}
      <section style={{ marginTop: 40 }}>
        <div
          style={{
            maxWidth: 800,
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
              background: "rgba(220,38,38,0.1)",
              color: "#dc2626",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Make a Difference
          </div>

          <h2
            style={{
              margin: "0 0 11px",
              fontSize: "clamp(31px, 5vw, 47px)",
            }}
          >
            Why Partner With Stateline Renegades?
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0.74,
            }}
          >
            Sponsorship is more than advertising. It is an investment in young
            athletes, local families, and the future of our community.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 18,
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 245px), 1fr))",
          }}
        >
          {partnershipReasons.map((item) => (
            <div
              key={item.title}
              className="card"
              style={{
                minHeight: 255,
                padding: 25,
                borderRadius: 23,
                border: "1px solid rgba(220,38,38,0.13)",
                boxShadow: "0 13px 34px rgba(0,0,0,0.07)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 65,
                  height: 65,
                  margin: "0 auto 16px",
                  borderRadius: 20,
                  background:
                    "linear-gradient(135deg, rgba(17,24,39,0.1), rgba(220,38,38,0.15))",
                  border: "1px solid rgba(220,38,38,0.15)",
                  fontSize: 30,
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 10px",
                  fontSize: 20,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.72,
                  opacity: 0.72,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SPONSOR SHOWCASE */}
      <section
        className="card"
        style={{
          marginTop: 40,
          padding: "clamp(25px, 5vw, 42px)",
          borderRadius: 29,
          border: "1px solid rgba(245,158,11,0.17)",
          background:
            "linear-gradient(145deg, rgba(245,158,11,0.045), rgba(220,38,38,0.04))",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto 25px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "7px 13px",
              marginBottom: 12,
              borderRadius: 999,
              background: "rgba(245,158,11,0.12)",
              color: "#f59e0b",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Community Partners
          </div>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(30px, 5vw, 45px)",
            }}
          >
            Our Renegades Sponsors
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.75,
              opacity: 0.73,
            }}
          >
            We are grateful to the businesses, organizations, and families
            helping our athletes succeed.
          </p>
        </div>

        <SponsorShowcase
          sponsors={sponsors}
          sponsorForm={org.sponsorForm}
        />
      </section>

      {/* SPONSORSHIP LEVELS */}
      <section id="sponsorship-levels" style={{ marginTop: 42 }}>
        <div
          style={{
            maxWidth: 810,
            margin: "0 auto 29px",
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
            Partnership Opportunities
          </div>

          <h2
            style={{
              margin: "0 0 11px",
              fontSize: "clamp(31px, 5vw, 47px)",
            }}
          >
            Choose Your Sponsorship Level
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0.74,
            }}
          >
            Every sponsorship level helps provide valuable opportunities for
            Stateline Renegades athletes and families.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
          }}
        >
          {sponsorshipLevels.map((level) => (
            <div
              key={level.name}
              className="card"
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 485,
                padding: 27,
                borderRadius: 26,
                border: level.featured
                  ? "2px solid rgba(245,158,11,0.65)"
                  : "1px solid rgba(220,38,38,0.14)",
                background: level.featured
                  ? "linear-gradient(145deg, rgba(245,158,11,0.1), rgba(220,38,38,0.06))"
                  : "linear-gradient(145deg, rgba(17,24,39,0.04), rgba(220,38,38,0.04))",
                boxShadow: level.featured
                  ? "0 20px 50px rgba(245,158,11,0.14)"
                  : "0 14px 36px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {level.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 18,
                    right: -38,
                    width: 150,
                    padding: "7px 0",
                    background: "#f59e0b",
                    color: "#111827",
                    textAlign: "center",
                    fontSize: 10,
                    fontWeight: 950,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transform: "rotate(39deg)",
                  }}
                >
                  Premier
                </div>
              )}

              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 67,
                  height: 67,
                  marginBottom: 18,
                  borderRadius: 21,
                  background: level.featured
                    ? "linear-gradient(135deg, rgba(245,158,11,0.24), rgba(220,38,38,0.15))"
                    : "linear-gradient(135deg, rgba(17,24,39,0.1), rgba(220,38,38,0.14))",
                  border: level.featured
                    ? "1px solid rgba(245,158,11,0.28)"
                    : "1px solid rgba(220,38,38,0.15)",
                  fontSize: 31,
                }}
              >
                {level.icon}
              </div>

              <div
                style={{
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: level.featured ? "#f59e0b" : "#dc2626",
                }}
              >
                {level.tier} Level
              </div>

              <h3
                style={{
                  margin: "7px 0 3px",
                  fontSize: 25,
                }}
              >
                {level.name}
              </h3>

              <div
                style={{
                  marginTop: 6,
                  fontSize: 39,
                  lineHeight: 1,
                  fontWeight: 950,
                  letterSpacing: "-0.035em",
                }}
              >
                {level.price}
              </div>

              <p
                style={{
                  margin: "17px 0 0",
                  fontSize: 14,
                  lineHeight: 1.7,
                  opacity: 0.72,
                }}
              >
                {level.description}
              </p>

              <div
                style={{
                  height: 1,
                  margin: "20px 0",
                  background: "rgba(255,255,255,0.1)",
                }}
              />

              <div style={{ display: "grid", gap: 11 }}>
                {level.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      fontSize: 14,
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        display: "grid",
                        placeItems: "center",
                        width: 22,
                        height: 22,
                        flex: "0 0 auto",
                        borderRadius: "50%",
                        background: level.featured
                          ? "rgba(245,158,11,0.17)"
                          : "rgba(220,38,38,0.12)",
                        color: level.featured ? "#f59e0b" : "#dc2626",
                        fontSize: 12,
                        fontWeight: 900,
                      }}
                    >
                      ✓
                    </span>

                    <span style={{ opacity: 0.78 }}>{benefit}</span>
                  </div>
                ))}
              </div>

              <a
                href={org.sponsorForm}
                target="_blank"
                rel="noopener noreferrer"
                className={level.featured ? "btn btnPrimary" : "btn"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minHeight: 52,
                  marginTop: "auto",
                  padding: "14px 18px",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                Select {level.tier}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* WHERE SUPPORT GOES */}
      <section
        className="card"
        style={{
          marginTop: 42,
          padding: "clamp(27px, 5vw, 44px)",
          borderRadius: 29,
          border: "1px solid rgba(220,38,38,0.14)",
          background:
            "linear-gradient(145deg, rgba(17,24,39,0.04), rgba(220,38,38,0.045))",
        }}
      >
        <div
          style={{
            maxWidth: 780,
            margin: "0 auto 29px",
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
            Sponsor Impact
          </div>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(30px, 5vw, 45px)",
            }}
          >
            Where Your Support Goes
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.75,
              opacity: 0.73,
            }}
          >
            Sponsorship funds directly support athlete development, program
            operations, and opportunities for Renegades families.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 17,
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
          }}
        >
          {impactAreas.map((area) => (
            <div
              key={area.title}
              style={{
                minHeight: 225,
                padding: 23,
                borderRadius: 22,
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(220,38,38,0.12)",
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
                {area.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 9px",
                  fontSize: 19,
                }}
              >
                {area.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.7,
                  opacity: 0.71,
                }}
              >
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 42,
          padding: "clamp(34px, 7vw, 62px)",
          borderRadius: 30,
          color: "white",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #030712 0%, #111827 38%, #7f1d1d 72%, #dc2626 100%)",
          boxShadow: "0 26px 68px rgba(0,0,0,0.24)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            top: -175,
            right: -95,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 820,
            margin: "0 auto",
          }}
        >
          <div style={{ fontSize: 45, marginBottom: 11 }}>🤝</div>

          <h2
            style={{
              margin: "0 0 13px",
              fontSize: "clamp(32px, 6vw, 51px)",
            }}
          >
            Become Part of the Renegades Family
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.8,
              opacity: 0.85,
            }}
          >
            Help us continue providing positive, affordable, and meaningful
            sports opportunities for young athletes in our community.
          </p>

          <a
            href={org.sponsorForm}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btnPrimary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 255,
              minHeight: 56,
              marginTop: 25,
              padding: "15px 23px",
              textAlign: "center",
              fontWeight: 900,
            }}
          >
            Open Sponsor Application
          </a>
        </div>
      </section>
    </main>
  );
}