const events = [
  {
    title: "Cheer Camp",
    date: "July 17–18",
    category: "Camp",
    description: "Youth cheer camp hosted by Stateline Renegades.",
  },
  {
    title: "Back-to-School Raffle Drawing",
    date: "July 25",
    category: "Fundraiser",
    description: "12 winners will be announced for the school supplies raffle.",
  },
  {
    title: "Riot / Karma Practice",
    date: "Tuesday – Thursday",
    category: "Practice",
    description: "6:00 PM – 8:00 PM",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="section">
      <div className="wrap">
        <h2>Upcoming Events</h2>

        <div className="grid3">
          {events.map((event) => (
            <div className="card" key={event.title} style={{ padding: 24 }}>
              <p style={{ fontWeight: 800, color: "#f87171" }}>
                {event.category}
              </p>

              <h3 style={{ marginTop: 0 }}>{event.title}</h3>

              <p style={{ fontSize: 18, fontWeight: 700 }}>
                {event.date}
              </p>

              <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}