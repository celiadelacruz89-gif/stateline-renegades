type TeamHeroProps = {
  title: string;
  subtitle: string;
  emoji: string;
  colors: string;
};

export default function TeamHero({ title, subtitle, emoji, colors }: TeamHeroProps) {
  return (
    <section
      className="card"
      style={{
        padding: 32,
        marginBottom: 28,
        background: colors,
        color: "white",
      }}
    >
      <div style={{ fontSize: 54, marginBottom: 10 }}>{emoji}</div>
      <h1 style={{ margin: 0, fontSize: 44 }}>{title}</h1>
      <p style={{ fontSize: 20, maxWidth: 700, lineHeight: 1.6, opacity: 0.95 }}>
        {subtitle}
      </p>
    </section>
  );
}