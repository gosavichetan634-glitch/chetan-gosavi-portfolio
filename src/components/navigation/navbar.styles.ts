import type { CSSProperties } from "react";

export const navbarStyle: CSSProperties = {
  width: "100%",
  borderBottom: "1px solid var(--color-border)",
  background: "var(--color-background)",
  position: "sticky",
  top: 0,
  zIndex: Number("var(--z-index-sticky)") || 1100,
};

export const navbarContainerStyle: CSSProperties = {
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const navbarLinksStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  listStyle: "none",
  margin: 0,
  padding: 0,
};

export const navbarLinkStyle: CSSProperties = {
  color: "var(--color-foreground)",
  textDecoration: "none",
  fontSize: "0.95rem",
  fontWeight: 500,
};