import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type BadgeTone =
  | "default"
  | "brand"
  | "accent"
  | "success"
  | "warning"
  | "error"
  | "info";

export type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: BadgeTone;
} & Omit<ComponentPropsWithoutRef<"span">, "children" | "className">;
