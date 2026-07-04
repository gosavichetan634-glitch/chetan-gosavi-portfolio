import type { ComponentPropsWithoutRef } from "react";

export type SpinnerSize = "sm" | "md" | "lg";

export type SpinnerProps = {
  className?: string;
  label?: string;
  size?: SpinnerSize;
} & Omit<ComponentPropsWithoutRef<"span">, "className">;
