import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Intent â€” Wallet Infrastructure Without the Friction",
  description:
    "Intent helps teams abstract fees, reduce onboarding friction, and ship smoother wallet and payment experiences for real users.",
  openGraph: {
    title: "Intent â€” Wallet Infrastructure Without the Friction",
    description:
      "Intent helps teams abstract fees, reduce onboarding friction, and ship smoother wallet and payment experiences for real users.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}

