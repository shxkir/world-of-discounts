import type { Metadata, Viewport } from "next";
import { DM_Mono, Fraunces, Outfit } from "next/font/google";
import { worldOfDiscounts } from "@/data/world-of-discounts";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const { business, location, contact } = worldOfDiscounts;

export const metadata: Metadata = {
  ...(worldOfDiscounts.business.website
    ? { metadataBase: new URL(worldOfDiscounts.business.website) }
    : {}),
  title: {
    default: `${business.displayName} | Cambridge Park`,
    template: `%s | ${business.displayName}`,
  },
  description: `${business.description} ${location.formatted}.`,
  applicationName: business.displayName,
  keywords: [
    "World of Discounts",
    "Cambridge Park",
    "convenience store",
    "grocery",
    "discount store",
    "Oxford Street",
    "Cambridge Park NSW",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: business.displayName,
    title: `${business.tagline} ${business.displayName}`,
    description: `${business.description} ${location.formatted}.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.displayName} | Cambridge Park`,
    description: business.description,
  },
  other: {
    "geo.region": "AU-NSW",
    "geo.placename": "Cambridge Park",
    "og:phone_number": contact.phone,
  },
};

export const viewport: Viewport = {
  themeColor: "#d8ff3e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" className={`${outfit.variable} ${fraunces.variable} ${dmMono.variable}`}>
      <body className="bg-cream font-display text-ink antialiased">{children}</body>
    </html>
  );
}
