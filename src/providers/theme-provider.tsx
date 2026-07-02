import type { ReactNode } from "react";

type ThemeProviderProps = Readonly<{
  children: ReactNode;
}>;

/**
 * Placeholder provider for the future theme system.
 * Keep this boundary stable so theme state can be introduced
 * without refactoring the root layout tree.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return children;
}
