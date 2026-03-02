// app/lib/data.ts

export type Contact = {
  name: string;
  phone: string;
  role: string;
};

export type Team = {
  id: string;
  name: string;
  ages: string;
  colors: string;
  logo: string;
  cashApp?: string;
  registration?: string;
  contacts: Contact[];
};

export type LinkItem = {
  label: string;
  url: string;
};

export const site = {
  orgName: "Stateline Renegades",
  tagline: "Cheer • Baseball • Community • Family",
  locationLine: "El Paso, Texas",

  cashApps: {
    riotKarma: "$statelinerenegades",
    tball: "$RenegadesBB",
    anarchy: "$renegadescheerteam",
  },

  forms: {
    cheerRegistration: "https://form.jotform.com/260336801253046",
    sponsorship:
      "https://form.jotform.com/celiadelacruz89/sponsorship-application-form",
    tballRegistration:
      "https://form.jotform.com/260086521920149",
  },

  tballMerchLinks: [
    {
      label: "PLAYERS ORDER FORM",
      url: "https://form.jotform.com/260125057825050",
    },
    {
      label: "PARENT/FAMILY ORDER FORM",
      url: "https://form.jotform.com/260124714767054",
    },
    {
      label: "COACH ORDER FORM",
      url: "https://form.jotform.com/260125031204033",
    },
  ] as LinkItem[],
};



// TEAMS

export const teams: Team[] = [

  {
    id: "karma",
    name: "Karma Renegades",
    ages: "Ages 3–5",
    colors: "Teal & Light Pink",
    logo: "/logos/karma.png",
    cashApp: site.cashApps.riotKarma,
    registration: site.forms.cheerRegistration,

    contacts: [
      {
        name: "Coach Celia",
        phone: "915-352-9033",
        role: "Coach",
      },
      {
        name: "Coach Andy",
        phone: "915-472-0190",
        role: "Coach",
      },
    ],
  },


  {
    id: "riot",
    name: "Renegades Riot",
    ages: "Ages 6–14",
    colors: "Dark Green & Light Pink",
    logo: "/logos/riot.png",
    cashApp: site.cashApps.riotKarma,
    registration: site.forms.cheerRegistration,

    contacts: [
      {
        name: "Coach Celia",
        phone: "915-352-9033",
        role: "Coach",
      },
      {
        name: "Coach Andy",
        phone: "915-472-0190",
        role: "Coach",
      },
    ],
  },


  {
    id: "anarchy",
    name: "Renegades Anarchy",
    ages: "Ages 6–18",
    colors: "Metallic Red & Black",
    logo: "/logos/anarchy.png",
    cashApp: site.cashApps.anarchy,
    registration: site.forms.cheerRegistration,

    contacts: [
      {
        name: "Jennifer",
        phone: "915-803-9442",
        role: "Team Mom",
      },
    ],
  },


  {
    id: "tball",
    name: "Renegades T-Ball",
    ages: "T-Ball",
    colors: "Red & Black",
    logo: "/logos/tball.png",
    cashApp: site.cashApps.tball,
    registration: site.forms.tballRegistration,

    contacts: [
      {
        name: "Coach Rudy",
        phone: "915-352-9504",
        role: "Coach",
      },
      {
        name: "Linette",
        phone: "915-497-0213",
        role: "Team Mom",
      },
    ],
  },


];
