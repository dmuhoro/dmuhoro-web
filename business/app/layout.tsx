import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { BUSINESS_NAME, SITE_URL } from "@/app/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BUSINESS_NAME} — Software Studio`,
  description:
    "Production software for African businesses that can't afford to get it wrong. We design and build scheduling, payments, records, and customer engagement systems.",
  openGraph: {
    title: `${BUSINESS_NAME} — Software Studio`,
    description:
      "Production software for African businesses that can't afford to get it wrong. We design and build scheduling, payments, records, and customer engagement systems.",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} — Software Studio`,
    description:
      "Production software for African businesses that can't afford to get it wrong. We design and build scheduling, payments, records, and customer engagement systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
