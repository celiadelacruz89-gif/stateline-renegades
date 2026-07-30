import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Stateline Renegades",
  description: "Elite Youth Cheer & T-Ball",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}