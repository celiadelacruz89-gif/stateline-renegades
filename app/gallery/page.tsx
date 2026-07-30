import Link from "next/link";

const galleries = [
  {
    title: "Organization Gallery",
    shortTitle: "Organization",
    description:
      "Community events, banquets, fundraisers, celebrations, and memories from across the Stateline Renegades organization.",
    details: "Events • Banquets • Community • Fundraisers",
    href: "/gallery/org",
    icon: "📸",
    accent: "#14b8a6",
    softAccent: "rgba(20,184,166,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(20,184,166,0.14), rgba(249,168,212,0.08))",
    featured: true,
  },
  {
    title: "Riot & Karma Gallery",
    shortTitle: "Riot / Karma",
    description:
      "Practice moments, competition highlights, team celebrations, and memories from our local travel cheer teams.",
    details: "Practices • Competitions • Team Memories",
    href: "/gallery/riot-karma",
    icon: "🩷",
    accent: "#14b8a6",
    softAccent: "rgba(20,184,166,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(20,184,166,0.14), rgba(249,168,212,0.14))",
    featured: false,
  },
  {
    title: "Anarchy Gallery",
    shortTitle: "Anarchy",
    description:
      "Full travel team performances, competition highlights, training moments, and unforgettable Anarchy memories.",
    details: "Travel Team • Events • Performances",
    href: "/gallery/anarchy",
    icon: "❤️",
    accent: "#dc2626",
    softAccent: "rgba(220,38,38,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(220,38,38,0.15), rgba(17,24,39,0.08))",
    featured: false,
  },
  {
    title: "Mayhem Gallery",
    shortTitle: "Mayhem",
    description:
      "Competition highlights, practices, performances, and team memories from our full travel Mayhem athletes.",
    details: "Full Travel • Practices • Competitions",
    href: "/gallery/mayhem",
    icon: "💜",
    accent: "#a855f7",
    softAccent: "rgba(168,85,247,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(168,85,247,0.15), rgba(17,24,39,0.08))",
    featured: false,
  },
  {
    title: "T-Ball Gallery",
    shortTitle: "T-Ball",
    description:
      "Game-day action, practices, player milestones, team celebrations, and favorite moments from the ball field.",
    details: "Games • Practices • Player Highlights",
    href: "/gallery/tball",
    icon: "⚾",
    accent: "#dc2626",
    softAccent: "rgba(220,38,38,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(220,38,38,0.14), rgba(0,0,0,0.09))",
    featured: false,
  },
  {
    title: "Video Gallery",
    shortTitle: "Videos",
    description:
      "Watch team performances, competition clips, highlights, reels, and special moments from Stateline Renegades.",
    details: "Highlights • Reels • Performances",
    href: "/gallery/videos",
    icon: "🎥",
    accent: "#f59e0b",
    softAccent: "rgba(245,158,11,0.16)",
    gradient:
      "linear-gradient(145deg, rgba(245,158,11,0.15), rgba(220,38,38,0.08))",
    featured: false,
  },
];

const highlights = [
  {
    number: "5",
    label: "Team Galleries",
  },
  {
    number: "1",
    label: "Video Collection",
  },
  {
    number: "100+",
    label: "Renegades Memories",
  },
  {
    number: "1",
    label: "Renegades Family",
  },
];

