import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

export type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  centered?: boolean;
  padded?: boolean;
  size?: ContainerSize;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;
