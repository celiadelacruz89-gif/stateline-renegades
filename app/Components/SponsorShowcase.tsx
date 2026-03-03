"use client";
import Image from "next/image";
import Link from "next/link";

type SponsorItem = { name: string; url: string };

async function getSponsors(): Promise<SponsorItem[]> {
  // Pulls from API (which lists blob uploads in /sponsors/)
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/api/sponsors`, {
    cache: "no-store",
  }).catch(() => null);

  if (!res || !res.ok) return [];
  return res.json();
}

export default async function SponsorShowcase() {
  const sponsors = await getSponsors();
  if (!sponsors.length) return null;

  // duplicate list so the marquee loops smoothly
  const loop = [...sponsors, ...sponsors];

  return (
    <div className="sponsorWrap">
      <div className="sponsorHeader">
        <div>
          <h2>Our Sponsors</h2>
          <p>Thank you for supporting the Stateline Renegades.</p>
        </div>
        <Link className="sponsorCta" href="/admin">
          + Upload Sponsor Logos
        </Link>
      </div>

      <div className="sponsorRail">
        <div className="sponsorFadeLeft" />
        <div className="sponsorFadeRight" />

        <div className="sponsorTrack">
          {loop.map((s, i) => (
            <div key={`${s.url}-${i}`} className="sponsorCard">
              <div className="sponsorLogoBox">
                <Image src={s.url} alt={s.name} fill style={{ objectFit: "contain" }} />
              </div>
              <div className="sponsorName">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
