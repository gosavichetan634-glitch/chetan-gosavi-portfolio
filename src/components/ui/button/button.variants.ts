import type { CSSProperties } from "react";

import type {
  ButtonSize,
  ButtonVariant,
} from "@/components/ui/button/button.types";

export const buttonBaseStyle: CSSProperties = {
  alignItems: "center",
  appearance: "none",
  borderRadius: "var(--radius-md)",
  borderStyle: "solid",
  borderWidth: "1px",
  cursor: "pointer",
  display: "inline-flex",
  fontFamily: "var(--font-family-sans)",
  fontWeight: "var(--font-weight-label)",
  gap: "var(--space-2)",
  justifyContent: "center",
  lineHeight: "var(--line-height-compact)",
  position: "relative",
  textDecoration: "none",
  transition:
    "background-color var(--motion-duration-hover) var(--motion-easing-standard), border-color var(--motion-duration-hover) var(--motion-easing-standard), color var(--motion-duration-hover) var(--motion-easing-standard), box-shadow var(--motion-duration-hover) var(--motion-easing-standard), opacity var(--motion-duration-hover) var(--motion-easing-standard)",
  whiteSpace: "nowrap",
};

export const buttonSizeStyles: Record<ButtonSize, CSSProperties> = {
  sm: {
    fontSize: "var(--font-size-label)",
    minHeight: "calc(var(--space-8) + var(--space-2))",
    paddingBlock: "var(--space-2)",
    paddingInline: "var(--space-3)",
  },
  md: {
    fontSize: "var(--font-size-body-sm)",
    minHeight: "calc(var(--space-10) + var(--space-1))",
    paddingBlock: "var(--space-3)",
    paddingInline: "var(--space-4)",
  },
  lg: {
    fontSize: "var(--font-size-body-md)",
    minHeight: "calc(var(--space-12) + var(--space-1))",
    paddingBlock: "var(--space-3)",
    paddingInline: "var(--space-5)",
  },
};

export const buttonVariantStyles: Record<ButtonVariant, CSSProperties> = {
  primary: {
    backgroundColor: "var(--color-brand-primary)",
    borderColor: "var(--color-brand-primary)",
    boxShadow: "var(--shadow-xs)",
    color: "var(--primitive-color-neutral-0)",
  },
  secondary: {
    backgroundColor: "var(--color-surface)",
    borderColor: "var(--color-border)",
    boxShadow: "var(--shadow-xs)",
    color: "var(--color-foreground)",
  },
  ghost: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    color: "var(--color-foreground)",
  },
};

export const buttonDisabledStyle: CSSProperties = {
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 0.6,
};

export const buttonFullWidthStyle: CSSProperties = {
  width: "100%",
};

export const spinnerStyle: CSSProperties = {
  animation: "ui-spin var(--motion-duration-slower) linear infinite",
  borderColor: "currentColor",
  borderRadius: "var(--radius-full)",
  borderStyle: "solid",
  borderWidth: "2px",
  borderInlineEndColor: "transparent",
  display: "inline-block",
  flexShrink: 0,
  height: "1em",
  width: "1em",
};
