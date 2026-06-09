import type { Metadata } from "next";
import { Outfit, Newsreader } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

// Outfit = all UI (weights 200-500, never bold). Newsreader italic carries the
// soulful, observational moments (hero, insight lines, quotes).
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-news",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · Never buy the same book twice`,
  description: site.description,
  applicationName: site.name,
  keywords: [
    "book tracker",
    "avoid duplicate books",
    "books I own",
    "home library catalog",
    "reading app",
    "library app",
    "book collection",
    "barcode scanner",
    "iOS",
    "Android",
    site.name,
  ],
  openGraph: {
    type: "website",
    title: `${site.name} · Never buy the same book twice`,
    description: site.description,
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Never buy the same book twice`,
    description: site.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
