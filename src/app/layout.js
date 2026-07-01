import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://bayzid-dev.vercel.app/"), 
  title: "Bayzid Hasan | Frontend Developer",
  description:
    "Portfolio of Bayzid Hasan — a frontend developer specializing in React, Next.js, and modern, responsive web applications.",
  keywords: [
    "Bayzid Hasan",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Bayzid Hasan" }],
  openGraph: {
    title: "Bayzid Hasan | Frontend Developer",
    description:
      "Portfolio showcasing projects, skills, and my journey as a frontend developer.",
    url: "https://bayzid-dev.vercel.app/", 
    siteName: "Bayzid Hasan Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayzid Hasan | Frontend Developer",
    description:
      "Portfolio showcasing projects, skills, and my journey as a frontend developer.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <Analytics></Analytics>
        <SpeedInsights></SpeedInsights>
      </body>
    </html>
  );
}
