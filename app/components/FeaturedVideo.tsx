"use client";

import { useState } from "react";

export default function FeaturedVideo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Watch The Renegades In Action
          </h2>

          <p className="text-center text-gray-300 mb-8">
            More than a team. More than a sport.
          </p>

          <div
            onClick={() => setOpen(true)}
            className="relative cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full"
            >
              <source
                src="/videos/renegades-highlight.mp4"
                type="video/mp4"
              />
            </video>

            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center text-black text-3xl">
                ▶
              </div>
            </div>
          </div>
        </div>
      </section>

      {open && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <video
            controls
            autoPlay
            className="max-w-6xl w-full rounded-2xl"
          >
            <source
              src="/videos/renegades-highlight.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </>
  );
}