// app/page.tsx
import TeamCard from "./Components/TeamCard";
import { LINKS, SITE, contacts, teams } from "./lib/data";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#0b0b14] to-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* HERO */}
        <header className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm">
          <h1 className="text-3xl font-extrabold tracking-tight">{SITE.orgName}</h1>
          <p className="mt-2 text-white/70">{SITE.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={LINKS.karmaRiotRegistration}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2 font-semibold text-black hover:opacity-90"
            >
              Karma/Riot Registration
            </a>

            <a
              href={LINKS.tballRegistration}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/15"
            >
              T-Ball Registration
            </a>

            <a
              href={LINKS.sponsorship}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/15"
            >
              Sponsorship Application
            </a>
          </div>
        </header>

        {/* TEAMS */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold">Teams</h2>
          <p className="mt-1 text-white/70">Team info, CashApp, and registration links.</p>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teams.map((t) => (
              <TeamCard key={t.id} team={t} />
            ))}
          </div>
        </section>

        {/* T-BALL MERCH */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">T-Ball Merch Order Forms</h2>
          <p className="mt-1 text-white/70">Copy/paste ready links from your image.</p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a
              href={LINKS.tballMerch.players}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-3 text-center font-semibold text-black hover:opacity-90"
            >
              Players Order Form
            </a>
            <a
              href={LINKS.tballMerch.parentFamily}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 px-4 py-3 text-center font-semibold text-white hover:bg-white/15"
            >
              Parent/Family Order Form
            </a>
            <a
              href={LINKS.tballMerch.coach}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white/10 px-4 py-3 text-center font-semibold text-white hover:bg-white/15"
            >
              Coach Order Form
            </a>
          </div>
        </section>

        {/* CONTACTS */}
        <section className="mt-10 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Riot / Karma Contacts</h3>
            <div className="mt-3 space-y-2">
              {contacts.riotKarma.map((c) => (
                <div key={c.phone} className="rounded-xl bg-black/20 px-3 py-2">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-white/70">{c.phone}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">Anarchy Contact</h3>
            <div className="mt-3 space-y-2">
              {contacts.anarchy.map((c) => (
                <div key={c.phone} className="rounded-xl bg-black/20 px-3 py-2">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-white/70">{c.phone}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">T-Ball Contacts</h3>
            <div className="mt-3 space-y-2">
              {contacts.tball.map((c) => (
                <div key={c.phone} className="rounded-xl bg-black/20 px-3 py-2">
                  <div className="font-semibold">{c.name}</div>
                  <div className="text-white/70">{c.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK LINKS */}
        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Quick Links</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <a
              href={LINKS.karmaRiotRegistration}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-black/20 px-4 py-3 text-center font-semibold hover:bg-black/30"
            >
              Karma/Riot Registration
            </a>
            <a
              href={LINKS.tballRegistration}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-black/20 px-4 py-3 text-center font-semibold hover:bg-black/30"
            >
              T-Ball Registration
            </a>
            <a
              href={LINKS.sponsorship}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-black/20 px-4 py-3 text-center font-semibold hover:bg-black/30"
            >
              Sponsorship Form
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
