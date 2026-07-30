import Image from "next/image";

 const photos = [
  "/gallery/organization/City.jpg",
  "/gallery/organization/field-trips.png",
  "/gallery/organization/fundraising.png",
  "/gallery/organization/intown.png",
  "/gallery/organization/mcdonalds.png",
  "/gallery/organization/memories.png",
  "/gallery/organization/multi.png",
  "/gallery/organization/org1.jpg",
  "/gallery/organization/org2.png",
  "/gallery/organization/org3.png",
  "/gallery/organization/org4.jpg",
  "/gallery/organization/org5.png",
  "/gallery/organization/org6.png",
  "/gallery/organization/org7.jpg",
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