// app/lib/utils.ts
import { teams, type Team } from "./data";

export function teamLabel(id: string) {
  const t = teams.find((x) => x.id === id);
  return t ? t.name : id;
}

export function getTeam(id: string): Team | undefined {
  return teams.find((x) => x.id === id);
}

// Small helper so your UI can show clickable phone links
export function phoneHref(phone: string) {
  const digits = phone.replace(/[^\d]/g, "");
  return `tel:${digits}`;
}
