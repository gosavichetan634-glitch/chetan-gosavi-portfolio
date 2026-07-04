import type { DividerProps } from "@/components/ui/divider/divider.types";
import {
  dividerBaseStyle,
  dividerOrientationStyles,
} from "@/components/ui/divider/divider.variants";
import { joinClassNames } from "@/components/ui/utils";

export function Divider({
  className,
  decorative = true,
  orientation = "horizontal",
  ...props
}: DividerProps) {
  return (
    <hr
      aria-orientation={orientation}
      className={joinClassNames(className)}
      role={decorative ? "presentation" : "separator"}
      style={{
        ...dividerBaseStyle,
        ...dividerOrientationStyles[orientation],
      }}
      {...props}
    />
  );
}
