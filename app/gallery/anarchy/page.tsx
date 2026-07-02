export default function MayhemGallery() {
  return (
    <main className="wrap section">
      <h1>❤️ Anarchy Gallery</h1>

      <p>
        Full travel team highlights, competitions, practices, and team memories.
      </p>

      <div
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          marginTop: "20px",
        }}
      >
        {[1,2,3,4,5,6].map((i) => (
          <div
            key={i}
            className="card"
            style={{
              height: "250px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Mayhem Photo {i}
          </div>
        ))}
      </div>
    </main>
  );
}