import type { ReactNode } from "react";

import { AppLayout } from "@/components/layout";
import { monoFont, sansFont } from "@/config/fonts";
import { rootMetadata, viewport } from "@/config/metadata";
import { AppProvider } from "@/providers/app-provider";

import "./globals.css";

export { viewport };
export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansFont.variable} ${monoFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-background)] font-sans text-[var(--color-foreground)]">
        <AppProvider>
          <AppLayout>{children}</AppLayout>
        </AppProvider>
      </body>
    </html>
  );
}
