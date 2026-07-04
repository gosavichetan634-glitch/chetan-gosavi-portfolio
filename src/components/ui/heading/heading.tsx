import type { ElementType } from "react";

import type { HeadingProps } from "@/components/ui/heading/heading.types";
import {
  headingBaseStyle,
  headingLevelStyles,
  headingToneStyles,
} from "@/components/ui/heading/heading.variants";
import { joinClassNames } from "@/components/ui/utils";

export function Heading<T extends ElementType = "h2">({
  as,
  children,
  className,
  level = 2,
  tone = "default",
  ...props
}: HeadingProps<T>) {
  const Component = (as ?? (`h${level}` as ElementType)) as ElementType;

  return (
    <Component
      className={joinClassNames(className)}
      style={{
        ...headingBaseStyle,
        ...headingLevelStyles[level],
        ...headingToneStyles[tone],
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
