import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { BrandPreviewProvider } from "./context/BrandPreviewContext";
import Footer from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://varundigitalhub.vercel.app"),

  title:
    "Varun Digital Hub – Web Developer in Mumbai | Affordable Website Design Agency",
  description:
    "Helping Mumbai’s local businesses grow online with SEO-optimized, responsive websites. Web developer in Mumbai for coaching institutes, shops, and startups.",

  keywords: [
    "Web developer in Mumbai",
    "Website design for coaching institutes",
    "Affordable web design agency in Malad",
    "Local business website developer Mumbai",
    "SEO-friendly websites Mumbai",
    "Responsive web design India",
    "Varun Digital Hub",
  ],

  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },

  openGraph: {
    title:
      "Varun Digital Hub – Web Developer in Mumbai | Affordable Website Design Agency",
    description:
      "Helping Mumbai’s local businesses grow online with SEO-optimized, responsive websites.",
    url: "/",
    siteName: "Varun Digital Hub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Varun Digital Hub",
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
      "Helping Mumbai’s local businesses grow online with SEO-optimized, responsive websites.",
    images: ["/og-image.png"],
  },

  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <BrandPreviewProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </BrandPreviewProvider>
      </body>
    </html>
  );
}
