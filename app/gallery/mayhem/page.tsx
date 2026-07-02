import Image from "next/image";

const photos = [
  "/gallery/mayhem/mayhem1.png",
  "/gallery/mayhem/mayhem2.png",
  "/gallery/mayhem/mayhem3.png",
];

export default function MayhemGallery() {
  return (
    <main className="wrap section">
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <h1
          style={{
            fontSize: "44px",
            marginBottom: "10px",
            color: "#9333ea",
          }}
        >
          💜 Mayhem Gallery
        </h1>

        <p
          style={{
            opacity: 0.85,
            lineHeight: 1.7,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Full travel team highlights, competitions, practices,
          performances, and unforgettable Mayhem moments.
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
            style={{
              overflow: "hidden",
              borderRadius: "22px",
              padding: 0,
            }}
          >
            <Image
              src={photo}
              alt={`Mayhem gallery photo ${index + 1}`}
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