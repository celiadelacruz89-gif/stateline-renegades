// app/lib/data.ts

export type Contact = {
  name: string;
  phone: string;
};

export type Team = {
  id: "karma" | "riot" | "anarchy" | "tball";
  name: string;
  ages: string;
  colors: string;
  logo: string; // path from /public
  cashApp: string;
  registration?: string;
};

export const SITE = {
  orgName: "Stateline Renegades",
  tagline: "Cheer • Baseball • Community • Family",
};

export const contacts = {
  riotKarma: [
    { name: "Coach Celia", phone: "915-352-9033" },
    { name: "Coach Andy", phone: "915-472-0190" },
  ] satisfies Contact[],

  anarchy: [{ name: "Team mom Jennifer", phone: "915-803-9442" }] satisfies Contact[],

  tball: [
    { name: "Coach Rudy", phone: "915-352-9504" },
    { name: "Team mom Linette", phone: "915-497-0213" },
  ] satisfies Contact[],
};

export const TEAMS: Team[] = [
  {
    id: "karma",
    name: "Karma Renegades",
    ages: "Ages 3–5",
    colors: "Teal & Light Pink",
    logo: "/logos/karma.png",
    cashApp: "$statelinerenegades",
    registration: "https://form.jotform.com/260336801253046",
  },
  {
    id: "riot",
    name: "Renegades Riot",
    ages: "Ages 6–14",
    colors: "Dark Green & Light Pink",
    logo: "/logos/riot.png",
    cashApp: "$statelinerenegades",
    registration: "https://form.jotform.com/260336801253046",
  },
  {
    id: "anarchy",
    name: "Renegades Anarchy",
    ages: "Ages 6–18",
    colors: "Metallic Red & Black",
    logo: "/logos/anarchy.png",
    cashApp: "$renegadescheerteam",
  },
  {
    id: "tball",
    name: "Renegades T-Ball",
    ages: "T-Ball / Baseball",
    colors: "Red & Black",
    logo: "/logos/tball.png",
    cashApp: "$RenegadesBB",
    registration: "https://form.jotform.com/260086521920149",
  },
];

export const LINKS = {
  karmaRiotRegistration: "https://form.jotform.com/260336801253046",
  sponsorship: "https://form.jotform.com/celiadelacruz89/sponsorship-application-form",
  tballRegistration: "https://form.jotform.com/260086521920149",
  tballMerch: {
    players: "https://form.jotform.com/260125057825050",
    parentFamily: "https://form.jotform.com/260124714767054",
    coach: "https://form.jotform.com/260125031204033",
  },
};
