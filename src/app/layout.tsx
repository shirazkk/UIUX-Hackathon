import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopHeader from "@/components/homepage/top_header";
import MiddleHeader from "@/components/homepage/middle_header";
import NavHeader from "@/components/homepage/nav_header";
import Footer from "@/components/homepage/footer";
import CartProviderWrapper from "@/components/cartProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProviderWrapper>
          <TopHeader />
          <MiddleHeader />
          <NavHeader />
          {children}
          <Footer />
        </CartProviderWrapper>
      </body>
    </html>
  );
}
