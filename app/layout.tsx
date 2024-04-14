import type { Metadata } from "next";
import { Commissioner } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const commissioner = Commissioner({
  subsets: ["latin"],
  variable: "--font-commissioner-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulsamad.xyz"),
  title: {
    default: "Abdulsamad Ayoade",
    template: "%s | Abdulsamad Ayoade",
  },
  description: "Software Engineer",
  openGraph: {
    title: "Abdulsamad Ayoade",
    description: "Software Engineer",
    url: "https://abdulsamad.xyz",
    siteName: "Abdulsamad Ayoade",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Abdulsamad Ayoade",
    card: "summary_large_image",
  },
  verification: {
    google: "todo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${commissioner.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
