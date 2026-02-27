import React from 'react'

const links = [
  { label: 'Register', href: '#register' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Badge({ children }) {
  return <span className="badge">{children}</span>
}

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="container headerInner">
          <div className="brand">
            <div className="logo" aria-hidden="true">SR</div>
            <div>
              <div className="brandName">Stateline Renegades</div>
              <div className="brandTag">Youth sports & cheer community</div>
            </div>
          </div>

          <nav className="nav">
            {links.map(l => (
              <a key={l.label} className="navLink" href={l.href}>{l.label}</a>
            ))}
            <a className="btn btnPrimary" href="#register">Open Registration</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <h1 className="title">Build confidence. Create family. Compete with heart.</h1>
              <p className="subtitle">
                Welcome to Stateline Renegades — a place where athletes grow on and off the mat.
                Use this site for updates, registration, and team information.
              </p>

              <div className="heroBadges">
                <Badge>Ages 3–14</Badge>
                <Badge>Limited travel</Badge>
                <Badge>Practice starts in May</Badge>
              </div>

              <div className="ctaRow">
                <a className="btn btnPrimary" href="#register">Register Now</a>
                <a className="btn btnGhost" href="#contact">Contact Coaches</a>
              </div>
            </div>

            <div className="card heroCard">
              <h2 className="cardTitle">Quick Info</h2>
              <ul className="list">
                <li><strong>Teams:</strong> Cheer + Youth Sports</li>
                <li><strong>Location:</strong> Stateline area</li>
                <li><strong>Tryouts:</strong> Posted soon</li>
                <li><strong>Updates:</strong> Follow our socials</li>
              </ul>
              <div className="note">
                Tip: Replace the text here with your real info anytime — this is a clean starter layout.
              </div>
            </div>
          </div>
        </section>

        <section id="register" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Registration</h2>
              <p>Drop your registration link or QR code here.</p>
            </div>

            <div className="grid2">
              <div className="card">
                <h3 className="cardTitle">How to register</h3>
                <ol className="list">
                  <li>Add your Google Form / SignUp link below.</li>
                  <li>Post the same link on Facebook/Instagram.</li>
                  <li>Update this section with fees, dates, and what to bring.</li>
                </ol>
                <a className="btn btnPrimary" href="#" onClick={(e) => e.preventDefault()}>
                  Add Registration Link
                </a>
              </div>

              <div className="card">
                <h3 className="cardTitle">What to bring</h3>
                <ul className="list">
                  <li>Water bottle</li>
                  <li>Athletic shoes</li>
                  <li>Hair tied back</li>
                  <li>Positive attitude</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section alt">
          <div className="container">
            <div className="sectionHead">
              <h2>About the Renegades</h2>
              <p>Our mission is to develop confident athletes through discipline, teamwork, and kindness.</p>
            </div>

            <div className="grid3">
              <div className="card">
                <h3 className="cardTitle">Confidence</h3>
                <p>We teach athletes to believe in themselves and perform with pride.</p>
              </div>
              <div className="card">
                <h3 className="cardTitle">Family</h3>
                <p>We support each other on the hardest days and celebrate every win.</p>
              </div>
              <div className="card">
                <h3 className="cardTitle">Growth</h3>
                <p>From basics to big moments — we build skills step-by-step.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <div className="sectionHead">
              <h2>Contact</h2>
              <p>Update these to your preferred contact method.</p>
            </div>

            <div className="grid2">
              <div className="card">
                <h3 className="cardTitle">Coaches</h3>
                <ul className="list">
                  <li><strong>Coach Celia:</strong> (915) 352-9033</li>
                  <li><strong>Coach Andy:</strong> (915) 472-0190</li>
                </ul>
              </div>

              <div className="card">
                <h3 className="cardTitle">Social</h3>
                <ul className="list">
                  <li><strong>Instagram:</strong> @statelinerenegades</li>
                  <li><strong>Facebook:</strong> Stateline Renegades</li>
                </ul>
                <div className="note">
                  Once this is live, Google can index it. Then you can submit the sitemap in Search Console.
                </div>
              </div>
            </div>

            <footer className="footer">
              <span>© {new Date().getFullYear()} Stateline Renegades</span>
              <span className="dot" aria-hidden="true">•</span>
              <a className="footerLink" href="#top" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'})}}>
                Back to top
              </a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  )
}
