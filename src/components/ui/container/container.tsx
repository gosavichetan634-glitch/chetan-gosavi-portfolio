import type { ElementType } from "react";

import type { ContainerProps } from "@/components/ui/container/container.types";
import {
  containerBaseStyle,
  containerCenteredStyle,
  containerPaddedStyle,
  containerSizeStyles,
} from "@/components/ui/container/container.variants";
import { joinClassNames } from "@/components/ui/utils";

export function Container<T extends ElementType = "div">({
  as,
  centered = true,
  children,
  className,
  padded = true,
  size = "xl",
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={joinClassNames(className)}
      style={{
        ...containerBaseStyle,
        ...containerSizeStyles[size],
        ...(centered ? containerCenteredStyle : null),
        ...(padded ? containerPaddedStyle : null),
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
