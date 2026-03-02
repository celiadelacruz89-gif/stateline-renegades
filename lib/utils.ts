export function teamLabel(key: string) {
  switch (key) {
    case "org": return "Organization";
    case "riot": return "Riot";
    case "karma": return "Karma";
    case "anarchy": return "Anarchy";
    case "blessedmayhem": return "Blessed Mayhem";
    case "tball": return "T‑Ball";
    default: return key;
  }
}
