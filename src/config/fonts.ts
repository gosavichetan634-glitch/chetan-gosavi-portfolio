import { Geist, Geist_Mono } from "next/font/google";

export const sansFont = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const monoFont = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});
