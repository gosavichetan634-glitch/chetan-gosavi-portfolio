import type { ReactNode } from "react";

type MainLayoutProps = Readonly<{
  children: ReactNode;
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
  mainClassName?: string;
}>;

function joinClassNames(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(" ");
}

/**
 * Shared vertical shell for route groups.
 * Header and footer slots are intentionally optional so future
 * global navigation can be introduced without changing page layouts.
 */
export function MainLayout({
  children,
  headerSlot,
  footerSlot,
  mainClassName,
}: MainLayoutProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      {headerSlot}
      <main
        id="main-content"
        className={joinClassNames("flex-1", mainClassName)}
      >
        {children}
      </main>
      {footerSlot}
    </div>
  );
}
