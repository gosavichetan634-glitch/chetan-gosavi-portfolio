import type { CSSProperties } from "react";

import type { BadgeTone } from "@/components/ui/badge/badge.types";

export const badgeBaseStyle: CSSProperties = {
  alignItems: "center",
  borderRadius: "var(--radius-full)",
  borderStyle: "solid",
  borderWidth: "1px",
  display: "inline-flex",
  fontFamily: "var(--font-family-sans)",
  fontSize: "var(--font-size-label)",
  fontWeight: "var(--font-weight-label)",
  gap: "var(--space-1)",
  lineHeight: "var(--line-height-compact)",
  paddingBlock: "var(--space-1)",
  paddingInline: "var(--space-2)",
  whiteSpace: "nowrap",
};

export const badgeToneStyles: Record<BadgeTone, CSSProperties> = {
  default: {
    backgroundColor: "var(--color-surface-muted)",
    borderColor: "var(--color-border)",
    color: "var(--color-foreground)",
  },
  brand: {
    backgroundColor: "var(--color-brand-primary-soft)",
    borderColor: "var(--color-brand-primary-soft)",
    color: "var(--color-brand-primary-strong)",
  },
  accent: {
    backgroundColor: "var(--color-brand-accent-soft)",
    borderColor: "var(--color-brand-accent-soft)",
    color: "var(--color-brand-accent)",
  },
  success: {
    backgroundColor: "var(--color-surface)",
    borderColor: "var(--color-status-success)",
    color: "var(--color-status-success)",
  },
  warning: {
    backgroundColor: "var(--color-surface)",
    borderColor: "var(--color-status-warning)",
    color: "var(--color-status-warning)",
  },
  error: {
    backgroundColor: "var(--color-surface)",
    borderColor: "var(--color-status-error)",
    color: "var(--color-status-error)",
  },
  info: {
    backgroundColor: "var(--color-surface)",
    borderColor: "var(--color-status-info)",
    color: "var(--color-status-info)",
  },
};
