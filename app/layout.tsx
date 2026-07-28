import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duolife.cc"),
  title: "Hongzheng Li · Homepage",
  description:
    "Hongzheng Li is a Ph.D. candidate at BUPT working on ML systems, large-scale recommendation, distributed GNN training, and efficient LLM inference.",
  keywords: [
    "Hongzheng Li",
    "李鸿政",
    "ML Systems",
    "Recommendation Systems",
    "Distributed GNN",
    "LLM Inference",
  ],
  openGraph: {
    title: "Hongzheng Li · Homepage",
    description:
      "Research in ML systems, large-scale recommendation, distributed GNN training, and efficient LLM inference.",
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
      <body className={geistSans.variable}>{children}</body>
    </html>
  );
}
