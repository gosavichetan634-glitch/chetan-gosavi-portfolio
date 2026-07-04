import type { SpinnerProps } from "@/components/ui/spinner/spinner.types";
import {
  spinnerIndicatorBaseStyle,
  spinnerLabelStyle,
  spinnerSizeStyles,
  spinnerWrapperStyle,
} from "@/components/ui/spinner/spinner.variants";
import { joinClassNames } from "@/components/ui/utils";

export function Spinner({
  className,
  label = "Loading",
  size = "md",
  ...props
}: SpinnerProps) {
  return (
    <span
      aria-busy="true"
      aria-live="polite"
      className={joinClassNames(className)}
      role="status"
      style={spinnerWrapperStyle}
      {...props}
    >
      <span
        aria-hidden="true"
        style={{
          ...spinnerIndicatorBaseStyle,
          ...spinnerSizeStyles[size],
        }}
      />
      <span style={spinnerLabelStyle}>{label}</span>
    </span>
  );
}
