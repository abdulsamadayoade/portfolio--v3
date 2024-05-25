import type { Metadata } from "next";
import Link from "next/link";

import "./globals.css";
import { geistMono } from "./fonts";

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

const navLinks = [
  {
    href: "/",
    label: "home",
  },
  {
    href: "/writing",
    label: "writing",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable}`}>
        <div className="max-w-xl px-5 py-20 mx-auto">
          <nav className="flex items-center justify-end space-x-4 mb-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-white opacity-70 text-xs font-mono hover:underline">
                {label}
              </Link>
            ))}
          </nav>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
