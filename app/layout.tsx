import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://lihongzheng.duolife.cc";

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "DuoLife",
  alternateName: ["Hongzheng Li", "lihongzheng.duolife.cc"],
  url: `${siteUrl}/`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "DuoLife",
  title: "Hongzheng Li · Homepage",
  description:
    "Hongzheng Li is a Ph.D. candidate at BUPT working on ML systems, large-scale recommendation, distributed GNN training, and efficient LLM training.",
  keywords: [
    "Hongzheng Li",
    "李鸿政",
    "ML Systems",
    "Recommendation Systems",
    "Distributed GNN",
    "LLM Training",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "576x576" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    siteName: "DuoLife",
    title: "Hongzheng Li · Homepage",
    description:
      "Research in ML systems, large-scale recommendation, distributed GNN training, and efficient LLM training.",
    type: "website",
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hongzheng Li · Homepage",
    description: "ML systems for large-scale learning.",
    images: ["/og.png"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
