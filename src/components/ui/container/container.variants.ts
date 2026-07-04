import type { CSSProperties } from "react";

import type { ContainerSize } from "@/components/ui/container/container.types";

export const containerBaseStyle: CSSProperties = {
  width: "100%",
};

export const containerSizeStyles: Record<ContainerSize, CSSProperties> = {
  sm: { maxWidth: "40rem" },
  md: { maxWidth: "48rem" },
  lg: { maxWidth: "64rem" },
  xl: { maxWidth: "80rem" },
  full: { maxWidth: "none" },
};

export const containerCenteredStyle: CSSProperties = {
  marginInline: "auto",
};

export const containerPaddedStyle: CSSProperties = {
  paddingInline: "var(--space-4)",
};
