import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "The Global Chauffeur Service | Blacklane",
  description:
    "Book luxury chauffeur services, airport transfers, by-the-hour hire, and city-to-city rides with professional vetted chauffeurs worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0F1319] text-white antialiased selection:bg-[#0F63BD] selection:text-white">
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
