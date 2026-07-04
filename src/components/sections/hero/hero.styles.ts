import type { CSSProperties } from "react";

export const heroSectionStyle: CSSProperties = {
  maxWidth: "1280px",
  margin: "0 auto",
  minHeight: "calc(100vh - 80px)",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: "5rem",

  padding: "4rem 2rem",
};

export const heroContentStyle: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

export const heroImageWrapperStyle: CSSProperties = {
  flex: 1,

  display: "flex",

  justifyContent: "center",

  alignItems: "center",
};

export const heroBadgeStyle: CSSProperties = {
  display: "inline-flex",

  alignItems: "center",

  gap: ".5rem",

  width: "fit-content",

  padding: ".55rem 1rem",

  borderRadius: "999px",

  background: "var(--color-brand-primary-soft)",

  color: "var(--color-brand-primary)",

  fontWeight: 600,

  fontSize: ".9rem",
};

export const heroTitleStyle: CSSProperties = {
  fontSize: "4rem",

  fontWeight: 800,

  lineHeight: 1.1,

  color: "var(--color-foreground)",
};

export const heroRoleStyle: CSSProperties = {
  fontSize: "1.5rem",

  color: "var(--color-brand-primary)",

  fontWeight: 600,
};