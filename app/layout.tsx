import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "./ui/footer";
import NavWrapper from "./ui/navWrapper";
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
  title: "Hotel Booking App",
  description: "Built by TOMMY",
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
        <NavWrapper />
          <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
