import type { Metadata } from "next";
import { Nunito, Lora } from "next/font/google";
import { site } from "@/site.config";
import "./globals.css";

// Nunito = all UI. Lora = literary serif (titles, quotes, wordmark).
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} — Never buy the same book twice`,
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
    title: `${site.name} — Never buy the same book twice`,
    description: site.description,
    siteName: site.name,
    url: site.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Never buy the same book twice`,
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
    <html lang="en" className={`${nunito.variable} ${lora.variable}`}>
      <body>{children}</body>
    </html>
  );
}
