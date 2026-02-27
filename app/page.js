"use client";

import { useEffect, useMemo, useState } from "react";

const LINKS = {
  cheerReg: "https://form.jotform.com/260336801253046",
  tballReg: "https://form.jotform.com/260086521920149",
  sponsorForm: "https://form.jotform.com/celiadelacruz89/sponsorship-application-form",

  // Baseball order links from your image
  playersOrder: "https://form.jotform.com/260125057825050",
  familyOrder: "https://form.jotform.com/260124714767054",
  coachOrder: "https://form.jotform.com/260125031204033"
};

function enc(path) {
  // encodes spaces + parentheses for URLs
  return encodeURI(path);
}

const LOGOS = {
  renegades: enc("/renegade main.png"),
  riot: enc("/Riot name.png"),
  karma: enc("/karma logo.png"),
  anarchy: enc("/Anarchylogo.png"),
  mayhem: enc("/Mayhem main (1).jpg"),
  tball: enc("/tball logo.png")
};

const HERO_IMAGES = {
  karma: enc("/karma main.png"),
  riot: enc("/newriot logo.png"),
  tball: enc("/tball main.png")
};

const TEAM_FOLDERS = [
  { key: "org", label: "Organization" },
  { key: "riot", label: "Riot" },
  { key: "karma", label: "Karma" },
  { key: "anarchy", label: "Anarchy" },
  { key: "blessed-mayhem", label: "Blessed Mayhem" },
  { key: "tball", label: "T-Ball" }
];

