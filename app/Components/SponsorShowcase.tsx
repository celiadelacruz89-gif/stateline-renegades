"use client";

import Image from "next/image";

export type Sponsor = {
  name: string;
  logo: string; // path inside /public (example: "/sponsors/acme.png")
  url?: string; // optional website link
};

export default function SponsorShowcase({
  sponsors,
  sponsorFormUrl,
}: {
  sponsors: Sponsor[];
  sponsorFormUrl: string;
}) {
  const loop = [...sponsors, ...sponsors]; // duplicates for smooth marquee

  return (
    <div className="sponsorWrap">
      <div className="sponsorHeader">
        <div>
          <h2>Elite Sponsor Highlights</h2>
          <p>Hover to pause. Click a sponsor to visit their page (if provided).</p>
        </div>

        <a className="sponsorCta" href={sponsorFormUrl} target="_blank" rel="noreferrer">
          Become a Sponsor →
        </a>
      </div>

      <div className="sponsorRail">
        <div className="sponsorFadeLeft" />
        <div className="sponsorFadeRight" />

        <div className="sponsorTrack">
          {loop.map((s, i) => {
            const card = (
              <div className="sponsorCard">
                <div className="sponsorLogoBox">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="210px"
                    priority={i < 6}
                  />
                </div>
                <div className="sponsorName">{s.name}</div>
              </div>
            );

            return s.url ? (
              <a key={`${s.name}-${i}`} className="sponsorLink" href={s.url} target="_blank" rel="noreferrer">
                {card}
              </a>
            ) : (
              <div key={`${s.name}-${i}`}>{card}</div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
