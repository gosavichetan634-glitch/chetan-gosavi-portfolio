import type { ElementType } from "react";

import type { TextProps } from "@/components/ui/text/text.types";
import {
  textBaseStyle,
  textSizeStyles,
  textToneStyles,
  textWeightStyles,
  truncateStyle,
} from "@/components/ui/text/text.variants";
import { joinClassNames } from "@/components/ui/utils";

export function Text<T extends ElementType = "p">({
  as,
  children,
  className,
  size = "md",
  tone = "default",
  truncate = false,
  weight = "regular",
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as ElementType;

  return (
    <Component
      className={joinClassNames(className)}
      style={{
        ...textBaseStyle,
        ...textSizeStyles[size],
        ...textToneStyles[tone],
        ...textWeightStyles[weight],
        ...(truncate ? truncateStyle : null),
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
