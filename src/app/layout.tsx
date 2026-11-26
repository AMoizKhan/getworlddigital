import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ToastProvider } from "@/components/ui";
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
    "GetWorldDigital — AI automation, CRM workflows, and mobile application development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="relative flex min-h-full flex-col bg-[#f5f8ff] text-[#071a38]"
      >
        {/* Unified fixed site-wide background across all pages */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 select-none overflow-hidden"
        >
          <Image
            src="/brand/site-bg-theme.svg"
            alt=""
            fill
            unoptimized
            loading="eager"
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <ToastProvider>
          <Header />
          <main className="relative z-0 flex-1 pt-[76px]">{children}</main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
