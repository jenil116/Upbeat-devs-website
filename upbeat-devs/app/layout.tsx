import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollProgress from "@/components/shared/scroll-progress";
import BackToTop from "@/components/shared/back-to-top";
import CookieBanner from "@/components/shared/cookie-banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upbeatdevs.com"),
  title: {
    default: "Upbeat Devs | Shopify & WordPress E-commerce Agency",
    template: "%s | Upbeat Devs",
  },
  description:
    "Professional web development agency specializing in Shopify, Shopify Plus, WordPress, WooCommerce, and E-commerce Solutions. 4+ years experience, 100+ projects completed.",
  keywords: [
    "Shopify development",
    "Shopify Plus",
    "WordPress development",
    "WooCommerce",
    "E-commerce agency",
    "web development",
    "Shopify theme customization",
    "Shopify migration",
    "conversion rate optimization",
    "SEO optimization",
  ],
  authors: [{ name: "Upbeat Devs" }],
  creator: "Upbeat Devs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://upbeatdevs.com",
    title: "Upbeat Devs | Shopify & WordPress E-commerce Agency",
    description:
      "Professional web development agency specializing in Shopify, WordPress, and E-commerce solutions. Building high-converting online stores.",
    siteName: "Upbeat Devs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Upbeat Devs - E-commerce Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upbeat Devs | Shopify & WordPress E-commerce Agency",
    description:
      "Professional web development agency specializing in Shopify, WordPress, and E-commerce solutions.",
    images: ["/og-image.png"],
    creator: "@upbeatdevs",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Upbeat Devs",
              url: "https://upbeatdevs.com",
              logo: "https://upbeatdevs.com/logo.png",
              description:
                "Professional web development agency specializing in Shopify, WordPress, and E-commerce solutions.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "hello@upbeatdevs.com",
              },
              sameAs: [
                "https://twitter.com/upbeatdevs",
                "https://linkedin.com/company/upbeatdevs",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
