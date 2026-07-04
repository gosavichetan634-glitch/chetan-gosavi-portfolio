import type { BadgeProps } from "@/components/ui/badge/badge.types";
import {
  badgeBaseStyle,
  badgeToneStyles,
} from "@/components/ui/badge/badge.variants";
import { joinClassNames } from "@/components/ui/utils";

export function Badge({
  children,
  className,
  tone = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={joinClassNames(className)}
      style={{
        ...badgeBaseStyle,
        ...badgeToneStyles[tone],
      }}
      {...props}
    >
      {children}
    </span>
  );
}
