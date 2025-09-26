import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import React from "react";
import ScrollToTop from "@/components/ScrollToTop";
import { COMPANY_NAME } from "@/AppSettings";
import { JSX } from "react";
import { SearchProvider } from "@/contexts/SearchContext";
import SearchForm from "@/components/forms/searchForm";
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Web Design, Development, Hosting & SEO Services in South Africa",
        template: "%s • Web Design, Development, Hosting & SEO Services in South Africa",
    },
    description:`${COMPANY_NAME} is a leading software company in South Africa, offering website design, development, hosting, UI/UX design, SEO, and business email solutions. We create innovative, custom software and web solutions to help businesses in Durban and across South Africa succeed online.`,
    keywords: [
        // 🔑 Primary
        "software company South Africa",
        "web design South Africa",
        "website development South Africa",
        "SEO services South Africa",
        "website hosting South Africa",
        "UI/UX design South Africa",
        "business email solutions South Africa",
        "website maintenance South Africa",

        // 🛠 Secondary
        "Durban software company",
        "custom web development South Africa",
        "South Africa website hosting provider",
        "professional web design Durban",
        "SEO experts South Africa",
        "business emails for companies in SA",
        "UX/UI agency South Africa",
        "affordable web design South Africa",
        "software development Durban",

        // 🎯 Long-Tail
        "best software company in South Africa for web design",
        "website development and hosting services in South Africa",
        "SEO and digital marketing solutions in Durban",
        "UI/UX design services for businesses in South Africa",
        "reliable business email hosting in South Africa",
        "custom software and website solutions in Durban",
        "website maintenance and support services SA",
        "affordable SEO packages South Africa",
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

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>): JSX.Element {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <SearchProvider>
                        <NavBar />
                        <SearchForm />
                        <main className="flex-grow flex items-center justify-center dark:bg-[#161618] dark:text-white pt-16">
                            {children}
                        </main>
                        <Footer />
                        <ScrollToTop />
                        <Toaster />
                    </SearchProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
