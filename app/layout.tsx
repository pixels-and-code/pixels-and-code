import type { Metadata } from "next";
import { Archivo, Archivo_Black, Space_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

// Body copy
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  adjustFontFallback: true, // Generates size-adjust to reduce CLS
  fallback: ["system-ui", "sans-serif"],
});

// Headings and logo
const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo-black",
  weight: "400",
  adjustFontFallback: true,
  fallback: ["Impact", "sans-serif"],
});

// Labels, nav, buttons, tags
const spaceMono = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
  weight: ["400", "700"],
  adjustFontFallback: true,
  fallback: ["ui-monospace", "monospace"],
});

// Applies the stored theme before first paint. Dark is the default.
const themeScript = `(function(){try{if(localStorage.getItem("theme")!=="light"){document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})()`;

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
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${archivoBlack.variable} ${spaceMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
      <body className="min-h-screen overflow-x-hidden font-sans antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-fill focus:px-5 focus:py-2.5 focus:font-mono focus:text-[13px] focus:uppercase focus:tracking-mono focus:text-onfill focus:outline-none"
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
