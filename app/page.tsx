"use client";

import { useEffect, useMemo, useState } from "react";

const LINKS = {
  cheerReg: "https://form.jotform.com/260336801253046",
  tballReg: "https://form.jotform.com/260086521920149",
  sponsorForm: "https://form.jotform.com/celiadelacruz89/sponsorship-application-form"
};

const CASHAPP = {
  karmaRiot: "https://cash.app/$statelinerenegades",
  tball: "https://cash.app/$renegadesbb",
  anarchy: "https://cash.app/$renegadescheerteam"
};

type GalleryItem = { url: string; pathname: string; uploadedAt?: string; size?: number };

const FOLDERS = [
  { key: "org", label: "Organization" },
  { key: "riot", label: "Riot" },
  { key: "karma", label: "Karma" },
  { key: "anarchy", label: "Anarchy" },
  { key: "blessed-mayhem", label: "Blessed Mayhem" },
  { key: "tball", label: "T-Ball" }
] as const;

async function fetchGallery(folder: string) {
  const r = await fetch(`/api/gallery/list?folder=${encodeURIComponent(folder)}`, { cache: "no-store" });
  return (await r.json()) as { folder: string; items: GalleryItem[] };
}

async function fetchSpots() {
  const r = await fetch(`/api/tball-spots`, { cache: "no-store" });
  return (await r.json()) as { spots: number };
}

