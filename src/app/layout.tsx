import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Hot Tub Removal Wichita | Same-Day Spa & Jacuzzi Disposal",
  description:
    "Professional hot tub removal in Wichita, KS. Fast, affordable spa, jacuzzi, and above-ground tub hauling. Free estimates. Same-day service available.",
  keywords:
    "hot tub removal wichita, spa removal wichita ks, jacuzzi removal wichita, hot tub disposal wichita, above ground spa removal, hot tub haul away wichita",
  metadataBase: new URL("https://wichitahottubremoval.com"),
  alternates: { canonical: "https://wichitahottubremoval.com/" },
  openGraph: {
    title: "Hot Tub Removal Wichita | Same-Day Spa & Jacuzzi Disposal",
    description:
      "Professional hot tub removal in Wichita, KS. Fast, affordable spa, jacuzzi, and above-ground tub hauling. Free estimates.",
    url: "https://wichitahottubremoval.com/",
    siteName: "Wichita Hot Tub Removal",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Tub Removal Wichita | Same-Day Spa & Jacuzzi Disposal",
    description:
      "Professional hot tub removal in Wichita, KS. Fast, affordable spa, jacuzzi, and above-ground tub hauling.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Wichita Hot Tub Removal",
  "description": "Professional hot tub, spa, and jacuzzi removal services in Wichita, Kansas and surrounding areas.",
  "url": "https://wichitahottubremoval.com",
  "telephone": "+1-316-402-2339",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Wichita",
    "addressRegion": "KS",
    "addressCountry": "US",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.6872,
    "longitude": -97.3301,
  },
  "areaServed": [
    { "@type": "City", "name": "Wichita" },
    { "@type": "City", "name": "Derby" },
    { "@type": "City", "name": "Andover" },
    { "@type": "City", "name": "Haysville" },
    { "@type": "City", "name": "Goddard" },
    { "@type": "City", "name": "Maize" },
    { "@type": "City", "name": "Park City" },
    { "@type": "City", "name": "Valley Center" },
    { "@type": "City", "name": "Bel Aire" },
    { "@type": "City", "name": "Mulvane" },
    { "@type": "City", "name": "Kechi" },
    { "@type": "City", "name": "Colwich" },
    { "@type": "City", "name": "Clearwater" },
    { "@type": "City", "name": "Rose Hill" },
    { "@type": "City", "name": "Sedgwick" },
  ],
  "serviceType": [
    "Hot Tub Removal",
    "Spa Removal",
    "Jacuzzi Removal",
    "Above Ground Spa Removal",
    "Hot Tub Disposal",
    "Spa Hauling",
  ],
  "openingHours": ["Mo-Sa 07:00-19:00"],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Check",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
