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
    <div className="relative h-[700px] w-full overflow-hidden rounded-[28px]">
      {slides.map((slide, index) => (
        <Image
          key={slide}
          src={slide}
          alt={`Stateline Renegades hero ${index + 1}`}
          fill
          priority={index === 0}
          className="z-0 object-cover transition-opacity duration-1000"
          style={{ opacity: current === index ? 1 : 0 }}
        />
      ))}

      <div className="absolute inset-0 z-10 bg-black/60" />

      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center text-white">
        <div className="max-w-5xl">
          <div className="mb-5 inline-block rounded-full bg-white/15 px-5 py-2 font-bold">
            T-Ball • Anarchy • Mayhem • Riot • Karma
          </div>

          <h1 className="mb-4 text-5xl font-extrabold md:text-7xl">
            STATELINE RENEGADES
          </h1>

          <p className="mb-2 text-xl md:text-2xl">
            Building Champions On and Off the Field
          </p>

          <p className="mb-8 text-lg md:text-xl">
            Cheer • T-Ball • Baseball • Community • Family
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://form.jotform.com/260336801253046"
              className="rounded-lg bg-pink-500 px-6 py-3 font-bold text-white hover:bg-pink-600"
            >
              Register Now
            </a>

            <a
              href="https://form.jotform.com/celiadelacruz89/sponsorship-application-form"
              className="rounded-lg bg-teal-500 px-6 py-3 font-bold text-white hover:bg-teal-600"
            >
              Become A Sponsor
            </a>

            <a
              href="#teams"
              className="rounded-lg bg-white px-6 py-3 font-bold text-black hover:bg-gray-200"
            >
              Meet Our Teams
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}