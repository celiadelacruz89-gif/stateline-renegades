import Link from "next/link";

export default function TBallPage() {
  const developmentAreas = [
    {
      icon: "⚾",
      title: "Hitting Fundamentals",
      description:
        "Athletes learn proper batting stance, safe bat control, balance, and how to make confident contact with the ball.",
    },
    {
      icon: "🧤",
      title: "Fielding Skills",
      description:
        "Players practice ready position, ground-ball fundamentals, catching, and basic defensive awareness.",
    },
    {
      icon: "🎯",
      title: "Throwing Development",
      description:
        "Coaches introduce safe throwing mechanics, accuracy, coordination, and age-appropriate arm development.",
    },
    {
      icon: "🏃",
      title: "Running the Bases",
      description:
        "Young athletes learn base locations, running direction, listening for coaches, and safe movement on the field.",
    },
    {
      icon: "🤝",
      title: "Teamwork",
      description:
        "Players learn how to encourage teammates, take turns, communicate, and contribute to a positive team environment.",
    },
    {
      icon: "⭐",
      title: "Confidence & Fun",
      description:
        "Every practice is designed to help athletes feel successful, stay engaged, and develop a love for the game.",
    },
  ];

  const resourceLinks = [
    {
      icon: "📝",
      title: "T-Ball Registration",
      description:
        "Complete the registration form to begin your athlete’s Renegades journey.",
      href: "https://form.jotform.com/260086521920149",
      buttonText: "Register for T-Ball",
    },
    {
      icon: "🎟️",
      title: "JJ Fundraiser",
      description:
        "Participate in the current fundraiser and help support the T-Ball program.",
      href: "https://form.jotform.com/260160484299058",
      buttonText: "Open Fundraiser",
    },
  ];

  const merchLinks = [
    {
      icon: "⚾",
      title: "Player Gear",
      description:
        "Order player shirts, apparel, and official Renegades team gear.",
      href: "https://form.jotform.com/260125057825050",
      buttonText: "Shop Player Gear",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Parent & Family Merch",
      description:
        "Support your athlete with Renegades apparel made for parents and family members.",
      href: "https://form.jotform.com/260124714767054",
      buttonText: "Shop Family Merch",
    },
    {
      icon: "🧢",
      title: "Coach Merch",
      description:
        "Order apparel and team gear designed for Renegades coaches and staff.",
      href: "https://form.jotform.com/260125031204033",
      buttonText: "Shop Coach Gear",
    },
  ];

  return (
    <main className="wrap section">
      {/* HERO */}
      <section
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(30px, 6vw, 64px)",
          borderRadius: 30,
          color: "white",
          background:
            "linear-gradient(135deg, #050505 0%, #18181b 38%, #7f1d1d 72%, #dc2626 100%)",
          border: "1px solid rgba(220,38,38,0.35)",
          boxShadow: "0 28px 70px rgba(0,0,0,0.28)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 340,
            height: 340,
            borderRadius: "50%",
            top: -190,
            right: -110,
            background: "rgba(255,255,255,0.09)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 230,
            height: 230,
            borderRadius: "50%",
            bottom: -145,
            left: -85,
            background: "rgba(220,38,38,0.24)",
            filter: "blur(8px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
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
                border: "1px solid rgba(255,255,255,0.15)",
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
                  background: "#ffffff",
                  boxShadow: "0 0 13px rgba(255,255,255,0.9)",
                }}
              />

              Stateline Renegades Baseball
            </div>

            <h1
              style={{
                maxWidth: 760,
                margin: 0,
                fontSize: "clamp(38px, 7vw, 68px)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
              }}
            >
              Future Renegades Start Here
            </h1>

            <p
              style={{
                maxWidth: 680,
                margin: "19px 0 0",
                fontSize: "clamp(16px, 2vw, 19px)",
                lineHeight: 1.75,
                opacity: 0.87,
              }}
            >
              Our T-Ball program introduces young athletes to baseball through
              fundamentals, teamwork, confidence, movement, and fun in a
              positive learning environment.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                marginTop: 25,
              }}
            >
              <a
                href="https://form.jotform.com/260086521920149"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btnPrimary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 210,
                  minHeight: 54,
                  padding: "14px 20px",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                📝 Register for T-Ball
              </a>

              <Link
                href="/gallery/tball"
                className="btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: 210,
                  minHeight: 54,
                  padding: "14px 20px",
                  color: "white",
                  background: "rgba(255,255,255,0.09)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                📸 View T-Ball Gallery
              </Link>
            </div>
          </div>

          <div
            style={{
              padding: "clamp(22px, 4vw, 30px)",
              borderRadius: 25,
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.13)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 45px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                marginBottom: 17,
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                opacity: 0.72,
              }}
            >
              Program Foundation
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {[
                "Baseball fundamentals",
                "Positive coaching",
                "Teamwork and sportsmanship",
                "Confidence building",
                "Age-appropriate development",
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
                      width: 28,
                      height: 28,
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

      {/* PROGRAM INTRODUCTION */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
          gap: 22,
          marginTop: 26,
        }}
      >
        <div
          className="card"
          style={{
            padding: "clamp(24px, 4vw, 34px)",
            borderRadius: 25,
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
            Player Development
          </div>

          <h2
            style={{
              margin: "9px 0 13px",
              fontSize: "clamp(26px, 4vw, 38px)",
            }}
          >
            Learning the Game One Skill at a Time
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0.76,
            }}
          >
            Coaches introduce the game in simple, encouraging steps so each
            player can learn safely, build coordination, and experience
            success.
          </p>
        </div>

        <div
          className="card"
          style={{
            padding: "clamp(24px, 4vw, 34px)",
            borderRadius: 25,
            border: "1px solid rgba(220,38,38,0.14)",
            background:
              "linear-gradient(145deg, rgba(17,24,39,0.07), rgba(220,38,38,0.07))",
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
            Renegades Experience
          </div>

          <h2
            style={{
              margin: "9px 0 13px",
              fontSize: "clamp(26px, 4vw, 38px)",
            }}
          >
            More Than Baseball
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.8,
              opacity: 0.76,
            }}
          >
            The program helps young athletes learn responsibility, listening,
            teamwork, effort, and sportsmanship while becoming part of the
            Renegades family.
          </p>
        </div>
      </section>

      {/* SKILL DEVELOPMENT */}
      <section
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 26,
          padding: "clamp(26px, 5vw, 42px)",
          borderRadius: 29,
          border: "1px solid rgba(220,38,38,0.14)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(24,24,27,0.04), rgba(220,38,38,0.05))",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto 30px",
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
              What Athletes Learn
            </div>

            <h2
              style={{
                margin: "0 0 11px",
                fontSize: "clamp(29px, 5vw, 44px)",
              }}
            >
              T-Ball Development Areas
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: 17,
                lineHeight: 1.75,
                opacity: 0.74,
              }}
            >
              Each training area supports physical development, game
              understanding, confidence, and a positive first experience with
              baseball.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
              gap: 17,
            }}
          >
            {developmentAreas.map((area) => (
              <div
                key={area.title}
                style={{
                  minHeight: 230,
                  padding: 23,
                  borderRadius: 22,
                  background:
                    "linear-gradient(145deg, rgba(24,24,27,0.04), rgba(220,38,38,0.055))",
                  border: "1px solid rgba(220,38,38,0.13)",
                  boxShadow: "0 13px 32px rgba(0,0,0,0.07)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: 66,
                    height: 66,
                    marginBottom: 16,
                    borderRadius: 20,
                    background:
                      "linear-gradient(135deg, rgba(17,24,39,0.12), rgba(220,38,38,0.15))",
                    border: "1px solid rgba(220,38,38,0.17)",
                    fontSize: 31,
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
                    lineHeight: 1.68,
                    opacity: 0.72,
                  }}
                >
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTRATION AND RESOURCES */}
      <section style={{ marginTop: 26 }}>
        <div
          style={{
            maxWidth: 760,
            marginBottom: 22,
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
            Get Started
          </div>

          <h2
            style={{
              margin: "8px 0 9px",
              fontSize: "clamp(29px, 5vw, 43px)",
            }}
          >
            Registration & Resources
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.75,
              opacity: 0.74,
            }}
          >
            Use the options below to register your athlete or access the
            current T-Ball fundraiser.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: 20,
          }}
        >
          {resourceLinks.map((resource) => (
            <div
              key={resource.title}
              className="card"
              style={{
                padding: 26,
                borderRadius: 24,
                border: "1px solid rgba(220,38,38,0.15)",
                boxShadow: "0 14px 35px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 60,
                  height: 60,
                  marginBottom: 17,
                  borderRadius: 18,
                  background:
                    "linear-gradient(135deg, rgba(17,24,39,0.11), rgba(220,38,38,0.16))",
                  border: "1px solid rgba(220,38,38,0.17)",
                  fontSize: 28,
                }}
              >
                {resource.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 9px",
                  fontSize: 23,
                }}
              >
                {resource.title}
              </h3>

              <p
                style={{
                  minHeight: 53,
                  margin: 0,
                  fontSize: 15,
                  lineHeight: 1.7,
                  opacity: 0.73,
                }}
              >
                {resource.description}
              </p>

              <a
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btnPrimary"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minHeight: 52,
                  marginTop: 20,
                  padding: "14px 18px",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                {resource.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* MERCH STORE */}
      <section
        className="card"
        style={{
          marginTop: 26,
          padding: "clamp(26px, 5vw, 42px)",
          borderRadius: 29,
          border: "1px solid rgba(220,38,38,0.14)",
          background:
            "linear-gradient(145deg, rgba(17,24,39,0.05), rgba(220,38,38,0.045))",
        }}
      >
        <div
          style={{
            maxWidth: 760,
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
            Renegades Apparel
          </div>

          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(29px, 5vw, 43px)",
            }}
          >
            T-Ball Merch Store
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.75,
              opacity: 0.74,
            }}
          >
            Shop apparel and gear for players, families, coaches, and staff.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
            gap: 18,
          }}
        >
          {merchLinks.map((item) => (
            <div
              key={item.title}
              style={{
                padding: 23,
                borderRadius: 22,
                background: "var(--card, rgba(255,255,255,0.04))",
                border: "1px solid rgba(220,38,38,0.13)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.07)",
              }}
            >
              <div
                style={{
                  fontSize: 34,
                  marginBottom: 14,
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize: 20,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  minHeight: 76,
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.7,
                  opacity: 0.72,
                }}
              >
                {item.description}
              </p>

              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minHeight: 50,
                  marginTop: 18,
                  padding: "13px 16px",
                  textAlign: "center",
                  fontWeight: 900,
                }}
              >
                {item.buttonText}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAMILY SUPPORT */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 310px), 1fr))",
          gap: 22,
          marginTop: 26,
        }}
      >
        <div
          className="card"
          style={{
            padding: 27,
            borderRadius: 24,
            border: "1px solid rgba(220,38,38,0.14)",
          }}
        >
          <div style={{ fontSize: 34, marginBottom: 10 }}>👨‍👩‍👧‍👦</div>

          <h2 style={{ margin: "0 0 12px" }}>A Family-Focused Program</h2>

          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.8,
              opacity: 0.75,
            }}
          >
            Families are an important part of the Renegades experience. Parent
            encouragement, attendance, communication, and support help young
            athletes grow throughout the season.
          </p>
        </div>

        <div
          className="card"
          style={{
            padding: 27,
            borderRadius: 24,
            border: "1px solid rgba(220,38,38,0.14)",
          }}
        >
          <div style={{ fontSize: 34, marginBottom: 10 }}>📣</div>

          <h2 style={{ margin: "0 0 12px" }}>Positive Coaching</h2>

          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.8,
              opacity: 0.75,
            }}
          >
            Our goal is to teach the game through encouragement,
            age-appropriate instruction, patience, and clear expectations for
            effort and sportsmanship.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 26,
          padding: "clamp(31px, 6vw, 52px)",
          borderRadius: 30,
          color: "white",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #050505 0%, #18181b 38%, #7f1d1d 72%, #dc2626 100%)",
          boxShadow: "0 24px 60px rgba(127,29,29,0.27)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 270,
            height: 270,
            borderRadius: "50%",
            top: -165,
            right: -90,
            background: "rgba(255,255,255,0.09)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative" }}>
          <div style={{ fontSize: 42, marginBottom: 10 }}>⚾</div>

          <h2
            style={{
              margin: "0 0 11px",
              fontSize: "clamp(30px, 5vw, 46px)",
            }}
          >
            Join the Renegades T-Ball Family
          </h2>

          <p
            style={{
              maxWidth: 700,
              margin: "0 auto",
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0.84,
            }}
          >
            Give your young athlete a positive introduction to baseball,
            teamwork, confidence, and the Stateline Renegades community.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
              marginTop: 22,
            }}
          >
            <a
              href="https://form.jotform.com/260086521920149"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btnPrimary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 230,
                minHeight: 54,
                padding: "14px 21px",
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              Register for T-Ball
            </a>

            <Link
              href="/gallery/tball"
              className="btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 230,
                minHeight: 54,
                padding: "14px 21px",
                color: "white",
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.19)",
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              View T-Ball Gallery
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}