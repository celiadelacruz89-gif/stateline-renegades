// app/lib/data.ts

export type Contact = {
  name: string;
  phone: string; // keep as "915-xxx-xxxx" for display
};

export type Team = {
  id: "karma" | "riot" | "anarchy" | "tball";
  name: string;
  ages: string;
  colors: string;
  logo: string; // path in /public (example: "/logos/karma.png")
  cashApp?: string;
  registration?: string;
  contacts: Contact[];
};

export const org = {
  name: "Stateline Renegades",
  tagline: "Cheer • Baseball • Community • Family",
  // Forms / Links
  sponsorForm: "https://form.jotform.com/celiadelacruz89/sponsorship-application-form",
  karmaRiotRegistration: "https://form.jotform.com/260336801253046",
  tballRegistration: "https://form.jotform.com/260086521920149",
  // T-Ball Merch Links (from your screenshot)
  tballMerch: {
    players: "https://form.jotform.com/260125057825050",
    parentFamily: "https://form.jotform.com/260124714767054",
    coach: "https://form.jotform.com/260125031204033",
  },
};

export const teams: Team[] = [
  {
    id: "karma",
    name: "Karma Renegades",
    ages: "Ages 3–5",
    colors: "Teal & Light Pink",
    logo: "/logos/karma.png",
    cashApp: "$statelinerenegades",
    registration: org.karmaRiotRegistration,
    contacts: [
      { name: "Coach Celia", phone: "915-352-9033" },
      { name: "Coach Andy", phone: "915-472-0190" },
    ],
  },
  {
    id: "riot",
    name: "Renegades Riot",
    ages: "Ages 6–14",
    colors: "Dark Green & Light Pink",
    logo: "/logos/riot.png",
    cashApp: "$statelinerenegades",
    registration: org.karmaRiotRegistration,
    contacts: [
      { name: "Coach Celia", phone: "915-352-9033" },
      { name: "Coach Andy", phone: "915-472-0190" },
    ],
  },
  {
    id: "anarchy",
    name: "Renegades Anarchy",
    ages: "Ages 6–18",
    colors: "Metallic Red & Black",
    logo: "/logos/anarchy.png",
    cashApp: "$renegadescheerteam",
    contacts: [{ name: "Team mom Jennifer", phone: "915-803-9442" }],
  },
  {
    id: "tball",
    name: "Renegades T-Ball",
    ages: "T-Ball / Baseball",
    colors: "Red & Black",
    logo: "/logos/tball.png",
    cashApp: "$RenegadesBB",
    registration: org.tballRegistration,
    contacts: [
      { name: "Coach Rudy", phone: "915-352-9504" },
      { name: "Team mom Linette", phone: "915-497-0213" },
    ],
  },
];

// ✅ Compatibility exports (fixes your build errors no matter which import name pages use)
export const TEAMS = teams;
// --- Sponsors (logos go in: /public/sponsors/...) ---
export const sponsors = [
  { name: "Mediano's", logo: "/sponsors/sponsor1.png" },
  { name: "JJ Premium Carne Seca", logo: "/sponsors/sponsor2.png" },
  { name: "HDR Logistics Services LLC", logo: "/sponsors/sponsor3.png" },
    { name: "R&M Courier Services Inc.", logo: "/sponsors/sponsor4.png" },
  { name: "Tire Rams Shop and Repair", logo: "/sponsors/sponsor5.png" },
    { name: "JBS Customs", logo: "/sponsors/sponsor6.png" },
  { name: "Pollos Asados El Rapido", logo: "/sponsors/sponsor7.png" },
    { name: "ShaySlay Treats", logo: "/sponsors/sponsor8.png" },
];