export default function Home() {
  const [openFolder, setOpenFolder] = useState<(typeof FOLDERS)[number]["key"]>("org");
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [spots, setSpots] = useState<number>(15);
  const [loadingGallery, setLoadingGallery] = useState(false);

  const logos = useMemo(
    () => [
      { name: "Riot", colors: "Dark Green + Light Pink", src: "/Riot%20name.png" },
      { name: "Karma", colors: "Teal + Light Pink", src: "/karma%20logo.png" },
      { name: "Anarchy", colors: "Metallic Red + Black", src: "/Anarchylogo.png" },
      { name: "Blessed Mayhem", colors: "Black + Purple", src: "/Mayhem%20main%20(1).jpg" },
      { name: "T-Ball", colors: "Red + Black", src: "/tball%20logo.png" }
    ],
    []
  );

  useEffect(() => {
    fetchSpots().then((d) => setSpots(Number.isFinite(d.spots) ? d.spots : 15)).catch(() => {});
  }, []);

  useEffect(() => {
    setLoadingGallery(true);
    fetchGallery(openFolder)
      .then((d) => setItems(d.items || []))
      .finally(() => setLoadingGallery(false));
  }, [openFolder]);

  return (
    <>
      <div className="bgGlow" />
      <header className="nav">
        <div className="wrap">
          <div className="navInner">
            <div className="brand">
              <div className="badge" />
              <div>
                <h1>Stateline Renegades</h1>
                <p>Cheer &amp; T-Ball Organization</p>
              </div>
            </div>

            <nav className="links">
              <a className="pill" href="#programs">Programs</a>
              <a className="pill" href="#registration">Registration</a>
              <a className="pill" href="#tball">T-Ball</a>
              <a className="pill" href="#gallery">Gallery</a>
              <a className="pill" href="#sponsors">Sponsors</a>
              <a className="pill" href="#contact">Contact</a>
              <a className="pill" href="/admin">Admin Controls</a>
              <a className="pill primary" href={LINKS.cheerReg} target="_blank" rel="noopener">Register</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div className="heroCard">
            <div className="heroTag">🔥 Where passion grows • 🏆 Build confidence • 🤝 Community</div>
            <h2 className="heroTitle">Cheer + T-Ball for every age — one Renegades family.</h2>
            <p className="heroText">
              Register in minutes, donate via Cash App, apply to sponsor, and view team galleries.
              Admins upload photos securely at <b>/admin</b>.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#programs">View Programs</a>
              <a className="btn green" href={LINKS.cheerReg} target="_blank" rel="noopener">Cheer Registration</a>
              <a className="btn red" href={LINKS.tballReg} target="_blank" rel="noopener">T-Ball Registration</a>
              <a className="btn dark" href="#gallery">Open Gallery</a>
              <a className="btn" href="#sponsors">Sponsor Form</a>
            </div>

            <div className="logoRow">
              {logos.map((l) => (
                <div className="logoCard" key={l.name}>
                  <img src={l.src} alt={`${l.name} logo`} />
                  <div>
                    <b>{l.name}</b>
                    <span>{l.colors}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="programs">
          <div className="sectionTitle">
            <div>
              <h3>Programs</h3>
              <p>Cheer teams + T-Ball — pick the best fit for your athlete.</p>
            </div>
            <a className="btn primary" href={LINKS.cheerReg} target="_blank" rel="noopener">Register Now</a>
          </div>

          <div className="grid2">
            <div>
              <div className="program">
                <div>
                  <h4>Riot (Limited Travel + Non-Travel)</h4>
                  <p>Ages 5–14 • Colors: Dark Green + Light Pink</p>
                  <div className="tags">
                    <span className="tag">Limited Travel</span>
                    <span className="tag">Non-Travel</span>
                    <span className="tag">Confidence</span>
                    <span className="tag">Teamwork</span>
                    <span className="tag">Performance</span>
                  </div>
                </div>
                <div>
                  <a className="btn green" href={LINKS.cheerReg} target="_blank" rel="noopener">Register Riot</a>
                </div>
              </div>

              <div className="program">
                <div>
                  <h4>Karma (Non-Travel)</h4>
                  <p>Ages 3–5 • Colors: Teal + Light Pink</p>
                  <div className="tags">
                    <span className="tag">Tiny Team</span>
                    <span className="tag">Non-Travel</span>
                    <span className="tag">Fundamentals</span>
                    <span className="tag">Fun</span>
                  </div>
                </div>
                <div>
                  <a className="btn green" href={LINKS.cheerReg} target="_blank" rel="noopener">Register Karma</a>
                </div>
              </div>

              <div className="program">
                <div>
                  <h4>Anarchy (Full Travel)</h4>
                  <p>Ages 6–18 • Colors: Metallic Red + Black</p>
                  <div className="tags">
                    <span className="tag">Full Travel</span>
                    <span className="tag">Competition</span>
                    <span className="tag">Elite Mindset</span>
                  </div>
                </div>
                <div>
                  <a className="btn primary" href={LINKS.cheerReg} target="_blank" rel="noopener">Info / Register</a>
                </div>
              </div>

              <div className="program">
                <div>
                  <h4>Blessed Mayhem (Full Travel)</h4>
                  <p>Ages 6–12 • Colors: Black + Purple</p>
                  <div className="tags">
                    <span className="tag">Full Travel</span>
                    <span className="tag">Competition</span>
                    <span className="tag">Growth</span>
                  </div>
                </div>
                <div>
                  <a className="btn primary" href={LINKS.cheerReg} target="_blank" rel="noopener">Info / Register</a>
                </div>
              </div>
            </div>

            <aside className="sideBox">
              <div className="card">
                <h4 style={{ margin: 0 }}>Quick Pay (Cash App)</h4>
                <p className="small" style={{ marginTop: 8 }}>
                  Karma + Riot: <b>$statelinerenegades</b><br />
                  Anarchy: <b>$renegadescheerteam</b><br />
                  T-Ball: <b>$renegadesbb</b>
                </p>
                <div className="ctaRow" style={{ marginTop: 10 }}>
                  <a className="btn green" href={CASHAPP.karmaRiot} target="_blank" rel="noopener">Pay Karma/Riot</a>
                  <a className="btn primary" href={CASHAPP.anarchy} target="_blank" rel="noopener">Pay Anarchy</a>
                  <a className="btn red" href={CASHAPP.tball} target="_blank" rel="noopener">Pay T-Ball</a>
                </div>
                <div className="hr" />
                <p className="small">
                  Want to sponsor? Tap below.
                </p>
                <a className="btn" href="#sponsors">Sponsor Options</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="registration">
          <div className="sectionTitle">
            <div>
              <h3>Registration</h3>
              <p>Use the official registration forms below.</p>
            </div>
          </div>

          <div className="grid2">
            <div className="card">
              <h4 style={{ marginTop: 0 }}>Cheer Registration (Riot + Karma)</h4>
              <p className="small">Use this form for Riot (5–14) and Karma (3–5).</p>
              <div className="ctaRow">
                <a className="btn green" href={LINKS.cheerReg} target="_blank" rel="noopener">Open Cheer Registration</a>
              </div>
            </div>

            <div className="card">
              <h4 style={{ marginTop: 0 }}>T-Ball Registration</h4>
              <p className="small">Use this form for T-Ball. Spots update on the website.</p>
              <div className="ctaRow">
                <a className="btn red" href={LINKS.tballReg} target="_blank" rel="noopener">Open T-Ball Registration</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="tball">
          <div className="sectionTitle">
            <div>
              <h3>T-Ball</h3>
              <p>We start with a max of 15 spots.</p>
            </div>
            <a className="btn red" href={LINKS.tballReg} target="_blank" rel="noopener">Register for T-Ball</a>
          </div>

          <div className="card">
            <h4 style={{ marginTop: 0 }}>Spots Remaining</h4>
            <p style={{ fontSize: 42, margin: "6px 0 0", fontWeight: 900 }}>{spots}</p>
            <p className="small">
              Admins can update this number inside <b>/admin</b>.
            </p>
          </div>
        </section>

        <section className="section" id="gallery">
          <div className="sectionTitle">
            <div>
              <h3>Gallery</h3>
              <p>Organization + team galleries. Admin uploads happen in /admin.</p>
            </div>
          </div>

          <div className="card">
            <div className="ctaRow" style={{ marginTop: 0 }}>
              {FOLDERS.map((f) => (
                <button
                  key={f.key}
                  className="btn"
                  onClick={() => setOpenFolder(f.key)}
                  style={{
                    border: openFolder === f.key ? "none" : undefined,
                    background: openFolder === f.key ? "linear-gradient(135deg, rgba(255,70,160,.25), rgba(140,90,255,.20))" : undefined
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div className="hr" />

            {loadingGallery ? (
              <p className="small">Loading…</p>
            ) : items.length === 0 ? (
              <p className="small">No photos yet for this folder. Admins can upload at /admin.</p>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
                {items.map((it) => (
                  <a
                    key={it.pathname}
                    href={it.url}
                    target="_blank"
                    rel="noopener"
                    className="galleryShell"
                    style={{ borderRadius: 16 }}
                    title={it.pathname}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={it.url} alt={it.pathname} style={{ width: "100%", height: 180, objectFit: "cover" }} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="section" id="sponsors">
          <div className="sectionTitle">
            <div>
              <h3>Sponsorship Application</h3>
              <p>Complete the form below and we’ll contact you with sponsorship options.</p>
            </div>
            <a className="btn primary" href={LINKS.sponsorForm} target="_blank" rel="noopener">
              Open in New Tab
            </a>
          </div>

          <div className="galleryShell">
            <iframe
              title="Stateline Renegades Sponsorship Application"
              src={LINKS.sponsorForm}
              className="iframe"
              loading="lazy"
              allow="geolocation; microphone; camera"
            />
          </div>

          <p className="small" style={{ marginTop: 10 }}>
            If the form doesn’t load inside the page, tap “Open in New Tab.”
          </p>
        </section>

        <section className="section" id="contact">
          <div className="sectionTitle">
            <div>
              <h3>Contact</h3>
              <p>Questions? Reach out anytime.</p>
            </div>
          </div>

          <div className="card">
            <p style={{ marginTop: 0 }}>
              <b>Coach Celia</b> — <a href="tel:9153529033">915-352-9033</a><br />
              <b>Coach Andy</b> — <a href="tel:9154720190">915-472-0190</a>
            </p>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Stateline Renegades. All rights reserved.
        </footer>
      </main>
    </>
  );
}
