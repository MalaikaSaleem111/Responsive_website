import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navber from "./components/Navbar";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navber />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  );
}
