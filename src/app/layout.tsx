import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Srushti Adake — Product Designer Portfolio",
  description:
    "Product Designer Portfolio — UX Research, AI-powered design, and design systems. Previously at Splunk, CBRE, and Capgemini. MS HCI at UT Austin.",
  keywords: [
    "Srushti Adake",
    "Product Designer",
    "UX Designer",
    "UX Researcher",
    "AI Design",
    "Design Systems",
    "UT Austin",
    "Portfolio",
  ],
  authors: [{ name: "Srushti Adake" }],
  icons: {
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "6DUlzHP7i45zPz6ngeqZbS2rS0joCX6ty2_R6ENL_hk",
  },
  openGraph: {
    title: "Srushti Adake — Product Designer Portfolio",
    description:
      "Product Designer Portfolio — UX Research, AI-powered design, and design systems. Previously at Splunk, CBRE, and Capgemini. MS HCI at UT Austin.",
    url: "https://srushti-adake.vercel.app",
    siteName: "Srushti Adake Portfolio",
    type: "website",
    images: [
      {
        url: "https://srushti-adake.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Srushti Adake — Product Designer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Srushti Adake — Product Designer Portfolio",
    description:
      "Product Designer Portfolio — UX Research, AI-powered design, and design systems. Previously at Splunk, CBRE, and Capgemini. MS HCI at UT Austin.",
    images: ["https://srushti-adake.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
