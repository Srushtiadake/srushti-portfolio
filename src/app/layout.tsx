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
  title: "Srushti Adake — Product Designer",
  description:
    "Product Designer with 3+ years experience in UX Research, AI-powered design, and design systems. Previously at Splunk, CBRE, and Capgemini. MS HCI at UT Austin.",
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
  openGraph: {
    title: "Srushti Adake — Product Designer",
    description: "Product Designer with 3+ years experience. Previously at Splunk, CBRE, and Capgemini.",
    url: "https://srushti-adake.vercel.app",
    siteName: "Srushti Adake Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srushti Adake — Product Designer",
    description: "Product Designer with 3+ years experience. Previously at Splunk, CBRE, and Capgemini.",
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
