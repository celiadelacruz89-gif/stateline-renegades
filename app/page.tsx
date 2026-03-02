// app/page.tsx
import TeamCard from "./components/TeamCard";
import SponsorCarousel from "./components/SponsorCarousel";
import { site, teams, sponsorLogos } from "./lib/data";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      {/* Header */}
      <header className="mb-10">
        <div className="text-3xl font-extrabold tracking-tight">
          {site.orgName}
        </div>
        <div className="mt-2 text-white/70">{site.tagline}</div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white/80">CashApp</div>
          <div className="mt-1 text-2xl font-bold">{site.cashApp.handle}</div>
          <div className="mt-1 text-sm text-white/70">{site.cashApp.note}</div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={`https://cash.app/${site.cashApp.handle.replace("$", "")}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
            >
              Donate via CashApp
            </a>

            {site.sponsorFormUrl ? (
              <a
                href={site.sponsorFormUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
              >
                Sponsor Form
              </a>
            ) : null}

            {site.sponsorPacketUrl ? (
              <a
                href={site.sponsorPacketUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
              >
                Sponsor Packet
              </a>
            ) : null}
          </div>
        </div>
      </header>

      {/* Teams */}
      <section className="mb-10">
        <div className="mb-4 text-xl font-bold">Teams & Programs</div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teams.map((t) => (
            <TeamCard key={t.id} team={t} />
          ))}
        </div>
      </section>

      {/* Sponsors */}
      <section className="mb-10">
        <SponsorCarousel items={sponsorLogos} />
      </section>

      {/* Contact */}
      <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-xl font-bold">Contact</div>

        <div className="mt-3 grid gap-2 text-white/80">
          {site.contacts.map((c) => (
            <div key={c.phone} className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">{c.name}:</span>
              <a className="underline" href={`tel:${c.phone.replace(/[^0-9]/g, "")}`}>
                {c.phone}
              </a>
            </div>
          ))}

          {site.email ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">Email:</span>
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          ) : null}

          {site.locationLine ? (
            <div className="text-white/70">{site.locationLine}</div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
