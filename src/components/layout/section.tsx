import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { PageContainer } from "@/components/layout/page-container";

type SectionSpacing = "none" | "sm" | "md" | "lg";

type SectionProps<T extends ElementType = "section"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  spacing?: SectionSpacing;
  withContainer?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const spacingMap: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-8 md:py-10 lg:py-12",
  md: "py-12 md:py-16 lg:py-20",
  lg: "py-16 md:py-24 lg:py-32",
};

function joinClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

export function Section<T extends ElementType = "section">({
  as,
  children,
  className,
  containerClassName,
  spacing = "md",
  withContainer = true,
  ...props
}: SectionProps<T>) {
  const Component = as ?? "section";
  const content = withContainer ? (
    <PageContainer className={containerClassName}>{children}</PageContainer>
  ) : (
    children
  );

  return (
    <Component
      className={joinClassNames(spacingMap[spacing], className)}
      {...props}
    >
      {content}
    </Component>
  );
}
