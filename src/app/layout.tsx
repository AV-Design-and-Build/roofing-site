import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import Script from "next/script";
import { AnalyticsEvents } from "@/components/analytics-events";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const headingFont = Bebas_Neue({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const bodyFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.businessName} | Roofing in ${siteConfig.primaryCity}, ${siteConfig.state}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.metaDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.businessName} | Roofing in ${siteConfig.primaryCity}, ${siteConfig.state}`,
    description: siteConfig.metaDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.businessName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/site/og-rise-roofing.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.businessName} roofing in ${siteConfig.primaryCity}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} | Roofing in ${siteConfig.primaryCity}, ${siteConfig.state}`,
    description: siteConfig.metaDescription,
    images: ["/site/og-rise-roofing.jpg"],
  },
  verification: siteConfig.tracking.googleSiteVerification
    ? {
        google: siteConfig.tracking.googleSiteVerification,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = siteConfig.tracking.gtmId;
  const ga4MeasurementId = siteConfig.tracking.ga4MeasurementId;

  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} bg-[#f7f4ee] text-slate-900 antialiased`}>
        <Script id="rise-roofing-gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');
          `}
        </Script>
        <Script id="rise-roofing-ga4-data-layer" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ga4MeasurementId}', { send_page_view: true });
          `}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            className="hidden"
            title="Google Tag Manager"
          />
        </noscript>
        <AnalyticsEvents />
        <div className="min-h-screen bg-[#f7f4ee]">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
