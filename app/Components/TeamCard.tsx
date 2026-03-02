// app/components/TeamCard.tsx
import Image from "next/image";
import type { Team } from "../lib/data";

export default function TeamCard({ team }: { team: Team }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-black/20">
          <Image
            src={team.logo}
            alt={team.name}
            fill
            className="object-contain p-2"
            sizes="56px"
          />
        </div>

        <div className="min-w-0">
          <div className="text-lg font-semibold leading-tight">{team.name}</div>
          <div className="text-sm text-white/70">
            {team.ages ? `${team.ages} • ` : ""}{team.colors ?? ""}
          </div>
        </div>
      </div>

      {team.description ? (
        <p className="mt-3 text-sm text-white/75">{team.description}</p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        {team.registrationUrl ? (
          <a
            href={team.registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
          >
            Register
          </a>
        ) : null}

        {team.fundraiserUrl ? (
          <a
            href={team.fundraiserUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15"
          >
            Fundraiser
          </a>
        ) : null}
      </div>
    </div>
  );
}
