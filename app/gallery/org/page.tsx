import Image from "next/image";

const photos = [
  "/gallery/organization/City.jpg",
  "/gallery/organization/field-trips.png",
  "/gallery/organization/fundraing.png",
  "/gallery/organization/intown.png",

  "/gallery/org/multi.png",
  "/gallery/org/org1.jpg",
  "/gallery/org/org2.png",
  "/gallery/org/org3.png",
  "/gallery/org/org4.jpg",
  "/gallery/org/org5.png",
  "/gallery/org/org6.png",
  "/gallery/org/org7.jpg",
  "/gallery/org/org8.png",
  "/gallery/org/out-of-town.png",
  "/gallery/org/team-bonding.jpg",
];

export default function OrganizationGallery() {
  return (
    <main className="wrap section">
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <h1
          style={{
            fontSize: "44px",
            marginBottom: "10px",
          }}
        >
          📸 Organization Gallery
        </h1>

        <p
          style={{
            opacity: 0.85,
            lineHeight: 1.7,
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Community events, fundraisers, field trips, team bonding,
          competitions, travel experiences, and memories from across the
          Stateline Renegades family.
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
              alt={`Organization photo ${index + 1}`}
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