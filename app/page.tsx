import Image from "next/image";
import { site, teams } from "./lib/data";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">

      {/* HEADER */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold">
          {site.orgName}
        </h1>
        <p className="mt-2 text-white/70">
          {site.tagline}
        </p>

        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            href={site.sponsorFormUrl}
            target="_blank"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
          >
            Become a Sponsor
          </a>
        </div>
      </header>

      {/* TEAMS */}
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">

        {teams.map((team) => (
          <div
            key={team.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16">
                <Image
                  src={team.logo}
                  alt={team.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  {team.name}
                </h2>
                <p className="text-sm text-white/70">
                  {team.ages ?? ""} {team.colors}
                </p>
              </div>
            </div>

            {/* CASHAPP */}
            {team.cashApp && (
              <div className="mt-4">
                <div className="text-sm text-white/60">
                  CashApp
                </div>
                <div className="text-lg font-bold">
                  {team.cashApp}
                </div>
                <a
                  href={`https://cash.app/${team.cashApp.replace("$", "")}`}
                  target="_blank"
                  className="text-sm underline text-white/70"
                >
                  Donate
                </a>
              </div>
            )}

            {/* REGISTRATION */}
            {team.registration && (
              <div className="mt-4">
                <a
                  href={team.registration}
                  target="_blank"
                  className="rounded-xl bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
                >
                  Register
                </a>
              </div>
            )}

            {/* T-BALL MERCH */}
            {"merch" in team && team.merch && (
              <div className="mt-4 space-y-2">
                <div className="text-sm font-semibold text-white/80">
                  T-Ball Merchandise
                </div>

                <a
                  href={team.merch.players}
                  target="_blank"
                  className="block text-sm underline text-white/70"
                >
                  Players Order Form
                </a>

                <a
                  href={team.merch.parents}
                  target="_blank"
                  className="block text-sm underline text-white/70"
                >
                  Parent/Family Order Form
                </a>

                <a
                  href={team.merch.coaches}
                  target="_blank"
                  className="block text-sm underline text-white/70"
                >
                  Coach Order Form
                </a>
              </div>
            )}
          </div>
        ))}

      </section>

      {/* CONTACT */}
      <section className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="text-xl font-bold">Contact</h2>

        <div className="mt-4 space-y-2">
          {site.contacts.map((c) => (
            <div key={c.phone}>
              <span className="font-semibold">
                {c.name}:
              </span>{" "}
              <a
                href={`tel:${c.phone.replace(/[^0-9]/g, "")}`}
                className="underline"
              >
                {c.phone}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
