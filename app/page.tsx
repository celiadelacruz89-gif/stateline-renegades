"use client";

import Image from "next/image";
import Link from "next/link";
import HeroSlider from "./components/HeroSlider";
import SponsorShowcase from "./components/SponsorShowcase";
import { org, teams, sponsors } from "./lib/data";
import { phoneHref } from "./lib/utils";

export default function HomePage() {
  const cheerTeams = teams.filter((t) => t.id !== "tball");
  const tballTeam = teams.find((t) => t.id === "tball");

  return (
    <>

      <nav>
        <div className="wrap navInner">
          <div className="brand">
            <div className="brandMark" />
            <div className="brandText">
              <b>{org.name}</b>
              <span>One Organization. Five Teams. One Renegade Family.</span>
            </div>
          </div>

          <div className="navLinks">
            <Link className="btn ghost" href="/gallery">
              Gallery
            </Link>
            <a className="btn ghost" href={org.sponsorForm} target="_blank" rel="noreferrer">
              Sponsor
            </a>
            <Link className="btn" href="/admin">
              Admin
            </Link>
          </div>
        </div>
      </nav>

      <main className="wrap section">
        {/* HERO */}
<HeroSlider />
        
        {/* STATS */}
        <section
          style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            marginTop: 18,
          }}
        >
          {[
            ["5", "Programs"],
            ["4", "Cheer Teams"],
            ["1", "T-Ball Program"],
            ["1", "Renegade Family"],
          ].map(([number, label]) => (
            <div key={label} className="card" style={{ padding: 20, textAlign: "center" }}>
              <h2 style={{ margin: 0, fontSize: 38 }}>{number}</h2>
              <p style={{ margin: "6px 0 0", opacity: 0.85 }}>{label}</p>
            </div>
          ))}
        </section>

        {/* PROGRAMS */}
        <section className="sectionTitle" style={{ marginTop: 28 }}>
          <div>
            <h2>Meet Our Teams</h2>
            <p>T-Ball, Anarchy Cheer, Mayhem Cheer, Riot Cheer, and Karma Cheer.</p>
          </div>
        </section>

        <section className="grid2">
          {teams.map((t) => (
            <div key={t.id} className="card programCard">
              <div className="programTop">
                <div>
                  <h3 style={{ margin: 0 }}>{t.name}</h3>
                  <p style={{ margin: "6px 0 0", opacity: 0.9 }}>
                    {t.ages} • {t.colors}
                  </p>
                </div>

                <Image src={t.logo} alt={t.name} width={68} height={68} style={{ borderRadius: 18 }} />
              </div>

              <p style={{ marginTop: 14, opacity: 0.88, lineHeight: 1.7 }}>
                {t.id === "karma" &&
                  "Our youngest cheer athletes learn confidence, coordination, teamwork, and the basics of cheer in a fun and positive environment."}
                {t.id === "riot" &&
                  "A high-energy cheer team focused on performance, discipline, skill-building, and strong team bonds."}
                {t.id === "anarchy" &&
                  "A competitive cheer team built for athletes ready to grow, perform, and push toward higher-level routines."}
                {t.id === "mayhem" &&
                  "A bold cheer program focused on athlete growth, confidence, performance quality, and exciting progression."}
                {t.id === "tball" &&
                  "A beginner-friendly baseball program that teaches fundamentals, sportsmanship, confidence, and teamwork."}
              </p>

              <div className="programActions" style={{ marginTop: 14 }}>
                {t.registration ? (
                  <a className="btn" href={t.registration} target="_blank" rel="noreferrer">
                    Register
                  </a>
                ) : (
                  <span className="pill subtle">Registration coming soon</span>
                )}

                <Link className="btn ghost" href={`/gallery/${t.id}`}>
                  Photos
                </Link>

                {t.cashApp ? (
                  <button className="btn ghost" onClick={() => navigator.clipboard.writeText(t.cashApp!)}>
                    Copy CashApp
                  </button>
                ) : null}
              </div>

              <div className="divider" />

              <div>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Contacts</div>
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
              </div>

              {t.id === "tball" ? (
                <>
                  <div className="divider" />
                  <div>
                    <div style={{ fontWeight: 800, marginBottom: 8 }}>T-Ball Merch</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      <a className="btn ghost" href={org.tballMerch.players} target="_blank" rel="noreferrer">
                        Players
                      </a>
                      <a className="btn ghost" href={org.tballMerch.parentFamily} target="_blank" rel="noreferrer">
                        Parent / Family
                      </a>
                      <a className="btn ghost" href={org.tballMerch.coach} target="_blank" rel="noreferrer">
                        Coaches
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </section>

        {/* WHY FAMILIES CHOOSE US */}
        <section className="sectionTitle" style={{ marginTop: 28 }}>
          <div>
            <h2>Why Families Choose Stateline Renegades</h2>
            <p>A positive youth sports organization built around family, growth, and opportunity.</p>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {[
            ["Family First", "We create a supportive environment where athletes feel encouraged, valued, and confident."],
            ["Affordable Programs", "We believe youth sports should be accessible without unnecessary hidden fees."],
            ["Character Development", "Athletes build discipline, teamwork, responsibility, leadership, and confidence."],
            ["Community Impact", "Sponsors, fundraisers, and family support help create more opportunities for every athlete."],
          ].map(([title, text]) => (
            <div key={title} className="card" style={{ padding: 18 }}>
              <h3 style={{ marginTop: 0, marginBottom: 8 }}>{title}</h3>
              <p style={{ margin: 0, opacity: 0.85, lineHeight: 1.7 }}>{text}</p>
            </div>
          ))}
        </section>

        {/* REGISTRATION */}
        <section className="card" style={{ padding: 22, marginTop: 22 }}>
          <h2 style={{ marginTop: 0 }}>Ready to Join?</h2>
          <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
            Choose the program that fits your athlete and complete the registration form.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <a className="btn" href={org.karmaRiotRegistration} target="_blank" rel="noreferrer">
              Karma / Riot Registration
            </a>

            {cheerTeams
              .filter((t) => t.id === "anarchy" || t.id === "mayhem")
              .map((t) =>
                t.registration ? (
                  <a key={t.id} className="btn ghost" href={t.registration} target="_blank" rel="noreferrer">
                    {t.name} Registration
                  </a>
                ) : null
              )}

            <a className="btn ghost" href={org.tballRegistration} target="_blank" rel="noreferrer">
              T-Ball Registration
            </a>
          </div>
        </section>

        {/* GALLERY */}
        <section className="sectionTitle" style={{ marginTop: 28 }}>
          <div>
            <h2>Team Galleries</h2>
            <p>View photos, highlights, events, and special moments from each team.</p>
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          <Link
            href="/gallery/org"
            className="card"
            style={{ padding: 16, textDecoration: "none", color: "inherit", borderRadius: 20 }}
          >
            <div style={{ fontWeight: 900 }}>Organization Gallery</div>
            <div style={{ fontSize: 13, opacity: 0.8 }}>Events • Banquets • Community</div>
          </Link>

          {teams.map((t) => (
            <Link
              key={`gallery-${t.id}`}
              href={`/gallery/${t.id}`}
              className="card"
              style={{ padding: 16, textDecoration: "none", color: "inherit", borderRadius: 20 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <Image src={t.logo} alt={t.name} width={54} height={54} style={{ borderRadius: 14 }} />
                <div>
                  <div style={{ fontWeight: 900 }}>{t.name}</div>
                  <div style={{ fontSize: 13, opacity: 0.8 }}>Open gallery</div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* SPONSORS */}
        <SponsorShowcase sponsors={sponsors} sponsorForm={org.sponsorForm} />

        <section className="card" style={{ padding: 22, marginTop: 18 }}>
          <h2 style={{ marginTop: 0 }}>Sponsors & Donations</h2>
          <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
            Community support helps provide equipment, uniforms, events, training opportunities, and program
            growth for our athletes.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
            <a className="btn" href={org.sponsorForm} target="_blank" rel="noreferrer">
              Sponsor Application Form
            </a>

            <button className="btn ghost" onClick={() => navigator.clipboard.writeText("$statelinerenegades")}>
              Copy $statelinerenegades
            </button>

            <button className="btn ghost" onClick={() => navigator.clipboard.writeText("$RenegadesBB")}>
              Copy $RenegadesBB
            </button>

            <button className="btn ghost" onClick={() => navigator.clipboard.writeText("$renegadescheerteam")}>
              Copy $renegadescheerteam
            </button>
          </div>
        </section>

        {/* FUNDRAISERS */}
        <section className="card" style={{ padding: 22, marginTop: 18 }}>
          <h2 style={{ marginTop: 0 }}>Current Fundraisers</h2>
          <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
            Fundraisers help our athletes with uniforms, equipment, travel, events, and program needs.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {"jjFundraiser" in org ? (
              <a className="btn" href={(org as any).jjFundraiser} target="_blank" rel="noreferrer">
                JJ Carne Seca Fundraiser
              </a>
            ) : null}

            <a className="btn ghost" href={org.sponsorForm} target="_blank" rel="noreferrer">
              Support as a Sponsor
            </a>
          </div>
        </section>

        {/* MISSION */}
        <section className="card" style={{ padding: 24, marginTop: 18 }}>
          <h2 style={{ marginTop: 0 }}>Our Mission</h2>
          <p style={{ opacity: 0.9, lineHeight: 1.8, fontSize: 17, marginBottom: 0 }}>
            Stateline Renegades exists to provide youth athletes with a positive environment where they can
            grow through sports, build confidence, develop leadership skills, and create lifelong friendships.
          </p>
        </section>

        {/* CONTACT */}
        <section
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            marginTop: 18,
          }}
        >
          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0 }}>Cheer Contacts</h3>
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
            <h3 style={{ marginTop: 0 }}>T-Ball Contacts</h3>
            {tballTeam ? (
              <div style={{ display: "grid", gap: 8 }}>
                {tballTeam.contacts.map((c) => (
                  <a key={c.phone} href={phoneHref(c.phone)} style={{ textDecoration: "underline" }}>
                    {c.name} — {c.phone}
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div className="card" style={{ padding: 18 }}>
            <h3 style={{ marginTop: 0 }}>Stay Connected</h3>
            <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
              Follow updates, photos, registration announcements, fundraisers, and community events.
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
        </section>

        {/* FOOTER */}
        <footer className="card" style={{ padding: 22, marginTop: 22, marginBottom: 20 }}>
          <div
            style={{
              display: "grid",
              gap: 18,
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            }}
          >
            <div>
              <h3 style={{ marginTop: 0 }}>Stateline Renegades</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: 0 }}>
                T-Ball • Anarchy Cheer • Mayhem Cheer • Riot Cheer • Karma Cheer
              </p>
            </div>

            <div>
              <h3 style={{ marginTop: 0 }}>Quick Links</h3>
              <div style={{ display: "grid", gap: 8 }}>
                <Link href="/gallery">Gallery</Link>
                <a href={org.sponsorForm} target="_blank" rel="noreferrer">
                  Sponsors
                </a>
                <a href={org.karmaRiotRegistration} target="_blank" rel="noreferrer">
                  Cheer Registration
                </a>
                <a href={org.tballRegistration} target="_blank" rel="noreferrer">
                  T-Ball Registration
                </a>
              </div>
            </div>

            <div>
              <h3 style={{ marginTop: 0 }}>Renegade Family</h3>
              <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: 0 }}>
                Building strong athletes, confident kids, and a positive sports community.
              </p>
            </div>
          </div>

          <div className="divider" />

          <p style={{ margin: 0, opacity: 0.7 }}>© 2026 Stateline Renegades. All rights reserved.</p>
        </footer>
      </main>
  </>
);
}
