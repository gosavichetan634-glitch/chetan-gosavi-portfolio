import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type HeadingTone = "default" | "muted" | "subtle";

export type HeadingProps<T extends ElementType = "h2"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  level?: HeadingLevel;
  tone?: HeadingTone;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;
