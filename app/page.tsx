export const dynamic = "force-dynamic";

function SponsorCarousel() {
  // Put real sponsor names here anytime
  const sponsors = [
    "Sponsor Name",
    "Sponsor Name",
    "Sponsor Name",
    "Sponsor Name",
    "Sponsor Name",
    "Sponsor Name",
  ];

  // Duplicate list so it loops smoothly
  const loop = [...sponsors, ...sponsors];

  return (
    <div className="carousel">
      <div className="track" aria-label="Sponsor logos scrolling">
        {loop.map((s, i) => (
          <div className="logo" key={`${s}-${i}`}>
            {s}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  // Simple “pop” animation via key
  return <span key={value} className="statBig">{value}</span>;
}

export default async function Home() {
  // Read spots from API (uses your existing /api/tball-spots)
  let spots = 15;
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/tball-spots`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      const n = Number(data?.spots);
      if (Number.isFinite(n)) spots = n;
    }
  } catch {}

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="brandRow">
            <div className="badge">STATELINE RENEGADES</div>
            <div className="badge">ELITE MODE</div>
            <div style={{ marginLeft: "auto" }} className="badge">
              Admin: /admin
            </div>
          </div>
        </div>
      </div>

      <div className="container hero">
        <div className="heroGrid">
          <div className="card panelGlow">
            <div className="cardInner">
              <div className="kicker">All programs • Cheer + T-Ball</div>
              <h1 className="h1">Built Like a Pro Organization.</h1>
              <p className="sub">
                Official home of Stateline Renegades. Sponsors, photos, and real-time T-Ball
                spot availability—designed with a premium sports-site feel.
              </p>

              <div className="pills">
                <div className="pill">Riot • Karma • Anarchy • Mayhem</div>
                <div className="pill">Fundraising Goal: $5,000</div>
                <div className="pill">Sponsor Showcase</div>
              </div>

              <div className="btnRow">
                <a className="btn btnPrimary" href="#tball">
                  View T-Ball Spots
                </a>
                <a className="btn btnGold" href="#sponsors">
                  Become a Sponsor
                </a>
                <a className="btn" href="/admin">
                  Admin Controls
                </a>
              </div>

              <hr className="hr" />

              <div className="grid3">
                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="cardInner">
                    <div className="kicker">Primary Contacts</div>
                    <div style={{ fontWeight: 900, marginTop: 6 }}>Riot + Karma</div>
                    <div className="muted">Coach Celia • 915-352-9033</div>
                    <div className="muted">Coach Andy • 915-472-0190</div>
                  </div>
                </div>

                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="cardInner">
                    <div className="kicker">Primary Contacts</div>
                    <div style={{ fontWeight: 900, marginTop: 6 }}>Anarchy + Mayhem</div>
                    <div className="muted">Jennifer Billesbach • 915-803-9442</div>
                  </div>
                </div>

                <div className="card" style={{ boxShadow: "none" }}>
                  <div className="cardInner">
                    <div className="kicker">Media</div>
                    <div style={{ fontWeight: 900, marginTop: 6 }}>Photos + Highlights</div>
                    <div className="muted">
                      Upload & manage galleries in <b>/admin</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <div id="tball" className="sectionTitle">T-Ball Spots Remaining</div>
              <div className="muted" style={{ marginBottom: 10 }}>
                Live number pulled from your database/API.
              </div>

              <div className="card" style={{ boxShadow: "none" }}>
                <div className="cardInner">
                  <AnimatedNumber value={spots} />
                  <div className="muted" style={{ marginTop: 6 }}>
                    spots currently available
                  </div>
                  <div style={{ marginTop: 14 }} className="pill">
                    Update in Admin → T-Ball Spots
                  </div>
                </div>
              </div>

              <hr className="hr" />

              <div className="sectionTitle" id="sponsors">Sponsor Highlights</div>
              <div className="muted" style={{ marginBottom: 10 }}>
                Your sponsor logos will scroll here (carousel).
              </div>
              <SponsorCarousel />

              <div className="muted" style={{ marginTop: 12, fontSize: 12 }}>
                Want real logos instead of text boxes? Tell me your sponsor list and I’ll wire it
                to images (uploadable in Admin).
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 14 }} />

        <div className="grid3">
          <div className="card">
            <div className="cardInner">
              <div className="kicker">Brand</div>
              <div className="sectionTitle">Professional Sports Look</div>
              <div className="muted">
                Elite gradients, glow panels, premium typography, and clean layout.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <div className="kicker">Fundraising</div>
              <div className="sectionTitle">$5,000 Program Goal</div>
              <div className="muted">
                Sponsor carousel + spotlight area makes your page feel official and high value.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <div className="kicker">Admin</div>
              <div className="sectionTitle">Simple Updates</div>
              <div className="muted">
                Keep using <b>/admin</b> for spots + photos.
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 28 }} />
        <div className="muted" style={{ fontSize: 12 }}>
          © {new Date().getFullYear()} Stateline Renegades
        </div>
      </div>
    </>
  );
}
