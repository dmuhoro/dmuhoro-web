import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL } from "@/app/config";
import { contact } from "@/app/contact";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Daniel Muhoro",
  jobTitle: "Full-stack Engineer & Systems Architect",
  url: SITE_URL,
  sameAs: [contact.github, contact.linkedin].filter(Boolean),
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Daniel Muhoro — Full-stack Engineer & Systems Architect",
  description:
    "Self-taught engineer designing and shipping production software solo — from database schema to deployed system — for African SMEs, clinics, and cross-border payment rails.",
  openGraph: {
    title: "Daniel Muhoro — Full-stack Engineer & Systems Architect",
    description:
      "Self-taught engineer designing and shipping production software solo — from database schema to deployed system — for African SMEs, clinics, and cross-border payment rails.",
    url: SITE_URL,
    siteName: "Daniel Muhoro",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Muhoro — Full-stack Engineer & Systems Architect",
    description:
      "Self-taught engineer designing and shipping production software solo — from database schema to deployed system — for African SMEs, clinics, and cross-border payment rails.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  );
}
