"use client";

import Image from "next/image";
import Link from "next/link";
import { org, teams } from "./lib/data";
import { phoneHref } from "./lib/utils";
import SponsorShowcase from "./Components/SponsorShowcase";

export default function HomePage() {
  return (
    <div>
      {/* Top Nav */}
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
            <Link className="btn" href="/admin">
              Admin Controls
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="wrap section">
        <div className="card hero">
          <div>
            <h1 style={{ marginTop: 0, marginBottom: 8 }}>{org.name}</h1>
            <p style={{ marginTop: 0, opacity: 0.9 }}>
              {org.tagline}. Registration, CashApp, contacts, sponsor form, and T-Ball merch — all
              in one place.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
              <a className="btn" href={org.sponsorForm} target="_blank" rel="noreferrer">
                Sponsor Application
              </a>
              <a className="btn ghost" href={org.karmaRiotRegistration} target="_blank" rel="noreferrer">
                Karma/Riot Registration
              </a>
              <a className="btn ghost" href={org.tballRegistration} target="_blank" rel="noreferrer">
                T-Ball Registration
              </a>
              <Link className="btn ghost" href="/gallery">
                View Gallery
              </Link>
            </div>
          </div>

          <div className="heroLogos">
            {teams.map((t) => (
              <div key={t.id} className="logoPill">
                <Image src={t.logo} alt={t.name} width={46} height={46} style={{ borderRadius: 12 }} />
                <div>
                  <div style={{ fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: 12, opacity: 0.85 }}>{t.colors}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Teams */}
        <div className="sectionTitle" style={{ marginTop: 18 }}>
          <div>
            <h2>Teams</h2>
            <p>Tap a button to register, donate, or contact a coach/team mom.</p>
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

              <div className="programActions">
                {t.registration ? (
                  <a className="btn" href={t.registration} target="_blank" rel="noreferrer">
                    Register
                  </a>
                ) : (
                  <span className="pill subtle">Registration link coming soon</span>
                )}

                {t.cashApp ? (
                  <button
                    className="btn ghost"
                    onClick={() => navigator.clipboard.writeText(t.cashApp!)}
                    title="Copy CashApp"
                  >
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
                      <a className="btn ghost" href={org.tballMerch.parentFamily} target="_blank" rel="noreferrer">
                        Parent/Family Order Form
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

        {/* Sponsors carousel */}
        <SponsorShowcase />

        {/* Sponsor + Quick Donate */}
        <div className="card" style={{ padding: 18, marginTop: 18 }}>
          <div className="sectionTitle" style={{ margin: 0 }}>
            <div>
              <h2 style={{ marginTop: 0 }}>Sponsors & Donations</h2>
              <p style={{ marginBottom: 0 }}>
                Support our kids with sponsorships and donations. Thank you for helping the Stateline
                Renegades grow.
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
              Copy $renegadescheerteam (Anarchy)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
