import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      style={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        gap: "0.5rem",
      }}
    >
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color: "var(--color-brand-primary)",
          fontFamily: "var(--font-family-mono)",
        }}
      >
        {"<CG />"}
      </span>
    </Link>
  );
}