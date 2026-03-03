"use client";

import Image from "next/image";

export type Sponsor = {
  name: string;
  logo: string; // example: "/sponsors/logo.png"
  href?: string;
};

interface Props {
  sponsors: Sponsor[];
  sponsorForm: string;
}

export default function SponsorShowcase({ sponsors, sponsorForm }: Props) {
  if (!sponsors || sponsors.length === 0) return null;

  // Duplicate list for smooth infinite scroll
  const loop = [...sponsors, ...sponsors];

  return (
    <section className="sponsorWrap">
      <div className="sponsorHeader">
        <div>
          <h2>Our Sponsors</h2>
          <p>We proudly thank the businesses that support our athletes.</p>
        </div>

        <a
          className="sponsorCta"
          href={sponsorForm}
          target="_blank"
          rel="noreferrer"
        >
          Become a Sponsor →
        </a>
      </div>

      <div className="sponsorRail">
        <div className="sponsorFadeLeft" />
        <div className="sponsorFadeRight" />

        <div className="sponsorTrack">
          {loop.map((s, index) => {
            const Card = (
              <div className="sponsorCard">
                <div className="sponsorLogoBox">
                  <Image
                    src={s.logo}
                    alt={s.name}
                    fill
                    sizes="210px"
                    style={{ objectFit: "contain", padding: 10 }}
                    priority={index < sponsors.length}
                  />
                </div>
                <div className="sponsorName">{s.name}</div>
              </div>
            );

            return s.href ? (
              <a
                key={`${s.name}-${index}`}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="sponsorLink"
              >
                {Card}
              </a>
            ) : (
              <div key={`${s.name}-${index}`} className="sponsorLink">
                {Card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
