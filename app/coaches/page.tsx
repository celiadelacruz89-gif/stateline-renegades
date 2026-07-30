import Image from "next/image";

const coaches = [
  {
    name: "Celia DeLaCruz",
    role: "Riot / Karma Coach",
    team: "riot-karma",
    image: "/coaches/celia.jpg",
    bio: "Dedicated to building confident athletes through teamwork, discipline, encouragement, and strong fundamentals.",
  },
  {
    name: "Andrea (Andy) Moreno",
    role: "Riot Coach",
    team: "riot",
    image: "/coaches/andrea.jpg",
    bio: "Confidence is earned through preparation and perseverance.",
  },
  {
    name: "Diana Roman",
    role: "Riot Coach",
    team: "riot",
    image: "/coaches/diana.jpg",
    bio: "Great teams are built on trust, effort, and heart.",
  },
  {
    name: "Azalia Bertolli",
    role: "Karma Coach",
    team: "karma",
    image: "/coaches/azalia.png",
    bio: "Empowering athletes to shine with confidence, strength, and pride.",
  },
  {
    name: "Azazel Reyes",
    role: "Karma Coach",
    team: "karma",
    image: "/coaches/azazel.jpg",
    bio: "One team. One family. Endless possibilities.",
  },
  {
    name: "Julie Stitt",
    role: "Anarchy Coach",
    team: "anarchy",
    image: "/coaches/julie.png",
    bio: "Creating confident athletes and unforgettable memories.",
  },
  {
    name: "Arlene Hinojosa",
    role: "Anarchy Coach",
    team: "anarchy",
    image: "/coaches/arlene.png",
    bio: "More than a team—we are a family committed to growth and success.",
  },
  {
    name: "Lizbeth Davis",
    role: "Mayhem Coach",
    team: "mayhem",
    image: "/coaches/lizbeth.png",
    bio: "Teaching young athletes to lead, believe, and achieve.",
  },
  {
    name: "Rudy Bertolli",
    role: "T-Ball Coach",
    team: "tball",
    image: "/coaches/rudy.jpg",
    bio: "Focused on growing the Stateline Renegades organization and creating opportunities for athletes and families.",
  },
  {
    name: "James Garey",
    role: "T-Ball Coach",
    team: "tball",
    image: "/coaches/james.jpg",
    bio: "Believes every child deserves the opportunity to learn, grow, and succeed on the field.",
  },
  {
    name: "Luis Ramirez",
    role: "T-Ball Coach",
    team: "tball",
    image: "/coaches/luis.jpg",
    bio: "Committed to making a positive impact on every athlete who wears the Renegades uniform.",
  },
  {
    name: "Terone (T) Collins",
    role: "T-Ball Coach",
    team: "tball",
    image: "/coaches/terone.jpg",
    bio: "Bringing energy, encouragement, and a positive attitude to every practice and game.",
  },
];

const teamStyles: Record<
  string,
  {
    label: string;
    accent: string;
    soft: string;
    gradient: string;
  }
> = {
  "riot-karma": {
    label: "Riot / Karma",
    accent: "#14b8a6",
    soft: "rgba(20,184,166,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(20,184,166,0.12), rgba(249,168,212,0.12))",
  },
  riot: {
    label: "Riot",
    accent: "#22c55e",
    soft: "rgba(34,197,94,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(34,197,94,0.12), rgba(249,168,212,0.11))",
  },
  karma: {
    label: "Karma",
    accent: "#14b8a6",
    soft: "rgba(20,184,166,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(20,184,166,0.13), rgba(249,168,212,0.11))",
  },
  anarchy: {
    label: "Anarchy",
    accent: "#dc2626",
    soft: "rgba(220,38,38,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(220,38,38,0.13), rgba(17,24,39,0.07))",
  },
  mayhem: {
    label: "Mayhem",
    accent: "#a855f7",
    soft: "rgba(168,85,247,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(168,85,247,0.14), rgba(17,24,39,0.07))",
  },
  tball: {
    label: "T-Ball",
    accent: "#ef4444",
    soft: "rgba(239,68,68,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(239,68,68,0.13), rgba(17,24,39,0.08))",
  },
};

