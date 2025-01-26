import type { Metadata } from "next";
import "./globals.css";
import { geistMono } from "./fonts";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulsamad.xyz"),
  title: {
    default: "Abdulsamad Ayoade",
    template: "%s | Abdulsamad Ayoade",
  },
  description:
    "Frontend Engineer specializing in building high-quality B2B & B2C applications that scale. Currently building tools at Reeddi to help businesses achieve more.",
  keywords: [
    "Abdulsamad Ayoade",
    "Frontend Engineer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "B2B Applications",
    "B2C Applications",
    "Frontend Development",
    "Web Development",
    "UI Development",
    "Software Development",
    "Reeddi",
  ],
  openGraph: {
    title: "Abdulsamad Ayoade",
    description:
      "Frontend Engineer specializing in building high-quality B2B & B2C applications that scale. Currently building tools at Reeddi to help businesses achieve more.",
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
    description:
      "Frontend Engineer specializing in building high-quality B2B & B2C applications that scale. Currently building tools at Reeddi to help businesses achieve more.",
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
      <body className={`${geistMono.variable}`}>
        <div className="max-w-xl px-5 py-20 mx-auto">
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
