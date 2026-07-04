import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type TextSize = "sm" | "md" | "lg";
export type TextTone = "default" | "muted" | "subtle";
export type TextWeight = "regular" | "medium" | "semibold";

export type TextProps<T extends ElementType = "p"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  size?: TextSize;
  tone?: TextTone;
  truncate?: boolean;
  weight?: TextWeight;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;
