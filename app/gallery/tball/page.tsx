import Image from "next/image";

const photos = [
  "/gallery/tball/focused.jpg",
  "/gallery/tball/tball1.jpg",
  "/gallery/tball/tball2.png",
  "/gallery/tball/tball3.png",
  "/gallery/tball/tball10.png",
  "/gallery/tball/tball11.png",
  "/gallery/tball/tball12.jpg",
  "/gallery/tball/tball13.jpg",
  "/gallery/tball/tball14.jpg",
  "/gallery/tball/team.png",
  "/gallery/tball/win.png",
];

export default function TBallGallery() {
  return (
    <main className="wrap section">
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <h1 style={{ fontSize: "44px", marginBottom: "10px" }}>
          ⚾ T-Ball Gallery
        </h1>
        <p style={{ opacity: 0.85, lineHeight: 1.7 }}>
          Games, practices, team moments, player highlights, and Renegades memories.
        </p>
      </div>

      <section
        style={{
          display: "grid",
          gap: "16px",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={photo}
            className="card"
            style={{ overflow: "hidden", borderRadius: "22px", padding: 0 }}
          >
            <Image
              src={photo}
              alt={`T-Ball gallery photo ${index + 1}`}
              width={900}
              height={700}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </section>
    </main>
  );
}