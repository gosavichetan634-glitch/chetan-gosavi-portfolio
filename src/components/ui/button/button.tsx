import type { CSSProperties } from "react";

import type { ButtonProps } from "@/components/ui/button/button.types";
import {
  buttonBaseStyle,
  buttonDisabledStyle,
  buttonFullWidthStyle,
  buttonSizeStyles,
  buttonVariantStyles,
  spinnerStyle,
} from "@/components/ui/button/button.variants";
import { joinClassNames } from "@/components/ui/utils";

function getButtonStyle({
  fullWidth,
  isDisabled,
  size,
  variant,
}: {
  fullWidth: boolean;
  isDisabled: boolean;
  size: NonNullable<ButtonProps["size"]>;
  variant: NonNullable<ButtonProps["variant"]>;
}): CSSProperties {
  return {
    ...buttonBaseStyle,
    ...buttonSizeStyles[size],
    ...buttonVariantStyles[variant],
    ...(fullWidth ? buttonFullWidthStyle : null),
    ...(isDisabled ? buttonDisabledStyle : null),
  };
}

export function Button({
  children,
  className,
  fullWidth = false,
  isLoading = false,
  leadingIcon,
  size = "md",
  trailingIcon,
  variant = "primary",
  ...props
}: ButtonProps) {
  const isAnchor = "href" in props;
  const isDisabled = isAnchor
    ? Boolean(props["aria-disabled"]) || isLoading
    : Boolean(props.disabled) || isLoading;

  const content = (
    <>
      {isLoading ? (
        <span aria-hidden="true" style={spinnerStyle} />
      ) : (
        leadingIcon
      )}
      {children ? <span>{children}</span> : null}
      {!isLoading ? trailingIcon : null}
    </>
  );

  if (isAnchor) {
    const { href, ...anchorProps } = props;

    return (
      <a
        {...anchorProps}
        aria-busy={isLoading || undefined}
        aria-disabled={isDisabled || undefined}
        className={joinClassNames(className)}
        href={isDisabled ? undefined : href}
        style={getButtonStyle({ fullWidth, isDisabled, size, variant })}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      {...props}
      aria-busy={isLoading || undefined}
      className={joinClassNames(className)}
      disabled={isDisabled}
      style={getButtonStyle({ fullWidth, isDisabled, size, variant })}
      type={props.type ?? "button"}
    >
      {content}
    </button>
  );
}
