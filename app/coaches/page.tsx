import Image from "next/image";

const coaches = [

  {
    name: "Celia DeLaCruz",
    role: "Riot/Karma Coach",
    image: "/coaches/celia.jpg",
    bio: "Dedicated to building confident athletes through teamwork, discipline, encouragement, and strong fundamentals.",
  },
  {
    name: "Andrea (Andy) Moreno ",
    role: "Riot Coach",
     image: "/coaches/andrea.jpg",
    bio: "Confidence is earned through preparation and perseverance.",
  },
    {
    name: "Diana Roman ",
    role: "Riot Coach",
    image: "/coaches/diana.jpg",
    bio: "Great teams are built on trust, effort, and heart.",
  },
  {
    name: "Azalia Bertolli ",
    role: "Karma Coach",
    image: "/coaches/azalia.png",
    bio: "Empowering athletes to shine with confidence, strength, and pride.",
  },
  {
    name: "Azazel Reyes ",
    role: "Karma Coach",
    image: "/coaches/azazel.jpg",
    bio: "One team. One family. Endless possibilities.",
  },
  {
    name: "Julie Stitt",
    role: "Anarchy Coach",
    image: "/coaches/julie.png",
    bio: "Creating confident athletes and unforgettable memories.",
  },
  {
    name: "Arlene Hinojosa ",
    role: "Anarchy Coach",
    image: "/coaches/arlene.png",
    bio: "More than a team—we're a family committed to growth and success.",
  },
  {
    name: "Lizbeth Davis ",
    role: "Mayhem Coach",
    image: "/coaches/lizbeth.png",
    bio: "Teaching young athletes to lead, believe, and achieve.",
  },
  {
    name: "Rudy Bertolli",
    role: "T-Ball Coach",
     image: "/coaches/rudy.jpg",
    bio: "Focused on growing the Stateline Renegades organization and creating opportunities for athletes and families.",
  },
{
  name: "James Garey",
    role: "T-Ball Coach",
    image: "/coaches/james.jpg",
    bio: "Believes every child deserves the opportunity to learn, grow, and succeed on the field.",
  },
{
 name: "Luis Ramirez",
    role: "T-Ball Coach",
    image: "/coaches/luis.jpg",
    bio: "Committed to making a positive impact on every athlete who wears the Renegades uniform.",
  },
  {
 name: "Terone (T) Collins",
    role: "T-Ball Coach",
    image: "/coaches/terone.jpg",
    bio: "Bringing energy, encouragement, and a positive attitude to every practice and game.",
  },
  ];

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
          <div className="card" key={coach.name} style={{ padding: 24 }}>
            <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: 16,
  }}
>
  <Image
    src={coach.image}
    alt={coach.name}
    width={120}
    height={120}
    style={{
      borderRadius: "50%",
      objectFit: "cover",
      border: "3px solid #ffffff",
    }}
  />
</div>

            <h2 style={{ marginTop: 0 }}>{coach.name}</h2>

            <p style={{ fontWeight: 800, color: "#f87171" }}>{coach.role}</p>

            <p style={{ lineHeight: 1.7, opacity: 0.9 }}>{coach.bio}</p>
          </div>
        ))}
      </section>
    </main>
  );
}