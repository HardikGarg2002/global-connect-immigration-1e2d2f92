import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Global Connect Immigration - Canadian Immigration Services",
  description: "Expert Canadian immigration services. Licensed RCIC providing guidance for Express Entry, Provincial Nominee Programs, Family Sponsorship, Work Permits, Study Permits, and more.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col relative">
            <AnimatedBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
