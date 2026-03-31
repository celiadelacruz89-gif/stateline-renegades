"use client";

import Image from "next/image";
import Link from "next/link";
import SponsorShowcase from "./components/SponsorShowcase";
import { org, teams, sponsors } from "./lib/data";
import { phoneHref } from "./lib/utils";

export default function HomePage() {
  return (
    <div>
      <nav>
        <div className="wrap navInner">
          <div className="brand">
            <div className="brandMark" />
            <div className="brandText">
              <b>{org.name}</b> <span>{org.tagline}</span>
            </div>
          </div>

          <div className="navLinks">
            <Link className="btn ghost" href="/gallery">
              Gallery
            </Link>
            <a className="btn ghost" href={org.sponsorForm} target="_blank" rel="noreferrer">
              Sponsor Form
            </a>
            <Link className="btn" href="/admin">
              Admin Controls
            </Link>
          </div>
        </div>
      </nav>

      <div className="wrap section">
        <div
          className="card"
          style={{
            padding: 24,
            display: "grid",
            gap: 18,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            alignItems: "center",
          }}
        >
          <div>
            <div
              className="pill"
              style={{
                display: "inline-flex",
                marginBottom: 12,
                fontWeight: 700,
              }}
            >
              Building athletes, confidence, and community
            </div>

            <h1 style={{ marginTop: 0, marginBottom: 10, fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.05 }}>
              {org.name}
            </h1>

            <p style={{ marginTop: 0, opacity: 0.9, fontSize: 18, lineHeight: 1.7, maxWidth: 720 }}>
              {org.tagline}. Cheer, T-Ball, team growth, family involvement, fundraising, and community
              support — all in one place.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 18 }}>
              <a className="btn" href={org.sponsorForm} target="_blank" rel="noreferrer">
                Sponsor Application
              </a>

              <a className="btn ghost" href={org.karmaRiotRegistration} target="_blank" rel="noreferrer">
                Karma / Riot Registration
              </a>

              <a className="btn ghost" href={org.tballRegistration} target="_blank" rel="noreferrer">
                T-Ball Registration
              </a>

              <Link className="btn ghost" href="/gallery">
                View Gallery
              </Link>

              {"jjFundraiser" in org ? (
                <a className="btn ghost" href={(org as any).jjFundraiser} target="_blank" rel="noreferrer">
                  JJ Carne Seca Fundraiser
                </a>
              ) : null}
            </div>
          </div>

          <div
            className="card"
            style={{
              padding: 18,
              borderRadius: 24,
            }}
          >
            <div style={{ fontWeight: 800, marginBottom: 12, fontSize: 18 }}>Our Programs</div>

            <div style={{ display: "grid", gap: 12 }}>
              {teams.map((t) => (
                <div
                  key={t.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: 12,
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Image
                    src={t.logo}
                    alt={t.name}
                    width={56}
                    height={56}
                    style={{ borderRadius: 14, objectFit: "cover" }}
                  />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 800 }}>{t.name}</div>
                    <div style={{ fontSize: 13, opacity: 0.8 }}>
                      {t.ages} • {t.colors}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            marginTop: 18,
          }}
        >
          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Why Families Join</h3>
            <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7 }}>
              We create a positive environment where athletes build confidence, discipline, teamwork, and
              leadership.
            </p>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Competitive & Beginner Options</h3>
            <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7 }}>
              From beginner programs to full-travel teams, athletes have room to learn, perform, and grow.
            </p>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0, marginBottom: 8 }}>Community Impact</h3>
            <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7 }}>
              Fundraising, sponsorships, and support help us strengthen opportunities for every child in the
              program.
            </p>
          </div>
        </div>

        <div className="sectionTitle" style={{ marginTop: 24 }}>
          <div>
            <h2>Teams</h2>
            <p>Explore each team, register, view photos, donate, and connect with coaches.</p>
          </div>
        </div>

        <div className="grid2">
          {teams.map((t) => (
            <div key={t.id} className="card programCard">
              <div className="programTop">
                <div>
                  <h3 style={{ margin: 0 }}>{t.name}</h3>
                  <p style={{ margin: "6px 0 0 0", opacity: 0.9 }}>
                    {t.ages} • {t.colors}
                  </p>
                </div>
                <Image src={t.logo} alt={t.name} width={62} height={62} style={{ borderRadius: 16 }} />
              </div>

              <div style={{ marginTop: 8, opacity: 0.88, lineHeight: 1.7 }}>
                {t.id === "karma" &&
                  "A strong start for younger athletes to build confidence, coordination, and a love for cheer."}
                {t.id === "riot" &&
                  "A high-energy program designed for athletes ready to grow in performance, teamwork, and skill."}
                {t.id === "anarchy" &&
                  "A full-travel competitive team for athletes pursuing high-level performance and strong routines."}
                {t.id === "mayhem" &&
                  "A bold and competitive team focused on growth, performance quality, and exciting progression."}
                {t.id === "tball" &&
                  "A fun and supportive baseball program that develops fundamentals, confidence, and sportsmanship."}
              </div>

              <div className="programActions" style={{ marginTop: 14 }}>
                {t.registration ? (
                  <a className="btn" href={t.registration} target="_blank" rel="noreferrer">
                    Register
                  </a>
                ) : (
                  <span className="pill subtle">Registration link coming soon</span>
                )}

                {t.cashApp ? (
                  <button className="btn ghost" onClick={() => navigator.clipboard.writeText(t.cashApp!)}>
                    Copy CashApp
                  </button>
                ) : (
                  <span className="pill subtle">CashApp coming soon</span>
                )}

                <Link className="btn ghost" href={`/gallery/${t.id}`}>
                  Photos
                </Link>
              </div>

              <div className="divider" />

              <div>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>Contacts</div>
                <ul style={{ margin: 0, paddingLeft: 18 }}>
                  {t.contacts.map((c) => (
                    <li key={`${t.id}-${c.name}-${c.phone}`}>
                      <b>{c.name}</b>{" "}
                      <a href={phoneHref(c.phone)} style={{ textDecoration: "underline" }}>
                        {c.phone}
                      </a>
                    </li>
                  ))}
                </ul>

                {t.cashApp ? (
                  <p style={{ marginTop: 12, marginBottom: 0 }}>
                    <b>CashApp:</b> {t.cashApp}
                  </p>
                ) : null}
              </div>

              {t.id === "tball" ? (
                <>
                  <div className="divider" />
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 8 }}>T-Ball Merch</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      <a className="btn ghost" href={org.tballMerch.players} target="_blank" rel="noreferrer">
                        Players Order Form
                      </a>
                      <a
                        className="btn ghost"
                        href={org.tballMerch.parentFamily}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Parent / Family Order Form
                      </a>
                      <a className="btn ghost" href={org.tballMerch.coach} target="_blank" rel="noreferrer">
                        Coach Order Form
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>

        <div className="sectionTitle" style={{ marginTop: 24 }}>
          <div>
            <h2>Latest Highlights</h2>
            <p>Visit each gallery to see team photos, event moments, and uploaded media.</p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {teams.map((t) => (
            <Link
              key={`gallery-${t.id}`}
              href={`/gallery/${t.id}`}
              className="card"
              style={{
                padding: 16,
                textDecoration: "none",
                color: "inherit",
                borderRadius: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Image src={t.logo} alt={t.name} width={54} height={54} style={{ borderRadius: 14 }} />
                <div>
                  <div style={{ fontWeight: 800 }}>{t.name}</div>
                  <div style={{ fontSize: 13, opacity: 0.8 }}>Open gallery</div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <SponsorShowcase sponsors={sponsors} sponsorForm={org.sponsorForm} />

        <div className="card" style={{ padding: 18, marginTop: 18 }}>
          <div className="sectionTitle" style={{ margin: 0 }}>
            <div>
              <h2 style={{ marginTop: 0 }}>Sponsors & Donations</h2>
              <p style={{ marginBottom: 0 }}>
                Support our athletes through sponsorships and donations that help with equipment,
                opportunities, training resources, and program growth.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
            <a className="btn" href={org.sponsorForm} target="_blank" rel="noreferrer">
              Sponsor Application Form
            </a>

            <button className="btn ghost" onClick={() => navigator.clipboard.writeText("$statelinerenegades")}>
              Copy $statelinerenegades (Karma/Riot)
            </button>

            <button className="btn ghost" onClick={() => navigator.clipboard.writeText("$RenegadesBB")}>
              Copy $RenegadesBB (T-Ball)
            </button>

            <button className="btn ghost" onClick={() => navigator.clipboard.writeText("$renegadescheerteam")}>
              Copy $renegadescheerteam (Anarchy/Mayhem)
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            marginTop: 18,
          }}
        >
          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0 }}>Coach Contacts</h3>
            <p style={{ opacity: 0.85, lineHeight: 1.7, marginBottom: 10 }}>
              Reach out directly for registration questions, program details, and team information.
            </p>
            <div style={{ display: "grid", gap: 8 }}>
              <a href={phoneHref("915-352-9033")} style={{ textDecoration: "underline" }}>
                Coach Celia — 915-352-9033
              </a>
              <a href={phoneHref("915-472-0190")} style={{ textDecoration: "underline" }}>
                Coach Andy — 915-472-0190
              </a>
              <a href={phoneHref("915-803-9442")} style={{ textDecoration: "underline" }}>
                Jennifer Billesbach — 915-803-9442
              </a>
            </div>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0 }}>Why Sponsors Matter</h3>
            <p style={{ opacity: 0.85, lineHeight: 1.7, marginBottom: 0 }}>
              Sponsorships help us create better opportunities for young athletes through facility support,
              mats, uniforms, events, and program expansion.
            </p>
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0 }}>Stay Connected</h3>
            <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
              Follow team highlights, community events, and gallery updates to stay connected with the
              Stateline Renegades family.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <Link className="btn" href="/gallery">
                Open Gallery
              </Link>
              <a className="btn ghost" href={org.sponsorForm} target="_blank" rel="noreferrer">
                Sponsor Form
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
