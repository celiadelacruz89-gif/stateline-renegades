"use client";

import { useEffect, useState } from "react";

type GalleryItem = {
  url: string;
  pathname: string;
  uploadedAt: string | null;
  size: number | null;
  isImage: boolean;
  isVideo: boolean;
};

type Props = {
  team: "org" | "karma" | "riot" | "anarchy" | "mayhem" | "tball";
  title?: string;
};

export default function PublicGallery({ team, title }: Props) {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    async function loadGallery() {
      try {
        setLoading(true);
        const res = await fetch(`/api/gallery?team=${team}`, {
          cache: "no-store",
        });
        const data = await res.json();
        if (!ignore) {
          setItems(Array.isArray(data.items) ? data.items : []);
        }
      } catch (error) {
        console.error("Failed to load gallery:", error);
        if (!ignore) setItems([]);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    loadGallery();

    return () => {
      ignore = true;
    };
  }, [team]);

  return (
    <section className="space-y-4">
      {title ? <h2 className="text-2xl font-bold">{title}</h2> : null}

      {loading ? (
        <p>Loading gallery...</p>
      ) : items.length === 0 ? (
        <p>No uploads available yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.pathname}
              className="overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {item.isImage ? (
                <img
                  src={item.url}
                  alt={item.pathname}
                  className="h-64 w-full object-cover"
                />
              ) : item.isVideo ? (
                <video
                  src={item.url}
                  controls
                  className="h-64 w-full object-cover"
                />
              ) : null}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
