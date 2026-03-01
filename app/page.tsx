"use client";

import React, { useEffect, useMemo, useState } from "react";

type TeamKey = "riot" | "karma" | "anarchy" | "mayhem" | "tball";

const LINKS = {
  cheerRegistration: "https://form.jotform.com/260336801253046",
  tballRegistration: "https://form.jotform.com/260086521920149",
  sponsorForm: "https://form.jotform.com/celiadelacruz89/sponsorship-application-form",
  baseballPlayers: "https://form.jotform.com/260125057825050",
  baseballFamily: "https://form.jotform.com/260124714767054",
  baseballCoach: "https://form.jotform.com/260125031204033",
} as const;

const TEAMS: Array<{
  key: TeamKey;
  name: string;
  subtitle: string;
  colors: string;
  ages: string;
  travel: string;
  logo: string;
  registerHref?: string;
  cashapp?: { handle: string; label: string };
  badge?: string;
}> = [
  {
    key: "riot",
    name: "Riot",
    subtitle: "Limited travel + non-travel cheer",
    colors: "Dark Green + Light Pink",
    ages: "Ages 5–14",
    travel: "Limited Travel / Non-Travel",
    logo: "/logos/riot.png",
    registerHref: LINKS.cheerRegistration,
    cashapp: { handle: "$statelinerenegades", label: "Pay Karma/Riot" },
    badge: "Cheer",
  },
  {
    key: "karma",
    name: "Karma",
    subtitle: "Non-travel cheer",
    colors: "Teal + Light Pink",
    ages: "Ages 3–5",
    travel: "Non-Travel",
    logo: "/logos/karma.png",
    registerHref: LINKS.cheerRegistration,
    cashapp: { handle: "$statelinerenegades", label: "Pay Karma/Riot" },
    badge: "Cheer",
  },
  {
    key: "anarchy",
    name: "Anarchy",
    subtitle: "Full travel cheer",
    colors: "Metallic Red + Black",
    ages: "Ages 6–18",
    travel: "Full Travel",
    logo: "/logos/anarchy.png",
    cashapp: { handle: "$renegadescheerteam", label: "Pay Anarchy" },
    badge: "Cheer",
  },
  {
    key: "mayhem",
    name: "Blessed Mayhem",
    subtitle: "Full travel cheer",
    colors: "Black + Purple",
    ages: "Ages 6–12",
    travel: "Full Travel",
    logo: "/logos/mayhem.png",
    cashapp: { handle: "$renegadescheerteam", label: "Pay Anarchy/Mayhem" },
    badge: "Cheer",
  },
  {
    key: "tball",
    name: "T-Ball",
    subtitle: "Youth baseball (T-Ball)",
    colors: "Red + Black",
    ages: "Youth",
    travel: "Local",
    logo: "/logos/tball.png",
    registerHref: LINKS.tballRegistration,
    cashapp: { handle: "$renegadesbb", label: "Pay T-Ball" },
    badge: "Baseball",
  },
];

