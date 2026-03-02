// app/lib/data.ts

export type Team = {
  id: string;
  name: string;
  ages?: string;
  colors?: string;
  logo: string; // path in /public
  description?: string;
  registrationUrl?: string;
  fundraiserUrl?: string;
};

export const site = {
  orgName: "Stateline Renegades",
  tagline: "Cheer • Baseball • Community",
  cashApp: {
    handle: "$YourCashAppHere", // <-- CHANGE THIS
    note: "Please include athlete name + team in the note.",
  },
  contacts: [
    { name: "Celia", phone: "915-352-9033" }, // <-- CHANGE IF NEEDED
    { name: "Rudy", phone: "915-352-9504" },  // <-- CHANGE IF NEEDED
  ],
  email: "your-email@example.com", // <-- OPTIONAL
  locationLine: "El Paso, TX / Stateline Area", // <-- OPTIONAL
  sponsorFormUrl: "https://your-sponsor-form-link.com", // <-- PASTE YOUR SPONSOR FORM LINK
  sponsorPacketUrl: "https://your-sponsor-packet-link.com", // <-- OPTIONAL (Google Drive / PDF link)
};

export const teams: Team[] = [
  {
    id: "karma",
    name: "Karma Renegades",
    ages: "Ages 3–5",
    colors: "Teal & Light Pink",
    logo: "/logos/karma.png",
    description: "Intro cheer program focused on confidence, basics, and FUN.",
    registrationUrl: "https://your-karma-registration-link.com", // <-- ADD YOUR JOTFORM LINK
  },
  {
    id: "riot",
    name: "Renegades Riot",
    ages: "Ages 6–14",
    colors: "Dark Green & Light Pink",
    logo: "/logos/riot.png",
    description: "Competitive cheer with strong fundamentals + performance.",
    registrationUrl: "https://your-riot-registration-link.com", // <-- ADD YOUR JOTFORM LINK
  },
  {
    id: "anarchy",
    name: "Renegades Anarchy",
    ages: "Ages 6–18",
    colors: "Metallic Red & Black",
    logo: "/logos/anarchy.png",
    description: "High-energy team built for intensity, skills, and showmanship.",
    registrationUrl: "https://your-anarchy-registration-link.com",
  },
  {
    id: "mayhem",
    name: "Blessed Mayhem",
    ages: "All Ages",
    colors: "Black & Gold (example)",
    logo: "/logos/blessedmayhem.png",
    description: "Special program/team (update description as needed).",
    registrationUrl: "https://your-mayhem-registration-link.com",
  },
  {
    id: "tball",
    name: "Renegades T-Ball / Baseball",
    ages: "Youth",
    colors: "Red & Black",
    logo: "/logos/tball.png",
    description: "Youth T-Ball/Baseball program for skill-building and teamwork.",
    registrationUrl: "https://your-tball-registration-link.com",
  },
];

// Sponsor logos for the carousel (put images in /public/sponsors)
export const sponsorLogos: { src: string; alt: string }[] = [
  { src: "/sponsors/sponsor-1.png", alt: "Sponsor 1" },
  { src: "/sponsors/sponsor-2.png", alt: "Sponsor 2" },
  { src: "/sponsors/sponsor-3.png", alt: "Sponsor 3" },
  { src: "/sponsors/sponsor-4.png", alt: "Sponsor 4" },
];
