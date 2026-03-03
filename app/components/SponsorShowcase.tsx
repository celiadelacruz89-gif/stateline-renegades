"use client";

import Image from "next/image";

export type Sponsor = {
  name: string;
  logo: string; // "/sponsors/file.png" OR https://... (Blob)
  href?: string;
};

export default function SponsorShowcase({
  sponsors,
  sponsorForm,
}: {
  sponsors: Sponsor[];
  sponsorForm: string;
}) {
  if (!sponsors?.length) return null;

  // Duplicate for seamless marquee
  const loop = [...sponsors, ...sponsors];

  return (
    <section className="sponsorWrap">
      <div className="sponsorHeader">
        <div>
          <h2>Sponsor Highlights</h2>
          <p>Thank you to our sponsors — tap a logo to learn more.</p>
        </div>

        <a className="sponsorCta" href={sponsorForm} target="_blank" rel="noreferrer">
          Become a Sponsor →
        </a>
      </div>

      <div className="sponsorRail">
        <div className="sponsorFadeLeft" />
        <div className="sponsorFadeRight" />

        <div className="sponsorTrack">
          {loop.map((s, idx) => {
            const Card = (
              <div className="sponsorCard">
                <div className="sponsorLogoBox">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fill
                    sizes="210px"
                    style={{ objectFit: "contain", padding: 10 }}
                    priority={idx < 6}
                  />
                </div>
                <div className="sponsorName">{s.name}</div>
              </div>
            );

            return s.href ? (
              <a key={`${s.name}-${idx}`} className="sponsorLink" href={s.href} target="_blank" rel="noreferrer">
                {Card}
              </a>
            ) : (
              <div key={`${s.name}-${idx}`} className="sponsorLink">
                {Card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
