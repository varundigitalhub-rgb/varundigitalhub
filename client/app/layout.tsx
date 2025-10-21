import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Varun Digital Hub – Web Developer in Mumbai | Affordable Website Design Agency",
  description:
    "Helping Mumbai’s local businesses grow online with SEO-optimized, responsive websites. Web developer in Mumbai for coaching institutes, shops, and startups. Affordable web design agency in Malad.",
  keywords: [
    "Web developer in Mumbai",
    "Website design for coaching institutes",
    "Affordable web design agency in Malad",
    "Local business website developer Mumbai",
    "SEO-friendly websites Mumbai",
    "Responsive web design India",
    "Varun Digital Hub",
    "Business Website",
    "E-Commerce",
    "Web Agency Mumbai",
  ],
  openGraph: {
    title:
      "Varun Digital Hub – Web Developer in Mumbai | Affordable Website Design Agency",
    description:
      "Helping Mumbai’s local businesses grow online with SEO-optimized, responsive websites. Web developer in Mumbai for coaching institutes, shops, and startups.",
    url: "https://varun-digital-hub.vercel.app",
    siteName: "Varun Digital Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Varun Digital Hub Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Varun Digital Hub – Web Developer in Mumbai | Affordable Website Design Agency",
    description:
      "Helping Mumbai’s local businesses grow online with SEO-optimized, responsive websites. Web developer in Mumbai for coaching institutes, shops, and startups.",
    site: "@varundigitalhub",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://varun-digital-hub.vercel.app",
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
        <meta name="google-site-verification" content="NliTYcCeDvS7UuVb18BSYJxKOmsDK3bXl78DrjMKo4k" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6D28D9" />

        <link
          rel="icon"
          href="/varun-digital-hub-logo.png"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/logo_digital_hub.png" />

        <link
          rel="preload"
          href="/varun-digital-hub-logo.png"
          as="image"
          type="image/png"
        />
        <link rel="preload" href="/h-bg2.jpg" as="image" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Varun Digital Hub",
              description:
                "Affordable web design agency in Mumbai, specializing in SEO-optimized websites for local businesses, coaching institutes, and startups.",
              url: "https://varun-digital-hub.vercel.app",
              telephone: "+91-9372787178",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Malad West",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                postalCode: "400064",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.1865",
                longitude: "72.8365",
              },
              openingHours: "Mo-Fr 09:00-18:00",
              sameAs: ["https://wa.me/919372787178"],
              serviceType: "Web Development, SEO, Website Design",
              areaServed: "Mumbai, India",
            }),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        <meta
          name="google-site-verification"
          content="YOUR_SEARCH_CONSOLE_VERIFICATION_CODE"
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <header role="banner">
          <Navbar />
        </header>
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
