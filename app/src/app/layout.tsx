import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "SVBG GmbH - Fuhrparkmanagement & KFZ-Vermietung",
  description: "Professionelles Fuhrparkmanagement und KFZ-Vermietung. Vertrauen Sie auf unsere Expertise für Ihren Fuhrpark.",
  keywords: "Fuhrparkmanagement, KFZ-Vermietung, Autovermietung, Flottenmanagement, Wien, Österreich",
  authors: [{ name: "SVBG GmbH" }],
  creator: "SVBG GmbH",
  publisher: "SVBG GmbH",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://svbg.at",
    title: "SVBG GmbH - Fuhrparkmanagement & KFZ-Vermietung",
    description: "Professionelles Fuhrparkmanagement und KFZ-Vermietung. Vertrauen Sie auf unsere Expertise für Ihren Fuhrpark.",
    siteName: "SVBG GmbH",
  },
  twitter: {
    card: "summary_large_image",
    title: "SVBG GmbH - Fuhrparkmanagement & KFZ-Vermietung",
    description: "Professionelles Fuhrparkmanagement und KFZ-Vermietung.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SVBG GmbH",
  "description": "Professionelles Fuhrparkmanagement und KFZ-Vermietung",
  "url": "https://svbg.at",
  "email": "office@svbg.at",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Matthäus Mayer-Gasse 18",
    "addressLocality": "Unterwaltersdorf",
    "postalCode": "2442",
    "addressCountry": "AT"
  },
  "foundingDate": "2023",
  "sameAs": [],
  "areaServed": {
    "@type": "Country",
    "name": "Österreich"
  },
  "serviceType": [
    "Fuhrparkmanagement",
    "KFZ-Vermietung",
    "Flottenmanagement"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
