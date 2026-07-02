import type { ReactNode } from "react";

import { MainLayout } from "@/components/layout";

type PublicLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PublicLayout({ children }: PublicLayoutProps) {
  return <MainLayout>{children}</MainLayout>;
}
