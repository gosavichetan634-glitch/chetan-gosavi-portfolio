import type { ReactNode } from "react";

type AdminLayoutShellProps = Readonly<{
  children: ReactNode;
}>;

/**
 * Dedicated shell boundary for future admin experience composition.
 * This remains intentionally minimal until sidebar, top navigation,
 * breadcrumbs, notifications, and admin-specific chrome are introduced.
 */
export function AdminLayoutShell({ children }: AdminLayoutShellProps) {
  return (
    <div className="flex min-h-dvh bg-[var(--color-background)]">
      <main id="main-content" className="min-w-0 flex-1">
        {children}
      </main>
    </div>
  );
}
