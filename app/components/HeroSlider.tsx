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
        width: "100%",
        height: "500px",
        borderRadius: "28px",
        overflow: "hidden",
      }}
    >
      {slides.map((slide, index) => (
        <Image
          key={slide}
          src={slide}
          alt={`Hero ${index + 1}`}
          fill
          priority={index === 0}
          style={{
            objectFit: "cover",
            opacity: current === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.75))",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "40px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "fit-content",
            padding: "8px 16px",
            borderRadius: "999px",
            background: "rgba(255,255,255,.15)",
            marginBottom: "18px",
            fontWeight: 700,
          }}
        >
          T-Ball • Anarchy • Mayhem • Riot • Karma
        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            margin: 0,
            lineHeight: 1,
          }}
        >
          Stateline Renegades
        </h1>

        <h2
          style={{
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            marginTop: "12px",
            fontWeight: 600,
          }}
        >
          One Organization. Five Teams. One Renegade Family.
        </h2>

        <p
          style={{
            maxWidth: "700px",
            marginTop: "16px",
            fontSize: "1.1rem",
            lineHeight: 1.7,
          }}
        >
          Building confidence, discipline, teamwork, leadership, and lifelong
          memories through youth sports.
        </p>
      </div>
    </div>
  );
}