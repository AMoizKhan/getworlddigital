import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
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
  title: {
    default: "GetWorldDigital",
    template: "%s | GetWorldDigital",
  },
  description:
    "GetWorldDigital — digital agency for web, mobile, design, and marketing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-[#f5f8ff] text-[#0b1533]">
        {/* Unified fixed site-wide background across all pages */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden"
        >
          <Image
            src="/brand/site-bg.webp"
            alt=""
            fill
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <Header />
        <main className="relative z-0 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
