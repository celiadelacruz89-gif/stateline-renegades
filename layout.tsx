import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stateline Renegades",
  description: "Stateline Renegades Cheer & T-Ball Organization"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
