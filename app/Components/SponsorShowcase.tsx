"use client";

import Image from "next/image";

export type Sponsor = {
  name: string;
  logo: string; // path in /public, e.g. "/sponsors/acme.png"
  url?: string; // optional click-through
};

export default function SponsorShowcase({
  sponsors,
  sponsorFormUrl,
}: {
  sponsors: Sponsor[];
  sponsorFormUrl: string;
}) {
  // duplicate list so marquee can loop seamlessly
  const track = [...sponsors, ...sponsors];

  return (
    <section className="sponsorWrap">
      <div className="sponsorHeader">
        <div>
          <h2>Sponsor Highlights</h2>
          <p>Your sponsor logos scroll here (carousel). Hover to pause.</p>
        </div>

        <a className="sponsorCta" href={sponsorFormUrl} target="_blank" rel="noreferrer">
          Become a Sponsor →
        </a>
      </div>

      <div className="sponsorRail">
        <div className="sponsorFadeLeft" />
        <div className="sponsorFadeRight" />

        <div className="sponsorTrack">
          {track.map((s, i) => {
            const Card = (
              <div className="sponsorCard">
                <div className="sponsorLogoBox">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fill
                    sizes="210px"
                    style={{ objectFit: "contain", padding: 10 }}
                  />
                </div>
                <div className="sponsorName">{s.name}</div>
              </div>
            );

            return s.url ? (
              <a
                key={`${s.name}-${i}`}
                className="sponsorLink"
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
              >
                {Card}
              </a>
            ) : (
              <div key={`${s.name}-${i}`}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
