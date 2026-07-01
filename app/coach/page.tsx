const coaches = [
  {
    name: "Coach Celia DeLaCruz",
    role: "Assistant Director / Coach",
    bio: "Dedicated to building confident athletes through teamwork, discipline, encouragement, and strong fundamentals.",
  },
  {
    name: "Coach Rudy Bertolli",
    role: "Founder & CEO",
    bio: "Focused on growing the Stateline Renegades organization and creating opportunities for athletes and families.",
  },
];

export default function CoachesPage() {
  return (
    <main className="wrap section">
      <h1>Coach & Staff</h1>

      <p style={{ fontSize: 20, opacity: 0.9, lineHeight: 1.7 }}>
        Meet the leaders, coaches, and volunteers helping build the Stateline
        Renegades family.
      </p>

      <section className="grid2">
        {coaches.map((coach) => (
          <div className="card" key={coach.name} style={{ padding: 24 }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>⭐</div>

            <h2 style={{ marginTop: 0 }}>{coach.name}</h2>

            <p style={{ fontWeight: 800, color: "#f87171" }}>
              {coach.role}
            </p>

            <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
              {coach.bio}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}