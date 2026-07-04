import type { ComponentPropsWithoutRef } from "react";

export type DividerOrientation = "horizontal" | "vertical";

export type DividerProps = {
  className?: string;
  decorative?: boolean;
  orientation?: DividerOrientation;
} & Omit<ComponentPropsWithoutRef<"hr">, "className">;
