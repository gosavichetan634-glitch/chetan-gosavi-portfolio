import type { ReactNode } from "react";

import { AdminLayoutShell } from "@/components/layout/admin-layout-shell";

type AdminLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function AdminLayout({ children }: AdminLayoutProps) {
  return <AdminLayoutShell>{children}</AdminLayoutShell>;
}
