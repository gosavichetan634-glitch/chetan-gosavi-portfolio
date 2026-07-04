import type { CSSProperties } from "react";

import type { DividerOrientation } from "@/components/ui/divider/divider.types";

export const dividerBaseStyle: CSSProperties = {
  backgroundColor: "var(--color-border)",
  border: "none",
  flexShrink: 0,
  margin: 0,
};

export const dividerOrientationStyles: Record<
  DividerOrientation,
  CSSProperties
> = {
  horizontal: {
    height: "1px",
    width: "100%",
  },
  vertical: {
    alignSelf: "stretch",
    height: "auto",
    minHeight: "100%",
    width: "1px",
  },
};
