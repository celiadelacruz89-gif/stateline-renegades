import Image from "next/image";

type TeamHeroProps = {
  title: string;
  subtitle: string;
  colors: string;
  logo?: string;
};

export default function TeamHero({
  title,
  subtitle,
  colors,
  logo,
}: TeamHeroProps) {
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
      {logo && (
        <Image
          src={logo}
          alt={title}
          width={90}
          height={90}
          style={{
            objectFit: "contain",
            marginBottom: 12,
          }}
        />
      )}

      <h1 style={{ margin: 0, fontSize: 44 }}>
        {title}
      </h1>

      <p
        style={{
          fontSize: 20,
          maxWidth: 700,
          lineHeight: 1.6,
          opacity: 0.95,
        }}
      >
        {subtitle}
      </p>
    </section>
  );
}