export default function Home() {
  const [folder, setFolder] = useState("org");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [spots, setSpots] = useState({ max: 15, remaining: 15 });

  useEffect(() => {
    (async () => {
      try {
        const r = await fetch("/api/admin/spots", { cache: "no-store" });
        const j = await r.json();
        if (j?.remaining != null) setSpots(j);
      } catch {}
    })();
  }, []);

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      try {
        const r = await fetch(`/api/gallery/list?folder=${encodeURIComponent(folder)}`, { cache: "no-store" });
        const j = await r.json();
        if (!active) return;
        setItems(Array.isArray(j.items) ? j.items : []);
      } catch {
        if (!active) return;
        setItems([]);
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => { active = false; };
  }, [folder]);

  const quickPay = useMemo(() => ([
    { label: "Pay Karma/Riot", cashapp: "$statelinerenegades", href: "https://cash.app/$statelinerenegades", cls: "green" },
    { label: "Pay Anarchy", cashapp: "$renegadescheerteam", href: "https://cash.app/$renegadescheerteam", cls: "primary" },
    { label: "Pay T-Ball", cashapp: "$renegadesbb", href: "https://cash.app/$renegadesbb", cls: "primary" }
  ]), []);

  return (
    <>
      <header className="nav">
        <div className="wrap">
          <div className="navRow">
            <div className="brand">
              <div className="brandLogo">
                <img src={LOGOS.renegades} alt="Renegades logo" />
              </div>
              <div className="brandTxt">
                <b>Stateline Renegades</b>
                <span>Cheer & T-Ball Organization</span>
              </div>
            </div>

            <nav className="navLinks">
              <a className="btn primary" href={LINKS.cheerReg} target="_blank" rel="noopener">Register (Cheer)</a>
              <a className="btn dark" href={LINKS.sponsorForm} target="_blank" rel="noopener">Sponsor Form</a>
              <a className="btn dark" href="/admin">Admin Controls</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="heroGrid">
              <div className="card">
                <div className="badge">🔥 Where passion grows • 🏆 Build confidence • 🤝 Community</div>
                <h1 className="h1">Cheer + T-Ball for every age — one Renegades family.</h1>
                <p className="p">
                  Register in minutes, apply to sponsor, and view team galleries. Admins upload photos securely at <b>/admin</b>.
                </p>

                <div className="grid2">
                  <a className="btn primary" href="#programs">View Programs</a>
                  <a className="btn green" href={LINKS.cheerReg} target="_blank" rel="noopener">Cheer Registration</a>
                  <a className="btn primary" href={LINKS.tballReg} target="_blank" rel="noopener">T-Ball Registration</a>
                  <a className="btn dark" href="#gallery">Open Gallery</a>
                </div>

                <div className="smallCards">
                  <div className="teamChip">
                    <img src={LOGOS.riot} alt="Riot logo" />
                    <div><b>Riot</b><span>Dark Green + Light Pink</span></div>
                  </div>
                  <div className="teamChip">
                    <img src={LOGOS.karma} alt="Karma logo" />
                    <div><b>Karma</b><span>Teal + Light Pink</span></div>
                  </div>
                  <div className="teamChip">
                    <img src={LOGOS.anarchy} alt="Anarchy logo" />
                    <div><b>Anarchy</b><span>Metallic Red + Black</span></div>
                  </div>
                  <div className="teamChip">
                    <img src={LOGOS.mayhem} alt="Blessed Mayhem logo" />
                    <div><b>Blessed Mayhem</b><span>Black + Purple</span></div>
                  </div>
                  <div className="teamChip">
                    <img src={LOGOS.tball} alt="T-ball logo" />
                    <div><b>T-Ball</b><span>Red + Black</span></div>
                  </div>
                </div>

                <div style={{ marginTop: 14 }} className="card">
                  <div className="sectionTitle" style={{ margin: 0 }}>
                    <div>
                      <h2 style={{ margin: 0, fontSize: 16 }}>Quick Pay (Cash App)</h2>
                      <p style={{ margin: "6px 0 0" }}>
                        Karma + Riot: <b>$statelinerenegades</b> • Anarchy: <b>$renegadescheerteam</b> • T-Ball: <b>$renegadesbb</b>
                      </p>
                    </div>
                  </div>
                  <div className="grid2" style={{ marginTop: 10 }}>
                    {quickPay.map((q) => (
                      <a key={q.label} className={`btn ${q.cls}`} href={q.href} target="_blank" rel="noopener">
                        {q.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="sectionTitle" style={{ marginTop: 0 }}>
                  <div>
                    <h2 style={{ margin: 0 }}>T-Ball spots</h2>
                    <p style={{ margin: "6px 0 0" }}>
                      Available spots: <b>{spots.remaining}</b> / {spots.max}
                    </p>
                  </div>
                  <a className="btn primary" href={LINKS.tballReg} target="_blank" rel="noopener">Register T-Ball</a>
                </div>

                <p className="p">
                  This counter updates when an admin adjusts spots in <b>/admin</b>. (Automatic Jotform countdown requires webhooks.)
                </p>

                <div className="cols" style={{ marginTop: 12 }}>
                  <div className="galleryShell">
                    <div className="galleryTop">
                      <b>Baseball Order Forms</b>
                    </div>
                    <div style={{ padding: 12, display: "grid", gap: 10 }}>
                      <a className="btn dark" href={LINKS.playersOrder} target="_blank" rel="noopener">Players Order Form</a>
                      <a className="btn dark" href={LINKS.familyOrder} target="_blank" rel="noopener">Parent/Family Order Form</a>
                      <a className="btn dark" href={LINKS.coachOrder} target="_blank" rel="noopener">Coach Order Form</a>
                    </div>
                  </div>

                  <div className="galleryShell">
                    <div className="galleryTop">
                      <b>Featured</b>
                    </div>
                    <div style={{ padding: 12, display: "grid", gap: 10 }}>
                      <img src={HERO_IMAGES.karma} alt="Karma" style={{ width: "100%", borderRadius: 16, border: "1px solid rgba(255,255,255,.12)" }} />
                      <img src={HERO_IMAGES.tball} alt="Tball" style={{ width: "100%", borderRadius: 16, border: "1px solid rgba(255,255,255,.12)" }} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="programs" className="section">
          <div className="wrap">
            <div className="sectionTitle">
              <div>
                <h2>Programs</h2>
                <p>Cheer teams + T-Ball — pick the best fit for your athlete.</p>
              </div>
              <a className="btn primary" href={LINKS.cheerReg} target="_blank" rel="noopener">Register Now</a>
            </div>

            <div className="programs">
              <div className="prog">
                <h3>Riot (Limited Travel + Non-Travel)</h3>
                <p className="meta">Ages 5–14 • Colors: Dark Green + Light Pink</p>
                <div className="tags">
                  <span className="tag">Limited Travel</span>
                  <span className="tag">Non-Travel</span>
                  <span className="tag">Confidence</span>
                  <span className="tag">Teamwork</span>
                </div>
                <div style={{ marginTop: 10 }}>
                  <a className="btn green" href={LINKS.cheerReg} target="_blank" rel="noopener">Register Riot</a>
                </div>
              </div>

              <div className="prog">
                <h3>Karma (Non-Travel)</h3>
                <p className="meta">Ages 3–5 • Colors: Teal + Light Pink</p>
                <div className="tags">
                  <span className="tag">Non-Travel</span>
                  <span className="tag">Beginner Friendly</span>
                  <span className="tag">Fun + Fundamentals</span>
                </div>
                <div style={{ marginTop: 10 }}>
                  <a className="btn green" href={LINKS.cheerReg} target="_blank" rel="noopener">Register Karma</a>
                </div>
              </div>

              <div className="prog">
                <h3>Anarchy (Full Travel)</h3>
                <p className="meta">Ages 6–18 • Colors: Metallic Red + Black</p>
                <div className="tags">
                  <span className="tag">Full Travel</span>
                  <span className="tag">Elite Mindset</span>
                  <span className="tag">Competition</span>
                </div>
                <div style={{ marginTop: 10 }}>
                  <a className="btn primary" href={LINKS.cheerReg} target="_blank" rel="noopener">Register Anarchy</a>
                </div>
              </div>

              <div className="prog">
                <h3>Blessed Mayhem (Full Travel)</h3>
                <p className="meta">Ages 6–12 • Colors: Black + Purple</p>
                <div className="tags">
                  <span className="tag">Full Travel</span>
                  <span className="tag">Skills + Strength</span>
                  <span className="tag">Performance</span>
                </div>
                <div style={{ marginTop: 10 }}>
                  <a className="btn primary" href={LINKS.cheerReg} target="_blank" rel="noopener">Register Blessed Mayhem</a>
                </div>
              </div>

              <div className="prog">
                <h3>T-Ball</h3>
                <p className="meta">Colors: Red + Black • Spots tracked on this site</p>
                <div className="tags">
                  <span className="tag">Beginner</span>
                  <span className="tag">Team Basics</span>
                  <span className="tag">Fun + Growth</span>
                </div>
                <div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <a className="btn primary" href={LINKS.tballReg} target="_blank" rel="noopener">Register T-Ball</a>
                  <span className="tag">Spots left: {spots.remaining}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="wrap">
            <div className="sectionTitle">
              <div>
                <h2>Gallery</h2>
                <p>Main organization gallery + sub-galleries for each team. Admin uploads at /admin.</p>
              </div>
              <a className="btn dark" href="/admin">Go to Admin</a>
            </div>

            <div className="galleryShell">
              <div className="galleryTop">
                <div className="tabs">
                  <select className="select" value={folder} onChange={(e) => setFolder(e.target.value)}>
                    {TEAM_FOLDERS.map((f) => (
                      <option key={f.key} value={f.key}>{f.label}</option>
                    ))}
                  </select>
                </div>
                <div style={{ color: "var(--muted)", fontSize: 12 }}>
                  {loading ? "Loading..." : `${items.length} photo(s)`}
                </div>
              </div>

              <div className="galleryGrid">
                {items.map((it) => (
                  <div className="gItem" key={it.pathname}>
                    <img src={it.url} alt={it.pathname} />
                    <div className="gCap">{it.pathname.split("/").pop()}</div>
                  </div>
                ))}
                {!loading && items.length === 0 && (
                  <div style={{ padding: 16, color: "var(--muted)" }}>
                    No photos yet in this gallery. Admins can upload in <b>/admin</b>.
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="sponsor-form" className="section">
          <div className="wrap">
            <div className="sectionTitle">
              <div>
                <h2>Sponsorship Application</h2>
                <p>Complete the form below and we’ll contact you with sponsorship options.</p>
              </div>
              <a className="btn primary" href={LINKS.sponsorForm} target="_blank" rel="noopener">Open in New Tab</a>
            </div>

            <div className="galleryShell" style={{ overflow: "hidden" }}>
              <iframe
                title="Stateline Renegades Sponsorship Application"
                src={LINKS.sponsorForm}
                style={{ width: "100%", height: "1100px", border: 0, background: "transparent" }}
                loading="lazy"
                allow="geolocation; microphone; camera"
              />
            </div>

            <p style={{ marginTop: 10, color: "var(--muted)", fontSize: 12, lineHeight: 1.5 }}>
              If the form doesn’t load inside the page, tap “Open in New Tab.”
            </p>
          </div>
        </section>

        <footer className="footer">
          <div className="wrap">
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
              <div>© {new Date().getFullYear()} Stateline Renegades</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn dark" href={LINKS.cheerReg} target="_blank" rel="noopener">Cheer Registration</a>
                <a className="btn dark" href={LINKS.tballReg} target="_blank" rel="noopener">T-Ball Registration</a>
                <a className="btn dark" href={LINKS.sponsorForm} target="_blank" rel="noopener">Sponsor</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
  }
