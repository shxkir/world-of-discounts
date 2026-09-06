import type { Metadata } from "next";
import { Big_Shoulders, Fraunces, IBM_Plex_Mono } from "next/font/google";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { store } from "@/data/store";
import "./globals.css";

const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800", "900"],
  fallback: ["Impact", "Arial Black", "sans-serif"],
  adjustFontFallback: false,
});

const body = Fraunces({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://worldofdiscounts.local"),
  title: store.seo.title,
  description: store.seo.description,
  keywords: [...store.seo.keywords],
  applicationName: store.name,
  openGraph: {
    title: store.seo.title,
    description: store.seo.description,
    locale: "en_AU",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: store.name,
  description: store.seo.description,
  telephone: store.phone.tel,
  url: store.map.listingUrl,
  image: "https://worldofdiscounts.local/products/wod-basket.webp",
  address: {
    "@type": "PostalAddress",
    streetAddress: store.address.line1,
    addressLocality: "Cambridge Park",
    addressRegion: "NSW",
    postalCode: "2747",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: store.map.lat,
    longitude: store.map.lng,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: String(store.rating),
    reviewCount: String(store.reviewCount),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-paper text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ticket focus:px-4 focus:py-3"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
