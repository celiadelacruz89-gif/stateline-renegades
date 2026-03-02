// app/components/SponsorCarousel.tsx
import Image from "next/image";

export default function SponsorCarousel({
  items,
}: {
  items: { src: string; alt: string }[];
}) {
  // Simple “scroll row” (no JS needed)
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mb-2 text-sm font-semibold text-white/80">
        Sponsor Highlights
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2">
        {items.map((it) => (
          <div
            key={it.src}
            className="flex h-16 w-44 shrink-0 items-center justify-center rounded-xl bg-black/20"
          >
            <Image
              src={it.src}
              alt={it.alt}
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <div className="mt-2 text-xs text-white/60">
        (Add sponsor images in <code className="text-white/70">public/sponsors</code>)
      </div>
    </div>
  );
}
