import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "700"],
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-white focus:outline-none"
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
