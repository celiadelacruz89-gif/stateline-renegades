import "./globals.css";

export const metadata = {
  title: "Stateline Renegades",
  description: "Stateline Renegades Cheer & T-Ball organization"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
