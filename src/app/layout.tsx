import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "Hot Tub Removal Wichita | Same-Day Spa & Jacuzzi Disposal",
  description: "Professional hot tub removal in Wichita, KS. Fast, affordable spa, jacuzzi, and above-ground tub hauling. Free estimates. Same-day service available.",
  keywords: "hot tub removal wichita, spa removal wichita ks, jacuzzi removal wichita, hot tub disposal wichita, above ground spa removal, hot tub haul away wichita",
  openGraph: {
    title: "Hot Tub Removal Wichita | Same-Day Spa & Jacuzzi Disposal",
    description: "Professional hot tub removal in Wichita, KS. Fast, affordable spa, jacuzzi, and above-ground tub hauling. Free estimates.",
    url: "https://wichitahottubremoval.com",
    siteName: "Wichita Hot Tub Removal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hot Tub Removal Wichita | Same-Day Spa & Jacuzzi Disposal",
    description: "Professional hot tub removal in Wichita, KS. Fast, affordable spa, jacuzzi, and above-ground tub hauling.",
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
  alternates: {
    canonical: "https://wichitahottubremoval.com",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <Header />
        {children}
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Wichita Hot Tub Removal",
              "description": "Professional hot tub, spa, and jacuzzi removal services in Wichita, Kansas and surrounding areas.",
              "url": "https://wichitahottubremoval.com",
              "telephone": "+1-316-402-2339",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Serving the Wichita Metro Area",
                "addressLocality": "Wichita",
                "addressRegion": "KS",
                "addressCountry": "US",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 37.6872,
                "longitude": -97.3301,
              },
              "areaServed": {
                "@type": "City",
                "name": "Wichita",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Kansas",
                },
              },
              "serviceType": [
                "Hot Tub Removal",
                "Spa Removal",
                "Jacuzzi Removal",
                "Above Ground Spa Removal",
                "Hot Tub Disposal",
                "Spa Hauling",
              ],
              "priceRange": "$$",
              "openingHours": ["Mo-Sa 07:00-19:00"],
              "paymentAccepted": "Cash, Credit Card, Check",
            }),
          }}
        />
      </body>
    </html>
  );
}
