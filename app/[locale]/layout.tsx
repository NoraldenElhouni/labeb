import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/TheamProvider";
import Footer from "@/components/Footer";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LABEB AI",
  description:
    "LABEB AI is a Libyan tech startup specializing in smart solutions powered by artificial intelligence. We help organizations achieve secure and efficient digital transformation while protecting data privacy.",
  keywords:
    "LABEB AI, labeb, Libya AI startup, artificial intelligence solutions, digital transformation, AI consulting, AI training, oil leak detection, data privacy, corporate governance",
  authors: [{ name: "LABEB AI" }],
  creator: "LABEB AI",
  publisher: "LABEB AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://labebai.com", // <-- replace with your actual domain
    title: "LABEB AI - Smart AI Solutions for Digital Transformation in Libya",
    description:
      "Smart AI-powered solutions for organizations in Libya and the region. Services include AI consulting, oil leak detection, AI training, and digital transformation strategies.",
    siteName: "LABEB AI",
    images: [
      {
        url: "/og-image.jpg", // <-- replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "LABEB AI - Smart AI Solutions for Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LABEB AI - Smart AI Solutions for Digital Transformation in Libya",
    description:
      "LABEB AI is a Libyan tech startup providing AI-powered solutions, digital transformation strategies, and specialized training programs.",
    images: ["/og-image.jpg"], // <-- same as OG
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
  icons: {
    icon: "/favicon.ico",
  },
  category: "technology",
  metadataBase: new URL("https://labebai.com"), // <-- replace with your domain
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  // ✅ params is a Promise in async layouts
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const isRTL = locale === "ar";
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
