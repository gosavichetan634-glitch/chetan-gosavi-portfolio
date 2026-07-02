"use client";

import type { ReactNode } from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

type ThemeProviderProps = Readonly<{
  children: ReactNode;
}>;

/**
 * Central theme boundary for the application.
 * The provider persists user preference, supports system theme
 * resolution, and injects the pre-hydration script required to
 * minimize theme flash on first paint.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="system"
      enableSystem
      enableColorScheme
      disableTransitionOnChange
      storageKey="portfolio-theme"
    >
      {children}
    </NextThemesProvider>
  );
}