const coachingValues = [
  {
    icon: "💪",
    title: "Confidence",
    description:
      "We help athletes recognize their strengths, overcome challenges, and believe in themselves.",
  },
  {
    icon: "🤝",
    title: "Teamwork",
    description:
      "Athletes learn to communicate, support one another, and succeed together.",
  },
  {
    icon: "🎯",
    title: "Discipline",
    description:
      "Consistent effort, preparation, and accountability are part of every practice.",
  },
  {
    icon: "❤️",
    title: "Encouragement",
    description:
      "Our coaches create a positive environment where athletes feel supported and valued.",
  },
];

const teamCounts = [
  {
    value: "12",
    label: "Coaches",
  },
  {
    value: "5",
    label: "Renegades Teams",
  },
  {
    value: "2",
    label: "Sports Programs",
  },
  {
    value: "1",
    label: "Renegades Family",
  },
];

export default function CoachesPage() {
  return (
    <main className="wrap section">
      {/* HERO */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(38px, 8vw, 78px)",
          borderRadius: 31,
          color: "white",
          background:
            "linear-gradient(135deg, #020617 0%, #111827 38%, #7f1d1d 72%, #dc2626 100%)",
          border: "1px solid rgba(220,38,38,0.3)",
          boxShadow: "0 28px 75px rgba(0,0,0,0.26)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 390,
            height: 390,
            top: -235,
            right: -120,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.09)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: 290,
            height: 290,
            bottom: -185,
            left: -105,
            borderRadius: "50%",
            background: "rgba(249,168,212,0.15)",
            filter: "blur(7px)",
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
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "8px 14px",
              marginBottom: 18,
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
                background: "#f9a8d4",
                boxShadow: "0 0 14px rgba(249,168,212,0.95)",
              }}
            />

            Leadership • Mentorship • Family
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 8vw, 76px)",
              lineHeight: 0.97,
              letterSpacing: "-0.045em",
            }}
          >
            Meet Our Coaches
          </h1>

          <p
            style={{
              maxWidth: 760,
              margin: "21px auto 0",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.8,
              opacity: 0.87,
            }}
          >
            Meet the leaders, mentors, and volunteers helping Stateline
            Renegades athletes build confidence, discipline, teamwork, and a
            lifelong love of sports.
          </p>

          <a
            href="#coaching-team"
            className="btn btnPrimary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 235,
              minHeight: 54,
              marginTop: 28,
              padding: "14px 21px",
              textAlign: "center",
              fontWeight: 900,
            }}
          >
            Meet the Coaching Team
          </a>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 185px), 1fr))",
          marginTop: 26,
        }}
      >
        {teamCounts.map((item) => (
          <div
            key={item.label}
            className="card"
            style={{
              minHeight: 155,
              padding: 23,
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
                fontSize: "clamp(36px, 5vw, 48px)",
                lineHeight: 1,
                fontWeight: 950,
                letterSpacing: "-0.04em",
              }}
            >
              {item.value}
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 15,
                fontWeight: 900,
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </section>

      {/* COACHING TEAM */}
      <section id="coaching-team" style={{ marginTop: 43 }}>
        <div
          style={{
            maxWidth: 820,
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
            Renegades Leadership
          </div>

          <h2
            style={{
              margin: "0 0 11px",
              fontSize: "clamp(31px, 5vw, 47px)",
            }}
          >
            Our Coaching Team
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0.74,
            }}
          >
            Each coach brings a unique combination of experience,
            encouragement, commitment, and care to the Renegades organization.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 22,
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 285px), 1fr))",
          }}
        >
          {coaches.map((coach) => {
            const style = teamStyles[coach.team];

            return (
              <article
                key={coach.name}
                className="card"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: 430,
                  padding: 27,
                  borderRadius: 27,
                  border: `1px solid ${style.soft}`,
                  background: style.gradient,
                  boxShadow: "0 15px 40px rgba(0,0,0,0.075)",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: 6,
                    background: style.accent,
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    width: 180,
                    height: 180,
                    top: -105,
                    right: -75,
                    borderRadius: "50%",
                    background: style.soft,
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: 144,
                      height: 144,
                      padding: 6,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${style.accent}, rgba(255,255,255,0.8))`,
                      boxShadow: "0 15px 34px rgba(0,0,0,0.17)",
                    }}
                  >
                    <Image
                      src={coach.image}
                      alt={`${coach.name}, ${coach.role}`}
                      fill
                      sizes="144px"
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "4px solid white",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "7px 13px",
                    borderRadius: 999,
                    background: style.accent,
                    color: "white",
                    fontSize: 11,
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {style.label}
                </div>

                <h3
                  style={{
                    margin: "15px 0 6px",
                    fontSize: "clamp(23px, 4vw, 28px)",
                    lineHeight: 1.1,
                  }}
                >
                  {coach.name}
                </h3>

                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 850,
                    color: style.accent,
                  }}
                >
                  {coach.role}
                </div>

                <div
                  style={{
                    width: 48,
                    height: 3,
                    margin: "17px auto",
                    borderRadius: 999,
                    background: style.accent,
                    opacity: 0.72,
                  }}
                />

                <p
                  style={{
                    margin: 0,
                    fontSize: 15,
                    lineHeight: 1.75,
                    opacity: 0.76,
                  }}
                >
                  “{coach.bio}”
                </p>

                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 22,
                    fontSize: 12,
                    fontWeight: 900,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    color: style.accent,
                  }}
                >
                  Stateline Renegades
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* COACHING VALUES */}
      <section
        className="card"
        style={{
          marginTop: 43,
          padding: "clamp(28px, 6vw, 48px)",
          borderRadius: 29,
          border: "1px solid rgba(20,184,166,0.14)",
          background:
            "linear-gradient(145deg, rgba(20,184,166,0.05), rgba(249,168,212,0.055))",
          boxShadow: "0 15px 40px rgba(0,0,0,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: 800,
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
              background: "rgba(20,184,166,0.11)",
              color: "#14b8a6",
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            How We Lead
          </div>

          <h2
            style={{
              margin: "0 0 11px",
              fontSize: "clamp(30px, 5vw, 45px)",
            }}
          >
            Our Coaching Philosophy
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.75,
              opacity: 0.74,
            }}
          >
            Our goal is to develop strong athletes and confident young people
            through positive coaching, clear expectations, and meaningful
            team experiences.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 18,
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 225px), 1fr))",
          }}
        >
          {coachingValues.map((value) => (
            <div
              key={value.title}
              style={{
                minHeight: 230,
                padding: 23,
                borderRadius: 22,
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(20,184,166,0.12)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  display: "grid",
                  placeItems: "center",
                  width: 64,
                  height: 64,
                  margin: "0 auto 16px",
                  borderRadius: 20,
                  background:
                    "linear-gradient(135deg, rgba(20,184,166,0.15), rgba(249,168,212,0.15))",
                  fontSize: 30,
                }}
              >
                {value.icon}
              </div>

              <h3
                style={{
                  margin: "0 0 9px",
                  fontSize: 20,
                }}
              >
                {value.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.72,
                  opacity: 0.72,
                }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY WE COACH */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 43,
          padding: "clamp(34px, 7vw, 62px)",
          borderRadius: 31,
          color: "white",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #020617 0%, #111827 38%, #0f766e 72%, #14b8a6 100%)",
          boxShadow: "0 27px 70px rgba(0,0,0,0.24)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 315,
            height: 315,
            top: -190,
            right: -100,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 850,
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: 13, fontSize: 47 }}>🏆</div>

          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(32px, 6vw, 52px)",
            }}
          >
            More Than Coaches
          </h2>

          <p
            style={{
              maxWidth: 730,
              margin: "0 auto",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.82,
              opacity: 0.86,
            }}
          >
            We are mentors, supporters, role models, and members of the
            Renegades family. Every practice, game, and competition is an
            opportunity to help an athlete grow.
          </p>
        </div>
      </section>
    </main>
  );
}