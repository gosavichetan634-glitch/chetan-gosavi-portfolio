import type { CSSProperties } from "react";

import type {
  TextSize,
  TextTone,
  TextWeight,
} from "@/components/ui/text/text.types";

export const textBaseStyle: CSSProperties = {
  fontFamily: "var(--font-family-sans)",
  margin: 0,
};

export const textSizeStyles: Record<TextSize, CSSProperties> = {
  sm: {
    fontSize: "var(--font-size-body-sm)",
    lineHeight: "var(--line-height-body)",
  },
  md: {
    fontSize: "var(--font-size-body-md)",
    lineHeight: "var(--line-height-body)",
  },
  lg: {
    fontSize: "var(--font-size-body-lg)",
    lineHeight: "var(--line-height-reading)",
  },
};

export const textToneStyles: Record<TextTone, CSSProperties> = {
  default: { color: "var(--color-foreground)" },
  muted: { color: "var(--color-text-muted)" },
  subtle: { color: "var(--color-text-subtle)" },
};

export const textWeightStyles: Record<TextWeight, CSSProperties> = {
  regular: { fontWeight: "var(--font-weight-body)" },
  medium: { fontWeight: "var(--font-weight-label)" },
  semibold: { fontWeight: "var(--font-weight-heading)" },
};

export const truncateStyle: CSSProperties = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};
