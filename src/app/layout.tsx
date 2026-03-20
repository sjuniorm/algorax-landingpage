import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlgoraX | Coming Soon",
  description: "AlgoraX — Elite Trading Algorithm Indicator. Coming Soon.",
  openGraph: {
    title: "AlgoraX | Coming Soon",
    description: "The elite trading algorithm indicator. Trade with clarity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full overflow-hidden">{children}</body>
    </html>
  );
}
