import Image from "next/image";

const coaches = [
  {
    name: "Celia DeLaCruz",
    role: "Riot/Karma Coach",
    team: "riot/karma",
    image: "/coaches/celia.jpg",
    bio: "Dedicated to building confident athletes through teamwork, discipline, encouragement, and strong fundamentals.",
  },
  {
    name: "Andrea (Andy) Moreno",
    role: "Riot Coach",
    team: "riot",
    image: "/coaches/andrea.jpg",
    bio: "Confidence is earned through preparation and perseverance.",
  },
  {
    name: "Diana Roman",
    role: "Riot Coach",
    team: "riot",
    image: "/coaches/diana.jpg",
    bio: "Great teams are built on trust, effort, and heart.",
  },
  {
    name: "Azalia Bertolli",
    role: "Karma Coach",
    team: "karma",
    image: "/coaches/azalia.jpg",
    bio: "Empowering athletes to shine with confidence, strength, and pride.",
  },
  {
    name: "Azazel Reyes",
    role: "Karma Coach",
    team: "karma",
    image: "/coaches/azazel.jpg",
    bio: "One team. One family. Endless possibilities.",
  },
  {
    name: "Julie Stitt",
    role: "Anarchy Coach",
    team: "anarchy",
    image: "/coaches/julie.jpg",
    bio: "Creating confident athletes and unforgettable memories.",
  },
  {
    name: "Arlene Hinojosa",
    role: "Anarchy Coach",
    team: "anarchy",
    image: "/coaches/arlene.jpg",
    bio: "More than a team—we're a family committed to growth and success.",
  },
  {
    name: "Lizbeth Davis",
    role: "Mayhem Coach",
    team: "mayhem",
    image: "/coaches/lizbeth.jpg",
    bio: "Teaching young athletes to lead, believe, and achieve.",
  },
  {
    name: "Rudy Bertolli",
    role: "T-Ball Coach",
    team: "tball",
    image: "/coaches/rudy.jpg",
    bio: "Focused on growing the Stateline Renegades organization and creating opportunities for athletes and families.",
  },
  {
    name: "James Garey",
    role: "T-Ball Coach",
    team: "tball",
    image: "/coaches/james.jpg",
    bio: "Believes every child deserves the opportunity to learn, grow, and succeed on the field.",
  },
  {
    name: "Luis Ramirez",
    role: "T-Ball Coach",
    team: "tball",
    image: "/coaches/luis.jpg",
    bio: "Committed to making a positive impact on every athlete who wears the Renegades uniform.",
  },
  {
    name: "Terone (T) Collins",
    role: "T-Ball Coach",
    team: "tball",
    image: "/coaches/terone.jpg",
    bio: "Bringing energy, encouragement, and a positive attitude to every practice and game.",
  },
];

const teamColors: Record<string, string> = {
  riot: "#17843fad",
  karma: "#048dacc4",
  anarchy: "#dc2626db",
  mayhem: "#9333ea",
  tball: "#ff0505",
};

export default function CoachesPage() {
  return (
    <main className="wrap section">
      <h1>Coach &amp; Staff</h1>

      <p style={{ fontSize: 20, opacity: 0.9, lineHeight: 1.7 }}>
        Meet the leaders, coaches, and volunteers helping build the Stateline
        Renegades family.
      </p>

      <section className="grid2">
        {coaches.map((coach) => (
          <div
            className="card"
            key={coach.name}
            style={{
              padding: 24,
              borderTop: `6px solid ${teamColors[coach.team]}`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
              <Image
                src={coach.image}
                alt={coach.name}
                width={120}
                height={120}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: `4px solid ${teamColors[coach.team]}`,
                }}
              />
            </div>

            <h2 style={{ marginTop: 0 }}>{coach.name}</h2>

            <p
              style={{
                background: teamColors[coach.team],
                color: "white",
                display: "inline-block",
                padding: "6px 12px",
                borderRadius: 999,
                fontWeight: 800,
              }}
            >
              {coach.role}
            </p>

            <p style={{ lineHeight: 1.7, opacity: 0.9 }}>{coach.bio}</p>
          </div>
        ))}
      </section>
    </main>
  );
}