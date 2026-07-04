import type { CSSProperties } from "react";

import type {
  HeadingLevel,
  HeadingTone,
} from "@/components/ui/heading/heading.types";

export const headingBaseStyle: CSSProperties = {
  fontFamily: "var(--font-family-sans)",
  fontWeight: "var(--font-weight-heading)",
  letterSpacing: "normal",
  lineHeight: "var(--line-height-heading)",
  margin: 0,
};

export const headingLevelStyles: Record<HeadingLevel, CSSProperties> = {
  1: { fontSize: "var(--font-size-heading-1)" },
  2: { fontSize: "var(--font-size-heading-2)" },
  3: { fontSize: "var(--font-size-heading-3)" },
  4: { fontSize: "var(--font-size-heading-4)" },
  5: { fontSize: "var(--font-size-body-lg)" },
  6: { fontSize: "var(--font-size-body-md)" },
};

export const headingToneStyles: Record<HeadingTone, CSSProperties> = {
  default: { color: "var(--color-foreground)" },
  muted: { color: "var(--color-text-muted)" },
  subtle: { color: "var(--color-text-subtle)" },
};