export default function GalleryPage() {
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
            "linear-gradient(135deg, #020617 0%, #111827 38%, #0f766e 72%, #14b8a6 100%)",
          border: "1px solid rgba(20,184,166,0.25)",
          boxShadow: "0 28px 75px rgba(0,0,0,0.25)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 390,
            height: 390,
            top: -235,
            right: -115,
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
            background: "rgba(249,168,212,0.17)",
            filter: "blur(6px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            maxWidth: 880,
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

            Renegades Memories
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(42px, 8vw, 76px)",
              lineHeight: 0.97,
              letterSpacing: "-0.045em",
            }}
          >
            Our Story in Photos & Video
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
            Explore practices, games, competitions, celebrations, community
            events, and unforgettable moments from across the Stateline
            Renegades organization.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 12,
              marginTop: 28,
            }}
          >
            <a
              href="#gallery-collections"
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
              Explore Galleries
            </a>

            <Link
              href="/gallery/videos"
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
                border: "1px solid rgba(255,255,255,0.21)",
                textAlign: "center",
                fontWeight: 900,
              }}
            >
              Watch Videos
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY STATS */}
      <section
        style={{
          display: "grid",
          gap: 16,
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 185px), 1fr))",
          marginTop: 26,
        }}
      >
        {highlights.map((item) => (
          <div
            key={item.label}
            className="card"
            style={{
              minHeight: 155,
              padding: 23,
              borderRadius: 23,
              border: "1px solid rgba(20,184,166,0.13)",
              background:
                "linear-gradient(145deg, rgba(20,184,166,0.045), rgba(249,168,212,0.045))",
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
              {item.number}
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

      {/* GALLERY COLLECTIONS */}
      <section id="gallery-collections" style={{ marginTop: 43 }}>
        <div
          style={{
            maxWidth: 820,
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
            Choose a Collection
          </div>

          <h2
            style={{
              margin: "0 0 11px",
              fontSize: "clamp(31px, 5vw, 47px)",
            }}
          >
            Explore the Renegades Gallery
          </h2>

          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.75,
              opacity: 0.74,
            }}
          >
            Select an organization, team, or video collection to view more
            highlights and memories.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 315px), 1fr))",
          }}
        >
          {galleries.map((gallery) => (
            <Link
              key={gallery.href}
              href={gallery.href}
              className="card"
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: 380,
                padding: 27,
                borderRadius: 27,
                textDecoration: "none",
                color: "inherit",
                border: gallery.featured
                  ? `2px solid ${gallery.accent}`
                  : `1px solid ${gallery.softAccent}`,
                background: gallery.gradient,
                boxShadow: gallery.featured
                  ? "0 20px 52px rgba(20,184,166,0.14)"
                  : "0 14px 38px rgba(0,0,0,0.075)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: 205,
                  height: 205,
                  top: -120,
                  right: -80,
                  borderRadius: "50%",
                  background: gallery.softAccent,
                  pointerEvents: "none",
                }}
              />

              {gallery.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 19,
                    right: -39,
                    width: 155,
                    padding: "7px 0",
                    background: gallery.accent,
                    color: "#04111a",
                    textAlign: "center",
                    fontSize: 10,
                    fontWeight: 950,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    transform: "rotate(39deg)",
                  }}
                >
                  Featured
                </div>
              )}

              <div style={{ position: "relative" }}>
                <div
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: 74,
                    height: 74,
                    marginBottom: 22,
                    borderRadius: 23,
                    background: gallery.softAccent,
                    border: `1px solid ${gallery.softAccent}`,
                    fontSize: 35,
                    boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                  }}
                >
                  {gallery.icon}
                </div>

                <div
                  style={{
                    marginBottom: 8,
                    color: gallery.accent,
                    fontSize: 11,
                    fontWeight: 950,
                    letterSpacing: "0.13em",
                    textTransform: "uppercase",
                  }}
                >
                  {gallery.shortTitle}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: "clamp(24px, 4vw, 29px)",
                    lineHeight: 1.1,
                  }}
                >
                  {gallery.title}
                </h3>

                <p
                  style={{
                    margin: "15px 0 0",
                    fontSize: 14,
                    lineHeight: 1.72,
                    opacity: 0.74,
                  }}
                >
                  {gallery.description}
                </p>

                <div
                  style={{
                    marginTop: 18,
                    fontSize: 12,
                    lineHeight: 1.6,
                    fontWeight: 850,
                    letterSpacing: "0.025em",
                    color: gallery.accent,
                  }}
                >
                  {gallery.details}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  marginTop: "auto",
                  paddingTop: 25,
                }}
              >
                <span
                  className="btn"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 48,
                    padding: "12px 18px",
                    fontWeight: 900,
                  }}
                >
                  View Gallery
                </span>

                <span
                  aria-hidden="true"
                  style={{
                    display: "grid",
                    placeItems: "center",
                    width: 43,
                    height: 43,
                    flex: "0 0 auto",
                    borderRadius: "50%",
                    background: gallery.softAccent,
                    color: gallery.accent,
                    fontSize: 22,
                    fontWeight: 900,
                  }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MEMORY FEATURE */}
      <section
        className="card"
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 43,
          padding: "clamp(28px, 6vw, 48px)",
          borderRadius: 29,
          border: "1px solid rgba(249,168,212,0.16)",
          background:
            "linear-gradient(145deg, rgba(249,168,212,0.075), rgba(20,184,166,0.055))",
          boxShadow: "0 15px 40px rgba(0,0,0,0.07)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            right: -120,
            bottom: -150,
            borderRadius: "50%",
            background: "rgba(249,168,212,0.11)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            alignItems: "center",
            gap: 30,
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "7px 13px",
                marginBottom: 12,
                borderRadius: 999,
                background: "rgba(249,168,212,0.15)",
                color: "#ec4899",
                fontSize: 12,
                fontWeight: 900,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              More Than Sports
            </div>

            <h2
              style={{
                margin: "0 0 13px",
                fontSize: "clamp(30px, 5vw, 45px)",
              }}
            >
              Celebrating Every Step of the Journey
            </h2>

            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.78,
                opacity: 0.74,
              }}
            >
              The Renegades gallery captures more than wins and performances.
              It celebrates teamwork, growth, friendships, family support, and
              the moments our athletes will remember for years to come.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: 13,
            }}
          >
            {[
              "Athlete milestones and achievements",
              "Team celebrations and special events",
              "Competition and game-day highlights",
              "Community involvement and family memories",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 17,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(20,184,166,0.12)",
                  fontSize: 14,
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
                    background: "rgba(20,184,166,0.14)",
                    color: "#14b8a6",
                    fontWeight: 950,
                  }}
                >
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          marginTop: 43,
          padding: "clamp(36px, 7vw, 64px)",
          borderRadius: 31,
          color: "white",
          textAlign: "center",
          background:
            "linear-gradient(135deg, #020617 0%, #111827 40%, #7f1d1d 75%, #dc2626 100%)",
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
            maxWidth: 820,
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: 13, fontSize: 47 }}>📸</div>

          <h2
            style={{
              margin: "0 0 14px",
              fontSize: "clamp(32px, 6vw, 52px)",
            }}
          >
            Renegades Memories Start Here
          </h2>

          <p
            style={{
              maxWidth: 700,
              margin: "0 auto",
              fontSize: "clamp(16px, 2vw, 19px)",
              lineHeight: 1.8,
              opacity: 0.85,
            }}
          >
            Visit each team gallery to celebrate the athletes, coaches,
            families, and community that make Stateline Renegades special.
          </p>

          <a
            href="#gallery-collections"
            className="btn btnPrimary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 245,
              minHeight: 56,
              marginTop: 26,
              padding: "15px 23px",
              textAlign: "center",
              fontWeight: 900,
            }}
          >
            Browse All Galleries
          </a>
        </div>
      </section>
    </main>
  );
}