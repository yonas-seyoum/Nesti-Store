import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import CurrencyContextProvider from "./context/CurrencyContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Netsi Store",
  description: "Nesti Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CurrencyContextProvider>
          <div className="flex flex-col h-screen">
            <Navigation />
            <main className="flex-1 pb-14 md:pb-0 ">{children}</main>
          </div>
        </CurrencyContextProvider>
      </body>
    </html>
  );
}
