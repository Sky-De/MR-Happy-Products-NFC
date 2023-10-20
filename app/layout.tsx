import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import Maintenance from "@/components/error/maintain";
import ErrorBoundary from "./ErroBoundry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mr-Happy",
  description: "Shop for the best",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary>
      <html lang="en">
        <body
          className={`${inter.className} h-[90vh] md:h-screen flex flex-col overflow-hidden`}
        >
          {children}
          <Header />
        </body>
      </html>
    </ErrorBoundary>
  );
}
