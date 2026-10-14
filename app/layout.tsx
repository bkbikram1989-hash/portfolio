import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", style: ["normal", "italic"] });

// Set NEXT_PUBLIC_SITE_URL to your live domain so link previews show the photo.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | ${profile.title}`,
  description: profile.bio,
  openGraph: {
    title: profile.name,
    description: profile.bio,
    type: "profile",
    images: [`${basePath}${profile.photo}`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
