// app/Components/TeamCard.tsx
import Image from "next/image";
import type { Team } from "../lib/data";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-black/20">
          <Image
            src={team.logo}
            alt={`${team.name} logo`}
            fill
            className="object-contain p-2"
            sizes="56px"
            priority={false}
          />
        </div>

        <div className="min-w-0">
          <div className="text-lg font-semibold leading-tight">{team.name}</div>
          <div className="text-sm text-white/70">
            {team.ages} • {team.colors}
          </div>
        </div>
      </div>

      <div className="mt-4 grid gap-2 text-sm">
        <div className="flex items-center justify-between rounded-xl bg-black/20 px-3 py-2">
          <span className="text-white/70">CashApp</span>
          <span className="font-semibold">{team.cashApp}</span>
        </div>

        {team.registration ? (
          <a
            href={team.registration}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white px-3 py-2 text-center font-semibold text-black hover:opacity-90"
          >
            Registration Form
          </a>
        ) : (
          <div className="rounded-xl bg-black/20 px-3 py-2 text-center text-white/70">
            Registration link coming soon
          </div>
        )}
      </div>
    </div>
  );
}
