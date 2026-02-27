import "./globals.css";

export const metadata = {
  title: "Stateline Renegades",
  description: "Stateline Renegades Cheer & T-Ball Organization"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
