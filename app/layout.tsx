import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React, { ReactNode } from "react";
import ScrollToTop from "@/components/ScrollToTop";
import { JSX } from "react";
import { SearchProvider } from "@/contexts/SearchContext";
import SearchForm from "@/components/forms/searchForm";
import { Toaster } from "@/components/ui/sonner";
import AppSettings from "@/Oceanoftech.Business/ConfigurationBusiness/AppSettings";
import Twak from "@/components/Twak";
import SetScrollToTop from "@/components/SetScrollToTop";
import GoogleTag from "@/components/GoogleTag";
import { Instrument_Sans } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import { Analytics } from "@vercel/analytics/next"

const instrument_Sans: NextFont = Instrument_Sans({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Web Design, Development, Hosting & SEO Services in South Africa",
    template:
      "%s • Web Design, Development, Hosting & SEO Services in South Africa",
  },
  description: AppSettings.SITE_DESCRIPTION,
  keywords: [
    // 🔑 Primary Keywords (High Volume)
    "software development company South Africa",
    "web development Durban",
    "custom software solutions South Africa",
    "web design company Durban",
    "SEO services South Africa",
    "website design and development Durban",
    "software company Durban",
    "digital solutions South Africa",

    // 🛠 Secondary Keywords (Service-Specific)
    "custom web application development South Africa",
    "mobile app development Durban",
    "e-commerce website development South Africa",
    "business website design Durban",
    "cloud hosting solutions South Africa",
    "UI UX design agency Durban",
    "professional email hosting South Africa",
    "website maintenance services Durban",
    "responsive web design South Africa",
    "WordPress development Durban",

    // 📍 Local SEO Keywords
    "software developers Durban",
    "web design agency KZN",
    "Durban tech company",
    "website development Umhlanga",
    "SEO company Durban",
    "KwaZulu-Natal software solutions",
    "eThekwini web development",
    "software company near me Durban",

    // 🎯 Long-Tail Keywords (High Intent)
    "affordable web design for small business South Africa",
    "best software development company in Durban",
    "custom business software solutions South Africa",
    "professional SEO services for South African businesses",
    "startup website development package Durban",
    "enterprise software development South Africa",
    "website redesign services Durban",
    "full stack web development South Africa",
    "secure business email hosting Durban",
    "ongoing website support and maintenance SA",

    // 💼 Industry/Client-Specific
    "software solutions for SMEs South Africa",
    "B2B web development Durban",
    "retail software development South Africa",
    "healthcare website design Durban",
    "fintech software solutions South Africa",
    "hospitality website development Durban",

    // 🌍 International Reach
    "South African software company for international clients",
    "offshore software development South Africa",
    "African tech solutions provider",
    "outsource web development to South Africa",

    // ⚡ Technology-Specific
    "React web development South Africa",
    "Next.js development Durban",
    "Node.js developers South Africa",
    "API development and integration Durban",
    "headless CMS development South Africa",
    "progressive web apps Durban",

    // 🔍 Problem/Solution Keywords
    "increase website traffic South Africa",
    "improve search engine rankings Durban",
    "digital transformation services South Africa",
    "website speed optimization Durban",
    "mobile-friendly website design South Africa",
    "business automation software Durban",

    // 💰 Transactional Keywords
    "web design quotes South Africa",
    "software development cost Durban",
    "website package prices South Africa",
    "get SEO consultation Durban",
    "request website proposal South Africa",

    // 🏆 Reputation Keywords
    "top rated web design company Durban",
    "best software developers South Africa",
    "trusted web development agency KZN",
    "award winning digital agency South Africa",
  ],
  openGraph: {
    type: "website",
    url: "https://rise.co.za",
    title: "Rise | Web Design, Hosting & SEO Services in South Africa",
    description:
      "Rise is a leading South African software company offering website design, development, hosting, UI/UX, SEO, and business email solutions.",
    siteName: "Rise",
    images: [
      {
        url: "https://rise.co.za/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rise - Web Design, Hosting & SEO in South Africa",
      },
    ],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise • Web Design, Hosting & SEO Services in South Africa",
    description:
      "Rise is a South African software company providing web design, hosting, SEO, UI/UX, and business email solutions to help businesses thrive online.",
    images: ["https://rise.co.za/og-image.jpg"],
    creator: "@rise_za",
  },
};

const RootLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  const shouldRenderTwak: boolean =
    process.env.NODE_ENV === AppSettings.NODE_ENVS.PRODUCTION;
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${instrument_Sans.className} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SearchProvider>
            <NavBar />
            <SearchForm />
            <main className="flex-grow flex items-center justify-center bg-[#fff] dark:bg-[#161618] dark:text-white pt-16">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <Toaster />
            <SetScrollToTop />
          </SearchProvider>
        </ThemeProvider>
        {shouldRenderTwak && <Twak />}
        <GoogleTag />
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
