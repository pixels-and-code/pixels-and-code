import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "700"],
  adjustFontFallback: true, // Generates size-adjust to reduce CLS
  fallback: ["Georgia", "serif"], // Matches Tailwind config
});

export const metadata: Metadata = {
  title: "Pixels and Code | Frontend Engineering & Design Systems Consultant",
  description:
    "Specialising in React, React Native, and scalable UI architecture for startups and scale-ups. 15+ years building production applications.",
  keywords: [
    "frontend engineering",
    "design systems",
    "React",
    "React Native",
    "TypeScript",
    "consultant",
    "UI architecture",
  ],
  authors: [{ name: "Dan Cork" }],
  metadataBase: new URL("https://pixels-and-code.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pixels and Code | Frontend Engineering & Design Systems Consultant",
    description:
      "Specialising in React, React Native, and scalable UI architecture for startups and scale-ups.",
    url: "https://pixels-and-code.co.uk",
    siteName: "Pixels and Code",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixels and Code | Frontend Engineering & Design Systems Consultant",
    description:
      "Specialising in React, React Native, and scalable UI architecture for startups and scale-ups.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Pixels and Code",
              url: "https://pixels-and-code.co.uk",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Pixels and Code",
              description:
                "Frontend Engineering & Design Systems Consultant specialising in React, React Native, and scalable UI architecture.",
              url: "https://pixels-and-code.co.uk",
              founder: {
                "@type": "Person",
                name: "Dan Cork",
                jobTitle: "Frontend Engineering & Design Systems Consultant",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Folkestone",
                  addressCountry: "GB",
                },
                knowsAbout: [
                  "React",
                  "React Native",
                  "TypeScript",
                  "Design Systems",
                  "Frontend Architecture",
                  "Web Components",
                ],
              },
              areaServed: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  addressCountry: "GB",
                },
                description: "Remote worldwide, hybrid in UK",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
