// app/lib/data.ts

export const site = {
  orgName: "Stateline Renegades",
  tagline: "Cheer • Baseball • Community • Family",

  contacts: [riot/karma
    { name: "Coach Celia", phone: "915-352-9033" },
    { name: "Coach Andy", phone: "915-472-0190" },
  ],
       contacts: [t-ball
    { name: "Coach Rudy", phone: "915-352-9504" },
    { name: "team Mom Linette", phone: "915-497-0213" },
  ],
contacts: [Anarchy
    { name: "team Mom Jennifer", phone: "915-803-9442" },
  ]

  sponsorFormUrl:
    "https://form.jotform.com/celiadelacruz89/sponsorship-application-form",
};
// ----------------------
// TEAM TYPE
// ----------------------

export type Team = {
  id: string;
  name: string;
  ages: string;
  colors: string;
  logo: string;
  cashApp: string;
  registration: string;
};
// --------------------
// TEAM DATA
// --------------------

export const teams: Team[] = [
  {
    id: "karma",
    name: "Karma Renegades",
    ages: "Ages 3–5",
    colors: "Teal & Light Pink",
    logo: "/logos/karma.png",
    cashApp: "$statelinerenegades",
    registration:
      "https://form.jotform.com/260336801253046",
  },
  {
    id: "riot",
    name: "Renegades Riot",
    ages: "Ages 6–14",
    colors: "Dark Green & Light Pink",
    logo: "/logos/riot.png",
    cashApp: "$statelinerenegades",
    registration:
      "https://form.jotform.com/260336801253046",
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
    name: "Renegades T-Ball / Baseball",
    colors: "Red & Black",
    logo: "/logos/tball.png",
    cashApp: "$RenegadesBB",
    registration:
      "https://form.jotform.com/260086521920149",

    merch: {
      players:
        "https://form.jotform.com/260125057825050",
      parents:
        "https://form.jotform.com/260124714767054",
      coaches:
        "https://form.jotform.com/260125031204033",
    },
  },
];

