import type { ReactNode } from "react";

import { ThemeProvider } from "@/providers/theme-provider";

type AppProviderProps = Readonly<{
  children: ReactNode;
}>;

/**
 * Central provider composition point for cross-cutting app concerns.
 * Future global providers should be added here rather than directly
 * inside route layouts.
 */
export function AppProvider({ children }: AppProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
