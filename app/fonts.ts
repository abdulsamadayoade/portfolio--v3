import { Commissioner } from "next/font/google";
import { GeistMono } from "geist/font/mono";

export const commissioner = Commissioner({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-commissioner-sans",
});

export const geistMono = GeistMono;
