export type TeamKey = "org" | "riot" | "karma" | "anarchy" | "blessedmayhem" | "tball";

export const TEAMS: { key: TeamKey; name: string; colors: string; ages: string; travel: string; cashapp?: string; logo: string }[] = [
  { key: "riot", name: "Riot", colors: "Dark Green + Light Pink", ages: "Ages 5–14", travel: "Limited travel + non-travel", cashapp: "$statelinerenegades", logo: "/logos/riot.png" },
  { key: "karma", name: "Karma", colors: "Teal + Light Pink", ages: "Ages 3–5", travel: "Non-travel", cashapp: "$statelinerenegades", logo: "/logos/karma.png" },
  { key: "anarchy", name: "Anarchy", colors: "Metallic Red + Black", ages: "Ages 6–18", travel: "Full travel", cashapp: "$renegadescheerteam", logo: "/logos/anarchy.png" },
  { key: "blessedmayhem", name: "Blessed Mayhem", colors: "Black + Purple", ages: "Ages 6–12", travel: "Full travel", cashapp: "$renegadescheerteam", logo: "/logos/blessedmayhem.png" },
  { key: "tball", name: "T‑Ball", colors: "Red + Black", ages: "T‑Ball", travel: "Baseball program", cashapp: "$renegadesbb", logo: "/logos/tball.png" }
];

export const LINKS = {
  cheerRegister: "https://form.jotform.com/260336801253046",
  tballRegister: "https://form.jotform.com/260086521920149",
  sponsorForm: "https://form.jotform.com/celiadelacruz89/sponsorship-application-form",
  baseballLinks: [
    { title: "Players Order Form", url: "https://form.jotform.com/260125057825050" },
    { title: "Parent/Family Order Form", url: "https://form.jotform.com/260124714767054" },
    { title: "Coach Order Form", url: "https://form.jotform.com/260125031204033" }
  ]
};
