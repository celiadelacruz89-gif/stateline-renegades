"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import type { Sponsor } from "../lib/data";

type Props = {
  sponsors: Sponsor[];
  ctaHref?: string;
  ctaLabel?: string;
};

function normalizeSponsors(list: Sponsor[]) {
  return list
    .filter((s) => s?.name && s?.logo)
    .map((s) => ({
      name: s.name.trim(),
      logo: s.logo.startsWith("/") ? s.logo : `/${s.logo}`,
      url: s.url?.trim() || undefined,
    }));
}

export default function SponsorShowcase({
  sponsors,
  ctaHref = "https://form.jotform.com/celiadelacruz89/sponsorship-application-form",
  ctaLabel = "Become a Sponsor",
}: Props) {
  const items = useMemo(() => normalizeSponsors(sponsors), [sponsors]);

  // Duplicate list for seamless infinite loop
  const loop = useMemo(() => [...items, ...items], [items]);

  if (!items.length) {
    return (
      <section className="sponsorWrap">
        <div className="sponsorHeader">
          <div>
            <h2>Sponsor Highlights</h2>
            <p>Add logos to <code>/public/sponsors/</code> and list them in <code>app/lib/data.ts</code>.</p>
          </div>
          <Link className="sponsorCta" href={ctaHref} target="_blank" rel="noreferrer">
            {ctaLabel}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="sponsorWrap">
      <div className="sponsorHeader">
        <div>
          <h2>Sponsor Highlights</h2>
          <p>Tap a logo to visit their page. Hover to pause.</p>
        </div>

        <Link className="sponsorCta" href={ctaHref} target="_blank" rel="noreferrer">
          {ctaLabel}
        </Link>
      </div>

      <div className="sponsorRail" aria-label="Sponsor carousel">
        <div className="sponsorFadeLeft" />
        <div className="sponsorFadeRight" />

        <div className="sponsorTrack" role="list">
          {loop.map((s, idx) => {
            const Card = (
              <div className="sponsorCard" role="listitem" key={`${s.name}-${idx}`}>
                <div className="sponsorLogoBox">
                  <Image
                    src={s.logo}
                    alt={`${s.name} logo`}
                    fill
                    sizes="(max-width: 768px) 160px, 200px"
                    style={{ objectFit: "contain" }}
                    priority={idx < 6}
                  />
                </div>
                <div className="sponsorName" title={s.name}>
                  {s.name}
                </div>
              </div>
            );

            return s.url ? (
              <a
                key={`${s.name}-${idx}`}
                className="sponsorLink"
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open sponsor: ${s.name}`}
              >
                {Card}
              </a>
            ) : (
              <div key={`${s.name}-${idx}`} className="sponsorLink" aria-label={s.name}>
                {Card}
              </div>
            );
          })}

          {/* CTA card appears once per loop */}
          <a className="sponsorLink" href={ctaHref} target="_blank" rel="noreferrer" aria-label="Become a sponsor">
            <div className="sponsorCard sponsorCtaCard">
              <div className="sponsorCtaIcon">★</div>
              <div className="sponsorCtaTitle">Become a Sponsor</div>
              <div className="sponsorCtaSub">
                Get featured here
                <br />
                & support local kids
              </div>
              <div className="sponsorCtaBtn">Apply Now</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
