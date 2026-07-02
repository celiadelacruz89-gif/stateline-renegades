"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  "/Hero/hero1.jpg  (T-Ball).png",
  "/Hero/hero2.jpg  (Karma).png",
  "/Hero/hero3.jpg  (Riot).png",
  "/Hero/hero4.jpg  (Anarchy).png",
  "/Hero/hero5.jpg  (Mayhem).png",
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        height: "700px",
        width: "100%",
        overflow: "hidden",
        borderRadius: "28px",
      }}
    >
      {slides.map((slide, index) => (
        <Image
          key={slide}
          src={slide}
          alt={`Stateline Renegades hero ${index + 1}`}
          fill
          priority={index === 0}
          style={{
            objectFit: "cover",
            opacity: current === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: 1,
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: "900px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.18)",
              fontWeight: 800,
              marginBottom: "22px",
            }}
          >
            T-Ball • Anarchy • Mayhem • Riot • Karma
          </div>

          <h1
            style={{
              fontSize: "clamp(44px, 7vw, 96px)",
              lineHeight: 1,
              margin: "0 0 18px",
              fontWeight: 950,
            }}
          >
            STATELINE RENEGADES
          </h1>

          <p style={{ fontSize: "clamp(22px, 3vw, 34px)", margin: "0 0 10px" }}>
            Building Champions On and Off the Field
          </p>

          <p style={{ fontSize: "clamp(16px, 2vw, 24px)", margin: "0 0 34px" }}>
            Cheer • T-Ball • Baseball • Community • Family
          </p>

         <div
  style={{
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
  }}
>
  <a
    className="btn"
    href="https://form.jotform.com/260336801253046"
    target="_blank"
    rel="noreferrer"
  >
    Register for Riot / Karma
  </a>

  <a
    className="btn"
    href="https://forms.gle/6W6GNLNYwYCay7zXA"
    target="_blank"
    rel="noreferrer"
  >
    Register for Mayhem
  </a>

  <a
    className="btn"
    href="https://form.jotform.com/celiadelacruz89/sponsorship-application-form"
    target="_blank"
    rel="noreferrer"
  >
    Become A Sponsor
  </a>

  <a className="btn" href="#teams">
    Meet Our Teams
  </a>
</div>
      )}
    </>
  );
}