import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NavLinks from "@/components/NavLinks";



const openSans = Open_Sans({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: {
    default: 'Sacrament Meeting Planner',
    template: '%s | Sacrament Meeting Planner',
  },
  description:
    'Plan, manage, and review sacrament meeting agendas.',
};


export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body className={`${openSans.className} flex min-h-screen flex-col bg-gray-50 text-gray-900`}>
        <Header />

        <NavLinks />

        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}