// app/lib/data.ts

export type Contact = {
  name: string;
  phone: string; // keep as "915-xxx-xxxx" for display
};

export type TeamId = "karma" | "riot" | "anarchy" | "tball" | "org" | "mayhem";

export type Team = {
  id: Exclude<TeamId, "org">; // real “program” teams only
  name: string;
  ages: string;
  colors: string;
  logo: string; // path in /public (example: "/logos/karma.png")
  cashApp?: string;
  registration?: string;
  contacts: Contact[];
};

export type Sponsor = {
  name: string;
  logo: string; // "/sponsors/xxx.png" (in public) OR a full https URL (Vercel Blob)
  website?: string;
};

export const org = {
  name: "Stateline Renegades",
  tagline: "Cheer • Baseball • Community • Family",

  // Forms / Links
  sponsorForm:
    "https://form.jotform.com/celiadelacruz89/sponsorship-application-form",
  karmaRiotRegistration: "https://form.jotform.com/260336801253046",
  tballRegistration: "https://form.jotform.com/260086521920149",

  // T-Ball Merch Links
  tballMerch: {
    players: "https://form.jotform.com/260125057825050",
    parentFamily: "https://form.jotform.com/260124714767054",
    coach: "https://form.jotform.com/260125031204033",
  },

  // Optional: an org logo to use on /gallery/org
  orgLogo: "/logos/mayhem.png",
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
    id: "mayhem",
    name: "Renegades Mayhem",
    ages: "Ages 6–12",
    colors: "Metallic Purple & Black",
    logo: "/logos/mayhem.png",
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

// ✅ Compatibility exports (prevents build errors when some pages import different names)
export const TEAMS = teams;

// ✅ Gallery menu list (Organization + teams)
// Put org images in: /public/gallery/org/
export const GALLERY_TEAMS = [
  { id: "org" as const, name: "Organization", colors: "Events • Banquets • Community" },
  
  ...teams.map((t) => ({ id: t.id, name: t.name, colors: t.colors })),
] as const;

// ✅ Sponsors (logos go in: /public/sponsors/...) OR paste Vercel Blob URL


export const sponsors = [
  { name: "Mediano's", logo: "/sponsors/medianos.png" },

  { name: "JJ Premium Carne Seca", logo: "/sponsors/jj-premium-carne-seca.png" },

  { name: "HDR Logistic Services LLC", logo: "/sponsors/hdr-logistic-services.png" },

  { name: "Tire Ramz Shop and Repair", logo: "/sponsors/tire-ramz.png" },

  { name: "JBS Customs", logo: "/sponsors/jbs-customs.png" },

  { name: "Pollo Asados El Rapido", logo: "/sponsors/pollos-asados-el-rapido.png" },

  { name: "ShaySlay Treats", logo: "/sponsors/shayslay-treats.png" },
  
    { name: "R&M Courier Services Inc", logo: "/sponsors/rm-courier.png" },
];

  // If you add the missing ones later, just add lines like:
  // { name: "R&M Courier Services Inc", logo: "/sponsors/rm-courier.png" },
];