function classNames(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function CashAppLink({ handle, children }: { handle: string; children: React.ReactNode }) {
  const href = `https://cash.app/${handle.replace(/^\$/, "")}`;
  return (
    <a className="btn" href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
}

export default function Home() {
  const [tballSpots, setTballSpots] = useState<number>(15);
  const [tballError, setTballError] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      try {
        const r = await fetch("/api/tball-spots", { cache: "no-store" });
        const txt = await r.text();
        if (!r.ok) throw new Error(txt || r.statusText);
        const j = JSON.parse(txt);
        if (!cancelled && typeof j?.spotsRemaining === "number") setTballSpots(j.spotsRemaining);
      } catch (e: any) {
        if (!cancelled) setTballError(e?.message || "Unable to load spots");
      }
    };
    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const quickPay = useMemo(() => {
    const map = new Map<string, { handle: string; label: string }>();
    TEAMS.forEach((t) => {
      if (t.cashapp) map.set(t.cashapp.handle, t.cashapp);
    });
    return Array.from(map.values());
  }, []);

  return (
    <div className="page">
      <style jsx global>{`
        :root{
          --bg:#06070b;
          --panel:#0b0f18;
          --muted:#94a3b8;
          --text:#e8edf7;
          --line:rgba(255,255,255,.08);
          --shadow:0 18px 60px rgba(0,0,0,.55);
          --pink:#ff5fa8;
          --teal:#1fd3c6;
          --red:#ff3355;
          --purple:#a78bfa;
          --green:#1f7a5b;
        }
        html,body{height:100%;}
        body{margin:0;background:radial-gradient(1200px 600px at 20% 0%, rgba(255,95,168,.25), transparent 60%),
                     radial-gradient(1000px 600px at 90% 10%, rgba(31,211,198,.18), transparent 55%),
                     radial-gradient(900px 500px at 70% 90%, rgba(167,139,250,.16), transparent 55%),
                     var(--bg);
              color:var(--text);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;}
        a{color:inherit;text-decoration:none;}
        .wrap{max-width:1100px;margin:0 auto;padding:0 18px;}
        .nav{position:sticky;top:0;z-index:50;background:rgba(6,7,11,.72);backdrop-filter:blur(12px);border-bottom:1px solid var(--line);}
        .navInner{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:12px 0;}
        .brand{display:flex;align-items:center;gap:10px;min-width:220px;}
        .brandMark{width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,var(--teal),var(--pink));box-shadow:0 10px 40px rgba(255,95,168,.22);}
        .brandTitle{font-weight:800;letter-spacing:.2px;line-height:1.05}
        .brandSub{font-size:12px;color:var(--muted)}
        .navLinks{display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:center;}
        .navLinks a{font-size:14px;color:#cbd5e1;opacity:.9}
        .navLinks a:hover{opacity:1;color:#fff}
        .navCtas{display:flex;align-items:center;gap:10px;}
        .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:10px 14px;border-radius:14px;border:1px solid var(--line);background:rgba(255,255,255,.02);color:#fff;font-weight:700;font-size:14px;box-shadow:0 10px 35px rgba(0,0,0,.28);}
        .btn:hover{transform:translateY(-1px);transition:.15s ease;}
        .btn.primary{background:linear-gradient(135deg,var(--pink),#7c3aed);border-color:transparent;}
        .btn.green{background:linear-gradient(135deg,var(--teal),#22c55e);border-color:transparent;}
        .btn.red{background:linear-gradient(135deg,var(--red),#b91c1c);border-color:transparent;}
        .hero{padding:28px 0 10px;}
        .heroCard{border:1px solid var(--line);border-radius:22px;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.02));box-shadow:var(--shadow);overflow:hidden;}
        .heroGrid{display:grid;grid-template-columns:1.25fr .75fr;gap:18px;padding:18px;}
        @media(max-width:900px){.heroGrid{grid-template-columns:1fr;}}
        .pill{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;border:1px solid var(--line);background:rgba(0,0,0,.25);color:#dbeafe;font-size:13px;}
        h1{font-size:48px;line-height:1.02;margin:14px 0 10px;letter-spacing:-.6px;}
        @media(max-width:600px){h1{font-size:36px;}}
        .lead{color:#cbd5e1;font-size:16px;line-height:1.55;margin:0 0 14px;}
        .ctaRow{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 8px;}
        .teamStrip{display:grid;grid-template-columns:repeat(5, minmax(0,1fr));gap:10px;margin-top:12px;}
        @media(max-width:900px){.teamStrip{grid-template-columns:repeat(2,minmax(0,1fr));}}
        .teamChip{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:18px;border:1px solid var(--line);background:rgba(0,0,0,.22);}
        .teamChip img{width:28px;height:28px;border-radius:10px;object-fit:cover;background:rgba(255,255,255,.04);border:1px solid var(--line)}
        .teamChip .t1{font-weight:800}
        .teamChip .t2{font-size:12px;color:var(--muted)}
        .side{border:1px solid var(--line);border-radius:22px;background:rgba(0,0,0,.25);padding:16px;}
        .side h3{margin:0 0 8px;font-size:16px;}
        .kv{display:flex;flex-direction:column;gap:10px;}
        .kvRow{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;border-radius:16px;border:1px solid var(--line);background:rgba(255,255,255,.03);}
        .kvRow b{font-size:14px}
        .small{font-size:12px;color:var(--muted)}
        .section{padding:18px 0;}
        .sectionTitle{display:flex;align-items:flex-end;justify-content:space-between;gap:12px;margin-bottom:12px;}
        .sectionTitle h2{margin:0;font-size:24px;}
        .sectionTitle p{margin:6px 0 0;color:var(--muted);font-size:13px;}
        .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;}
        @media(max-width:900px){.grid{grid-template-columns:1fr;}}
        .card{border:1px solid var(--line);border-radius:22px;background:rgba(0,0,0,.22);box-shadow:0 18px 55px rgba(0,0,0,.35);padding:14px;}
        .cardTop{display:flex;align-items:center;gap:12px;}
        .logo{width:48px;height:48px;border-radius:16px;object-fit:cover;border:1px solid var(--line);background:rgba(255,255,255,.04)}
        .card h3{margin:0;font-size:18px;}
        .sub{color:var(--muted);font-size:13px;margin-top:2px;}
        .meta{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;}
        .tag{font-size:12px;color:#dbeafe;border:1px solid var(--line);background:rgba(255,255,255,.03);padding:6px 10px;border-radius:999px;}
        .cardActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;}
        .iframeShell{border:1px solid var(--line);border-radius:22px;overflow:hidden;background:rgba(0,0,0,.18)}
        .twoCol{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        @media(max-width:900px){.twoCol{grid-template-columns:1fr;}}
        .footer{padding:26px 0 38px;color:var(--muted);font-size:12px;}
      `}</style>

      <header className="nav">
        <div className="wrap navInner">
          <a className="brand" href="#top">
            <div className="brandMark" />
            <div>
              <div className="brandTitle">Stateline Renegades</div>
              <div className="brandSub">Cheer &amp; T-Ball Organization</div>
            </div>
          </a>
          <nav className="navLinks">
            <a href="#programs">Programs</a>
            <a href="#registration">Registration</a>
            <a href="#tball">T-Ball</a>
            <a href="#gallery">Gallery</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#contact">Contact</a>
            <a href="/admin">Admin Controls</a>
          </nav>
          <div className="navCtas">
            <a className="btn primary" href={LINKS.cheerRegistration} target="_blank" rel="noopener">
              Register
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="heroCard">
              <div className="heroGrid">
                <div>
                  <div className="pill">🔥 Where passion grows • 🏆 Build confidence • 🤝 Community</div>
                  <h1>Cheer + T-Ball for every age — one Renegades family.</h1>
                  <p className="lead">
                    Register in minutes, donate via Cash App, apply to sponsor, and view team galleries. Admins upload photos securely
                    at <b>/admin</b>.
                  </p>

                  <div className="ctaRow">
                    <a className="btn primary" href="#programs">View Programs</a>
                    <a className="btn green" href={LINKS.cheerRegistration} target="_blank" rel="noopener">Cheer Registration</a>
                    <a className="btn red" href={LINKS.tballRegistration} target="_blank" rel="noopener">T-Ball Registration</a>
                    <a className="btn" href="#gallery">Open Gallery</a>
                    <a className="btn" href="#sponsors">Sponsor Form</a>
                  </div>

                  <div className="teamStrip" aria-label="Team quick links">
                    {TEAMS.map((t) => (
                      <a key={t.key} className="teamChip" href={`#${t.key}`}>
                        <img
                          src={t.logo}
                          alt={`${t.name} logo`}
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <div>
                          <div className="t1">{t.name}</div>
                          <div className="t2">{t.colors}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <aside className="side">
                  <h3>Quick Pay (Cash App)</h3>
                  <div className="kv">
                    {quickPay.map((p) => (
                      <div className="kvRow" key={p.handle}>
                        <div>
                          <b>{p.label}</b>
                          <div className="small">{p.handle}</div>
                        </div>
                        <CashAppLink handle={p.handle}>Pay</CashAppLink>
                      </div>
                    ))}
                  </div>

                  <div style={{ height: 12 }} />
                  <h3>T-Ball Spots</h3>
                  <div className="kvRow">
                    <div>
                      <b>Spots Remaining</b>
                      <div className="small">Max 15 (updates from admin)</div>
                    </div>
                    <div style={{ fontSize: 22, fontWeight: 900 }}>{tballSpots}</div>
                  </div>
                  {tballError ? <div className="small" style={{ marginTop: 8 }}>{tballError}</div> : null}
                </aside>
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
              <a className="btn" href={LINKS.cheerRegistration} target="_blank" rel="noopener">Register Now</a>
            </div>

            <div className="grid">
              {TEAMS.map((t) => (
                <div key={t.key} id={t.key} className="card">
                  <div className="cardTop">
                    <img
                      className="logo"
                      src={t.logo}
                      alt={`${t.name} logo`}
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                    <div>
                      <h3>{t.name}</h3>
                      <div className="sub">{t.subtitle}</div>
                    </div>
                    <div style={{ marginLeft: "auto" }}>{t.badge ? <span className="tag">{t.badge}</span> : null}</div>
                  </div>
                  <div className="meta">
                    <span className="tag">{t.ages}</span>
                    <span className="tag">{t.travel}</span>
                    <span className="tag">Colors: {t.colors}</span>
                  </div>
                  <div className="cardActions">
                    <a className="btn" href={`/gallery/${t.key}`}>View Gallery</a>
                    {t.registerHref ? (
                      <a className={classNames("btn", t.key === "tball" ? "red" : "green")} href={t.registerHref} target="_blank" rel="noopener">
                        Register
                      </a>
                    ) : (
                      <a className="btn" href={LINKS.cheerRegistration} target="_blank" rel="noopener">Register (Cheer)</a>
                    )}
                    {t.cashapp ? <CashAppLink handle={t.cashapp.handle}>{t.cashapp.label}</CashAppLink> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="registration" className="section">
          <div className="wrap">
            <div className="sectionTitle">
              <div>
                <h2>Registration</h2>
                <p>Cheer registration (Karma + Riot) and T-Ball registration are live.</p>
              </div>
            </div>
            <div className="twoCol">
              <div className="card">
                <h3>Cheer Registration</h3>
                <div className="sub">Karma + Riot</div>
                <div className="meta">
                  <span className="tag">Karma: Ages 3–5</span>
                  <span className="tag">Riot: Ages 5–14</span>
                </div>
                <div className="cardActions">
                  <a className="btn green" href={LINKS.cheerRegistration} target="_blank" rel="noopener">Open Cheer Registration</a>
                  <CashAppLink handle="$statelinerenegades">Pay via Cash App</CashAppLink>
                </div>
              </div>
              <div className="card" id="tball">
                <h3>T-Ball Registration</h3>
                <div className="sub">Spots remaining: <b>{tballSpots}</b> / 15</div>
                <div className="meta">
                  <span className="tag">Colors: Red + Black</span>
                  <span className="tag">Updates from admin</span>
                </div>
                <div className="cardActions">
                  <a className="btn red" href={LINKS.tballRegistration} target="_blank" rel="noopener">Open T-Ball Registration</a>
                  <CashAppLink handle="$renegadesbb">Pay T-Ball</CashAppLink>
                </div>
                {tballError ? <div className="small" style={{ marginTop: 8 }}>Note: {tballError}</div> : null}
              </div>
            </div>

            <div style={{ height: 12 }} />
            <div className="card">
              <h3>Baseball Order Forms</h3>
              <div className="sub">Links from your graphic:</div>
              <div className="cardActions">
                <a className="btn" href={LINKS.baseballPlayers} target="_blank" rel="noopener">Players Order Form</a>
                <a className="btn" href={LINKS.baseballFamily} target="_blank" rel="noopener">Parent/Family Order Form</a>
                <a className="btn" href={LINKS.baseballCoach} target="_blank" rel="noopener">Coach Order Form</a>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="section">
          <div className="wrap">
            <div className="sectionTitle">
              <div>
                <h2>Gallery</h2>
                <p>Main organization gallery + sub-galleries for each team.</p>
              </div>
              <a className="btn" href="/gallery">Open Gallery</a>
            </div>
            <div className="card">
              <div className="sub">
                Uploads are managed in <b>/admin</b>. If photos aren’t showing, make sure your Vercel Blob store is set to <b>Public</b>.
              </div>
              <div className="cardActions">
                <a className="btn" href="/gallery">Organization Gallery</a>
                <a className="btn" href="/gallery/riot">Riot</a>
                <a className="btn" href="/gallery/karma">Karma</a>
                <a className="btn" href="/gallery/anarchy">Anarchy</a>
                <a className="btn" href="/gallery/mayhem">Blessed Mayhem</a>
                <a className="btn" href="/gallery/tball">T-Ball</a>
              </div>
            </div>
          </div>
        </section>

        <section id="sponsors" className="section">
          <div className="wrap">
            <div className="sectionTitle">
              <div>
                <h2>Sponsors</h2>
                <p>Apply to sponsor the Stateline Renegades. We’ll follow up with packages.</p>
              </div>
              <a className="btn primary" href={LINKS.sponsorForm} target="_blank" rel="noopener">Open in New Tab</a>
            </div>
            <div className="iframeShell">
              <iframe
                title="Stateline Renegades Sponsorship Application"
                src={LINKS.sponsorForm}
                style={{ width: "100%", height: 1100, border: 0, background: "transparent" }}
                loading="lazy"
                allow="geolocation; microphone; camera"
              />
            </div>
            <div className="small" style={{ marginTop: 10 }}>If the form doesn’t load inside the page, tap “Open in New Tab.”</div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="wrap">
            <div className="sectionTitle">
              <div>
                <h2>Contact</h2>
                <p>Questions? Text or call the correct program contact below.</p>
              </div>
            </div>

            <div className="twoCol">
              <div className="card">
                <h3>Riot + Karma (Cheer)</h3>
                <div className="meta">
                  <span className="tag">Coach Celia: 915-352-9033</span>
                  <span className="tag">Coach Andy: 915-472-0190</span>
                </div>
                <div className="cardActions">
                  <a className="btn" href="tel:19153529033">Call Celia</a>
                  <a className="btn" href="tel:19154720190">Call Andy</a>
                </div>
              </div>

              <div className="card">
                <h3>Anarchy + Blessed Mayhem (Cheer)</h3>
                <div className="meta">
                  <span className="tag">Jennifer Billesbach: 915-803-9442</span>
                </div>
                <div className="cardActions">
                  <a className="btn" href="tel:19158039442">Call Jennifer</a>
                </div>
              </div>
            </div>

            <div style={{ height: 12 }} />
            <div className="card">
              <h3>Admin</h3>
              <div className="sub">Admins can upload photos and update T-Ball spots at <b>/admin</b>.</div>
              <div className="cardActions">
                <a className="btn" href="/admin">Open Admin Controls</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="wrap">
            <div>© {new Date().getFullYear()} Stateline Renegades • Built with ❤️ for the Renegades family.</div>
            <div className="small" style={{ marginTop: 8 }}>
              Logos: place your SVG/PNG files in <b>/public/logos/</b> named <b>riot.svg (or riot.png)</b>, <b>karma.svg (or karma.png)</b>, <b>anarchy.svg (or anarchy.png)</b>, <b>mayhem.svg (or mayhem.png)</b>, <b>tball.svg (or tball.png)</b>.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
