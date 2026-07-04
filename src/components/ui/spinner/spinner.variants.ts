import type { CSSProperties } from "react";

import type { SpinnerSize } from "@/components/ui/spinner/spinner.types";

export const spinnerWrapperStyle: CSSProperties = {
  alignItems: "center",
  color: "var(--color-brand-primary)",
  display: "inline-flex",
  gap: "var(--space-2)",
};

export const spinnerIndicatorBaseStyle: CSSProperties = {
  animation: "ui-spin var(--motion-duration-slower) linear infinite",
  borderColor: "currentColor",
  borderInlineEndColor: "transparent",
  borderRadius: "var(--radius-full)",
  borderStyle: "solid",
  borderWidth: "2px",
  display: "inline-block",
  flexShrink: 0,
};

export const spinnerSizeStyles: Record<SpinnerSize, CSSProperties> = {
  sm: {
    height: "var(--space-4)",
    width: "var(--space-4)",
  },
  md: {
    height: "var(--space-5)",
    width: "var(--space-5)",
  },
  lg: {
    height: "var(--space-6)",
    width: "var(--space-6)",
  },
};

export const spinnerLabelStyle: CSSProperties = {
  color: "var(--color-text-muted)",
  fontFamily: "var(--font-family-sans)",
  fontSize: "var(--font-size-body-sm)",
  fontWeight: "var(--font-weight-label)",
  lineHeight: "var(--line-height-compact)",
};
