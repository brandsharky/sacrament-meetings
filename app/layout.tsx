import type { Metadata, Viewport } from "next";
import { Open_Sans, Lora } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavLinks from "@/components/NavLinks";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "Sacrament Meeting Planner",
    template: "%s | Sacrament Meeting Planner",
  },
  description: "Plan, manage, and review sacrament meeting agendas.",
};

export const viewport: Viewport = {
  themeColor: "#faf6ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${lora.variable} flex min-h-screen flex-col bg-background font-sans text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-sage-700 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>

        <div className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur print:hidden">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
            <Header />
            <NavLinks />
          </div>
        </div>

        <main
          id="main-content"
          className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12"
        >
          {children}
        </main>

        <div className="mt-auto border-t border-border bg-surface print:hidden">
          <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}