// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { org, teams } from "./lib/data";
import { phoneHref } from "./lib/utils";

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
              {org.tagline}. Registration, CashApp, contacts, sponsor form, and
              T-Ball merch — all in one place.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
              <a className="btn" href={org.sponsorForm} target="_blank">
                Sponsor Application
              </a>
              <a className="btn ghost" href={org.karmaRiotRegistration} target="_blank">
                Karma/Riot Registration
              </a>
              <a className="btn ghost" href={org.tballRegistration} target="_blank">
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
                <Image
                  src={t.logo}
                  alt={t.name}
                  width={46}
                  height={46}
                  style={{ borderRadius: 12 }}
                />
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
                <Image
                  src={t.logo}
                  alt={t.name}
                  width={62}
                  height={62}
                  style={{ borderRadius: 16 }}
                />
              </div>

              <div className="programActions">
                {t.registration ? (
                  <a className="btn" href={t.registration} target="_blank">
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
                      <a
                        href={phoneHref(c.phone)}
                        style={{ textDecoration: "underline" }}
                      >
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
                      <a className="btn ghost" href={org.tballMerch.players} target="_blank">
                        Players Order Form
                      </a>
                      <a
                        className="btn ghost"
                        href={org.tballMerch.parentFamily}
                        target="_blank"
                      >
                        Parent/Family Order Form
                      </a>
                      <a className="btn ghost" href={org.tballMerch.coach} target="_blank">
                        Coach Order Form
                      </a>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </div>

        {/* Sponsor + Quick Donate */}
        <div className="card" style={{ padding: 18, marginTop: 18 }}>
          <div className="sectionTitle" style={{ margin: 0 }}>
            <div>
              <h2 style={{ marginTop: 0 }}>Sponsors & Donations</h2>
              <p style={{ marginBottom: 0 }}>
                Support our kids with sponsorships and donations. Thank you for helping
                the Stateline Renegades grow.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 12 }}>
            <a className="btn" href={org.sponsorForm} target="_blank">
              Sponsor Application Form
            </a>
            <button
              className="btn ghost"
              onClick={() => navigator.clipboard.writeText("$statelinerenegades")}
              title="Copy CashApp"
            >
              Copy $statelinerenegades (Karma/Riot)
            </button>
            <button
              className="btn ghost"
              onClick={() => navigator.clipboard.writeText("$RenegadesBB")}
              title="Copy CashApp"
            >
              Copy $RenegadesBB (T-Ball)
            </button>
            <button
              className="btn ghost"
              onClick={() => navigator.clipboard.writeText("$renegadescheerteam")}
              title="Copy CashApp"
            >
              Copy $renegadescheerteam (Anarchy)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   ELITE Sponsor Showcase
   ========================= */
<SponsorShowcase sponsors={sponsors} />
.sponsorWrap {
  margin-top: 22px;
  padding: 18px 18px 10px;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: radial-gradient(1200px 500px at 20% 0%, rgba(255,255,255,0.08), transparent 60%),
              linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03));
}

.sponsorHeader {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 12px;
}

.sponsorHeader h2 {
  margin: 0;
  font-size: 20px;
  letter-spacing: 0.2px;
}

.sponsorHeader p {
  margin: 6px 0 0;
  opacity: 0.85;
  font-size: 13px;
}

.sponsorCta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  border: 1px solid rgba(255,255,255,0.16);
  background: linear-gradient(180deg, rgba(255,255,255,0.14), rgba(255,255,255,0.06));
  transition: transform .15s ease, filter .15s ease;
}

.sponsorCta:hover {
  transform: translateY(-1px);
  filter: brightness(1.06);
}

.sponsorRail {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(0,0,0,0.10);
  padding: 14px 0;
}

/* Edge fades */
.sponsorFadeLeft,
.sponsorFadeRight {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 70px;
  z-index: 2;
  pointer-events: none;
}

.sponsorFadeLeft {
  left: 0;
  background: linear-gradient(90deg, rgba(10,10,12,0.95), rgba(10,10,12,0.0));
}

.sponsorFadeRight {
  right: 0;
  background: linear-gradient(270deg, rgba(10,10,12,0.95), rgba(10,10,12,0.0));
}

/* Track animation */
.sponsorTrack {
  display: flex;
  gap: 14px;
  width: max-content;
  padding: 0 70px; /* keeps cards visible behind fades */
  animation: sponsorMarquee 26s linear infinite;
}

.sponsorRail:hover .sponsorTrack {
  animation-play-state: paused;
}

@keyframes sponsorMarquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.sponsorLink {
  text-decoration: none;
  color: inherit;
}

.sponsorCard {
  width: 210px;
  min-width: 210px;
  height: 120px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,0.10);
  background: linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05));
  box-shadow: 0 10px 30px rgba(0,0,0,0.22);
  display: grid;
  grid-template-rows: 1fr auto;
  padding: 12px;
  transition: transform .18s ease, filter .18s ease, border-color .18s ease;
}

.sponsorLink:hover .sponsorCard {
  transform: translateY(-2px) scale(1.01);
  filter: brightness(1.05);
  border-color: rgba(255,255,255,0.18);
}

.sponsorLogoBox {
  position: relative;
  border-radius: 12px;
  background: rgba(0,0,0,0.12);
  overflow: hidden;
}

.sponsorName {
  margin-top: 8px;
  font-size: 12px;
  font-weight: 700;
  opacity: 0.92;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* CTA card styling */
.sponsorCtaCard {
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  align-items: start;
  text-align: left;
  padding: 14px;
}

.sponsorCtaIcon {
  font-size: 18px;
  opacity: 0.95;
}

.sponsorCtaTitle {
  margin-top: 6px;
  font-size: 14px;
  font-weight: 900;
}

.sponsorCtaSub {
  margin-top: 6px;
  font-size: 12px;
  opacity: 0.85;
  line-height: 1.25;
}

.sponsorCtaBtn {
  margin-top: 10px;
  display: inline-flex;
  width: fit-content;
  padding: 8px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 900;
  border: 1px solid rgba(255,255,255,0.16);
  background: rgba(0,0,0,0.18);
}

/* Mobile tweaks */
@media (max-width: 768px) {
  .sponsorCard {
    width: 175px;
    min-width: 175px;
    height: 112px;
  }
  .sponsorTrack {
    animation-duration: 22s;
  }
  .sponsorFadeLeft,
  .sponsorFadeRight {
    width: 52px;
  }
  .sponsorTrack {
    padding: 0 52px;
  }
}
