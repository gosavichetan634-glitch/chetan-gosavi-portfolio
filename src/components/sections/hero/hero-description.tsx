import { PORTFOLIO } from "@/constants/portfolio/portfolio";

export function HeroDescription() {
  return (
    <p
      style={{
        fontSize: "1.1rem",
        lineHeight: 1.8,
        maxWidth: "650px",
        color: "var(--color-text-muted)",
      }}
    >
      {PORTFOLIO.tagline}
    </p>
  );
}