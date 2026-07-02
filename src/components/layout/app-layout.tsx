import type { ReactNode } from "react";

type AppLayoutProps = Readonly<{
  children: ReactNode;
}>;

/**
 * Root application frame.
 * This is the stable boundary for global background, text color,
 * and future app-wide overlays or portals.
 */
export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-dvh bg-[var(--color-background)] text-[var(--color-foreground)]">
      {children}
    </div>
  );
}
