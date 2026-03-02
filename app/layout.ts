export const metadata = {
  title: "Stateline Renegades",
  description: "Elite Youth Cheer & T-Ball"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0f0f0f", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
